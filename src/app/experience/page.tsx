import type { Metadata } from 'next';
import React from 'react';
import { ExperiencePageContent } from '@/app/experience/ExperiencePageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Experience',
  description:
    'Work experience of Hosein Sedaqat (حسین صداقت) — Full-Stack & Front-End Developer at Paystar, Mangro, Rahkar ERP, and international remote teams. سوابق شغلی حسین صداقت.',
  path: '/experience/',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'Experience', path: '/experience/' },
]);

export default function ExperiencePage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ExperiencePageContent />
    </div>
  );
}
