'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { generateLocalAssistantResponse } from '@/lib/chat-engine';
import {
  loadActiveConversationId,
  loadConversations,
  loadSidebarCollapsed,
  saveActiveConversationId,
  saveConversations,
  saveSidebarCollapsed,
} from '@/lib/storage';
import { createId, generateConversationTitle } from '@/lib/utils';
import type { AssistantResponsePayload, ChatMessage, Conversation } from '@/types/portfolio';

interface ChatContextValue {
  conversations: Conversation[];
  filteredConversations: Conversation[];
  activeConversationId: string | null;
  activeConversation: Conversation | null;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSending: boolean;
  aiModeActive: boolean;
  sidebarCollapsed: boolean;
  toggleSidebarCollapsed: () => void;
  mobileDrawerOpen: boolean;
  setMobileDrawerOpen: (open: boolean) => void;
  startNewChat: () => void;
  selectConversation: (id: string) => void;
  deleteConversation: (id: string) => void;
  clearAllConversations: () => void;
  sendMessage: (rawText: string) => Promise<void>;
  askFromAnywhere: (promptText: string) => void;
}

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [aiModeActive, setAiModeActive] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const storedChats = loadConversations();
    const storedActive = loadActiveConversationId();
    const storedCollapsed = loadSidebarCollapsed();
    setConversations(storedChats);
    if (storedActive && storedChats.some((c) => c.id === storedActive)) {
      setActiveConversationId(storedActive);
    }
    setSidebarCollapsed(storedCollapsed);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    saveConversations(conversations);
  }, [conversations, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveActiveConversationId(activeConversationId);
  }, [activeConversationId, hydrated]);

  const toggleSidebarCollapsed = useCallback(() => {
    setSidebarCollapsed((prev) => {
      const next = !prev;
      saveSidebarCollapsed(next);
      return next;
    });
  }, []);

  const activeConversation = useMemo(
    () => conversations.find((c) => c.id === activeConversationId) || null,
    [conversations, activeConversationId]
  );

  const filteredConversations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return conversations;
    return conversations.filter((conv) => {
      if (conv.title.toLowerCase().includes(q)) return true;
      return conv.messages.some((m) => m.text.toLowerCase().includes(q));
    });
  }, [conversations, searchQuery]);

  const startNewChat = useCallback(() => {
    setActiveConversationId(null);
    setMobileDrawerOpen(false);
    if (pathname !== '/') {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('hs:route-start'));
      }
      router.push('/');
    }
  }, [pathname, router]);

  const selectConversation = useCallback(
    (id: string) => {
      setActiveConversationId(id);
      setMobileDrawerOpen(false);
      if (pathname !== '/') {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('hs:route-start'));
        }
        router.push('/');
      }
    },
    [pathname, router]
  );

  const deleteConversation = useCallback((id: string) => {
    setConversations((prev) => prev.filter((c) => c.id !== id));
    setActiveConversationId((prevActive) => (prevActive === id ? null : prevActive));
  }, []);

  const clearAllConversations = useCallback(() => {
    setConversations([]);
    setActiveConversationId(null);
  }, []);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const trimmed = rawText.trim();
      if (!trimmed || isSending) return;

      const now = new Date().toISOString();
      const userMsg: ChatMessage = {
        id: createId('msg-user'),
        role: 'user',
        text: trimmed,
        createdAt: now,
      };

      const existingActive =
        activeConversationId && conversations.some((c) => c.id === activeConversationId)
          ? activeConversationId
          : null;
      const targetId = existingActive ?? createId('chat');

      setConversations((prev) => {
        if (prev.some((c) => c.id === targetId)) {
          return prev
            .map((c) =>
              c.id === targetId
                ? {
                    ...c,
                    updatedAt: now,
                    messages: [...c.messages, userMsg],
                  }
                : c
            )
            .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
        }
        const newConv: Conversation = {
          id: targetId,
          title: generateConversationTitle(trimmed, locale),
          createdAt: now,
          updatedAt: now,
          messages: [userMsg],
        };
        return [newConv, ...prev];
      });

      setActiveConversationId(targetId);

      setIsSending(true);

      try {
        // Compute deterministic local Knowledge Base response first
        let payload: AssistantResponsePayload = generateLocalAssistantResponse(trimmed);

        // Optional external AI endpoint (if NEXT_PUBLIC_CHAT_API_URL is configured)
        const optionalChatEndpoint = process.env.NEXT_PUBLIC_CHAT_API_URL;
        if (optionalChatEndpoint) {
          try {
            const response = await fetch(optionalChatEndpoint, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ message: trimmed, locale }),
            });
            if (response.ok) {
              const data = (await response.json()) as {
                mode?: 'local' | 'ai';
                aiReply?: string;
              };
              if (data.mode === 'ai' && data.aiReply) {
                setAiModeActive(true);
                payload = {
                  ...payload,
                  content: {
                    en: locale === 'en' ? data.aiReply : payload.content.en,
                    fa: locale === 'fa' ? data.aiReply : payload.content.fa,
                  },
                  sourceMode: 'ai-grounded',
                };
              }
            }
          } catch {
            // Graceful local fallback when offline or unreachable
          }
        } else {
          // Brief natural UI cadence (~160ms) on static hosting (GitHub Pages)
          await new Promise((res) => setTimeout(res, 160));
        }

        const assistantNow = new Date().toISOString();
        const assistantMsg: ChatMessage = {
          id: createId('msg-assistant'),
          role: 'assistant',
          text: payload.content[locale] || payload.content.en,
          createdAt: assistantNow,
          payload,
        };

        const finalConvId = targetId;
        setConversations((prev) =>
          prev.map((c) =>
            c.id === finalConvId
              ? {
                  ...c,
                  updatedAt: assistantNow,
                  messages: [...c.messages, assistantMsg],
                }
              : c
          )
        );
      } finally {
        setIsSending(false);
      }
    },
    [activeConversationId, conversations, isSending, locale]
  );

  const askFromAnywhere = useCallback(
    (promptText: string) => {
      setMobileDrawerOpen(false);
      if (pathname !== '/') {
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new Event('hs:route-start'));
        }
        router.push('/');
      }
      // Trigger message after navigation frame
      setTimeout(() => {
        void sendMessage(promptText);
      }, 40);
    },
    [pathname, router, sendMessage]
  );

  return (
    <ChatContext.Provider
      value={{
        conversations,
        filteredConversations,
        activeConversationId,
        activeConversation,
        searchQuery,
        setSearchQuery,
        isSending,
        aiModeActive,
        sidebarCollapsed,
        toggleSidebarCollapsed,
        mobileDrawerOpen,
        setMobileDrawerOpen,
        startNewChat,
        selectConversation,
        deleteConversation,
        clearAllConversations,
        sendMessage,
        askFromAnywhere,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat(): ChatContextValue {
  const ctx = useContext(ChatContext);
  if (!ctx) {
    throw new Error('useChat must be used within ChatProvider');
  }
  return ctx;
}
