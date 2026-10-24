'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink, GitBranch, Search, Star } from 'lucide-react';
import { ProjectCard } from '@/components/resume/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  curatedProjects,
  fallbackGitHubRepos,
  featuredProjectSlugs,
} from '@/data/projects';
import { profileData } from '@/data/resume';
import { cn, formatRelativeDate } from '@/lib/utils';
import type { GitHubRepoSummary } from '@/types/portfolio';

type FilterTab = 'all' | 'featured' | 'dashboards' | 'extension-mobile' | 'ui-studies';

const TECH_FILTERS = [
  'All',
  'TypeScript',
  'React',
  'Next.js',
  'Vue',
  'Node.js',
  'PWA',
  'Testing',
] as const;

export function ProjectsDirectory() {
  const { locale, ui } = useLanguage();
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [query, setQuery] = useState('');

  const [repos, setRepos] = useState<GitHubRepoSummary[]>(fallbackGitHubRepos);
  const [repoSource, setRepoSource] = useState<'live' | 'fallback'>('fallback');

  useEffect(() => {
    let active = true;
    async function fetchRepos() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) return;
        const data = (await res.json()) as {
          repos?: GitHubRepoSummary[];
          source?: 'live' | 'fallback';
        };
        if (active && Array.isArray(data.repos) && data.repos.length > 0) {
          setRepos(data.repos);
          setRepoSource(data.source === 'live' ? 'live' : 'fallback');
        }
      } catch {
        // Keep verified fallback snapshot seamlessly
      }
    }
    void fetchRepos();
    return () => {
      active = false;
    };
  }, []);

  const filteredProjects = useMemo(() => {
    const q = query.trim().toLowerCase();

    return curatedProjects.filter((project) => {
      if (activeTab === 'featured' && !featuredProjectSlugs.includes(project.slug)) {
        return false;
      }
      if (
        activeTab === 'dashboards' &&
        project.category !== 'featured-product' &&
        project.category !== 'enterprise-dashboard'
      ) {
        return false;
      }
      if (activeTab === 'extension-mobile' && project.category !== 'extension-mobile') {
        return false;
      }
      if (activeTab === 'ui-studies' && !project.isCloneOrInspired) {
        return false;
      }

      if (selectedTech !== 'All') {
        const techLower = project.technologies.map((t) => t.toLowerCase());
        if (selectedTech === 'Testing') {
          if (
            !techLower.some(
              (t) => t.includes('vitest') || t.includes('jest') || t.includes('rtl')
            )
          ) {
            return false;
          }
        } else if (!techLower.some((t) => t.includes(selectedTech.toLowerCase()))) {
          return false;
        }
      }

      if (!q) return true;

      const haystack = [
        project.name.en,
        project.name.fa,
        project.tagline.en,
        project.tagline.fa,
        project.summary.en,
        project.summary.fa,
        ...project.technologies,
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [activeTab, selectedTech, query]);

  const tabs: { id: FilterTab; label: string }[] = [
    { id: 'all', label: ui.allProjectsTab },
    { id: 'featured', label: ui.featuredTab },
    { id: 'dashboards', label: ui.dashboardsTab },
    { id: 'extension-mobile', label: ui.extensionsMobileTab },
    { id: 'ui-studies', label: ui.uiStudiesTab },
  ];

  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-6 sm:px-6 sm:py-8">
      {/* Header */}
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navProjects}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed text-ink-secondary">
          {locale === 'fa'
            ? 'پروژه‌های مهندسی منتخب شامل سامانه‌های ERP، داشبوردهای تحلیلی، افزونه مرورگر، اپلیکیشن موبایل و مطالعات معماری رابط کاربری با لینک‌های واقعی و قابل بررسی.'
            : 'Curated software engineering work separating flagship full-stack & enterprise products from UI/architecture practice studies—every link verified against live deployments and public repositories.'}
        </p>
      </header>

      {/* Search & Filters */}
      <div className="space-y-3 rounded-2xl border border-line bg-elevated p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={ui.searchProjectsPlaceholder}
              aria-label={ui.searchProjectsPlaceholder}
              className="w-full rounded-xl border border-line bg-canvas py-2 ps-9 pe-3 text-sm text-ink placeholder:text-ink-muted focus:border-line-strong focus:outline-none"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                activeTab === tab.id
                  ? 'bg-ink text-canvas'
                  : 'border border-line bg-canvas text-ink-secondary hover:bg-hover hover:text-ink'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tech Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 border-t border-line pt-3">
          {TECH_FILTERS.map((tech) => {
            const label = tech === 'All' ? ui.allTechFilter : tech;
            return (
              <button
                key={tech}
                type="button"
                dir={tech === 'All' ? undefined : 'ltr'}
                onClick={() => setSelectedTech(tech)}
                className={cn(
                  'rounded-md px-2.5 py-1 text-[11px] font-medium transition-colors',
                  selectedTech === tech
                    ? 'border border-accent/40 bg-accent-soft text-accent'
                    : 'border border-line bg-canvas/70 text-ink-muted hover:text-ink'
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Curated Grid */}
      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-line bg-elevated p-8 text-center">
          <p className="text-sm text-ink-secondary">{ui.noProjectsMatch}</p>
          <button
            type="button"
            onClick={() => {
              setActiveTab('all');
              setSelectedTech('All');
              setQuery('');
            }}
            className="mt-3 rounded-lg border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink hover:bg-hover"
          >
            {ui.clearFilters}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}

      {/* Live Public GitHub Repositories Section */}
      <section className="space-y-4 border-t border-line pt-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
              <h2 className="text-lg font-semibold text-ink">{ui.githubSectionTitle}</h2>
              <span className="rounded-full border border-line bg-elevated px-2.5 py-0.5 text-[11px] text-ink-muted">
                {repoSource === 'live' ? ui.githubLiveBadge : ui.githubSnapshotBadge}
              </span>
            </div>
            <p className="mt-1 text-xs text-ink-secondary">{ui.githubSectionSubtitle}</p>
          </div>

          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover"
          >
            <span>github.com/hoseinsedaqat</span>
            <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {repos.slice(0, 12).map((repo) => (
            <div
              key={repo.name}
              className="flex flex-col justify-between rounded-xl border border-line bg-elevated p-4 transition-colors hover:border-line-strong"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    dir="ltr"
                    className="truncate text-sm font-semibold text-ink hover:underline"
                  >
                    {repo.name}
                  </a>
                  {repo.stargazersCount > 0 && (
                    <span
                      dir="ltr"
                      className="inline-flex shrink-0 items-center gap-1 text-xs text-ink-muted"
                    >
                      <Star className="h-3 w-3" aria-hidden="true" />
                      {repo.stargazersCount}
                    </span>
                  )}
                </div>

                {repo.description && (
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-ink-secondary">
                    {repo.description}
                  </p>
                )}
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 border-t border-line pt-2.5 text-[11px] text-ink-muted">
                <span dir="ltr">{repo.language || 'Web'}</span>
                <span>
                  {ui.updatedLabel}: {formatRelativeDate(repo.updatedAt, locale)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
