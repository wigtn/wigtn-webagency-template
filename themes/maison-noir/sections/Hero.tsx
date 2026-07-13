'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import type { Content } from '../content';

export default function Hero({ hero }: { hero: Content['hero'] }) {
  const reduce = useReducedMotion();
  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay } }
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0e0e0f]">
      {/* full-bleed photograph */}
      <Image
        src="/images/maison-noir/hero-v2.jpg"
        alt="Maison Noir at night"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* legibility scrims — inline styles so arbitrary opacity always applies */}
      {/* overall slight dim to knock down the bright sky */}
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: 'rgba(11,11,12,0.18)' }} />
      {/* top + bottom anchoring */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(11,11,12,0.6) 0%, rgba(11,11,12,0) 24%, rgba(11,11,12,0) 58%, rgba(11,11,12,0.9) 100%)',
        }}
      />
      {/* wide left column — darkens the FULL width of the headline (which reaches into the bright sky) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(100deg, rgba(11,11,12,0.82) 0%, rgba(11,11,12,0.72) 42%, rgba(11,11,12,0.42) 64%, rgba(11,11,12,0.10) 86%, rgba(11,11,12,0) 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 78% 8%, rgba(200,169,106,0.16) 0%, rgba(200,169,106,0) 44%), radial-gradient(90% 80% at 20% 100%, rgba(10,10,11,0.85) 0%, rgba(14,14,15,0) 55%)',
        }}
      />
      {/* vertical hairline */}
      <div
        className="absolute left-6 top-0 h-full w-px md:left-10"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(200,169,106,0.25), transparent)' }}
      />
      {/* subtle grain */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-1 flex-col justify-center px-6 pt-28 md:px-10">
        <motion.p
          {...rise(0.1)}
          className="text-[11px] uppercase tracking-[0.34em] text-[#b89a72] md:tracking-[0.42em]"
          style={{ fontFamily: 'var(--mn-sans)' }}
        >
          {hero.kicker}
        </motion.p>

        <motion.h1
          {...rise(0.24)}
          className="mt-8 max-w-[12ch] text-[clamp(3rem,8.5vw,7.2rem)] font-light leading-[1.02] text-[#f1ece4]"
          style={{ fontFamily: 'var(--mn-serif)', textShadow: '0 2px 40px rgba(0,0,0,0.6)' }}
        >
          {hero.headline[0]}
          <br />
          <span
            className="font-normal"
            style={{ color: '#f1ece4', textShadow: '0 2px 30px rgba(0,0,0,0.7)' }}
          >
            {hero.headline[1]}
          </span>
        </motion.h1>

        <motion.p
          {...rise(0.42)}
          className="mt-9 max-w-[46ch] text-[15px] font-light leading-relaxed text-[#d8d0c3] md:text-[17px]"
          style={{ fontFamily: 'var(--mn-sans)', textShadow: '0 1px 20px rgba(0,0,0,0.7)' }}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div {...rise(0.56)} className="mt-11 flex items-center gap-5">
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-[#b89a72]/45 px-9 py-4 text-[12px] uppercase tracking-[0.28em] text-[#b89a72] transition-colors duration-300 hover:bg-[#b89a72] hover:text-[#0e0e0f]"
            style={{ fontFamily: 'var(--mn-sans)' }}
          >
            {hero.cta}
          </a>
          <span className="hidden h-px w-16 bg-[#b89a72]/35 md:block" />
        </motion.div>
      </div>

      <a
        href="#signature"
        className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center gap-4 px-6 pb-10 md:px-10"
      >
        <motion.span
          aria-hidden
          className="h-9 w-px"
          animate={reduce ? undefined : { scaleY: [0.35, 1, 0.35], opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ background: 'linear-gradient(180deg, rgba(200,169,106,0.7), transparent)', transformOrigin: 'top' }}
        />
        <span
          className="text-[10px] uppercase tracking-[0.3em] text-[#9f9485] transition-colors hover:text-[#b89a72]"
          style={{ fontFamily: 'var(--mn-sans)' }}
        >
          {hero.scroll}
        </span>
      </a>
    </section>
  );
}
