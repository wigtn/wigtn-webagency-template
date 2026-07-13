import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';

export const cormorant = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--mn-serif',
});

export const interTight = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--mn-sans',
});
