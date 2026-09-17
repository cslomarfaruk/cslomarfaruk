import { MetadataRoute } from 'next';
import { PROJECTS } from '@/src/lib/projects-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devcsl.tech';
  const currentDate = new Date();

  // Root Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: `${baseUrl}/?lang=en`,
          bn: `${baseUrl}/?lang=bn`,
        },
      },
    },
    // Projects Directory
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          en: `${baseUrl}/projects?lang=en`,
          bn: `${baseUrl}/projects?lang=bn`,
        },
      },
    },
  ];

  // Dynamic Case Studies
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/projects/${project.slug}?lang=en`,
        bn: `${baseUrl}/projects/${project.slug}?lang=bn`,
      },
    },
  }));

  return [...routes, ...projectRoutes];
}
