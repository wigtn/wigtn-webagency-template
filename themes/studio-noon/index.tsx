'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Plus } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import type { Locale } from '@/i18n/routing';
import { inter, spaceGrotesk, spaceMono } from './fonts';
import { getDict } from './content';

const INK = '#0b0b0c';
const PAPER = '#f2f2f2';
const BLUE = '#2b4bff';
const ACID = '#d6ff2b';
const displayFont = 'var(--sn-display), system-ui, sans-serif';
const bodyFont = 'var(--sn-body), system-ui, sans-serif';
const monoFont = 'var(--sn-mono), monospace';

export default function StudioNoon({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const reduce = useReducedMotion();

  const nav: [string, string][] = [
    [t.nav.work, '#work'],
    [t.nav.services, '#services'],
    [t.nav.studio, '#studio'],
    [t.nav.contact, '#contact'],
  ];

  return (
    <div
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable}`}
      style={{
        background: INK,
        color: PAPER,
        fontFamily: bodyFont,
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* NAV */}
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(11,11,12,0.72)',
          borderBottom: '1px solid rgba(242,242,242,0.10)',
        }}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="text-[15px] font-bold"
            style={{ fontFamily: displayFont, letterSpacing: '0.04em' }}
          >
            STUDIO<span style={{ color: BLUE }}>.</span>NOON
          </a>
          <ul
            className="hidden items-center gap-7 text-[12px] uppercase tracking-[0.16em] sm:flex"
            style={{ fontFamily: monoFont }}
          >
            {nav.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] sm:hidden"
            style={{ fontFamily: monoFont, color: BLUE }}
          >
            {t.nav.contact} <ArrowRight size={13} />
          </a>
        </nav>
      </header>

      <main id="top">
        <Hero t={t} reduce={!!reduce} />
        <Work t={t} />
        <Services t={t} />
        <Process t={t} />
        <Studio t={t} />
        <Clients t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
}

/* ---------------- HERO ---------------- */

function Hero({ t, reduce }: { t: ReturnType<typeof getDict>; reduce: boolean }) {
  const words = t.hero.marquee;
  const marqueeItems = [...words, ...words, ...words, ...words];

  return (
    <section className="relative px-5 pb-16 pt-36 sm:px-8 sm:pb-24 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28"
        style={{
          background: 'repeating-linear-gradient(90deg, rgba(43,75,255,0.24) 0 1px, transparent 1px 72px)',
          opacity: 0.7,
        }}
      />
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <p
            className="mb-8 max-w-full break-words text-[11px] uppercase tracking-[0.14em] sm:text-[12px] sm:tracking-[0.24em]"
            style={{ fontFamily: monoFont, color: BLUE }}
          >
            ◍ {t.hero.kicker}
          </p>
        </FadeIn>

        <h1
          className="font-bold leading-[0.86] tracking-[-0.03em]"
          style={{
            fontFamily: displayFont,
            fontSize: 'clamp(2.3rem, 11.5vw, 12rem)',
          }}
        >
          <RiseLine reduce={reduce} delay={0.05}>
            {t.hero.line1}
          </RiseLine>
          <RiseLine reduce={reduce} delay={0.14}>
            <span style={{ color: BLUE }}>{t.hero.accent}</span> {t.hero.line2}
          </RiseLine>
        </h1>

        <FadeIn delay={0.25}>
          <p
            className="mt-10 max-w-[52ch] text-[17px] leading-relaxed sm:text-[19px]"
            style={{ color: 'rgba(242,242,242,0.66)' }}
          >
            {t.hero.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="#work"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5"
            style={{ background: PAPER, color: INK, fontFamily: monoFont }}
          >
            {t.work.label}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </FadeIn>
      </div>

      {/* MARQUEE */}
      <div
        className="relative mt-16 overflow-hidden py-4 sm:mt-24"
        style={{
          borderTop: '1px solid rgba(242,242,242,0.14)',
          borderBottom: '1px solid rgba(242,242,242,0.14)',
        }}
      >
        {reduce ? (
          <div
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 px-4"
            style={{ fontFamily: displayFont }}
          >
            {words.map((w, i) => (
              <span
                key={w}
                className="text-2xl font-medium tracking-[-0.02em]"
                style={{ color: i % 2 ? BLUE : PAPER }}
              >
                {w}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max gap-10 whitespace-nowrap"
            style={{ fontFamily: displayFont }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 26, ease: 'linear', repeat: Infinity }}
          >
            {marqueeItems.map((w, i) => (
              <span key={`${w}-${i}`} className="flex items-center gap-10">
                <span
                  className="text-3xl font-medium tracking-[-0.02em] sm:text-4xl"
                  style={{ color: i % 2 ? BLUE : PAPER }}
                >
                  {w}
                </span>
                <span style={{ color: 'rgba(242,242,242,0.3)' }}>✳</span>
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

function RiseLine({
  children,
  delay,
  reduce,
}: {
  children: React.ReactNode;
  delay: number;
  reduce: boolean;
}) {
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: '110%' }}
        animate={{ y: '0%' }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ---------------- SECTION HELPERS ---------------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em]"
      style={{ fontFamily: monoFont, color: BLUE }}
    >
      <span style={{ width: 22, height: 1, background: BLUE }} />
      {children}
    </span>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="mt-4 font-bold leading-[0.92] tracking-[-0.03em]"
      style={{
        fontFamily: displayFont,
        fontSize: 'clamp(2.4rem, 6.5vw, 5.5rem)',
      }}
    >
      {children}
    </h2>
  );
}

/* ---------------- WORK ---------------- */

function Work({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section id="work" className="px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>{t.work.label}</SectionLabel>
          <Heading>{t.work.heading}</Heading>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.work.projects.map((p, i) => (
            <FadeIn key={p.name} delay={0.04 * i}>
              <ProjectCard p={p} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  index,
}: {
  p: ReturnType<typeof getDict>['work']['projects'][number];
  index: number;
}) {
  return (
    <a
      href="#work"
      className="group block"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1"
        style={{ background: p.gradient }}
      >
        {/* real thumbnail */}
        <Image
          src={p.image}
          alt={`${p.name} — ${p.category}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* legibility gradient for the type-as-image label */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(11,11,12,0.45) 0%, rgba(11,11,12,0) 34%, rgba(11,11,12,0) 55%, rgba(11,11,12,0.72) 100%)',
          }}
        />
        {/* type-as-image */}
        <span
          className="absolute left-4 top-3 z-10 select-none text-[11px] uppercase tracking-[0.2em]"
          style={{ fontFamily: monoFont, color: 'rgba(242,242,242,0.9)' }}
        >
          {String(index + 1).padStart(2, '0')} / {p.year}
        </span>
        <span
          className="absolute bottom-2 left-4 z-10 select-none font-bold leading-[0.82] tracking-[-0.03em]"
          style={{
            fontFamily: displayFont,
            fontSize: 'clamp(1.8rem, 4.6vw, 3rem)',
            color: '#f2f2f2',
          }}
        >
          {p.name}
        </span>

        {/* hover reveal overlay */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-between p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{
            background: 'rgba(11,11,12,0.86)',
          }}
        >
          <div className="flex items-start justify-between">
            <span
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ fontFamily: monoFont, color: BLUE }}
            >
              {p.category}
            </span>
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{ background: BLUE, color: PAPER }}
            >
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p
            className="max-w-[30ch] text-[15px] leading-snug"
            style={{ color: PAPER }}
          >
            {p.desc}
          </p>
        </div>
      </div>

      <div className="mt-3 flex items-baseline justify-between">
        <h3
          className="text-[18px] font-semibold tracking-[-0.01em]"
          style={{ fontFamily: displayFont }}
        >
          {p.name}
        </h3>
        <span
          className="text-[12px] uppercase tracking-[0.14em]"
          style={{ fontFamily: monoFont, color: 'rgba(242,242,242,0.5)' }}
        >
          {p.category} · {p.year}
        </span>
      </div>
    </a>
  );
}

