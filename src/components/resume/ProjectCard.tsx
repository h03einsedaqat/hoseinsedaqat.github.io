'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight, BookOpen, ExternalLink, FolderGit2, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { featuredProjectSlugs } from '@/data/projects';
import { cn, tText } from '@/lib/utils';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { locale, isRTL, ui } = useLanguage();
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const isFeatured = featuredProjectSlugs.includes(project.slug);

  return (
    <article
      className={cn(
        'group flex flex-col justify-between rounded-2xl border border-line bg-elevated transition-colors hover:border-line-strong',
        compact ? 'p-4' : 'p-5'
      )}
    >
      <div className="space-y-3">
        {/* Badges + Year */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {isFeatured && !project.isCloneOrInspired && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
                <Layers className="h-3 w-3" aria-hidden="true" />
                <span>{ui.featuredBadge}</span>
              </span>
            )}
            {project.isCloneOrInspired && (
              <span className="inline-flex items-center rounded-full border border-line-strong bg-canvas/70 px-2.5 py-0.5 text-[11px] font-medium text-ink-secondary">
                {ui.inspiredBadge}
              </span>
            )}
            <span className="inline-flex items-center rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-muted">
              {tText(project.statusLabel, locale)}
            </span>
          </div>
          <span className="text-xs tabular-nums text-ink-muted">{project.updatedYear}</span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-base font-semibold tracking-tight text-ink">
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 rounded"
            >
              {tText(project.name, locale)}
            </Link>
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-secondary">
            {tText(project.summary, locale)}
          </p>
        </div>

        {/* Problem & Purpose */}
        {!compact && (
          <div className="rounded-xl border border-line bg-canvas/50 p-3 text-xs leading-relaxed text-ink-secondary">
            <span className="font-semibold text-ink">{ui.problemLabel}: </span>
            {tText(project.problem, locale)}
          </div>
        )}

        {/* Highlights if present (e.g. Rahkar ERP) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {project.highlights.map((hl, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-line bg-canvas/60 px-2.5 py-2"
              >
                <div className="text-[11px] text-ink-muted">{tText(hl.label, locale)}</div>
                <div className="mt-0.5 text-xs font-semibold text-ink">
                  {tText(hl.value, locale)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 pt-0.5">
          {project.technologies.slice(0, compact ? 6 : 9).map((tech) => (
            <span
              key={tech}
              dir="ltr"
              className="inline-flex items-center rounded-md border border-line bg-canvas/70 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3">
        <div className="flex flex-wrap items-center gap-2">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <FolderGit2 className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
            <span>{ui.sourceCode}</span>
            <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-2.5 py-1.5 text-xs font-medium text-canvas transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <span>
                {project.demoLabel ? tText(project.demoLabel, locale) : ui.liveDemo}
              </span>
              <DirectionalArrow className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          )}

          {project.articleUrl && !compact && (
            <a
              href={project.articleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink"
            >
              <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{ui.readArticle}</span>
            </a>
          )}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <span>{ui.viewDetails}</span>
          <DirectionalArrow className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
