'use client';

import React, { useEffect, useRef } from 'react';
import { HSLogo } from '@/components/brand/HSLogo';
import { AssistantMessage } from '@/components/chat/AssistantMessage';
import { UserMessage } from '@/components/chat/UserMessage';
import { useLanguage } from '@/context/LanguageContext';
import type { ChatMessage } from '@/types/portfolio';

interface MessageListProps {
  messages: ChatMessage[];
  isSending: boolean;
  onSelectFollowUp: (promptText: string) => void;
}

export function MessageList({
  messages,
  isSending,
  onSelectFollowUp,
}: MessageListProps) {
  const { ui } = useLanguage();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const prevCountRef = useRef<number>(messages.length);

  useEffect(() => {
    if (messages.length !== prevCountRef.current || isSending) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

      bottomRef.current?.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'end',
      });
      prevCountRef.current = messages.length;
    }
  }, [messages.length, isSending]);

  const lastAssistantId = [...messages]
    .reverse()
    .find((m) => m.role === 'assistant')?.id;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 py-6 sm:px-6 sm:py-8">
      {messages.map((msg) =>
        msg.role === 'user' ? (
          <UserMessage key={msg.id} text={msg.text} />
        ) : (
          <AssistantMessage
            key={msg.id}
            message={msg}
            isLatest={!isSending && msg.id === lastAssistantId}
            onSelectFollowUp={onSelectFollowUp}
          />
        )
      )}

      {isSending && (
        <div
          role="status"
          aria-live="polite"
          className="flex items-center gap-3 text-xs text-ink-muted animate-fade-in"
        >
          <HSLogo size="sm" className="hidden sm:inline-flex" />
          <div className="inline-flex items-center gap-2 rounded-2xl border border-line bg-elevated px-3.5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span>{ui.assistantThinking}</span>
          </div>
        </div>
      )}

      <div ref={bottomRef} className="h-2" />
    </div>
  );
}
