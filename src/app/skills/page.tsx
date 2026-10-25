import type { Metadata } from 'next';
import React from 'react';
import { SkillsPageContent } from '@/app/skills/SkillsPageContent';
import { buildBreadcrumbJsonLd, buildPageMetadata } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Skills',
  description:
    'Technical skills of Hosein Sedaqat (حسین صداقت) — React, Next.js, Vue.js, Nuxt.js, TypeScript, Node.js, PostgreSQL, Jest, Vitest, Docker, and AI Automation. مهارت‌های فنی حسین صداقت.',
  path: '/skills/',
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: 'Hosein Sedaqat', path: '/' },
  { name: 'Skills', path: '/skills/' },
]);

export default function SkillsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SkillsPageContent />
    </div>
  );
}
