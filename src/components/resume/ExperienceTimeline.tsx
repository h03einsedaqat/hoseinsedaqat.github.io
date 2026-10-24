'use client';

import React from 'react';
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';
import { TechIcon } from '@/components/resume/TechIcon';
import { useLanguage } from '@/context/LanguageContext';
import { experienceItems } from '@/data/resume';
import { cn, tList, tText } from '@/lib/utils';

interface ExperienceTimelineProps {
  ids?: string[];
  compact?: boolean;
}

export function ExperienceTimeline({ ids, compact = false }: ExperienceTimelineProps) {
  const { locale } = useLanguage();

  const items = ids?.length
    ? experienceItems.filter((item) => ids.includes(item.id))
    : experienceItems;

  return (
    <div className={cn('space-y-3', !compact && 'space-y-4')}>
      {items.map((exp) => (
        <article
          key={exp.id}
          className={cn(
            'relative rounded-2xl border border-line bg-elevated transition-colors hover:border-line-strong',
            compact ? 'p-4' : 'p-5'
          )}
        >
          {/* Role, Company & Period */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-ink">
                {tText(exp.role, locale)}
              </h3>
              <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-secondary">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-ink hover:underline"
                  >
                    <Briefcase className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                    <span>{tText(exp.company, locale)}</span>
                    <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1 font-medium text-ink">
                    <Briefcase className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                    <span>{tText(exp.company, locale)}</span>
                  </span>
                )}
                <span className="text-ink-muted">·</span>
                <span className="text-xs text-ink-muted">
                  {tText(exp.employmentType, locale)}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted sm:flex-col sm:items-end sm:gap-1">
              <span className="inline-flex items-center gap-1 rounded-full border border-line bg-canvas px-2.5 py-0.5 font-medium text-ink-secondary">
                <Calendar className="h-3 w-3" aria-hidden="true" />
                <span>{tText(exp.period, locale)}</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" aria-hidden="true" />
                <span>{tText(exp.location, locale)}</span>
              </span>
            </div>
          </div>

          {/* Concise Impact Bullets */}
          <ul className="mt-3.5 space-y-1.5 text-xs leading-relaxed text-ink-secondary sm:text-sm">
            {tList(exp.responsibilities, locale).map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{resp}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-line pt-3">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-canvas/80 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
              >
                <TechIcon name={tech} className="h-3 w-3" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
