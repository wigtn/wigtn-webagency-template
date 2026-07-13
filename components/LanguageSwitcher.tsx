'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';
import { LOCALE_LABELS } from '@/lib/constants';
import { useTransition } from 'react';

type Props = { variant?: 'light' | 'dark'; locales?: readonly string[] };

export default function LanguageSwitcher({ variant = 'light', locales }: Props) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // 표시할 로케일 (미지정 시 전체). 메인 쇼케이스는 ['ko','en']만 노출.
  const shown = locales ?? routing.locales;

  const onSelect = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next as 'en' });
    });
  };

  const activeCls =
    variant === 'dark' ? 'text-sand-50 font-medium' : 'text-ink font-medium';
  const idleCls =
    variant === 'dark'
      ? 'text-sand-50/60 hover:text-sand-50'
      : 'text-ink-mute hover:text-ink';
  const divider =
    variant === 'dark' ? 'text-sand-50/30' : 'text-ink-mute/40';

  return (
    <div className="flex items-center gap-2.5 text-xs">
      {shown.map((l, idx) => (
        <div key={l} className="flex items-center gap-2.5">
          <button
            onClick={() => onSelect(l)}
            disabled={isPending}
            className={`transition-colors uppercase tracking-wider ${
              locale === l ? activeCls : idleCls
            }`}
          >
            {LOCALE_LABELS[l]}
          </button>
          {idx < shown.length - 1 && <span className={divider}>·</span>}
        </div>
      ))}
    </div>
  );
}
