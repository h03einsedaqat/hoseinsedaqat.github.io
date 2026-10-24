'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  ExternalLink,
  FolderGit2,
  Info,
  MessageSquare,
  Users,
  Workflow,
} from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { tList, tText } from '@/lib/utils';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectDetailViewProps {
  project: ProjectItem;
  embedded?: boolean;
}

export function ProjectDetailView({ project, embedded = false }: ProjectDetailViewProps) {
  const { locale, isRTL, ui } = useLanguage();
  const { askFromAnywhere } = useChat();
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  if (embedded) {
    return (
      <div className="space-y-4 rounded-2xl border border-line bg-elevated p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-base font-semibold text-ink">
                {tText(project.name, locale)}
              </h3>
              <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-muted">
                {tText(project.statusLabel, locale)}
              </span>
            </div>
            <p className="mt-1 text-xs leading-relaxed text-ink-secondary">
              {tText(project.role, locale)}
            </p>
          </div>
        </div>

        {project.highlights && project.highlights.length > 0 && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {project.highlights.map((hl, i) => (
              <div key={i} className="rounded-xl border border-line bg-canvas/60 p-2.5">
                <div className="text-[11px] text-ink-muted">{tText(hl.label, locale)}</div>
                <div className="mt-0.5 text-xs font-semibold text-ink">
                  {tText(hl.value, locale)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-1.5">
          <div className="text-xs font-semibold text-ink">{ui.keyFeaturesLabel}</div>
          <ul className="space-y-1.5 text-xs leading-relaxed text-ink-secondary">
            {tList(project.features, locale).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.honestNote && (
          <div className="flex items-start gap-2 rounded-xl border border-line bg-canvas/50 p-3 text-xs text-ink-secondary">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-ink-muted" aria-hidden="true" />
            <span>{tText(project.honestNote, locale)}</span>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className="rounded-md border border-line bg-canvas/80 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
      {/* Top Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink"
        >
          <BackArrow className="h-3.5 w-3.5" aria-hidden="true" />
          <span>{ui.backToProjects}</span>
        </Link>

        <button
          type="button"
          onClick={() =>
            askFromAnywhere(
              locale === 'fa'
                ? `درباره معماری و جزئیات پروژه ${project.name.en} توضیح بده`
                : `Tell me about ${project.name.en}`
            )
          }
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover"
        >
          <MessageSquare className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
          <span>{ui.askAboutProject}</span>
        </button>
      </div>

      {/* Header Card */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
            {tText(project.statusLabel, locale)}
          </span>
          {project.isCloneOrInspired && (
            <span className="rounded-full border border-line-strong bg-canvas px-2.5 py-0.5 text-xs text-ink-secondary">
              {ui.inspiredBadge}
            </span>
          )}
          <span className="text-xs text-ink-muted">{project.updatedYear}</span>
        </div>

        <h1 className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {tText(project.name, locale)}
        </h1>
        <p className="mt-2 text-base leading-relaxed text-ink-secondary">
          {tText(project.tagline, locale)}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {project.highlights.map((hl, idx) => (
              <div key={idx} className="rounded-xl border border-line bg-canvas/70 p-3.5">
                <div className="text-xs text-ink-muted">{tText(hl.label, locale)}</div>
                <div className="mt-1 text-sm font-semibold text-ink">
                  {tText(hl.value, locale)}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-sm font-medium text-canvas transition-opacity hover:opacity-90"
            >
              <span>
                {project.demoLabel ? tText(project.demoLabel, locale) : ui.liveDemo}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          )}

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-hover"
          >
            <FolderGit2 className="h-4 w-4 text-ink-secondary" aria-hidden="true" />
            <span>{ui.sourceCode}</span>
            <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
          </a>

          {project.articleUrl && (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>{ui.readArticle}</span>
            </a>
          )}
        </div>
      </section>

      {/* Transparency Note for Clone / Practice / Mock-Data Showcases */}
      {project.honestNote && (
        <div className="flex items-start gap-3 rounded-2xl border border-line bg-elevated p-4 text-sm leading-relaxed text-ink-secondary">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <div>
            <span className="font-semibold text-ink">{ui.transparencyNoteLabel}: </span>
            {tText(project.honestNote, locale)}
          </div>
        </div>
      )}

      {/* Problem, Audience & Business Integration Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <section className="rounded-2xl border border-line bg-elevated p-5">
          <h2 className="text-sm font-semibold text-ink">{ui.problemLabel}</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            {tText(project.problem, locale)}
          </p>
        </section>

        <section className="rounded-2xl border border-line bg-elevated p-5">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            <h2 className="text-sm font-semibold text-ink">{ui.audienceLabel}</h2>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
            {tText(project.audience, locale)}
          </p>
        </section>
      </div>

      {/* Domain & Integration Logic */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Workflow className="h-4 w-4 text-accent" aria-hidden="true" />
          <h2 className="text-base font-semibold text-ink">{ui.businessLogicLabel}</h2>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
          {tText(project.businessLogic, locale)}
        </p>
      </section>

      {/* Technical Architecture & Key Capabilities */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-accent" aria-hidden="true" />
            <h2 className="text-base font-semibold text-ink">{ui.architectureLabel}</h2>
          </div>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-secondary">
            {tList(project.architecture, locale).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-6">
          <h2 className="text-base font-semibold text-ink">{ui.keyFeaturesLabel}</h2>
          <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-ink-secondary">
            {tList(project.features, locale).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Role & Architectural Decisions */}
      <section className="rounded-2xl border border-line bg-elevated p-5 sm:p-6 space-y-4">
        <div>
          <h2 className="text-base font-semibold text-ink">{ui.myRoleLabel}</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
            {tText(project.role, locale)}
          </p>
        </div>

        <div className="border-t border-line pt-4">
          <h3 className="text-sm font-semibold text-ink">{ui.engineeringDecisionsLabel}</h3>
          <ul className="mt-2.5 space-y-2 text-sm leading-relaxed text-ink-secondary">
            {tList(project.engineeringDecisions, locale).map((dec, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-muted" />
                <span>{dec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-4">
          <h3 className="text-sm font-semibold text-ink">{ui.technologiesLabel}</h3>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
