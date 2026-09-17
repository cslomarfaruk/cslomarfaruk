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

  const title = `${project.title} — Full-Stack Case Study & System Architecture | Omar Faruk`;
  const description = `${project.description.slice(0, 155)}... Designed and built with ${project.tags.slice(0, 4).join(', ')} by Omar Faruk (DEV CSL).`;
  const url = `https://devcsl.tech/projects/${project.slug}`;
  const imageUrl = project.image.startsWith('http')
    ? project.image
    : `https://devcsl.tech${project.image}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      project.niche,
      ...project.tags,
      'Full-stack case study',
      'Production architecture',
      'Omar Faruk projects',
      'devcsl',
    ],
    authors: [{ name: 'Omar Faruk', url: 'https://devcsl.tech' }],
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
      siteName: 'DEV CSL',
      type: 'article',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
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

  // Generate Schema.org TechArticle / SoftwareApplication JSON-LD
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.description,
    image: project.image.startsWith('http')
      ? project.image
      : `https://devcsl.tech${project.image}`,
    author: {
      '@type': 'Person',
      name: 'Omar Faruk',
      url: 'https://devcsl.tech',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DEV CSL',
      url: 'https://devcsl.tech',
      logo: 'https://devcsl.tech/logo.png',
    },
    about: {
      '@type': 'SoftwareApplication',
      name: project.title,
      applicationCategory: 'WebApplication',
      operatingSystem: 'Linux, Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
    },
    keywords: project.tags.join(', '),
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
