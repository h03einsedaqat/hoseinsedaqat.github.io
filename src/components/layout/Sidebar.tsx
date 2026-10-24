'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Briefcase,
  Cpu,
  ExternalLink,
  FileText,
  FolderGit2,
  GraduationCap,
  Linkedin,
  Mail,
  MessageSquarePlus,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  User,
  X,
} from 'lucide-react';
import { HSLogo } from '@/components/brand/HSLogo';
import { ConversationHistory } from '@/components/layout/ConversationHistory';
import { SettingsModal } from '@/components/layout/SettingsModal';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { profileData } from '@/data/resume';
import { cn, tText } from '@/lib/utils';

function GitHubMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn('h-4 w-4', className)}
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.92.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

interface RailTooltipButtonProps {
  label: string;
  children: React.ReactNode;
}

function RailItemWrapper({ label, children }: RailTooltipButtonProps) {
  return (
    <div className="group/rail relative flex justify-center">
      {children}
      <span
        role="tooltip"
        className="pointer-events-none invisible absolute start-full top-1/2 z-50 ms-2.5 -translate-y-1/2 whitespace-nowrap rounded-md border border-line-strong bg-elevated px-2.5 py-1 text-xs font-medium text-ink opacity-0 shadow-md transition-all group-hover/rail:visible group-hover/rail:opacity-100 group-focus-within/rail:visible group-focus-within/rail:opacity-100"
      >
        {label}
      </span>
    </div>
  );
}

