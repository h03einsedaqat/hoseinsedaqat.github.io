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
    title: `${project.name.en} — Project by Hosein Sedaqat`,
    description: `${project.tagline.en} — Built by Hosein Sedaqat (حسین صداقت).`,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      images: [project.imageUrl],
    },
    twitter: {
      card: 'summary_large_image',
      images: [project.imageUrl],
    },
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
