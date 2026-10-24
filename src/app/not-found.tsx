'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
  const { locale, ui } = useLanguage();

  return (
    <div className="flex h-full flex-col items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-4 rounded-2xl border border-line bg-elevated p-6">
        <div className="text-3xl font-bold text-ink">404</div>
        <h1 className="text-base font-semibold text-ink">
          {locale === 'fa' ? 'صفحه مورد نظر پیدا نشد' : 'Page not found'}
        </h1>
        <p className="text-xs leading-relaxed text-ink-secondary">
          {locale === 'fa'
            ? 'می‌توانید به صفحه اصلی گفت‌وگو برگردید و هر سؤالی درباره رزومه و پروژه‌های من دارید بپرسید.'
            : 'Return to the conversational assistant to explore projects, experience, and skills.'}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-xs font-medium text-canvas hover:opacity-90"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>{ui.backToChat}</span>
        </Link>
      </div>
    </div>
  );
}
