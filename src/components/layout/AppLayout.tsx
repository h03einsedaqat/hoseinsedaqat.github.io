'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChatHeader } from '@/components/layout/ChatHeader';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopProgressBar } from '@/components/layout/TopProgressBar';
import { useLanguage } from '@/context/LanguageContext';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();

  // Allow Ctrl+K / Cmd+K from secondary pages to jump straight to Chat composer suggestions
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k' && pathname !== '/') {
        e.preventDefault();
        window.sessionStorage.setItem('hs-open-composer-k', '1');
        window.dispatchEvent(new Event('hs:route-start'));
        router.push('/');
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [pathname, router]);

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden bg-canvas text-ink print:block print:h-auto print:overflow-visible print:bg-white print:text-black">
      <TopProgressBar />
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
