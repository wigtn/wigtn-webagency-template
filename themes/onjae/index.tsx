import type { Locale } from '@/i18n/routing';
import { notoSerifKr, inter } from './fonts';
import { getContent } from './content';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import {
  Philosophy,
  House,
  Privacy,
  Amenities,
  Experiences,
  Location,
  Reservation,
  Footer,
} from './sections/Sections';

export default function Onjae({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <div
      className={`${notoSerifKr.variable} ${inter.variable} min-h-screen bg-[#efe9df] text-[#3a352c] antialiased`}
      style={{ fontFamily: 'var(--onjae-sans)' }}
    >
      <Nav nav={c.nav} />
      <main>
        <Hero hero={c.hero} />
        <Philosophy data={c.philosophy} />
        <House data={c.house} />
        <Privacy data={c.privacy} />
        <Amenities data={c.amenities} />
        <Experiences data={c.experiences} />
        <Location data={c.location} />
        <Reservation data={c.reservation} />
      </main>
      <Footer data={c.footer} />
    </div>
  );
}
