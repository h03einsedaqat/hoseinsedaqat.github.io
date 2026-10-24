'use client';

import React, { useEffect, useState } from 'react';
import { Check, Languages, Moon, Settings, Sun, Trash2, X } from 'lucide-react';
import { useChat } from '@/context/ChatContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
  const { theme, setTheme } = useTheme();
  const { locale, setLocale, ui } = useLanguage();
  const { conversations, clearAllConversations } = useChat();
  const [confirmClear, setConfirmClear] = useState(false);

  useEffect(() => {
    if (!open) {
      setConfirmClear(false);
      return;
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 animate-fade-in print:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-modal-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Panel */}
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-line-strong bg-elevated text-ink shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-line px-5 py-4">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-line bg-canvas text-ink-secondary">
              <Settings className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <h2
                id="settings-modal-title"
                className="text-base font-semibold tracking-tight text-ink"
              >
                {ui.settingsLabel}
              </h2>
              <p className="mt-0.5 text-xs text-ink-muted">{ui.settingsSubtitle}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={ui.closeSettings}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-hover hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="divide-y divide-line px-5 py-2">
          {/* 1. Theme / Appearance */}
          <div className="space-y-3 py-4">
            <div>
              <div className="text-sm font-semibold text-ink">
                {ui.appearanceSectionTitle}
              </div>
              <p className="mt-0.5 text-xs text-ink-muted">{ui.appearanceSectionDesc}</p>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* Dark Mode Option */}
              <button
                type="button"
                onClick={() => setTheme('dark')}
                aria-pressed={theme === 'dark'}
                className={cn(
                  'flex items-center justify-between gap-2 rounded-xl border p-3 text-start transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                  theme === 'dark'
                    ? 'border-accent bg-accent-soft text-ink'
                    : 'border-line bg-canvas/70 text-ink-secondary hover:border-line-strong hover:bg-hover hover:text-ink'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-black text-neutral-100">
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold">{ui.themeDark}</span>
                </span>
                {theme === 'dark' && (
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                )}
              </button>

              {/* Light Mode Option */}
              <button
                type="button"
                onClick={() => setTheme('light')}
                aria-pressed={theme === 'light'}
                className={cn(
                  'flex items-center justify-between gap-2 rounded-xl border p-3 text-start transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                  theme === 'light'
                    ? 'border-accent bg-accent-soft text-ink'
                    : 'border-line bg-canvas/70 text-ink-secondary hover:border-line-strong hover:bg-hover hover:text-ink'
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neutral-300 bg-white text-amber-500">
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold">{ui.themeLight}</span>
                </span>
                {theme === 'light' && (
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* 2. Language & Direction */}
          <div className="space-y-3 py-4">
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-ink">
                  <Languages className="h-4 w-4 text-ink-muted" aria-hidden="true" />
                  <span>{ui.languageSectionTitle}</span>
                </div>
                <p className="mt-0.5 text-xs text-ink-muted">{ui.languageSectionDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {/* English (LTR) */}
              <button
                type="button"
                onClick={() => setLocale('en')}
                aria-pressed={locale === 'en'}
                className={cn(
                  'flex items-center justify-between gap-2 rounded-xl border p-3 text-start transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                  locale === 'en'
                    ? 'border-accent bg-accent-soft text-ink'
                    : 'border-line bg-canvas/70 text-ink-secondary hover:border-line-strong hover:bg-hover hover:text-ink'
                )}
              >
                <span className="min-w-0">
                  <span dir="ltr" className="block text-xs font-semibold text-ink">
                    English
                  </span>
                  <span className="mt-0.5 block truncate text-[11px] text-ink-muted">
                    {ui.englishOptionDesc}
                  </span>
                </span>
                {locale === 'en' && (
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                )}
              </button>

              {/* Persian (RTL) */}
              <button
                type="button"
                onClick={() => setLocale('fa')}
                aria-pressed={locale === 'fa'}
                className={cn(
                  'flex items-center justify-between gap-2 rounded-xl border p-3 text-start transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30',
                  locale === 'fa'
                    ? 'border-accent bg-accent-soft text-ink'
                    : 'border-line bg-canvas/70 text-ink-secondary hover:border-line-strong hover:bg-hover hover:text-ink'
                )}
              >
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-ink">فارسی</span>
                  <span className="mt-0.5 block truncate text-[11px] text-ink-muted">
                    {ui.persianOptionDesc}
                  </span>
                </span>
                {locale === 'fa' && (
                  <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* 3. Saved Chat History Management */}
          <div className="flex flex-wrap items-center justify-between gap-3 py-4">
            <div className="min-w-0 flex-1">
              <div className="text-sm font-semibold text-ink">
                {ui.chatDataSectionTitle}
              </div>
              <p className="mt-0.5 text-xs text-ink-muted">
                {ui.chatDataSectionDesc} ({conversations.length})
              </p>
            </div>

            {conversations.length > 0 && (
              <div>
                {!confirmClear ? (
                  <button
                    type="button"
                    onClick={() => setConfirmClear(true)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-canvas px-3 py-1.5 text-xs font-medium text-ink-secondary transition-colors hover:border-red-500/40 hover:bg-red-500/10 hover:text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{ui.clearAllChats}</span>
                  </button>
                ) : (
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        clearAllConversations();
                        setConfirmClear(false);
                      }}
                      className="inline-flex items-center gap-1 rounded-xl bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
                    >
                      <Check className="h-3.5 w-3.5" />
                      <span>{ui.confirmClearAll}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setConfirmClear(false)}
                      className="rounded-xl border border-line bg-canvas px-2.5 py-1.5 text-xs text-ink-muted hover:bg-hover hover:text-ink"
                    >
                      {ui.cancel}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-line bg-canvas/40 px-5 py-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-ink px-4 py-2 text-xs font-semibold text-canvas transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            {ui.doneLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
