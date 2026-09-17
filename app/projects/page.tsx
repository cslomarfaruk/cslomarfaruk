import type { Metadata } from 'next';
import { PROJECTS } from '@/src/lib/projects-data';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Full-Stack Web Engineering Projects, SaaS MVPs & Architecture | Omar Faruk (DEV CSL)',
  description:
    'Explore production web applications, SaaS platforms, academic systems, and Linux DevOps infrastructure engineered by Omar Faruk (cslomarfaruk). Featuring SEC Admission Portal, CertiChain Blockchain, ManageMed ERP, and real-time social platforms.',
  keywords: [
    'cslomarfaruk',
    'developer omar',
    'Omar Faruk projects',
    'Full-stack projects',
    'Next.js case studies',
    'SaaS architecture portfolio',
    'Production web apps',
    'SEC admission portal',
    'CertiChain blockchain ZKP',
    'ManageMed clinic ERP',
    'Hive social media platform',
    'Vehicle AI classification',
    'best developer in bangladesh',
    'developer for hire in bd',
    'devcsl projects',
  ],
  alternates: {
    canonical: 'https://devcsl.tech/projects',
    languages: {
      'en-US': 'https://devcsl.tech/projects?lang=en',
      'bn-BD': 'https://devcsl.tech/projects?lang=bn',
    },
  },
  openGraph: {
    title: 'Full-Stack Engineering Projects & Architecture Case Studies | Omar Faruk (DEV CSL)',
    description:
      'Explore production web applications, SaaS platforms, academic systems, and Linux DevOps infrastructure engineered by Omar Faruk (cslomarfaruk).',
    url: 'https://devcsl.tech/projects',
    siteName: 'DEV CSL — Omar Faruk',
    images: [
      {
        url: 'https://devcsl.tech/dp.png',
        width: 1254,
        height: 1254,
        alt: 'DEV CSL Projects Showcase — Omar Faruk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Engineering Projects & Production Case Studies | Omar Faruk',
    description:
      'Explore production web applications, SaaS platforms, and architecture case studies by Omar Faruk (cslomarfaruk).',
    images: ['https://devcsl.tech/dp.png'],
    creator: '@cslomarfaruk',
  },
};

export default function ProjectsPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://devcsl.tech/projects#collection',
    url: 'https://devcsl.tech/projects',
    name: 'Full-Stack Web Engineering Projects & Case Studies by Omar Faruk',
    description:
      'Production web applications, SaaS platforms, academic systems, and Linux DevOps infrastructure engineered by Omar Faruk (DEV CSL).',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://devcsl.tech/#website',
      name: 'DEV CSL — Omar Faruk',
      url: 'https://devcsl.tech',
    },
    about: {
      '@type': 'Person',
      '@id': 'https://devcsl.tech/#person',
      name: 'Omar Faruk',
      alternateName: ['cslomarfaruk', 'developer omar'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
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
      ],
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Selected Production Projects & Architecture Case Studies',
      itemListElement: PROJECTS.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: p.title,
        url: `https://devcsl.tech/projects/${p.slug}`,
        description: p.description,
        image: p.image.startsWith('http') ? p.image : `https://devcsl.tech${p.image}`,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ProjectsClient />
    </>
  );
}
