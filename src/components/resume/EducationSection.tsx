'use client';

import React from 'react';
import { Award, ExternalLink, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import {
  certificationNote,
  certifications,
  educationItems,
} from '@/data/resume';
import { cn, tText } from '@/lib/utils';

interface EducationSectionProps {
  compact?: boolean;
}

function SololearnBadge() {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas"
    >
      <svg viewBox="0 0 36 36" className="h-5 w-5">
        <circle cx="18" cy="18" r="15" fill="none" stroke="#14b8a6" strokeWidth="3.2" strokeDasharray="24 72" />
        <circle cx="18" cy="18" r="15" fill="none" stroke="#3b82f6" strokeWidth="3.2" strokeDasharray="24 72" transform="rotate(90 18 18)" />
        <circle cx="18" cy="18" r="15" fill="none" stroke="#ec4899" strokeWidth="3.2" strokeDasharray="24 72" transform="rotate(180 18 18)" />
        <circle cx="18" cy="18" r="15" fill="none" stroke="#f59e0b" strokeWidth="3.2" strokeDasharray="24 72" transform="rotate(270 18 18)" />
      </svg>
    </span>
  );
}

export function EducationSection({ compact = false }: EducationSectionProps) {
  const { locale, ui } = useLanguage();

  return (
    <div className={cn('space-y-4', !compact && 'space-y-5')}>
      {/* Academic Education */}
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
                {tText(edu.institution, locale)}
              </h3>
              <div className="mt-0.5 text-sm font-medium text-ink-secondary">
                {tText(edu.degree, locale)}
              </div>
              {edu.period && (
                <div className="mt-0.5 text-xs text-ink-muted">
                  {tText(edu.period, locale)}
                </div>
              )}
            </div>
          </div>
        </article>
      ))}

      {/* All 6 Verified Licenses & Certifications */}
      <section className="rounded-2xl border border-line bg-elevated p-5 space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4 text-accent" aria-hidden="true" />
            <h3 className="text-sm font-semibold text-ink">
              {tText(certificationNote.title, locale)} ({certifications.length})
            </h3>
          </div>
          <a
            href={certificationNote.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink hover:bg-hover"
          >
            <span>{ui.verifyOnLinkedIn}</span>
            <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="flex items-start gap-3 rounded-xl border border-line bg-canvas/70 p-3.5"
            >
              <SololearnBadge />
              <div className="min-w-0 flex-1">
                <div dir="ltr" className="text-start text-xs font-semibold text-ink">
                  {cert.title}
                </div>
                <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-[11px] text-ink-secondary">
                  <span dir="ltr">{cert.issuer}</span>
                  <span>·</span>
                  <span>{tText(cert.issuedDate, locale)}</span>
                </div>
                {cert.credentialId && (
                  <div dir="ltr" className="mt-0.5 text-start text-[11px] text-ink-muted">
                    Credential ID{' '}
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-ink-secondary underline-offset-2 hover:text-ink hover:underline"
                      >
                        {cert.credentialId}
                      </a>
                    ) : (
                      <span className="font-mono">{cert.credentialId}</span>
                    )}
                  </div>
                )}
                {cert.url && (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 rounded-full border border-line bg-elevated px-2.5 py-0.5 text-[11px] font-medium text-ink transition-colors hover:bg-hover"
                  >
                    <span>Show credential</span>
                    <ExternalLink className="h-2.5 w-2.5 text-ink-muted" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
