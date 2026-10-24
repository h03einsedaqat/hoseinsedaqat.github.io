'use client';

import React from 'react';
import { ExperienceTimeline } from '@/components/resume/ExperienceTimeline';
import { useLanguage } from '@/context/LanguageContext';

export function ExperiencePageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navExperience}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
          {locale === 'fa'
            ? 'سیر تجربیات حرفه‌ای من از توسعه رابط‌های کاربری وب و پروژه‌های فریلنس تا مهندسی فرانت‌اند در حوزه فین‌تک (پی‌استار) و معماری سامانه‌های Full-Stack.'
            : 'Verified career timeline progressing from client web engineering into FinTech payment interfaces at Paystar and end-to-end full-stack product architecture.'}
        </p>
      </header>

      <ExperienceTimeline />
    </div>
  );
}
