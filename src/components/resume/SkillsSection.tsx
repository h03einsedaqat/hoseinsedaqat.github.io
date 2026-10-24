'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getProjectBySlug } from '@/data/projects';
import { skillCategories } from '@/data/resume';
import { cn, tText } from '@/lib/utils';

interface SkillsSectionProps {
  categoryIds?: string[];
  compact?: boolean;
}

export function SkillsSection({ categoryIds, compact = false }: SkillsSectionProps) {
  const { locale, ui } = useLanguage();

  const categories = categoryIds?.length
    ? skillCategories.filter((c) => categoryIds.includes(c.id))
    : skillCategories;

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4',
        !compact && 'md:grid-cols-2'
      )}
    >
      {categories.map((cat) => (
        <section
          key={cat.id}
          className={cn(
            'rounded-2xl border border-line bg-elevated',
            compact ? 'p-4' : 'p-5'
          )}
        >
          <h3 className="text-base font-semibold text-ink">
            {tText(cat.title, locale)}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {tText(cat.description, locale)}
          </p>

          <div className="mt-4 space-y-3">
            {cat.skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-line bg-canvas/60 p-3"
              >
                <div dir="ltr" className="text-start text-sm font-semibold text-ink">
                  {skill.name}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
                  {tText(skill.context, locale)}
                </p>

                {skill.evidenceSlugs && skill.evidenceSlugs.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] text-ink-muted">
                      {ui.evidenceProjectsLabel}
                    </span>
                    {skill.evidenceSlugs.map((slug) => {
                      const proj = getProjectBySlug(slug);
                      if (!proj) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/projects/${slug}`}
                          className="inline-flex items-center gap-0.5 rounded-md border border-line bg-elevated px-2 py-0.5 text-[11px] font-medium text-ink transition-colors hover:border-line-strong hover:bg-hover"
                        >
                          <span>{proj.name.en}</span>
                          <ArrowUpRight className="h-2.5 w-2.5 text-ink-muted" />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
