'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Plus } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import type { Locale } from '@/i18n/routing';
import { spaceGrotesk, inter, spaceMono } from './fonts';
import { getDict } from './content';

const INK = '#0b0b0c';
const PAPER = '#f2f2f2';
const BLUE = '#2b4bff';
const ACID = '#d6ff2b';

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
        fontFamily: 'var(--sn-body)',
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
            style={{ fontFamily: 'var(--sn-display)', letterSpacing: '0.04em' }}
          >
            STUDIO<span style={{ color: BLUE }}>.</span>NOON
          </a>
          <ul
            className="hidden items-center gap-7 text-[12px] uppercase tracking-[0.16em] sm:flex"
            style={{ fontFamily: 'var(--sn-mono)' }}
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
            style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
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
      {/* glow accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[-10%] h-[420px] w-[420px] rounded-full"
        style={{ background: BLUE, filter: 'blur(180px)', opacity: 0.28 }}
      />
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <p
            className="mb-8 max-w-full break-words text-[11px] uppercase tracking-[0.14em] sm:text-[12px] sm:tracking-[0.24em]"
            style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
          >
            ◍ {t.hero.kicker}
          </p>
        </FadeIn>

        <h1
          className="font-bold leading-[0.86] tracking-[-0.03em]"
          style={{
            fontFamily: 'var(--sn-display)',
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
            style={{ background: PAPER, color: INK, fontFamily: 'var(--sn-mono)' }}
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
            style={{ fontFamily: 'var(--sn-display)' }}
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
            style={{ fontFamily: 'var(--sn-display)' }}
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
      style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
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
        fontFamily: 'var(--sn-display)',
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
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#work"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group block"
    >
      <div
        className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        style={{ background: p.gradient }}
      >
        {/* real thumbnail */}
        <Image
          src={p.image}
          alt={`${p.name} — ${p.category}`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
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
          style={{ fontFamily: 'var(--sn-mono)', color: 'rgba(242,242,242,0.9)' }}
        >
          {String(index + 1).padStart(2, '0')} / {p.year}
        </span>
        <span
          className="absolute bottom-2 left-4 z-10 select-none font-bold leading-[0.82] tracking-[-0.03em]"
          style={{
            fontFamily: 'var(--sn-display)',
            fontSize: 'clamp(1.8rem, 4.6vw, 3rem)',
            color: '#f2f2f2',
          }}
        >
          {p.name}
        </span>

        {/* hover reveal overlay */}
        <div
          className="absolute inset-0 z-20 flex flex-col justify-between p-5 transition-opacity duration-300"
          style={{
            background: 'rgba(11,11,12,0.86)',
            opacity: hover ? 1 : 0,
          }}
        >
          <div className="flex items-start justify-between">
            <span
              className="text-[11px] uppercase tracking-[0.2em]"
              style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
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
          style={{ fontFamily: 'var(--sn-display)' }}
        >
          {p.name}
        </h3>
        <span
          className="text-[12px] uppercase tracking-[0.14em]"
          style={{ fontFamily: 'var(--sn-mono)', color: 'rgba(242,242,242,0.5)' }}
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
                  style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="text-[clamp(1.7rem,4vw,3rem)] font-semibold tracking-[-0.02em] transition-colors duration-200 group-hover:text-[color:var(--sn-hover)]"
                  style={
                    {
                      fontFamily: 'var(--sn-display)',
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
    <section className="px-5 py-20 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>{t.process.label}</SectionLabel>
          <Heading>{t.process.heading}</Heading>
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((s, i) => (
            <FadeIn key={s.title} delay={0.05 * i}>
              <div
                className="flex h-full flex-col rounded-2xl p-6"
                style={{
                  border: '1px solid rgba(242,242,242,0.14)',
                  background:
                    i === 0
                      ? 'linear-gradient(160deg, rgba(43,75,255,0.16), rgba(43,75,255,0.02))'
                      : 'transparent',
                }}
              >
                <span
                  className="text-[13px] uppercase tracking-[0.18em]"
                  style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
                >
                  Step {String(i + 1).padStart(2, '0')}
                </span>
                <h3
                  className="mt-8 text-[26px] font-semibold tracking-[-0.02em]"
                  style={{ fontFamily: 'var(--sn-display)' }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-[15px] leading-relaxed"
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

/* ---------------- STUDIO ---------------- */

function Studio({ t }: { t: ReturnType<typeof getDict> }) {
  return (
    <section
      id="studio"
      className="px-5 py-20 sm:px-8 sm:py-32"
      style={{ borderTop: '1px solid rgba(242,242,242,0.10)' }}
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.2fr_1fr]">
        <FadeIn>
          <div>
            <SectionLabel>{t.studio.label}</SectionLabel>
            <Heading>{t.studio.heading}</Heading>
            <p
              className="mt-8 max-w-[54ch] text-[17px] leading-relaxed"
              style={{ color: 'rgba(242,242,242,0.66)' }}
            >
              {t.studio.body}
            </p>
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
              style={{ fontFamily: 'var(--sn-mono)', color: 'rgba(242,242,242,0.92)' }}
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
                    fontFamily: 'var(--sn-mono)',
                    color: 'rgba(242,242,242,0.5)',
                  }}
                >
                  {s.label}
                </span>
                <span
                  className="text-[clamp(2.4rem,6vw,3.6rem)] font-bold leading-none tracking-[-0.03em]"
                  style={{
                    fontFamily: 'var(--sn-display)',
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
  return (
    <section
      className="px-5 py-20 sm:px-8 sm:py-32"
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
              style={{ fontFamily: 'var(--sn-mono)', color: 'rgba(242,242,242,0.45)' }}
            >
              [ {String(t.clients.names.length).padStart(2, '0')} partners ]
            </span>
          </div>
        </FadeIn>

        <div
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl sm:grid-cols-2 lg:grid-cols-3"
          style={{
            border: '1px solid rgba(242,242,242,0.14)',
            gap: '1px',
            background: 'rgba(242,242,242,0.14)',
          }}
        >
          {t.clients.names.map((name, i) => (
            <FadeIn key={name} delay={0.015 * i}>
              <div
                className="group relative flex h-full items-center gap-4 px-5 py-7 transition-colors duration-200"
                style={
                  {
                    background: INK,
                    ['--c' as string]: BLUE,
                  } as React.CSSProperties
                }
              >
                {/* hover fill */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100"
                  style={{ background: BLUE }}
                />
                <span
                  className="relative z-10 text-[12px] tabular-nums transition-colors duration-200 group-hover:text-[#0b0b0c]"
                  style={{ fontFamily: 'var(--sn-mono)', color: BLUE }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="relative z-10 flex-1 text-[clamp(1.15rem,2.2vw,1.55rem)] font-semibold tracking-[-0.01em] transition-colors duration-200 group-hover:text-[#0b0b0c]"
                  style={{ fontFamily: 'var(--sn-display)', color: PAPER }}
                >
                  {name}
                </span>
                <ArrowUpRight
                  size={16}
                  className="relative z-10 -translate-x-1 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                  style={{ color: INK }}
                />
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
        className="pointer-events-none absolute bottom-[-30%] left-[10%] h-[500px] w-[500px] rounded-full"
        style={{ background: BLUE, filter: 'blur(200px)', opacity: 0.22 }}
      />
      <div className="mx-auto max-w-[1400px]">
        <FadeIn>
          <SectionLabel>{t.contact.label}</SectionLabel>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p
            className="mt-6 font-bold leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: 'var(--sn-display)',
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
              fontFamily: 'var(--sn-display)',
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
              style={{ fontFamily: 'var(--sn-display)', letterSpacing: '0.04em' }}
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
            style={{ fontFamily: 'var(--sn-mono)' }}
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
            fontFamily: 'var(--sn-mono)',
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
