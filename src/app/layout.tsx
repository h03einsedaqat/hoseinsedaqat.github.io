import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource/vazirmatn/400.css';
import '@fontsource/vazirmatn/500.css';
import '@fontsource/vazirmatn/600.css';
import '@fontsource/vazirmatn/700.css';
import './globals.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { ChatProvider } from '@/context/ChatContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { profileData } from '@/data/resume';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hosein Sedaqat | Full-Stack Developer Portfolio',
    template: '%s | Hosein Sedaqat',
  },
  description:
    "Explore Hosein Sedaqat's experience, selected projects, and software development skills through an interactive conversational portfolio.",
  keywords: [
    'Hosein Sedaqat',
    'حسین صداقت',
    'Full-Stack Developer',
    'Frontend Engineer',
    'React Developer',
    'Next.js',
    'Vue.js',
    'TypeScript',
    'Node.js',
    'Rahkar ERP',
    'Paystar',
  ],
  authors: [{ name: 'Hosein Sedaqat', url: siteUrl }],
  creator: 'Hosein Sedaqat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Hosein Sedaqat Portfolio',
    title: 'Hosein Sedaqat | Full-Stack Developer Portfolio',
    description:
      "Explore Hosein Sedaqat's experience, selected projects, and software development skills through an interactive portfolio.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosein Sedaqat | Full-Stack Developer Portfolio',
    description:
      "Explore Hosein Sedaqat's experience, selected projects, and software development skills through an interactive portfolio.",
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#212121' },
  ],
};

// Blocking inline script prevents theme or RTL/LTR flash before React hydration
const initThemeAndLocaleScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('hs-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = (storedTheme === 'dark' || storedTheme === 'light') ? storedTheme : (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
    var storedLocale = localStorage.getItem('hs-locale');
    if (storedLocale === 'fa') {
      document.documentElement.lang = 'fa';
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
    }
  } catch (e) {}
})();
`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profileData.shortName,
  jobTitle: profileData.title.en,
  url: siteUrl,
  email: `mailto:${profileData.email}`,
  sameAs: [
    profileData.githubUrl,
    profileData.linkedinUrl,
    profileData.stackoverflowUrl,
    profileData.devtoUrl,
    profileData.mediumUrl,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeAndLocaleScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-accent/25 selection:text-ink">
        <ThemeProvider>
          <LanguageProvider>
            <ChatProvider>
              <AppLayout>{children}</AppLayout>
            </ChatProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
