import {
  AdminToolError,
  AdminToolRegistry,
  validateAdminScreenConfig,
  type AdminExecutionContext,
  type AdminScreenConfig,
  type JsonObject,
} from '@wigtn/backoffice-frame';
import type { TemplateSlug } from '@/lib/templates/types';
import { currentUser, getState, pushAudit } from './store';
import { stepUpStatus } from './auth';
import { contentPlainText } from '@wigtn/content-engine';

/**
 * 템플릿별 어드민 툴 레지스트리.
 *
 * 핸들러가 해당 slug 의 인메모리 상태를 클로저로 잡기 때문에 레지스트리도
 * slug 마다 하나씩 만들어 캐시한다. 툴 4종은 backoffice-frame 의 정책 분기를
 * 최대한 넓게 밟도록 골랐다 — query/command, low/medium/high, idempotency
 * optional/required.
 */

const GLOBAL_KEY = Symbol.for('wigtn.lab.registries');

function cache(): Map<TemplateSlug, AdminToolRegistry> {
  const globalScope = globalThis as unknown as Record<
    symbol,
    Map<TemplateSlug, AdminToolRegistry>
  >;
  if (!globalScope[GLOBAL_KEY]) globalScope[GLOBAL_KEY] = new Map();
  return globalScope[GLOBAL_KEY];
}

function buildRegistry(slug: TemplateSlug) {
  const registry = new AdminToolRegistry();

  registry.register({
    manifest: {
      name: 'posts.list',
      version: 1,
      title: '글 목록',
      description: '초안과 공개 글을 모두 조회한다.',
      kind: 'query',
      inputSchema: {
        type: 'object',
        properties: {
          status: { type: 'string', enum: ['all', 'draft', 'published'] },
        },
        required: ['status'],
        additionalProperties: false,
      },
      outputSchema: {
        type: 'object',
        properties: {
          rows: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                status: { type: 'string' },
                excerpt: { type: 'string' },
                createdAt: { type: 'string' },
              },
              required: ['id', 'title', 'status', 'excerpt', 'createdAt'],
              additionalProperties: false,
            },
          },
        },
        required: ['rows'],
        additionalProperties: false,
      },
      permissions: ['admin.posts.read'],
      risk: 'low',
      idempotency: 'none',
      audit: { mode: 'always', action: 'posts.list', captureBeforeAfter: false },
      executionMode: 'sync',
    },
    privateAudit: { redactPaths: [] },
    execution: {
      handler: async (input) => {
        const state = getState(slug);
        const status = input.status as string;
        const rows = state.posts
          .filter((post) => status === 'all' || post.status === status)
          .map((post) => ({
            id: post.id,
            title: post.title,
            status: post.status,
            excerpt: contentPlainText(post.content).slice(0, 80),
            createdAt: post.createdAt,
          }));
        return { rows } as unknown as JsonObject;
      },
    },
  });

  registry.register({
    manifest: {
      name: 'posts.publish',
      version: 1,
      title: '글 공개',
      description: '초안을 공개 상태로 바꾼다.',
      kind: 'command',
      inputSchema: {
        type: 'object',
        properties: { postId: { type: 'string', format: 'uuid' } },
        required: ['postId'],
        additionalProperties: false,
      },
      outputSchema: {
        type: 'object',
        properties: {
          postId: { type: 'string' },
          status: { type: 'string' },
        },
        required: ['postId', 'status'],
        additionalProperties: false,
      },
      permissions: ['admin.posts.write'],
      risk: 'medium',
      idempotency: 'optional',
      audit: {
        mode: 'always',
        action: 'posts.publish',
        captureBeforeAfter: true,
      },
      executionMode: 'sync',
    },
    privateAudit: { redactPaths: [] },
    execution: {
      handler: async (input) => {
        const state = getState(slug);
        const post = state.posts.find(
          (candidate) => candidate.id === input.postId,
        );
        if (!post) throw new Error(`post not found: ${String(input.postId)}`);
        post.status = 'published';
        return { postId: post.id, status: post.status } as unknown as JsonObject;
      },
    },
  });

  registry.register({
    manifest: {
      name: 'posts.purge',
      version: 1,
      title: '글 영구 삭제',
      description: '글을 되돌릴 수 없게 삭제한다. 고위험 — 재인증이 필요하다.',
      kind: 'command',
      inputSchema: {
        type: 'object',
        properties: { postId: { type: 'string', format: 'uuid' } },
        required: ['postId'],
        additionalProperties: false,
      },
      outputSchema: {
        type: 'object',
        properties: {
          postId: { type: 'string' },
          deleted: { type: 'boolean' },
        },
        required: ['postId', 'deleted'],
        additionalProperties: false,
      },
      permissions: ['admin.posts.write'],
      risk: 'high',
      idempotency: 'required',
      audit: { mode: 'always', action: 'posts.purge', captureBeforeAfter: true },
      executionMode: 'sync',
      effects: ['db-write'],
    },
    privateAudit: { redactPaths: [] },
    execution: {
      handler: async (input) => {
        const state = getState(slug);
        const index = state.posts.findIndex(
          (candidate) => candidate.id === input.postId,
        );
        if (index >= 0) state.posts.splice(index, 1);
        return {
          postId: String(input.postId),
          deleted: index >= 0,
        } as unknown as JsonObject;
      },
    },
  });

  registry.register({
    manifest: {
      name: 'members.grade.approve',
      version: 1,
      title: '등급 신청 승인',
      description: '회원 등급 상향 신청을 승인한다. 고위험 — 재인증이 필요하다.',
      kind: 'command',
      inputSchema: {
        type: 'object',
        properties: { applicationId: { type: 'string', format: 'uuid' } },
        required: ['applicationId'],
        additionalProperties: false,
      },
      outputSchema: {
        type: 'object',
        properties: {
          applicationId: { type: 'string' },
          status: { type: 'string' },
          grade: { type: 'string' },
        },
        required: ['applicationId', 'status', 'grade'],
        additionalProperties: false,
      },
      permissions: ['admin.members.read', 'admin.members.grade.approve'],
      risk: 'high',
      idempotency: 'required',
      audit: {
        mode: 'always',
        action: 'members.grade.approve',
        captureBeforeAfter: true,
      },
      executionMode: 'sync',
      effects: ['db-write', 'notification-send'],
    },
    privateAudit: { redactPaths: ['/evidenceName'] },
    execution: {
      handler: async (input) => {
        const state = getState(slug);
        const application = state.applications.find(
          (candidate) => candidate.id === input.applicationId,
        );
        if (!application) {
          throw new Error(`application not found: ${String(input.applicationId)}`);
        }
        application.status = 'approved';
        const applicant = state.users.find(
          (user) => user.id === application.userId,
        );
        if (applicant) applicant.grade = application.requestedGrade;
        return {
          applicationId: application.id,
          status: application.status,
          grade: application.requestedGrade,
        } as unknown as JsonObject;
      },
    },
  });

  return registry;
}

