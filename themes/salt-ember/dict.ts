import type { Locale } from '@/i18n/routing';

type Dish = { name: string; note: string };
type Stage = { tag: string; label: string; dishes: Dish[] };
type Course = { name: string; price: string; blurb: string };
type GalleryTile = { label: string; sub: string; a: string; b: string };
type Review = { quote: string; name: string; meta: string; rating: number };

export type Dict = {
  nav: { menu: string; story: string; visit: string; reserve: string };
  hero: {
    kicker: string;
    title: string;
    titleAccent: string;
    lead: string;
    cta: string;
    scroll: string;
  };
  menu: {
    kicker: string;
    title: string;
    intro: string;
    courses: Course[];
    stages: Stage[];
    note: string;
  };
  story: {
    kicker: string;
    title: string;
    body: string[];
    signature: string;
    role: string;
    portraitTag: string;
  };
  gallery: { kicker: string; title: string; tiles: GalleryTile[] };
  reviews: { kicker: string; title: string; items: Review[] };
  visit: {
    kicker: string;
    title: string;
    addressLabel: string;
    address: string[];
    hoursLabel: string;
    hours: { day: string; lunch: string; dinner: string }[];
    closed: string;
    phoneLabel: string;
    phone: string;
    directions: string;
  };
  reservation: {
    kicker: string;
    title: string;
    lead: string;
    dateLabel: string;
    partyLabel: string;
    timeLabel: string;
    party: string[];
    times: string[];
    submit: string;
    fineprint: string;
  };
  footer: {
    tagline: string;
    contactLabel: string;
    followLabel: string;
    rights: string;
    credit: string;
  };
};

