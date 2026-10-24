'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowUpLeft,
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FolderGit2,
  Pin,
} from 'lucide-react';
import { ProjectCoverImage } from '@/components/resume/ProjectCoverImage';
import { TechIcon } from '@/components/resume/TechIcon';
import { useLanguage } from '@/context/LanguageContext';
import { cn, tText } from '@/lib/utils';
import type { ProjectItem } from '@/types/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  compact?: boolean;
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const { locale, isRTL, ui } = useLanguage();
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-elevated transition-colors hover:border-line-strong">
      <div>
        {/* Project Screenshot / Cover */}
        <ProjectCoverImage
          name={tText(project.name, locale)}
          href={`/projects/${project.slug}`}
          imageUrl={project.imageUrl}
          fallbackImageUrl={project.fallbackImageUrl}
          readmeImageRepo={project.readmeImageRepo}
          screenshots={project.screenshots}
          className="border-b border-line"
        />

        <div className={cn('space-y-3', compact ? 'p-4' : 'p-5')}>
          {/* Badges + Year */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-1.5">
              {project.pinned && (
                <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
                  <Pin className="h-3 w-3" aria-hidden="true" />
                  <span>{locale === 'fa' ? 'پین‌شده' : 'Pinned'}</span>
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
            <span className="text-xs tabular-nums text-ink-muted">
              {project.updatedYear}
            </span>
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-base font-semibold tracking-tight text-ink">
              <Link
                href={`/projects/${project.slug}`}
                className="rounded hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                {tText(project.name, locale)}
              </Link>
            </h3>
            <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-secondary sm:text-sm">
              {tText(project.tagline, locale)}
            </p>
          </div>

          {/* Highlights if present (e.g. Rahkar ERP) */}
          {project.highlights && project.highlights.length > 0 && !compact && (
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {project.highlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-line bg-canvas/60 px-2.5 py-2"
                >
                  <div className="text-[11px] text-ink-muted">
                    {tText(hl.label, locale)}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-ink">
                    {tText(hl.value, locale)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.technologies.slice(0, compact ? 5 : 8).map((tech) => (
              <span
                key={tech}
                dir="ltr"
                className="inline-flex items-center gap-1.5 rounded-md border border-line bg-canvas/70 px-2 py-0.5 text-[11px] font-medium text-ink-secondary"
              >
                <TechIcon name={tech} className="h-3 w-3" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div
        className={cn(
          'flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3',
          compact ? 'px-4 pb-4' : 'px-5 pb-5'
        )}
      >
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
