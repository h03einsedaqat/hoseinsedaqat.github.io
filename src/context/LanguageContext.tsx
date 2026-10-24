'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { uiTranslations } from '@/data/translations';
import { loadStoredLocale, saveStoredLocale } from '@/lib/storage';
import type { Locale } from '@/types/portfolio';

type UIDictionary = (typeof uiTranslations)['en'];

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  isRTL: boolean;
  ui: UIDictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function applyLocaleToDocument(locale: Locale) {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const dir = locale === 'fa' ? 'rtl' : 'ltr';
  root.lang = locale;
  root.dir = dir;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    const stored = loadStoredLocale();
    if (stored) {
      setLocaleState(stored);
      applyLocaleToDocument(stored);
    } else {
      applyLocaleToDocument('en');
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    saveStoredLocale(next);
    applyLocaleToDocument(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => {
      const next: Locale = prev === 'en' ? 'fa' : 'en';
      saveStoredLocale(next);
      applyLocaleToDocument(next);
      return next;
    });
  }, []);

  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dir,
        isRTL: dir === 'rtl',
        ui: uiTranslations[locale],
        setLocale,
        toggleLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return ctx;
}
