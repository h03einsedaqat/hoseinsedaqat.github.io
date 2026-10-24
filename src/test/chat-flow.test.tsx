import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ChatWorkspace } from '@/components/chat/ChatWorkspace';
import { Sidebar } from '@/components/layout/Sidebar';
import { ChatProvider } from '@/context/ChatContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

describe('End-to-End Conversational Portfolio Flow', () => {
  beforeEach(() => {
    window.localStorage.clear();
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ mode: 'local' }),
    }) as unknown as typeof fetch;
  });

  it('starts a chat from recommendation, stores conversation in sidebar, creates New Chat, reopens and deletes chat', async () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <ChatProvider>
            <div className="flex">
              <Sidebar />
              <ChatWorkspace />
            </div>
          </ChatProvider>
        </LanguageProvider>
      </ThemeProvider>
    );

    // Welcome screen greeting is visible
    expect(
      screen.getByText(/Hi, I'm Hosein Sedaqat\. Explore my work/i)
    ).toBeInTheDocument();

    // Click a recommendation card
    const rahkarPromptBtn = screen.getByRole('button', {
      name: /Tell me about Rahkar ERP/i,
    });
    fireEvent.click(rahkarPromptBtn);

    // Assistant responds with Rahkar ERP architectural content & starter cards step aside
    await waitFor(() => {
      expect(
        screen.getByText(/16 operational & financial modules/i)
      ).toBeInTheDocument();
    });

    expect(
      screen.queryByText(/Suggested questions for recruiters/i)
    ).not.toBeInTheDocument();

    // Conversation appears in localStorage
    const stored = JSON.parse(
      window.localStorage.getItem('hs-portfolio-conversations-v1') || '[]'
    );
    expect(stored).toHaveLength(1);
    expect(stored[0].title).toBe('Tell me about Rahkar ERP');

    // Click New Chat in Sidebar -> returns to Welcome screen
    const newChatBtn = screen.getByRole('button', { name: /New Chat/i });
    fireEvent.click(newChatBtn);

    expect(
      screen.getByText(/Hi, I'm Hosein Sedaqat\. Explore my work/i)
    ).toBeInTheDocument();

    // Reopen previous conversation from Sidebar history
    const savedHistoryItem = screen.getByRole('button', {
      name: 'Tell me about Rahkar ERP',
    });
    fireEvent.click(savedHistoryItem);

    expect(
      screen.getByText(/16 operational & financial modules/i)
    ).toBeInTheDocument();

    // Delete conversation
    const deleteBtn = screen.getByRole('button', {
      name: /Delete conversation: Tell me about Rahkar ERP/i,
    });
    fireEvent.click(deleteBtn);

    expect(
      screen.getByText(/Start a conversation to save history here/i)
    ).toBeInTheDocument();
  });
});
