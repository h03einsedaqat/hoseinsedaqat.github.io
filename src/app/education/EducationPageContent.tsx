'use client';

import React from 'react';
import { EducationSection } from '@/components/resume/EducationSection';
import { useLanguage } from '@/context/LanguageContext';

export function EducationPageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navEducation}
        </h1>
        <p className="text-xs text-ink-secondary sm:text-sm">
          {locale === 'fa'
            ? 'تحصیلات دانشگاهی و گواهینامه‌های تخصصی.'
            : 'University degree and verified licenses & certifications.'}
        </p>
      </header>

      <EducationSection />
    </div>
  );
}
