'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageSquare } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';

export function ChatHeader() {
  const { setMobileDrawerOpen } = useChat();
  const { ui } = useLanguage();
  const pathname = usePathname();
  const isChatHome = pathname === '/';

  // On desktop home view, if there are no extra actions needed, keep top bar ultra-clean
  return (
    <header className="sticky top-0 z-20 flex h-12 shrink-0 items-center justify-between gap-2 bg-canvas/90 px-3 backdrop-blur-md sm:px-5 print:hidden">
      {/* Start: Mobile Drawer Trigger + Subtle Title */}
      <div className="flex min-w-0 items-center gap-2">
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
          className="truncate rounded-lg px-2 py-1 text-sm font-semibold tracking-tight text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
        >
          {ui.portfolioTitle}
        </Link>
      </div>

      {/* End: Only show "Back to Chat" when viewing a secondary route */}
      <div className="flex shrink-0 items-center">
        {!isChatHome && (
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-elevated px-3 py-1.5 text-xs font-medium text-ink transition-colors hover:bg-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <MessageSquare className="h-3.5 w-3.5 text-ink-secondary" aria-hidden="true" />
            <span>{ui.backToChat}</span>
          </Link>
        )}
      </div>
    </header>
  );
}
