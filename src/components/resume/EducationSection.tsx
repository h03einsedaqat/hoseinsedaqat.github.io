'use client';

import React from 'react';
import { Award, BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { certificationNote, educationItems, publications } from '@/data/resume';
import { cn, tText } from '@/lib/utils';

interface EducationSectionProps {
  compact?: boolean;
}

export function EducationSection({ compact = false }: EducationSectionProps) {
  const { locale, ui } = useLanguage();

  return (
    <div className={cn('space-y-4', !compact && 'space-y-6')}>
      {/* Academic Education */}
      <div className="space-y-3">
        {educationItems.map((edu) => (
          <article
            key={edu.id}
            className="rounded-2xl border border-line bg-elevated p-5"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-accent">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-ink">
                  {tText(edu.degree, locale)}
                </h3>
                <div className="mt-0.5 text-sm font-medium text-ink-secondary">
                  {tText(edu.institution, locale)} · {tText(edu.location, locale)}
                </div>
                {edu.period && (
                  <div className="mt-0.5 text-xs text-ink-muted">
                    {tText(edu.period, locale)}
                  </div>
                )}
                <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                  {tText(edu.note, locale)}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Verified Certifications on LinkedIn */}
      <div className="rounded-2xl border border-line bg-elevated p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-ink-secondary">
              <Award className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-ink">
                {tText(certificationNote.title, locale)}
              </h3>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-ink-secondary">
                {tText(certificationNote.description, locale)}
              </p>
            </div>
          </div>

          <a
            href={certificationNote.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-hover sm:self-center"
          >
            <span>{ui.verifyOnLinkedIn}</span>
            <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Technical Publications */}
      {!compact && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-accent" aria-hidden="true" />
            <h2 className="text-base font-semibold text-ink">{ui.publicationsLabel}</h2>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {publications.map((pub) => (
              <a
                key={pub.id}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-line bg-elevated p-4 transition-colors hover:border-line-strong"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs text-ink-muted">
                    <span dir="ltr">{pub.platform}</span>
                    <span dir="ltr">{pub.date}</span>
                  </div>
                  <h3
                    dir="ltr"
                    className="mt-2 text-start text-sm font-semibold text-ink group-hover:underline"
                  >
                    {pub.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                    {tText(pub.summary, locale)}
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap gap-1.5 pt-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      dir="ltr"
                      className="rounded-md border border-line bg-canvas px-2 py-0.5 text-[11px] text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
