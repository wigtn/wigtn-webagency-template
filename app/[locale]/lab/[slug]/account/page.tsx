import { notFound } from 'next/navigation';
import { TEMPLATE_MAP } from '@/lib/templates/registry';
import { LabCard, LabShell } from '@/components/lab/LabShell';
import { LabField, LabForm, labInputClass } from '@/components/lab/LabForm';
import { currentUser, getState, isTemplateSlug } from '@/lib/lab/store';
import {
  GRADE_ORDER,
  labProviders,
  resolveReturnPath,
  stepUpStatus,
} from '@/lib/lab/auth';
import {
  applyGradeAction,
  completeTotpAction,
  expireTotpAction,
  signInAction,
} from '@/lib/lab/actions';
import { labPath } from '@/lib/lab/path';
import { ALLOWED_GRADE_EVIDENCE_TYPES } from '@wigtn/auth-membership';

export const dynamic = 'force-dynamic';

const REDIRECT_SAMPLES = [
  '/account/orders',
  'https://evil.example.com/steal',
  '//evil.example.com',
  'not-a-path',
];

export default async function LabAccountPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isTemplateSlug(slug)) notFound();

  const template = TEMPLATE_MAP[slug];
  const state = getState(slug);
  const user = currentUser(state);
  const stepUp = stepUpStatus(slug);
  const path = labPath(locale, `/lab/${slug}`);
  const origin = 'https://demo.wigtn.com';

  const myApplications = state.applications.filter(
    (application) => application.userId === user?.id,
  );

  return (
    <LabShell
      template={template}
      path={path}
      active="/account"
      user={user}
      stepUp={stepUp}
    >
      <LabCard
        title="OAuth 로그인"
        description="공급자 목록은 enabledOAuthProviders() 가 환경변수에서 파싱합니다. 모듈이 모르는 공급자는 걸러집니다."
      >
        <LabForm
          action={signInAction}
          slug={slug}
          path={path}
          submitLabel="로그인"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <LabField label="공급자">
              <select name="provider" className={labInputClass} defaultValue="google">
                {labProviders().map((provider) => (
                  <option key={provider} value={provider}>
                    {provider}
                  </option>
                ))}
              </select>
            </LabField>
            <LabField label="이메일">
              <input
                name="email"
                type="text"
                defaultValue="member@example.com"
                className={labInputClass}
              />
            </LabField>
            <LabField label="이름">
              <input name="name" type="text" className={labInputClass} />
            </LabField>
          </div>
        </LabForm>
      </LabCard>

      <LabCard
        title="단계 상승(step-up) 인증"
        description="verifyRecentTotp() 는 aal2 이면서 TOTP 인증이 10분 이내(±60초 skew)일 때만 통과시킵니다. 고위험 어드민 툴이 이 결과를 그대로 씁니다."
      >
        <p className="mb-4 text-sm">
          현재 판정:{' '}
          {stepUp.ok ? (
            <span className="text-emerald-400">
              통과 — session {stepUp.sessionId.slice(0, 8)}…
            </span>
          ) : (
            <span className="text-amber-400">거절 — {stepUp.reason}</span>
          )}
        </p>
        <div className="flex flex-wrap gap-6">
          <LabForm
            action={completeTotpAction}
            slug={slug}
            path={path}
            submitLabel="TOTP 인증 통과시키기"
          />
          <LabForm
            action={expireTotpAction}
            slug={slug}
            path={path}
            submitLabel="TOTP 만료시키기 (20분 전으로)"
          />
        </div>
      </LabCard>

      <LabCard
        title="회원 등급 신청"
        description={`증빙 형식과 용량은 모듈 상수(${ALLOWED_GRADE_EVIDENCE_TYPES.join(', ')} / 10MB)로 검증됩니다. 일부러 어긋난 값을 넣어 거절 메시지를 확인해 보세요.`}
      >
        <LabForm
          action={applyGradeAction}
          slug={slug}
          path={path}
          submitLabel="신청 제출"
        >
          <div className="grid gap-3 sm:grid-cols-4">
            <LabField label="희망 등급">
              <select
                name="requestedGrade"
                className={labInputClass}
                defaultValue="member"
              >
                {GRADE_ORDER.map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </LabField>
            <LabField label="증빙 파일명">
              <input
                name="evidenceName"
                defaultValue="receipt.pdf"
                className={labInputClass}
              />
            </LabField>
            <LabField label="MIME 타입">
              <input
                name="evidenceType"
                defaultValue="application/pdf"
                className={labInputClass}
              />
            </LabField>
            <LabField label="크기(byte)">
              <input
                name="evidenceBytes"
                type="number"
                defaultValue={512_000}
                className={labInputClass}
              />
            </LabField>
          </div>
        </LabForm>

        {myApplications.length > 0 ? (
          <ul className="mt-5 space-y-2 text-xs">
            {myApplications.map((application) => (
              <li
                key={application.id}
                className="flex items-center justify-between rounded-md border border-[var(--lab-border)] px-3 py-2"
              >
                <span>
                  {application.requestedGrade} 신청 · {application.evidenceName}
                </span>
                <span className="font-mono text-[var(--lab-muted)]">
                  {application.status}
                </span>
              </li>
            ))}
          </ul>
        ) : null}
      </LabCard>

      <LabCard
        title="로그인 후 복귀 경로 검증"
        description="safeSameOriginPath() 가 오픈 리다이렉트를 막습니다. 외부 origin 은 기본 경로로 접힙니다."
      >
        <table className="w-full text-left text-xs font-mono">
          <thead className="text-[var(--lab-muted)]">
            <tr>
              <th className="pb-2 font-medium">입력</th>
              <th className="pb-2 font-medium">판정 결과</th>
            </tr>
          </thead>
          <tbody>
            {REDIRECT_SAMPLES.map((sample) => (
              <tr key={sample} className="border-t border-[var(--lab-border)]">
                <td className="py-2 pr-4 break-all">{sample}</td>
                <td className="py-2 text-emerald-400">
                  {resolveReturnPath(sample, origin, `/lab/${slug}/account`)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </LabCard>
    </LabShell>
  );
}
