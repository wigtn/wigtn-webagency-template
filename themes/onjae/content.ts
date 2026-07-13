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
    subtitle: '마당과 대청이 있는 오래된 한옥을, 하루 동안 통째로 씁니다.',
    scroll: '천천히 내려오세요',
  },
  philosophy: {
    eyebrow: '공간 이야기',
    paragraphs: [
      '온재는 오래된 한옥을 손봐 지금까지 지내온 집입니다. 방을 많이 두지 않았고, 마당은 그대로 비워 두었습니다. 창호지로 든 빛과 마당을 지나는 바람만으로도 하루가 넉넉합니다.',
      '이곳에서는 딱히 할 일을 만들지 않아도 됩니다. 마루에 앉아 마당을 보거나, 낮잠을 자거나, 그냥 아무것도 하지 않아도 좋습니다. 하루쯤은 그렇게 보내시라고 집을 통째로 내어드립니다.',
    ],
  },
  house: {
    eyebrow: '독채 공간',
    title: '집을 따라 걷다',
    intro: '대문을 열면 마당, 마당을 지나면 대청, 그 안쪽으로 온돌방과 부엌이 이어집니다. 온재의 네 공간을 미리 둘러보세요.',
    spaces: [
      {
        no: '01',
        name: '마당',
        nameEn: 'Courtyard',
        line: '낮은 돌담으로 둘러싸인 안마당입니다. 아침에는 햇살이 들고, 밤에는 조용합니다.',
        img: '/images/onjae/house-4.jpg',
      },
      {
        no: '02',
        name: '대청',
        nameEn: 'Wooden Hall',
        line: '마당이 내다보이는 넓은 마루입니다. 문을 다 열어 두면 바람이 시원하게 지나갑니다.',
        img: '/images/onjae/house-1.jpg',
      },
      {
        no: '03',
        name: '온돌방',
        nameEn: 'Ondol Room',
        line: '구들을 데운 따뜻한 방입니다. 두툼한 이불을 깔아 두었으니 등을 붙이고 푹 쉬세요.',
        img: '/images/onjae/house-2.jpg',
      },
      {
        no: '04',
        name: '부엌',
        nameEn: 'Kitchen',
        line: '작지만 필요한 건 다 갖춘 부엌입니다. 아침상은 여기서 차려 드립니다.',
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
      { name: '조식', desc: '그날 준비된 재료로 차리는 아침상' },
      { name: '차', desc: '우려 드실 수 있는 국내산 차와 다구' },
      { name: '온돌 난방', desc: '구들을 데워 은은하게 이어지는 온기' },
      { name: '침구', desc: '햇볕에 말린 면 이불과 요' },
      { name: '마당', desc: '온재에 머무는 동안은 온전히 손님만의 안마당' },
      { name: '주차', desc: '대문 앞 전용 주차 1대' },
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
        desc: '대청에 앉아 물을 올리고 차를 우려 마시는 느긋한 오후. 다구와 차는 준비해 둡니다.',
      },
      {
        no: '02',
        name: '마당의 아침',
        nameEn: 'Morning in the Yard',
        desc: '일찍 눈이 떠지면 마당으로 나와 보세요. 아침 공기가 좋습니다.',
      },
      {
        no: '03',
        name: '근처 산책',
        nameEn: 'A Quiet Walk',
        desc: '낮은 담을 낀 골목을 따라 십 분쯤 걸으면 마을 찻집과 산책로가 나옵니다.',
      },
    ],
  },
  location: {
    eyebrow: '위치',
    statement: '큰길에서 조금 들어간, 오래된 마을의 한적한 골목 끝에 온재가 있습니다.',
    access: [
      { label: '지역', value: '조용한 전통 마을. 상세 주소는 예약 확정 후 알려드립니다.' },
      { label: '차편', value: '대문 앞 주차 1대' },
      { label: '가까운 곳', value: '걸어서 10분 거리에 마을 찻집과 산책로' },
      { label: '체크인', value: '오후 3시부터 · 셀프 체크인' },
    ],
  },
  reservation: {
    eyebrow: '예약 문의',
    title: '하루 한 팀,\n문의 후 예약을 확정합니다.',
    body: '원하시는 날짜와 인원을 메일로 남겨 주세요. 가능 여부를 확인하고 예약 방법을 안내해 드립니다.',
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
    subtitle: 'An old hanok with a courtyard and wooden hall — yours for the whole day.',
    scroll: 'Scroll slowly',
  },
  philosophy: {
    eyebrow: 'The Space',
    paragraphs: [
      'Onjae is an old hanok we have kept up and lived in. There are only a few rooms, and we left the courtyard open. The light through the paper windows and the breeze across the yard are enough to fill a day.',
      'You do not have to make plans here. Sit on the wooden floor and look at the yard, take a nap, or do nothing at all. We hand over the whole house so you can spend a day just like that.',
    ],
  },
  house: {
    eyebrow: 'The Whole House',
    title: 'Walking the house',
    intro: 'Through the gate is the courtyard; past it, the wooden hall, and inside, the ondol room and kitchen. Here are the four spaces of Onjae.',
    spaces: [
      {
        no: '01',
        name: '마당',
        nameEn: 'Courtyard',
        line: 'An inner yard ringed by low stone walls. Sun in the morning, and quiet at night.',
        img: '/images/onjae/house-4.jpg',
      },
      {
        no: '02',
        name: '대청',
        nameEn: 'Wooden Hall',
        line: 'A wide wooden floor that looks onto the yard. Slide all the doors open and the breeze runs right through.',
        img: '/images/onjae/house-1.jpg',
      },
      {
        no: '03',
        name: '온돌방',
        nameEn: 'Ondol Room',
        line: 'A warm room heated the old way, through the floor. Thick bedding is laid out — lie back and rest.',
        img: '/images/onjae/house-2.jpg',
      },
      {
        no: '04',
        name: '부엌',
        nameEn: 'Kitchen',
        line: 'A small kitchen with everything you need. This is where we set out breakfast each morning.',
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
      { name: 'Breakfast', desc: 'A morning table set from whatever is on hand that day' },
      { name: 'Tea', desc: 'Korean tea and a set to brew it, ready for you' },
      { name: 'Ondol Heat', desc: 'The gentle warmth of a floor heated the old way' },
      { name: 'Bedding', desc: 'Sun-dried cotton quilts and mats' },
      { name: 'Courtyard', desc: 'The inner yard, yours alone while you stay' },
      { name: 'Parking', desc: 'One private space at the front gate' },
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
        desc: 'A slow afternoon in the hall, boiling water and steeping tea. The set and leaves are ready.',
      },
      {
        no: '02',
        name: '마당의 아침',
        nameEn: 'Morning in the Yard',
        desc: 'If you wake early, step out into the yard. The morning air is good here.',
      },
      {
        no: '03',
        name: '근처 산책',
        nameEn: 'A Quiet Walk',
        desc: 'Ten minutes down the low-walled alleys brings you to the village teahouse and a walking path.',
      },
    ],
  },
  location: {
    eyebrow: 'Location',
    statement: 'Onjae sits at the quiet end of a lane in an old village, a little away from the busy streets.',
    access: [
      { label: 'Area', value: 'A quiet traditional village. We share the exact address once your stay is confirmed.' },
      { label: 'By Car', value: 'One parking space at the front gate' },
      { label: 'Nearby', value: 'A village teahouse and walking path, ten minutes on foot' },
      { label: 'Check-in', value: 'From 3 PM, self check-in' },
    ],
  },
  reservation: {
    eyebrow: 'Enquire',
    title: 'One party a day,\nconfirmed after enquiry.',
    body: 'Send us the dates and number of guests by email. We will check availability and let you know how to book.',
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
