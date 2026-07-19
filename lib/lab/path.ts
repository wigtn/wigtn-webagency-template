import { routing } from '@/i18n/routing';

/**
 * 서버 액션의 revalidatePath 에 넘길 실제 경로.
 * localePrefix 가 'as-needed' 라 기본 로케일(ko)만 접두사가 없다.
 */
export function labPath(locale: string, suffix: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${prefix}${suffix}`;
}
