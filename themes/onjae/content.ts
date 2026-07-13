import type { Locale } from '@/i18n/routing';

export type Content = {
  nav: {
    brandKo: string;
    brandEn: string;
    links: { label: string; href: string }[];
    reserve: string;
  };
  hero: {
    tagline: string;
    headline: string[];
    subtitle: string;
    scroll: string;
  };
  philosophy: {
    eyebrow: string;
    paragraphs: string[];
  };
  house: {
    eyebrow: string;
    title: string;
    intro: string;
    spaces: {
      no: string;
      name: string;
      nameEn: string;
      line: string;
      img: string;
    }[];
  };
  privacy: {
    eyebrow: string;
    statement: string[];
    note: string;
  };
  amenities: {
    eyebrow: string;
    title: string;
    items: { name: string; desc: string }[];
  };
  experiences: {
    eyebrow: string;
    title: string;
    items: { no: string; name: string; nameEn: string; desc: string }[];
  };
  location: {
    eyebrow: string;
    statement: string;
    access: { label: string; value: string }[];
  };
  reservation: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    email: string;
    note: string;
  };
  footer: {
    brandKo: string;
    brandEn: string;
    tagline: string;
    contacts: { label: string; value: string }[];
    credit: string;
  };
};

const ko: Content = {
  nav: {
    brandKo: '온재',
    brandEn: 'ONJAE',
    links: [
      { label: '공간', href: '#house' },
      { label: '이야기', href: '#philosophy' },
      { label: '예약', href: '#reservation' },
    ],
    reserve: '예약 문의',
  },
  hero: {
    tagline: '溫齋 · 따뜻한 집',
    headline: ['하루 한 팀만', '머무는 한옥 독채.'],
    subtitle: '오롯이 당신의 하루를 위한, 오래된 마당과 대청의 고요.',
    scroll: '천천히 내려오세요',
  },
  philosophy: {
    eyebrow: '공간 이야기',
    paragraphs: [
      '온재는 채우는 대신 비웁니다. 마당의 여백, 대청을 지나는 바람, 창호지 사이로 스며드는 빛 — 그 사이의 고요를 위해 지어진 집입니다.',
      '빠르게 흐르던 하루가 이곳에서는 조금 느려집니다. 아무것도 하지 않아도 좋은, 오래 머물러도 지치지 않는 시간. 우리는 그 여백을 손님께 온전히 내어드립니다.',
    ],
  },
  house: {
    eyebrow: '독채 공간',
    title: '집을 따라 걷다',
    intro: '마당에서 대청으로, 온돌방에서 부엌으로. 온재의 네 공간을 천천히 지나며 하루를 그려보세요.',
    spaces: [
      {
        no: '01',
        name: '마당',
        nameEn: 'Courtyard',
        line: '돌담이 감싼 안마당. 아침 햇살과 저녁 정적이 가장 먼저 머무는 곳입니다.',
        img: '/images/onjae/house-4.jpg',
      },
      {
        no: '02',
        name: '대청',
        nameEn: 'Wooden Hall',
        line: '넓은 마루에 앉아 마당을 바라봅니다. 문을 활짝 열면 바람이 집을 관통합니다.',
        img: '/images/onjae/house-1.jpg',
      },
      {
        no: '03',
        name: '온돌방',
        nameEn: 'Ondol Room',
        line: '따뜻하게 데워진 구들. 두툼한 침구에 몸을 누이면 하루의 무게가 가라앉습니다.',
        img: '/images/onjae/house-2.jpg',
      },
      {
        no: '04',
        name: '부엌',
        nameEn: 'Kitchen',
        line: '작지만 단정한 부엌. 아침이면 정갈한 조식이 이곳에서 시작됩니다.',
        img: '/images/onjae/house-3.jpg',
      },
    ],
  },
  privacy: {
    eyebrow: '하루 한 팀',
    statement: ['집 전체가', '온전히 당신의 것입니다.'],
    note: '온재는 하루에 오직 한 팀만 맞이합니다. 마당도, 대청도, 온돌방도 — 다른 손님과 나누지 않습니다.',
  },
  amenities: {
    eyebrow: '편의',
    title: '머무는 동안, 조용히 곁에',
    items: [
      { name: '조식', desc: '계절의 재료로 차린 정갈한 아침상' },
      { name: '차', desc: '언제든 우려 마실 수 있는 국내산 차와 다구' },
      { name: '온돌 난방', desc: '전통 구들의 은은하고 깊은 온기' },
      { name: '침구', desc: '햇볕에 말린 면 침구와 두툼한 이불' },
      { name: '마당', desc: '온전히 열려 있는 사적인 안마당' },
      { name: '고요', desc: '무엇보다, 방해받지 않는 하루' },
    ],
  },
  experiences: {
    eyebrow: '경험',
    title: '온재에서의 하루',
    items: [
      {
        no: '01',
        name: '다도',
        nameEn: 'Tea Ceremony',
        desc: '대청에 앉아 물을 끓이고 차를 우립니다. 손끝이 느려지는 오후의 의식.',
      },
      {
        no: '02',
        name: '마당의 아침',
        nameEn: 'Morning in the Yard',
        desc: '이슬이 마르기 전, 마당에 서서 첫 공기를 마십니다. 하루가 조용히 열립니다.',
      },
      {
        no: '03',
        name: '근처 산책',
        nameEn: 'A Quiet Walk',
        desc: '골목과 낮은 담을 따라 걷는 짧은 산책. 마을의 결을 천천히 느껴보세요.',
      },
    ],
  },
  location: {
    eyebrow: '위치',
    statement: '번잡함에서 한 걸음 물러난, 오래된 마을의 한적한 골목 끝에 온재가 있습니다.',
    access: [
      { label: '지역', value: '고즈넉한 전통 마을 (상세 주소는 예약 확정 후 안내)' },
      { label: '차편', value: '전용 주차 1대 · 대문 앞 진입 가능' },
      { label: '가까운 곳', value: '도보 10분 거리의 마을 찻집과 산책로' },
      { label: '체크인', value: '오후 3시 이후 · 비대면 안내' },
    ],
  },
  reservation: {
    eyebrow: '예약 문의',
    title: '하루 한 팀,\n문의 후 예약을 확정합니다.',
    body: '정해진 날짜와 인원, 머물고 싶은 이유를 간단히 전해주세요. 온재의 하루가 당신께 어울릴지 함께 살펴보고 안내드리겠습니다.',
    cta: '예약 문의하기',
    email: 'stay@onjae.example',
    note: '하루 한 팀 · 문의 후 예약 확정',
  },
  footer: {
    brandKo: '온재',
    brandEn: 'ONJAE',
    tagline: '溫齋 · 하루 한 팀만 머무는 한옥 독채',
    contacts: [
      { label: '문의', value: 'stay@onjae.example' },
      { label: '전화', value: '02 000 0000' },
      { label: '시간', value: '평일 10:00 – 18:00' },
    ],
    credit: 'Site by WIGTN',
  },
};

