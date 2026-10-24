'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, FileText, Linkedin, Menu, MessageSquare } from 'lucide-react';
import { HSLogo } from '@/components/brand/HSLogo';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { profileData } from '@/data/resume';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function ChatHeader() {
  const { setMobileDrawerOpen, aiModeActive } = useChat();
  const { ui } = useLanguage();
  const pathname = usePathname();
  const isChatHome = pathname === '/';

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-line bg-canvas/90 px-3 backdrop-blur-md sm:px-5 print:hidden">
      {/* Left / Start: Mobile Drawer Trigger + Portfolio Title + Resume Assistant Badge */}
      <div className="flex min-w-0 items-center gap-2.5">
        <button
          type="button"
          onClick={() => setMobileDrawerOpen(true)}
          aria-label={ui.openSidebar}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link
          href="/"
          className="flex min-w-0 items-center gap-2 rounded-lg px-1.5 py-1 transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <HSLogo size="sm" className="md:hidden" />
          <span className="truncate text-sm font-semibold tracking-tight text-ink sm:text-[15px]">
            {ui.portfolioTitle}
          </span>
          <span className="inline-flex shrink-0 items-center rounded-full border border-line bg-elevated px-2 py-0.5 text-[11px] font-medium text-ink-secondary">
            {ui.resumeAssistant}
          </span>
        </Link>

        <span
          className="hidden items-center gap-1.5 rounded-full border border-line px-2 py-0.5 text-[11px] text-ink-muted lg:inline-flex"
          title={aiModeActive ? ui.aiGroundedBadge : ui.verifiedKbBadge}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span>{aiModeActive ? ui.aiGroundedBadge : ui.verifiedKbBadge}</span>
        </span>
      </div>

      {/* Right / End: View Resume, Download Resume, Quick GitHub & LinkedIn */}
      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
        {!isChatHome && (
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-2.5 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <MessageSquare className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
            <span className="hidden sm:inline">{ui.backToChat}</span>
          </Link>
        )}

        <Link
          href="/resume"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-2.5 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <FileText className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
          <span className="hidden sm:inline">{ui.viewResume}</span>
        </Link>

        <Link
          href="/resume?print=1"
          className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-2.5 py-1.5 text-xs font-medium text-canvas transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <Download className="h-3.5 w-3.5" aria-hidden="true" />
          <span className="hidden xs:inline sm:inline">{ui.downloadResume}</span>
        </Link>

        <div className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />

        <a
          href={profileData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <GitHubIcon />
        </a>

        <a
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