export function registryFor(slug: TemplateSlug) {
  const registries = cache();
  let registry = registries.get(slug);
  if (!registry) {
    registry = buildRegistry(slug);
    registries.set(slug, registry);
  }
  return registry;
}

/** 화면 구성도 모듈이 검증한다 — 권한 누락·표현형 불일치는 여기서 잡힌다 */
export function screenConfigFor(slug: TemplateSlug): AdminScreenConfig {
  const config: AdminScreenConfig = {
    schemaVersion: 1,
    screens: [
      {
        id: 'posts',
        title: '콘텐츠',
        route: '/admin/posts',
        requiredPermissions: ['admin.posts.read', 'admin.posts.write'],
        blocks: [
          { tool: 'posts.list@1', presentation: 'data-table', input: { status: 'all' } },
          { tool: 'posts.publish@1', presentation: 'row-action' },
          { tool: 'posts.purge@1', presentation: 'command-form' },
        ],
      },
      {
        id: 'members',
        title: '회원',
        route: '/admin/members',
        requiredPermissions: ['admin.members.read', 'admin.members.grade.approve'],
        blocks: [
          { tool: 'members.grade.approve@1', presentation: 'command-form' },
        ],
      },
    ],
  };
  return validateAdminScreenConfig(registryFor(slug), config);
}

export type ToolRunOutcome =
  | { ok: true; tool: string; traceId: string; output: JsonObject }
  | { ok: false; tool: string; code: string; message: string; details?: string };

export async function runTool(
  slug: TemplateSlug,
  name: string,
  version: number,
  input: JsonObject,
  options: { idempotencyKey?: string } = {},
): Promise<ToolRunOutcome> {
  const state = getState(slug);
  const actor = currentUser(state);
  const stepUp = stepUpStatus(slug);
  const traceId = crypto.randomUUID();

  const context: AdminExecutionContext = {
    actorId: actor?.id ?? 'anonymous',
    claims: state.session
      ? ({
          sub: state.session.userId,
          aal: state.session.aal,
          session_id: state.session.sessionId,
        } as JsonObject)
      : {},
    permissions: new Set(actor?.permissions ?? []),
    traceId,
    idempotencyKey: options.idempotencyKey?.trim() || undefined,
    stepUp: {
      recentTotp: stepUp.ok,
      activeSession: Boolean(state.session),
    },
  };

  try {
    const result = await registryFor(slug).execute(name, version, input, context);
    pushAudit(state, {
      tool: `${name}@${version}`,
      actorId: context.actorId,
      traceId,
      outcome: 'ok',
      detail: JSON.stringify(result.output).slice(0, 200),
    });
    return { ok: true, tool: name, traceId, output: result.output };
  } catch (error) {
    const code =
      error instanceof AdminToolError ? error.code : 'HANDLER_FAILED';
    const message = error instanceof Error ? error.message : String(error);
    const details =
      error instanceof AdminToolError && error.details
        ? error.details
            .map((entry) => `${entry.instancePath || '/'} ${entry.message ?? ''}`)
            .join(', ')
        : undefined;
    pushAudit(state, {
      tool: `${name}@${version}`,
      actorId: context.actorId,
      traceId,
      outcome: 'error',
      detail: `${code}: ${message}`,
    });
    return { ok: false, tool: name, code, message, details };
  }
}
