import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { BilingualList, BilingualText, Locale } from '@/types/portfolio';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function tText(text: BilingualText, locale: Locale): string {
  return text[locale] || text.en;
}

export function tList(list: BilingualList, locale: Locale): string[] {
  return list[locale] || list.en;
}

export function generateConversationTitle(firstMessage: string, locale: Locale): string {
  const cleaned = firstMessage.replace(/\s+/g, ' ').trim();
  if (!cleaned) {
    return locale === 'fa' ? 'گفت‌وگوی جدید' : 'New Conversation';
  }
  if (cleaned.length <= 42) {
    return cleaned;
  }
  return `${cleaned.slice(0, 40).trim()}…`;
}

export function formatRelativeDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return '';

  try {
    return new Intl.DateTimeFormat(locale === 'fa' ? 'fa-IR' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}

export async function copyToClipboard(value: string): Promise<boolean> {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
    if (typeof document !== 'undefined') {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(textarea);
      return ok;
    }
    return false;
  } catch {
    return false;
  }
}

export function createId(prefix = 'id'): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}
