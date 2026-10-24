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
import { certifications, educationItems, profileData, skillCategories } from '@/data/resume';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hosein Sedaqat (حسین صداقت) | Full-Stack Developer — React, Next.js, Node.js',
    template: '%s | Hosein Sedaqat (حسین صداقت)',
  },
  description:
    'Official website & resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer with 5+ years of experience in FinTech & SaaS (React, Next.js, Vue.js, Node.js, TypeScript). وب‌سایت رسمی، رزومه و نمونه‌کارهای حسین صداقت، توسعه‌دهنده فول‌استک.',
  applicationName: 'Hosein Sedaqat Portfolio | حسین صداقت',
  keywords: [
    'Hosein Sedaqat',
    'حسین صداقت',
    'Hossein Sedaqat',
    'Hossein Sedaghat',
    'Hosein Sedaghat',
    'حسین صداقت برنامه نویس',
    'حسین صداقت فول استک',
    'رزومه حسین صداقت',
    'پورتفولیو حسین صداقت',
    'مهندس حسین صداقت',
    'Hosein Sedaqat Full-Stack Developer',
    'Hosein Sedaqat Resume',
    'Hosein Sedaqat Portfolio',
    'Full-Stack Developer Iran',
    'React Developer',
    'Next.js Developer',
    'Vue.js Developer',
    'TypeScript',
    'Node.js',
    'Rahkar ERP',
    'Paystar',
  ],
  authors: [{ name: 'Hosein Sedaqat (حسین صداقت)', url: `${siteUrl}/` }],
  creator: 'Hosein Sedaqat (حسین صداقت)',
  publisher: 'Hosein Sedaqat (حسین صداقت)',
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      en: `${siteUrl}/`,
      fa: `${siteUrl}/`,
      'x-default': `${siteUrl}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    alternateLocale: ['fa_IR'],
    url: `${siteUrl}/`,
    siteName: 'Hosein Sedaqat | حسین صداقت',
    title: 'Hosein Sedaqat (حسین صداقت) | Full-Stack Developer',
    description:
      'Official portfolio & resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer specializing in React, Next.js, Vue.js, Node.js, and TypeScript.',
    firstName: 'Hosein',
    lastName: 'Sedaqat',
    username: 'hoseinsedaqat',
    images: [
      {
        url: `${siteUrl}${profileData.avatarUrl}`,
        width: 800,
        height: 800,
        alt: 'Hosein Sedaqat (حسین صداقت) — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hosein Sedaqat (حسین صداقت) | Full-Stack Developer',
    description:
      'Official portfolio & resume of Hosein Sedaqat (حسین صداقت) — React, Next.js, Vue.js, Node.js & TypeScript.',
    images: [`${siteUrl}${profileData.avatarUrl}`],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

// Blocking inline script prevents theme or RTL/LTR flash before React hydration
const initThemeAndLocaleScript = `
(function() {
  try {
    var storedTheme = localStorage.getItem('hs-theme');
    var theme = storedTheme === 'light' ? 'light' : 'dark';
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

const allSkillNames = skillCategories.flatMap((c) => c.skills.map((s) => s.name));

const structuredDataGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${siteUrl}/#profilepage`,
      url: `${siteUrl}/`,
      name: 'Hosein Sedaqat (حسین صداقت) — Official Portfolio & Resume',
      inLanguage: ['en', 'fa'],
      mainEntity: { '@id': `${siteUrl}/#person` },
    },
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#person`,
      name: 'Hosein Sedaqat',
      givenName: 'Hosein',
      familyName: 'Sedaqat',
      alternateName: [
        'حسین صداقت',
        'Hossein Sedaqat',
        'Hossein Sedaghat',
        'Hosein Sedaghat',
        'مهندس حسین صداقت',
      ],
      jobTitle: [
        'Full-Stack Developer',
        'Front-End Developer',
        'توسعه‌دهنده فول‌استک',
      ],
      description:
        'Hosein Sedaqat (حسین صداقت) is a Full-Stack Developer with 5 years of experience building FinTech and SaaS web applications using React, Next.js, Vue.js, Node.js, and TypeScript.',
      image: `${siteUrl}${profileData.avatarUrl}`,
      url: `${siteUrl}/`,
      email: `mailto:${profileData.email}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bandar Abbas',
        addressRegion: 'Hormozgan',
        addressCountry: 'IR',
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: educationItems[0].institution.en,
      },
      knowsLanguage: ['en', 'fa'],
      knowsAbout: allSkillNames,
      hasCredential: certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        identifier: cert.credentialId,
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
        },
      })),
      sameAs: [
        profileData.linkedinUrl,
        profileData.githubUrl,
        profileData.stackoverflowUrl,
        profileData.devtoUrl,
        profileData.mediumUrl,
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: 'Hosein Sedaqat | حسین صداقت',
      alternateName: 'وب‌سایت رسمی حسین صداقت — Hosein Sedaqat Portfolio',
      inLanguage: ['en', 'fa'],
      publisher: { '@id': `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeAndLocaleScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataGraph) }}
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
