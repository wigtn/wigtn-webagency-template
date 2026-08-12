import { plainTextToStructuredContent } from '@wigtn/content-engine';
import type { TemplateSlug } from '@/lib/templates/types';
import type { LabPost, LabState, LabUser } from './store';

/**
 * 템플릿별 시드 데이터. 업종 톤에 맞는 글을 넣어야 랩이 "그 템플릿의 백오피스"처럼
 * 읽힌다 — 모든 템플릿에 같은 lorem 을 넣으면 비교 테스트의 의미가 없다.
 */

type SeedPost = { title: string; body: string; status: LabPost['status'] };

const SEED_POSTS: Record<TemplateSlug, SeedPost[]> = {
  'stay-heaven': [
    {
      title: '겨울 장기투숙 프로모션 안내',
      body: '12월부터 2월까지 4주 이상 예약하시는 분께 주 1회 하우스키핑을 무료로 제공합니다.\n\n예약 시 메모란에 "장기투숙"을 남겨주세요.',
      status: 'published',
    },
    {
      title: '체크인 시간 변경 (초안)',
      body: '3월부터 체크인이 15시에서 16시로 변경됩니다.\n\n얼리 체크인은 사전 문의 시 가능합니다.',
      status: 'draft',
    },
  ],
  onjae: [
    {
      title: '한옥 보수 공사로 인한 휴무 안내',
      body: '대청마루 보수 작업으로 1월 셋째 주는 예약을 받지 않습니다.\n\n이미 확정된 예약은 그대로 진행됩니다.',
      status: 'published',
    },
    {
      title: '조식 메뉴 개편 (초안)',
      body: '계절 나물과 죽 중심으로 조식 구성을 바꿉니다.',
      status: 'draft',
    },
  ],
  'salt-ember': [
    {
      title: '겨울 시즌 코스 오픈',
      body: '제철 방어와 뿌리채소를 중심으로 한 7코스를 시작합니다.\n\n예약은 2주 전부터 가능합니다.',
      status: 'published',
    },
    {
      title: '와인 페어링 리스트 업데이트 (초안)',
      body: '내추럴 와인 4종을 페어링 옵션에 추가할 예정입니다.',
      status: 'draft',
    },
  ],
  'block-yard': [
    {
      title: '1월 멤버 밋업 — 사이드 프로젝트 나이트',
      body: '매달 마지막 목요일 저녁, 각자 만들고 있는 것을 10분씩 공유합니다.\n\n멤버는 무료, 게스트는 1만원입니다.',
      status: 'published',
    },
    {
      title: '고정석 요금 조정 (초안)',
      body: '3월부터 고정석 월 이용료가 조정됩니다. 기존 멤버는 6개월 유예됩니다.',
      status: 'draft',
    },
  ],
  'studio-noon': [
    {
      title: '2026 상반기 프로젝트 문의 받습니다',
      body: '브랜드 아이덴티티와 모션 그래픽 작업을 3팀까지 받습니다.\n\n간단한 브리프와 예산 범위를 함께 보내주세요.',
      status: 'published',
    },
    {
      title: '아카이브 리뉴얼 노트 (초안)',
      body: '지난 3년간의 작업을 카테고리 대신 연도순으로 다시 정리합니다.',
      status: 'draft',
    },
  ],
  'maison-noir': [
    {
      title: '스위트 리노베이션 완료',
      body: '7층 스위트 4실의 리노베이션이 끝났습니다.\n\n1월 중 투숙하시는 분께는 레이트 체크아웃을 제공합니다.',
      status: 'published',
    },
    {
      title: '바 운영시간 연장 (초안)',
      body: '금·토 한정으로 라운지 바를 새벽 2시까지 운영하는 안을 검토 중입니다.',
      status: 'draft',
    },
  ],
};

const ADMIN_PERMISSIONS = [
  'admin.posts.read',
  'admin.posts.write',
  'admin.members.read',
  'admin.members.grade.approve',
];

function isoDaysAgo(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export function seedFor(slug: TemplateSlug): LabState {
  const owner: LabUser = {
    id: crypto.randomUUID(),
    email: 'owner@wigtn.com',
    name: '운영자',
    provider: 'google',
    grade: 'vip',
    permissions: ADMIN_PERMISSIONS,
    createdAt: isoDaysAgo(120),
  };

  const member: LabUser = {
    id: crypto.randomUUID(),
    email: 'member@example.com',
    name: '김단골',
    provider: 'kakao',
    grade: 'member',
    permissions: [],
    createdAt: isoDaysAgo(30),
  };

  const posts: LabPost[] = SEED_POSTS[slug].map((post, index) => ({
    id: crypto.randomUUID(),
    title: post.title,
    content: plainTextToStructuredContent(post.body),
    authorId: owner.id,
    status: post.status,
    createdAt: isoDaysAgo(index + 1),
  }));

  return {
    users: [owner, member],
    applications: [
      {
        id: crypto.randomUUID(),
        userId: member.id,
        requestedGrade: 'vip',
        status: 'submitted',
        evidenceName: 'receipt-2025-12.pdf',
        submittedAt: isoDaysAgo(2),
      },
    ],
    session: null,
    posts,
    audit: [],
  };
}
