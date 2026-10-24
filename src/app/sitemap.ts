import type { MetadataRoute } from 'next';
import { curatedProjects } from '@/data/projects';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://hoseinsedaqat.github.io').replace(
    /\/+$/,
    ''
  );
  const now = new Date();

  const staticRoutes = [
    '/',
    '/about/',
    '/experience/',
    '/projects/',
    '/skills/',
    '/education/',
    '/contact/',
    '/resume/',
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.85,
  }));

  const projectRoutes = curatedProjects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: project.pinned ? 0.8 : 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
