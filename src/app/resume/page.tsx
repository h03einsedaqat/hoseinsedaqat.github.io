import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import { ResumeView } from '@/components/resume/ResumeView';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Resume',
  description:
    'Resume of Hosein Sedaqat (حسین صداقت) — Full-Stack Developer (React, Next.js, Vue.js, Node.js, TypeScript). رزومه حسین صداقت.',
  path: '/resume/',
  image: '/photo/hosein-sedaqat.jpg',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'Resume', path: '/resume/' },
]);

export default function ResumePage() {
  return (
    <div className="h-full overflow-y-auto print:h-auto print:overflow-visible">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Suspense fallback={<div className="p-8 text-sm text-ink-muted">Loading resume...</div>}>
        <ResumeView />
      </Suspense>
    </div>
  );
}
