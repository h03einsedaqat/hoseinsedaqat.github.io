import type { Metadata } from 'next';
import React from 'react';
import { EducationPageContent } from '@/app/education/EducationPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Education',
  description:
    'Education and certifications of Hosein Sedaqat (حسین صداقت) — B.Sc. Industrial Engineering at University of Sistan and Baluchestan & 6 verified Sololearn credentials. تحصیلات حسین صداقت.',
  path: '/education/',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'Education', path: '/education/' },
]);

export default function EducationPage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EducationPageContent />
    </div>
  );
}
