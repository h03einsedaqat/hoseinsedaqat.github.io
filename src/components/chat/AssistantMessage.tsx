'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  FileText,
  GitBranch,
  Star,
} from 'lucide-react';
import { HSLogo } from '@/components/brand/HSLogo';
import { ContactSection } from '@/components/resume/ContactSection';
import { EducationSection } from '@/components/resume/EducationSection';
import { ExperienceTimeline } from '@/components/resume/ExperienceTimeline';
import { ProjectCard } from '@/components/resume/ProjectCard';
import { ProjectDetailView } from '@/components/resume/ProjectDetailView';
import { SkillsSection } from '@/components/resume/SkillsSection';
import { useLanguage } from '@/context/LanguageContext';
import { fallbackGitHubRepos, getProjectBySlug } from '@/data/projects';
import { getRecommendationById } from '@/data/recommendations';
import { profileData } from '@/data/resume';
import { copyToClipboard, tList, tText } from '@/lib/utils';
import type { ChatMessage, StructuredBlock } from '@/types/portfolio';

interface AssistantMessageProps {
  message: ChatMessage;
  isLatest: boolean;
  onSelectFollowUp: (promptText: string) => void;
}

export function AssistantMessage({
  message,
  isLatest,
  onSelectFollowUp,
}: AssistantMessageProps) {
  const { locale, isRTL, ui } = useLanguage();
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;
  const [copied, setCopied] = useState(false);

  const payload = message.payload;
  const displayProse = payload ? tText(payload.content, locale) : message.text;
  const bullets = payload?.bulletPoints ? tList(payload.bulletPoints, locale) : [];

  const handleCopy = async () => {
    const fullText = [displayProse, ...bullets.map((b) => `• ${b}`)]
      .filter(Boolean)
      .join('\n');
    const ok = await copyToClipboard(fullText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderBlock = (block: StructuredBlock, idx: number) => {
    switch (block.type) {
      case 'projects': {
        const items = block.slugs
          .map((s) => getProjectBySlug(s))
          .filter((p): p is NonNullable<typeof p> => Boolean(p));
        return (
          <div key={idx} className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {items.map((proj) => (
              <ProjectCard key={proj.slug} project={proj} compact />
            ))}
          </div>
        );
      }
      case 'project-detail': {
        const proj = getProjectBySlug(block.slug);
        if (!proj) return null;
        return <ProjectDetailView key={idx} project={proj} embedded />;
      }
      case 'experience': {
        return <ExperienceTimeline key={idx} ids={block.ids} compact />;
      }
      case 'skills': {
        return <SkillsSection key={idx} categoryIds={block.categoryIds} compact />;
      }
      case 'education': {
        return <EducationSection key={idx} compact />;
      }
      case 'contact': {
        return <ContactSection key={idx} compact />;
      }
      case 'highlights': {
        return (
          <div key={idx} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-elevated p-4 space-y-1.5"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <h4 className="text-sm font-semibold text-ink">
                    {tText(item.title, locale)}
                  </h4>
                </div>
                <p className="text-xs leading-relaxed text-ink-secondary">
                  {tText(item.description, locale)}
                </p>
                {item.proof && (
                  <p className="border-t border-line pt-2 text-[11px] text-ink-muted">
                    {tText(item.proof, locale)}
                  </p>
                )}
              </div>
            ))}
          </div>
        );
      }
      case 'github-overview': {
        return (
          <div
            key={idx}
            className="rounded-2xl border border-line bg-elevated p-4 space-y-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
                <span dir="ltr">github.com/hoseinsedaqat</span>
              </div>
              <span className="rounded-full border border-line bg-canvas px-2.5 py-0.5 text-[11px] text-ink-muted">
                45 Public Repositories
              </span>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {fallbackGitHubRepos.slice(0, 6).map((repo) => (
                <a
                  key={repo.name}
                  href={repo.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl border border-line bg-canvas/60 px-3 py-2 text-xs transition-colors hover:border-line-strong hover:bg-hover"
                >
                  <div className="min-w-0">
                    <div dir="ltr" className="truncate font-semibold text-ink">
                      {repo.name}
                    </div>
                    <div dir="ltr" className="text-[11px] text-ink-muted">
                      {repo.language || 'Web'}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-1.5 text-ink-muted">
                    {repo.stargazersCount > 0 && (
                      <span dir="ltr" className="inline-flex items-center gap-0.5 text-[11px]">
                        <Star className="h-3 w-3" />
                        {repo.stargazersCount}
                      </span>
                    )}
                    <ExternalLink className="h-3 w-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      }
      case 'resume-cta': {
        return (
          <div
            key={idx}
            className="flex flex-col gap-3 rounded-2xl border border-line bg-elevated p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="text-sm font-semibold text-ink">
                {tText(profileData.name, locale)} — {tText(profileData.title, locale)}
              </div>
              <div className="mt-0.5 text-xs text-ink-secondary">
                {locale === 'fa'
                  ? 'سوابق کاری، مهارت‌ها، پروژه‌ها و تحصیلات'
                  : 'Experience, skills, projects & education'}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/resume"
                className="inline-flex items-center gap-1.5 rounded-xl border border-line-strong bg-canvas px-3.5 py-2 text-xs font-medium text-ink hover:bg-hover"
              >
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{ui.viewResume}</span>
              </Link>
              <Link
                href="/resume?print=1"
                className="inline-flex items-center gap-1.5 rounded-xl bg-ink px-3.5 py-2 text-xs font-medium text-canvas hover:opacity-90"
              >
                <Download className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{ui.downloadResume}</span>
              </Link>
            </div>
          </div>
        );
      }
    }
  };

  const followUps = (payload?.followUpIds || [])
    .map((id) => getRecommendationById(id))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="flex w-full items-start gap-3 animate-fade-in sm:gap-4">
      <HSLogo size="sm" className="mt-0.5 hidden sm:inline-flex" />

      <div className="min-w-0 flex-1 space-y-4">
        {/* Main Prose */}
        <div className="space-y-3 text-sm leading-relaxed text-ink sm:text-[15px] sm:leading-7">
          {displayProse.split('\n\n').map((paragraph, pIdx) => (
            <p key={pIdx} className="whitespace-pre-line">
              {paragraph}
            </p>
          ))}

          {bullets.length > 0 && (
            <ul className="space-y-2 ps-1">
              {bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5 text-ink-secondary">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Rich Topic-Specific Structured Blocks */}
        {payload?.blocks && payload.blocks.length > 0 && (
          <div className="space-y-3">{payload.blocks.map(renderBlock)}</div>
        )}

        {/* Action Links + Copy Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <div className="flex flex-wrap items-center gap-2">
            {payload?.actionLinks?.map((action, aIdx) =>
              action.external ? (
                <a
                  key={aIdx}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-line-strong hover:bg-hover"
                >
                  <span>{tText(action.label, locale)}</span>
                  <ExternalLink className="h-3 w-3 text-ink-muted" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={aIdx}
                  href={action.href}
                  className="inline-flex items-center gap-1 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:border-line-strong hover:bg-hover"
                >
                  <span>{tText(action.label, locale)}</span>
                  <DirectionalArrow className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
                </Link>
              )
            )}
          </div>

          <button
            type="button"
            onClick={handleCopy}
            title={ui.copyResponse}
            aria-label={ui.copyResponse}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs text-ink-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                <span className="text-accent">{ui.copied}</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{ui.copyResponse}</span>
              </>
            )}
          </button>
        </div>

        {/* Contextual Follow-Up Chips on Latest Message */}
        {isLatest && followUps.length > 0 && (
          <div className="space-y-2 border-t border-line pt-3">
            <div className="text-[11px] font-medium text-ink-muted">
              {ui.followUpHeading}
            </div>
            <div className="flex flex-wrap gap-2">
              {followUps.map((f) => {
                const promptText = tText(f.prompt, locale);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => onSelectFollowUp(promptText)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:border-line-strong hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
                  >
                    <span>{tText(f.shortLabel, locale)}</span>
                    <DirectionalArrow className="h-3 w-3 text-ink-muted" aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
