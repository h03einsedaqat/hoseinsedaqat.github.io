'use client';

import React from 'react';
import {
  Briefcase,
  CheckCircle2,
  Cpu,
  FolderGit2,
  Layers,
  Mail,
  Rocket,
  Sparkles,
  User,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { recommendationPrompts } from '@/data/recommendations';
import { tText } from '@/lib/utils';
import type { RecommendationPrompt } from '@/types/portfolio';

function GitHubGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function renderIcon(iconName: RecommendationPrompt['iconName']) {
  const cls = 'h-4 w-4 shrink-0 text-ink-muted group-hover:text-accent transition-colors';
  switch (iconName) {
    case 'user':
      return <User className={cls} />;
    case 'folder-git':
      return <FolderGit2 className={cls} />;
    case 'briefcase':
      return <Briefcase className={cls} />;
    case 'cpu':
      return <Cpu className={cls} />;
    case 'layers':
      return <Layers className={cls} />;
    case 'rocket':
      return <Rocket className={cls} />;
    case 'check-circle':
      return <CheckCircle2 className={cls} />;
    case 'github':
      return <GitHubGlyph className={cls} />;
    case 'sparkles':
      return <Sparkles className={cls} />;
    case 'mail':
      return <Mail className={cls} />;
  }
}

interface RecommendationCardsProps {
  onSelectPrompt: (promptText: string) => void;
  disabled?: boolean;
}

export function RecommendationCards({
  onSelectPrompt,
  disabled = false,
}: RecommendationCardsProps) {
  const { locale, ui } = useLanguage();

  return (
    <section aria-label={ui.suggestedPromptsHeading} className="w-full">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {recommendationPrompts.map((item) => {
          const promptString = tText(item.prompt, locale);
          return (
            <button
              key={item.id}
              type="button"
              disabled={disabled}
              onClick={() => onSelectPrompt(promptString)}
              className="group flex items-start gap-3 rounded-2xl border border-line bg-elevated/80 px-3.5 py-3 text-start transition-all hover:border-line-strong hover:bg-hover disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <span className="mt-0.5">{renderIcon(item.iconName)}</span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-ink">
                  {promptString}
                </span>
                <span className="mt-0.5 block truncate text-xs text-ink-muted">
                  {tText(item.hint, locale)}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
