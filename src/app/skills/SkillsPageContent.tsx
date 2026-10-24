'use client';

import React from 'react';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { useLanguage } from '@/context/LanguageContext';

export function SkillsPageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navSkills}
        </h1>
        <p className="text-xs text-ink-secondary sm:text-sm">
          {locale === 'fa'
            ? 'تکنولوژی‌ها و ابزارهای اصلی مورد استفاده در پروژه‌های عملیاتی.'
            : 'Core technologies and tools used across production FinTech & SaaS systems.'}
        </p>
      </header>

      <SkillsSection />
    </div>
  );
}
