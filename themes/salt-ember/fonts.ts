import { Cormorant, Inter } from 'next/font/google';

export const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--se-serif',
});

export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--se-sans',
});
