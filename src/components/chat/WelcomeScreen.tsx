'use client';

import React, { useEffect, useState } from 'react';
import { RecommendationCards } from '@/components/chat/RecommendationCards';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/resume';
import { tText } from '@/lib/utils';

interface WelcomeScreenProps {
  onSelectPrompt: (prompt: string) => void;
  disabled?: boolean;
}

function TypewriterGreeting({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'resting'>(
    'typing'
  );

  // Reset cleanly whenever language/text changes
  useEffect(() => {
    setDisplayed('');
    setPhase('typing');
  }, [text]);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setDisplayed(text);
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timer = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, 55);
      } else {
        timer = setTimeout(() => {
          setPhase('pausing');
        }, 2200);
      }
    } else if (phase === 'pausing') {
      setPhase('deleting');
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timer = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length - 1));
        }, 28);
      } else {
        timer = setTimeout(() => {
          setPhase('resting');
        }, 420);
      }
    } else if (phase === 'resting') {
      setPhase('typing');
    }

    return () => clearTimeout(timer);
  }, [displayed, phase, text]);

  return (
    <h1 className="flex min-h-[3.25rem] max-w-xl items-center justify-center text-lg font-semibold leading-snug tracking-tight text-ink sm:min-h-[2.5rem] sm:text-xl md:text-2xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        <span>{displayed}</span>
        <span className="ms-0.5 inline-block h-[1.08em] w-[2px] shrink-0 rounded-full bg-accent animate-cursor-blink" />
      </span>
    </h1>
  );
}

export function WelcomeScreen({ onSelectPrompt, disabled = false }: WelcomeScreenProps) {
  const { locale } = useLanguage();
  const fullGreeting = tText(profileData.welcomeGreeting, locale);

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6">
        {/* Centered Portrait & Animated Single-Line Greeting */}
        <div className="flex flex-col items-center text-center">
          <img
            src={profileData.avatarUrl}
            alt="Hosein Sedaqat (حسین صداقت) — Full-Stack Developer"
            className="mb-3.5 h-16 w-16 rounded-2xl border border-line-strong object-cover object-top shadow-subtle"
          />

          <TypewriterGreeting text={fullGreeting} />
        </div>

        {/* 10 Interactive Starter Recommendations */}
        <RecommendationCards onSelectPrompt={onSelectPrompt} disabled={disabled} />
      </div>
    </div>
  );
}
