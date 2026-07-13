'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Content } from '../content';

export default function Nav({ nav }: { nav: Content['nav'] }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(14,14,15,0.72)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(200,169,106,0.14)' : 'transparent'}`,
      }}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#top"
          className="text-[15px] font-medium uppercase tracking-[0.42em] text-[#f4efe6]"
          style={{ fontFamily: 'var(--mn-sans)', textShadow: scrolled ? 'none' : '0 1px 12px rgba(0,0,0,0.6)' }}
        >
          Maison<span className="text-[#c8a96a]"> Noir</span>
        </a>

        <div
          className="hidden items-center gap-9 md:flex"
          style={{ fontFamily: 'var(--mn-sans)' }}
        >
          {nav.links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-[12px] uppercase tracking-[0.24em] text-[#d8d2c6] transition-colors duration-300 hover:text-[#f4efe6]"
              style={{ textShadow: scrolled ? 'none' : '0 1px 12px rgba(0,0,0,0.6)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#c8a96a]/45 px-6 py-2.5 text-[11px] uppercase tracking-[0.28em] text-[#c8a96a] transition-colors duration-300 hover:bg-[#c8a96a] hover:text-[#0e0e0f]"
          >
            {nav.reserve}
          </a>
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="text-[#f4efe6] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="border-t border-[#c8a96a]/12 bg-[#0e0e0f]/95 px-6 pb-8 pt-2 md:hidden"
          style={{ fontFamily: 'var(--mn-sans)', backdropFilter: 'blur(14px)' }}
        >
          <div className="flex flex-col gap-1">
            {nav.links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3.5 text-[13px] uppercase tracking-[0.24em] text-[#9a948a]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 border border-[#c8a96a]/45 py-3.5 text-center text-[12px] uppercase tracking-[0.28em] text-[#c8a96a]"
            >
              {nav.reserve}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
