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
    headline: ['A private hotel', 'above Seoul'],
    subtitle:
      'Thirty-eight rooms on the upper floors of a restored Yongsan tower. Quiet service, low light, and a stay made for privacy.',
    cta: 'Reserve a stay',
    scroll: 'Enter the house',
  },
  signature: {
    eyebrow: 'The House',
    quote:
      '“Maison Noir is built for guests who prefer fewer rooms, quieter service, and a little more space around them.”',
    body: 'Maison Noir occupies the top four floors of a restored tower off Sowol-ro. There is no oversized lobby and no tour flow to follow. You arrive by private lift, check in at a small desk, and move through the house at your own pace.',
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
      'A counter restaurant and a low-lit bar, both open to guests and neighbors. Reserve Onyx ahead; Cellar Noir keeps a few seats for late arrivals.',
    venues: [
      {
        kicker: 'The Restaurant',
        name: 'Onyx',
        line: 'Twelve seats at the counter, serving a Korean tasting menu shaped by the market and the season.',
        hours: 'Dinner · Tue–Sun · 18:00–22:00',
      },
      {
        kicker: 'The Bar',
        name: 'Cellar Noir',
        line: 'A low-lit room below the hotel with old spirits, a deep whisky list, and records playing late.',
        hours: 'Nightly · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: 'Wellness',
    title: 'Spa & Wellness',
    body: 'Two floors below the lobby are a thermal pool, a steam room, and four treatment rooms. Sessions are reserved by the hour, and the pool opens at 6am for guests who want the water to themselves.',
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
    body: 'Two private rooms and a rooftop terrace host dinners, launches, and small board meetings. Onyx handles the food, and a full floor can be closed for private use.',
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
        desc: 'Stay three nights with the third night included. Daily breakfast at Onyx is part of the stay.',
      },
      {
        tag: 'Suite',
        name: 'Suite Escape',
        desc: 'A Signature Suite for two, one 60-minute treatment per guest, and checkout at 4pm.',
      },
      {
        tag: 'Table',
        name: 'Chef’s Table',
        desc: 'One night in-house, two seats at the Onyx counter, and a paired wine selection.',
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
      'House car within central Seoul, on request',
      'Valet parking for hotel guests',
    ],
    hoursLabel: 'Front desk',
    hours: ['Reception · 24 hours', 'Check-in · from 15:00', 'Check-out · until 12:00'],
  },
  footer: {
    tagline: 'A private hotel on the upper floors of a restored tower in Yongsan, Seoul.',
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
    headline: ['서울의 밤에', '머무는 호텔'],
    subtitle: '용산의 복원된 타워 상층부, 서른여덟 개의 객실. 낮은 조도와 조용한 서비스, 사적인 시간을 위해 설계한 호텔입니다.',
    cta: '예약하기',
    scroll: '공간 보기',
  },
  signature: {
    eyebrow: '메종에 대하여',
    quote: '“객실 수를 줄이고, 조도를 낮추고, 응대는 더 조용하게 만들었습니다.”',
    body: '메종 누아르는 소월로 안쪽 복원된 타워의 상층 네 개 층을 사용합니다. 큰 로비나 복잡한 동선 대신, 전용 엘리베이터와 작은 데스크, 그리고 투숙객의 리듬을 방해하지 않는 서비스를 준비했습니다.',
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
        features: ['킹 베드와 라운지 코너', '월넛 미니 바', '스톤 욕조'],
        rate: '₩390,000부터',
      },
      {
        name: '시그니처 스위트',
        size: '82 m²',
        view: '강과 산',
        features: ['독립된 거실', '프라이빗 바와 테라스', '요청 시 버틀러 서비스'],
        rate: '₩720,000부터',
      },
      {
        name: '누아르 펜트하우스',
        size: '155 m²',
        view: '최상층 파노라마',
        features: ['침실 2개', '랩어라운드 테라스', '전담 하우스 매니저'],
        rate: '₩2,400,000부터',
      },
    ],
  },
  dining: {
    eyebrow: '다이닝',
    title: '테이블 & 바',
    intro: '카운터 레스토랑과 바는 투숙객이 아니어도 이용할 수 있습니다. ONYX는 사전 예약을 권하고, CELLAR NOIR는 늦은 시간 일부 좌석을 비워 둡니다.',
    venues: [
      {
        kicker: '레스토랑',
        name: 'ONYX',
        line: '열두 석의 카운터에서 시장과 계절에 맞춘 한식 테이스팅 코스를 선보입니다.',
        hours: '디너 · 화–일 · 18:00–22:00',
      },
      {
        kicker: '바',
        name: 'CELLAR NOIR',
        line: '호텔 아래층의 낮은 조도, 오래된 스피릿과 위스키 리스트, 늦게까지 이어지는 레코드.',
        hours: '매일 · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: '웰니스',
    title: '스파 & 웰니스',
    body: '로비 아래 두 개 층에는 온수 풀, 스팀룸, 네 개의 트리트먼트 룸이 있습니다. 세션은 시간 단위로 예약하고, 오전 6시부터는 조용히 물을 쓰고 싶은 투숙객을 위해 풀이 열립니다.',
    treatmentsLabel: '시그니처 트리트먼트',
    treatments: [
      '누아르 리추얼 · 120분',
      '딥 티슈 리스토레이션 · 90분',
      '허벌 스팀과 스크럽 · 60분',
      '커플 트와일라잇 세션 · 150분',
    ],
  },
  events: {
    eyebrow: '모임',
    title: '미팅 & 이벤트',
    body: '프라이빗 다이닝, 브랜드 론칭, 소규모 회의를 위한 룸 두 곳과 루프탑 테라스를 운영합니다. 음식은 ONYX가 맡고, 필요 시 한 층 전체를 단독으로 사용할 수 있습니다.',
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
        name: '세 번째 밤 포함',
        desc: '3박 예약 시 세 번째 밤을 포함해 드립니다. 매일 아침 ONYX 조식이 함께 제공됩니다.',
      },
      {
        tag: '스위트',
        name: '스위트 이스케이프',
        desc: '2인 시그니처 스위트, 1인 60분 트리트먼트, 오후 4시 체크아웃으로 구성됩니다.',
      },
      {
        tag: '테이블',
        name: '셰프스 테이블',
        desc: '하룻밤 숙박, ONYX 카운터 2인 좌석, 페어링 와인을 함께 준비합니다.',
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
      '공항철도 서울역에서 차량 7분',
      '남산 케이블카에서 도보 4분',
      '요청 시 서울 도심 하우스카 운행',
      '투숙객 발렛 파킹 제공',
    ],
    hoursLabel: '프론트 데스크',
    hours: ['리셉션 · 24시간', '체크인 · 15:00부터', '체크아웃 · 12:00까지'],
  },
  footer: {
    tagline: '서울 용산, 복원된 타워 상층부의 프라이빗 호텔.',
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
