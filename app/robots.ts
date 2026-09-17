import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // Search Engines
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      // OpenAI (ChatGPT & ChatGPT Search)
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      // Google Gemini AI
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Anthropic Claude
      {
        userAgent: 'ClaudeBot',
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
      // Apple Intelligence
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // Common Crawl
      {
        userAgent: 'CCBot',
        allow: '/',
      },
    ],
    sitemap: 'https://devcsl.tech/sitemap.xml',
  };
}
