'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Star, Phone, MapPin, Clock, Flame, ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import type { Locale } from '@/i18n/routing';
import { cormorant, inter } from './fonts';
import { getDict } from './dict';

// ---- palette ----------------------------------------------------------------
const INK = '#1a1512';
const EMBER = '#c65f3a';
const CREAM = '#f0e6dc';
const AMBER = '#d9a441';
const MUTED = '#a08d7e';

const serif = { fontFamily: 'var(--se-serif), Georgia, serif' } as const;
const sans = { fontFamily: 'var(--se-sans), system-ui, sans-serif' } as const;

// ---- small building blocks --------------------------------------------------
function Eyebrow({ children, color = EMBER }: { children: React.ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[0.72rem] font-medium uppercase"
      style={{ ...sans, color, letterSpacing: '0.32em' }}
    >
      <Flame size={13} strokeWidth={2} style={{ color }} aria-hidden />
      {children}
    </span>
  );
}

function EmberSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" className={className} aria-hidden fill="none">
      <path
        d="M60 8c10 24-8 34-8 52 0 10 8 16 8 26 6-8 14-14 14-30 10 14 20 26 20 46 0 26-19 42-46 42S18 176 18 150c0-30 22-44 30-70 5-16 8-24 12-72Z"
        transform="translate(0 -6) scale(1 0.92)"
        fill="url(#emberGrad)"
        opacity="0.9"
      />
      <defs>
        <linearGradient id="emberGrad" x1="60" y1="8" x2="60" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor={AMBER} />
          <stop offset="0.55" stopColor={EMBER} />
          <stop offset="1" stopColor="#7a2f1a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// =============================================================================
