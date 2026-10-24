import type { MetadataRoute } from 'next';
import { curatedProjects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io';
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/experience',
    '/projects',
    '/skills',
    '/education',
    '/contact',
    '/resume',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = curatedProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
