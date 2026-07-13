'use client';

import { ArrowLeft, ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { TEMPLATES } from '@/lib/templates/registry';
import type { TemplateSlug } from '@/lib/templates/types';

/**
 * 쇼케이스 크롬 — 템플릿 데모 위에 떠서 (1) 갤러리 복귀 (2) 이전/다음 템플릿 이동.
 * 템플릿 자체 디자인을 해치지 않도록 좌하단 고정 다크 캡슐로 둔다.
 */
export default function DemoBar({ slug }: { slug: TemplateSlug }) {
  const idx = TEMPLATES.findIndex((t) => t.slug === slug);
  const prev = TEMPLATES[(idx - 1 + TEMPLATES.length) % TEMPLATES.length];
  const next = TEMPLATES[(idx + 1) % TEMPLATES.length];
  const current = TEMPLATES[idx];

  return (
    <div className="fixed bottom-4 left-4 z-[70] print:hidden">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1 pl-1 text-white shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium transition-colors hover:bg-white/10"
          title="WIGTN 템플릿 갤러리"
        >
          <LayoutGrid size={14} strokeWidth={1.8} className="opacity-80" />
          <span className="hidden sm:inline">템플릿</span>
        </Link>

        <span className="mx-0.5 h-4 w-px bg-white/15" aria-hidden />

        <Link
          href={`/templates/${prev.slug}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          title={`이전: ${prev.brandName}`}
          aria-label={`이전 템플릿: ${prev.brandName}`}
        >
          <ChevronLeft size={16} strokeWidth={2} />
        </Link>

        <span
          className="max-w-[9rem] truncate px-1 text-[11px] tracking-wide text-white/70"
          title={current?.brandName}
        >
          {current?.brandName}
        </span>

        <Link
          href={`/templates/${next.slug}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          title={`다음: ${next.brandName}`}
          aria-label={`다음 템플릿: ${next.brandName}`}
        >
          <ChevronRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

/** 데모 상단 인라인 "← 갤러리로" (다크/라이트 테마용 텍스트 링크) */
export function BackToGallery({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1.5 text-xs tracking-wide transition-opacity hover:opacity-70 ${
        tone === 'dark' ? 'text-white/70' : 'text-black/60'
      }`}
    >
      <ArrowLeft size={13} strokeWidth={1.8} />
      WIGTN 템플릿
    </Link>
  );
}
