'use client';

import React from 'react';
import { ExperienceTimeline } from '@/components/resume/ExperienceTimeline';
import { useLanguage } from '@/context/LanguageContext';

export function ExperiencePageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navExperience}
        </h1>
        <p className="text-xs text-ink-secondary sm:text-sm">
          {locale === 'fa'
            ? '۵ سال تجربه حرفه‌ای در توسعه وب، فین‌تک و محصولات SaaS.'
            : '5 years of experience across FinTech, SaaS, and full-stack web engineering.'}
        </p>
      </header>

      <ExperienceTimeline />
    </div>
  );
}
