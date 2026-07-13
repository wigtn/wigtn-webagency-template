'use client';

import { useEffect, useState } from 'react';
import type { Content } from '../content';

export default function Nav({ nav }: { nav: Content['nav'] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(239,233,223,0.82)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(120%) blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(58,53,44,0.08)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-2 text-[#3a352c]"
          style={{ fontFamily: 'var(--onjae-serif)' }}
        >
          <span className="text-[19px] font-semibold tracking-[0.02em]">{nav.brandKo}</span>
          <span
            className="text-[11px] font-medium tracking-[0.42em] text-[#8a7b5c]"
            style={{ fontFamily: 'var(--onjae-sans)' }}
          >
            {nav.brandEn}
          </span>
        </a>

        <div className="flex items-center gap-7">
          <ul
            className="hidden items-center gap-8 text-[12px] tracking-[0.16em] text-[#3a352c]/70 sm:flex"
            style={{ fontFamily: 'var(--onjae-sans)' }}
          >
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors duration-300 hover:text-[#8a7b5c]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#reservation"
            className="rounded-full border border-[#3a352c]/25 px-4 py-1.5 text-[11px] tracking-[0.18em] text-[#3a352c] transition-colors duration-300 hover:border-[#8a7b5c] hover:text-[#8a7b5c]"
            style={{ fontFamily: 'var(--onjae-sans)' }}
          >
            {nav.reserve}
          </a>
        </div>
      </nav>
    </header>
  );
}
