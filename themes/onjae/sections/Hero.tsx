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
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#efe9df]"
    >
      {/* full-bleed hero photo */}
      <Image
        src="/images/onjae/hero.jpg"
        alt="온재 한옥 독채의 따뜻한 원목 실내"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* warm-stone gradient overlay — keeps the quiet headline legible */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, #efe9df 0%, #efe9df 30%, rgba(239,233,223,0.86) 46%, rgba(239,233,223,0.30) 72%, rgba(228,219,201,0.12) 100%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(239,233,223,0.55) 0%, rgba(239,233,223,0) 22%, rgba(239,233,223,0) 72%, rgba(239,233,223,0.65) 100%)',
        }}
      />
      {/* faint horizon line motif */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-[22%] h-px w-full opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="0.5" x2="1000" y2="0.5" stroke="#8a7b5c" strokeWidth="1" strokeDasharray="1 5" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1180px] px-6 sm:px-10">
        <motion.p
          {...rise(0.1)}
          className="mb-8 text-[12px] tracking-[0.4em] text-[#8a7b5c]"
          style={{ fontFamily: 'var(--onjae-sans)' }}
        >
          {hero.tagline}
        </motion.p>

        <h1
          className="text-[#3a352c]"
          style={{ fontFamily: 'var(--onjae-serif)' }}
        >
          {hero.headline.map((line, i) => (
            <motion.span
              key={i}
              {...rise(0.25 + i * 0.15)}
              className="block text-[clamp(2.4rem,6.4vw,5.2rem)] font-semibold leading-[1.16] tracking-[-0.01em]"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          {...rise(0.65)}
          className="mt-10 max-w-[30rem] text-[15px] leading-[2] text-[#3a352c]/85"
          style={{ fontFamily: 'var(--onjae-sans)' }}
        >
          {hero.subtitle}
        </motion.p>
      </div>

      {/* scroll cue */}
      <motion.div
        {...rise(1)}
        className="absolute inset-x-0 bottom-9 flex flex-col items-center gap-3"
      >
        <span
          className="text-[10px] tracking-[0.34em] text-[#3a352c]/45"
          style={{ fontFamily: 'var(--onjae-sans)' }}
        >
          {hero.scroll}
        </span>
        <motion.span
          aria-hidden
          className="block h-8 w-px bg-[#8a7b5c]/45"
          animate={reduce ? undefined : { scaleY: [0.3, 1, 0.3], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
