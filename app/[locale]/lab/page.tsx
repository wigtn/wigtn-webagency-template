import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { TEMPLATES } from '@/lib/templates/registry';
import { CATEGORY_LABEL } from '@/lib/templates/registry';

export const metadata: Metadata = {
  title: '기능 랩',
  robots: { index: false, follow: false },
};

const MODULES = [
  {
    name: 'auth-membership',
    summary: 'OAuth 로그인 · TOTP 재인증 · 회원 등급 신청',
    tab: 'account',
  },
  {
    name: 'content-engine',
    summary: '구조화 콘텐츠 파싱 · 커서 페이지네이션 · HTML 살균',
    tab: 'posts',
  },
  {
    name: 'backoffice-frame',
    summary: '어드민 툴 레지스트리 · 권한/위험도 게이트 · 감사 로그',
    tab: 'admin',
  },
];

export default function LabIndexPage() {
  return (
    <div className="min-h-screen bg-neutral-950 px-6 py-16 text-neutral-100">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          WIGTN 외주 코어
        </p>
        <h1 className="mt-2 text-3xl font-semibold">기능 랩</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
          web-agency 코어 모듈 3종을 템플릿 6종 위에서 그대로 돌려 보는
          테스트 화면입니다. 데이터는 서버 메모리에만 저장되고 템플릿마다
          격리되며, 언제든 초기화할 수 있습니다.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {MODULES.map((module) => (
            <div
              key={module.name}
              className="rounded-lg border border-neutral-800 p-4"
            >
              <p className="font-mono text-xs text-neutral-300">{module.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                {module.summary}
              </p>
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-sm font-semibold text-neutral-300">
          템플릿 선택
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {TEMPLATES.map((template) => (
            <li key={template.slug}>
              <Link
                href={`/lab/${template.slug}`}
                className="flex items-center gap-4 rounded-lg border border-neutral-800 p-4 transition hover:border-neutral-600"
              >
                <span
                  aria-hidden
                  className="h-10 w-10 shrink-0 rounded-full"
                  style={{ background: template.accent }}
                />
                <span className="min-w-0">
                  <span className="block text-sm font-medium">
                    {template.brandName}
                  </span>
                  <span className="block truncate text-xs text-neutral-500">
                    {CATEGORY_LABEL[template.category].ko} ·{' '}
                    {template.vertical.ko}
                  </span>
                </span>
                <span className="ml-auto text-xs text-neutral-600">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
