'use client';

import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { HSLogo } from '@/components/brand/HSLogo';
import { AssistantMessage } from '@/components/chat/AssistantMessage';
import { UserMessage } from '@/components/chat/UserMessage';
import { useLanguage } from '@/context/LanguageContext';
import type { ChatMessage } from '@/types/portfolio';

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface MessageListProps {
  conversationId: string;
  scrollContainerRef?: React.RefObject<HTMLDivElement | null>;
  messages: ChatMessage[];
  isSending: boolean;
  onSelectFollowUp: (promptText: string) => void;
}

export function MessageList({
  conversationId,
  scrollContainerRef,
  messages,
  isSending,
  onSelectFollowUp,
}: MessageListProps) {
  const { ui } = useLanguage();
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const latestMessageRef = useRef<HTMLDivElement | null>(null);
  const prevConvIdRef = useRef<string | null>(null);
  const prevCountRef = useRef<number>(0);

  const scrollToLatest = (behavior: ScrollBehavior) => {
    const container = scrollContainerRef?.current;
    if (container) {
      if (behavior === 'auto') {
        container.scrollTop = container.scrollHeight;
      } else if (typeof container.scrollTo === 'function') {
        container.scrollTo({ top: container.scrollHeight, behavior });
      } else {
        container.scrollTop = container.scrollHeight;
      }
    }
    bottomRef.current?.scrollIntoView?.({
      behavior,
      block: 'end',
    });
  };

  // Whenever entering/opening a conversation, immediately jump to the latest message at the bottom
  useIsomorphicLayoutEffect(() => {
    if (prevConvIdRef.current !== conversationId) {
      prevConvIdRef.current = conversationId;
      prevCountRef.current = messages.length;
      scrollToLatest('auto');

      const raf = window.requestAnimationFrame(() => scrollToLatest('auto'));
      const timer = window.setTimeout(() => scrollToLatest('auto'), 90);
      return () => {
        window.cancelAnimationFrame(raf);
        window.clearTimeout(timer);
      };
    }
  }, [conversationId, messages.length]);

  // Whenever new messages arrive or sending state starts, scroll down to the latest message
  useEffect(() => {
    if (messages.length !== prevCountRef.current || isSending) {
      prevCountRef.current = messages.length;
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      const behavior: ScrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

      scrollToLatest(behavior);
      const timer = window.setTimeout(() => scrollToLatest(behavior), 80);
      return () => window.clearTimeout(timer);
    }
  }, [messages.length, isSending]);

  const lastAssistantId = [...messages]
    .reverse()
    .find((m) => m.role === 'assistant')?.id;

  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 py-6 sm:px-6 sm:py-8">
      {messages.map((msg, idx) => {
        const isLastItem = idx === messages.length - 1;
        return (
          <div key={msg.id} ref={isLastItem ? latestMessageRef : undefined}>
            {msg.role === 'user' ? (
              <UserMessage text={msg.text} />
            ) : (
              <AssistantMessage
                message={msg}
                isLatest={!isSending && msg.id === lastAssistantId}
                onSelectFollowUp={onSelectFollowUp}
              />
            )}
          </div>
        );
      })}

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
