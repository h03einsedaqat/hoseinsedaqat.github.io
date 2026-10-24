import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { ProjectDetailView } from '@/components/resume/ProjectDetailView';
import { curatedProjects, getProjectBySlug } from '@/data/projects';

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return curatedProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: 'Project Not Found' };
  }
  return {
    title: project.name.en,
    description: `${project.tagline.en} — ${project.summary.en}`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="h-full overflow-y-auto">
      <ProjectDetailView project={project} />
    </div>
  );
}
