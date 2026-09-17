import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/src/lib/projects-data';
import ProjectCaseStudyClient from './ProjectCaseStudyClient';

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | DEV CSL',
      description: 'The requested project case study could not be found.',
    };
  }

  const title = `${project.title} — System Architecture & Full-Stack Case Study | Omar Faruk`;
  const description = `${project.description.slice(0, 140)}... Built with ${(project.full_stack_details || project.tags).slice(0, 5).join(', ')}. Impact: ${project.impact} Engineered by Omar Faruk (cslomarfaruk).`;
  const url = `https://devcsl.tech/projects/${project.slug}`;
  const imageUrl = project.image.startsWith('http')
    ? project.image
    : `https://devcsl.tech${project.image}`;

  const keywords = Array.from(
    new Set([
      project.title,
      project.niche,
      ...project.tags,
      ...(project.full_stack_details || []),
      ...(project.security_highlights || []),
      'cslomarfaruk',
      'developer omar',
      'developer omer faruk',
      'Omar Faruk projects',
      'Full-stack case study',
      'Production system architecture',
      'best developer in bangladesh',
      'developer for hire in bd',
      'devcsl tech',
    ])
  );

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Omar Faruk', url: 'https://devcsl.tech' }],
    creator: 'Omar Faruk',
    publisher: 'DEV CSL',
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${url}?lang=en`,
        'bn-BD': `${url}?lang=bn`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'DEV CSL — Omar Faruk',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — Architecture & Case Study by Omar Faruk`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@cslomarfaruk',
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const url = `https://devcsl.tech/projects/${project.slug}`;
  const imageUrl = project.image.startsWith('http')
    ? project.image
    : `https://devcsl.tech${project.image}`;

  // Multi-entity Schema.org graph for maximum Google SERP space and rich results
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // 1. Technical Article & Software Architecture Documentation
      {
        '@type': 'TechArticle',
        '@id': `${url}#article`,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://devcsl.tech/#website',
          name: 'DEV CSL — Omar Faruk',
          url: 'https://devcsl.tech',
        },
        headline: `${project.title} — Full-Stack Case Study & System Architecture`,
        description: project.description,
        articleBody: `${project.description} Role: ${project.role || 'Full-Stack Developer & DevOps Engineer'}. Measurable Impact: ${project.impact}. Core Stack: ${(project.full_stack_details || project.tags).join(', ')}. Security Features: ${(project.security_highlights || []).join('; ')}.`,
        image: imageUrl,
        inLanguage: ['en-US', 'bn-BD'],
        author: {
          '@type': 'Person',
          '@id': 'https://devcsl.tech/#person',
          name: 'Omar Faruk',
          alternateName: ['cslomarfaruk', 'developer omar', 'developer omer faruk'],
          url: 'https://devcsl.tech',
          image: 'https://devcsl.tech/dp.png',
        },
        publisher: {
          '@type': 'Organization',
          '@id': 'https://devcsl.tech/#organization',
          name: 'DEV CSL',
          url: 'https://devcsl.tech',
          logo: 'https://devcsl.tech/logo.png',
        },
        about: { '@id': `${url}#software` },
        keywords: project.tags.join(', '),
      },

      // 2. Software Application Schema
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}#software`,
        name: project.title,
        description: project.description,
        applicationCategory: 'WebApplication',
        operatingSystem: 'Linux, Web, Cloud, Docker',
        screenshot: imageUrl,
        url: project.links.live && project.links.live !== '#' ? project.links.live : url,
        softwareVersion: '2.0.0',
        author: { '@id': 'https://devcsl.tech/#person' },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: project.features.join(', '),
      },

      // 3. Breadcrumbs Schema for SERP Trail
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://devcsl.tech',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Projects',
            item: 'https://devcsl.tech/projects',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: project.title,
            item: url,
          },
        ],
      },

      // 4. Project-Specific FAQPage Schema for Expandable Rich Snippets on SERP
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: `What is ${project.title} and what problem does it solve?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${project.description} Measurable impact: ${project.impact}`,
            },
          },
          {
            '@type': 'Question',
            name: `What technical stack and architecture are used in ${project.title}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `${project.title} is built with ${(project.full_stack_details || project.tags).join(', ')}. Designed, developed, and deployed by Omar Faruk (cslomarfaruk).`,
            },
          },
          {
            '@type': 'Question',
            name: `Who engineered ${project.title}?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Engineered by Omar Faruk (known online as cslomarfaruk / developer omar), a senior full-stack developer based in Bangladesh specializing in Next.js, Node.js, and Linux DevOps for clients worldwide.`,
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectCaseStudyClient project={project} />
    </>
  );
}
