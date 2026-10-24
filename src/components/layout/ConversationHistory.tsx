'use client';

import React, { useState } from 'react';
import { MessageSquare, Trash2, X, Check } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

export function ConversationHistory() {
  const {
    conversations,
    filteredConversations,
    activeConversationId,
    searchQuery,
    selectConversation,
    deleteConversation,
    clearAllConversations,
  } = useChat();
  const { ui } = useLanguage();
  const pathname = usePathname();
  const [confirmClear, setConfirmClear] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between px-2.5 py-1">
        <span className="text-[11px] font-medium uppercase tracking-wider text-ink-muted">
          {ui.conversationsHeading}
        </span>
        {conversations.length > 0 && (
          <div className="flex items-center gap-1">
            {!confirmClear ? (
              <button
                type="button"
                onClick={() => setConfirmClear(true)}
                className="rounded px-1.5 py-0.5 text-[11px] text-ink-muted transition-colors hover:bg-sidebar-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
              >
                {ui.clearAllChats}
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    clearAllConversations();
                    setConfirmClear(false);
                  }}
                  aria-label={ui.confirmClearAll}
                  className="inline-flex items-center gap-0.5 rounded bg-red-500/15 px-1.5 py-0.5 text-[11px] font-medium text-red-500 transition-colors hover:bg-red-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500/40"
                >
                  <Check className="h-3 w-3" />
                  <span>{ui.confirmClearAll}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setConfirmClear(false)}
                  aria-label={ui.cancel}
                  className="inline-flex items-center rounded p-0.5 text-ink-muted hover:bg-sidebar-hover hover:text-ink"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {conversations.length === 0 ? (
        <p className="px-2.5 py-2 text-xs leading-relaxed text-ink-muted">
          {ui.noConversationsYet}
        </p>
      ) : filteredConversations.length === 0 && searchQuery.trim() ? (
        <p className="px-2.5 py-2 text-xs leading-relaxed text-ink-muted">
          {ui.noMatchingConversations}
        </p>
      ) : (
        <ul className="space-y-0.5" role="list">
          {filteredConversations.map((conv) => {
            const isSelected = pathname === '/' && conv.id === activeConversationId;
            return (
              <li key={conv.id} className="group relative flex items-center">
                <button
                  type="button"
                  onClick={() => selectConversation(conv.id)}
                  className={cn(
                    'flex w-full items-center gap-2.5 rounded-lg py-2 ps-2.5 pe-8 text-start text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                    isSelected
                      ? 'bg-active font-medium text-ink'
                      : 'text-ink-secondary hover:bg-sidebar-hover hover:text-ink'
                  )}
                >
                  <MessageSquare
                    className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                    aria-hidden="true"
                  />
                  <span className="truncate">{conv.title}</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteConversation(conv.id);
                  }}
                  title={ui.deleteChat}
                  aria-label={`${ui.deleteChat}: ${conv.title}`}
                  className={cn(
                    'absolute end-1.5 inline-flex h-6 w-6 items-center justify-center rounded-md text-ink-muted transition-opacity hover:bg-hover hover:text-red-500 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                    isSelected ? 'opacity-90' : 'opacity-70 md:opacity-0 md:group-hover:opacity-100'
                  )}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
