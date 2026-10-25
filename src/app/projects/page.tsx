import type { Metadata } from 'next';
import React from 'react';
import { ProjectsDirectory } from '@/components/resume/ProjectsDirectory';
import { buildPageMetadata, buildProjectsCollectionJsonLd } from '@/lib/seo';

export const metadata: Metadata = buildPageMetadata({
  title: 'Projects',
  description:
    'Software engineering projects by Hosein Sedaqat (حسین صداقت) — Rahkar ERP, EchShopy, Wavezon, Neweet, EchGram, EchMail, CargoCraft, NovaAdmin, and Tishra Analyzer. پروژه‌های حسین صداقت.',
  path: '/projects/',
  image: '/projects/rahkar-erp.webp',
});

const projectsJsonLd = buildProjectsCollectionJsonLd();

export default function ProjectsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <ProjectsDirectory />
    </div>
  );
}
