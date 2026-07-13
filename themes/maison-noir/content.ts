import type { Locale } from '@/i18n/routing';

export type NavLink = { id: string; label: string };

export type Room = {
  name: string;
  size: string;
  view: string;
  features: string[];
  rate: string;
};

export type Dining = {
  kicker: string;
  name: string;
  line: string;
  hours: string;
};

export type Offer = {
  tag: string;
  name: string;
  desc: string;
};

export type GalleryTile = {
  label: string;
  from: string;
  to: string;
  angle: number;
};

export type Content = {
  nav: {
    reserve: string;
    links: NavLink[];
  };
  hero: {
    kicker: string;
    headline: string[];
    subtitle: string;
    cta: string;
    scroll: string;
  };
  signature: {
    eyebrow: string;
    quote: string;
    body: string;
  };
  rooms: {
    eyebrow: string;
    title: string;
    perNight: string;
    tiers: Room[];
  };
  dining: {
    eyebrow: string;
    title: string;
    intro: string;
    venues: Dining[];
  };
  spa: {
    eyebrow: string;
    title: string;
    body: string;
    treatmentsLabel: string;
    treatments: string[];
  };
  events: {
    eyebrow: string;
    title: string;
    body: string;
    stats: { value: string; label: string }[];
    inquiry: string;
  };
  offers: {
    eyebrow: string;
    title: string;
    items: Offer[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    tiles: GalleryTile[];
  };
  access: {
    eyebrow: string;
    title: string;
    address: string[];
    directionsLabel: string;
    directions: string[];
    hoursLabel: string;
    hours: string[];
  };
  footer: {
    tagline: string;
    contactLabel: string;
    email: string;
    phone: string;
    socialLabel: string;
    socials: string[];
    rights: string;
    credit: string;
  };
};

const gallery = (labelKo: string, labelEn: string) => ({ labelKo, labelEn });

const tilePalette: Omit<GalleryTile, 'label'>[] = [
  { from: '#1a1712', to: '#0c0b0a', angle: 145 },
  { from: '#2a2015', to: '#0e0e0f', angle: 160 },
  { from: '#141414', to: '#241d13', angle: 120 },
  { from: '#1e1a12', to: '#0a0a0b', angle: 200 },
  { from: '#0f1113', to: '#211a11', angle: 135 },
  { from: '#251c11', to: '#100f0e', angle: 175 },
];

const en: Content = {
  nav: {
    reserve: 'Reserve',
    links: [
      { id: 'suites', label: 'Suites' },
      { id: 'dining', label: 'Dining' },
      { id: 'wellness', label: 'Wellness' },
      { id: 'offers', label: 'Offers' },
      { id: 'contact', label: 'Contact' },
    ],
  },
  hero: {
    kicker: 'MAISON NOIR · SEOUL',
    headline: ['A quieter kind', 'of luxury'],
    subtitle:
      'A nocturnal city retreat above the lights of Seoul — intimate, unhurried, wholly yours.',
    cta: 'Reserve a stay',
    scroll: 'Scroll',
  },
  signature: {
    eyebrow: 'The House',
    quote:
      '“We built Maison Noir for the traveller who has seen everything, and now seeks only stillness.”',
    body: 'Behind an unmarked bronze door, thirty-eight rooms and suites unfold across the upper floors of a restored 1930s tower. No lobby theatre, no crowds — only low light, deep silence, and a staff that remembers your name before you give it.',
  },
  rooms: {
    eyebrow: 'Accommodation',
    title: 'Rooms & Suites',
    perNight: '/ night',
    tiers: [
      {
        name: 'Deluxe Room',
        size: '46 m²',
        view: 'City skyline',
        features: ['King bed & lounge nook', 'Walnut wet bar', 'Deep-soak stone bath'],
        rate: 'from ₩390,000',
      },
      {
        name: 'Signature Suite',
        size: '82 m²',
        view: 'River & mountains',
        features: ['Separate living room', 'Private bar & terrace', 'Butler on request'],
        rate: 'from ₩720,000',
      },
      {
        name: 'Noir Penthouse',
        size: '155 m²',
        view: 'Panoramic, top floor',
        features: ['Two bedrooms', 'Wraparound terrace', 'Dedicated house manager'],
        rate: 'from ₩2,400,000',
      },
    ],
  },
  dining: {
    eyebrow: 'Dining',
    title: 'Table & Bar',
    intro:
      'Two rooms, one philosophy — restraint. Ingredients led by the season, served without ceremony.',
    venues: [
      {
        kicker: 'The Restaurant',
        name: 'Onyx',
        line: 'A twelve-seat counter of contemporary Korean tasting menus, changing with the moon.',
        hours: 'Dinner · Tue–Sun · 18:00–22:00',
      },
      {
        kicker: 'The Bar',
        name: 'Cellar Noir',
        line: 'Low-lit, vinyl-warmed, built around rare spirits and slow conversation.',
        hours: 'Nightly · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: 'Wellness',
    title: 'Spa & Wellness',
    body: 'A subterranean sanctuary of stone, steam and candlelight. Time slows here. Reserve a therapist for the length of your stay, or simply drift between the thermal pools.',
    treatmentsLabel: 'Signature treatments',
    treatments: [
      'Noir Ritual · 120 min',
      'Deep-tissue restoration · 90 min',
      'Herbal steam & scrub · 60 min',
      'Couple’s twilight ceremony · 150 min',
    ],
  },
  events: {
    eyebrow: 'Gatherings',
    title: 'Meetings & Events',
    body: 'For gatherings that value discretion. Two private salons and a rooftop terrace, each with dedicated service and a kitchen at your disposal.',
    stats: [
      { value: '3', label: 'Private spaces' },
      { value: '80', label: 'Seated capacity' },
      { value: '120', label: 'Standing reception' },
    ],
    inquiry: 'Private events · events@maisonnoir.seoul',
  },
  offers: {
    eyebrow: 'Offers',
    title: 'Packages',
    items: [
      {
        tag: 'Extended stay',
        name: 'Stay 3, Pay 2',
        desc: 'Three nights, the third with our compliments. Includes daily breakfast at Onyx.',
      },
      {
        tag: 'Suite',
        name: 'Suite Escape',
        desc: 'A Signature Suite, a spa ritual for two, and a late 16:00 checkout.',
      },
      {
        tag: 'Table',
        name: 'Chef’s Table',
        desc: 'One night with the full Onyx tasting menu and a curated wine pairing.',
      },
    ],
  },
  gallery: {
    eyebrow: 'The Setting',
    title: 'Gallery',
    tiles: [],
  },
  access: {
    eyebrow: 'Contact',
    title: 'Access',
    address: ['Maison Noir', '17 Sowol-ro, Yongsan-gu', 'Seoul 04340, Republic of Korea'],
    directionsLabel: 'Getting here',
    directions: [
      '7 min from Incheon Airport rail (Seoul Station)',
      '4 min walk from Namsan cable car',
      'Complimentary house car within the city, on request',
      'Valet parking for arriving guests',
    ],
    hoursLabel: 'Front desk',
    hours: ['Reception · 24 hours', 'Check-in · from 15:00', 'Check-out · until 12:00'],
  },
  footer: {
    tagline: 'A quieter kind of luxury, above Seoul.',
    contactLabel: 'Contact',
    email: 'stay@maisonnoir.seoul',
    phone: '+82 2 000 0000',
    socialLabel: 'Follow',
    socials: ['Instagram', 'Journal', 'Newsletter'],
    rights: '© 2026 Maison Noir. All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

const ko: Content = {
  nav: {
    reserve: '예약',
    links: [
      { id: 'suites', label: '객실' },
      { id: 'dining', label: '다이닝' },
      { id: 'wellness', label: '웰니스' },
      { id: 'offers', label: '패키지' },
      { id: 'contact', label: '문의' },
    ],
  },
  hero: {
    kicker: 'MAISON NOIR · SEOUL',
    headline: ['고요함이라는', '럭셔리'],
    subtitle: '서울의 불빛 위, 은밀하고 여유로운 밤의 도심 리트리트.',
    cta: '예약하기',
    scroll: '스크롤',
  },
  signature: {
    eyebrow: '메종에 대하여',
    quote: '“모든 것을 경험한 여행자가, 이제 오직 고요만을 찾을 때를 위해 지었습니다.”',
    body: '표식 없는 청동 문 너머, 1930년대에 지어진 타워의 상층부에 서른여덟 개의 객실과 스위트가 자리합니다. 화려한 로비도, 인파도 없습니다. 낮은 조도와 깊은 정적, 그리고 이름을 말하기 전에 먼저 기억하는 스태프만이 있을 뿐입니다.',
  },
  rooms: {
    eyebrow: '객실',
    title: '객실 & 스위트',
    perNight: '/ 박',
    tiers: [
      {
        name: '디럭스 룸',
        size: '46 m²',
        view: '도심 스카이라인',
        features: ['킹 베드 & 라운지 코너', '월넛 웻바', '스톤 딥소킹 배스'],
        rate: '₩390,000 부터',
      },
      {
        name: '시그니처 스위트',
        size: '82 m²',
        view: '강과 산',
        features: ['독립된 거실', '프라이빗 바 & 테라스', '요청 시 버틀러 서비스'],
        rate: '₩720,000 부터',
      },
      {
        name: '누아르 펜트하우스',
        size: '155 m²',
        view: '최상층 파노라마',
        features: ['침실 2개', '래핑 테라스', '전담 하우스 매니저'],
        rate: '₩2,400,000 부터',
      },
    ],
  },
  dining: {
    eyebrow: '다이닝',
    title: '테이블 & 바',
    intro: '두 개의 공간, 하나의 철학 — 절제. 계절이 이끄는 재료를, 과함 없이 담아냅니다.',
    venues: [
      {
        kicker: '레스토랑',
        name: 'ONYX',
        line: '달의 주기에 따라 바뀌는, 열두 석의 컨템포러리 한식 테이스팅 카운터.',
        hours: '디너 · 화–일 · 18:00–22:00',
      },
      {
        kicker: '바',
        name: 'CELLAR NOIR',
        line: '낮은 조도와 바이닐의 온기, 희귀한 주류와 느린 대화를 위한 공간.',
        hours: '매일 · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: '웰니스',
    title: '스파 & 웰니스',
    body: '돌과 증기, 촛불로 이루어진 지하의 성소. 이곳에서 시간은 느리게 흐릅니다. 투숙 기간 동안 전담 테라피스트를 예약하거나, 온천 풀 사이를 유유히 오가며 머무르세요.',
    treatmentsLabel: '시그니처 트리트먼트',
    treatments: [
      '누아르 리추얼 · 120분',
      '딥티슈 리스토레이션 · 90분',
      '허벌 스팀 & 스크럽 · 60분',
      '커플 트와일라잇 세리머니 · 150분',
    ],
  },
  events: {
    eyebrow: '모임',
    title: '미팅 & 이벤트',
    body: '프라이버시를 중요하게 여기는 모임을 위해. 두 개의 프라이빗 살롱과 루프탑 테라스, 각각 전담 서비스와 전용 키친을 갖추었습니다.',
    stats: [
      { value: '3', label: '프라이빗 공간' },
      { value: '80', label: '착석 수용' },
      { value: '120', label: '스탠딩 리셉션' },
    ],
    inquiry: '프라이빗 이벤트 · events@maisonnoir.seoul',
  },
  offers: {
    eyebrow: '패키지',
    title: '패키지',
    items: [
      {
        tag: '연박',
        name: '3박 2박 요금',
        desc: '세 번째 밤은 메종의 초대로. ONYX 조식이 매일 포함됩니다.',
      },
      {
        tag: '스위트',
        name: '스위트 이스케이프',
        desc: '시그니처 스위트와 2인 스파 리추얼, 그리고 16:00 레이트 체크아웃.',
      },
      {
        tag: '테이블',
        name: '셰프스 테이블',
        desc: 'ONYX 풀 테이스팅 메뉴와 큐레이션 와인 페어링이 함께하는 하룻밤.',
      },
    ],
  },
  gallery: {
    eyebrow: '공간',
    title: '갤러리',
    tiles: [],
  },
  access: {
    eyebrow: '문의',
    title: '오시는 길',
    address: ['메종 누아르', '서울시 용산구 소월로 17', '서울 04340, 대한민국'],
    directionsLabel: '오시는 길',
    directions: [
      '공항철도 서울역에서 7분',
      '남산 케이블카에서 도보 4분',
      '요청 시 시내 하우스카 무료 운행',
      '투숙객 발렛 파킹 제공',
    ],
    hoursLabel: '프론트 데스크',
    hours: ['리셉션 · 24시간', '체크인 · 15:00 부터', '체크아웃 · 12:00 까지'],
  },
  footer: {
    tagline: '서울 위, 고요함이라는 럭셔리.',
    contactLabel: '문의',
    email: 'stay@maisonnoir.seoul',
    phone: '+82 2 000 0000',
    socialLabel: '팔로우',
    socials: ['Instagram', 'Journal', 'Newsletter'],
    rights: '© 2026 Maison Noir. All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

function withTiles(c: Content, lang: 'ko' | 'en'): Content {
  const labels =
    lang === 'ko'
      ? [
          gallery('로비', ''),
          gallery('스위트', ''),
          gallery('스파', ''),
          gallery('테라스', ''),
          gallery('ONYX', ''),
          gallery('셀러', ''),
        ]
      : [
          gallery('', 'The Lobby'),
          gallery('', 'A Suite'),
          gallery('', 'The Spa'),
          gallery('', 'Terrace'),
          gallery('', 'Onyx'),
          gallery('', 'Cellar'),
        ];
  return {
    ...c,
    gallery: {
      ...c.gallery,
      tiles: tilePalette.map((t, i) => ({
        ...t,
        label: lang === 'ko' ? labels[i].labelKo : labels[i].labelEn,
      })),
    },
  };
}

const dict: Record<'ko' | 'en', Content> = {
  ko: withTiles(ko, 'ko'),
  en: withTiles(en, 'en'),
};

export function getContent(locale: Locale): Content {
  return locale === 'ko' ? dict.ko : dict.en;
}
