import type { Locale } from '@/i18n/routing';

type Plan = { name: string; price: string; note: string; perks: string[] };
type Room = { name: string; tag: string; body: string; image: string };
type EventItem = { date: string; title: string; meta: string };
type Notice = { tag: string; title: string; body: string; cta: string };

export type Dict = {
  nav: { spaces: string; membership: string; calendar: string; contact: string };
  hero: {
    kicker: string;
    title: string;
    lead: string;
    cta: string;
    secondary: string;
    search: { location: string; need: string; date: string; button: string };
  };
  intro: { label: string; title: string; body: string; stats: { value: string; label: string }[] };
  spaces: { label: string; title: string; rooms: Room[] };
  membership: { label: string; title: string; plans: Plan[] };
  calendar: { label: string; title: string; body: string; events: EventItem[]; notice: Notice };
  footer: { line: string; email: string; address: string };
};

const ko: Dict = {
  nav: { spaces: '공간', membership: '멤버십', calendar: '캘린더', contact: '문의' },
  hero: {
    kicker: 'LOCAL WORK CLUB · SEOUL',
    title: '일하는 날도,\n동네답게.',
    lead:
      'BLOCK YARD는 데스크, 미팅룸, 워크숍, 저녁 살롱을 한 번에 운영하는 도시형 워크클럽입니다.',
    cta: '멤버십 보기',
    secondary: '공간 둘러보기',
    search: { location: '지점', need: '필요한 공간', date: '날짜', button: '찾기' },
  },
  intro: {
    label: 'WHY THIS FITS',
    title: '코워킹보다 가볍고, 카페보다 오래 머무는 곳.',
    body:
      '망설임 없이 들어오고, 필요한 만큼 예약하고, 퇴근 뒤에는 클래스와 토크가 열리는 구조. 밝은 컬러와 굵은 선이 많은 정보를 어렵지 않게 정리합니다.',
    stats: [
      { value: '3F', label: 'work · meet · event' },
      { value: '08-24', label: 'daily access' },
      { value: '42', label: 'weekly seats' },
    ],
  },
  spaces: {
    label: 'SPACES',
    title: '오늘 필요한 모드로 고르세요.',
    rooms: [
      {
        name: 'Open Yard',
        tag: 'drop-in desk',
        body: '긴 테이블, 소파, 창가석을 섞은 데이패스 라운지.',
        image: '/images/block-yard/hero.jpg',
      },
      {
        name: 'Workshop Room',
        tag: 'class · talk',
        body: '클래스, 브랜드 워크숍, 작은 발표에 맞춘 모듈형 룸.',
        image: '/images/block-yard/workshop.jpg',
      },
      {
        name: 'Focus Booth',
        tag: 'deep work',
        body: '통화, 집중 작업, 짧은 온라인 미팅을 위한 조용한 좌석.',
        image: '/images/block-yard/desk.jpg',
      },
    ],
  },
  membership: {
    label: 'MEMBERSHIP',
    title: '하루권부터 팀 멤버십까지.',
    plans: [
      {
        name: 'Day Pass',
        price: '18,000원',
        note: '하루만 쓰는 자유석',
        perks: ['오픈 데스크', '커피 1잔', '이벤트 선예매'],
      },
      {
        name: 'Local 10',
        price: '120,000원',
        note: '월 10회 입장',
        perks: ['좌석 예약', '회의실 2h', '멤버 살롱 초대'],
      },
      {
        name: 'Team Yard',
        price: '문의',
        note: '2-8인 팀용',
        perks: ['전용 락커', '룸 크레딧', '팝업 협업'],
      },
    ],
  },
  calendar: {
    label: 'COMMUNITY',
    title: '일이 끝난 뒤에도 불이 켜집니다.',
    body: '독서모임, 창업자 토크, 작은 브랜드 팝업처럼 동네의 일을 만드는 프로그램을 엽니다.',
    events: [
      { date: '07.18', title: 'Friday Pitch Club', meta: 'founder talk · 20 seats' },
      { date: '07.24', title: 'Poster Night', meta: 'design class · 12 seats' },
      { date: '08.02', title: 'Local Market Desk', meta: 'popup · open lobby' },
    ],
    notice: {
      tag: 'OPEN LOBBY',
      title: '이번 주 평일 저녁은 예약 없이 입장 가능.',
      body: '멤버가 아니어도 19시 이후 라운지 바와 게시판을 열어둡니다. 노트북, 책, 작은 프로젝트를 들고 오세요.',
      cta: '입장 안내 보기',
    },
  },
  footer: {
    line: '책상 하나에서 시작해 동네의 다음 일을 만듭니다.',
    email: 'hello@blockyard.kr',
    address: 'Seoul · Seongsu · Ground Floor',
  },
};

