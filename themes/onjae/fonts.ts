import { Noto_Serif_KR, Inter } from 'next/font/google';

export const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--onjae-serif',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--onjae-sans',
});
