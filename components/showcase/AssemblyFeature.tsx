'use client';

import Image from 'next/image';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { Locale } from '@/i18n/routing';
import type { ShowcaseCopy } from '@/lib/showcase-content';

const frames = [
  { id: '00', name: 'MOTION', role: 'Film / Fashion / Beauty', location: 'Seoul / Worldwide', image: null },
  { id: '01', name: 'NOAH KIM', role: 'Model', location: 'Seoul', image: '/images/interaction/assembly/talent-noah-v3.png' },
  { id: '02', name: 'SOYEON HAN', role: 'Actor / Model', location: 'Seoul / Tokyo', image: '/images/interaction/assembly/talent-soyeon-v3.png' },
  { id: '03', name: 'MIRA SEO', role: 'Actor', location: 'Seoul', image: '/images/interaction/assembly/talent-mira-v3.png' },
] as const;

const ASSEMBLY_URL = 'https://wigtn-interactive-template.vercel.app/';

export default function AssemblyFeature({ copy, locale }: { copy: ShowcaseCopy; locale: Locale }) {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 130, damping: 24, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 130, damping: 24, mass: 0.6 });
  const mediaX = useTransform(springX, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const mediaY = useTransform(springY, [-0.5, 0.5], ['-1.5%', '1.5%']);
  const frame = frames[selected];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (selected === 0 && playing && !reduceMotion) void video.play().catch(() => setPlaying(false));
    else video.pause();
  }, [playing, reduceMotion, selected]);

  const selectFrame = (index: number) => {
    setSelected(index);
    if (index === 0) setPlaying(true);
  };

  return (
    <section id="interactive" className="scroll-mt-16 overflow-hidden border-t border-white/10 bg-[#0a0a0b] px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="grid gap-8 border-b border-white/10 pb-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold text-[#9063CD]">{copy.interactive.eyebrow}</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-[1.12] text-[#f2f1ef] sm:text-4xl">
              {copy.interactive.heading}
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-lg text-sm leading-relaxed text-[#f2f1ef]/60 sm:text-base">{copy.interactive.lead}</p>
            <a href="mailto:contact@wigtn.com" className="mt-5 inline-flex items-center gap-2 border-b border-[#9063CD] pb-1 text-sm text-white">
              {locale === 'ko' ? '인터랙션 제작 문의' : 'Interactive project inquiry'}
              <ArrowUpRight size={15} color="#9063CD" />
            </a>
          </div>
        </header>

        <div className="mt-10 border border-white/14 bg-[#050505] p-2 sm:p-3">
          <motion.div
            className="relative isolate h-[520px] w-full overflow-hidden bg-black sm:h-auto sm:aspect-[16/9]"
            onPointerMove={(event) => {
              if (reduceMotion) return;
              const bounds = event.currentTarget.getBoundingClientRect();
              pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
              pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
            }}
            onPointerLeave={() => {
              pointerX.set(0);
              pointerY.set(0);
            }}
          >
            <motion.div className="absolute -inset-3" style={{ x: mediaX, y: mediaY }}>
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                preload="metadata"
                poster="/images/interaction/assembly/talent-noah-v3.png"
                className="absolute inset-0 h-full w-full object-cover"
                onLoadedMetadata={(event) => {
                  event.currentTarget.playbackRate = 0.58;
                }}
              >
                <source src="/images/interaction/assembly/assembly-film-v1.mp4" type="video/mp4" />
              </video>

              <AnimatePresence initial={false}>
                {frame.image ? (
                  <motion.div
                    key={frame.image}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={frame.image} alt="" fill loading="eager" sizes="(max-width: 768px) 100vw, 1152px" className="object-cover object-center" />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78)_0%,rgba(0,0,0,.34)_48%,rgba(0,0,0,.18)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,0,0,.76)_0%,rgba(0,0,0,.28)_47%,rgba(0,0,0,.12)_100%)]" />
            <a href={ASSEMBLY_URL} className="absolute inset-0 z-[5] cursor-pointer" aria-label="Open ASSEMBLY live site" />
            <div className="absolute inset-4 border border-white/28 sm:inset-6" aria-hidden="true">
              <i className="absolute -left-px -top-px h-7 w-px bg-[#f3453c]" />
              <i className="absolute -left-px -top-px h-px w-7 bg-[#f3453c]" />
              <i className="absolute -bottom-px -right-px h-7 w-px bg-[#f3453c]" />
              <i className="absolute -bottom-px -right-px h-px w-7 bg-[#f3453c]" />
            </div>
            <div className="absolute inset-y-0 left-[58%] hidden w-px bg-white/16 sm:block" aria-hidden="true" />
            <div className="absolute inset-x-0 top-[58%] h-px bg-[#f3453c]/35" aria-hidden="true" />

            <div className="pointer-events-none absolute left-8 top-8 z-10 flex items-center gap-3 text-[9px] font-medium text-white/72 sm:left-12 sm:top-11 sm:text-[10px]">
              <span className="h-px w-8 bg-[#f3453c]" />
              TALENT MANAGEMENT / SEOUL
            </div>

            <div className="pointer-events-none absolute left-8 top-[19%] z-10 max-w-[72%] sm:left-12 sm:top-[24%]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={frame.name}
                  initial={{ y: 22, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -14, opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-3 text-[10px] text-white/56 sm:text-xs">{frame.id} / REPRESENTED</p>
                  <h3 className="text-[clamp(2.65rem,8.2vw,7.5rem)] font-semibold leading-[0.82] text-[#f4f1ea]">
                    {selected === 0 ? 'ASSEMBLY' : frame.name.split(' ')[0]}
                    <span className="block">{selected === 0 ? '' : frame.name.split(' ').slice(1).join(' ')}</span>
                  </h3>
                  <p className="mt-5 text-[10px] uppercase text-white/68 sm:text-xs">{frame.role} · {frame.location}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="pointer-events-none absolute bottom-8 left-8 z-10 max-w-[54%] sm:bottom-11 sm:left-12">
              <p className="text-[9px] leading-relaxed text-white/48 sm:text-[10px]">REPRESENTED TALENT / SELECTED WORK / 2026</p>
              <div className="mt-3 hidden items-center gap-2 text-[9px] text-white/72 sm:flex">
                <span>3D DIRECTION</span><i className="h-1 w-1 rounded-full bg-[#f3453c]" /><span>MOTION SYSTEM</span><i className="h-1 w-1 rounded-full bg-[#f3453c]" /><span>CASTING UX</span>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 z-20 grid w-[38%] gap-px border border-white/18 bg-white/18 sm:bottom-11 sm:right-12 sm:w-56">
              {frames.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => selectFrame(index)}
                  onFocus={() => selectFrame(index)}
                  onClick={() => selectFrame(index)}
                  aria-pressed={selected === index}
                  className={`group flex h-10 items-center justify-between bg-black/72 px-3 text-left text-[9px] backdrop-blur-md transition-colors sm:h-11 sm:px-4 sm:text-[10px] ${selected === index ? 'text-white' : 'text-white/48 hover:bg-black/56 hover:text-white'}`}
                >
                  <span>{item.id}</span>
                  <span className="truncate px-2 font-medium">{item.name}</span>
                  <i className={`h-1.5 w-1.5 rounded-full transition-colors ${selected === index ? 'bg-[#f3453c]' : 'bg-white/20 group-hover:bg-white/55'}`} />
                </button>
              ))}
            </div>

            {selected === 0 ? (
              <button
                type="button"
                onClick={() => setPlaying((value) => !value)}
                className="absolute right-8 top-8 z-20 grid h-10 w-10 place-items-center border border-white/25 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black sm:right-12 sm:top-11"
                aria-label={playing ? 'Pause motion preview' : 'Play motion preview'}
                title={playing ? 'Pause motion preview' : 'Play motion preview'}
              >
                {playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" />}
              </button>
            ) : null}
          </motion.div>
        </div>

        <div className="mt-5 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-[10px] text-white/38 sm:flex-row sm:items-center">
          <span>ASSEMBLY — TALENT MANAGEMENT EXPERIENCE</span>
          <a href={ASSEMBLY_URL} className="inline-flex items-center gap-1.5 text-white/58 transition-colors hover:text-white">
            LIVE SITE <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
