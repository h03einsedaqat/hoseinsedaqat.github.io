'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export function TopProgressBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);
  const [progress, setProgress] = useState(0);

  const prevPathnameRef = useRef(pathname);
  const trickleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const safetyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (trickleTimerRef.current) {
      clearInterval(trickleTimerRef.current);
      trickleTimerRef.current = null;
    }
    if (fadeTimerRef.current) {
      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const completeBar = useCallback(() => {
    clearTimers();
    setFading(false);
    setProgress(100);

    fadeTimerRef.current = setTimeout(() => {
      setFading(true);
    }, 180);

    finishTimerRef.current = setTimeout(() => {
      setVisible(false);
      setFading(false);
      setProgress(0);
    }, 360);
  }, [clearTimers]);

  const startBar = useCallback(() => {
    clearTimers();
    setFading(false);
    setVisible(true);
    setProgress(28);

    trickleTimerRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 86) return prev;
        return prev + Math.max(2, (88 - prev) * 0.18);
      });
    }, 100);

    safetyTimerRef.current = setTimeout(() => {
      completeBar();
    }, 4500);
  }, [clearTimers, completeBar]);

  // Listen in capture phase so we catch Next.js <Link> clicks before Link calls e.preventDefault(),
  // while explicitly ignoring screenshot carousel controls and non-navigation buttons.
  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const el = e.target instanceof Element ? e.target : null;
      if (!el) return;
      if (el.closest('[data-no-progress]')) {
        return;
      }
      const target = el.closest('a');
      if (!target) return;
      const nestedButton = el.closest('button');
      if (nestedButton && target.contains(nestedButton)) {
        return;
      }
      const href = target.getAttribute('href');
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.target === '_blank' ||
        target.hasAttribute('download')
      ) {
        return;
      }
      try {
        const nextUrl = new URL(href, window.location.origin);
        const normalize = (p: string) => (p === '/' ? '/' : p.replace(/\/+$/, ''));
        if (
          nextUrl.origin === window.location.origin &&
          normalize(nextUrl.pathname) !== normalize(window.location.pathname)
        ) {
          startBar();
        }
      } catch {
        // Ignore malformed URLs
      }
    };

    const onCustomStart = () => startBar();

    document.addEventListener('click', onDocumentClick, true);
    window.addEventListener('hs:route-start', onCustomStart);
    return () => {
      document.removeEventListener('click', onDocumentClick, true);
      window.removeEventListener('hs:route-start', onCustomStart);
      clearTimers();
    };
  }, [startBar, clearTimers]);

  // Complete bar whenever pathname finishes updating
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setVisible(true);
      completeBar();
    }
  }, [pathname, completeBar]);

  if (!visible) return null;

  return (
    <div
      role="progressbar"
      aria-label="Page loading"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-[3px] overflow-hidden print:hidden"
    >
      <div
        className="h-full bg-accent shadow-[0_0_10px_var(--accent)] transition-[width,opacity] duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: fading ? 0 : 1,
        }}
      />
    </div>
  );
}
