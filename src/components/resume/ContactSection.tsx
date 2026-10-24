'use client';

import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { externalLinks, profileData } from '@/data/resume';
import { cn, copyToClipboard, tText } from '@/lib/utils';

interface ContactSectionProps {
  compact?: boolean;
}

export function ContactSection({ compact = false }: ContactSectionProps) {
  const { locale, ui } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(profileData.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <div className={cn('space-y-4', !compact && 'space-y-6')}>
      {/* Direct Email Card */}
      <div
        className={cn(
          'rounded-2xl border border-line bg-elevated',
          compact ? 'p-4' : 'p-5 sm:p-6'
        )}
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-accent">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ui.directEmailLabel}</span>
            </div>
            <div
              dir="ltr"
              className="text-base font-semibold tracking-tight text-ink sm:text-lg"
            >
              {profileData.email}
            </div>
            <p className="text-xs text-ink-muted">
              {tText(profileData.location, locale)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  <span className="text-accent">{ui.emailCopied}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
                  <span>{ui.copyEmail}</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${profileData.email}`}
              className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-3.5 py-2 text-xs font-medium text-canvas transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <Send className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ui.sendEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Verified Professional Networks */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {externalLinks.slice(0, compact ? 4 : undefined).map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col justify-between rounded-2xl border border-line bg-elevated p-4 transition-colors hover:border-line-strong hover:bg-hover/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-sm font-semibold text-ink">
                  {tText(link.label, locale)}
                </span>
                <ExternalLink
                  className="h-3.5 w-3.5 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:text-ink"
                  aria-hidden="true"
                />
              </div>
              {link.handle && (
                <div dir="ltr" className="mt-0.5 text-start text-xs font-medium text-accent">
                  {link.handle}
                </div>
              )}
              <p className="mt-2 text-xs leading-relaxed text-ink-secondary">
                {tText(link.description, locale)}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
