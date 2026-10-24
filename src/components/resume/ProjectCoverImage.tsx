'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, FolderGit2, Loader2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn, tText } from '@/lib/utils';
import type { BilingualText } from '@/types/portfolio';

const README_IMG_CACHE_PREFIX = 'hs-readme-img-v1:';
const README_IMG_TTL_MS = 3.5 * 60 * 1000;

interface ScreenshotSlide {
  url: string;
  label: BilingualText;
}

interface ProjectCoverImageProps {
  name: string;
  href?: string;
  imageUrl: string;
  fallbackImageUrl?: string;
  readmeImageRepo?: string;
  screenshots?: ScreenshotSlide[];
  showThumbnails?: boolean;
  className?: string;
}

export function ProjectCoverImage({
  name,
  href,
  imageUrl,
  fallbackImageUrl,
  readmeImageRepo,
  screenshots,
  showThumbnails = false,
  className,
}: ProjectCoverImageProps) {
  const { locale } = useLanguage();
  const hasGallery = Boolean(screenshots && screenshots.length > 1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [src, setSrc] = useState<string>(
    screenshots && screenshots.length > 0 ? screenshots[0].url : imageUrl
  );
  const [loadedUrls, setLoadedUrls] = useState<Record<string, boolean>>({});
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const markLoaded = (url: string) => {
    setLoadedUrls((prev) => (prev[url] ? prev : { ...prev, [url]: true }));
  };

  useEffect(() => {
    setActiveIndex(0);
    setSrc(screenshots && screenshots.length > 0 ? screenshots[0].url : imageUrl);
    setFailed(false);
  }, [imageUrl, screenshots]);

  useEffect(() => {
    if (screenshots && screenshots[activeIndex]) {
      setSrc(screenshots[activeIndex].url);
      setFailed(false);
    }
  }, [activeIndex, screenshots]);

  // If browser already cached the image synchronously before hydration/effect, mark it loaded immediately
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      markLoaded(src);
    }
  }, [src]);

  useEffect(() => {
    if (hasGallery || !readmeImageRepo || typeof window === 'undefined') return;

    const cacheKey = `${README_IMG_CACHE_PREFIX}${readmeImageRepo}`;
    try {
      const raw = window.sessionStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw) as { ts: number; url: string };
        if (parsed.url && Date.now() - parsed.ts < README_IMG_TTL_MS) {
          setSrc(parsed.url);
          setFailed(false);
          return;
        }
      }
    } catch {
      // Ignore storage errors
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://api.github.com/repos/${readmeImageRepo}/readme`, {
          headers: { Accept: 'application/vnd.github.html' },
        });
        if (!res.ok) return;
        const html = await res.text();
        if (!html || cancelled) return;

        const matches = [...html.matchAll(/<img[^>]+src="([^"]+)"/gi)]
          .map((m) => m[1].replace(/&amp;/g, '&'))
          .filter(
            (u) =>
              !u.includes('shields.io') &&
              !u.includes('badge') &&
              (u.includes('githubusercontent.com') || u.startsWith('https://'))
          );

        if (matches[0] && !cancelled) {
          setSrc(matches[0]);
          setFailed(false);
          try {
            window.sessionStorage.setItem(
              cacheKey,
              JSON.stringify({ ts: Date.now(), url: matches[0] })
            );
          } catch {
            // Ignore quota errors
          }
        }
      } catch {
        // Keep local fallback image silently
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [hasGallery, readmeImageRepo]);

  const goPrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!screenshots) return;
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!screenshots) return;
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  if (failed && !fallbackImageUrl) {
    const fallbackBox = (
      <div
        className={cn(
          'flex aspect-[16/9] w-full items-center justify-center bg-canvas/80 text-ink-muted',
          className
        )}
      >
        <div className="flex items-center gap-2 text-xs font-medium">
          <FolderGit2 className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>{name}</span>
        </div>
      </div>
    );
    return href ? (
      <Link
        href={href}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
      >
        {fallbackBox}
      </Link>
    ) : (
      fallbackBox
    );
  }

  const isLoading = !failed && !loadedUrls[src];

  const activeCaption =
    hasGallery && screenshots?.[activeIndex]
      ? tText(screenshots[activeIndex].label, locale)
      : null;

  const imageElement = (
    <img
      ref={imgRef}
      src={src}
      alt={activeCaption ? `${name} — ${activeCaption}` : name}
      loading="lazy"
      onLoad={() => markLoaded(src)}
      onError={() => {
        if (fallbackImageUrl && src !== fallbackImageUrl) {
          setSrc(fallbackImageUrl);
        } else {
          setFailed(true);
        }
      }}
      className={cn(
        'h-full w-full object-cover object-top transition-[opacity,transform] duration-300 group-hover:scale-[1.015]',
        isLoading ? 'opacity-0' : 'opacity-100'
      )}
    />
  );

  return (
    <div className={cn('w-full', className)}>
      <div className="group/cover relative aspect-[16/9] w-full overflow-hidden bg-[#0a0a0a]">
        {isLoading && (
          <div
            role="status"
            aria-label={locale === 'fa' ? 'در حال بارگذاری تصویر' : 'Loading preview'}
            className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center gap-2 bg-elevated/90 animate-pulse"
          >
            <Loader2 className="h-5 w-5 animate-spin text-accent" aria-hidden="true" />
            <span className="text-[11px] font-medium text-ink-muted">
              {locale === 'fa' ? 'در حال بارگذاری تصویر…' : 'Loading preview…'}
            </span>
          </div>
        )}

        {href ? (
          <Link
            href={href}
            aria-label={name}
            className="block h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30"
          >
            {imageElement}
          </Link>
        ) : (
          imageElement
        )}

        {hasGallery && screenshots && (
          <>
            <button
              type="button"
              data-no-progress="true"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-2.5 top-1/2 z-10 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/90 group-hover/cover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              data-no-progress="true"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-2.5 top-1/2 z-10 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white opacity-0 backdrop-blur-sm transition-opacity hover:bg-black/90 group-hover/cover:opacity-100 focus-visible:opacity-100"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {!showThumbnails && (
              <div className="pointer-events-none absolute inset-x-0 bottom-2.5 z-10 flex items-center justify-center">
                <div className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 backdrop-blur-sm">
                  {screenshots.map((shot, idx) => (
                    <button
                      key={shot.url}
                      type="button"
                      data-no-progress="true"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setActiveIndex(idx);
                      }}
                      aria-label={tText(shot.label, locale)}
                      className={cn(
                        'h-1.5 rounded-full transition-all',
                        idx === activeIndex
                          ? 'w-4 bg-accent'
                          : 'w-1.5 bg-white/55 hover:bg-white/90'
                      )}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {showThumbnails && hasGallery && screenshots && (
        <div className="flex flex-wrap items-center gap-2 border-t border-line bg-canvas/60 px-4 py-2.5">
          {screenshots.map((shot, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={shot.url}
                type="button"
                data-no-progress="true"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  'inline-flex items-center gap-2 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors',
                  active
                    ? 'border-accent/50 bg-accent-soft text-accent'
                    : 'border-line bg-elevated text-ink-secondary hover:bg-hover hover:text-ink'
                )}
              >
                <img
                  src={shot.url}
                  alt=""
                  aria-hidden="true"
                  className="h-4 w-7 rounded object-cover object-top"
                />
                <span>{tText(shot.label, locale)}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
