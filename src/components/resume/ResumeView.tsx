'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Printer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getFeaturedProjects } from '@/data/projects';
import {
  certificationNote,
  educationItems,
  experienceItems,
  profileData,
  publications,
  skillCategories,
} from '@/data/resume';
import { tList, tText } from '@/lib/utils';

export function ResumeView() {
  const { locale, isRTL, ui } = useLanguage();
  const searchParams = useSearchParams();
  const shouldAutoPrint = searchParams.get('print') === '1';
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    if (!shouldAutoPrint) return;
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.print === 'function') {
        window.print();
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [shouldAutoPrint]);

  const handlePrint = () => {
    if (typeof window !== 'undefined' && typeof window.print === 'function') {
      window.print();
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6 sm:px-6 sm:py-8 print:max-w-none print:p-0">
      {/* Screen Toolbar (Hidden in Print/PDF) */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-elevated p-4 print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink"
          >
            <BackArrow className="h-3.5 w-3.5" aria-hidden="true" />
            <span>{ui.backToChat}</span>
          </Link>
          <span className="text-xs text-ink-muted">
            {locale === 'fa'
              ? 'آماده‌ی ذخیره به‌صورت PDF (سایز A4 بدون هدر و سایدبار چت)'
              : 'Formatted for clean A4 PDF export (chat chrome automatically removed)'}
          </span>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-canvas transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          <span>{ui.printOrSavePdf}</span>
        </button>
      </div>

      {/* Printable Resume Sheet */}
      <article className="resume-sheet space-y-6 rounded-2xl border border-line bg-elevated p-6 sm:p-10 print:space-y-4 print:rounded-none print:border-0 print:bg-white print:p-0 print:text-black">
        {/* Header: Name, Title & Contact */}
        <header className="border-b border-line pb-5 print:border-neutral-300 print:pb-3">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl print:text-2xl print:text-black">
                {tText(profileData.name, locale)}
              </h1>
              <p className="mt-1 text-sm font-medium text-ink-secondary print:text-neutral-700">
                {tText(profileData.headline, locale)}
              </p>
            </div>
            <div className="text-xs text-ink-muted print:text-neutral-600">
              {tText(profileData.location, locale)}
            </div>
          </div>

          <div
            dir="ltr"
            className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-secondary print:text-neutral-800"
          >
            <a href={`mailto:${profileData.email}`} className="hover:underline">
              {profileData.email}
            </a>
            <span>·</span>
            <a href={profileData.githubUrl} className="hover:underline">
              github.com/hoseinsedaqat
            </a>
            <span>·</span>
            <a href={profileData.linkedinUrl} className="hover:underline">
              linkedin.com/in/hoseinsedaqat
            </a>
            <span>·</span>
            <a href={profileData.websiteUrl} className="hover:underline">
              hoseinsedaqat.github.io
            </a>
          </div>
        </header>

        {/* Summary */}
        <section className="space-y-2 break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-ink print:text-black">
            {ui.resumeSummaryTitle}
          </h2>
          <p className="text-sm leading-relaxed text-ink-secondary print:text-xs print:leading-relaxed print:text-neutral-800">
            {tList(profileData.summaryParagraphs, locale).slice(0, 2).join(' ')}
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-wider text-ink print:border-neutral-300 print:text-black">
            {ui.resumeExperienceTitle}
          </h2>

          <div className="space-y-4 print:space-y-3">
            {experienceItems.map((exp) => (
              <div key={exp.id} className="space-y-1.5 break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <span className="text-sm font-semibold text-ink print:text-black">
                      {tText(exp.role, locale)}
                    </span>
                    <span className="mx-1.5 text-ink-muted">·</span>
                    <span className="text-sm font-medium text-ink-secondary print:text-neutral-800">
                      {tText(exp.company, locale)}
                    </span>
                  </div>
                  <span className="text-xs text-ink-muted print:text-neutral-600">
                    {tText(exp.period, locale)}
                  </span>
                </div>

                <p className="text-xs leading-relaxed text-ink-secondary print:text-neutral-700">
                  {tText(exp.summary, locale)}
                </p>

                <ul className="list-disc space-y-1 ps-4 text-xs leading-relaxed text-ink-secondary print:text-neutral-800">
                  {tList(exp.responsibilities, locale).slice(0, 3).map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                  {exp.achievements.map((ach, i) => (
                    <li key={`ach-${i}`}>
                      <strong className="font-medium text-ink print:text-black">
                        {ui.outcomeLabel}:{' '}
                      </strong>
                      {tText(ach.outcome, locale)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3 break-inside-avoid">
          <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-wider text-ink print:border-neutral-300 print:text-black">
            {ui.resumeSkillsTitle}
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 print:grid-cols-2">
            {skillCategories.map((cat) => (
              <div key={cat.id} className="text-xs leading-relaxed">
                <span className="font-semibold text-ink print:text-black">
                  {tText(cat.title, locale)}:{' '}
                </span>
                <span dir="ltr" className="text-ink-secondary print:text-neutral-800">
                  {cat.skills.map((s) => s.name).join(' · ')}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Engineering Projects */}
        <section className="space-y-3">
          <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-wider text-ink print:border-neutral-300 print:text-black">
            {ui.resumeProjectsTitle}
          </h2>

          <div className="space-y-3 print:space-y-2.5">
            {featuredProjects.map((proj) => (
              <div key={proj.slug} className="space-y-1 break-inside-avoid">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-ink print:text-xs print:text-black">
                    {tText(proj.name, locale)}
                    {proj.isCloneOrInspired && (
                      <span className="ms-2 text-[11px] font-normal text-ink-muted print:text-neutral-600">
                        ({ui.inspiredBadge})
                      </span>
                    )}
                  </div>
                  <div
                    dir="ltr"
                    className="flex flex-wrap gap-3 text-[11px] text-ink-muted print:text-neutral-600"
                  >
                    <span>{proj.repoUrl.replace('https://', '')}</span>
                    {proj.demoUrl && (
                      <span>· {proj.demoUrl.replace('https://', '').replace(/\/$/, '')}</span>
                    )}
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-ink-secondary print:text-neutral-800">
                  {tText(proj.summary, locale)}
                </p>
                <div dir="ltr" className="text-[11px] text-ink-muted print:text-neutral-600">
                  Stack: {proj.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Publications */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 print:grid-cols-2 break-inside-avoid">
          <section className="space-y-2">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-wider text-ink print:border-neutral-300 print:text-black">
              {ui.resumeEducationTitle}
            </h2>
            {educationItems.map((edu) => (
              <div key={edu.id} className="text-xs leading-relaxed">
                <div className="font-semibold text-ink print:text-black">
                  {tText(edu.degree, locale)}
                </div>
                <div className="text-ink-secondary print:text-neutral-800">
                  {tText(edu.institution, locale)}
                </div>
              </div>
            ))}
            <p className="text-[11px] text-ink-muted print:text-neutral-600">
              {tText(certificationNote.title, locale)}: linkedin.com/in/hoseinsedaqat
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="border-b border-line pb-1.5 text-xs font-bold uppercase tracking-wider text-ink print:border-neutral-300 print:text-black">
              {ui.resumePublicationsTitle}
            </h2>
            <ul className="space-y-1.5 text-xs leading-relaxed text-ink-secondary print:text-neutral-800">
              {publications.map((pub) => (
                <li key={pub.id}>
                  <span dir="ltr" className="font-medium text-ink print:text-black">
                    {pub.title}
                  </span>{' '}
                  <span className="text-[11px] text-ink-muted print:text-neutral-600">
                    ({pub.platform}, {pub.date})
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
