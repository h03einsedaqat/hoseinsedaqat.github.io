import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react';
import { ProjectDetailView } from '@/components/resume/ProjectDetailView';
import { curatedProjects, getProjectBySlug } from '@/data/projects';
import { buildPageMetadata, buildProjectSoftwareJsonLd } from '@/lib/seo';

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
  return buildPageMetadata({
    title: `${project.name.en} — Project`,
    description: `${project.tagline.en} — Built by Hosein Sedaqat (حسین صداقت).`,
    path: `/projects/${project.slug}/`,
    image: project.imageUrl,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const softwareJsonLd = buildProjectSoftwareJsonLd(project);

  return (
    <div className="h-full overflow-y-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <ProjectDetailView project={project} />
    </div>
  );
}
