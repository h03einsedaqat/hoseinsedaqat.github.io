'use client';

import React from 'react';
import { EducationSection } from '@/components/resume/EducationSection';
import { useLanguage } from '@/context/LanguageContext';

export function EducationPageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navEducation}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
          {locale === 'fa'
            ? 'تحصیلات دانشگاهی، مقالات منتشرشده در حوزه مهندسی نرم‌افزار و لینک بررسی مستقیم مدارک و گواهینامه‌ها در لینکدین.'
            : 'Academic foundation, published engineering articles, and direct verification links for professional credentials.'}
        </p>
      </header>

      <EducationSection />
    </div>
  );
}
