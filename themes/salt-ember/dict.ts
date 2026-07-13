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
    lunchLabel: string;
    dinnerLabel: string;
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
    kicker: 'Seasonal · Charcoal Kitchen',
    title: 'Charcoal, salt,',
    titleAccent: 'and the season.',
    lead: 'A small fine-dining room in Seoul. We cook over charcoal, season with salt, and build the course around what is good that week.',
    cta: 'Reserve a table',
    scroll: 'Scroll',
  },
  menu: {
    kicker: 'Course · Seasonal Menu',
    title: 'The Tasting',
    intro: 'One set course that changes with the season. Most dishes are grilled over charcoal or finished with salt.',
    courses: [
      {
        name: 'Dinner Course',
        price: '₩120,000',
        blurb: 'Seven courses · appetiser to dessert',
      },
      {
        name: 'Lunch Course',
        price: '₩65,000',
        blurb: 'Four courses · a lighter midday menu',
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
    title: 'Charcoal, salt, and good timing.',
    body: [
      'Salt & Ember started with one grill. We would rather let charcoal and salt do the work than cover a dish in sauce — so most of what we serve comes down to good ingredients and getting the timing right.',
      'We pick what is best that week, cook it over live coal, and season with sea salt from the southern coast.',
    ],
    signature: 'Jae-min Seo',
    role: 'Owner · Chef',
    portraitTag: 'At the grill since 2014',
  },
  gallery: {
    kicker: 'The Room',
    title: 'Warm fire, low light.',
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
    kicker: 'Reviews',
    title: 'What guests are saying.',
    items: [
      {
        quote: 'Simple, ingredient-first cooking. The charcoal and the salt were spot on, and nothing felt fussy.',
        name: 'Hana L.',
        meta: 'Dinner Course · Spring',
        rating: 5,
      },
      {
        quote: 'Came for a birthday and kept thinking about the burnt honey custard afterwards. Grab the counter seats if you can.',
        name: 'Marcus V.',
        meta: 'The Fire Counter',
        rating: 5,
      },
      {
        quote: 'Each course really tasted of the season. Relaxed room, friendly service — we already booked our next visit.',
        name: 'Ji-woo P.',
        meta: 'Lunch Course · Autumn',
        rating: 5,
      },
    ],
  },
  visit: {
    kicker: 'Location & Hours',
    title: 'How to find us.',
    addressLabel: 'Address',
    address: ['14, Itaewon-ro 55ga-gil', 'Yongsan-gu, Seoul', 'Republic of Korea'],
    hoursLabel: 'Hours',
    lunchLabel: 'Lunch',
    dinnerLabel: 'Dinner',
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
    title: 'Reserve a table.',
    lead: 'We seat guests at the counter and in the dining room only. Send a request below and we will confirm by phone.',
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
    tagline: 'Seasonal courses over charcoal and salt. Itaewon, Seoul.',
    contactLabel: 'Contact',
    followLabel: 'Follow',
    rights: 'All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

const ko: Dict = {
  nav: { menu: '메뉴', story: '이야기', visit: '방문', reserve: '예약' },
  hero: {
    kicker: '시즌 · 숯불 요리',
    title: '숯불과 소금,',
    titleAccent: '그리고 제철.',
    lead: '숯불에 굽고 소금으로 간을 맞춥니다. 제철 재료로 코스를 짜는 서울의 작은 파인다이닝, SALT & EMBER.',
    cta: '테이블 예약하기',
    scroll: '아래로',
  },
  menu: {
    kicker: '코스 · 시즌 메뉴',
    title: '테이스팅 코스',
    intro: '제철에 맞춰 코스가 바뀝니다. 대부분의 요리는 숯불에 굽거나 소금으로 마무리합니다.',
    courses: [
      { name: '디너 코스', price: '₩120,000', blurb: '일곱 코스 · 전채부터 디저트까지' },
      { name: '런치 코스', price: '₩65,000', blurb: '네 코스 · 가볍게 즐기는 낮 코스' },
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
    title: '숯불과 제철 재료로.',
    body: [
      'SALT & EMBER는 그릴 하나로 시작했습니다. 소스로 덮기보다 숯불과 소금, 그리고 굽는 타이밍으로 재료 본연의 맛을 살리려 합니다.',
      '그날그날 좋은 제철 재료를 골라 숯불에 굽고, 남해안에서 직접 가져온 천일염으로 간을 맞춥니다.',
    ],
    signature: '서재민',
    role: '오너 셰프',
    portraitTag: '2014년부터 그릴 앞에서',
  },
  gallery: {
    kicker: '공간',
    title: '따뜻한 불, 그리고 낮은 조명.',
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
    kicker: '방문 후기',
    title: '다녀간 분들의 이야기.',
    items: [
      {
        quote: '군더더기 없이 재료 맛으로 승부하는 곳. 숯불 향과 소금 간이 딱 좋았어요.',
        name: '이하나',
        meta: '디너 코스 · 봄',
        rating: 5,
      },
      {
        quote: '생일에 갔는데 태운 꿀 커스터드가 한동안 생각났어요. 카운터석 자리 추천합니다.',
        name: 'Marcus V.',
        meta: '파이어 카운터',
        rating: 5,
      },
      {
        quote: '코스마다 제철 느낌이 잘 살아 있었어요. 공간도 편하고 응대도 친절해서 벌써 다음 예약 잡았습니다.',
        name: '박지우',
        meta: '런치 코스 · 가을',
        rating: 5,
      },
    ],
  },
  visit: {
    kicker: '위치 & 시간',
    title: '찾아오시는 길.',
    addressLabel: '주소',
    address: ['서울 용산구 이태원로55가길 14', '용산구, 서울', '대한민국'],
    hoursLabel: '영업시간',
    lunchLabel: '런치',
    dinnerLabel: '디너',
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
    title: '테이블을 예약하세요.',
    lead: '카운터석과 다이닝 룸으로만 운영합니다. 아래로 요청을 남겨 주시면 전화로 확정해 드립니다.',
    dateLabel: '날짜',
    partyLabel: '인원',
    timeLabel: '시간',
    party: ['1명', '2명', '3명', '4명', '5명', '6명', '7명 이상'],
    times: ['런치 · 12:00', '런치 · 13:00', '디너 · 18:00', '디너 · 19:00', '디너 · 20:00', '디너 · 21:00'],
    submit: '예약 요청하기',
    fineprint: '데모용 폼입니다 — 실제로 예약이 전송되지 않습니다.',
  },
  footer: {
    tagline: '숯불과 소금으로 짓는 제철 코스. 서울 이태원.',
    contactLabel: '연락처',
    followLabel: '팔로우',
    rights: 'All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

export function getDict(locale: Locale): Dict {
  return locale === 'ko' ? ko : en;
}
