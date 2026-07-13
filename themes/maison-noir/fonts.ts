import { Cormorant_Garamond, Inter_Tight } from 'next/font/google';

export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--mn-serif',
});

export const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--mn-sans',
});
