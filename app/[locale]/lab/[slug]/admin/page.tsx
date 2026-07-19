import { notFound } from 'next/navigation';
import { TEMPLATE_MAP } from '@/lib/templates/registry';
import { LabCard, LabShell } from '@/components/lab/LabShell';
import { LabField, LabForm, labInputClass } from '@/components/lab/LabForm';
import { currentUser, findUser, getState, isTemplateSlug } from '@/lib/lab/store';
import { stepUpStatus } from '@/lib/lab/auth';
import { registryFor } from '@/lib/lab/admin';
import { runToolAction } from '@/lib/lab/actions';
import { labPath } from '@/lib/lab/path';

export const dynamic = 'force-dynamic';

export default async function LabAdminPage({
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
  const manifests = registryFor(slug).manifests();

  const pending = state.applications.filter((application) =>
    ['draft', 'submitted', 'under_review'].includes(application.status),
  );

  return (
    <LabShell
      template={template}
      path={path}
      active="/admin"
      user={user}
      stepUp={stepUp}
    >
      <LabCard
        title="현재 실행 컨텍스트"
        description="AdminToolRegistry.execute() 가 이 컨텍스트로 권한·재인증·멱등키를 판정합니다."
      >
        <dl className="grid gap-3 text-xs sm:grid-cols-3">
          <div>
            <dt className="text-[var(--lab-muted)]">actor</dt>
            <dd className="mt-1 font-mono">{user?.email ?? 'anonymous'}</dd>
          </div>
          <div>
            <dt className="text-[var(--lab-muted)]">permissions</dt>
            <dd className="mt-1 font-mono break-all">
              {user?.permissions.length ? user.permissions.join(', ') : '없음'}
            </dd>
          </div>
          <div>
            <dt className="text-[var(--lab-muted)]">stepUp.recentTotp</dt>
            <dd className="mt-1 font-mono">
              {stepUp.ok ? 'true' : `false (${stepUp.reason})`}
            </dd>
          </div>
        </dl>
        {!user?.permissions.length ? (
          <p className="mt-4 text-xs text-amber-400">
            지금 계정에는 어드민 권한이 없습니다. 계정 탭에서{' '}
            <span className="font-mono">owner@wigtn.com</span> 으로 로그인하면
            권한이 붙습니다. 권한 없는 상태로 실행해 PERMISSION_DENIED 를 먼저
            확인해 보는 것도 좋습니다.
          </p>
        ) : null}
      </LabCard>

      <LabCard
        title="툴 실행"
        description="입력 JSON 은 매니페스트의 inputSchema 로 AJV 검증됩니다. 스키마에 없는 키를 넣거나 uuid 형식을 깨뜨리면 INPUT_INVALID 가 납니다."
      >
        <LabForm
          action={runToolAction}
          slug={slug}
          path={path}
          submitLabel="실행"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            <LabField label="툴">
              <select name="tool" className={labInputClass} defaultValue="posts.list">
                {manifests.map((manifest) => (
                  <option key={manifest.name} value={manifest.name}>
                    {manifest.name} ({manifest.risk})
                  </option>
                ))}
              </select>
            </LabField>
            <LabField label="버전" hint="2 를 넣으면 TOOL_NOT_FOUND">
              <input
                name="version"
                type="number"
                defaultValue={1}
                className={labInputClass}
              />
            </LabField>
            <LabField label="멱등키" hint="high 위험 툴은 필수">
              <input
                name="idempotencyKey"
                placeholder="비워두면 IDEMPOTENCY_KEY_REQUIRED"
                className={labInputClass}
              />
            </LabField>
          </div>
          <LabField label="입력 JSON">
            <textarea
              name="input"
              rows={4}
              defaultValue={'{\n  "status": "all"\n}'}
              className={`${labInputClass} font-mono text-xs`}
            />
          </LabField>
        </LabForm>
      </LabCard>

      <LabCard
        title="심사 대기 중인 등급 신청"
        description="applicationId 를 members.grade.approve 툴 입력에 넣어 승인해 보세요. 고위험 툴이라 TOTP 재인증과 멱등키가 모두 필요합니다."
      >
        {pending.length === 0 ? (
          <p className="text-xs text-[var(--lab-muted)]">대기 중인 신청이 없습니다.</p>
        ) : (
          <ul className="space-y-2 text-xs">
            {pending.map((application) => (
              <li
                key={application.id}
                className="rounded-md border border-[var(--lab-border)] px-3 py-2"
              >
                <p className="font-mono break-all">{application.id}</p>
                <p className="mt-1 text-[var(--lab-muted)]">
                  {findUser(state, application.userId)?.email ?? '알 수 없음'} →{' '}
                  {application.requestedGrade} · {application.status}
                </p>
              </li>
            ))}
          </ul>
        )}
      </LabCard>

      <LabCard
        title="글 ID 목록"
        description="posts.publish · posts.purge 입력에 쓸 postId 입니다."
      >
        <ul className="space-y-1 text-xs font-mono">
          {state.posts.map((post) => (
            <li key={post.id} className="break-all">
              {post.id}{' '}
              <span className="text-[var(--lab-muted)]">
                — {post.title} ({post.status})
              </span>
            </li>
          ))}
          {state.posts.length === 0 ? (
            <li className="text-[var(--lab-muted)]">글이 없습니다.</li>
          ) : null}
        </ul>
      </LabCard>

      <LabCard
        title="감사 로그"
        description="모든 툴 매니페스트가 audit.mode = always 라, 성공과 실패가 모두 남습니다."
      >
        {state.audit.length === 0 ? (
          <p className="text-xs text-[var(--lab-muted)]">기록이 없습니다.</p>
        ) : (
          <ul className="space-y-2 text-xs">
            {state.audit.map((entry) => (
              <li
                key={entry.id}
                className="rounded-md border border-[var(--lab-border)] px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={
                      entry.outcome === 'ok'
                        ? 'text-emerald-400'
                        : 'text-red-400'
                    }
                  >
                    {entry.outcome === 'ok' ? '성공' : '실패'}
                  </span>
                  <span className="font-mono">{entry.tool}</span>
                  <span className="ml-auto text-[var(--lab-muted)]">
                    {entry.at.slice(11, 19)}
                  </span>
                </div>
                <p className="mt-1 break-all text-[var(--lab-muted)]">
                  {entry.detail}
                </p>
              </li>
            ))}
          </ul>
        )}
      </LabCard>
    </LabShell>
  );
}
