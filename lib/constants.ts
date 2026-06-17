export const SECTION_IDS = [
  'about',
  'rooms',
  'facilities',
  'long-stay',
  'location',
  'guest-notes',
  'book',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

// NOTE: Demo/template values only. Replace with real links before launch.
export const LONG_STAY_FORM_URL = 'https://forms.gle/your-long-stay-form';
export const BOOKING_COM_URL = 'https://www.booking.com/';
export const AGODA_URL = 'https://www.agoda.com/';
export const TRIP_COM_URL = 'https://www.trip.com/';
export const INSTAGRAM_URL = 'https://www.instagram.com/';
export const EMAIL = 'hello@example.com';

export const GOOGLE_MAPS_URL = 'https://maps.google.com/';
export const NAVER_MAP_URL = 'https://map.naver.com/';

// Google Maps embed — generic Seoul city-center location (demo only).
export const GOOGLE_MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Seoul+City+Hall,+Seoul&ll=37.5665,126.9780&z=15&output=embed';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://example.com';

export const CREW = {
  name: 'WIGTN',
  url: 'https://wigtn.com',
} as const;

export const BUSINESS = {
  name: 'STAY HEAVEN',
  legalName: 'STAY HEAVEN',
  alternateNames: [
    '스테이헤이븐',
    'STAY HEAVEN Seoul',
    'STAY HEAVEN 서울',
    'ステイヘブン',
    'ステイヘブン ソウル',
    '舒适天堂',
    '舒适天堂酒店',
  ],
  streetAddress: '00, Example-ro 00-gil, Jung-gu',
  addressLocality: 'Seoul',
  addressRegion: 'Seoul',
  postalCode: '00000',
  addressCountry: 'KR',
  latitude: 37.5665,
  longitude: 126.978,
  telephone: '+82-2-0000-0000',
  email: EMAIL,
  priceRange: '₩₩',
  checkinTime: '15:00',
  checkoutTime: '11:00',
  numberOfRooms: 13,
} as const;

export const OTA_URLS = {
  booking: BOOKING_COM_URL,
  agoda: AGODA_URL,
  trip: TRIP_COM_URL,
} as const;

export const SEO_KEYWORDS_FALLBACK =
  'STAY HEAVEN, 스테이헤이븐, ステイヘブン, 舒适天堂, Seoul guesthouse, Seoul accommodation, Korean guesthouse, ソウル ゲストハウス, 首尔民宿';

export const LOCALE_LABELS: Record<string, string> = {
  en: 'EN',
  ja: '日本語',
  zh: '中文',
  ko: '한국어',
};
