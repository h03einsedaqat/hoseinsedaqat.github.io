'use client';

import React from 'react';
import { ChatHeader } from '@/components/layout/ChatHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { useLanguage } from '@/context/LanguageContext';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-canvas text-ink print:block print:h-auto print:overflow-visible print:bg-white print:text-black">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-line-strong focus:bg-elevated focus:px-3.5 focus:py-2 focus:text-xs focus:font-semibold focus:text-ink focus:shadow-lg"
      >
        {locale === 'fa' ? 'پرش به محتوای اصلی' : 'Skip to main content'}
      </a>
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden print:block print:overflow-visible">
        <ChatHeader />
        <main
          id="main-content"
          className="relative flex min-h-0 flex-1 flex-col overflow-hidden print:block print:overflow-visible"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
