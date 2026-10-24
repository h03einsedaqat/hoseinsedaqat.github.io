'use client';

import React from 'react';
import { ContactSection } from '@/components/resume/ContactSection';
import { useLanguage } from '@/context/LanguageContext';

export function ContactPageContent() {
  const { ui } = useLanguage();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.contactTitle}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
          {ui.contactSubtitle}
        </p>
      </header>

      <ContactSection />
    </div>
  );
}
