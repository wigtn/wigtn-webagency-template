import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { TEMPLATE_MAP } from '@/lib/templates/registry';
import { LabCard, LabShell } from '@/components/lab/LabShell';
import { LabField, LabForm, labInputClass } from '@/components/lab/LabForm';
import { currentUser, getState, isTemplateSlug } from '@/lib/lab/store';
import { stepUpStatus } from '@/lib/lab/auth';
import {
  listPosts,
  postExcerpt,
  RATE_LIMIT_KINDS,
  rateLimitOf,
  renderPost,
  searchPosts,
} from '@/lib/lab/content';
import { createPostAction, validateContentAction } from '@/lib/lab/actions';
import { labPath } from '@/lib/lab/path';

export const dynamic = 'force-dynamic';

const SAMPLE_CONTENT = JSON.stringify(
  {
    version: 1,
    blocks: [
      { type: 'heading', level: 2, text: '공지 <script>alert(1)</script>' },
      { type: 'paragraph', text: '본문에 <b>태그</b>를 넣어도 살균됩니다.' },
      { type: 'unordered-list', items: ['첫째', '둘째'] },
    ],
  },
  null,
  2,
);

export default async function LabPostsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ cursor?: string; pageSize?: string; q?: string }>;
}) {
  const { locale, slug } = await params;
  if (!isTemplateSlug(slug)) notFound();

  const { cursor, pageSize, q } = await searchParams;
  const template = TEMPLATE_MAP[slug];
  const state = getState(slug);
  const user = currentUser(state);
  const path = labPath(locale, `/lab/${slug}`);

  const page = listPosts(slug, cursor ?? null, pageSize ?? null, {
    includeDrafts: true,
  });
  const matches = q ? searchPosts(slug, q) : [];

  return (
    <LabShell
      template={template}
      path={path}
      active="/posts"
      user={user}
      stepUp={stepUpStatus(slug)}
    >
      <LabCard
        title="글 작성"
        description="본문은 plainTextToStructuredContent() 로 블록 문서가 됩니다. 빈 줄로 문단이 나뉘고, 빈 본문은 모듈이 거절합니다."
      >
        <LabForm
          action={createPostAction}
          slug={slug}
          path={path}
          submitLabel="초안 저장"
        >
          <LabField label="제목">
            <input name="title" className={labInputClass} />
          </LabField>
          <LabField label="본문" hint="빈 줄 하나로 문단을 나눕니다.">
            <textarea name="body" rows={4} className={labInputClass} />
          </LabField>
        </LabForm>
        {!user ? (
          <p className="mt-3 text-xs text-amber-400">
            로그인하지 않으면 모듈이 아니라 어댑터 단계에서 막힙니다 — 계정 탭에서
            먼저 로그인해 보세요.
          </p>
        ) : null}
      </LabCard>

      <LabCard
        title={`글 목록 (총 ${page.total}건 · 페이지당 ${page.pageSize}건)`}
        description="clampPageSize() 는 1~50 밖의 값을 기본값으로 되돌립니다. 주소창의 pageSize 를 999 로 바꿔 확인해 보세요."
      >
        <ul className="space-y-3">
          {page.posts.map((post) => (
            <li
              key={post.id}
              className="rounded-md border border-[var(--lab-border)] p-4"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{post.title}</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[11px]"
                  style={{
                    background: `${template.accent}22`,
                    color: template.accent,
                  }}
                >
                  {post.status}
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--lab-muted)]">
                {postExcerpt(post)}
              </p>
              <details className="mt-2">
                <summary className="cursor-pointer text-xs text-[var(--lab-muted)]">
                  살균된 HTML 보기
                </summary>
                <pre className="mt-2 overflow-x-auto rounded bg-black/30 p-3 text-[11px]">
                  {renderPost(post)}
                </pre>
              </details>
            </li>
          ))}
          {page.posts.length === 0 ? (
            <li className="text-xs text-[var(--lab-muted)]">글이 없습니다.</li>
          ) : null}
        </ul>

        <div className="mt-4 flex items-center gap-4 text-xs">
          {cursor ? (
            <Link href={`/lab/${slug}/posts`} className="underline">
              ← 처음으로
            </Link>
          ) : null}
          {page.nextCursor ? (
            <Link
              href={`/lab/${slug}/posts?cursor=${encodeURIComponent(page.nextCursor)}${
                pageSize ? `&pageSize=${pageSize}` : ''
              }`}
              className="underline"
            >
              다음 페이지 →
            </Link>
          ) : (
            <span className="text-[var(--lab-muted)]">마지막 페이지</span>
          )}
        </div>
      </LabCard>

      <LabCard
        title="콘텐츠 스키마 직접 검증"
        description="블록 JSON 을 그대로 parseStructuredContent() 에 넣습니다. 스크립트 태그를 넣어도 renderSanitizedHtml() 이 이스케이프하는지 확인해 보세요."
      >
        <LabForm
          action={validateContentAction}
          slug={slug}
          path={path}
          submitLabel="검증 실행"
        >
          <LabField label="블록 JSON">
            <textarea
              name="raw"
              rows={10}
              defaultValue={SAMPLE_CONTENT}
              className={`${labInputClass} font-mono text-xs`}
            />
          </LabField>
        </LabForm>
      </LabCard>

      <LabCard
        title="검색"
        description="contentPlainText() 로 블록을 평문화한 뒤 매칭합니다."
      >
        <form className="flex gap-2">
          <input
            name="q"
            defaultValue={q ?? ''}
            placeholder="검색어"
            className={labInputClass}
          />
          <button
            type="submit"
            className="rounded-md px-3 py-2 text-sm font-medium text-[var(--lab-bg)]"
            style={{ background: template.accent }}
          >
            검색
          </button>
        </form>
        {q ? (
          <ul className="mt-3 space-y-1 text-xs">
            {matches.map((post) => (
              <li key={post.id}>· {post.title}</li>
            ))}
            {matches.length === 0 ? (
              <li className="text-[var(--lab-muted)]">결과 없음</li>
            ) : null}
          </ul>
        ) : null}
      </LabCard>

      <LabCard
        title="API 레이트 리밋 계약"
        description="content-engine 이 상수로 고정한 값입니다. 실제 게이트웨이가 이 수치를 따릅니다."
      >
        <table className="w-full text-left text-xs font-mono">
          <thead className="text-[var(--lab-muted)]">
            <tr>
              <th className="pb-2 font-medium">종류</th>
              <th className="pb-2 font-medium">한도</th>
              <th className="pb-2 font-medium">윈도우</th>
            </tr>
          </thead>
          <tbody>
            {RATE_LIMIT_KINDS.map((kind) => {
              const limit = rateLimitOf(kind);
              return (
                <tr key={kind} className="border-t border-[var(--lab-border)]">
                  <td className="py-2">{kind}</td>
                  <td className="py-2">{limit.limit}회</td>
                  <td className="py-2">{limit.windowSeconds}초</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </LabCard>
    </LabShell>
  );
}