const en: Dict = {
  nav: { menu: 'Menu', story: 'Story', visit: 'Visit', reserve: 'Reserve' },
  hero: {
    kicker: 'Seasonal · Fire Kitchen',
    title: 'Fire, salt, and the',
    titleAccent: 'season on a plate.',
    lead: 'A live-flame tasting kitchen in Seoul, cooking the turning of each season over embers, smoke, and hand-harvested salt.',
    cta: 'Reserve a table',
    scroll: 'Scroll',
  },
  menu: {
    kicker: 'Course · Seasonal Menu',
    title: 'The Tasting',
    intro: 'A single set journey, changing with the season. Everything meets fire or salt before it reaches you.',
    courses: [
      {
        name: 'Dinner Course',
        price: '₩120,000',
        blurb: 'Seven movements · from ember to sweet',
      },
      {
        name: 'Lunch Course',
        price: '₩65,000',
        blurb: 'Four movements · a lighter fire',
      },
    ],
    stages: [
      {
        tag: '01',
        label: 'Amuse',
        dishes: [
          { name: 'Ember Oyster', note: 'flame-kissed oyster, sea salt, green apple mignonette' },
          { name: 'Charred Milk Bread', note: 'house cultured butter, smoked flake salt' },
        ],
      },
      {
        tag: '02',
        label: 'Appetizer · 전채',
        dishes: [
          { name: 'Salt-Cured Amberjack', note: 'three-day cure, burnt citrus, perilla oil' },
          { name: 'Grilled Leek & Bone Marrow', note: 'coal-roasted leek, marrow butter, chive ash' },
        ],
      },
      {
        tag: '03',
        label: 'Main · 메인',
        dishes: [
          { name: 'Ember-Aged Hanwoo', note: '45-day, over binchotan, fermented pepper jus' },
          { name: 'Coal-Smoked Pork Ribs', note: 'six-hour smoke, salt rub, charred scallion' },
          { name: 'Grilled Catch of the Day', note: 'flame-grilled seasonal fish, brown butter, herbs' },
        ],
      },
      {
        tag: '04',
        label: 'Dessert · 디저트',
        dishes: [
          { name: 'Burnt Honey Custard', note: 'caramelised honey, smoked cream, sea salt' },
          { name: 'Ember Pear', note: 'coal-roasted pear, amber caramel, toasted grain' },
        ],
      },
    ],
    note: 'Menu changes with the market. Please tell us of allergies when you reserve.',
  },
  story: {
    kicker: 'The Chef',
    title: 'Cooking the season, one fire at a time.',
    body: [
      'Salt & Ember began with a single grill and a belief that fire tells the truth about an ingredient. No sauces to hide behind — only smoke, salt, and timing.',
      'Every plate is built around what the season is giving that week, cooked over live coal and finished with salt harvested by hand from the southern coast.',
    ],
    signature: 'Jae-min Seo',
    role: 'Chef · Founder',
    portraitTag: 'At the fire since 2014',
  },
  gallery: {
    kicker: 'The Room',
    title: 'Warmth, smoke, and quiet light.',
    tiles: [
      { label: 'Smoked Broth', sub: 'noodles & blistered tomato', a: '#c65f3a', b: '#1a1512' },
      { label: 'Seared Scallops', sub: 'from the fire counter', a: '#d9a441', b: '#7a3b22' },
      { label: 'Sliced & Fired Steak', sub: 'over binchotan', a: '#3a2a20', b: '#1a1512' },
      { label: 'Ember Beef Salad', sub: 'charred & bright', a: '#a08d7e', b: '#2a2018' },
      { label: 'Grilled Catch', sub: 'salt & sea', a: '#d9a441', b: '#c65f3a' },
      { label: 'Smoked Pork Ribs', sub: 'low over coal', a: '#7a3b22', b: '#1a1512' },
    ],
  },
  reviews: {
    kicker: 'Guests',
    title: 'What the table says.',
    items: [
      {
        quote: 'The most honest cooking in the city. You taste the fire, the salt, and nothing pretending to be anything else.',
        name: 'Hana L.',
        meta: 'Dinner Course · Spring',
        rating: 5,
      },
      {
        quote: 'We came for a birthday and left talking about the burnt honey custard for a week. The counter seats are magic.',
        name: 'Marcus V.',
        meta: 'The Fire Counter',
        rating: 5,
      },
      {
        quote: 'Every course felt like the season on a plate. Warm room, warmer welcome. We already re-booked.',
        name: 'Ji-woo P.',
        meta: 'Lunch Course · Autumn',
        rating: 5,
      },
    ],
  },
  visit: {
    kicker: 'Location & Hours',
    title: 'Find the fire.',
    addressLabel: 'Address',
    address: ['14, Itaewon-ro 55ga-gil', 'Yongsan-gu, Seoul', 'Republic of Korea'],
    hoursLabel: 'Hours',
    hours: [
      { day: 'Wed – Fri', lunch: '12:00 – 14:00', dinner: '18:00 – 22:00' },
      { day: 'Sat – Sun', lunch: '12:00 – 15:00', dinner: '17:30 – 22:00' },
    ],
    closed: 'Closed Monday & Tuesday',
    phoneLabel: 'Reservations',
    phone: '+82 2 555 0199',
    directions: '5 min from Noksapyeong Station, Exit 2',
  },
  reservation: {
    kicker: 'Book a Table',
    title: 'Sit close to the fire.',
    lead: 'Seats are limited to the counter and the dining room. Send a request and we will confirm by phone.',
    dateLabel: 'Date',
    partyLabel: 'Party size',
    timeLabel: 'Time',
    party: ['1 guest', '2 guests', '3 guests', '4 guests', '5 guests', '6 guests', '7+ guests'],
    times: [
      'Lunch · 12:00',
      'Lunch · 13:00',
      'Dinner · 18:00',
      'Dinner · 19:00',
      'Dinner · 20:00',
      'Dinner · 21:00',
    ],
    submit: 'Request reservation',
    fineprint: 'This is a demo form — no reservation is actually sent.',
  },
  footer: {
    tagline: 'A fire-and-salt seasonal kitchen. Seoul.',
    contactLabel: 'Contact',
    followLabel: 'Follow',
    rights: 'All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

const ko: Dict = {
  nav: { menu: '메뉴', story: '이야기', visit: '방문', reserve: '예약' },
  hero: {
    kicker: '시즌 · 불의 주방',
    title: '불과 소금, 그리고',
    titleAccent: '한 접시에 담은 계절.',
    lead: '숯불과 연기, 손으로 거둔 소금으로 계절의 변화를 굽는 서울의 라이브 파이어 테이스팅 키친.',
    cta: '테이블 예약하기',
    scroll: '아래로',
  },
  menu: {
    kicker: '코스 · 시즌 메뉴',
    title: '테이스팅 코스',
    intro: '계절에 따라 바뀌는 하나의 여정. 모든 재료는 불 또는 소금을 거쳐 접시에 오릅니다.',
    courses: [
      { name: '디너 코스', price: '₩120,000', blurb: '일곱 가지 흐름 · 불에서 단맛까지' },
      { name: '런치 코스', price: '₩65,000', blurb: '네 가지 흐름 · 조금 가벼운 불' },
    ],
    stages: [
      {
        tag: '01',
        label: '아뮤즈',
        dishes: [
          { name: '엠버 굴', note: '불향을 입힌 굴, 천일염, 청사과 미뇨네트' },
          { name: '숯향 밀크 브레드', note: '하우스 발효 버터, 훈제 소금 플레이크' },
        ],
      },
      {
        tag: '02',
        label: '전채 · Appetizer',
        dishes: [
          { name: '소금 숙성 방어', note: '3일 숙성, 그을린 시트러스, 들기름' },
          { name: '구운 대파와 사골 골수', note: '숯불 대파, 골수 버터, 차이브 재' },
        ],
      },
      {
        tag: '03',
        label: '메인 · Main',
        dishes: [
          { name: '엠버 숙성 한우', note: '45일 숙성, 참숯 위에서, 발효 고추 육수' },
          { name: '숯불 훈제 돼지 갈비', note: '6시간 훈제, 소금 러브, 그을린 대파' },
          { name: '오늘의 생선 구이', note: '숯불에 구운 제철 생선, 브라운 버터, 허브' },
        ],
      },
      {
        tag: '04',
        label: '디저트 · Dessert',
        dishes: [
          { name: '태운 꿀 커스터드', note: '캐러멜라이즈드 꿀, 훈제 크림, 천일염' },
          { name: '엠버 배', note: '숯불에 구운 배, 앰버 캐러멜, 볶은 곡물' },
        ],
      },
    ],
    note: '메뉴는 그날의 시장에 따라 바뀝니다. 예약 시 알레르기를 알려주세요.',
  },
  story: {
    kicker: '셰프',
    title: '불 하나로 굽는 계절.',
    body: [
      'SALT & EMBER는 그릴 하나에서 시작했습니다. 불은 재료의 진실을 말해준다는 믿음. 숨을 소스는 없습니다 — 오직 연기와 소금, 그리고 타이밍.',
      '모든 접시는 그 주 계절이 내어주는 것을 중심으로, 숯불 위에서 굽고 남해안에서 손으로 거둔 소금으로 마무리합니다.',
    ],
    signature: '서재민',
    role: '셰프 · 창립자',
    portraitTag: '2014년부터 불 앞에서',
  },
  gallery: {
    kicker: '공간',
    title: '따뜻함, 연기, 그리고 낮은 빛.',
    tiles: [
      { label: '훈제 육수 국수', sub: '구운 방울토마토와', a: '#c65f3a', b: '#1a1512' },
      { label: '관자 구이', sub: '파이어 카운터에서', a: '#d9a441', b: '#7a3b22' },
      { label: '숯불 채끝 스테이크', sub: '참숯 위에서', a: '#3a2a20', b: '#1a1512' },
      { label: '엠버 소고기 샐러드', sub: '불향과 산뜻함', a: '#a08d7e', b: '#2a2018' },
      { label: '생선 구이', sub: '소금과 바다', a: '#d9a441', b: '#c65f3a' },
      { label: '훈제 돼지 갈비', sub: '숯불에 은근히', a: '#7a3b22', b: '#1a1512' },
    ],
  },
  reviews: {
    kicker: '게스트',
    title: '테이블의 이야기.',
    items: [
      {
        quote: '이 도시에서 가장 정직한 요리. 불이 느껴지고, 소금이 느껴지고, 무엇도 다른 척하지 않습니다.',
        name: '이하나',
        meta: '디너 코스 · 봄',
        rating: 5,
      },
      {
        quote: '생일에 방문했는데 일주일 내내 태운 꿀 커스터드 이야기만 했어요. 카운터석은 마법입니다.',
        name: 'Marcus V.',
        meta: '파이어 카운터',
        rating: 5,
      },
      {
        quote: '모든 코스가 접시에 담긴 계절 같았어요. 따뜻한 공간, 더 따뜻한 환대. 이미 다시 예약했습니다.',
        name: '박지우',
        meta: '런치 코스 · 가을',
        rating: 5,
      },
    ],
  },
  visit: {
    kicker: '위치 & 시간',
    title: '불을 찾아오세요.',
    addressLabel: '주소',
    address: ['서울 용산구 이태원로55가길 14', '용산구, 서울', '대한민국'],
    hoursLabel: '영업시간',
    hours: [
      { day: '수 – 금', lunch: '12:00 – 14:00', dinner: '18:00 – 22:00' },
      { day: '토 – 일', lunch: '12:00 – 15:00', dinner: '17:30 – 22:00' },
    ],
    closed: '월요일 · 화요일 휴무',
    phoneLabel: '예약 문의',
    phone: '+82 2 555 0199',
    directions: '녹사평역 2번 출구에서 도보 5분',
  },
  reservation: {
    kicker: '테이블 예약',
    title: '불 가까이 앉으세요.',
    lead: '카운터석과 다이닝 룸만 운영합니다. 요청을 보내주시면 전화로 확정해 드립니다.',
    dateLabel: '날짜',
    partyLabel: '인원',
    timeLabel: '시간',
    party: ['1명', '2명', '3명', '4명', '5명', '6명', '7명 이상'],
    times: ['런치 · 12:00', '런치 · 13:00', '디너 · 18:00', '디너 · 19:00', '디너 · 20:00', '디너 · 21:00'],
    submit: '예약 요청하기',
    fineprint: '데모용 폼입니다 — 실제로 예약이 전송되지 않습니다.',
  },
  footer: {
    tagline: '불과 소금의 계절 키친. 서울.',
    contactLabel: '연락처',
    followLabel: '팔로우',
    rights: 'All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

export function getDict(locale: Locale): Dict {
  return locale === 'ko' ? ko : en;
}
