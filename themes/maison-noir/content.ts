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
    headline: ['A small hotel', 'above Seoul'],
    subtitle:
      'Thirty-eight rooms on the upper floors of a 1930s tower in Yongsan. Quiet, dark, and easy to disappear into.',
    cta: 'Reserve a stay',
    scroll: 'Scroll',
  },
  signature: {
    eyebrow: 'The House',
    quote:
      '“We kept it small on purpose. Thirty-eight rooms means we can actually know the people staying in them.”',
    body: 'Maison Noir occupies the top four floors of a restored 1930s tower off Sowol-ro. There is no grand lobby and no tour groups — you come up in a private lift, and someone at the desk already knows your name. Most of our guests come back.',
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
      'A restaurant and a bar, both open to non-guests. Book the counter a week or two ahead; the bar takes walk-ins most nights.',
    venues: [
      {
        kicker: 'The Restaurant',
        name: 'Onyx',
        line: 'Twelve seats at the counter and a set Korean tasting menu that changes every few weeks with what the market has.',
        hours: 'Dinner · Tue–Sun · 18:00–22:00',
      },
      {
        kicker: 'The Bar',
        name: 'Cellar Noir',
        line: 'A low-lit room downstairs — old spirits, a deep whisky list, and records playing until late.',
        hours: 'Nightly · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: 'Wellness',
    title: 'Spa & Wellness',
    body: 'Two floors below the lobby: a thermal pool, a steam room, and four treatment rooms. Guests can book by the hour, and the pool is open from 6am if you just want the water to yourself.',
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
    body: 'Two private rooms and a rooftop terrace for dinners, launches, and small board meetings. Onyx handles the food; we can close a floor entirely if you need the privacy.',
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
        desc: 'Book three nights and the third is on us. Breakfast at Onyx is included each morning.',
      },
      {
        tag: 'Suite',
        name: 'Suite Escape',
        desc: 'A Signature Suite for two, a 60-minute treatment each, and checkout at 4pm.',
      },
      {
        tag: 'Table',
        name: 'Chef’s Table',
        desc: 'A room for the night plus two seats at the Onyx counter, wine included.',
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
    tagline: 'A small hotel on the upper floors of a 1930s tower in Yongsan, Seoul.',
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
    headline: ['서울 위,', '작은 호텔'],
    subtitle: '용산의 1930년대 타워 상층부, 서른여덟 개의 객실. 조용하고 어둑하게, 하루쯤 사라지기 좋은 곳.',
    cta: '예약하기',
    scroll: '스크롤',
  },
  signature: {
    eyebrow: '메종에 대하여',
    quote: '“일부러 작게 지었습니다. 서른여덟 개 객실이면, 머무시는 분들을 실제로 기억할 수 있으니까요.”',
    body: '메종 누아르는 소월로 안쪽, 1930년대에 지어진 건물을 고쳐 그 위 네 개 층을 씁니다. 넓은 로비도, 단체 관광객도 없습니다. 전용 엘리베이터로 올라오면 프론트에서 이미 이름을 알고 맞이합니다. 대부분의 손님이 다시 찾아옵니다.',
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
    intro: '레스토랑과 바 모두 투숙객이 아니어도 이용하실 수 있습니다. 카운터는 1~2주 전 예약을 권하고, 바는 대부분의 저녁에 워크인이 가능합니다.',
    venues: [
      {
        kicker: '레스토랑',
        name: 'ONYX',
        line: '카운터 열두 석. 그날 시장에서 들어온 재료로 몇 주마다 바뀌는 한식 코스를 냅니다.',
        hours: '디너 · 화–일 · 18:00–22:00',
      },
      {
        kicker: '바',
        name: 'CELLAR NOIR',
        line: '아래층의 어둑한 방. 오래된 주류와 깊은 위스키 리스트, 그리고 늦게까지 도는 레코드.',
        hours: '매일 · 17:00–01:00',
      },
    ],
  },
  spa: {
    eyebrow: '웰니스',
    title: '스파 & 웰니스',
    body: '로비 아래 두 개 층에 온천 풀과 스팀룸, 트리트먼트 룸 네 개가 있습니다. 시간 단위로 예약할 수 있고, 물만 조용히 쓰고 싶다면 오전 6시부터 풀이 열려 있습니다.',
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
    body: '디너, 론칭, 소규모 회의를 위한 프라이빗 룸 두 곳과 루프탑 테라스가 있습니다. 음식은 ONYX가 맡고, 필요하다면 한 층을 통째로 비워 드립니다.',
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
        name: '3박에 2박 요금',
        desc: '3박을 예약하면 하룻밤은 저희가 냅니다. 매일 아침 ONYX 조식이 포함됩니다.',
      },
      {
        tag: '스위트',
        name: '스위트 이스케이프',
        desc: '2인 시그니처 스위트, 1인당 60분 트리트먼트, 그리고 오후 4시 체크아웃.',
      },
      {
        tag: '테이블',
        name: '셰프스 테이블',
        desc: '하룻밤 숙박과 ONYX 카운터 2인 좌석, 와인까지 포함한 구성.',
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
    tagline: '서울 용산, 1930년대 타워 상층부의 작은 호텔.',
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
