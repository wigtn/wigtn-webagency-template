import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import { Fraunces, Inter, Noto_Serif_KR, Noto_Sans_KR } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/lib/constants';
import '../globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif-latin',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans-latin',
  display: 'swap',
});

const notoSerifKR = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif-kr',
  display: 'swap',
});

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans-kr',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const STUDIO_NAME = 'WIGTN';
const STUDIO_DESC_KO =
  'WIGTN은 숙박·다이닝·워크스페이스·개인 브랜드까지, 업종마다 다른 톤으로 설계하는 작은 웹 스튜디오입니다. 여섯 개의 템플릿으로 방식을 증명합니다.';
const STUDIO_DESC_EN =
  'WIGTN is a small web studio designing each brand in its own tone — from stays to dining to workspaces to personal brands. Six templates prove the approach.';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === 'ko';
  const description = isKo ? STUDIO_DESC_KO : STUDIO_DESC_EN;

  const localePath = (l: string) => (l === routing.defaultLocale ? '/' : `/${l}`);
  const languages: Record<string, string> = {};
  routing.locales.forEach((l) => {
    languages[l] = `${SITE_URL}${localePath(l)}`;
  });
  languages['x-default'] = `${SITE_URL}${localePath(routing.defaultLocale)}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${STUDIO_NAME} — Web Studio · Template Showcase`,
      template: `%s · ${STUDIO_NAME}`,
    },
    description,
    applicationName: STUDIO_NAME,
    authors: [{ name: STUDIO_NAME, url: SITE_URL }],
    creator: STUDIO_NAME,
    publisher: STUDIO_NAME,
    alternates: { canonical: `${SITE_URL}${localePath(locale)}`, languages },
    openGraph: {
      type: 'website',
      url: `${SITE_URL}${localePath(locale)}`,
      siteName: STUDIO_NAME,
      title: `${STUDIO_NAME} — Web Studio`,
      description,
      locale,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${STUDIO_NAME} — Web Studio`,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
      ...(process.env.NEXT_PUBLIC_NAVER_VERIFICATION
        ? { other: { 'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION } }
        : {}),
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const fontClass = `${fraunces.variable} ${inter.variable} ${notoSerifKR.variable} ${notoSansKR.variable}`;

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: STUDIO_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/icon.png` },
    email: 'contact@wigtn.com',
    sameAs: ['https://wigtn.com'],
    description: STUDIO_DESC_EN,
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: STUDIO_NAME,
    url: SITE_URL,
    inLanguage: ['ko', 'en', 'ja', 'zh'],
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <html lang={locale} className={fontClass}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
