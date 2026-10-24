'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface MessageComposerProps {
  onSend: (text: string) => Promise<void> | void;
  disabled?: boolean;
}

export function MessageComposer({ onSend, disabled = false }: MessageComposerProps) {
  const { ui } = useLanguage();
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const adjustHeight = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const nextHeight = Math.min(el.scrollHeight, 180);
    el.style.height = `${nextHeight}px`;
  }, []);

  useEffect(() => {
    adjustHeight();
  }, [value, adjustHeight]);

  const canSend = value.trim().length > 0 && !disabled;

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    await onSend(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (canSend) {
        void handleSubmit();
      }
    }
  };

  return (
    <div className="shrink-0 bg-gradient-to-t from-canvas via-canvas to-transparent px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 print:hidden">
      <div className="mx-auto w-full max-w-3xl">
        <form
          onSubmit={handleSubmit}
          className="relative flex items-end gap-2 rounded-3xl border border-line-strong bg-composer px-4 py-2.5 shadow-composer transition-colors focus-within:border-ink-muted"
        >
          <label htmlFor="portfolio-chat-input" className="sr-only">
            {ui.composerPlaceholder}
          </label>
          <textarea
            id="portfolio-chat-input"
            ref={textareaRef}
            rows={1}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={ui.composerPlaceholder}
            className="max-h-[180px] min-h-[26px] flex-1 resize-none bg-transparent py-1 text-sm leading-relaxed text-ink placeholder:text-ink-muted focus:outline-none sm:text-[15px]"
          />

          <button
            type="submit"
            disabled={!canSend}
            aria-label={ui.sendMessage}
            title={ui.sendMessage}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-canvas transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
          >
            {disabled ? (
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            ) : (
              <ArrowUp className="h-4 w-4 stroke-[2.4]" aria-hidden="true" />
            )}
          </button>
        </form>

        <p className="mt-2 text-center text-[11px] leading-normal text-ink-muted">
          {ui.composerHint}
        </p>
      </div>
    </div>
  );
}