export default function SaltEmber({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t.nav.menu },
    { href: '#story', label: t.nav.story },
    { href: '#visit', label: t.nav.visit },
  ];

  return (
    <main
      className={`${cormorant.variable} ${inter.variable} min-h-screen w-full overflow-x-hidden`}
      style={{ ...sans, backgroundColor: INK, color: CREAM }}
    >
      {/* ---------- NAV ---------- */}
      <header
        className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(20,17,14,0.86)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(240,230,220,0.08)' : '1px solid transparent',
        }}
      >
        <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
          <a href="#top" className="flex items-center gap-2.5" aria-label="SALT & EMBER">
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ background: `radial-gradient(circle at 50% 35%, ${AMBER}, ${EMBER} 70%)` }}
            >
              <Flame size={16} strokeWidth={2.2} style={{ color: INK }} aria-hidden />
            </span>
            <span
              className="text-[1.02rem] uppercase"
              style={{ ...serif, color: CREAM, letterSpacing: '0.24em', fontWeight: 500 }}
            >
              Salt&nbsp;&amp;&nbsp;Ember
            </span>
          </a>

          <div className="flex items-center gap-6 md:gap-8">
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.82rem] transition-opacity hover:opacity-100"
                    style={{ ...sans, color: CREAM, opacity: 0.72, letterSpacing: '0.06em' }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#reserve"
              className="rounded-full px-5 py-2 text-[0.8rem] font-medium transition-transform hover:scale-[1.03]"
              style={{ ...sans, backgroundColor: EMBER, color: INK, letterSpacing: '0.04em' }}
            >
              {t.nav.reserve}
            </a>
          </div>
        </nav>
      </header>

      {/* ---------- HERO ---------- */}
      <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
        {/* full-bleed hero photo */}
        <Image
          src="/images/salt-ember/hero.jpg"
          alt="Fire-grilled ribs over live embers"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '65% 40%' }}
        />
        {/* warm ember gradient overlay — keeps headline legible */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(110% 85% at 80% 16%, rgba(198,95,58,0.26), transparent 55%),` +
              `linear-gradient(180deg, rgba(20,16,12,0.62) 0%, rgba(20,16,12,0.42) 40%, rgba(20,16,12,0.92) 100%),` +
              `linear-gradient(90deg, rgba(16,12,9,0.92) 0%, rgba(16,12,9,0.70) 40%, rgba(16,12,9,0.20) 70%, transparent 88%)`,
          }}
        />
        {/* ember motif */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 md:block"
          style={{ width: '30vw', maxWidth: 420, opacity: 0.5, filter: 'blur(0.3px)' }}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 0.5 }}
          transition={{ duration: 1.4 }}
        >
          <EmberSVG className="w-full" />
        </motion.div>

        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-32 md:px-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[46rem]"
          >
            <Eyebrow color={AMBER}>{t.hero.kicker}</Eyebrow>
            <h1
              className="mt-7 text-[clamp(2.9rem,8vw,6.4rem)] leading-[0.98]"
              style={{
                ...serif,
                color: CREAM,
                fontWeight: 400,
                letterSpacing: '-0.01em',
                textShadow: '0 2px 24px rgba(16,12,9,0.85), 0 1px 3px rgba(16,12,9,0.9)',
              }}
            >
              {t.hero.title}
              <br />
              <span
                style={{
                  fontStyle: 'italic',
                  color: '#f2b56d',
                  textShadow: '0 2px 20px rgba(16,12,9,0.9), 0 1px 4px rgba(16,12,9,0.95)',
                }}
              >
                {t.hero.titleAccent}
              </span>
            </h1>
            <p
              className="mt-8 max-w-[34rem] text-[1.06rem] leading-relaxed"
              style={{ ...sans, color: '#d4c3b4', textShadow: '0 1px 12px rgba(16,12,9,0.8)' }}
            >
              {t.hero.lead}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#reserve"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[0.9rem] font-medium transition-transform hover:scale-[1.03]"
                style={{ ...sans, backgroundColor: EMBER, color: INK, letterSpacing: '0.02em' }}
              >
                {t.hero.cta}
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href="#menu"
                className="text-[0.86rem] underline-offset-4 hover:underline"
                style={{ ...sans, color: CREAM, opacity: 0.8, letterSpacing: '0.04em' }}
              >
                {t.nav.menu} →
              </a>
            </div>
          </motion.div>
        </div>

        <div
          className="absolute bottom-8 right-8 hidden items-center gap-2 md:flex"
          style={{ ...sans, color: MUTED, fontSize: '0.7rem', letterSpacing: '0.28em' }}
        >
          <span className="uppercase">{t.hero.scroll}</span>
          <span className="h-px w-10" style={{ backgroundColor: MUTED }} />
        </div>
      </section>

      {/* ---------- MENU ---------- */}
      <section id="menu" className="relative py-24 md:py-32" style={{ backgroundColor: '#17120e' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeIn>
            <div className="max-w-[38rem]">
              <Eyebrow>{t.menu.kicker}</Eyebrow>
              <h2
                className="mt-5 text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.02]"
                style={{ ...serif, color: CREAM, fontWeight: 400 }}
              >
                {t.menu.title}
              </h2>
              <p className="mt-5 text-[1rem] leading-relaxed" style={{ ...sans, color: MUTED }}>
                {t.menu.intro}
              </p>
            </div>
          </FadeIn>

          {/* course prices */}
          <FadeIn delay={0.05}>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {t.menu.courses.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-2xl px-7 py-6"
                  style={{
                    border: '1px solid rgba(217,164,65,0.22)',
                    background: 'linear-gradient(135deg, rgba(198,95,58,0.09), rgba(217,164,65,0.03))',
                  }}
                >
                  <div>
                    <div className="text-[1.35rem]" style={{ ...serif, color: CREAM }}>
                      {c.name}
                    </div>
                    <div className="mt-1 text-[0.82rem]" style={{ ...sans, color: MUTED }}>
                      {c.blurb}
                    </div>
                  </div>
                  <div className="text-[1.5rem]" style={{ ...serif, color: AMBER, fontWeight: 500 }}>
                    {c.price}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* dish accent photos */}
          <FadeIn delay={0.08}>
            <div className="mt-6 grid grid-cols-3 gap-3 md:gap-4">
              {[
                { src: 'dish-1', alt: 'Plated seasonal appetiser' },
                { src: 'dish-2', alt: 'Ember-aged main course' },
                { src: 'dish-3', alt: 'Burnt honey dessert' },
              ].map((d) => (
                <div
                  key={d.src}
                  className="relative aspect-square overflow-hidden rounded-2xl"
                  style={{ border: '1px solid rgba(217,164,65,0.18)' }}
                >
                  <Image
                    src={`/images/salt-ember/${d.src}.jpg`}
                    alt={d.alt}
                    fill
                    sizes="(min-width: 768px) 380px, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(20,17,14,0.35) 100%)' }}
                  />
                </div>
              ))}
            </div>
          </FadeIn>

          {/* stages */}
          <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {t.menu.stages.map((stage, i) => (
              <FadeIn key={stage.label} delay={0.04 * i}>
                <div>
                  <div className="mb-5 flex items-baseline gap-3 border-b pb-3" style={{ borderColor: 'rgba(240,230,220,0.12)' }}>
                    <span className="text-[0.85rem]" style={{ ...sans, color: EMBER, letterSpacing: '0.1em' }}>
                      {stage.tag}
                    </span>
                    <h3
                      className="text-[1.15rem] uppercase"
                      style={{ ...sans, color: CREAM, letterSpacing: '0.16em', fontWeight: 500 }}
                    >
                      {stage.label}
                    </h3>
                  </div>
                  <ul className="space-y-5">
                    {stage.dishes.map((d) => (
                      <li key={d.name}>
                        <div className="flex items-baseline gap-3">
                          <span className="text-[1.28rem] leading-tight" style={{ ...serif, color: CREAM }}>
                            {d.name}
                          </span>
                          <span
                            className="mb-1 h-px flex-1 self-end"
                            style={{ backgroundImage: 'linear-gradient(to right, rgba(160,141,126,0.5) 40%, transparent 0)', backgroundSize: '6px 1px', backgroundRepeat: 'repeat-x' }}
                            aria-hidden
                          />
                        </div>
                        <p className="mt-1 text-[0.88rem] leading-relaxed" style={{ ...sans, color: MUTED }}>
                          {d.note}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <p className="mt-14 text-[0.82rem] italic" style={{ ...sans, color: MUTED }}>
              {t.menu.note}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ---------- STORY ---------- */}
      <section id="story" className="relative py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'radial-gradient(80% 60% at 20% 20%, rgba(198,95,58,0.12), transparent 60%)' }}
        />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          {/* portrait block */}
          <FadeIn>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/images/salt-ember/chef.jpg"
                alt="Chef plating a dish under the heat lamps"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
                style={{ objectPosition: '50% 30%' }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'radial-gradient(70% 55% at 25% 15%, rgba(217,164,65,0.20), transparent 60%),' +
                    'linear-gradient(180deg, transparent 40%, rgba(20,17,14,0.78) 100%)',
                }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-flex rounded-full px-4 py-1.5 text-[0.7rem] uppercase"
                  style={{ ...sans, backgroundColor: 'rgba(20,17,14,0.7)', color: CREAM, letterSpacing: '0.2em' }}
                >
                  {t.story.portraitTag}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div>
              <Eyebrow>{t.story.kicker}</Eyebrow>
              <h2
                className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]"
                style={{ ...serif, color: CREAM, fontWeight: 400 }}
              >
                {t.story.title}
              </h2>
              <div className="mt-7 space-y-5">
                {t.story.body.map((p, i) => (
                  <p key={i} className="text-[1.02rem] leading-relaxed" style={{ ...sans, color: MUTED }}>
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-px w-10" style={{ backgroundColor: EMBER }} />
                <div>
                  <div className="text-[1.5rem]" style={{ ...serif, fontStyle: 'italic', color: CREAM }}>
                    {t.story.signature}
                  </div>
                  <div className="text-[0.78rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.18em' }}>
                    {t.story.role}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="relative py-24 md:py-32" style={{ backgroundColor: '#17120e' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeIn>
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-[32rem]">
                <Eyebrow>{t.gallery.kicker}</Eyebrow>
                <h2
                  className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.03]"
                  style={{ ...serif, color: CREAM, fontWeight: 400 }}
                >
                  {t.gallery.title}
                </h2>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {t.gallery.tiles.map((tile, i) => {
              // real gallery imagery
              const img = ['g2', 'g1', 'g3', 'dish-2', 'dish-1', 'dish-3'][i] ?? 'g1';
              return (
                <FadeIn key={tile.label} delay={0.04 * i}>
                  <div className="group relative flex aspect-square h-full flex-col justify-end overflow-hidden rounded-2xl p-5">
                    <Image
                      src={`/images/salt-ember/${img}.jpg`}
                      alt={`${tile.label} — ${tile.sub}`}
                      fill
                      sizes="(min-width: 768px) 380px, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(20,17,14,0.05) 30%, rgba(20,17,14,0.78) 100%)',
                      }}
                    />
                    <Flame
                      size={22}
                      className="absolute right-5 top-5 opacity-50 transition-opacity group-hover:opacity-80"
                      style={{ color: CREAM }}
                      aria-hidden
                    />
                    <div className="relative">
                      <div className="text-[1.25rem] leading-tight" style={{ ...serif, color: CREAM }}>
                        {tile.label}
                      </div>
                      <div className="mt-0.5 text-[0.74rem] uppercase" style={{ ...sans, color: 'rgba(240,230,220,0.78)', letterSpacing: '0.14em' }}>
                        {tile.sub}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeIn>
            <div className="max-w-[32rem]">
              <Eyebrow>{t.reviews.kicker}</Eyebrow>
              <h2
                className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.03]"
                style={{ ...serif, color: CREAM, fontWeight: 400 }}
              >
                {t.reviews.title}
              </h2>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.reviews.items.map((r, i) => (
              <FadeIn key={r.name} delay={0.05 * i}>
                <figure
                  className="flex h-full flex-col rounded-2xl p-7"
                  style={{
                    border: '1px solid rgba(240,230,220,0.1)',
                    background: 'linear-gradient(160deg, rgba(198,95,58,0.06), transparent 70%)',
                  }}
                >
                  <div className="flex gap-1" aria-label={`${r.rating} / 5`}>
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} size={15} fill={AMBER} strokeWidth={0} style={{ color: AMBER }} aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[1.1rem] leading-relaxed" style={{ ...serif, color: CREAM }}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <div className="text-[0.92rem]" style={{ ...sans, color: CREAM, fontWeight: 500 }}>
                      {r.name}
                    </div>
                    <div className="text-[0.78rem] uppercase" style={{ ...sans, color: MUTED, letterSpacing: '0.12em' }}>
                      {r.meta}
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT ---------- */}
      <section id="visit" className="relative py-24 md:py-32" style={{ backgroundColor: '#17120e' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <FadeIn>
            <div className="max-w-[32rem]">
              <Eyebrow>{t.visit.kicker}</Eyebrow>
              <h2
                className="mt-5 text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.03]"
                style={{ ...serif, color: CREAM, fontWeight: 400 }}
              >
                {t.visit.title}
              </h2>
            </div>
          </FadeIn>

          {/* interior / space photo */}
          <FadeIn delay={0.05}>
            <div className="relative mt-10 h-[240px] w-full overflow-hidden rounded-3xl md:h-[340px]">
              <Image
                src="/images/salt-ember/space.jpg"
                alt="Salt & Ember dining room interior"
                fill
                sizes="(min-width: 1200px) 1120px, 100vw"
                className="object-cover"
                style={{ objectPosition: '50% 55%' }}
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'linear-gradient(180deg, rgba(20,17,14,0.12) 40%, rgba(20,17,14,0.55) 100%)' }}
              />
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* address */}
            <FadeIn>
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <MapPin size={17} style={{ color: EMBER }} aria-hidden />
                  <span className="text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.2em' }}>
                    {t.visit.addressLabel}
                  </span>
                </div>
                {t.visit.address.map((line) => (
                  <p key={line} className="text-[1.02rem] leading-relaxed" style={{ ...sans, color: CREAM }}>
                    {line}
                  </p>
                ))}
                <p className="mt-3 text-[0.85rem]" style={{ ...sans, color: MUTED }}>
                  {t.visit.directions}
                </p>
              </div>
            </FadeIn>

            {/* hours */}
            <FadeIn delay={0.06}>
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <Clock size={17} style={{ color: EMBER }} aria-hidden />
                  <span className="text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.2em' }}>
                    {t.visit.hoursLabel}
                  </span>
                </div>
                <div className="space-y-3">
                  {t.visit.hours.map((h) => (
                    <div key={h.day}>
                      <div className="text-[0.95rem]" style={{ ...sans, color: CREAM, fontWeight: 500 }}>
                        {h.day}
                      </div>
                      <div className="text-[0.86rem]" style={{ ...sans, color: MUTED }}>
                        Lunch {h.lunch} · Dinner {h.dinner}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-[0.82rem] italic" style={{ ...sans, color: EMBER }}>
                  {t.visit.closed}
                </p>
              </div>
            </FadeIn>

            {/* phone */}
            <FadeIn delay={0.12}>
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <Phone size={17} style={{ color: EMBER }} aria-hidden />
                  <span className="text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.2em' }}>
                    {t.visit.phoneLabel}
                  </span>
                </div>
                <a
                  href={`tel:${t.visit.phone.replace(/\s/g, '')}`}
                  className="text-[1.4rem] hover:underline"
                  style={{ ...serif, color: CREAM }}
                >
                  {t.visit.phone}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ---------- RESERVATION ---------- */}
      <section id="reserve" className="relative overflow-hidden py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              `radial-gradient(90% 70% at 80% 10%, rgba(198,95,58,0.28), transparent 55%),` +
              `radial-gradient(70% 60% at 10% 100%, rgba(217,164,65,0.14), transparent 60%)`,
          }}
        />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <FadeIn>
            <div>
              <Eyebrow color={AMBER}>{t.reservation.kicker}</Eyebrow>
              <h2
                className="mt-5 text-[clamp(2.2rem,5vw,4rem)] leading-[1.0]"
                style={{ ...serif, color: CREAM, fontWeight: 400 }}
              >
                {t.reservation.title}
              </h2>
              <p className="mt-6 max-w-[26rem] text-[1.02rem] leading-relaxed" style={{ ...sans, color: MUTED }}>
                {t.reservation.lead}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <form
              className="rounded-3xl p-7 md:p-9"
              style={{
                border: '1px solid rgba(240,230,220,0.12)',
                background: 'linear-gradient(160deg, rgba(30,23,18,0.9), rgba(20,17,14,0.7))',
                backdropFilter: 'blur(8px)',
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="se-date" className="mb-2 block text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.16em' }}>
                    {t.reservation.dateLabel}
                  </label>
                  <input
                    id="se-date"
                    type="date"
                    className="w-full rounded-xl px-4 py-3 text-[0.95rem] outline-none"
                    style={{
                      ...sans,
                      backgroundColor: 'rgba(240,230,220,0.05)',
                      border: '1px solid rgba(240,230,220,0.18)',
                      color: CREAM,
                      colorScheme: 'dark',
                    }}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="se-party" className="mb-2 block text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.16em' }}>
                      {t.reservation.partyLabel}
                    </label>
                    <select
                      id="se-party"
                      defaultValue={t.reservation.party[1]}
                      className="w-full rounded-xl px-4 py-3 text-[0.95rem] outline-none"
                      style={{
                        ...sans,
                        backgroundColor: 'rgba(240,230,220,0.05)',
                        border: '1px solid rgba(240,230,220,0.18)',
                        color: CREAM,
                        colorScheme: 'dark',
                      }}
                    >
                      {t.reservation.party.map((p) => (
                        <option key={p} value={p} style={{ backgroundColor: INK, color: CREAM }}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="se-time" className="mb-2 block text-[0.76rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.16em' }}>
                      {t.reservation.timeLabel}
                    </label>
                    <select
                      id="se-time"
                      defaultValue={t.reservation.times[2]}
                      className="w-full rounded-xl px-4 py-3 text-[0.95rem] outline-none"
                      style={{
                        ...sans,
                        backgroundColor: 'rgba(240,230,220,0.05)',
                        border: '1px solid rgba(240,230,220,0.18)',
                        color: CREAM,
                        colorScheme: 'dark',
                      }}
                    >
                      {t.reservation.times.map((tm) => (
                        <option key={tm} value={tm} style={{ backgroundColor: INK, color: CREAM }}>
                          {tm}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[0.92rem] font-medium transition-transform hover:scale-[1.01]"
                  style={{ ...sans, backgroundColor: EMBER, color: INK, letterSpacing: '0.02em' }}
                >
                  {t.reservation.submit}
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden />
                </button>

                <p className="text-center text-[0.74rem]" style={{ ...sans, color: MUTED }}>
                  {t.reservation.fineprint}
                </p>
              </div>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="relative pt-16 pb-12" style={{ backgroundColor: '#120e0a', borderTop: '1px solid rgba(240,230,220,0.08)' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  className="grid h-8 w-8 place-items-center rounded-full"
                  style={{ background: `radial-gradient(circle at 50% 35%, ${AMBER}, ${EMBER} 70%)` }}
                >
                  <Flame size={16} strokeWidth={2.2} style={{ color: INK }} aria-hidden />
                </span>
                <span className="text-[1rem] uppercase" style={{ ...serif, color: CREAM, letterSpacing: '0.24em', fontWeight: 500 }}>
                  Salt&nbsp;&amp;&nbsp;Ember
                </span>
              </div>
              <p className="mt-4 max-w-[22rem] text-[0.9rem] leading-relaxed" style={{ ...sans, color: MUTED }}>
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <div className="mb-4 text-[0.72rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.2em' }}>
                {t.footer.contactLabel}
              </div>
              <div className="space-y-2 text-[0.9rem]" style={{ ...sans, color: MUTED }}>
                <p>{t.visit.phone}</p>
                <p>hello@saltember.kr</p>
                <p>{t.visit.address[0]}</p>
              </div>
            </div>

            <div>
              <div className="mb-4 text-[0.72rem] uppercase" style={{ ...sans, color: AMBER, letterSpacing: '0.2em' }}>
                {t.footer.followLabel}
              </div>
              <div className="flex flex-col gap-2 text-[0.9rem]" style={{ ...sans, color: MUTED }}>
                {['Instagram', 'Naver Place', 'Kakao'].map((s) => (
                  <a key={s} href="#" className="inline-flex items-center gap-1 hover:underline" style={{ color: MUTED }}>
                    {s}
                    <ArrowUpRight size={13} aria-hidden />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className="mt-14 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[0.78rem] md:flex-row md:items-center"
            style={{ borderColor: 'rgba(240,230,220,0.08)', ...sans, color: MUTED }}
          >
            <span>© {new Date().getFullYear()} Salt & Ember. {t.footer.rights}</span>
            <a
              href="https://wigtn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 transition-colors hover:opacity-100"
              style={{ color: CREAM, opacity: 0.7 }}
            >
              {t.footer.credit}
              <ArrowUpRight size={13} aria-hidden />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
