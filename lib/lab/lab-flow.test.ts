import { beforeEach, describe, expect, it } from 'vitest';
import { resetState, getState, currentUser } from './store';
import {
  applyForGrade,
  completeTotp,
  expireTotp,
  signIn,
  stepUpStatus,
} from './auth';
import { createPost, listPosts, validateRawContent } from './content';
import { runTool, screenConfigFor } from './admin';

/**
 * 랩 어댑터가 모듈 계약을 실제로 통과시키는지 확인한다.
 * 화면을 클릭해 볼 수 있는 시나리오와 같은 경로를 코드로 밟는다.
 */

const SLUG = 'salt-ember' as const;

beforeEach(() => {
  resetState(SLUG);
});

describe('템플릿 격리', () => {
  it('한 템플릿의 글은 다른 템플릿에 보이지 않는다', () => {
    resetState('onjae');
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    const created = createPost(SLUG, '격리 확인용 글', '본문입니다.');
    expect(created.ok).toBe(true);

    const here = listPosts(SLUG, null, '50', { includeDrafts: true });
    const there = listPosts('onjae', null, '50', { includeDrafts: true });
    expect(here.posts.some((post) => post.title === '격리 확인용 글')).toBe(true);
    expect(there.posts.some((post) => post.title === '격리 확인용 글')).toBe(false);
  });
});

describe('auth-membership', () => {
  it('모르는 공급자는 거절한다', () => {
    const result = signIn(SLUG, 'myspace', 'a@b.com', '테스터');
    expect(result.ok).toBe(false);
  });

  it('로그인 직후에는 재인증이 안 된 상태다', () => {
    signIn(SLUG, 'kakao', 'member@example.com', '김단골');
    expect(stepUpStatus(SLUG)).toMatchObject({ ok: false, reason: 'AAL2_REQUIRED' });
  });

  it('TOTP 통과 후 만료시키면 다시 거절된다', () => {
    signIn(SLUG, 'kakao', 'member@example.com', '김단골');
    completeTotp(SLUG);
    expect(stepUpStatus(SLUG).ok).toBe(true);

    expireTotp(SLUG);
    expect(stepUpStatus(SLUG)).toMatchObject({
      ok: false,
      reason: 'RECENT_TOTP_REQUIRED',
    });
  });

  it('허용되지 않은 증빙 형식은 등급 신청이 막힌다', () => {
    signIn(SLUG, 'google', 'new@example.com', '신규');
    const result = applyForGrade(SLUG, 'member', 'a.exe', 'application/x-msdownload', 100);
    expect(result.ok).toBe(false);
  });

  it('용량을 초과한 증빙은 거절된다', () => {
    signIn(SLUG, 'google', 'new@example.com', '신규');
    const result = applyForGrade(SLUG, 'member', 'a.pdf', 'application/pdf', 20 * 1024 * 1024);
    expect(result.ok).toBe(false);
  });
});

describe('content-engine', () => {
  it('빈 본문은 거절한다', () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    expect(createPost(SLUG, '제목', '   ').ok).toBe(false);
  });

  it('스크립트 태그는 이스케이프된다', () => {
    const result = validateRawContent(
      JSON.stringify({
        version: 1,
        blocks: [{ type: 'paragraph', text: '<script>alert(1)</script>' }],
      }),
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.html).not.toContain('<script>');
      expect(result.html).toContain('&lt;script&gt;');
    }
  });

  it('지원하지 않는 블록 타입은 거절한다', () => {
    const result = validateRawContent(
      JSON.stringify({ version: 1, blocks: [{ type: 'iframe', src: 'x' }] }),
    );
    expect(result.ok).toBe(false);
  });

  it('커서로 다음 페이지를 이어서 읽는다', () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    for (let index = 0; index < 4; index += 1) {
      createPost(SLUG, `글 ${index}`, '본문');
    }

    const first = listPosts(SLUG, null, '2', { includeDrafts: true });
    expect(first.posts).toHaveLength(2);
    expect(first.nextCursor).not.toBeNull();

    const second = listPosts(SLUG, first.nextCursor, '2', { includeDrafts: true });
    expect(second.posts).toHaveLength(2);
    const overlap = second.posts.filter((post) =>
      first.posts.some((earlier) => earlier.id === post.id),
    );
    expect(overlap).toHaveLength(0);
  });

  it('범위를 벗어난 pageSize 는 기본값으로 접힌다', () => {
    expect(listPosts(SLUG, null, '999', { includeDrafts: true }).pageSize).toBe(5);
  });
});

describe('backoffice-frame', () => {
  it('화면 구성이 검증을 통과한다', () => {
    const screens = screenConfigFor(SLUG).screens;
    expect(screens.map((screen) => screen.id)).toEqual(['posts', 'members']);
  });

  it('권한 없는 계정은 PERMISSION_DENIED 를 받는다', async () => {
    signIn(SLUG, 'kakao', 'member@example.com', '김단골');
    const outcome = await runTool(SLUG, 'posts.list', 1, { status: 'all' });
    expect(outcome).toMatchObject({ ok: false, code: 'PERMISSION_DENIED' });
  });

  it('스키마에 없는 입력은 INPUT_INVALID 를 받는다', async () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    const outcome = await runTool(SLUG, 'posts.list', 1, { bogus: true });
    expect(outcome).toMatchObject({ ok: false, code: 'INPUT_INVALID' });
  });

  it('없는 버전은 TOOL_NOT_FOUND 를 받는다', async () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    const outcome = await runTool(SLUG, 'posts.list', 2, { status: 'all' });
    expect(outcome).toMatchObject({ ok: false, code: 'TOOL_NOT_FOUND' });
  });

  it('고위험 툴은 재인증 → 멱등키 순서로 막다가 통과한다', async () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    const state = getState(SLUG);
    const application = state.applications[0];
    const input = { applicationId: application.id };

    const noStepUp = await runTool(SLUG, 'members.grade.approve', 1, input);
    expect(noStepUp).toMatchObject({ ok: false, code: 'STEP_UP_REQUIRED' });

    completeTotp(SLUG);
    const noKey = await runTool(SLUG, 'members.grade.approve', 1, input);
    expect(noKey).toMatchObject({ ok: false, code: 'IDEMPOTENCY_KEY_REQUIRED' });

    const approved = await runTool(SLUG, 'members.grade.approve', 1, input, {
      idempotencyKey: 'approve-1',
    });
    expect(approved.ok).toBe(true);

    const after = getState(SLUG);
    expect(after.applications[0].status).toBe('approved');
    expect(
      after.users.find((user) => user.id === application.userId)?.grade,
    ).toBe('vip');
  });

  it('성공과 실패가 모두 감사 로그에 남는다', async () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    await runTool(SLUG, 'posts.list', 1, { status: 'all' });
    await runTool(SLUG, 'posts.list', 1, { bogus: true });

    const audit = getState(SLUG).audit;
    expect(audit.some((entry) => entry.outcome === 'ok')).toBe(true);
    expect(audit.some((entry) => entry.outcome === 'error')).toBe(true);
  });

  it('로그인한 운영자는 실행 컨텍스트의 actor 로 잡힌다', async () => {
    signIn(SLUG, 'google', 'owner@wigtn.com', '운영자');
    expect(currentUser(getState(SLUG))?.email).toBe('owner@wigtn.com');
  });
});
