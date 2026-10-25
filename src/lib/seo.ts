import type { Metadata } from 'next';
import { curatedProjects } from '@/data/projects';
import type { ProjectItem } from '@/types/portfolio';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io'
).replace(/\/+$/, '');

interface PageSeoOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
}: PageSeoOptions): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = `${SITE_URL}${normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`}`;
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image}`
    : `${SITE_URL}/opengraph-image`;

  return {
    title,
    description,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: 'website',
      url: fullUrl,
      siteName: 'Hosein Sedaqat (حسین صداقت)',
      title: `${title} | Hosein Sedaqat (حسین صداقت)`,
      description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Hosein Sedaqat (حسین صداقت)`,
      description,
      images: [ogImage],
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => {
      const normalized = item.path === '/' ? '/' : `${item.path.replace(/\/+$/, '')}/`;
      return {
        '@type': 'ListItem',
        position: idx + 1,
        name: item.name,
        item: `${SITE_URL}${normalized}`,
      };
    }),
  };
}

export function buildProjectsCollectionJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Hosein Sedaqat', path: '/' },
        { name: 'Projects', path: '/projects/' },
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/projects/#collection`,
        url: `${SITE_URL}/projects/`,
        name: 'Projects by Hosein Sedaqat (حسین صداقت)',
        author: { '@id': `${SITE_URL}/#person` },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: curatedProjects.length,
          itemListElement: curatedProjects.map((proj, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${SITE_URL}/projects/${proj.slug}/`,
            name: proj.name.en,
          })),
        },
      },
    ],
  };
}

export function buildProjectSoftwareJsonLd(project: ProjectItem) {
  const projectUrl = `${SITE_URL}/projects/${project.slug}/`;
  const imageUrl = project.imageUrl.startsWith('http')
    ? project.imageUrl
    : `${SITE_URL}${project.imageUrl}`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbJsonLd([
        { name: 'Hosein Sedaqat', path: '/' },
        { name: 'Projects', path: '/projects/' },
        { name: project.name.en, path: `/projects/${project.slug}/` },
      ]),
      {
        '@type': 'SoftwareSourceCode',
        '@id': `${projectUrl}#software`,
        name: project.name.en,
        description: project.summary.en,
        url: projectUrl,
        codeRepository: project.repoUrl,
        image: imageUrl,
        dateModified: `${project.updatedYear}-01-01`,
        programmingLanguage: project.technologies,
        author: { '@id': `${SITE_URL}/#person` },
        creator: { '@id': `${SITE_URL}/#person` },
      },
    ],
  };
}
