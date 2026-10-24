'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  ExternalLink,
  FolderGit2,
  Info,
  MessageSquare,
} from 'lucide-react';
import { ProjectCoverImage } from '@/components/resume/ProjectCoverImage';
import { TechIcon } from '@/components/resume/TechIcon';
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
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  if (embedded) {
    return (
      <div className="overflow-hidden rounded-2xl border border-line bg-elevated">
        <ProjectCoverImage
          name={tText(project.name, locale)}
          imageUrl={project.imageUrl}
          fallbackImageUrl={project.fallbackImageUrl}
          readmeImageRepo={project.readmeImageRepo}
          className="border-b border-line"
        />
        <div className="space-y-3 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-ink">
              {tText(project.name, locale)}
            </h3>
            <span className="rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-muted">
              {tText(project.statusLabel, locale)}
            </span>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {project.highlights.map((hl, i) => (
                <div key={i} className="rounded-xl border border-line bg-canvas/70 p-2.5">
                  <div className="text-[11px] text-ink-muted">{tText(hl.label, locale)}</div>
                  <div className="mt-0.5 text-xs font-semibold text-ink">
                    {tText(hl.value, locale)}
                  </div>
                </div>
              ))}
            </div>
          )}

          <ul className="space-y-1.5 text-xs leading-relaxed text-ink-secondary">
            {tList(project.features, locale)
              .slice(0, 3)
              .map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{feat}</span>
                </li>
              ))}
          </ul>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
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
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl space-y-5 px-4 py-6 sm:px-6 sm:py-8">
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
                ? `درباره پروژه ${project.name.en} توضیح بده`
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
      <section className="overflow-hidden rounded-2xl border border-line bg-elevated">
        <ProjectCoverImage
          name={tText(project.name, locale)}
          imageUrl={project.imageUrl}
          fallbackImageUrl={project.fallbackImageUrl}
          readmeImageRepo={project.readmeImageRepo}
          screenshots={project.screenshots}
          showThumbnails
          className="border-b border-line"
        />
        <div className="p-5 sm:p-6">
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
        <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
          {tText(project.summary, locale)}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {project.highlights.map((hl, idx) => (
              <div key={idx} className="rounded-xl border border-line bg-canvas/70 p-3">
                <div className="text-xs text-ink-muted">{tText(hl.label, locale)}</div>
                <div className="mt-0.5 text-sm font-semibold text-ink">
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
              className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-xs font-medium text-canvas transition-opacity hover:opacity-90 sm:text-sm"
            >
              <span>
                {project.demoLabel ? tText(project.demoLabel, locale) : ui.liveDemo}
              </span>
              <DirectionalArrow className="h-4 w-4" aria-hidden="true" />
            </a>
          )}

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-canvas px-4 py-2 text-xs font-medium text-ink transition-colors hover:bg-hover sm:text-sm"
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
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-canvas px-4 py-2 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink sm:text-sm"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              <span>{ui.readArticle}</span>
            </a>
          )}
        </div>
        </div>
      </section>

      {project.honestNote && (
        <div className="flex items-start gap-2.5 rounded-2xl border border-line bg-elevated p-4 text-xs leading-relaxed text-ink-secondary">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
          <span>{tText(project.honestNote, locale)}</span>
        </div>
      )}

      {/* Key Capabilities & Architecture (Concise) */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-line bg-elevated p-5">
          <h2 className="text-sm font-semibold text-ink">{ui.keyFeaturesLabel}</h2>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
            {tList(project.features, locale).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-line bg-elevated p-5">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-accent" aria-hidden="true" />
            <h2 className="text-sm font-semibold text-ink">{ui.architectureLabel}</h2>
          </div>
          <ul className="mt-3 space-y-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
            {tList(project.architecture, locale).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Tech Stack */}
      <section className="rounded-2xl border border-line bg-elevated p-5">
        <h2 className="text-sm font-semibold text-ink">{ui.technologiesLabel}</h2>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-2.5 py-1 text-xs font-medium text-ink-secondary"
            >
              <TechIcon name={tech} className="h-3.5 w-3.5" />
              <span>{tech}</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
