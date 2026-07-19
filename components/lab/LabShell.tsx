import { Link } from '@/i18n/routing';
import type { TemplateMeta } from '@/lib/templates/types';
import { resetLabAction, signOutAction } from '@/lib/lab/actions';
import type { LabUser } from '@/lib/lab/store';
import type { StepUpResult } from '@wigtn/auth-membership';

const TABS = [
  { key: '', label: '개요' },
  { key: '/account', label: '계정 · 등급' },
  { key: '/posts', label: '콘텐츠' },
  { key: '/admin', label: '어드민' },
];

const STEP_UP_LABEL: Record<string, string> = {
  AAL2_REQUIRED: '2단계 인증 필요',
  RECENT_TOTP_REQUIRED: 'TOTP 만료됨',
  SESSION_REQUIRED: '로그아웃 상태',
};

/**
 * 템플릿의 accent/row 색을 CSS 변수로 흘려 랩 화면도 그 템플릿 톤을 입는다.
 * 6개 템플릿을 오가며 테스트할 때 지금 어느 템플릿인지 색으로 바로 읽힌다.
 */
export function LabShell({
  template,
  path,
  active,
  user,
  stepUp,
  children,
}: {
  template: TemplateMeta;
  path: string;
  active: string;
  user: LabUser | null;
  stepUp: StepUpResult;
  children: React.ReactNode;
}) {
  const style = {
    '--lab-bg': template.row.bg,
    '--lab-text': template.row.text,
    '--lab-muted': template.row.muted,
    '--lab-accent': template.accent,
    '--lab-border': `${template.row.muted}55`,
  } as React.CSSProperties;

  return (
    <div
      style={style}
      className="min-h-screen bg-[var(--lab-bg)] text-[var(--lab-text)]"
    >
      <header className="border-b border-[var(--lab-border)]">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-4 gap-y-2 px-6 py-4">
          <Link
            href="/lab"
            className="text-xs uppercase tracking-widest text-[var(--lab-muted)] hover:text-[var(--lab-text)]"
          >
            ← 기능 랩
          </Link>
          <span className="text-sm font-semibold">{template.brandName}</span>
          <span
            className="rounded-full px-2 py-0.5 text-[11px] font-medium"
            style={{ background: `${template.accent}22`, color: template.accent }}
          >
            {template.vertical.ko}
          </span>

          <div className="ml-auto flex items-center gap-3 text-xs text-[var(--lab-muted)]">
            {user ? (
              <>
                <span>
                  {user.name} · {user.grade}
                  {stepUp.ok ? ' · 재인증됨' : ` · ${STEP_UP_LABEL[stepUp.reason]}`}
                </span>
                <form action={signOutAction}>
                  <input type="hidden" name="slug" value={template.slug} />
                  <input type="hidden" name="path" value={path} />
                  <button type="submit" className="underline hover:text-[var(--lab-text)]">
                    로그아웃
                  </button>
                </form>
              </>
            ) : (
              <span>로그아웃 상태</span>
            )}
            <form action={resetLabAction}>
              <input type="hidden" name="slug" value={template.slug} />
              <input type="hidden" name="path" value={path} />
              <button type="submit" className="underline hover:text-[var(--lab-text)]">
                데이터 초기화
              </button>
            </form>
          </div>
        </div>

        <nav className="mx-auto flex max-w-5xl gap-1 px-6">
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <Link
                key={tab.key}
                href={`/lab/${template.slug}${tab.key}`}
                className="border-b-2 px-3 py-2 text-sm transition"
                style={{
                  borderColor: isActive ? template.accent : 'transparent',
                  color: isActive ? template.row.text : template.row.muted,
                }}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl space-y-8 px-6 py-8">{children}</main>
    </div>
  );
}

export function LabCard({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-[var(--lab-border)] p-5">
      <h2 className="text-sm font-semibold">{title}</h2>
      {description ? (
        <p className="mt-1 text-xs leading-relaxed text-[var(--lab-muted)]">
          {description}
        </p>
      ) : null}
      <div className="mt-4">{children}</div>
    </section>
  );
}
