'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Download, FileText, MapPin, MessageSquare } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/resume';
import { tList, tText } from '@/lib/utils';

export function ProfileSection() {
  const { locale, ui } = useLanguage();
  const { askFromAnywhere } = useChat();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      {/* Hero Card */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-7">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <img
            src={profileData.avatarUrl}
            alt={tText(profileData.name, locale)}
            className="h-20 w-20 shrink-0 rounded-2xl border border-line-strong object-cover shadow-subtle"
          />

          <div className="min-w-0 flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              {tText(profileData.name, locale)}
            </h1>
            <p className="text-sm font-medium text-ink-secondary sm:text-base">
              {tText(profileData.headline, locale)}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-ink-muted">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{tText(profileData.location, locale)}</span>
            </div>
          </div>
        </div>

        {/* Summary Paragraphs */}
        <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-ink-secondary">
          {tList(profileData.summaryParagraphs, locale).map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() =>
              askFromAnywhere(
                locale === 'fa'
                  ? 'چرا تیم شما باید من را استخدام کند؟'
                  : 'Why should your team hire me?'
              )
            }
            className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-xs font-medium text-canvas transition-opacity hover:opacity-90"
          >
            <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{ui.askAssistant}</span>
          </button>

          <Link
            href="/resume"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-hover"
          >
            <FileText className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
            <span>{ui.viewResume}</span>
          </Link>

          <Link
            href="/resume?print=1"
            className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{ui.downloadResume}</span>
          </Link>
        </div>
      </section>

      {/* Core Specializations */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-6">
        <h2 className="text-base font-semibold text-ink">{ui.focusAreasLabel}</h2>
        <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {tList(profileData.focusAreas, locale).map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas/60 p-3 text-xs leading-relaxed text-ink-secondary"
            >
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering Principles */}
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-ink">{ui.engineeringValuesLabel}</h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {profileData.engineeringValues.map((val, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-line bg-elevated p-5"
            >
              <h3 className="text-sm font-semibold text-ink">
                {tText(val.title, locale)}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-ink-secondary">
                {tText(val.description, locale)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
