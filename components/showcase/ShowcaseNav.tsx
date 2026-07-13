'use client';

import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const jump = (id: string) => {
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
          <WigtnLogo tone="dark" priority className="h-5 w-auto sm:h-6" />
        </button>

        <nav className="flex items-center gap-6 text-sm text-[#f2f1ef]/70">
          <button onClick={() => jump('templates')} className="hidden transition-colors hover:text-[#f2f1ef] sm:inline">
            {copy.nav.work}
          </button>
          <button onClick={() => jump('studio')} className="hidden transition-colors hover:text-[#f2f1ef] sm:inline">
            {copy.nav.studio}
          </button>
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
