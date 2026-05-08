import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // Allow Google
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Allow Bing
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // Allow AI Crawlers
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
    ],
    sitemap: 'https://devcsl.tech/sitemap.xml',
  };
}
