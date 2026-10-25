import type { Metadata } from 'next';
import React from 'react';
import { ProfileSection } from '@/components/resume/ProfileSection';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'About',
  description:
    'About Hosein Sedaqat (حسین صداقت) — Full-Stack Developer with 5+ years of experience building FinTech & SaaS web applications with React, Next.js, Vue.js, Node.js, and TypeScript. معرفی حسین صداقت.',
  path: '/about/',
  image: '/photo/hosein-sedaqat.jpg',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'About', path: '/about/' },
]);

export default function AboutPage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProfileSection />
    </div>
  );
}
