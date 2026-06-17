import type { Locale } from '@/i18n/routing';

import enFallback from '@/content/en.json';
import koFallback from '@/content/ko.json';
import jaFallback from '@/content/ja.json';
import zhFallback from '@/content/zh.json';

export const SITE_CONTENT_TAG = 'site-content';

type Messages = Record<string, unknown>;

const CONTENT: Record<Locale, Messages> = {
  en: enFallback as unknown as Messages,
  ko: koFallback as unknown as Messages,
  ja: jaFallback as unknown as Messages,
  zh: zhFallback as unknown as Messages,
};

function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

export async function getMessagesForLocale(locale: Locale): Promise<Messages> {
  // Content ships as static JSON. (The original CMS/Supabase overlay has been
  // removed for this public template build.)
  return deepClone(CONTENT[locale]);
}