export function Sidebar() {
  const {
    sidebarCollapsed,
    toggleSidebarCollapsed,
    mobileDrawerOpen,
    setMobileDrawerOpen,
    startNewChat,
  } = useChat();
  const { locale, isRTL, ui } = useLanguage();
  const { theme } = useTheme();
  const pathname = usePathname();
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (!mobileDrawerOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileDrawerOpen, setMobileDrawerOpen]);

  const navItems = [
    { href: '/about', label: ui.navAbout, icon: User },
    { href: '/experience', label: ui.navExperience, icon: Briefcase },
    { href: '/projects', label: ui.navProjects, icon: FolderGit2 },
    { href: '/skills', label: ui.navSkills, icon: Cpu },
    { href: '/education', label: ui.navEducation, icon: GraduationCap },
    { href: '/contact', label: ui.navContact, icon: Mail },
    { href: '/resume', label: ui.navResume, icon: FileText },
  ];

  const CollapseIcon = isRTL
    ? sidebarCollapsed
      ? PanelLeftClose
      : PanelLeftOpen
    : sidebarCollapsed
      ? PanelLeftOpen
      : PanelLeftClose;

  const renderExpandedContent = (isMobile = false) => (
    <div className="flex h-full flex-col bg-sidebar text-ink">
      {/* Top Brand & Collapse */}
      <div className="flex items-center justify-between gap-2 px-3 pt-3 pb-2">
        <Link
          href="/"
          onClick={() => setMobileDrawerOpen(false)}
          className="flex min-w-0 items-center gap-2.5 rounded-lg p-1.5 transition-colors hover:bg-sidebar-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <HSLogo size="sm" />
          <span className="truncate text-sm font-semibold tracking-tight text-ink">
            {ui.brandName}
          </span>
        </Link>

        {isMobile ? (
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(false)}
            aria-label={ui.closeSidebar}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <X className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={toggleSidebarCollapsed}
            title={ui.collapseSidebar}
            aria-label={ui.collapseSidebar}
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <CollapseIcon className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* New Chat Button */}
      <div className="px-3 pb-2">
        <button
          type="button"
          onClick={startNewChat}
          className="flex w-full items-center justify-between gap-2 rounded-xl border border-line bg-elevated px-3 py-2 text-sm font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <span className="flex items-center gap-2.5">
            <MessageSquarePlus className="h-4 w-4 text-ink-secondary" aria-hidden="true" />
            <span>{ui.newChat}</span>
          </span>
        </button>
      </div>

      {/* Scrollable Middle: Conversations + Quick Sections */}
      <div className="flex-1 space-y-4 overflow-y-auto px-2.5 py-2">
        <ConversationHistory />

        <div className="border-t border-line pt-3">
          <div className="px-2.5 pb-1.5 text-[11px] font-medium uppercase tracking-wider text-ink-muted">
            {ui.exploreSectionsHeading}
          </div>
          <nav aria-label={ui.exploreSectionsHeading} className="space-y-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active =
                pathname === item.href ||
                (item.href === '/projects' && pathname.startsWith('/projects/'));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileDrawerOpen(false)}
                  className={cn(
                    'flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                    active
                      ? 'bg-active font-medium text-ink'
                      : 'text-ink-secondary hover:bg-sidebar-hover hover:text-ink'
                  )}
                >
                  <Icon className="h-4 w-4 shrink-0 text-ink-muted" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* External Profiles */}
        <div className="border-t border-line pt-3">
          <div className="space-y-0.5">
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2.5 py-2 text-sm text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <span className="flex items-center gap-2.5">
                <GitHubMark className="text-ink-muted" />
                <span>GitHub</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
            </a>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg px-2.5 py-2 text-sm text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
            >
              <span className="flex items-center gap-2.5">
                <Linkedin className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                <span>LinkedIn</span>
              </span>
              <ExternalLink className="h-3.5 w-3.5 text-ink-muted" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Controls: Settings Button + Profile Card */}
      <div className="border-t border-line p-2.5 space-y-1.5">
        <button
          type="button"
          onClick={() => {
            setMobileDrawerOpen(false);
            setSettingsOpen(true);
          }}
          className="flex w-full items-center justify-between gap-2 rounded-xl px-2.5 py-2 text-sm text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <span className="flex items-center gap-2.5">
            <Settings className="h-4 w-4 text-ink-muted" aria-hidden="true" />
            <span className="font-medium">{ui.settingsLabel}</span>
          </span>
          <span className="rounded-md border border-line bg-elevated px-2 py-0.5 text-[11px] font-medium text-ink-muted">
            {theme === 'dark' ? (locale === 'fa' ? 'تیره' : 'Dark') : locale === 'fa' ? 'روشن' : 'Light'}{' '}
            · {locale === 'fa' ? 'FA' : 'EN'}
          </span>
        </button>

        <Link
          href="/about"
          onClick={() => setMobileDrawerOpen(false)}
          className="flex items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-sidebar-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          <img
            src={profileData.avatarUrl}
            alt={tText(profileData.name, locale)}
            className="h-9 w-9 shrink-0 rounded-full border border-line object-cover object-top"
          />
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-medium text-ink">
              {tText(profileData.name, locale)}
            </div>
            <div className="truncate text-xs text-ink-muted">
              {tText(profileData.title, locale)}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );

  const renderCollapsedRail = () => (
    <div className="flex h-full w-[60px] flex-col items-center justify-between bg-sidebar py-3 text-ink">
      <div className="flex flex-col items-center gap-2">
        <RailItemWrapper label={ui.expandSidebar}>
          <button
            type="button"
            onClick={toggleSidebarCollapsed}
            aria-label={ui.expandSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <CollapseIcon className="h-4 w-4" />
          </button>
        </RailItemWrapper>

        <RailItemWrapper label={ui.newChat}>
          <button
            type="button"
            onClick={startNewChat}
            aria-label={ui.newChat}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-elevated text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <MessageSquarePlus className="h-4 w-4" />
          </button>
        </RailItemWrapper>

        <div className="my-1 h-px w-6 bg-line" />

        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href === '/projects' && pathname.startsWith('/projects/'));
          return (
            <RailItemWrapper key={item.href} label={item.label}>
              <Link
                href={item.href}
                aria-label={item.label}
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                  active
                    ? 'bg-active text-ink'
                    : 'text-ink-secondary hover:bg-sidebar-hover hover:text-ink'
                )}
              >
                <Icon className="h-4 w-4" />
              </Link>
            </RailItemWrapper>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <RailItemWrapper label="GitHub">
          <a
            href={profileData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink"
          >
            <GitHubMark />
          </a>
        </RailItemWrapper>

        <RailItemWrapper label="LinkedIn">
          <a
            href={profileData.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </RailItemWrapper>

        <RailItemWrapper label={ui.settingsLabel}>
          <button
            type="button"
            onClick={() => setSettingsOpen(true)}
            aria-label={ui.settingsLabel}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-secondary transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <Settings className="h-4 w-4" />
          </button>
        </RailItemWrapper>

        <RailItemWrapper label={tText(profileData.name, locale)}>
          <Link
            href="/about"
            aria-label={tText(profileData.name, locale)}
            className="mt-1 rounded-full p-0.5 transition-opacity hover:opacity-90"
          >
            <img
              src={profileData.avatarUrl}
              alt={tText(profileData.name, locale)}
              className="h-8 w-8 rounded-full border border-line object-cover object-top"
            />
          </Link>
        </RailItemWrapper>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop / Tablet Persistent Sidebar */}
      <aside
        aria-label={ui.portfolioTitle}
        className={cn(
          'relative z-30 hidden shrink-0 border-e border-line bg-sidebar transition-[width] duration-200 ease-out md:block print:hidden',
          sidebarCollapsed ? 'w-[60px]' : 'w-[268px]'
        )}
      >
        {sidebarCollapsed ? renderCollapsedRail() : renderExpandedContent(false)}
      </aside>

      {/* Mobile Drawer Overlay */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden print:hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 h-full w-[280px] max-w-[85vw] border-e border-line shadow-2xl">
            {renderExpandedContent(true)}
          </div>
        </div>
      )}

      {/* Settings Modal (Theme, Language & Local Chat Data) */}
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
