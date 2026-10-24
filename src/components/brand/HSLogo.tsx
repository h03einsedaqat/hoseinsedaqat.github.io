import React from 'react';
import { cn } from '@/lib/utils';

interface HSLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function HSLogo({ size = 'md', className }: HSLogoProps) {
  const dimensions =
    size === 'sm'
      ? 'h-7 w-7 rounded-lg text-[11px]'
      : size === 'lg'
        ? 'h-12 w-12 rounded-2xl text-base'
        : 'h-8 w-8 rounded-xl text-xs';

  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 select-none items-center justify-center border border-line-strong bg-ink font-semibold tracking-tight text-canvas shadow-subtle transition-colors',
        dimensions,
        className
      )}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[68%] w-[68%]"
      >
        {/* Geometric H */}
        <path
          d="M5.5 8.5V23.5M13.5 8.5V23.5M5.5 16H13.5"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Architectural S */}
        <path
          d="M25.5 11.2C25.5 9.6 24.1 8.5 21.8 8.5C19.4 8.5 18 9.7 18 11.5C18 13.5 19.6 14.3 22 15.1C24.5 15.9 26.2 16.9 26.2 19.3C26.2 21.8 24.4 23.5 21.6 23.5C19.1 23.5 17.6 22.3 17.4 20.6"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
