import type { Locale } from '@/i18n/routing';

/** 업종 카테고리 — JSON-LD 타입·갤러리 필터 라벨 파생에 사용 */
export type TemplateCategory = 'lodging' | 'fnb' | 'creative' | 'workspace';

export type TemplateSlug =
  | 'stay-heaven'
  | 'maison-noir'
  | 'onjae'
  | 'salt-ember'
  | 'studio-noon'
  | 'block-yard';

/**
 * 쇼케이스 갤러리 + 라우팅에 쓰이는 템플릿 메타데이터.
 * (각 데모의 실제 콘텐츠는 테마별로 소유 — 여기엔 카드/라우팅용 요약만)
 */
export interface TemplateMeta {
  slug: TemplateSlug;
  category: TemplateCategory;
  /** 업종 라벨 (예: '부티크 게스트하우스') */
  vertical: { ko: string; en: string };
  /** 데모 브랜드명 */
  brandName: string;
  /** 카드/OG 태그라인 */
  tagline: { ko: string; en: string };
  /** 카드/행 강조색 (hex) */
  accent: string;
  /** 에디토리얼 로우 배경·전경색 (행마다 템플릿 톤으로 물들이기 위함) */
  row: { bg: string; text: string; muted: string };
  /** 갤러리 썸네일 (public 경로) */
  thumbnail: string;
  /** 폰트 페어링 한 줄 설명 (카드 메타에 노출) */
  typeface: string;
  /** stay-heaven은 legacy next-intl 조합, 신규 4종은 prop-driven 테마 */
  engine: 'legacy' | 'theme';
}

/** 언어 전환 시 데모가 참조하는 콘텐츠 로케일 → 폴백 규칙 */
export function resolveContentLocale(locale: Locale): Locale {
  // 데모 정책: KO/EN 풀 작성, JA/ZH는 EN 폴백 (비숙박 신규 템플릿 기준)
  if (locale === 'ja' || locale === 'zh') return 'en';
  return locale;
}
