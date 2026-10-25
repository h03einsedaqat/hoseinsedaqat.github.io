import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { MessageComposer } from '@/components/chat/MessageComposer';
import { RecommendationCards } from '@/components/chat/RecommendationCards';
import { SettingsModal } from '@/components/layout/SettingsModal';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopProgressBar } from '@/components/layout/TopProgressBar';
import { ProjectCard } from '@/components/resume/ProjectCard';
import { ChatProvider } from '@/context/ChatContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider, useTheme } from '@/context/ThemeContext';
import { curatedProjects } from '@/data/projects';

const pushMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: pushMock }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

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
    pushMock.mockReset();
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
    fireEvent.change(textarea, { target: { value: 'How does Rahkar ERP work?' } });
    expect(sendButton).not.toBeDisabled();

    // Shift + Enter does NOT submit
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: true });
    expect(onSend).not.toHaveBeenCalled();

    // Plain Enter submits and clears input
    fireEvent.keyDown(textarea, { key: 'Enter', shiftKey: false });
    expect(onSend).toHaveBeenCalledTimes(1);
    expect(onSend).toHaveBeenCalledWith('How does Rahkar ERP work?');
    expect(textarea.value).toBe('');
  });

  it('LanguageProvider enforces English LTR and clears legacy hs-locale storage', () => {
    window.localStorage.setItem('hs-locale', 'fa');
    document.documentElement.lang = 'fa';
    document.documentElement.dir = 'rtl';

    render(
      <LanguageProvider>
        <div>English Only</div>
      </LanguageProvider>
    );

    expect(document.documentElement.lang).toBe('en');
    expect(document.documentElement.dir).toBe('ltr');
    expect(window.localStorage.getItem('hs-locale')).toBeNull();
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

    const card = screen.getByRole('button', { name: /How does Rahkar ERP work\?/i });
    fireEvent.click(card);
    expect(onSelect).toHaveBeenCalledWith('How does Rahkar ERP work?');
  });

  it('MessageComposer opens section suggestions on click or Ctrl+K and navigates on selection', () => {
    render(
      <LanguageProvider>
        <MessageComposer onSend={vi.fn()} />
      </LanguageProvider>
    );

    const textarea = screen.getByRole('textbox');

    // Suggestions are closed before clicking
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Clicking the composer opens section suggestions immediately
    fireEvent.click(textarea);
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(
      screen.getByText(/Which section would you like to view\?/i)
    ).toBeInTheDocument();

    // Pressing Escape dismisses suggestions
    fireEvent.keyDown(textarea, { key: 'Escape' });
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();

    // Pressing Ctrl+K re-opens suggestions
    fireEvent.keyDown(window, { key: 'k', ctrlKey: true });
    expect(screen.getByRole('listbox')).toBeInTheDocument();

    // Selecting "Experience" navigates to /experience and closes listbox
    const expOption = screen.getByRole('option', { name: /Experience/i });
    fireEvent.click(expOption);

    expect(pushMock).toHaveBeenCalledWith('/experience');
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  it('Sidebar Settings button opens SettingsModal with Appearance & Chat controls and no Persian option', () => {
    render(
      <ThemeProvider>
        <LanguageProvider>
          <ChatProvider>
            <Sidebar />
            <SettingsModal open={false} onClose={() => {}} />
          </ChatProvider>
        </LanguageProvider>
      </ThemeProvider>
    );

    // Settings dialog is initially closed
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();

    // Click Settings button in Sidebar
    const settingsBtn = screen.getByRole('button', { name: /Settings/i });
    fireEvent.click(settingsBtn);

    // Dialog opens with Appearance controls and zero Persian/language switcher controls
    const dialog = screen.getByRole('dialog');
    expect(dialog).toBeInTheDocument();
    expect(screen.queryByText(/فارسی/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Language & Direction/i)).not.toBeInTheDocument();

    // Switch to Light mode inside Settings modal
    const lightBtn = screen.getByRole('button', { name: /Light mode/i });
    fireEvent.click(lightBtn);
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Close modal via Done button
    const doneBtn = screen.getByRole('button', { name: /Done/i });
    fireEvent.click(doneBtn);
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('TopProgressBar renders route loading bar when navigation starts', () => {
    render(<TopProgressBar />);

    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    fireEvent(window, new Event('hs:route-start'));

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('ProjectCard screenshot arrows & dots cycle screenshots without triggering TopProgressBar', () => {
    const rahkar = curatedProjects.find((p) => p.slug === 'rahkar-erp')!;

    render(
      <LanguageProvider>
        <TopProgressBar />
        <ProjectCard project={rahkar} />
      </LanguageProvider>
    );

    const img = screen.getByRole('img', { name: /Rahkar ERP/i }) as HTMLImageElement;
    expect(img.getAttribute('src')).toBe('/projects/rahkar-erp.webp');
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    // Image loading state shows before onLoad and hides once image finishes loading
    expect(screen.getByRole('status', { name: /Loading preview/i })).toBeInTheDocument();
    fireEvent.load(img);
    expect(screen.queryByRole('status', { name: /Loading preview/i })).not.toBeInTheDocument();

    // Clicking Next screenshot shows loading state for the new image without starting TopProgressBar
    fireEvent.click(screen.getByRole('button', { name: /Next screenshot/i }));
    expect(img.getAttribute('src')).toBe('/projects/rahkar-erp-accounting.webp');
    expect(screen.getByRole('status', { name: /Loading preview/i })).toBeInTheDocument();
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    fireEvent.load(img);
    expect(screen.queryByRole('status', { name: /Loading preview/i })).not.toBeInTheDocument();

    // Clicking a dot indicator changes image without starting TopProgressBar
    fireEvent.click(screen.getByRole('button', { name: /Sales & Invoicing/i }));
    expect(img.getAttribute('src')).toBe('/projects/rahkar-erp-sales.webp');
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    // Clicking Previous screenshot changes image without starting TopProgressBar
    fireEvent.click(screen.getByRole('button', { name: /Previous screenshot/i }));
    expect(img.getAttribute('src')).toBe('/projects/rahkar-erp-accounting.webp');
    expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();

    // Clicking the actual project link DOES trigger TopProgressBar (even when Link prevents default)
    const projectLinks = screen.getAllByRole('link', { name: /Rahkar ERP/i });
    projectLinks[0].addEventListener('click', (ev) => ev.preventDefault());
    fireEvent.click(projectLinks[0]);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
