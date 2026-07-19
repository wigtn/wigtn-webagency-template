'use server';

import { revalidatePath } from 'next/cache';
import type { JsonObject } from '@wigtn/backoffice-frame';
import type { TemplateSlug } from '@/lib/templates/types';
import { isTemplateSlug, resetState } from './store';
import {
  applyForGrade,
  completeTotp,
  expireTotp,
  signIn,
  signOut,
} from './auth';
import { createPost, validateRawContent } from './content';
import { runTool } from './admin';
import type { LabGrade } from './store';

/**
 * 폼에서 넘어온 값을 검증하고 어댑터로 넘기는 얇은 층.
 * 실패는 예외 대신 리다이렉트 없는 문자열 메시지로 돌려 화면에 그대로 띄운다.
 */

function slugOf(formData: FormData): TemplateSlug {
  const raw = String(formData.get('slug') ?? '');
  if (!isTemplateSlug(raw)) throw new Error(`unknown template: ${raw}`);
  return raw;
}

function refresh(formData: FormData) {
  const path = String(formData.get('path') ?? '/');
  revalidatePath(path, 'layout');
}

export type ActionState = { error?: string; notice?: string } | null;

export async function signInAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const slug = slugOf(formData);
  const result = signIn(
    slug,
    String(formData.get('provider') ?? ''),
    String(formData.get('email') ?? ''),
    String(formData.get('name') ?? ''),
  );
  refresh(formData);
  return result.ok
    ? { notice: `${result.user.name} 님으로 로그인했습니다.` }
    : { error: result.error };
}

export async function signOutAction(formData: FormData) {
  signOut(slugOf(formData));
  refresh(formData);
}

export async function completeTotpAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = completeTotp(slugOf(formData));
  refresh(formData);
  return result.ok
    ? { notice: 'TOTP 재인증 완료 — 고위험 작업이 열렸습니다.' }
    : { error: result.error };
}

export async function expireTotpAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = expireTotp(slugOf(formData));
  refresh(formData);
  return result.ok
    ? { notice: 'TOTP 인증 시각을 20분 전으로 밀었습니다. 이제 만료로 판정됩니다.' }
    : { error: result.error };
}

export async function applyGradeAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const slug = slugOf(formData);
  const bytes = Number(formData.get('evidenceBytes') ?? 0);
  const result = applyForGrade(
    slug,
    String(formData.get('requestedGrade') ?? 'member') as LabGrade,
    String(formData.get('evidenceName') ?? 'evidence.pdf'),
    String(formData.get('evidenceType') ?? 'application/pdf'),
    Number.isFinite(bytes) ? bytes : 0,
  );
  refresh(formData);
  return result.ok
    ? { notice: '등급 신청이 접수되었습니다. 어드민 탭에서 승인해 보세요.' }
    : { error: result.error };
}

export async function createPostAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const slug = slugOf(formData);
  const result = createPost(
    slug,
    String(formData.get('title') ?? ''),
    String(formData.get('body') ?? ''),
  );
  refresh(formData);
  return result.ok
    ? { notice: `초안 "${result.post.title}" 이 생성되었습니다.` }
    : { error: result.error };
}

export async function validateContentAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const result = validateRawContent(String(formData.get('raw') ?? ''));
  if (!result.ok) return { error: result.error };
  return {
    notice: `블록 ${result.blocks}개 · 살균 결과: ${result.html}`,
  };
}

export async function runToolAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const slug = slugOf(formData);
  const name = String(formData.get('tool') ?? '');
  const version = Number(formData.get('version') ?? 1);
  const rawInput = String(formData.get('input') ?? '{}');
  const idempotencyKey = String(formData.get('idempotencyKey') ?? '');

  let input: JsonObject;
  try {
    input = JSON.parse(rawInput) as JsonObject;
  } catch {
    return { error: '입력 JSON 을 파싱할 수 없습니다.' };
  }

  const outcome = await runTool(slug, name, version, input, { idempotencyKey });
  refresh(formData);

  if (outcome.ok) {
    return {
      notice: `${outcome.tool} 성공 — ${JSON.stringify(outcome.output)}`,
    };
  }
  return {
    error: `${outcome.code}: ${outcome.message}${
      outcome.details ? ` (${outcome.details})` : ''
    }`,
  };
}

export async function resetLabAction(formData: FormData) {
  resetState(slugOf(formData));
  refresh(formData);
}
