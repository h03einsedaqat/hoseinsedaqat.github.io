import type { Metadata } from 'next';
import React from 'react';
import { ProjectsDirectory } from '@/components/resume/ProjectsDirectory';

export const metadata: Metadata = {
  title: 'Projects & GitHub Repositories',
  description:
    'Explore selected software engineering projects by Hosein Sedaqat including Rahkar ERP, CargoCraft, NovaAdmin, Tishra Analyzer, and Kalamesaz.',
};

export default function ProjectsPage() {
  return (
    <div className="h-full overflow-y-auto">
      <ProjectsDirectory />
    </div>
  );
}
