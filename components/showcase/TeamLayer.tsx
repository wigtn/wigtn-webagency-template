'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, ArrowUpRight } from 'lucide-react';
import type { ShowcaseCopy } from '@/lib/showcase-content';

/**
 * WIGTN 팀 레이어 — 평소 접힌 한 줄, 클릭 시 인라인 확장(오버레이 아님).
 * 검정 + Pantone 265 팀 테마. reduced-motion 시 즉시 표시.
 */
export default function TeamLayer({
  copy,
  ink = '#0a0a0b',
  accent = '#9063CD',
}: {
  copy: ShowcaseCopy;
  ink?: string;
  accent?: string;
}) {
  const [open, setOpen] = useState(false);
  const t = copy.team;

  return (
    <section id="studio" className="border-t border-white/10 text-[#f2f1ef]" style={{ backgroundColor: ink }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-4 py-8 text-left"
        >
          <span className="flex items-baseline gap-3">
            <span className="text-xs tracking-[0.18em]" style={{ color: accent }}>
              {t.eyebrow}
            </span>
            <span className="text-2xl font-semibold tracking-tight sm:text-3xl">
              {open ? t.title : t.toggleClosed}
            </span>
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-[#f2f1ef]/50">
            <span className="hidden sm:inline">{open ? t.toggleOpen : t.toggleClosed}</span>
            <Plus
              size={22}
              strokeWidth={1.6}
              className={`transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
            />
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="team-body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="grid gap-12 pb-16 md:grid-cols-[1.2fr_1fr] md:gap-20">
                <div>
                  <p className="max-w-xl text-lg leading-relaxed text-[#f2f1ef]/80">{t.body}</p>

                  <h4 className="mt-12 text-xs uppercase tracking-[0.18em] text-[#f2f1ef]/40">
                    {t.capabilitiesTitle}
                  </h4>
                  <ul className="mt-5 space-y-3">
                    {t.capabilities.map((c) => (
                      <li key={c} className="flex items-start gap-3 border-t border-white/10 pt-3 text-[#f2f1ef]/80">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.18em] text-[#f2f1ef]/40">{t.processTitle}</h4>
                  <ol className="mt-5 space-y-5">
                    {t.process.map((p, i) => (
                      <li key={p.step} className="flex gap-4">
                        <span className="font-serif text-sm text-[#f2f1ef]/30">0{i + 1}</span>
                        <div>
                          <p className="font-medium text-[#f2f1ef]">{p.step}</p>
                          <p className="text-sm text-[#f2f1ef]/55">{p.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-12 rounded-2xl p-7 text-white" style={{ backgroundColor: accent }}>
                    <p className="text-lg font-medium">{t.ctaTitle}</p>
                    <p className="mt-2 text-sm text-white/80">{t.ctaBody}</p>
                    <a
                      href="mailto:contact@wigtn.com"
                      className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium transition-transform hover:-translate-y-0.5"
                      style={{ color: accent }}
                    >
                      {t.ctaButton}
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
