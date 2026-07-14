import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { ArrowUpRight } from 'lucide-react';
import type { Content } from '../content';

const IMG = '/images/maison-noir';
const suiteImgs = ['suite-1-v2.jpg', 'suite-2-v2.jpg', 'suite-3-v2.jpg'];
const galleryImgs = ['g1-v2.jpg', 'g2-v2.jpg', 'g3-v2.jpg', 'g4-v2.jpg', 'g5-v2.jpg', 'g6-v2.jpg'];
const imageSrc = (name: string) => `${IMG}/${name}`;

const sans = { fontFamily: 'var(--mn-sans)' } as const;
const serif = { fontFamily: 'var(--mn-serif)' } as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.36em] text-[#d2b58a]" style={sans}>
      <span className="h-px w-8 bg-[#b89a72]/50" />
      {children}
    </p>
  );
}

/* ── 3. Signature ─────────────────────────────── */
export function Signature({ data }: { data: Content['signature'] }) {
  return (
    <section id="signature" className="bg-[#0e0e0f] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-12 grid gap-14 md:grid-cols-[1.4fr_1fr] md:gap-20">
          <FadeIn delay={0.05}>
            <blockquote
              className="text-[clamp(1.75rem,4vw,3.2rem)] font-light leading-[1.35] text-[#f1ece4]"
              style={serif}
            >
              {data.quote}
            </blockquote>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="md:pt-4">
              <span className="mb-7 block h-px w-full bg-gradient-to-r from-[#b89a72]/50 to-transparent" />
              <p className="text-[15px] font-light leading-[1.85] text-[#c6bcb0]" style={sans}>
                {data.body}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── 4. Rooms & Suites ────────────────────────── */
export function Rooms({ data }: { data: Content['rooms'] }) {
  return (
    <section id="suites" className="bg-[#0b0b0c] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
            {data.title}
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col">
          {data.tiers.map((room, i) => (
            <FadeIn key={room.name} delay={i * 0.08}>
              <div
                className="group grid grid-cols-1 gap-8 border-t border-[#b89a72]/14 py-10 transition-colors duration-500 hover:border-[#b89a72]/40 md:grid-cols-[0.9fr_1.5fr_0.9fr] md:items-center md:gap-10"
                style={{ borderTopWidth: i === 0 ? 1 : 1 }}
              >
                {/* visual + name */}
                <div className="flex items-center gap-6">
                  <div
                    className="relative h-20 w-28 shrink-0 overflow-hidden rounded-[2px] transition-transform duration-500 group-hover:-translate-y-1"
                    style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.18)' }}
                  >
                    <Image
                      src={imageSrc(suiteImgs[i] ?? suiteImgs[0])}
                      alt={room.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-black/15" />
                  </div>
                  <div>
                    <h3 className="text-[24px] font-normal leading-tight text-[#f1ece4] md:text-[26px]" style={serif}>
                      {room.name}
                    </h3>
                    <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.2em] text-[#b8afa4]" style={sans}>
                      {room.size} · {room.view}
                    </p>
                  </div>
                </div>

                {/* features */}
                <ul className="flex flex-wrap gap-x-8 gap-y-2 md:flex-col md:gap-y-2.5" style={sans}>
                  {room.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-[14px] font-light text-[#c6bcb0]">
                      <span className="h-1 w-1 rounded-full bg-[#b89a72]/70" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* rate */}
                <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2 md:text-right">
                  <span
                    className="inline-flex items-baseline rounded-[3px] border border-[#d2b58a]/35 bg-[#08080a]/90 px-3.5 py-2 text-[19px] font-bold tabular-nums text-[#dfc391]"
                    style={{
                      fontFamily: 'var(--mn-sans)',
                      fontFeatureSettings: '"lnum" 1, "tnum" 1',
                    }}
                  >
                    {room.rate}
                  </span>
                  <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#b8afa4]" style={sans}>
                    {data.perNight}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
          <span className="h-px w-full bg-[#b89a72]/14" />
        </div>
      </div>
    </section>
  );
}

/* ── 5. Dining ────────────────────────────────── */
export function Dining({ data }: { data: Content['dining'] }) {
  return (
    <section id="dining" className="bg-[#0e0e0f] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="mt-6 max-w-[16ch] text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
            {data.title}
          </h2>
          <p className="mt-7 max-w-[52ch] text-[15px] font-light leading-relaxed text-[#c6bcb0]" style={sans}>
            {data.intro}
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {data.venues.map((v, i) => (
            <FadeIn key={v.name} delay={i * 0.1}>
              <div className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-[3px] border border-[#b89a72]/12 p-9">
                <Image
                  src={imageSrc(i === 0 ? 'dining-v2.jpg' : 'bar-v2.jpg')}
                  alt={v.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b] via-[#0a0a0b]/75 to-[#0a0a0b]/20" />
                <div className="relative">
                  <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]" style={sans}>
                    {v.kicker}
                  </p>
                  <h3 className="mt-3 text-[38px] font-light leading-none text-[#f1ece4]" style={serif}>
                    {v.name}
                  </h3>
                  <p className="mt-5 max-w-[38ch] text-[14px] font-light leading-relaxed text-[#ded3c4]" style={sans}>
                    {v.line}
                  </p>
                  <p className="mt-6 border-t border-white/12 pt-5 text-[12px] font-medium uppercase tracking-[0.18em] text-[#c6bcb0]" style={sans}>
                    {v.hours}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 6. Spa & Wellness ────────────────────────── */
export function Spa({ data }: { data: Content['spa'] }) {
  return (
    <section
      id="wellness"
      className="px-6 py-28 md:px-10 md:py-40"
      style={{ background: 'linear-gradient(180deg, #0b0b0c 0%, #100e0b 100%)' }}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-2 md:gap-24">
          <FadeIn>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-[0.98] text-[#f1ece4]" style={serif}>
              {data.title}
            </h2>
            <p className="mt-8 max-w-[44ch] text-[15px] font-light leading-[1.85] text-[#d4cabd]" style={sans}>
              {data.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="md:pt-16">
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]" style={sans}>
                {data.treatmentsLabel}
              </p>
              <ul className="mt-6">
                {data.treatments.map((t, i) => (
                  <li
                    key={t}
                    className="flex items-baseline gap-5 border-b border-[#b89a72]/18 py-4 text-[16px] font-medium text-[#f6efe5]"
                    style={sans}
                  >
                    <span className="min-w-8 text-[11px] uppercase tracking-[0.2em] text-[#d2b58a]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <div className="group relative mt-16 aspect-[16/9] w-full overflow-hidden rounded-[3px] border border-[#b89a72]/12 md:mt-20 md:aspect-[21/9]">
            <Image
              src={imageSrc('spa-v2.jpg')}
              alt={data.title}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover transition-transform duration-[1400ms] group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-[#0a0a0b]/50 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── 7. Meetings & Events ─────────────────────── */
export function Events({ data }: { data: Content['events'] }) {
  return (
    <section className="bg-[#0e0e0f] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:gap-20">
          <FadeIn>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2 className="mt-6 max-w-[14ch] text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
              {data.title}
            </h2>
            <p className="mt-8 max-w-[46ch] text-[15px] font-light leading-relaxed text-[#c6bcb0]" style={sans}>
              {data.body}
            </p>
            <p className="mt-10 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.16em] text-[#d2b58a]" style={sans}>
              {data.inquiry}
            </p>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="grid grid-cols-3 gap-px overflow-hidden rounded-[3px] border border-[#b89a72]/14 md:mt-4">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-[#0b0b0c] px-4 py-12 text-center">
                  <p className="text-[clamp(2.2rem,5vw,3.4rem)] font-light leading-none text-[#b89a72]" style={serif}>
                    {s.value}
                  </p>
                  <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.16em] leading-tight text-[#b8afa4]" style={sans}>
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── 8. Offers / Packages ─────────────────────── */
export function Offers({ data }: { data: Content['offers'] }) {
  return (
    <section id="offers" className="bg-[#0b0b0c] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
            {data.title}
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {data.items.map((o, i) => (
            <FadeIn key={o.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col border border-[#b89a72]/14 p-8 transition-[border-color,transform,background-color] duration-500 hover:-translate-y-1 hover:border-[#b89a72]/40 hover:bg-[#111113]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#d2b58a]" style={sans}>
                    {o.tag}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[#b8afa4] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d2b58a]"
                  />
                </div>
                <h3 className="mt-10 text-[28px] font-light leading-tight text-[#f1ece4]" style={serif}>
                  {o.name}
                </h3>
                <p className="mt-4 text-[14px] font-light leading-relaxed text-[#c6bcb0]" style={sans}>
                  {o.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 9. Gallery ───────────────────────────────── */
export function Gallery({ data }: { data: Content['gallery'] }) {
  // Deliberate masonry: 6 tiles fill a 4-col × 3-row grid exactly (8+2+2 = 12 cells),
  // so there are never orphan or empty trailing cells.
  const spans = [
    'md:col-span-2 md:row-span-2', // g1 — feature (cols 1-2, rows 1-2)
    'md:col-span-1 md:row-span-2', // g2 — tall portrait (col 3, rows 1-2)
    'md:col-span-1 md:row-span-1', // g3 (col 4, row 1)
    'md:col-span-1 md:row-span-1', // g4 (col 4, row 2)
    'md:col-span-2 md:row-span-1', // g5 (cols 1-2, row 3)
    'md:col-span-2 md:row-span-1', // g6 (cols 3-4, row 3)
  ];
  return (
    <section className="bg-[#0e0e0f] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
            {data.title}
          </h2>
        </FadeIn>
        <div className="mt-14 grid grid-cols-2 gap-3 [grid-auto-rows:minmax(150px,1fr)] md:grid-cols-4 md:[grid-auto-rows:minmax(190px,1fr)]">
          {data.tiles.map((t, i) => (
            <FadeIn key={i} delay={(i % 4) * 0.06} className={`${spans[i] ?? 'md:col-span-1'} min-h-[150px]`}>
              <div
                className="group relative h-full w-full overflow-hidden rounded-[2px]"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(200,169,106,0.12)' }}
              >
                <Image
                  src={imageSrc(galleryImgs[i] ?? galleryImgs[0])}
                  alt={t.label || 'Maison Noir'}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {t.label && (
                  <span
                    className="absolute bottom-4 left-4 text-[11px] uppercase tracking-[0.24em] text-[#f1ece4]"
                    style={{ ...sans, textShadow: '0 1px 10px rgba(0,0,0,0.7)' }}
                  >
                    {t.label}
                  </span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 10. Access ───────────────────────────────── */
export function Access({ data }: { data: Content['access'] }) {
  return (
    <section
      id="contact"
      className="px-6 py-28 md:px-10 md:py-40"
      style={{ background: 'linear-gradient(180deg, #0b0b0c 0%, #0e0e0f 100%)' }}
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
          <h2 className="mt-6 text-[clamp(2.4rem,6vw,4.5rem)] font-light leading-none text-[#f1ece4]" style={serif}>
            {data.title}
          </h2>
        </FadeIn>
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
          <FadeIn>
            <address className="not-italic">
              {data.address.map((line, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'text-[20px] font-normal text-[#f1ece4]' : 'text-[15px] font-light text-[#c6bcb0]'}
                  style={i === 0 ? serif : sans}
                >
                  {line}
                </p>
              ))}
            </address>
          </FadeIn>
          <FadeIn delay={0.08}>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]" style={sans}>
              {data.directionsLabel}
            </p>
            <ul className="mt-5 space-y-3" style={sans}>
              {data.directions.map((d) => (
                <li key={d} className="flex gap-3 text-[14px] font-light leading-snug text-[#c6bcb0]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#b89a72]/70" />
                  {d}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]" style={sans}>
              {data.hoursLabel}
            </p>
            <ul className="mt-5 space-y-3" style={sans}>
              {data.hours.map((h) => (
                <li key={h} className="text-[14px] font-light text-[#c6bcb0]">
                  {h}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ── 11. Footer ───────────────────────────────── */
export function Footer({ data }: { data: Content['footer'] }) {
  return (
    <footer className="border-t border-[#b89a72]/14 bg-[#0a0a0b] px-6 pb-16 pt-20 md:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <p className="text-[18px] font-medium uppercase tracking-[0.4em] text-[#f1ece4]" style={sans}>
              Maison<span className="text-[#b89a72]"> Noir</span>
            </p>
            <p className="mt-6 max-w-[34ch] text-[14px] font-light leading-relaxed text-[#c6bcb0]" style={serif}>
              {data.tagline}
            </p>
          </div>
          <div style={sans}>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]">{data.contactLabel}</p>
            <a href={`mailto:${data.email}`} className="mt-5 block text-[14px] text-[#c6bcb0] transition-colors hover:text-[#f1ece4]">
              {data.email}
            </a>
            <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="mt-2 block text-[14px] text-[#c6bcb0] transition-colors hover:text-[#f1ece4]">
              {data.phone}
            </a>
          </div>
          <div style={sans}>
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#d2b58a]">{data.socialLabel}</p>
            <div className="mt-5 flex flex-col gap-2">
              {data.socials.map((s) => (
                <a key={s} href="#top" className="text-[14px] text-[#c6bcb0] transition-colors hover:text-[#f1ece4]">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-16 flex flex-col gap-4 border-t border-white/6 pt-8 text-[12px] text-[#b8afa4] md:flex-row md:items-center md:justify-between"
          style={sans}
        >
          <p>{data.rights}</p>
          <a
            href="https://wigtn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-[0.2em] text-[#b8afa4] transition-colors hover:text-[#d2b58a]"
          >
            {data.credit}
          </a>
        </div>
      </div>
    </footer>
  );
}
