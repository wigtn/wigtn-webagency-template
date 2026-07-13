import Image from 'next/image';
import { ArrowUpRight, Mail } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import type { Content } from '../content';

const serif = { fontFamily: 'var(--onjae-serif)' } as const;
const sans = { fontFamily: 'var(--onjae-sans)' } as const;

function Eyebrow({ children }: { children: string }) {
  return (
    <span
      className="inline-flex items-center gap-3 text-[11px] tracking-[0.34em] text-[#8a7b5c]"
      style={sans}
    >
      <span aria-hidden className="h-px w-6 bg-[#8a7b5c]/50" />
      {children}
    </span>
  );
}

/* ── Philosophy ─────────────────────────────────────────── */
export function Philosophy({ data }: { data: Content['philosophy'] }) {
  return (
    <section id="philosophy" className="px-6 py-32 sm:px-10 sm:py-44">
      <div className="mx-auto max-w-[720px] text-center">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
        </FadeIn>
        <div className="mt-12 space-y-10">
          {data.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p
                className="text-[clamp(1.15rem,2.4vw,1.5rem)] leading-[2.15] text-[#3a352c]/85"
                style={serif}
              >
                {p}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-24 max-w-[420px]">
            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-[2px]">
              <Image
                src="/images/onjae/detail.jpg"
                alt="온재 실내의 고요한 디테일"
                fill
                sizes="(max-width: 640px) 100vw, 420px"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(239,233,223,0.10) 0%, rgba(58,53,44,0.06) 100%)',
                }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── The House ──────────────────────────────────────────── */
export function House({ data }: { data: Content['house'] }) {
  return (
    <section id="house" className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1180px]">
        <FadeIn>
          <div className="max-w-[540px]">
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2
              className="mt-7 text-[clamp(2rem,4.6vw,3.4rem)] font-semibold leading-[1.24] tracking-[-0.01em] text-[#3a352c]"
              style={serif}
            >
              {data.title}
            </h2>
            <p className="mt-6 text-[15px] leading-[2] text-[#3a352c]/65" style={sans}>
              {data.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 space-y-24 sm:mt-28 sm:space-y-32">
          {data.spaces.map((space, i) => {
            const flip = i % 2 === 1;
            return (
              <FadeIn key={space.no}>
                <div
                  className={`flex flex-col gap-8 sm:items-center sm:gap-14 ${
                    flip ? 'sm:flex-row-reverse' : 'sm:flex-row'
                  }`}
                >
                  {/* photo */}
                  <div className="w-full sm:w-[58%]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#e4dbc9]">
                      <Image
                        src={space.img}
                        alt={`${space.name} · ${space.nameEn}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 58vw"
                        className="object-cover"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(58,53,44,0.14) 0%, rgba(58,53,44,0) 40%)',
                        }}
                      />
                      <span
                        className="absolute left-5 top-4 text-[11px] tracking-[0.3em] text-[#efe9df]/85"
                        style={sans}
                      >
                        {space.no}
                      </span>
                    </div>
                  </div>

                  {/* caption */}
                  <div className="w-full sm:w-[42%]">
                    <div className={flip ? 'sm:pr-4' : 'sm:pl-4'}>
                      <p className="text-[11px] tracking-[0.34em] text-[#8a7b5c]" style={sans}>
                        {space.nameEn.toUpperCase()}
                      </p>
                      <h3
                        className="mt-3 text-[clamp(1.7rem,3.4vw,2.5rem)] font-semibold text-[#3a352c]"
                        style={serif}
                      >
                        {space.name}
                      </h3>
                      <p className="mt-5 max-w-[26rem] text-[15px] leading-[2] text-[#3a352c]/70" style={sans}>
                        {space.line}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── Privacy ────────────────────────────────────────────── */
export function Privacy({ data }: { data: Content['privacy'] }) {
  return (
    <section
      className="px-6 py-36 sm:px-10 sm:py-52"
      style={{
        background: 'linear-gradient(180deg, #efe9df 0%, #e7dfcd 50%, #efe9df 100%)',
      }}
    >
      <div className="mx-auto max-w-[860px] text-center">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="mt-10 text-[clamp(2.2rem,6vw,4.6rem)] font-semibold leading-[1.22] tracking-[-0.01em] text-[#3a352c]"
            style={serif}
          >
            {data.statement.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-10 max-w-[34rem] text-[15px] leading-[2.1] text-[#3a352c]/65" style={sans}>
            {data.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Amenities ──────────────────────────────────────────── */
export function Amenities({ data }: { data: Content['amenities'] }) {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1180px]">
        <FadeIn>
          <div className="max-w-[520px]">
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <h2
              className="mt-7 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1.24] text-[#3a352c]"
              style={serif}
            >
              {data.title}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-px sm:grid-cols-2">
          {data.items.map((item, i) => (
            <FadeIn key={item.name} delay={(i % 2) * 0.08}>
              <div className="flex items-baseline justify-between gap-6 border-t border-[#3a352c]/12 py-7">
                <span className="text-[19px] font-medium text-[#3a352c]" style={serif}>
                  {item.name}
                </span>
                <span className="max-w-[16rem] text-right text-[13px] leading-[1.7] text-[#3a352c]/55" style={sans}>
                  {item.desc}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Experiences ────────────────────────────────────────── */
export function Experiences({ data }: { data: Content['experiences'] }) {
  return (
    <section className="px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="max-w-[520px]">
              <Eyebrow>{data.eyebrow}</Eyebrow>
              <h2
                className="mt-7 text-[clamp(1.9rem,4.4vw,3.2rem)] font-semibold leading-[1.24] text-[#3a352c]"
                style={serif}
              >
                {data.title}
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] bg-[#e4dbc9]">
              <Image
                src="/images/onjae/tea.jpg"
                alt="대청에서의 다도 · 따뜻한 등불"
                fill
                sizes="(max-width: 768px) 100vw, 48vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(58,53,44,0.10) 0%, rgba(58,53,44,0) 45%)',
                }}
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-14 gap-y-14 md:grid-cols-3">
          {data.items.map((item, i) => (
            <FadeIn key={item.no} delay={i * 0.1}>
              <div className="flex h-full flex-col border-t border-[#3a352c]/15 pt-8">
                <span className="text-[11px] tracking-[0.3em] text-[#8a7b5c]" style={sans}>
                  {item.no} · {item.nameEn.toUpperCase()}
                </span>
                <h3 className="mt-6 text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#3a352c]" style={serif}>
                  {item.name}
                </h3>
                <p className="mt-5 text-[14px] leading-[1.95] text-[#3a352c]/65" style={sans}>
                  {item.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Location ───────────────────────────────────────────── */
export function Location({ data }: { data: Content['location'] }) {
  return (
    <section
      className="px-6 py-28 sm:px-10 sm:py-40"
      style={{ background: 'linear-gradient(180deg, #efe9df 0%, #e9e1d0 100%)' }}
    >
      <div className="mx-auto max-w-[1180px]">
        <FadeIn>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[#e4dbc9]">
            <Image
              src="/images/onjae/location.jpg"
              alt="밤의 온재 · 한적한 마을 골목 끝의 따뜻한 집"
              fill
              sizes="(max-width: 1180px) 100vw, 1180px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(58,53,44,0) 40%, rgba(58,53,44,0.22) 100%)',
              }}
            />
          </div>
        </FadeIn>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1180px] grid-cols-1 gap-16 md:grid-cols-2 md:gap-24 sm:mt-20">
        <FadeIn>
          <div>
            <Eyebrow>{data.eyebrow}</Eyebrow>
            <p
              className="mt-8 max-w-[24rem] text-[clamp(1.5rem,3.2vw,2.2rem)] font-medium leading-[1.5] text-[#3a352c]"
              style={serif}
            >
              {data.statement}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <dl className="mt-2">
            {data.access.map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 border-t border-[#3a352c]/12 py-6 sm:flex-row sm:gap-8"
              >
                <dt className="min-w-[5rem] text-[11px] tracking-[0.26em] text-[#8a7b5c]" style={sans}>
                  {row.label.toUpperCase()}
                </dt>
                <dd className="text-[14px] leading-[1.8] text-[#3a352c]/75" style={sans}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Reservation ────────────────────────────────────────── */
export function Reservation({ data }: { data: Content['reservation'] }) {
  return (
    <section id="reservation" className="px-6 py-32 sm:px-10 sm:py-48">
      <div className="mx-auto max-w-[820px] text-center">
        <FadeIn>
          <Eyebrow>{data.eyebrow}</Eyebrow>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h2
            className="mt-10 whitespace-pre-line text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[1.28] tracking-[-0.01em] text-[#3a352c]"
            style={serif}
          >
            {data.title}
          </h2>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="mx-auto mt-8 max-w-[34rem] text-[15px] leading-[2.05] text-[#3a352c]/65" style={sans}>
            {data.body}
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="mt-12 flex flex-col items-center gap-6">
            <a
              href={`mailto:${data.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-[#3a352c] px-8 py-4 text-[13px] tracking-[0.14em] text-[#efe9df] transition-colors duration-300 hover:bg-[#8a7b5c]"
              style={sans}
            >
              <Mail size={15} strokeWidth={1.5} />
              {data.cta}
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <p className="text-[11px] tracking-[0.24em] text-[#8a7b5c]" style={sans}>
              {data.note}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Footer ─────────────────────────────────────────────── */
export function Footer({ data }: { data: Content['footer'] }) {
  return (
    <footer
      className="px-6 pb-24 pt-20 sm:px-10"
      style={{ borderTop: '1px solid rgba(58,53,44,0.1)' }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="text-[22px] font-semibold text-[#3a352c]" style={serif}>
                {data.brandKo}
              </span>
              <span className="text-[11px] tracking-[0.42em] text-[#8a7b5c]" style={sans}>
                {data.brandEn}
              </span>
            </div>
            <p className="mt-5 max-w-[22rem] text-[12px] leading-[1.9] tracking-[0.02em] text-[#3a352c]/55" style={sans}>
              {data.tagline}
            </p>
          </div>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-12">
            {data.contacts.map((row) => (
              <div key={row.label}>
                <dt className="text-[10px] tracking-[0.28em] text-[#8a7b5c]" style={sans}>
                  {row.label.toUpperCase()}
                </dt>
                <dd className="mt-2 text-[13px] text-[#3a352c]/75" style={sans}>
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#3a352c]/10 pt-8 text-[11px] tracking-[0.06em] text-[#3a352c]/45 sm:flex-row sm:items-center" style={sans}>
          <span>© {new Date().getFullYear()} 온재 ONJAE. All rights reserved.</span>
          <a
            href="https://wigtn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 tracking-[0.16em] text-[#3a352c]/60 transition-colors duration-300 hover:text-[#8a7b5c]"
          >
            {data.credit}
            <ArrowUpRight size={12} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
}