/* ---------------- SERVICES ---------------- */

function Services({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section
      id="services"
      className="px-5 py-20 sm:px-8 sm:py-32"
      style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>{t.services.label}</SectionLabel>
          <Heading>{t.services.heading}</Heading>
        </FadeIn>

        <div className="mt-12">
          {t.services.items.map((s, i) => (
            <FadeIn key={s.title} delay={0.04 * i}>
              <div
                className="group grid grid-cols-[auto_1fr] items-center gap-x-5 gap-y-2 py-7 sm:grid-cols-[3.5rem_1fr_1fr] sm:gap-x-8"
                style={{ borderTop: '1px solid rgba(242,242,242,0.14)' }}
              >
                <span
                  className="text-[13px]"
                  style={{ fontFamily: monoFont, color: BLUE }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[clamp(1.7rem,4vw,3rem)] font-semibold tracking-[-0.02em] transition-colors duration-200 group-hover:text-[color:var(--sn-hover)]"
                  style={
                    {
                      fontFamily: displayFont,
                      ['--sn-hover' as string]: BLUE,
                    } as React.CSSProperties
                  }
                >
                  {s.title}
                </h3>
                <p
                  className="col-span-2 max-w-[42ch] text-[15px] leading-relaxed sm:col-span-1"
                  style={{ color: 'rgba(242,242,242,0.6)' }}
                >
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */

function Process({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-24" style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}>
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>{t.process.label}</SectionLabel>
              <Heading>{t.process.heading}</Heading>
            </div>
            <p className="max-w-[48ch] text-[17px] leading-relaxed lg:justify-self-end" style={{ color: 'rgba(242,242,242,0.74)' }}>
              A simple working rhythm, kept visible from first call to launch. No mystery phase, no theatrical reveal.
            </p>
          </div>
        </FadeIn>

        <div className="mt-10 border-y" style={{ borderColor: 'rgba(242,242,242,0.18)' }}>
          {t.process.steps.map((s, i) => (
            <FadeIn key={s.title} delay={0.05 * i}>
              <div
                className="group grid gap-5 py-6 transition-colors duration-200 hover:bg-white/[0.025] md:grid-cols-[5rem_0.9fr_1.2fr] md:py-7"
                style={{ borderTop: i === 0 ? '0' : '1px solid rgba(242,242,242,0.13)' }}
              >
                <span
                  className="text-[13px] uppercase tracking-[0.18em] transition-colors duration-200 group-hover:text-[color:var(--sn-paper)]"
                  style={{ fontFamily: monoFont, color: BLUE, ['--sn-paper' as string]: PAPER } as React.CSSProperties}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[0.9] tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontFamily: displayFont }}
                >
                  {s.title}
                </h3>
                <p
                  className="max-w-[38rem] text-[15px] leading-relaxed md:pt-1"
                  style={{ color: 'rgba(242,242,242,0.72)' }}
                >
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STUDIO ---------------- */

function Studio({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section
      id="studio"
      className="px-5 py-16 sm:px-8 sm:py-24"
      style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <FadeIn>
          <div className="flex h-full flex-col">
            <SectionLabel>{t.studio.label}</SectionLabel>
            <Heading>{t.studio.heading}</Heading>
            <p
              className="mt-7 max-w-[54ch] text-[17px] leading-relaxed"
              style={{ color: 'rgba(242,242,242,0.76)' }}
            >
              {t.studio.body}
            </p>
            <div className="mt-10 grid max-w-[720px] grid-cols-1 border-y sm:grid-cols-3 lg:mt-auto" style={{ borderColor: 'rgba(242,242,242,0.18)' }}>
              {[
                ['OPEN SLOTS', '02 this quarter'],
                ['CORE OUTPUT', 'Brand · Web · Motion'],
                ['DEFAULT MODE', 'Direct team, no layers'],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className="border-t py-5 sm:border-l sm:border-t-0 sm:px-5"
                  style={{ borderColor: 'rgba(242,242,242,0.12)', borderTopWidth: i === 0 ? 0 : undefined, borderLeftWidth: i === 0 ? 0 : undefined }}
                >
                  <div className="text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: monoFont, color: BLUE }}>
                    {label}
                  </div>
                  <div className="mt-3 text-[15px] leading-snug" style={{ color: 'rgba(242,242,242,0.86)' }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div
            className="relative mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl"
            style={{ background: BLUE }}
          >
            <Image
              src="/images/studio-noon/studio.jpg"
              alt={t.studio.heading}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: 'rgba(43,75,255,0.14)', mixBlendMode: 'multiply' }}
            />
            <span
              className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.2em]"
              style={{ fontFamily: monoFont, color: 'rgba(242,242,242,0.92)' }}
            >
              ◍ STUDIO NOON · SEOUL
            </span>
          </div>
          <div
            className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl"
            style={{ background: 'rgba(242,242,242,0.14)' }}
          >
            {t.studio.stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col justify-between p-6"
                style={{ background: INK, minHeight: 150 }}
              >
                <span
                  className="text-[11px] uppercase tracking-[0.18em]"
                  style={{
                    fontFamily: monoFont,
                    color: 'rgba(242,242,242,0.5)',
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="text-[clamp(2.4rem,6vw,3.6rem)] font-bold leading-none tracking-[-0.03em]"
                  style={{
                    fontFamily: displayFont,
                    color: i === 1 ? BLUE : PAPER,
                  }}
                >
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- CLIENTS ---------------- */

function Clients({ t }: { t: ReturnType<typeof getDict> }) {
  const clientMeta = ['Identity', 'Coffee', 'Product', 'Music', 'Publishing', 'Film', 'Type', 'Festival', 'Motion', 'Culture', 'Research', 'Retail'];

  return (
    <section
      className="px-5 py-16 sm:px-8 sm:py-24"
      style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionLabel>{t.clients.label}</SectionLabel>
              <Heading>{t.clients.heading}</Heading>
            </div>
            <span
              className="text-[12px] uppercase tracking-[0.2em]"
              style={{ fontFamily: monoFont, color: 'rgba(242,242,242,0.62)' }}
            >
              [ {String(t.clients.names.length).padStart(2, '0')} partners ]
            </span>
          </div>
        </FadeIn>

        <div
          className="mt-9 grid grid-cols-1 gap-x-10 border-y lg:grid-cols-2"
          style={{ borderColor: 'rgba(242,242,242,0.18)' }}
        >
          {t.clients.names.map((name, i) => (
            <FadeIn key={name} delay={0.015 * i}>
              <div
                className="group grid grid-cols-[3rem_1fr_auto] items-center gap-4 py-5 transition-colors duration-200 hover:bg-white/[0.025]"
                style={{ borderTop: i === 0 ? '0' : '1px solid rgba(242,242,242,0.13)' }}
              >
                <span
                  className="text-[12px] tabular-nums transition-colors duration-200"
                  style={{ fontFamily: monoFont, color: BLUE }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-[clamp(1.3rem,2.8vw,2.1rem)] font-semibold tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1"
                  style={{ fontFamily: displayFont, color: PAPER }}
                >
                  {name}
                </span>
                <span className="hidden text-right text-[11px] uppercase tracking-[0.16em] sm:block" style={{ fontFamily: monoFont, color: 'rgba(242,242,242,0.58)' }}>
                  {clientMeta[i] ?? 'Partner'}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */

function Contact({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-36"
      style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            'linear-gradient(135deg, transparent 0 44%, rgba(43,75,255,0.34) 44% 45%, transparent 45% 100%)',
        }}
      />
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>{t.contact.label}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p
            className="mt-6 font-bold leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: displayFont,
              fontSize: 'clamp(2.6rem, 7vw, 6rem)',
            }}
          >
            {t.contact.line}
          </p>
        </FadeIn>
        <FadeIn delay={0.14}>
          <a
            href={`mailto:${t.contact.email}`}
            className="group mt-6 inline-flex items-center gap-3 font-bold leading-none tracking-[-0.03em]"
            style={{
              fontFamily: displayFont,
              fontSize: 'clamp(1.8rem, 5.5vw, 4.6rem)',
              color: BLUE,
            }}
          >
            <span
              className="underline decoration-[3px] underline-offset-[10px]"
              style={{ textDecorationColor: 'rgba(43,75,255,0.35)' }}
            >
              {t.contact.email}
            </span>
            <ArrowUpRight
              className="transition-transform duration-200 group-hover:translate-x-2 group-hover:-translate-y-2"
              style={{ width: 'clamp(1.6rem,4vw,3.4rem)', height: 'clamp(1.6rem,4vw,3.4rem)' }}
            />
          </a>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p
            className="mt-8 flex items-center gap-2 text-[15px]"
            style={{ color: 'rgba(242,242,242,0.6)' }}
          >
            <Plus size={15} style={{ color: ACID }} />
            {t.contact.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */

function Footer({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <footer
      className="px-5 py-14 sm:px-8"
      style={{ borderTop: '1px solid rgba(242,242,242,0.14)' }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p
              className="text-[22px] font-bold"
              style={{ fontFamily: displayFont, letterSpacing: '0.04em' }}
            >
              STUDIO<span style={{ color: BLUE }}>.</span>NOON
            </p>
            <p
              className="mt-3 max-w-[32ch] text-[14px]"
              style={{ color: 'rgba(242,242,242,0.55)' }}
            >
              {t.footer.tagline}
            </p>
          </div>

          <ul
            className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] uppercase tracking-[0.16em]"
            style={{ fontFamily: monoFont }}
          >
            {t.footer.socials.map((s) => (
              <li key={s}>
                <a
                  href="#top"
                  className="opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 pt-6 text-[12px] sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: '1px solid rgba(242,242,242,0.10)',
            fontFamily: monoFont,
            color: 'rgba(242,242,242,0.5)',
          }}
        >
          <span>{t.footer.rights}</span>
          <a
            href="https://wigtn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[color:var(--sn-paper)]"
            style={{ ['--sn-paper' as string]: PAPER } as React.CSSProperties}
          >
            {t.footer.credit}
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}
