import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';
import { getMessagesForLocale } from '@/lib/content';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as never)) {
    locale = routing.defaultLocale;
  }

  const messages = await getMessagesForLocale(locale as Locale);

  return { locale, messages };
});
