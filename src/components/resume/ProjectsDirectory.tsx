'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpLeft,
  ArrowUpRight,
  ExternalLink,
  FolderGit2,
  GitBranch,
  Layers,
  Pin,
  Search,
  Star,
  X,
} from 'lucide-react';
import { ProjectCard } from '@/components/resume/ProjectCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  curatedProjects,
  fallbackGitHubRepos,
  featuredProjectSlugs,
  getFeaturedProjects,
  pinnedGitHubRepoNames,
} from '@/data/projects';
import { profileData } from '@/data/resume';
import { cn, formatRelativeDate, tText } from '@/lib/utils';
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
  const { locale, isRTL, ui } = useLanguage();
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [selectedTech, setSelectedTech] = useState<string>('All');
  const [query, setQuery] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const searchBoxRef = useRef<HTMLDivElement | null>(null);

  const [repos, setRepos] = useState<GitHubRepoSummary[]>(fallbackGitHubRepos);
  const [repoSource, setRepoSource] = useState<'live' | 'fallback'>('fallback');

  useEffect(() => {
    if (!suggestionsOpen) return;
    const handleOutside = (e: MouseEvent | TouchEvent) => {
      if (
        searchBoxRef.current &&
        e.target instanceof Node &&
        !searchBoxRef.current.contains(e.target)
      ) {
        setSuggestionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('touchstart', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('touchstart', handleOutside);
    };
  }, [suggestionsOpen]);

  useEffect(() => {
    let active = true;
    async function fetchRepos() {
      const CACHE_KEY = 'hs-github-repos-cache-v2';
      try {
        const cachedRaw = window.sessionStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw) as {
            ts: number;
            repos: GitHubRepoSummary[];
          };
          if (Date.now() - cached.ts < 15 * 60 * 1000 && cached.repos.length > 0) {
            if (active) {
              setRepos(cached.repos);
              setRepoSource('live');
            }
            return;
          }
        }

        const res = await fetch(
          'https://api.github.com/users/hoseinsedaqat/repos?per_page=100&sort=updated',
          { headers: { Accept: 'application/vnd.github+json' } }
        );
        if (!res.ok) return;
        const raw = (await res.json()) as Array<{
          name: string;
          fork: boolean;
          archived?: boolean;
          description: string | null;
          html_url: string;
          homepage: string | null;
          language: string | null;
          stargazers_count: number;
          updated_at: string;
          topics?: string[];
        }>;
        if (!Array.isArray(raw)) return;

        const mapped: GitHubRepoSummary[] = raw
          .filter((r) => !r.fork && r.name !== 'hoseinsedaqat')
          .map((r) => ({
            name: r.name,
            description: r.description,
            htmlUrl: r.html_url,
            homepage: r.homepage || null,
            language: r.language,
            stargazersCount: r.stargazers_count || 0,
            updatedAt: r.updated_at,
            topics: Array.isArray(r.topics) ? r.topics : [],
            fork: Boolean(r.fork),
            archived: Boolean(r.archived),
          }))
          .sort((a, b) => {
            const ai = pinnedGitHubRepoNames.indexOf(a.name);
            const bi = pinnedGitHubRepoNames.indexOf(b.name);
            if (ai !== -1 && bi !== -1) return ai - bi;
            if (ai !== -1) return -1;
            if (bi !== -1) return 1;
            return 0;
          });

        if (active && mapped.length > 0) {
          setRepos(mapped);
          setRepoSource('live');
          window.sessionStorage.setItem(
            CACHE_KEY,
            JSON.stringify({ ts: Date.now(), repos: mapped })
          );
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
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {ui.navProjects}
        </h1>
        <p className="text-xs text-ink-secondary sm:text-sm">
          {locale === 'fa'
            ? 'پروژه‌های شاخص مهندسی، ابزارهای منتشرشده و مخازن عمومی گیت‌هاب.'
            : 'Selected full-stack products, published tools, and public GitHub repositories.'}
        </p>
      </header>

      {/* Search & Filters */}
      <div className="space-y-3 rounded-2xl border border-line bg-elevated p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div ref={searchBoxRef} className="relative flex-1">
            <Search
              className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
              aria-hidden="true"
            />
            <input
              type="text"
              value={query}
              onFocus={() => setSuggestionsOpen(true)}
              onClick={() => setSuggestionsOpen(true)}
              onChange={(e) => {
                setQuery(e.target.value);
                if (!suggestionsOpen) setSuggestionsOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSuggestionsOpen(false);
              }}
              placeholder={ui.searchProjectsPlaceholder}
              aria-label={ui.searchProjectsPlaceholder}
              className="w-full rounded-xl border border-line bg-canvas py-2 ps-9 pe-9 text-sm text-ink placeholder:text-ink-muted focus:border-line-strong focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setSuggestionsOpen(true);
                }}
                aria-label={ui.clearSearch}
                className="absolute end-2.5 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-ink-muted hover:bg-hover hover:text-ink"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}

            {suggestionsOpen && (
              <div className="absolute start-0 end-0 top-full z-30 mt-2 max-h-[360px] divide-y divide-line overflow-y-auto rounded-2xl border border-line-strong bg-elevated p-2 shadow-xl">
                {/* Category Quick Suggestions */}
                {!query.trim() && (
                  <div className="space-y-1.5 p-1.5">
                    <div className="px-1 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                      {ui.searchSuggestionsCategoriesHeading}
                    </div>
                    <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                      {tabs
                        .filter((t) => t.id !== 'all')
                        .map((tab) => (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => {
                              setActiveTab(tab.id);
                              setSuggestionsOpen(false);
                            }}
                            className="flex items-center justify-between rounded-xl border border-line bg-canvas/70 px-3 py-2 text-start text-xs font-medium text-ink transition-colors hover:border-line-strong hover:bg-hover"
                          >
                            <span className="flex items-center gap-2">
                              <FolderGit2 className="h-3.5 w-3.5 text-ink-muted" />
                              <span>{tab.label}</span>
                            </span>
                            <DirectionalArrow className="h-3.5 w-3.5 text-ink-muted" />
                          </button>
                        ))}
                    </div>
                  </div>
                )}

                {/* Featured / Matching Project Suggestions */}
                <div className="space-y-1 p-1.5">
                  <div className="px-1 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    {ui.searchSuggestionsProjectsHeading}
                  </div>
                  {(query.trim() ? filteredProjects : getFeaturedProjects())
                    .slice(0, 5)
                    .map((proj) => (
                      <Link
                        key={proj.slug}
                        href={`/projects/${proj.slug}`}
                        onClick={() => setSuggestionsOpen(false)}
                        className="flex items-center justify-between gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-hover"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-ink-muted">
                            <Layers className="h-3.5 w-3.5" />
                          </span>
                          <div className="min-w-0">
                            <div className="truncate text-xs font-semibold text-ink">
                              {tText(proj.name, locale)}
                            </div>
                            <div className="truncate text-[11px] text-ink-muted">
                              {tText(proj.tagline, locale)}
                            </div>
                          </div>
                        </div>
                        <DirectionalArrow className="h-3.5 w-3.5 shrink-0 text-ink-muted" />
                      </Link>
                    ))}
                </div>

                {/* Quick Stack Suggestions */}
                <div className="space-y-1.5 p-1.5">
                  <div className="px-1 text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                    {ui.searchSuggestionsStacksHeading}
                  </div>
                  <div className="flex flex-wrap gap-1.5 px-1">
                    {TECH_FILTERS.filter((t) => t !== 'All').map((tech) => (
                      <button
                        key={tech}
                        type="button"
                        dir="ltr"
                        onClick={() => {
                          setSelectedTech(tech);
                          setSuggestionsOpen(false);
                        }}
                        className="rounded-lg border border-line bg-canvas px-2.5 py-1 text-[11px] font-medium text-ink-secondary transition-colors hover:border-line-strong hover:bg-hover hover:text-ink"
                      >
                        {tech}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
                    className="inline-flex min-w-0 items-center gap-1.5 truncate text-sm font-semibold text-ink hover:underline"
                  >
                    {pinnedGitHubRepoNames.includes(repo.name) && (
                      <Pin className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                    )}
                    <span className="truncate">{repo.name}</span>
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
