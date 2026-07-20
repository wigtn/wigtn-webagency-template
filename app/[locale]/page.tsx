import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Space_Grotesk } from 'next/font/google';
import type { Locale } from '@/i18n/routing';
import { TEMPLATES } from '@/lib/templates/registry';
import { getShowcaseCopy } from '@/lib/showcase-content';
import ShowcaseNav from '@/components/showcase/ShowcaseNav';
import TemplateRow from '@/components/showcase/TemplateRow';
import WigtnLogo from '@/components/showcase/WigtnLogo';
import MobileConcepts from '@/components/showcase/MobileConcepts';

const grotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });

// WIGTN team theme — 검정 + Pantone 265 C
const INK = '#0a0a0b';
const P265 = '#9063CD';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getShowcaseCopy(locale as Locale);
  const title = 'WIGTN — Web Studio · Template Showcase';
  return {
    title,
    description: copy.hero.lead,
    openGraph: { title, description: copy.hero.lead },
  };
}

export default async function ShowcaseHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const lang = loc === 'ko' ? 'ko' : 'en';
  const copy = getShowcaseCopy(loc);
  const templateCount = String(TEMPLATES.length).padStart(2, '0');

  const stats = [
    { n: templateCount, l: lang === 'ko' ? '템플릿' : 'Templates' },
    { n: '06', l: lang === 'ko' ? '모바일' : 'Mobile' },
    { n: '04', l: lang === 'ko' ? '개국어' : 'Languages' },
  ];

  return (
    <main style={{ backgroundColor: INK }} className="text-[#f2f1ef]">
      <ShowcaseNav copy={copy} ink={INK} accent={P265} />

      {/* 컴팩트 인트로 — 큰 히어로 없이 바로 템플릿으로 */}
      <section id="templates" className="relative mx-auto max-w-6xl scroll-mt-16 px-5 pb-4 pt-28 sm:px-8 sm:pt-32">
        <div className="relative flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.28em]" style={{ color: P265 }}>
              {copy.hero.kicker}
            </p>
            <h1 className={`${grotesk.className} mt-4 text-[clamp(2rem,5vw,3.6rem)] font-medium leading-[1.02] tracking-tight`}>
              {copy.gallery.heading}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#f2f1ef]/60 sm:text-base">
              {copy.hero.lead}
            </p>
          </div>
          <div className="flex items-center gap-6">
            {stats.map((s) => (
              <div key={s.l} className="leading-tight">
                <span className={`${grotesk.className} text-2xl font-medium`}>{s.n}</span>
                <span className="ml-1.5 text-xs text-[#f2f1ef]/45">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 에디토리얼 로우 (각 템플릿 고유 톤 유지) */}
      <div>
        {TEMPLATES.map((meta, i) => (
          <TemplateRow key={meta.slug} meta={meta} locale={loc} index={i} previewLabel={copy.gallery.preview} />
        ))}
      </div>

      <MobileConcepts copy={copy} locale={loc} />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 text-[#f2f1ef]/50" style={{ backgroundColor: INK }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-5 px-5 text-sm sm:flex-row sm:items-center sm:px-8">
          <WigtnLogo className="h-9 w-auto" />
          <span>
            © {new Date().getFullYear()} WIGTN. {copy.footer.rights} · {copy.footer.madeIn}
          </span>
        </div>
      </footer>
    </main>
  );
}
