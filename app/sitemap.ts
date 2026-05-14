import type { MetadataRoute } from 'next';
import { services } from '@/lib/services';

const SITE = 'https://digitalcrest.co.uk';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/services',
    '/approach',
    '/about',
    '/insights',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
