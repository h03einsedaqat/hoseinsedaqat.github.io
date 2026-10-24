'use client';

import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  compact?: boolean;
  className?: string;
}

export function LanguageSwitcher({ compact = false, className }: LanguageSwitcherProps) {
  const { locale, setLocale, ui } = useLanguage();

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => setLocale(locale === 'en' ? 'fa' : 'en')}
        title={`${ui.languageLabel}: ${locale === 'en' ? 'فارسی' : 'English'}`}
        aria-label={`${ui.languageLabel}: ${locale === 'en' ? 'فارسی' : 'English'}`}
        className={cn(
          'inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-medium text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
          className
        )}
      >
        {locale === 'en' ? 'FA' : 'EN'}
      </button>
    );
  }

  return (
    <div
      role="group"
      aria-label={ui.languageLabel}
      className={cn(
        'inline-flex items-center gap-1 rounded-lg border border-line bg-elevated p-0.5 text-xs',
        className
      )}
    >
      <Languages className="ms-1.5 h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLocale('en')}
        aria-pressed={locale === 'en'}
        className={cn(
          'rounded-md px-2 py-1 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
          locale === 'en'
            ? 'bg-ink text-canvas'
            : 'text-ink-secondary hover:text-ink'
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('fa')}
        aria-pressed={locale === 'fa'}
        className={cn(
          'rounded-md px-2 py-1 font-fa font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
          locale === 'fa'
            ? 'bg-ink text-canvas'
            : 'text-ink-secondary hover:text-ink'
        )}
      >
        فارسی
      </button>
    </div>
  );
}
