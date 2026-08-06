'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import WigtnLogo from '@/components/showcase/WigtnLogo';
import type { ShowcaseCopy } from '@/lib/showcase-content';

export default function ShowcaseNav({
  copy,
  ink = '#0a0a0b',
  accent = '#9063CD',
}: {
  copy: ShowcaseCopy;
  ink?: string;
  accent?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const workMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (!workMenuRef.current?.contains(event.target as Node)) setWorkOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setWorkOpen(false);
    };
    document.addEventListener('pointerdown', closeOnOutsidePress);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsidePress);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  const jump = (id: string) => {
    setWorkOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={
        scrolled
          ? { backgroundColor: `${ink}e6`, backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.08)' }
          : { backgroundColor: 'transparent' }
      }
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="WIGTN"
          className="flex items-center"
        >
          <WigtnLogo priority className="h-7 w-auto sm:h-8" />
        </button>

        <nav className="flex items-center gap-5 text-sm text-[#f2f1ef]/70 sm:gap-6">
          <div
            ref={workMenuRef}
            className="relative"
            onMouseEnter={() => setWorkOpen(true)}
            onMouseLeave={() => setWorkOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={workOpen}
              onClick={() => setWorkOpen(true)}
              className="flex items-center gap-1.5 py-2 transition-colors hover:text-[#f2f1ef] focus-visible:text-[#f2f1ef] focus-visible:outline-none"
            >
              {copy.nav.work}
              <ChevronDown size={13} className={`transition-transform duration-200 ${workOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              role="menu"
              aria-label={copy.nav.work}
              className={`absolute right-0 top-full w-48 border border-white/12 bg-[#0f0f11]/96 p-1.5 shadow-[0_18px_50px_rgba(0,0,0,.45)] backdrop-blur-xl transition duration-200 sm:left-0 sm:right-auto ${workOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
            >
              <button type="button" role="menuitem" onClick={() => jump('templates')} className="group flex w-full items-center justify-between px-3 py-3 text-left transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none">
                <span className="text-[#f2f1ef]">{copy.nav.web}</span>
                <span className="text-[10px] text-white/30 transition-colors group-hover:text-[#9063CD]">01</span>
              </button>
              <button type="button" role="menuitem" onClick={() => jump('interactive')} className="group flex w-full items-center justify-between border-t border-white/8 px-3 py-3 text-left transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none">
                <span className="text-[#f2f1ef]">{copy.nav.interactive}</span>
                <span className="text-[10px] text-white/30 transition-colors group-hover:text-[#9063CD]">02</span>
              </button>
              <button type="button" role="menuitem" onClick={() => jump('mobile')} className="group flex w-full items-center justify-between border-t border-white/8 px-3 py-3 text-left transition-colors hover:bg-white/8 focus-visible:bg-white/8 focus-visible:outline-none">
                <span className="text-[#f2f1ef]">{copy.nav.mobile}</span>
                <span className="text-[10px] text-white/30 transition-colors group-hover:text-[#9063CD]">03</span>
              </button>
            </div>
          </div>
          <a href="mailto:contact@wigtn.com" className="transition-colors hover:text-[#f2f1ef]">
            {copy.nav.contact}
          </a>
          <span className="hidden h-4 w-px bg-white/15 sm:block" aria-hidden />
          <div className="hidden sm:block">
            <LanguageSwitcher variant="dark" locales={['ko', 'en']} />
          </div>
        </nav>
      </div>
    </header>
  );
}
