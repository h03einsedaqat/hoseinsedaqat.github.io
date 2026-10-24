import type { Conversation, Locale, Theme } from '@/types/portfolio';

const KEYS = {
  CONVERSATIONS: 'hs-portfolio-conversations-v1',
  ACTIVE_CONVERSATION_ID: 'hs-portfolio-active-chat-v1',
  THEME: 'hs-theme',
  LOCALE: 'hs-locale',
  SIDEBAR_COLLAPSED: 'hs-sidebar-collapsed',
} as const;

function canUseStorage(): boolean {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';
}

export function loadConversations(): Conversation[] {
  if (!canUseStorage()) return [];
  try {
    const raw = window.localStorage.getItem(KEYS.CONVERSATIONS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is Conversation =>
        Boolean(item && typeof item.id === 'string' && Array.isArray(item.messages))
    );
  } catch {
    return [];
  }
}

export function saveConversations(conversations: Conversation[]): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(KEYS.CONVERSATIONS, JSON.stringify(conversations));
  } catch {
    // Ignore storage quota errors gracefully
  }
}

export function loadActiveConversationId(): string | null {
  if (!canUseStorage()) return null;
  try {
    return window.localStorage.getItem(KEYS.ACTIVE_CONVERSATION_ID);
  } catch {
    return null;
  }
}

export function saveActiveConversationId(id: string | null): void {
  if (!canUseStorage()) return;
  try {
    if (id) {
      window.localStorage.setItem(KEYS.ACTIVE_CONVERSATION_ID, id);
    } else {
      window.localStorage.removeItem(KEYS.ACTIVE_CONVERSATION_ID);
    }
  } catch {
    // Ignore storage errors
  }
}

export function loadStoredTheme(): Theme | null {
  if (!canUseStorage()) return null;
  try {
    const val = window.localStorage.getItem(KEYS.THEME);
    return val === 'dark' || val === 'light' ? val : null;
  } catch {
    return null;
  }
}

export function saveStoredTheme(theme: Theme): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(KEYS.THEME, theme);
  } catch {
    // Ignore
  }
}

export function loadStoredLocale(): Locale | null {
  if (!canUseStorage()) return null;
  try {
    const val = window.localStorage.getItem(KEYS.LOCALE);
    return val === 'en' || val === 'fa' ? val : null;
  } catch {
    return null;
  }
}

export function saveStoredLocale(locale: Locale): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(KEYS.LOCALE, locale);
  } catch {
    // Ignore
  }
}

export function loadSidebarCollapsed(): boolean {
  if (!canUseStorage()) return false;
  try {
    return window.localStorage.getItem(KEYS.SIDEBAR_COLLAPSED) === 'true';
  } catch {
    return false;
  }
}

export function saveSidebarCollapsed(collapsed: boolean): void {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(KEYS.SIDEBAR_COLLAPSED, String(collapsed));
  } catch {
    // Ignore
  }
}
