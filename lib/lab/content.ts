import {
  API_RATE_LIMITS,
  clampPageSize,
  contentPlainText,
  decodeCursor,
  encodeCursor,
  parseStructuredContent,
  plainTextToStructuredContent,
  renderSanitizedHtml,
  type RateLimitKind,
} from '@wigtn/content-engine';
import type { TemplateSlug } from '@/lib/templates/types';
import { currentUser, getState, type LabPost } from './store';

export type PostPage = {
  posts: LabPost[];
  nextCursor: string | null;
  pageSize: number;
  total: number;
};

/** createdAt DESC, 동률이면 id — 커서 계약과 정렬을 일치시킨다 */
function ordered(posts: LabPost[]) {
  return [...posts].sort((left, right) => {
    if (left.createdAt !== right.createdAt) {
      return right.createdAt.localeCompare(left.createdAt);
    }
    return right.id.localeCompare(left.id);
  });
}

export function listPosts(
  slug: TemplateSlug,
  rawCursor: string | null,
  rawPageSize: string | null,
  options: { includeDrafts?: boolean } = {},
): PostPage {
  const state = getState(slug);
  const pageSize = clampPageSize(rawPageSize, 5);
  const cursor = decodeCursor(rawCursor);

  const visible = ordered(state.posts).filter(
    (post) => options.includeDrafts || post.status === 'published',
  );

  const start = cursor
    ? visible.findIndex(
        (post) => post.createdAt === cursor.createdAt && post.id === cursor.id,
      ) + 1
    : 0;

  const page = visible.slice(start, start + pageSize);
  const last = page.at(-1);
  const hasMore = start + pageSize < visible.length;

  return {
    posts: page,
    nextCursor:
      hasMore && last
        ? encodeCursor({ createdAt: last.createdAt, id: last.id })
        : null,
    pageSize,
    total: visible.length,
  };
}

export function createPost(slug: TemplateSlug, title: string, body: string) {
  const state = getState(slug);
  const user = currentUser(state);
  if (!user) return { ok: false as const, error: '로그인이 필요합니다.' };

  const trimmedTitle = title.trim();
  if (!trimmedTitle || trimmedTitle.length > 200) {
    return { ok: false as const, error: '제목은 1~200자여야 합니다.' };
  }

  try {
    const content = plainTextToStructuredContent(body);
    const post: LabPost = {
      id: crypto.randomUUID(),
      title: trimmedTitle,
      content,
      authorId: user.id,
      status: 'draft',
      createdAt: new Date().toISOString(),
    };
    state.posts.unshift(post);
    return { ok: true as const, post };
  } catch (error) {
    // content-engine 이 던지는 계약 위반 메시지를 그대로 노출한다
    return {
      ok: false as const,
      error: error instanceof Error ? error.message : '본문을 해석할 수 없습니다.',
    };
  }
}

/**
 * 블록 JSON 을 직접 입력받아 파서를 때린다. 랩에서 잘못된 스키마를 넣어
 * 모듈이 어떻게 거절하는지 확인하는 용도.
 */
export function validateRawContent(raw: string) {
  try {
    const parsed = parseStructuredContent(JSON.parse(raw));
    return {
      ok: true as const,
      html: renderSanitizedHtml(parsed),
      plainText: contentPlainText(parsed),
      blocks: parsed.blocks.length,
    };
  } catch (error) {
    return {
      ok: false as const,
      error: error instanceof Error ? error.message : 'JSON 파싱 실패',
    };
  }
}

export function renderPost(post: LabPost) {
  return renderSanitizedHtml(post.content);
}

export function postExcerpt(post: LabPost, maxLength = 120) {
  const text = contentPlainText(post.content).replaceAll('\n', ' ');
  return text.length > maxLength ? `${text.slice(0, maxLength)}…` : text;
}

export function searchPosts(slug: TemplateSlug, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return [];
  return ordered(getState(slug).posts).filter((post) => {
    const haystack =
      `${post.title}\n${contentPlainText(post.content)}`.toLowerCase();
    return haystack.includes(needle);
  });
}

export function rateLimitOf(kind: RateLimitKind) {
  return API_RATE_LIMITS[kind];
}

export const RATE_LIMIT_KINDS = Object.keys(API_RATE_LIMITS) as RateLimitKind[];
