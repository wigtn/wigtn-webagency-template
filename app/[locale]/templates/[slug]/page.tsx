import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { getTemplate } from '@/lib/templates/registry';
import type { TemplateSlug } from '@/lib/templates/types';
import DemoBar from '@/components/showcase/DemoBar';

/** slug → 테마 모듈 로더 (stay-heaven은 별도 static 라우트가 처리) */
const THEME_LOADERS: Partial<Record<TemplateSlug, () => Promise<{ default: React.ComponentType<{ locale: Locale }> }>>> = {
  'maison-noir': () => import('@/themes/maison-noir'),
  onjae: () => import('@/themes/onjae'),
  'salt-ember': () => import('@/themes/salt-ember'),
  'studio-noon': () => import('@/themes/studio-noon'),
};

export function generateStaticParams() {
  return Object.keys(THEME_LOADERS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const meta = getTemplate(slug);
  if (!meta) return {};
  const lang = locale === 'ko' ? 'ko' : 'en';
  const title = `${meta.brandName} — WIGTN Template`;
  return {
    title,
    description: meta.tagline[lang],
    openGraph: { title, description: meta.tagline[lang], images: [meta.thumbnail] },
  };
}

export default async function TemplateDemo({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const meta = getTemplate(slug);
  const loader = THEME_LOADERS[slug as TemplateSlug];
  if (!meta || !loader) notFound();

  setRequestLocale(locale);
  const { default: Theme } = await loader();

  return (
    <>
      <Theme locale={locale as Locale} />
      <DemoBar slug={meta.slug} />
    </>
  );
}
