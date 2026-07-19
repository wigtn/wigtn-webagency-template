import {
  BUILT_IN_OAUTH_PROVIDERS,
  enabledOAuthProviders,
  isBuiltInOAuthProvider,
  safeSameOriginPath,
  verifyRecentTotp,
  type StepUpResult,
  ALLOWED_GRADE_EVIDENCE_TYPES,
  MAX_GRADE_EVIDENCE_BYTES,
} from '@wigtn/auth-membership';
import type { TemplateSlug } from '@/lib/templates/types';
import {
  currentUser,
  findUser,
  getState,
  pushAudit,
  type LabGrade,
  type LabSession,
} from './store';

export const GRADE_ORDER: LabGrade[] = ['guest', 'member', 'vip'];

/**
 * 어떤 OAuth 공급자를 노출할지는 환경변수 하나로 결정된다 — 실제 모듈이 쓰는
 * 계약(콤마 구분 문자열)을 그대로 통과시켜, 오타나 미지원 공급자가 걸러지는지
 * 랩에서 눈으로 확인할 수 있다.
 */
export function labProviders() {
  const configured = enabledOAuthProviders(
    process.env.NEXT_PUBLIC_LAB_OAUTH_PROVIDERS,
  );
  return configured.length > 0 ? configured : [...BUILT_IN_OAUTH_PROVIDERS];
}

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

function claimsOf(session: LabSession) {
  return {
    sub: session.userId,
    aal: session.aal,
    amr: session.amr,
    session_id: session.sessionId,
  };
}

export function stepUpStatus(slug: TemplateSlug): StepUpResult {
  const state = getState(slug);
  if (!state.session) return { ok: false, reason: 'SESSION_REQUIRED' };
  return verifyRecentTotp(claimsOf(state.session));
}

export function signIn(
  slug: TemplateSlug,
  provider: string,
  email: string,
  name: string,
) {
  if (!isBuiltInOAuthProvider(provider)) {
    return { ok: false as const, error: `지원하지 않는 공급자입니다: ${provider}` };
  }
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail.includes('@')) {
    return { ok: false as const, error: '이메일 형식이 올바르지 않습니다.' };
  }

  const state = getState(slug);
  let user = state.users.find((candidate) => candidate.email === normalizedEmail);
  if (!user) {
    user = {
      id: crypto.randomUUID(),
      email: normalizedEmail,
      name: name.trim() || normalizedEmail.split('@')[0],
      provider,
      grade: 'guest',
      permissions: [],
      createdAt: new Date().toISOString(),
    };
    state.users.push(user);
  } else {
    user.provider = provider;
  }

  state.session = {
    userId: user.id,
    sessionId: crypto.randomUUID(),
    aal: 'aal1',
    amr: [{ method: 'oauth', timestamp: nowSeconds() }],
    signedInAt: new Date().toISOString(),
  };

  pushAudit(state, {
    tool: 'auth.signIn',
    actorId: user.id,
    traceId: state.session.sessionId,
    outcome: 'ok',
    detail: `${provider} 로그인 — ${user.email}`,
  });
  return { ok: true as const, user };
}

export function signOut(slug: TemplateSlug) {
  const state = getState(slug);
  state.session = null;
}

/** TOTP 2단계 인증 통과를 흉내낸다 → aal2 + 방금 찍힌 totp timestamp */
export function completeTotp(slug: TemplateSlug) {
  const state = getState(slug);
  if (!state.session) return { ok: false as const, error: '로그인이 필요합니다.' };
  state.session.aal = 'aal2';
  state.session.amr = [
    ...state.session.amr.filter((entry) => entry.method !== 'totp'),
    { method: 'totp', timestamp: nowSeconds() },
  ];
  return { ok: true as const };
}

/**
 * 랩 전용: TOTP 인증 시각을 20분 전으로 밀어 만료를 재현한다.
 * (모듈 계약상 기본 유효기간 10분 + skew 60초)
 */
export function expireTotp(slug: TemplateSlug) {
  const state = getState(slug);
  if (!state.session) return { ok: false as const, error: '로그인이 필요합니다.' };
  state.session.amr = state.session.amr.map((entry) =>
    entry.method === 'totp'
      ? { ...entry, timestamp: nowSeconds() - 20 * 60 }
      : entry,
  );
  return { ok: true as const };
}

export function applyForGrade(
  slug: TemplateSlug,
  requestedGrade: LabGrade,
  evidenceName: string,
  evidenceType: string,
  evidenceBytes: number,
) {
  const state = getState(slug);
  const user = currentUser(state);
  if (!user) return { ok: false as const, error: '로그인이 필요합니다.' };

  if (
    !ALLOWED_GRADE_EVIDENCE_TYPES.includes(
      evidenceType as (typeof ALLOWED_GRADE_EVIDENCE_TYPES)[number],
    )
  ) {
    return {
      ok: false as const,
      error: `허용되지 않는 증빙 형식입니다 (${ALLOWED_GRADE_EVIDENCE_TYPES.join(', ')}).`,
    };
  }
  if (evidenceBytes > MAX_GRADE_EVIDENCE_BYTES) {
    return {
      ok: false as const,
      error: `증빙 파일은 ${MAX_GRADE_EVIDENCE_BYTES / 1024 / 1024}MB 이하여야 합니다.`,
    };
  }
  if (GRADE_ORDER.indexOf(requestedGrade) <= GRADE_ORDER.indexOf(user.grade)) {
    return { ok: false as const, error: '현재 등급보다 높은 등급만 신청할 수 있습니다.' };
  }

  const existing = state.applications.find(
    (application) =>
      application.userId === user.id &&
      ['draft', 'submitted', 'under_review'].includes(application.status),
  );
  if (existing) {
    return { ok: false as const, error: '이미 심사 중인 신청이 있습니다.' };
  }

  state.applications.unshift({
    id: crypto.randomUUID(),
    userId: user.id,
    requestedGrade,
    status: 'submitted',
    evidenceName,
    submittedAt: new Date().toISOString(),
  });
  return { ok: true as const };
}

/** 로그인 후 돌아갈 경로 — 오픈 리다이렉트 방어는 모듈이 판정한다 */
export function resolveReturnPath(
  value: string | null | undefined,
  origin: string,
  fallback: string,
) {
  return safeSameOriginPath(value, origin, fallback);
}

export function describeSession(slug: TemplateSlug) {
  const state = getState(slug);
  const user = currentUser(state);
  return {
    user,
    session: state.session,
    stepUp: stepUpStatus(slug),
    applications: state.applications.filter(
      (application) => application.userId === user?.id,
    ),
    applicant: (userId: string) => findUser(state, userId),
  };
}
