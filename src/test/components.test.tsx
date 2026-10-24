import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { MessageComposer } from '@/components/chat/MessageComposer';
import { RecommendationCards } from '@/components/chat/RecommendationCards';
import { LanguageSwitcher } from '@/components/layout/LanguageSwitcher';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';

function ThemeTestHarness() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button type="button" onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}

describe('Interactive UI Components', () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    document.documentElement.classList.remove('dark');
  });

  it('MessageComposer disables empty send, submits on Enter, and inserts newline on Shift+Enter', () => {
    const onSend = vi.fn();
    render(
      <LanguageProvider>
        <MessageComposer onSend={onSend} />
      </LanguageProvider>
    );

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;
    const sendButton = screen.getByRole('button', { name: /send message/i });

    expect(sendButton).toBeDisabled();

    // Whitespace-only remains disabled
    fireEvent.change(textarea, { target: { value: '   ' } });
    expect(sendButton).toBeDisabled();

    // Valid text enables send
    fireEvent.change(textarea, { target: { value: 'Tell me about Rahkar ERP' } });
    expect(sendButton).not.toBeDisabled();

    // Shift + Enter does NOT submit
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true });
    expect(onSend).not.toHaveBeenCalled();

    // Plain Enter submits and clears input
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false });
    expect(onSend).toHaveBeenCalledTimes(1);
    expect(onSend).toHaveBeenCalledWith('Tell me about Rahkar ERP');
    expect(textarea.value).toBe('');
  });

  it('LanguageSwitcher updates document lang & RTL/LTR direction and persists preference', () => {
    render(
      <LanguageProvider>
        <LanguageSwitcher />
      </LanguageProvider>
    );

    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');

    const faBtn = screen.getByRole('button', { name: 'فارسی' });
    fireEvent.click(faBtn);

    expect(document.documentElement.lang).toBe('fa');
    expect(document.documentElement.dir).toBe('rtl');
    expect(window.localStorage.getItem('hs-locale')).toBe('fa');

    const enBtn = screen.getByRole('button', { name: 'EN' });
    fireEvent.click(enBtn);

    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    expect(window.localStorage.getItem('hs-locale')).toBe('en');
  });

  it('ThemeProvider toggles dark and light modes and persists to localStorage', () => {
    render(
      <ThemeProvider>
        <ThemeTestHarness />
      </ThemeProvider>
    );

    const btn = screen.getByRole('button');
    expect(document.documentElement.classList.contains('dark')).toBe(true);

    fireEvent.click(btn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(window.localStorage.getItem('hs-theme')).toBe('light');

    fireEvent.click(btn);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(window.localStorage.getItem('hs-theme')).toBe('dark');
  });

  it('RecommendationCards triggers prompt submission on click', () => {
    const onSelect = vi.fn();
    render(
      <LanguageProvider>
        <RecommendationCards onSelectPrompt={onSelect} />
      </LanguageProvider>
    );

    const card = screen.getByRole('button', { name: /Tell me about Rahkar ERP/i });
    fireEvent.click(card);
    expect(onSelect).toHaveBeenCalledWith('Tell me about Rahkar ERP');
  });
});
