import type { Locale } from '@/i18n/routing';

export type Dict = {
  nav: { work: string; services: string; studio: string; contact: string };
  hero: {
    kicker: string;
    line1: string;
    accent: string;
    line2: string;
    intro: string;
    marquee: string[];
  };
  work: {
    label: string;
    heading: string;
    projects: {
      name: string;
      category: string;
      year: string;
      desc: string;
      gradient: string;
      image: string;
    }[];
  };
  services: {
    label: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  process: {
    label: string;
    heading: string;
    steps: { title: string; body: string }[];
  };
  studio: {
    label: string;
    heading: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  clients: { label: string; heading: string; names: string[] };
  contact: {
    label: string;
    line: string;
    email: string;
    note: string;
  };
  footer: { tagline: string; socials: string[]; rights: string; credit: string };
};

const en: Dict = {
  nav: { work: 'Work', services: 'Services', studio: 'Studio', contact: 'Contact' },
  hero: {
    kicker: 'Creative studio · Est. 2018 · Seoul',
    line1: 'MADE IN THE',
    accent: 'NOON',
    line2: 'LIGHT',
    intro:
      'A four-person design studio in Seoul. We make brands, websites, and motion — and we build the sites ourselves.',
    marquee: ['Brand', 'Web', 'Motion', 'Art Direction', 'Type', 'Systems'],
  },
  work: {
    label: 'Selected Work',
    heading: 'Things we made',
    projects: [
      {
        name: 'HALFDAY',
        category: 'Brand Identity',
        year: '2025',
        desc: 'Wordmark, packaging, and a typeface for a coffee roaster.',
        gradient: 'linear-gradient(135deg, #2b4bff 0%, #7a00ff 100%)',
        image: '/images/studio-noon/w1.jpg',
      },
      {
        name: 'MERIDIAN',
        category: 'Web · Motion',
        year: '2025',
        desc: 'A marketing site and a 40-second launch film for a mapping app.',
        gradient: 'linear-gradient(135deg, #ff5a1f 0%, #ffd000 100%)',
        image: '/images/studio-noon/w2.jpg',
      },
      {
        name: 'OBSCURA',
        category: 'Art Direction',
        year: '2024',
        desc: 'Sleeve art and a poster series for a small electronic label.',
        gradient: 'linear-gradient(135deg, #00e5ff 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w3.jpg',
      },
      {
        name: 'FIELD NOTES',
        category: 'Brand · Web',
        year: '2024',
        desc: 'A print quarterly and the web reader that goes with it.',
        gradient: 'linear-gradient(135deg, #d6ff2b 0%, #00c46a 100%)',
        image: '/images/studio-noon/w4.jpg',
      },
      {
        name: 'PALE BLUE',
        category: 'Motion',
        year: '2023',
        desc: 'Opening titles and lower-thirds for a climate documentary.',
        gradient: 'linear-gradient(135deg, #ff2b9d 0%, #2b4bff 100%)',
        image: '/images/studio-noon/w5.jpg',
      },
      {
        name: 'RADIO NOON',
        category: 'Brand · Sound',
        year: '2023',
        desc: 'Our own monthly radio show — name, artwork, and jingle.',
        gradient: 'linear-gradient(135deg, #f2f2f2 0%, #9aa0ff 100%)',
        image: '/images/studio-noon/w6.jpg',
      },
    ],
  },
  services: {
    label: 'What we do',
    heading: 'Services',
    items: [
      { title: 'Brand Identity', body: 'Names, logos, and type. The rules that keep them from falling apart.' },
      { title: 'Web Design & Dev', body: 'We design the site and write the code. No handoff, no excuses.' },
      { title: 'Motion', body: 'Launch films, loops, and the small animations that make an interface feel alive.' },
      { title: 'Art Direction', body: 'Photo shoots and campaigns — we decide what it looks like and stand by it.' },
    ],
  },
  process: {
    label: 'How we work',
    heading: 'Process',
    steps: [
      { title: 'Talk', body: 'A long first conversation. We ask what the project is actually for.' },
      { title: 'Sketch', body: 'Rough, fast, and plenty of dead ends until one idea holds up.' },
      { title: 'Build', body: 'Designers and developers at the same desk. Fewer surprises that way.' },
      { title: 'Ship', body: 'We launch it, watch how it does, and fix what needs fixing.' },
    ],
  },
  studio: {
    label: 'About',
    heading: 'Four people, one room',
    body:
      'STUDIO NOON started in 2018 above a bakery in Mapo-gu. We take on maybe eight projects a year — few enough that the people you meet are the people who do the work. No account managers, no back office.',
    stats: [
      { value: '2018', label: 'Founded' },
      { value: '90+', label: 'Projects' },
      { value: '11', label: 'Awards' },
      { value: '4', label: 'Humans' },
    ],
  },
  clients: {
    label: "People we've worked with",
    heading: 'Clients',
    names: [
      'Northbound',
      'Café Halfday',
      'Meridian Labs',
      'Obscura Records',
      'Field Notes',
      'Pale Blue',
      'Atlas Type',
      'Seoul Design Week',
      'Loop Studio',
      'Kindred',
      'Overpass',
      'Daylight Co.',
    ],
  },
  contact: {
    label: 'Contact',
    line: 'Got something in mind?',
    email: 'hello@studionoon.kr',
    note: 'We read every email. Tell us what you are building and when you need it.',
  },
  footer: {
    tagline: 'A design studio in Seoul. Coffee is on us if you visit.',
    socials: ['Instagram', 'Are.na', 'Behance', 'LinkedIn'],
    rights: '© 2026 STUDIO NOON. All rights reserved.',
    credit: 'Site by WIGTN',
  },
};

export function getDict(_locale: Locale): Dict {
  void _locale;
  return en;
}
