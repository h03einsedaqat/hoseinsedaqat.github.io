'use client';

import React from 'react';
import { Briefcase, Calendar, ExternalLink, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { experienceItems } from '@/data/resume';
import { cn, tList, tText } from '@/lib/utils';

interface ExperienceTimelineProps {
  ids?: string[];
  compact?: boolean;
}

export function ExperienceTimeline({ ids, compact = false }: ExperienceTimelineProps) {
  const { locale, ui } = useLanguage();

  const items = ids?.length
    ? experienceItems.filter((item) => ids.includes(item.id))
    : experienceItems;

  return (
    <div className={cn('space-y-4', !compact && 'space-y-6')}>
      {items.map((exp) => (
        <article
          key={exp.id}
          className={cn(
            'relative rounded-2xl border border-line bg-elevated transition-colors hover:border-line-strong',
            compact ? 'p-4' : 'p-5 sm:p-6'
          )}
        >
          {/* Role, Company & Period */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-base font-semibold text-ink sm:text-lg">
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

          {/* Domain & Summary */}
          <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
            {tText(exp.summary, locale)}
          </p>

          {/* Responsibilities */}
          <div className="mt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {ui.responsibilitiesLabel}
            </h4>
            <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-ink-secondary">
              {tList(exp.responsibilities, locale)
                .slice(0, compact ? 3 : undefined)
                .map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                    <span>{resp}</span>
                  </li>
                ))}
            </ul>
          </div>

          {/* Problem -> Action -> Verifiable Result */}
          {exp.achievements.length > 0 && (
            <div className="mt-4 space-y-2.5">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
                {ui.achievementsLabel}
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {exp.achievements.slice(0, compact ? 1 : undefined).map((ach, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 gap-2 rounded-xl border border-line bg-canvas/60 p-3.5 text-xs leading-relaxed md:grid-cols-3 md:gap-3"
                  >
                    <div>
                      <div className="font-semibold text-ink">{ui.problemLabel}</div>
                      <p className="mt-1 text-ink-secondary">{tText(ach.problem, locale)}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-ink">{ui.actionLabel}</div>
                      <p className="mt-1 text-ink-secondary">{tText(ach.action, locale)}</p>
                    </div>
                    <div>
                      <div className="font-semibold text-accent">{ui.outcomeLabel}</div>
                      <p className="mt-1 text-ink-secondary">{tText(ach.outcome, locale)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3">
            {exp.technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-md border border-line bg-canvas/80 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
