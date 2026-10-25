import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import './globals.css';
import { AppLayout } from '@/components/layout/AppLayout';
import { ChatProvider } from '@/context/ChatContext';
import { LanguageProvider } from '@/context/LanguageContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { certifications, educationItems, profileData, skillCategories } from '@/data/resume';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io').replace(
  /\/+$/,
  ''
);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Hosein Sedaqat (حسین صداقت) | Full-Stack Developer — React, Next.js, Node.js',
    template: '%s | Hosein Sedaqat (حسین صداقت)',
  },
  description:
    'Official website & resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer with 5+ years of experience building FinTech & SaaS web applications with React, Next.js, Vue.js, Node.js, and TypeScript. وب‌سایت رسمی و رزومه حسین صداقت، توسعه‌دهنده فول‌استک.',
  applicationName: 'Hosein Sedaqat Portfolio',
  manifest: '/manifest.webmanifest',
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
    'Full-Stack Developer',
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
    url: `${siteUrl}/`,
    siteName: 'Hosein Sedaqat (حسین صداقت)',
    title: 'Hosein Sedaqat (حسین صداقت) | Full-Stack Developer',
    description:
      'Official portfolio & resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer specializing in React, Next.js, Vue.js, Node.js, and TypeScript.',
    firstName: 'Hosein',
    lastName: 'Sedaqat',
    username: 'hoseinsedaqat',
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: 'Hosein Sedaqat (حسین صداقت) — Full-Stack Developer Portfolio',
      },
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
    images: [`${siteUrl}/opengraph-image`],
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

// Blocking inline script prevents theme flash before React hydration
const initThemeScript = `
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
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
    localStorage.removeItem('hs-locale');
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
      inLanguage: 'en',
      dateModified: '2026-10-25',
      isPartOf: { '@id': `${siteUrl}/#website` },
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
      jobTitle: ['Full-Stack Developer', 'Front-End Developer'],
      hasOccupation: {
        '@type': 'Occupation',
        name: 'Full-Stack Developer',
        skills: allSkillNames.join(', '),
      },
      description:
        'Hosein Sedaqat (Persian: حسین صداقت) is a Full-Stack Developer with 5 years of experience building FinTech and SaaS web applications using React, Next.js, Vue.js, Node.js, and TypeScript.',
      image: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#portrait`,
        url: `${siteUrl}${profileData.avatarUrl}`,
        contentUrl: `${siteUrl}${profileData.avatarUrl}`,
        width: 800,
        height: 800,
        caption: 'Hosein Sedaqat (حسین صداقت) — Full-Stack Developer',
      },
      url: `${siteUrl}/`,
      mainEntityOfPage: { '@id': `${siteUrl}/#profilepage` },
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
        sameAs: 'https://en.wikipedia.org/wiki/University_of_Sistan_and_Baluchestan',
      },
      knowsLanguage: ['en', 'fa'],
      knowsAbout: allSkillNames,
      hasCredential: certifications.map((cert) => ({
        '@type': 'EducationalOccupationalCredential',
        name: cert.title,
        identifier: cert.credentialId,
        url: cert.url,
        recognizedBy: {
          '@type': 'Organization',
          name: cert.issuer,
          url: 'https://www.sololearn.com/',
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
      name: 'Hosein Sedaqat',
      alternateName: [
        'حسین صداقت',
        'Hosein Sedaqat Portfolio',
        'وب‌سایت رسمی حسین صداقت',
      ],
      inLanguage: 'en',
      author: { '@id': `${siteUrl}/#person` },
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
        <script dangerouslySetInnerHTML={{ __html: initThemeScript }} />
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
