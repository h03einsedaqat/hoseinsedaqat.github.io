'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Download, FileText, Globe, MapPin, MessageSquare } from 'lucide-react';
import { TechIcon } from '@/components/resume/TechIcon';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { profileData, skillCategories } from '@/data/resume';
import { tList, tText } from '@/lib/utils';

export function ProfileSection() {
  const { locale, ui } = useLanguage();
  const { askFromAnywhere } = useChat();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-5 px-4 py-6 sm:px-6 sm:py-8">
      {/* Hero Card */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-7">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <img
            src={profileData.avatarUrl}
            alt="Hosein Sedaqat (حسین صداقت) — Full-Stack Developer"
            className="h-24 w-24 shrink-0 rounded-2xl border border-line-strong object-cover object-top shadow-subtle"
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

        {/* Concise LinkedIn Summary */}
        <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-ink-secondary">
          {tList(profileData.summaryParagraphs, locale)[0]}
        </p>

        {/* Key Highlights */}
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {tList(profileData.focusAreas, locale).map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 rounded-xl border border-line bg-canvas/70 px-3 py-2 text-xs font-medium text-ink"
            >
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

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

      {/* Compact Core Stack Snapshot */}
      <section className="rounded-2xl border border-line bg-elevated p-5 space-y-2.5">
        <h2 className="text-sm font-semibold text-ink">{ui.navSkills}</h2>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl border border-line bg-canvas/70 p-3 text-xs space-y-2"
            >
              <div className="font-semibold text-ink">{tText(cat.title, locale)}</div>
              <div dir="ltr" className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-elevated px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
                  >
                    <TechIcon name={s.name} className="h-3 w-3" />
                    <span>{s.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spoken Languages */}
      <section className="rounded-2xl border border-line bg-elevated p-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-ink">
          <Globe className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>{locale === 'fa' ? 'زبان‌ها' : 'Languages'}</span>
        </div>
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {profileData.spokenLanguages.map((lang, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-line bg-canvas/70 px-3.5 py-2.5 text-xs"
            >
              <span className="font-semibold text-ink">{tText(lang.name, locale)}</span>
              <span className="text-ink-muted">{tText(lang.proficiency, locale)}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
