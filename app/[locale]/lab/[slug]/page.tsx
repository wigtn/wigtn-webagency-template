import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { TEMPLATE_MAP } from '@/lib/templates/registry';
import { LabCard, LabShell } from '@/components/lab/LabShell';
import { getState, isTemplateSlug, currentUser } from '@/lib/lab/store';
import { stepUpStatus } from '@/lib/lab/auth';
import { registryFor, screenConfigFor } from '@/lib/lab/admin';
import { labPath } from '@/lib/lab/path';

export const dynamic = 'force-dynamic';

export default async function LabOverviewPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isTemplateSlug(slug)) notFound();

  const template = TEMPLATE_MAP[slug];
  const state = getState(slug);
  const user = currentUser(state);
  const path = labPath(locale, `/lab/${slug}`);

  const manifests = registryFor(slug).manifests();

  let screenConfigError: string | null = null;
  let screenCount = 0;
  try {
    screenCount = screenConfigFor(slug).screens.length;
  } catch (error) {
    screenConfigError = error instanceof Error ? error.message : String(error);
  }

  const stats = [
    { label: '회원', value: state.users.length },
    { label: '글', value: state.posts.length },
    { label: '등급 신청', value: state.applications.length },
    { label: '감사 로그', value: state.audit.length },
  ];

  return (
    <LabShell
      template={template}
      path={path}
      active=""
      user={user}
      stepUp={stepUpStatus(slug)}
    >
      <LabCard
        title="이 템플릿의 현재 상태"
        description="템플릿마다 독립된 인메모리 상태를 가집니다. 헤더의 '데이터 초기화'로 시드 상태로 되돌립니다."
      >
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs text-[var(--lab-muted)]">{stat.label}</dt>
              <dd className="mt-1 text-2xl font-semibold">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </LabCard>

      <LabCard
        title="등록된 어드민 툴"
        description="backoffice-frame 레지스트리가 매니페스트를 검증한 결과입니다. 위험도 high 인 툴은 최근 TOTP 재인증과 멱등키를 요구합니다."
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-xs">
            <thead className="text-[var(--lab-muted)]">
              <tr>
                <th className="pb-2 font-medium">툴</th>
                <th className="pb-2 font-medium">종류</th>
                <th className="pb-2 font-medium">위험도</th>
                <th className="pb-2 font-medium">멱등성</th>
                <th className="pb-2 font-medium">권한</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {manifests.map((manifest) => (
                <tr key={manifest.name} className="border-t border-[var(--lab-border)]">
                  <td className="py-2">
                    {manifest.name}@{manifest.version}
                  </td>
                  <td className="py-2">{manifest.kind}</td>
                  <td className="py-2">{manifest.risk}</td>
                  <td className="py-2">{manifest.idempotency}</td>
                  <td className="py-2 text-[var(--lab-muted)]">
                    {manifest.permissions.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-[var(--lab-muted)]">
          화면 구성 검증:{' '}
          {screenConfigError ? (
            <span className="text-red-400">실패 — {screenConfigError}</span>
          ) : (
            <span className="text-emerald-400">
              통과 — 화면 {screenCount}개
            </span>
          )}
        </p>
      </LabCard>

      <LabCard title="어디부터 볼까요">
        <ul className="space-y-2 text-sm">
          <li>
            <Link href={`/lab/${slug}/account`} className="underline">
              계정 · 등급
            </Link>{' '}
            <span className="text-[var(--lab-muted)]">
              — 로그인하고 TOTP 재인증을 통과시킨 뒤 등급을 신청합니다.
            </span>
          </li>
          <li>
            <Link href={`/lab/${slug}/posts`} className="underline">
              콘텐츠
            </Link>{' '}
            <span className="text-[var(--lab-muted)]">
              — 글을 쓰고 커서 페이지네이션과 HTML 살균 결과를 확인합니다.
            </span>
          </li>
          <li>
            <Link href={`/lab/${slug}/admin`} className="underline">
              어드민
            </Link>{' '}
            <span className="text-[var(--lab-muted)]">
              — 툴을 실행해 권한·재인증·멱등키 거절을 눈으로 봅니다.
            </span>
          </li>
        </ul>
      </LabCard>
    </LabShell>
  );
}
