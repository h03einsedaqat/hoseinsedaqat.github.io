'use client';

import React, { createContext, useCallback, useContext, useEffect } from 'react';
import { uiTranslations } from '@/data/translations';
import type { Locale } from '@/types/portfolio';

type UIDictionary = (typeof uiTranslations)['en'];

interface LanguageContextValue {
  locale: Locale;
  dir: 'ltr';
  isRTL: false;
  ui: UIDictionary;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.removeItem('hs-locale');
      } catch {
        // Ignore storage errors
      }
    }
  }, []);

  const noop = useCallback(() => {}, []);

  return (
    <LanguageContext.Provider
      value={{
        locale: 'en',
        dir: 'ltr',
        isRTL: false,
        ui: uiTranslations.en,
        setLocale: noop,
        toggleLocale: noop,
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
