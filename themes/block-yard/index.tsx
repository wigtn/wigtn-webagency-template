'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin, Menu, Search, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import type { Locale } from '@/i18n/routing';
import { getDict } from './content';
import { notoSansKr, spaceGrotesk } from './fonts';

const INK = '#101010';
const PAPER = '#fff8d7';
const GREEN = '#00b453';
const BLUE = '#2b5cff';
const YELLOW = '#ffd84d';

const display = { fontFamily: 'var(--by-display), var(--by-sans), system-ui, sans-serif' } as const;
const sans = { fontFamily: 'var(--by-sans), system-ui, sans-serif' } as const;

function Sticker({ children, tone = GREEN }: { children: React.ReactNode; tone?: string }) {
  return (
    <span
      className="inline-flex w-fit items-center rounded-full border-2 px-4 py-2 text-[11px] font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#101010]"
      style={{ ...display, backgroundColor: tone, borderColor: INK, color: INK }}
    >
      {children}
    </span>
  );
}

function SectionTitle({
  label,
  title,
  align = 'left',
}: {
  label: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <FadeIn>
      <div className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
        <Sticker tone={align === 'center' ? YELLOW : GREEN}>{label}</Sticker>
        <h2
          className="mt-6 text-[clamp(2.4rem,6.4vw,5.8rem)] font-black leading-[1.04]"
          style={display}
        >
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}

export default function BlockYard({ locale }: { locale: Locale }) {
  const t = getDict(locale);
  const reduce = useReducedMotion();

  const nav = [
    ['#spaces', t.nav.spaces],
    ['#membership', t.nav.membership],
    ['#calendar', t.nav.calendar],
  ];

  return (
    <main
      className={`${spaceGrotesk.variable} ${notoSansKr.variable} min-h-screen overflow-x-hidden`}
      style={{ ...sans, backgroundColor: PAPER, color: INK }}
    >
      <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-black bg-[#fff8d7]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2" aria-label="BLOCK YARD">
            <span className="grid h-9 w-9 place-items-center border-2 border-black bg-[#00b453] font-black shadow-[3px_3px_0_#101010]" style={display}>
              B
            </span>
            <span className="text-[20px] font-black tracking-[-0.02em]" style={display}>
              BLOCK YARD
            </span>
          </a>
          <div className="hidden items-center gap-2 md:flex">
            {nav.map(([href, label]) => (
              <motion.a
                key={href}
                href={href}
                whileHover={reduce ? undefined : { y: -3, backgroundColor: YELLOW }}
                whileTap={reduce ? undefined : { y: 1, boxShadow: '0px 0px 0 #101010' }}
                className="border-2 border-black bg-white px-4 py-2 text-[13px] font-black uppercase tracking-[0.04em] shadow-[3px_3px_0_#101010]"
                style={display}
              >
                {label}
              </motion.a>
            ))}
          </div>
          <motion.a
            href="#contact"
            whileHover={reduce ? undefined : { y: -3, x: -3, boxShadow: '7px 7px 0 #00b453' }}
            whileTap={reduce ? undefined : { y: 1, x: 1, boxShadow: '2px 2px 0 #00b453' }}
            className="hidden border-2 border-black bg-[#101010] px-4 py-2 text-[13px] font-black uppercase tracking-[0.04em] text-white shadow-[4px_4px_0_#00b453] sm:inline-flex"
            style={display}
          >
            {t.nav.contact}
          </motion.a>
          <a href="#contact" className="grid h-10 w-10 place-items-center border-2 border-black bg-white sm:hidden" aria-label={t.nav.contact}>
            <Menu size={18} />
          </a>
        </nav>
      </header>

      <section id="top" className="relative min-h-[100svh] border-b-2 border-black pt-[66px]">
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={reduce ? false : { scale: 1.04 }}
          animate={reduce ? {} : { scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/block-yard/hero.jpg"
            alt="BLOCK YARD open lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[#fff8d7]/45" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,248,215,0.94)_0%,rgba(255,248,215,0.84)_38%,rgba(255,248,215,0.18)_74%)]" aria-hidden />

        <div className="relative mx-auto grid min-h-[calc(100svh-66px)] max-w-[1440px] items-end gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_420px] lg:py-14">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[860px]"
          >
            <Sticker>{t.hero.kicker}</Sticker>
            <h1
              className="mt-7 whitespace-pre-line text-[clamp(3.6rem,10.5vw,9.6rem)] font-black leading-[0.98]"
              style={display}
            >
              {t.hero.title}
            </h1>
            <p className="mt-7 max-w-[38rem] border-l-4 border-black pl-5 text-[18px] font-bold leading-relaxed sm:text-[21px]">
              {t.hero.lead}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#membership"
                whileHover={reduce ? undefined : { y: -5, x: -3, boxShadow: '10px 10px 0 #00b453' }}
                whileTap={reduce ? undefined : { y: 1, x: 1, boxShadow: '3px 3px 0 #00b453' }}
                className="inline-flex items-center gap-2 border-2 border-black bg-[#101010] px-6 py-4 text-[14px] font-black uppercase tracking-[0.04em] text-white shadow-[6px_6px_0_#00b453]"
                style={display}
              >
                {t.hero.cta}
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#spaces"
                whileHover={reduce ? undefined : { y: -5, x: -3, boxShadow: '10px 10px 0 #ffd84d' }}
                whileTap={reduce ? undefined : { y: 1, x: 1, boxShadow: '3px 3px 0 #ffd84d' }}
                className="inline-flex items-center gap-2 border-2 border-black bg-white px-6 py-4 text-[14px] font-black uppercase tracking-[0.04em] shadow-[6px_6px_0_#ffd84d]"
                style={display}
              >
                {t.hero.secondary}
                <ArrowUpRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          <FadeIn delay={0.1}>
            <motion.div
              whileHover={reduce ? undefined : { rotate: -0.4, y: -5, boxShadow: '12px 12px 0 #101010' }}
              className="border-2 border-black bg-white shadow-[8px_8px_0_#101010]"
            >
              {[
                [MapPin, t.hero.search.location, 'Seongsu / Hongdae'],
                [Users, t.hero.search.need, 'Desk / Room / Event'],
                [CalendarDays, t.hero.search.date, 'Today - This week'],
              ].map(([Icon, label, value]) => {
                const LucideIcon = Icon as typeof MapPin;
                return (
                  <motion.div
                    key={String(label)}
                    whileHover={reduce ? undefined : { backgroundColor: '#fff8d7' }}
                    className="grid grid-cols-[44px_1fr] border-b-2 border-black"
                  >
                    <div className="grid place-items-center border-r-2 border-black bg-[#00b453]">
                      <LucideIcon size={19} />
                    </div>
                    <div className="p-4">
                      <div className="text-[11px] font-black uppercase tracking-[0.12em]" style={display}>
                        {label as string}
                      </div>
                      <div className="mt-1 text-[17px] font-bold">{value as string}</div>
                    </div>
                  </motion.div>
                );
              })}
              <motion.button
                whileHover={reduce ? undefined : { backgroundColor: GREEN }}
                whileTap={reduce ? undefined : { scale: 0.985 }}
                className="flex w-full items-center justify-between bg-[#ffd84d] px-5 py-4 text-left text-[16px] font-black uppercase tracking-[0.04em]"
                style={display}
              >
                {t.hero.search.button}
                <Search size={20} />
              </motion.button>
            </motion.div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b-2 border-black bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Sticker tone={BLUE}>{t.intro.label}</Sticker>
            <h2 className="mt-6 max-w-[980px] text-[clamp(2.35rem,6.2vw,5.8rem)] font-black leading-[1.03]" style={display}>
              {t.intro.title}
            </h2>
          </div>
          <div>
            <p className="text-[18px] font-bold leading-relaxed">{t.intro.body}</p>
            <div className="mt-8 grid grid-cols-3 border-2 border-black">
              {t.intro.stats.map((s, i) => (
                <div key={s.label} className={`p-4 ${i > 0 ? 'border-l-2 border-black' : ''}`}>
                  <div className="text-[clamp(1.8rem,4vw,3.4rem)] font-black leading-none" style={display}>
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-black uppercase tracking-[0.08em] text-black/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="spaces" className="border-b-2 border-black px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle label={t.spaces.label} title={t.spaces.title} />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.spaces.rooms.map((room, i) => (
              <FadeIn key={room.name} delay={i * 0.05}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -8, rotate: i === 1 ? 0.35 : -0.35, boxShadow: '12px 12px 0 #101010' }}
                  className="group h-full border-2 border-black bg-white shadow-[6px_6px_0_#101010]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-black">
                    <Image src={room.image} alt={room.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 border-2 border-black bg-[#fff8d7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.08em] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105" style={display}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="text-[12px] font-black uppercase tracking-[0.12em] text-[#00b453]" style={display}>
                      {room.tag}
                    </div>
                    <h3 className="mt-2 text-[clamp(1.9rem,3.5vw,3rem)] font-black leading-[1.02]" style={display}>
                      {room.name}
                    </h3>
                    <p className="mt-4 text-[15px] font-bold leading-relaxed">{room.body}</p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="border-b-2 border-black bg-[#00b453] px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-[1440px]">
          <SectionTitle label={t.membership.label} title={t.membership.title} align="center" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {t.membership.plans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.05}>
                <motion.article
                  whileHover={reduce ? undefined : { y: -8, boxShadow: '12px 12px 0 #101010' }}
                  className="flex h-full flex-col border-2 border-black bg-[#fff8d7] shadow-[8px_8px_0_#101010]"
                >
                  <div className="border-b-2 border-black p-5">
                    <div className="text-[13px] font-black uppercase tracking-[0.1em]" style={display}>
                      {plan.name}
                    </div>
                    <div className="mt-4 break-keep text-[clamp(2.1rem,4.2vw,3.7rem)] font-black leading-[1.02]" style={display}>
                      {plan.price}
                    </div>
                    <p className="mt-3 text-[15px] font-bold">{plan.note}</p>
                  </div>
                  <ul className="grow">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-3 border-b-2 border-black px-5 py-4 text-[15px] font-bold transition-colors last:border-b-0 hover:bg-white">
                        <span className="h-3 w-3 shrink-0 rounded-full border-2 border-black bg-[#ffd84d]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="calendar" className="grid border-b-2 border-black lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b-2 border-black bg-white px-4 py-16 sm:px-6 lg:border-b-0 lg:border-r-2 lg:py-24">
          <div className="mx-auto max-w-[640px] lg:ml-auto lg:mr-12">
            <SectionTitle label={t.calendar.label} title={t.calendar.title} />
            <p className="mt-7 text-[18px] font-bold leading-relaxed">{t.calendar.body}</p>
            <motion.div
              whileHover={reduce ? undefined : { rotate: 0.5, y: -5, boxShadow: '12px 12px 0 #ffd84d' }}
              className="relative mt-10 aspect-[4/3] overflow-hidden border-2 border-black shadow-[8px_8px_0_#ffd84d]"
            >
              <Image src="/images/block-yard/event.jpg" alt="BLOCK YARD evening salon" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </div>
        </div>
        <div className="bg-[#e6f2f7] px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-[760px] lg:ml-12">
            {t.calendar.events.map((event, i) => (
              <FadeIn key={event.title} delay={i * 0.05}>
                <motion.article
                  whileHover={reduce ? undefined : { x: -8, backgroundColor: '#ffffff' }}
                  className="group grid grid-cols-[6rem_1fr] border-2 border-b-0 border-black bg-[#fff8d7] last:border-b-2"
                >
                  <div className="grid place-items-center border-r-2 border-black bg-[#ffd84d] p-4 text-center text-[24px] font-black transition-colors group-hover:bg-[#00b453]" style={display}>
                    {event.date}
                  </div>
                  <div className="p-5">
                    <h3 className="text-[clamp(1.65rem,3.5vw,2.7rem)] font-black leading-[1.04]" style={display}>
                      {event.title}
                    </h3>
                    <p className="mt-2 text-[13px] font-black uppercase tracking-[0.08em] text-black/60">{event.meta}</p>
                  </div>
                </motion.article>
              </FadeIn>
            ))}
            <FadeIn delay={0.18}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6, rotate: -0.35, boxShadow: '12px 12px 0 #101010' }}
                className="mt-8 grid overflow-hidden border-2 border-black bg-[#101010] text-white shadow-[8px_8px_0_#00b453] sm:grid-cols-[0.65fr_1fr]"
              >
                <div className="flex min-h-[220px] flex-col justify-between border-b-2 border-black bg-[#00b453] p-5 text-black sm:border-b-0 sm:border-r-2">
                  <div className="text-[12px] font-black uppercase tracking-[0.14em]" style={display}>
                    {t.calendar.notice.tag}
                  </div>
                  <div className="text-[clamp(3rem,8vw,5.8rem)] font-black leading-none tracking-[-0.03em]" style={display}>
                    19:00
                  </div>
                </div>
                <div className="flex min-h-[220px] flex-col justify-between p-5">
                  <div>
                    <h3 className="text-[clamp(1.5rem,3vw,2.4rem)] font-black leading-[1.04]" style={display}>
                      {t.calendar.notice.title}
                    </h3>
                    <p className="mt-4 text-[15px] font-bold leading-relaxed text-white/72">
                      {t.calendar.notice.body}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-fit items-center gap-2 border-2 border-white bg-[#ffd84d] px-4 py-3 text-[13px] font-black uppercase tracking-[0.05em] text-black transition-transform hover:-translate-y-1"
                    style={display}
                  >
                    {t.calendar.notice.cta}
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#101010] px-4 py-14 text-white sm:px-6">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[clamp(2.3rem,5.4vw,5rem)] font-black leading-[1.02]" style={display}>
              BLOCK YARD
            </div>
            <p className="mt-5 max-w-[36rem] text-[18px] font-bold leading-relaxed text-white/75">{t.footer.line}</p>
          </div>
          <div className="text-left md:text-right">
            <a href={`mailto:${t.footer.email}`} className="text-[24px] font-black underline decoration-[#00b453] decoration-4 underline-offset-8" style={display}>
              {t.footer.email}
            </a>
            <p className="mt-5 text-[14px] font-bold uppercase tracking-[0.08em] text-white/55">{t.footer.address}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
