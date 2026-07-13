import type { Locale } from '@/i18n/routing';
import { cormorant, interTight } from './fonts';
import { getContent } from './content';
import Nav from './sections/Nav';
import Hero from './sections/Hero';
import {
  Signature,
  Rooms,
  Dining,
  Spa,
  Events,
  Offers,
  Gallery,
  Access,
  Footer,
} from './sections/Sections';

export default function MaisonNoir({ locale }: { locale: Locale }) {
  const c = getContent(locale);

  return (
    <div
      className={`${cormorant.variable} ${interTight.variable} min-h-screen bg-[#0e0e0f] text-[#f4efe6] antialiased`}
      style={{ fontFamily: 'var(--mn-sans)' }}
    >
      <Nav nav={c.nav} />
      <main>
        <Hero hero={c.hero} />
        <Signature data={c.signature} />
        <Rooms data={c.rooms} />
        <Dining data={c.dining} />
        <Spa data={c.spa} />
        <Events data={c.events} />
        <Offers data={c.offers} />
        <Gallery data={c.gallery} />
        <Access data={c.access} />
      </main>
      <Footer data={c.footer} />
    </div>
  );
}
