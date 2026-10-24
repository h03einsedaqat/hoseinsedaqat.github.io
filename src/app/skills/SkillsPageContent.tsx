'use client';

import React from 'react';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { useLanguage } from '@/context/LanguageContext';

export function SkillsPageContent() {
  const { locale, ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navSkills}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
          {locale === 'fa'
            ? 'مهارت‌های فنی من بر اساس کاربرد واقعی در پروژه‌ها و سامانه‌های تولیدشده دسته‌بندی شده‌اند — بدون درصدهای فرضی و با ارجاع مستقیم به مخازن.'
            : 'Grouped by engineering discipline and linked directly to real repositories where each technology is applied—free of arbitrary percentage bars.'}
        </p>
      </header>

      <SkillsSection />
    </div>
  );
}
