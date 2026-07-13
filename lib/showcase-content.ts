import type { Locale } from '@/i18n/routing';

/** 쇼케이스(메인 랜딩) 카피 — KO/EN 작성, JA/ZH는 EN 폴백. */
export interface ShowcaseCopy {
  nav: { work: string; studio: string; contact: string };
  hero: {
    kicker: string;
    title: string; // 줄바꿈은 \n
    lead: string;
    scroll: string;
  };
  gallery: { eyebrow: string; heading: string; preview: string };
  team: {
    toggleClosed: string;
    toggleOpen: string;
    eyebrow: string;
    title: string;
    body: string;
    capabilitiesTitle: string;
    capabilities: string[];
    processTitle: string;
    process: { step: string; desc: string }[];
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
  footer: { rights: string; madeIn: string };
}

const ko: ShowcaseCopy = {
  nav: { work: '작업', studio: '스튜디오', contact: '문의' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: '브랜드의 결을\n웹으로 짓습니다.',
    lead: '숙소, 식당, 개인 브랜드까지 — 업종마다 결이 다르니까 사이트도 다르게 만듭니다. 아래 다섯 개, 직접 눌러 보세요.',
    scroll: '템플릿 보기',
  },
  gallery: {
    eyebrow: 'TEMPLATES — 05',
    heading: '직접 만든 다섯 개의 템플릿.',
    preview: '미리보기',
  },
  team: {
    toggleClosed: 'WIGTN 팀',
    toggleOpen: '접기',
    eyebrow: 'THE STUDIO',
    title: '작은 팀이라, 끝까지 직접 합니다.',
    body: 'WIGTN은 기획부터 디자인, 개발까지 한 팀에서 하는 작은 웹 스튜디오예요. 정해진 틀에 끼워 맞추지 않고 브랜드마다 구조와 톤을 새로 잡습니다. 다국어·SEO·성능처럼 런칭 뒤에도 오래 쓰이는 것들을 함께 챙겨요.',
    capabilitiesTitle: '하는 일',
    capabilities: [
      '브랜드 웹사이트 디자인 · 개발',
      '다국어(한·영·일·중) · 검색 최적화',
      '성능 · 접근성 · 모바일 대응',
      '런칭 이후 운영과 콘텐츠 관리',
    ],
    processTitle: '진행 방식',
    process: [
      { step: '리서치', desc: '업종과 톤 살펴보기' },
      { step: '디자인', desc: '구조와 화면 잡기' },
      { step: '개발', desc: '반응형·다국어 구현' },
      { step: '런칭', desc: '배포하고 다듬기' },
    ],
    ctaTitle: '만들고 싶은 사이트가 있나요?',
    ctaBody: '업종이랑 대략의 방향만 알려주세요. 어울리는 구성을 제안해 드릴게요.',
    ctaButton: '문의하기',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const en: ShowcaseCopy = {
  nav: { work: 'Work', studio: 'Studio', contact: 'Contact' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: 'We build the\ntexture of a brand.',
    lead: 'Stays, restaurants, personal brands — every field has its own feel, so every site is different. Have a look at the five below.',
    scroll: 'See templates',
  },
  gallery: {
    eyebrow: 'TEMPLATES — 05',
    heading: 'Five templates we made ourselves.',
    preview: 'Preview',
  },
  team: {
    toggleClosed: 'WIGTN Team',
    toggleOpen: 'Close',
    eyebrow: 'THE STUDIO',
    title: 'Small team. We do it all, end to end.',
    body: 'WIGTN is a small web studio that keeps strategy, design, and build under one roof. We do not force brands into a set template — we shape the structure and tone for each one, and look after the things that matter after launch: languages, SEO, and speed.',
    capabilitiesTitle: 'What we do',
    capabilities: [
      'Brand website design & build',
      'Multilingual (KO/EN/JA/ZH) · SEO',
      'Performance · accessibility · mobile',
      'Post-launch care & content',
    ],
    processTitle: 'How we work',
    process: [
      { step: 'Research', desc: 'Read the field and tone' },
      { step: 'Design', desc: 'Shape structure & screens' },
      { step: 'Build', desc: 'Responsive · multilingual' },
      { step: 'Launch', desc: 'Ship and refine' },
    ],
    ctaTitle: 'Have a site in mind?',
    ctaBody: 'Tell us the field and a rough direction, and we will suggest a fit.',
    ctaButton: 'Get in touch',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const MAP: Record<Locale, ShowcaseCopy> = { ko, en, ja: en, zh: en };

export function getShowcaseCopy(locale: Locale): ShowcaseCopy {
  return MAP[locale] ?? en;
}
