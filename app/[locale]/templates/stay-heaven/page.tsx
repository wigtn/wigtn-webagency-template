import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { BUSINESS, SITE_URL } from '@/lib/constants';
import Nav from '@/components/Nav';
import FloatingCTA from '@/components/FloatingCTA';
import DemoBar from '@/components/showcase/DemoBar';
import Hero from '../../sections/Hero';
import About from '../../sections/About';
import Rooms from '../../sections/Rooms';
import Facilities from '../../sections/Facilities';
import LongStay from '../../sections/LongStay';
import Location from '../../sections/Location';
import GuestNotes from '../../sections/GuestNotes';
import Faq from '../../sections/Faq';
import Booking from '../../sections/Booking';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });
  return { title: t('title'), description: t('description') };
}

export default async function StayHeavenTemplate({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const lodgingJsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LodgingBusiness', 'Hotel'],
    name: BUSINESS.name,
    description: BUSINESS.name,
    url: `${SITE_URL}/templates/stay-heaven`,
    priceRange: BUSINESS.priceRange,
    checkinTime: BUSINESS.checkinTime,
    checkoutTime: BUSINESS.checkoutTime,
    numberOfRooms: BUSINESS.numberOfRooms,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.addressLocality,
      addressCountry: BUSINESS.addressCountry,
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingJsonLd) }}
      />
      <DemoBar slug="stay-heaven" />
      <Nav />
      <Hero />
      <About />
      <Rooms />
      <Facilities />
      <LongStay />
      <Location />
      <GuestNotes />
      <Faq />
      <Booking />
      <FloatingCTA />
    </main>
  );
}
