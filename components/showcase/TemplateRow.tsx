import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Locale } from '@/i18n/routing';
import type { TemplateMeta } from '@/lib/templates/types';
import { CATEGORY_LABEL } from '@/lib/templates/registry';

/**
 * 에디토리얼 로우 — 한 행이 곧 하나의 템플릿.
 * 행 배경/전경을 해당 템플릿 톤으로 물들이고, 좌우 교차 배치.
 */
export default function TemplateRow({
  meta,
  locale,
  index,
  previewLabel,
}: {
  meta: TemplateMeta;
  locale: Locale;
  index: number;
  previewLabel: string;
}) {
  const lang = locale === 'ko' ? 'ko' : 'en';
  const flip = index % 2 === 1;
  const num = String(index + 1).padStart(2, '0');
  const cat = CATEGORY_LABEL[meta.category][lang];

  return (
    <Link
      href={`/templates/${meta.slug}`}
      aria-label={`${meta.brandName} — ${previewLabel}`}
      className="group block scroll-mt-16"
      style={{ backgroundColor: meta.row.bg, color: meta.row.text }}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 sm:px-8 sm:py-20 md:grid-cols-2 md:gap-14 md:py-28">
        {/* 이미지 */}
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl md:aspect-[5/4] ${
            flip ? 'md:order-2' : ''
          }`}
          style={{ backgroundColor: meta.accent + '22' }}
        >
          <Image
            src={meta.thumbnail}
            alt={`${meta.brandName} 템플릿 미리보기`}
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ boxShadow: `inset 0 0 0 2px ${meta.accent}` }}
            aria-hidden
          />
        </div>

        {/* 텍스트 */}
        <div className={flip ? 'md:order-1' : ''}>
          <div className="flex items-center gap-3 text-xs tracking-[0.18em]" style={{ color: meta.row.muted }}>
            <span>{num}</span>
            <span className="h-px w-8" style={{ backgroundColor: meta.row.muted }} aria-hidden />
            <span className="uppercase">{cat}</span>
          </div>

          <h3
            className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
            style={{ color: meta.accent }}
          >
            {meta.brandName}
          </h3>

          <p className="mt-3 text-sm" style={{ color: meta.row.muted }}>
            {meta.vertical[lang]} · {meta.typeface}
          </p>

          <p className="mt-5 max-w-md text-base leading-relaxed sm:text-lg" style={{ color: meta.row.text }}>
            {meta.tagline[lang]}
          </p>

          <span
            className="mt-8 inline-flex items-center gap-1.5 border-b pb-1 text-sm font-medium transition-all duration-300 group-hover:gap-3"
            style={{ borderColor: meta.accent, color: meta.row.text }}
          >
            {previewLabel}
            <ArrowUpRight size={16} strokeWidth={1.8} style={{ color: meta.accent }} />
          </span>
        </div>
      </div>
    </Link>
  );
}
