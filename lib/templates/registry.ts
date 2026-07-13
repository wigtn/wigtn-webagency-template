import type { TemplateMeta, TemplateSlug } from './types';

/**
 * WIGTN 템플릿 쇼케이스 — 단일 소스.
 * 순서 = 메인 갤러리 노출 순서 (숙박 3 → F&B → 크리에이티브).
 */
export const TEMPLATES: TemplateMeta[] = [
  {
    slug: 'stay-heaven',
    category: 'lodging',
    vertical: { ko: '부티크 게스트하우스', en: 'Boutique Guesthouse' },
    brandName: 'STAY HEAVEN',
    tagline: {
      ko: '서울 도심의 작고 다정한 스테이. 하룻밤이든, 한 달이든.',
      en: 'A small, warm stay in central Seoul — for a night or a month.',
    },
    accent: '#a88759',
    row: { bg: '#fbf8f4', text: '#2a2623', muted: '#8b857f' },
    thumbnail: '/images/hero.jpg',
    typeface: 'Fraunces · Inter',
    engine: 'legacy',
  },
  {
    slug: 'maison-noir',
    category: 'lodging',
    vertical: { ko: '시티 호텔 · 모던 럭셔리', en: 'City Hotel · Modern Luxury' },
    brandName: 'MAISON NOIR',
    tagline: {
      ko: '도심 한복판의 절제된 럭셔리. 밤이 어울리는 호텔.',
      en: 'Understated luxury in the heart of the city.',
    },
    accent: '#c8a96a',
    row: { bg: '#0e0e0f', text: '#f4efe6', muted: '#9a948a' },
    thumbnail: '/images/maison-noir/hero.jpg',
    typeface: 'Cormorant Garamond · Inter Tight',
    engine: 'theme',
  },
  {
    slug: 'onjae',
    category: 'lodging',
    vertical: { ko: '한옥 독채 · 프리미엄 스테이', en: 'Hanok Private Stay' },
    brandName: '온재 ONJAE',
    tagline: {
      ko: '하루 한 팀만 머무는 한옥 독채. 비움과 여백의 시간.',
      en: 'A hanok for one party a day. Stillness, and space to breathe.',
    },
    accent: '#8a7b5c',
    row: { bg: '#efe9df', text: '#3a352c', muted: '#8f887a' },
    thumbnail: '/images/onjae/hero.jpg',
    typeface: 'Noto Serif KR · Pretendard',
    engine: 'theme',
  },
  {
    slug: 'salt-ember',
    category: 'fnb',
    vertical: { ko: '레스토랑 · 다이닝', en: 'Restaurant · Dining' },
    brandName: 'SALT & EMBER',
    tagline: {
      ko: '불과 소금으로 짓는 한 접시. 시즌을 담은 코스.',
      en: 'Fire, salt, and the season on a plate.',
    },
    accent: '#c65f3a',
    row: { bg: '#1a1512', text: '#f0e6dc', muted: '#a08d7e' },
    thumbnail: '/images/salt-ember/hero.jpg',
    typeface: 'Cormorant · Inter',
    engine: 'theme',
  },
  {
    slug: 'studio-noon',
    category: 'creative',
    vertical: { ko: '크리에이터 · 포트폴리오', en: 'Creator · Portfolio' },
    brandName: 'STUDIO NOON',
    tagline: {
      ko: '정오의 빛으로 만드는 것들. 브랜드 · 그래픽 · 모션.',
      en: 'Made in the noon light — brand, graphic, motion.',
    },
    accent: '#2b4bff',
    row: { bg: '#0b0b0c', text: '#f2f2f2', muted: '#7d7d82' },
    thumbnail: '/images/studio-noon/w2.jpg',
    typeface: 'Space Grotesk · Inter',
    engine: 'theme',
  },
];

export const TEMPLATE_MAP: Record<TemplateSlug, TemplateMeta> = Object.fromEntries(
  TEMPLATES.map((t) => [t.slug, t]),
) as Record<TemplateSlug, TemplateMeta>;

export function getTemplate(slug: string): TemplateMeta | undefined {
  return TEMPLATE_MAP[slug as TemplateSlug];
}

export const TEMPLATE_SLUGS = TEMPLATES.map((t) => t.slug);

export const CATEGORY_LABEL: Record<TemplateMeta['category'], { ko: string; en: string }> = {
  lodging: { ko: '숙박', en: 'Lodging' },
  fnb: { ko: '다이닝', en: 'F&B' },
  creative: { ko: '크리에이티브', en: 'Creative' },
};
