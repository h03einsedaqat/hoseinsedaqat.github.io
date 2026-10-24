'use client';

import React from 'react';
import { HSLogo } from '@/components/brand/HSLogo';
import { RecommendationCards } from '@/components/chat/RecommendationCards';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/resume';
import { tText } from '@/lib/utils';

interface WelcomeScreenProps {
  onSelectPrompt: (prompt: string) => void;
  disabled?: boolean;
}

export function WelcomeScreen({ onSelectPrompt, disabled = false }: WelcomeScreenProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6">
        {/* Centered Brand & Greeting */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center gap-3">
            <img
              src={profileData.avatarUrl}
              alt={tText(profileData.name, locale)}
              className="h-12 w-12 rounded-2xl border border-line-strong object-cover shadow-subtle"
            />
            <HSLogo size="lg" />
          </div>

          <h1 className="max-w-2xl text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl md:text-[26px]">
            {tText(profileData.welcomeGreeting, locale)}
          </h1>

          <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-ink-secondary sm:text-[15px]">
            {tText(profileData.welcomeSubtitle, locale)}
          </p>
        </div>

        {/* 10 Interactive Starter Recommendations */}
        <RecommendationCards onSelectPrompt={onSelectPrompt} disabled={disabled} />
      </div>
    </div>
  );
}
