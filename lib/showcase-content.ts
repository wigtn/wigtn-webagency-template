import type { Locale } from '@/i18n/routing';

/** 쇼케이스(메인 랜딩) 카피 — KO/EN 작성, JA/ZH는 EN 폴백. */
export interface ShowcaseCopy {
  nav: { work: string; web: string; interactive: string; mobile: string; contact: string };
  hero: {
    kicker: string;
    title: string; // 줄바꿈은 \n
    lead: string;
    scroll: string;
  };
  gallery: { eyebrow: string; heading: string; preview: string };
  interactive: { eyebrow: string; heading: string; lead: string };
  mobile: { eyebrow: string; heading: string; lead: string; disclaimer: string };
  footer: { rights: string; madeIn: string };
}

const ko: ShowcaseCopy = {
  nav: { work: '작업', web: '웹', interactive: '인터랙티브', mobile: '모바일', contact: '문의' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: '브랜드의 결을\n웹으로 짓습니다.',
    lead: '숙소, 식당, 워크클럽, 개인 브랜드까지. 웹과 모바일 화면을 업종의 결에 맞춰 설계합니다.',
    scroll: '템플릿 보기',
  },
  gallery: {
    eyebrow: 'WORK 01 — WEB · 06',
    heading: '직접 만든 여섯 개의 템플릿.',
    preview: '미리보기',
  },
  interactive: {
    eyebrow: 'WORK 02 — INTERACTIVE · 01',
    heading: '움직임까지 브랜드의 언어로 설계합니다.',
    lead: '시네마틱 모션, 3D 공간과 캐스팅 탐색 흐름을 하나의 인터랙티브 경험으로 구성했습니다.',
  },
  mobile: {
    eyebrow: 'WORK 03 — MOBILE · 06',
    heading: '비즈니스에 맞춘 여섯 가지 모바일 경험.',
    lead: '업종별 핵심 장면과 사용 흐름을 393×820 iPhone 기준으로 설계했습니다.',
    disclaimer: '포트폴리오 시연용 화면입니다. 서비스명, 인물, 수치와 금융·의료 정보는 모두 가상 데이터입니다.',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const en: ShowcaseCopy = {
  nav: { work: 'Work', web: 'Web', interactive: 'Interactive', mobile: 'Mobile', contact: 'Contact' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: 'We build the\ntexture of a brand.',
    lead: 'Stays, restaurants, work clubs, personal brands. We shape web and mobile screens around each industry.',
    scroll: 'See templates',
  },
  gallery: {
    eyebrow: 'WORK 01 — WEB · 06',
    heading: 'Six templates we made ourselves.',
    preview: 'Preview',
  },
  interactive: {
    eyebrow: 'WORK 02 — INTERACTIVE · 01',
    heading: 'We design movement as part of the brand language.',
    lead: 'Cinematic motion, a 3D environment, and casting discovery come together as one continuous interactive experience.',
  },
  mobile: {
    eyebrow: 'WORK 03 — MOBILE · 06',
    heading: 'Six mobile experiences, shaped for real business.',
    lead: 'Each experience is built around key moments and workflows on a 393×820 iPhone canvas.',
    disclaimer: 'Portfolio demonstration only. All names, people, metrics, financial, and medical information are fictional.',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const MAP: Record<Locale, ShowcaseCopy> = { ko, en, ja: en, zh: en };

export function getShowcaseCopy(locale: Locale): ShowcaseCopy {
  return MAP[locale] ?? en;
}
