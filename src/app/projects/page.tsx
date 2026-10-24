import type { Metadata } from 'next';
import React from 'react';
import { ProjectsDirectory } from '@/components/resume/ProjectsDirectory';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Software engineering projects by Hosein Sedaqat (حسین صداقت) — Rahkar ERP, EchShopy, Wavezon, Neweet, EchGram, EchMail, CargoCraft, NovaAdmin, and Tishra Analyzer. پروژه‌های حسین صداقت.',
  alternates: { canonical: '/projects/' },
};

export default function ProjectsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ProjectsDirectory />
    </div>
  );
}
