import type { StructuredContent } from '@wigtn/content-engine';
import type { TemplateSlug } from '@/lib/templates/types';
import { TEMPLATES } from '@/lib/templates/registry';
import { seedFor } from './seed';

/**
 * 기능 랩 전용 인메모리 스토어.
 *
 * Supabase 없이 모듈 로직을 그대로 돌리기 위한 mock 어댑터다. 상태는 서버
 * 프로세스 메모리에만 살고, 템플릿 slug마다 완전히 격리된다 — 한 템플릿에서
 * 만든 글이나 로그인 세션이 다른 템플릿에 새지 않는다.
 *
 * 주의: 프로세스가 죽으면 초기화된다(= 시드 상태로 복귀). 서버리스 다중
 * 인스턴스에서는 인스턴스별로 갈린다. 랩 용도로는 의도된 동작이다.
 */

export type LabGrade = 'guest' | 'member' | 'vip';

export type LabUser = {
  id: string;
  email: string;
  name: string;
  provider: string;
  grade: LabGrade;
  permissions: string[];
  createdAt: string;
};

export type LabGradeApplication = {
  id: string;
  userId: string;
  requestedGrade: LabGrade;
  /** auth-membership 의 GradeApplicationStatus 를 그대로 쓴다 */
  status: string;
  evidenceName: string | null;
  submittedAt: string;
};

export type LabSession = {
  userId: string;
  sessionId: string;
  /** verifyRecentTotp 가 소비하는 서명 검증 완료 claim 을 흉내낸다 */
  aal: 'aal1' | 'aal2';
  amr: Array<{ method: string; timestamp: number }>;
  signedInAt: string;
};

export type LabPost = {
  id: string;
  title: string;
  content: StructuredContent;
  authorId: string;
  status: 'draft' | 'published';
  createdAt: string;
};

export type LabAuditEntry = {
  id: string;
  tool: string;
  actorId: string;
  traceId: string;
  outcome: 'ok' | 'error';
  detail: string;
  at: string;
};

export type LabState = {
  users: LabUser[];
  applications: LabGradeApplication[];
  session: LabSession | null;
  posts: LabPost[];
  audit: LabAuditEntry[];
};

type LabStore = Map<TemplateSlug, LabState>;

const GLOBAL_KEY = Symbol.for('wigtn.lab.store');

function store(): LabStore {
  const globalScope = globalThis as unknown as Record<symbol, LabStore>;
  if (!globalScope[GLOBAL_KEY]) {
    globalScope[GLOBAL_KEY] = new Map();
  }
  return globalScope[GLOBAL_KEY];
}

export function isTemplateSlug(value: string): value is TemplateSlug {
  return TEMPLATES.some((template) => template.slug === value);
}

export function getState(slug: TemplateSlug): LabState {
  const current = store();
  let state = current.get(slug);
  if (!state) {
    state = seedFor(slug);
    current.set(slug, state);
  }
  return state;
}

export function resetState(slug: TemplateSlug): LabState {
  const fresh = seedFor(slug);
  store().set(slug, fresh);
  return fresh;
}

export function findUser(state: LabState, userId: string) {
  return state.users.find((user) => user.id === userId) ?? null;
}

export function currentUser(state: LabState) {
  return state.session ? findUser(state, state.session.userId) : null;
}

export function pushAudit(
  state: LabState,
  entry: Omit<LabAuditEntry, 'id' | 'at'>,
) {
  state.audit.unshift({
    ...entry,
    id: crypto.randomUUID(),
    at: new Date().toISOString(),
  });
  // 랩 화면에서 읽을 만큼만 유지한다
  state.audit.length = Math.min(state.audit.length, 50);
}
