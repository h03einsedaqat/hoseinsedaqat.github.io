'use client';

import React from 'react';
import { TechIcon } from '@/components/resume/TechIcon';
import { useLanguage } from '@/context/LanguageContext';
import { skillCategories } from '@/data/resume';
import { cn, tText } from '@/lib/utils';

interface SkillsSectionProps {
  categoryIds?: string[];
  compact?: boolean;
}

export function SkillsSection({ categoryIds, compact = false }: SkillsSectionProps) {
  const { locale } = useLanguage();

  const categories = categoryIds?.length
    ? skillCategories.filter((c) => categoryIds.includes(c.id))
    : skillCategories;

  return (
    <div className={cn('grid grid-cols-1 gap-3.5', !compact && 'sm:grid-cols-2 lg:grid-cols-3')}>
      {categories.map((cat) => (
        <section
          key={cat.id}
          className={cn(
            'rounded-2xl border border-line bg-elevated',
            compact ? 'p-4' : 'p-5'
          )}
        >
          <h3 className="text-sm font-semibold text-ink">
            {tText(cat.title, locale)}
          </h3>
          <p className="mt-0.5 text-xs text-ink-muted">
            {tText(cat.description, locale)}
          </p>

          <div className="mt-3.5 flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill.name}
                dir="ltr"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-line-strong"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-elevated">
                  <TechIcon name={skill.name} className="h-3.5 w-3.5" />
                </span>
                <span>{skill.name}</span>
              </span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
