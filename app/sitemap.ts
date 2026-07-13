import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import { TEMPLATE_SLUGS } from '@/lib/templates/registry';

const { locales, defaultLocale } = routing;

/** 로케일별 절대 URL (defaultLocale은 prefix 없음) */
function url(locale: string, path = ''): string {
  const base = locale === defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`;
  return `${base}${path}`;
}

/** 한 경로(path)에 대한 hreflang alternates 맵 */
function alternates(path = ''): Record<string, string> {
  const languages: Record<string, string> = {};
  locales.forEach((l) => {
    languages[l] = url(l, path);
  });
  languages['x-default'] = url(defaultLocale, path);
  return languages;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths: Array<{ path: string; priority: number }> = [
    { path: '', priority: 1.0 }, // 쇼케이스 랜딩
    ...TEMPLATE_SLUGS.map((slug) => ({
      path: `/templates/${slug}`,
      priority: 0.7,
    })),
  ];

  return paths.flatMap(({ path, priority }) =>
    locales.map((locale) => ({
      url: url(locale, path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: locale === defaultLocale ? priority : priority - 0.1,
      alternates: { languages: alternates(path) },
    })),
  );
}