const en: Content = {
  nav: {
    brandKo: '온재',
    brandEn: 'ONJAE',
    links: [
      { label: 'The House', href: '#house' },
      { label: 'Story', href: '#philosophy' },
      { label: 'Reserve', href: '#reservation' },
    ],
    reserve: 'Enquire',
  },
  hero: {
    tagline: '溫齋 · The Warm House',
    headline: ['A hanok for one', 'party a day.'],
    subtitle: 'The stillness of an old courtyard and wooden hall, kept for your day alone.',
    scroll: 'Scroll slowly',
  },
  philosophy: {
    eyebrow: 'The Space',
    paragraphs: [
      'Onjae empties rather than fills. The openness of the yard, the breeze crossing the hall, light seeping through paper windows — this house was built for the quiet in between.',
      'Here the day slows a little. Time you can rest in without doing anything, hours that never tire you. That emptiness is what we offer, wholly, to our guests.',
    ],
  },
  house: {
    eyebrow: 'The Whole House',
    title: 'Walking the house',
    intro: 'From the yard to the hall, from the ondol room to the kitchen — pass slowly through the four spaces of Onjae.',
    spaces: [
      {
        no: '01',
        name: '마당',
        nameEn: 'Courtyard',
        line: 'An inner yard held by low stone walls, where morning light and evening quiet settle first.',
        img: '/images/onjae/house-4.jpg',
      },
      {
        no: '02',
        name: '대청',
        nameEn: 'Wooden Hall',
        line: 'Sit on the wide wooden floor and look out over the yard. Open the doors and the wind crosses the house.',
        img: '/images/onjae/house-1.jpg',
      },
      {
        no: '03',
        name: '온돌방',
        nameEn: 'Ondol Room',
        line: 'A warm heated floor. Lie down in thick bedding and the weight of the day settles.',
        img: '/images/onjae/house-2.jpg',
      },
      {
        no: '04',
        name: '부엌',
        nameEn: 'Kitchen',
        line: 'A small, tidy kitchen. Each morning, a quiet breakfast begins here.',
        img: '/images/onjae/house-3.jpg',
      },
    ],
  },
  privacy: {
    eyebrow: 'One Party a Day',
    statement: ['The whole house', 'is entirely yours.'],
    note: 'Onjae welcomes only one party each day. The yard, the hall, the ondol room — none of it shared with another guest.',
  },
  amenities: {
    eyebrow: 'Amenities',
    title: 'Quietly, at your side',
    items: [
      { name: 'Breakfast', desc: 'A simple morning table set from seasonal ingredients' },
      { name: 'Tea', desc: 'Korean tea and utensils to brew whenever you like' },
      { name: 'Ondol Heat', desc: 'The gentle, deep warmth of a traditional heated floor' },
      { name: 'Bedding', desc: 'Sun-dried cotton bedding and thick quilts' },
      { name: 'Courtyard', desc: 'A private inner yard, entirely open to you' },
      { name: 'Quiet', desc: 'Above all, a day undisturbed' },
    ],
  },
  experiences: {
    eyebrow: 'Experiences',
    title: 'A day at Onjae',
    items: [
      {
        no: '01',
        name: '다도',
        nameEn: 'Tea Ceremony',
        desc: 'Sit in the hall, boil the water, steep the tea. An afternoon ritual that slows the hands.',
      },
      {
        no: '02',
        name: '마당의 아침',
        nameEn: 'Morning in the Yard',
        desc: 'Before the dew dries, stand in the yard and breathe the first air. The day opens quietly.',
      },
      {
        no: '03',
        name: '근처 산책',
        nameEn: 'A Quiet Walk',
        desc: 'A short walk along the alleys and low walls. Feel the grain of the village slowly.',
      },
    ],
  },
  location: {
    eyebrow: 'Location',
    statement: 'A step back from the bustle, Onjae sits at the quiet end of an alley in an old village.',
    access: [
      { label: 'Area', value: 'A serene traditional village (full address shared after confirmation)' },
      { label: 'By Car', value: 'One private parking space, entry at the front gate' },
      { label: 'Nearby', value: 'A village teahouse and walking path, ten minutes on foot' },
      { label: 'Check-in', value: 'After 3 PM, contactless guidance' },
    ],
  },
  reservation: {
    eyebrow: 'Enquire',
    title: 'One party a day,\nconfirmed after enquiry.',
    body: 'Tell us your dates, party size, and a little of why you would like to stay. We will see together whether a day at Onjae suits you, and guide you from there.',
    cta: 'Send an enquiry',
    email: 'stay@onjae.example',
    note: 'One party a day · confirmed after enquiry',
  },
  footer: {
    brandKo: '온재',
    brandEn: 'ONJAE',
    tagline: '溫齋 · A whole hanok for one party a day',
    contacts: [
      { label: 'Enquiry', value: 'stay@onjae.example' },
      { label: 'Phone', value: '+82 2 000 0000' },
      { label: 'Hours', value: 'Weekdays 10:00 – 18:00' },
    ],
    credit: 'Site by WIGTN',
  },
};

export function getContent(locale: Locale): Content {
  return locale === 'ko' ? ko : en;
}
