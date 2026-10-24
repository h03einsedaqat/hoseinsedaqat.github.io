'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  Briefcase,
  Cpu,
  FileText,
  FolderGit2,
  GraduationCap,
  Layers,
  Loader2,
  Mail,
  User,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { curatedProjects, getFeaturedProjects } from '@/data/projects';
import { cn, tText } from '@/lib/utils';

interface MessageComposerProps {
  onSend: (text: string) => Promise<void> | void;
  disabled?: boolean;
}

interface ComposerSuggestion {
  id: string;
  group: 'sections' | 'projects';
  title: string;
  subtitle: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export function MessageComposer({ onSend, disabled = false }: MessageComposerProps) {
  const { locale, isRTL, ui } = useLanguage();
  const router = useRouter();
  const DirectionalArrow = isRTL ? ArrowUpLeft : ArrowUpRight;

  const [value, setValue] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
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

  // Global Ctrl+K / Cmd+K focuses the main composer & opens suggestions
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        textareaRef.current?.focus();
        setSuggestionsOpen(true);
        setHighlightedIndex(0);
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  // Support auto-opening when navigated via Ctrl+K from another page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem('hs-open-composer-k') === '1') {
      window.sessionStorage.removeItem('hs-open-composer-k');
      textareaRef.current?.focus();
      setSuggestionsOpen(true);
      setHighlightedIndex(0);
    }
  }, []);

  // Dismiss suggestions when clicking outside
  useEffect(() => {
    if (!suggestionsOpen) return;
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        wrapperRef.current &&
        e.target instanceof Node &&
        !wrapperRef.current.contains(e.target)
      ) {
        setSuggestionsOpen(false);
        setHighlightedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [suggestionsOpen]);

  const sectionItems = useMemo(
    () => [
      {
        id: 'sec-about',
        href: '/about',
        title: ui.navAbout,
        subtitle:
          locale === 'fa'
            ? 'بیوگرافی، تخصص‌ها و اصول مهندسی'
            : 'Bio, specializations & principles',
        keywords: 'about profile bio معرفی درباره من پروفایل بیوگرافی',
        icon: User,
      },
      {
        id: 'sec-experience',
        href: '/experience',
        title: ui.navExperience,
        subtitle:
          locale === 'fa'
            ? 'پی‌استار (Paystar) و مسیر شغلی'
            : 'Paystar FinTech & career history',
        keywords: 'experience work job career paystar سوابق کاری شغلی تجربه پی استار شرکت',
        icon: Briefcase,
      },
      {
        id: 'sec-projects',
        href: '/projects',
        title: ui.navProjects,
        subtitle:
          locale === 'fa'
            ? '۱۲ پروژه منتخب و مخازن گیت‌هاب'
            : '12 curated apps & GitHub repos',
        keywords: 'projects portfolio github erp پروژه ها نمونه کار گیت هاب',
        icon: FolderGit2,
      },
      {
        id: 'sec-skills',
        href: '/skills',
        title: ui.navSkills,
        subtitle:
          locale === 'fa'
            ? 'React، Next.js، Vue، TS و Node.js'
            : 'React, Next.js, Vue, TS & Node.js',
        keywords:
          'skills stack tech react next vue typescript node مهارت ها تکنولوژی فنی',
        icon: Cpu,
      },
      {
        id: 'sec-education',
        href: '/education',
        title: ui.navEducation,
        subtitle:
          locale === 'fa'
            ? 'مدرک مهندسی صنایع و ۶ گواهینامه تخصصی'
            : 'Industrial Engineering & 6 certifications',
        keywords:
          'education university degree certifications sololearn تحصیلات دانشگاه مدرک گواهینامه',
        icon: GraduationCap,
      },
      {
        id: 'sec-contact',
        href: '/contact',
        title: ui.navContact,
        subtitle:
          locale === 'fa'
            ? 'ایمیل مستقیم، لینکدین و گیت‌هاب'
            : 'Direct email, LinkedIn & GitHub',
        keywords: 'contact email linkedin hire تماس ارتباط ایمیل لینکدین همکاری استخدام',
        icon: Mail,
      },
      {
        id: 'sec-resume',
        href: '/resume',
        title: ui.navResume,
        subtitle:
          locale === 'fa'
            ? 'مشاهده و دانلود رزومه PDF'
            : 'Full resume & PDF download',
        keywords: 'resume cv pdf download رزومه پی دی اف دانلود سی وی',
        icon: FileText,
      },
    ],
    [locale, ui]
  );

  const filteredSuggestions = useMemo(() => {
    const q = value.trim().toLowerCase();

    const sections: ComposerSuggestion[] = sectionItems
      .filter((sec) => {
        if (!q) return true;
        return `${sec.title} ${sec.subtitle} ${sec.keywords}`.toLowerCase().includes(q);
      })
      .map((sec) => ({
        id: sec.id,
        group: 'sections',
        title: sec.title,
        subtitle: sec.subtitle,
        href: sec.href,
        icon: sec.icon,
      }));

    const baseProjects = q ? curatedProjects : getFeaturedProjects().slice(0, 4);
    const projects: ComposerSuggestion[] = baseProjects
      .filter((proj) => {
        if (!q) return true;
        return [
          proj.name.en,
          proj.name.fa,
          proj.tagline.en,
          proj.tagline.fa,
          ...proj.technologies,
        ]
          .join(' ')
          .toLowerCase()
          .includes(q);
      })
      .slice(0, 4)
      .map((proj) => ({
        id: `proj-${proj.slug}`,
        group: 'projects',
        title: tText(proj.name, locale),
        subtitle: proj.technologies.slice(0, 3).join(' · '),
        href: `/projects/${proj.slug}`,
        icon: Layers,
      }));

    return {
      sections,
      projects,
      flat: [...sections, ...projects],
    };
  }, [value, sectionItems, locale]);

  useEffect(() => {
    setHighlightedIndex(-1);
  }, [value]);

  const selectSuggestion = (href: string) => {
    setSuggestionsOpen(false);
    setHighlightedIndex(-1);
    setValue('');
    if (typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') !== href.replace(/\/+$/, '')) {
      window.dispatchEvent(new Event('hs:route-start'));
    }
    router.push(href);
  };

  const canSend = value.trim().length > 0 && !disabled;

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    setSuggestionsOpen(false);
    setHighlightedIndex(-1);
    setValue('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    await onSend(trimmed);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const total = filteredSuggestions.flat.length;

    if (e.key === 'Escape' && suggestionsOpen) {
      e.preventDefault();
      setSuggestionsOpen(false);
      setHighlightedIndex(-1);
      return;
    }

    if (suggestionsOpen && total > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % total);
        return;
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setHighlightedIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
        return;
      }
      if (
        e.key === 'Enter' &&
        !e.shiftKey &&
        !e.nativeEvent.isComposing &&
        highlightedIndex >= 0 &&
        filteredSuggestions.flat[highlightedIndex]
      ) {
        e.preventDefault();
        selectSuggestion(filteredSuggestions.flat[highlightedIndex].href);
        return;
      }
    }

    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
      e.preventDefault();
      if (canSend) {
        void handleSubmit();
      }
    }
  };

  const showPopover = suggestionsOpen && filteredSuggestions.flat.length > 0;
  let runningIdx = -1;

  return (
    <div className="shrink-0 bg-gradient-to-t from-canvas via-canvas to-transparent px-3 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 print:hidden">
      <div ref={wrapperRef} className="relative mx-auto w-full max-w-3xl">
        {/* Interactive Section & Project Suggestions Popover */}
        {showPopover && (
          <div
            id="composer-suggestions-menu"
            role="listbox"
            aria-label={ui.searchSuggestionsSectionsHeading}
            className="absolute start-0 end-0 bottom-full z-40 mb-2.5 max-h-[340px] overflow-y-auto rounded-2xl border border-line-strong bg-elevated p-2.5 shadow-2xl animate-fade-in"
          >
            {/* Popover Header */}
            <div className="mb-1.5 flex items-center justify-between gap-2 px-1.5">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted">
                {ui.searchSuggestionsSectionsHeading}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSuggestionsOpen(false);
                  setHighlightedIndex(-1);
                }}
                aria-label={ui.cancel}
                className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] text-ink-muted transition-colors hover:bg-hover hover:text-ink"
              >
                <span className="hidden sm:inline">Esc</span>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Sections Grid */}
            {filteredSuggestions.sections.length > 0 && (
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {filteredSuggestions.sections.map((item) => {
                  runningIdx += 1;
                  const idx = runningIdx;
                  const isHighlighted = idx === highlightedIndex;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="option"
                      aria-selected={isHighlighted}
                      onMouseEnter={() => setHighlightedIndex(idx)}
                      onClick={() => selectSuggestion(item.href)}
                      className={cn(
                        'flex items-center justify-between gap-2.5 rounded-xl px-2.5 py-2 text-start transition-colors',
                        isHighlighted
                          ? 'bg-hover text-ink'
                          : 'text-ink-secondary hover:bg-hover hover:text-ink'
                      )}
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-line bg-canvas text-ink-muted">
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-xs font-semibold text-ink">
                            {item.title}
                          </span>
                          <span className="block truncate text-[11px] text-ink-muted">
                            {item.subtitle}
                          </span>
                        </span>
                      </span>
                      <DirectionalArrow
                        className="h-3.5 w-3.5 shrink-0 text-ink-muted"
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            )}

            {/* Featured / Matching Projects */}
            {filteredSuggestions.projects.length > 0 && (
              <div
                className={cn(
                  'space-y-1',
                  filteredSuggestions.sections.length > 0 && 'mt-2 border-t border-line pt-2'
                )}
              >
                <div className="px-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
                  {ui.searchSuggestionsProjectsHeading}
                </div>
                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {filteredSuggestions.projects.map((proj) => {
                    runningIdx += 1;
                    const idx = runningIdx;
                    const isHighlighted = idx === highlightedIndex;
                    const Icon = proj.icon;
                    return (
                      <button
                        key={proj.id}
                        type="button"
                        role="option"
                        aria-selected={isHighlighted}
                        onMouseEnter={() => setHighlightedIndex(idx)}
                        onClick={() => selectSuggestion(proj.href)}
                        className={cn(
                          'flex items-center justify-between gap-2.5 rounded-xl px-2.5 py-1.5 text-start transition-colors',
                          isHighlighted
                            ? 'bg-hover text-ink'
                            : 'text-ink-secondary hover:bg-hover hover:text-ink'
                        )}
                      >
                        <span className="flex min-w-0 items-center gap-2">
                          <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-line bg-canvas text-ink-muted">
                            <Icon className="h-3 w-3" />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-xs font-medium text-ink">
                              {proj.title}
                            </span>
                            <span
                              dir="ltr"
                              className="block truncate text-[10px] text-ink-muted"
                            >
                              {proj.subtitle}
                            </span>
                          </span>
                        </span>
                        <DirectionalArrow
                          className="h-3 w-3 shrink-0 text-ink-muted"
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

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
            onFocus={() => setSuggestionsOpen(true)}
            onClick={() => setSuggestionsOpen(true)}
            onChange={(e) => {
              setValue(e.target.value);
              if (!suggestionsOpen) setSuggestionsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder={ui.composerPlaceholder}
            className="max-h-[180px] min-h-[26px] flex-1 resize-none bg-transparent py-1 text-sm leading-relaxed text-ink placeholder:text-ink-muted focus:outline-none sm:text-[15px]"
          />

          {!value && (
            <button
              type="button"
              onClick={() => {
                textareaRef.current?.focus();
                setSuggestionsOpen((prev) => !prev);
              }}
              title="Ctrl + K"
              className="mb-0.5 hidden shrink-0 items-center gap-1 rounded-lg border border-line bg-elevated px-2 py-1 font-sans text-[11px] font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink sm:inline-flex"
            >
              <span dir="ltr">Ctrl K</span>
            </button>
          )}

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
      </div>
    </div>
  );
}
