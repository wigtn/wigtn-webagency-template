import type { Locale } from '@/i18n/routing';

export type Dict = {
  nav: { work: string; services: string; studio: string; contact: string };
  hero: {
    kicker: string;
    line1: string;
    accent: string;
    line2: string;
    intro: string;
    marquee: string[];
  };
  work: {
    label: string;
    heading: string;
    projects: {
      name: string;
      category: string;
      year: string;
      desc: string;
      gradient: string;
      image: string;
    }[];
  };
  services: {
    label: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  process: {
    label: string;
    heading: string;
    steps: { title: string; body: string }[];
  };
  studio: {
    label: string;
    heading: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  clients: { label: string; heading: string; names: string[] };
  contact: {
    label: string;
    line: string;
    email: string;
    note: string;
  };
  footer: { tagline: string; socials: string[]; rights: string; credit: string };
};

const en: Dict = {
  nav: { work: 'Work', services: 'Services', studio: 'Studio', contact: 'Contact' },
  hero: {
    kicker: 'Creative studio · Est. 2018 · Seoul',
    line1: 'MADE IN THE',
    accent: 'NOON',
    line2: 'LIGHT',
    intro:
      'A four-person design studio in Seoul. We make brands, websites, and motion — and we build the sites ourselves.',
    marquee: ['Brand', 'Web', 'Motion', 'Art Direction', 'Type', 'Systems'],
  },
  work: {
    label: 'Selected Work',
    heading: 'Things we made',
    projects: [
      {
        name: 'HALFDAY',
        category: 'Brand Identity',
        year: '2025',
        desc: 'Wordmark, packaging, and a typeface for a coffee roaster.',
        gradient: 'linear-gradient(135deg, #2b4bff 0%, #7a00ff 100%)',
        image: '/images/studio-noon/w1.jpg',
      },
      {
        name: 'MERIDIAN',
        category: 'Web · Motion',
        year: '2025',
        desc: 'A marketing site and a 40-second launch film for a mapping app.',
        gradient: 'linear-gradient(135deg, #ff5a1f 0%, #ffd000 100%)',
        image: '/images/studio-noon/w2.jpg',
      },
      {
        name: 'OBSCURA',
        category: 'Art Direction',
        year: '2024',
        desc: 'Sleeve art and a poster series for a small electronic label.',
        gradient: 'linear-gradient(135deg, #00e5ff 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w3.jpg',
      },
      {
        name: 'FIELD NOTES',
        category: 'Brand · Web',
        year: '2024',
        desc: 'A print quarterly and the web reader that goes with it.',
        gradient: 'linear-gradient(135deg, #d6ff2b 0%, #00c46a 100%)',
        image: '/images/studio-noon/w4.jpg',
      },
      {
        name: 'PALE BLUE',
        category: 'Motion',
        year: '2023',
        desc: 'Opening titles and lower-thirds for a climate documentary.',
        gradient: 'linear-gradient(135deg, #ff2b9d 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w5.jpg',
      },
      {
        name: 'RADIO NOON',
        category: 'Brand · Sound',
        year: '2023',
        desc: 'Our own monthly radio show — name, artwork, and jingle.',
        gradient: 'linear-gradient(135deg, #f2f2f2 0%, #9aa0ff 100%)',
        image: '/images/studio-noon/w6.jpg',
      },
    ],
  },
  services: {
    label: 'What we do',
    heading: 'Services',
    items: [
      { title: 'Brand Identity', body: 'Names, logos, and type. The rules that keep them from falling apart.' },
      { title: 'Web Design & Dev', body: 'We design the site and write the code. No handoff, no excuses.' },
      { title: 'Motion', body: 'Launch films, loops, and the small animations that make an interface feel alive.' },
      { title: 'Art Direction', body: 'Photo shoots and campaigns — we decide what it looks like and stand by it.' },
    ],
  },
  process: {
    label: 'How we work',
    heading: 'Process',
    steps: [
      { title: 'Talk', body: 'A long first conversation. We ask what the project is actually for.' },
      { title: 'Sketch', body: 'Rough, fast, and plenty of dead ends until one idea holds up.' },
      { title: 'Build', body: 'Designers and developers at the same desk. Fewer surprises that way.' },
      { title: 'Ship', body: 'We launch it, watch how it does, and fix what needs fixing.' },
    ],
  },
  studio: {
    label: 'About',
    heading: 'Four people, one room',
    body:
      'STUDIO NOON started in 2018 above a bakery in Mapo-gu. We take on maybe eight projects a year — few enough that the people you meet are the people who do the work. No account managers, no back office.',
    stats: [
      { value: '2018', label: 'Founded' },
      { value: '90+', label: 'Projects' },
      { value: '11', label: 'Awards' },
      { value: '4', label: 'Humans' },
    ],
  },
  clients: {
    label: "People we've worked with",
    heading: 'Clients',
    names: [
      'Northbound',
      'Café Halfday',
      'Meridian Labs',
      'Obscura Records',
      'Field Notes',
      'Pale Blue',
      'Atlas Type',
      'Seoul Design Week',
      'Loop Studio',
      'Kindred',
      'Overpass',
      'Daylight Co.',
    ],
  },
  contact: {
    label: 'Contact',
    line: 'Got something in mind?',
    email: 'hello@studionoon.kr',
    note: 'We read every email. Tell us what you are building and when you need it.',
  },
  footer: {
    tagline: 'A design studio in Seoul. Coffee is on us if you visit.',
    socials: ['Instagram', 'Are.na', 'Behance', 'LinkedIn'],
    rights: '© 2026 STUDIO NOON. All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

const ko: Dict = {
  nav: { work: '작업', services: '역량', studio: '소개', contact: '연락' },
  hero: {
    kicker: '크리에이티브 스튜디오 · 2018년 설립 · 서울',
    line1: '정오의 빛으로',
    accent: '만든',
    line2: '것들',
    intro:
      'STUDIO NOON은 명료함과 대담함을 위한 브랜드, 웹, 모션을 만드는 작은 디자인 스튜디오입니다.',
    marquee: ['브랜드', '웹', '모션', '아트 디렉션', '타입', '시스템'],
  },
  work: {
    label: '선별된 작업',
    heading: '우리가 만든 것들',
    projects: [
      {
        name: 'HALFDAY',
        category: '브랜드 아이덴티티',
        year: '2025',
        desc: '슬로우 커피 로스터를 위한 살아 움직이는 아이덴티티 시스템.',
        gradient: 'linear-gradient(135deg, #2b4bff 0%, #7a00ff 100%)',
        image: '/images/studio-noon/w1.jpg',
      },
      {
        name: 'MERIDIAN',
        category: '웹 · 모션',
        year: '2025',
        desc: '지도 도구를 위한 에디토리얼 사이트와 키네틱 런치 필름.',
        gradient: 'linear-gradient(135deg, #ff5a1f 0%, #ffd000 100%)',
        image: '/images/studio-noon/w2.jpg',
      },
      {
        name: 'OBSCURA',
        category: '아트 디렉션',
        year: '2024',
        desc: '실험 음악 레이블을 위한 커버 아트와 캠페인.',
        gradient: 'linear-gradient(135deg, #00e5ff 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w3.jpg',
      },
      {
        name: 'FIELD NOTES',
        category: '브랜드 · 웹',
        year: '2024',
        desc: '디자인 글쓰기를 위한 매거진과 리딩 플랫폼.',
        gradient: 'linear-gradient(135deg, #d6ff2b 0%, #00c46a 100%)',
        image: '/images/studio-noon/w4.jpg',
      },
      {
        name: 'PALE BLUE',
        category: '모션',
        year: '2023',
        desc: '기후 다큐멘터리를 위한 타이틀 시퀀스와 툴킷.',
        gradient: 'linear-gradient(135deg, #ff2b9d 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w5.jpg',
      },
      {
        name: 'RADIO NOON',
        category: '브랜드 · 사운드',
        year: '2023',
        desc: '스튜디오 자체 라디오와 믹스 시리즈를 위한 아이덴티티.',
        gradient: 'linear-gradient(135deg, #f2f2f2 0%, #9aa0ff 100%)',
        image: '/images/studio-noon/w6.jpg',
      },
    ],
  },
  services: {
    label: '우리가 하는 일',
    heading: '제공 역량',
    items: [
      { title: 'Brand Identity', body: '네이밍, 로고 시스템, 타입, 그리고 이를 지탱하는 규칙.' },
      { title: 'Web Design & Dev', body: '실제로 출시할 수 있는 사이트 — 디자인부터 개발까지.' },
      { title: 'Motion', body: '맥박이 뛰는 런치 필름, 루프, 인터페이스 모션.' },
      { title: 'Art Direction', body: '모든 접점을 아우르는 사진과 이미지, 캠페인 디렉션.' },
    ],
  },
  process: {
    label: '작업 방식',
    heading: '프로세스',
    steps: [
      { title: 'Listen', body: '템플릿이 아니라 진짜 대화로 시작합니다.' },
      { title: 'Sketch', body: '빠르고, 거칠고, 정직한 탐색으로 아이디어를 찾습니다.' },
      { title: 'Build', body: '디자인과 엔지니어링을 한 방에서 함께 합니다.' },
      { title: 'Ship', body: '출시하고, 측정하고, 계속 다듬습니다.' },
    ],
  },
  studio: {
    label: '소개',
    heading: '작지만 강하게 치고 올라가는 스튜디오',
    body:
      '2018년에 설립된 STUDIO NOON은 디자이너와 메이커로 이루어진 단단한 팀입니다. 매년 소수의 프로젝트만 맡아 각 작업에 팀 전체가 붙습니다 — 뒤에서 주니어가 진짜 일을 떠맡는 일은 없습니다.',
    stats: [
      { value: '2018', label: '설립' },
      { value: '90+', label: '프로젝트' },
      { value: '11', label: '수상' },
      { value: '4', label: '멤버' },
    ],
  },
  clients: {
    label: '함께한 곳',
    heading: '클라이언트',
    names: [
      'Northbound',
      'Café Halfday',
      'Meridian Labs',
      'Obscura Records',
      'Field Notes',
      'Pale Blue',
      'Atlas Type',
      'Seoul Design Week',
      'Loop Studio',
      'Kindred',
      'Overpass',
      'Daylight Co.',
    ],
  },
  contact: {
    label: '연락',
    line: '함께 무언가를 만들어요',
    email: 'hello@studionoon.kr',
    note: '새 프로젝트, 협업, 아니면 커피 한 잔 — 언제든 문은 열려 있습니다.',
  },
  footer: {
    tagline: '정오의 빛으로 만들었습니다.',
    socials: ['Instagram', 'Are.na', 'Behance', 'LinkedIn'],
    rights: '© 2026 STUDIO NOON. All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

// STUDIO NOON renders English-only regardless of locale (fits a design studio).
export function getDict(_locale: Locale): Dict {
  void _locale;
  return en;
}
