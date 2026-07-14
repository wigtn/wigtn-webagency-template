import type { Locale } from '@/i18n/routing';

/** 쇼케이스(메인 랜딩) 카피 — KO/EN 작성, JA/ZH는 EN 폴백. */
export interface ShowcaseCopy {
  nav: { work: string; contact: string };
  hero: {
    kicker: string;
    title: string; // 줄바꿈은 \n
    lead: string;
    scroll: string;
  };
  gallery: { eyebrow: string; heading: string; preview: string };
  footer: { rights: string; madeIn: string };
}

const ko: ShowcaseCopy = {
  nav: { work: '작업', contact: '문의' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: '브랜드의 결을\n웹으로 짓습니다.',
    lead: '숙소, 식당, 워크클럽, 개인 브랜드까지. 아래 여섯 개, 직접 눌러 보세요.',
    scroll: '템플릿 보기',
  },
  gallery: {
    eyebrow: 'TEMPLATES — 06',
    heading: '직접 만든 여섯 개의 템플릿.',
    preview: '미리보기',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const en: ShowcaseCopy = {
  nav: { work: 'Work', contact: 'Contact' },
  hero: {
    kicker: 'WIGTN — WEB STUDIO',
    title: 'We build the\ntexture of a brand.',
    lead: 'Stays, restaurants, work clubs, personal brands. Have a look at the six below.',
    scroll: 'See templates',
  },
  gallery: {
    eyebrow: 'TEMPLATES — 06',
    heading: 'Six templates we made ourselves.',
    preview: 'Preview',
  },
  footer: { rights: 'All rights reserved.', madeIn: 'Seoul' },
};

const MAP: Record<Locale, ShowcaseCopy> = { ko, en, ja: en, zh: en };

export function getShowcaseCopy(locale: Locale): ShowcaseCopy {
  return MAP[locale] ?? en;
}
