import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://devcsl.tech',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: {
          en: 'https://devcsl.tech/?lang=en',
          bn: 'https://devcsl.tech/?lang=bn',
        },
      },
    },
  ];
}