const en: Dict = {
  nav: { spaces: 'Spaces', membership: 'Membership', calendar: 'Calendar', contact: 'Contact' },
  hero: {
    kicker: 'LOCAL WORK CLUB · SEOUL',
    title: 'Work days,\nmade local.',
    lead:
      'BLOCK YARD is an urban work club for desks, meeting rooms, workshops, and after-hours salons.',
    cta: 'View membership',
    secondary: 'Explore spaces',
    search: { location: 'Location', need: 'Need', date: 'Date', button: 'Search' },
  },
  intro: {
    label: 'WHY THIS FITS',
    title: 'Lighter than coworking, better to stay in than a cafe.',
    body:
      'Walk in without ceremony, book only what you need, and stay for talks or classes after work. The bold lines and bright palette keep a lot of information easy to scan.',
    stats: [
      { value: '3F', label: 'work · meet · event' },
      { value: '08-24', label: 'daily access' },
      { value: '42', label: 'weekly seats' },
    ],
  },
  spaces: {
    label: 'SPACES',
    title: 'Choose the mode you need today.',
    rooms: [
      {
        name: 'Open Yard',
        tag: 'drop-in desk',
        body: 'Long tables, sofas, and window seats for day-pass work.',
        image: '/images/block-yard/hero.jpg',
      },
      {
        name: 'Workshop Room',
        tag: 'class · talk',
        body: 'A modular room for classes, brand workshops, and small talks.',
        image: '/images/block-yard/workshop.jpg',
      },
      {
        name: 'Focus Booth',
        tag: 'deep work',
        body: 'Quiet seats for calls, deep work, and short remote meetings.',
        image: '/images/block-yard/desk.jpg',
      },
    ],
  },
  membership: {
    label: 'MEMBERSHIP',
    title: 'From day pass to team plan.',
    plans: [
      {
        name: 'Day Pass',
        price: '18K',
        note: 'A flexible seat for one day',
        perks: ['Open desk', 'One coffee', 'Early event access'],
      },
      {
        name: 'Local 10',
        price: '120K',
        note: 'Ten visits per month',
        perks: ['Seat booking', 'Meeting room 2h', 'Member salon invite'],
      },
      {
        name: 'Team Yard',
        price: 'Ask',
        note: 'For teams of 2-8',
        perks: ['Private lockers', 'Room credits', 'Popup collaboration'],
      },
    ],
  },
  calendar: {
    label: 'COMMUNITY',
    title: 'The lights stay on after work.',
    body: 'We host programs that make neighborhood work visible: reading clubs, founder talks, and small brand popups.',
    events: [
      { date: '07.18', title: 'Friday Pitch Club', meta: 'founder talk · 20 seats' },
      { date: '07.24', title: 'Poster Night', meta: 'design class · 12 seats' },
      { date: '08.02', title: 'Local Market Desk', meta: 'popup · open lobby' },
    ],
    notice: {
      tag: 'OPEN LOBBY',
      title: 'Weekday evenings are open without a booking.',
      body: 'After 7pm, the lounge bar and notice board stay open to non-members. Bring a laptop, a book, or a small project.',
      cta: 'See entry guide',
    },
  },
  footer: {
    line: 'Start with one desk, build the next thing in the neighborhood.',
    email: 'hello@blockyard.kr',
    address: 'Seoul · Seongsu · Ground Floor',
  },
};

export function getDict(locale: Locale): Dict {
  if (locale === 'ko') return ko;
  return en;
}
