import type { Metadata } from 'next';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Full-Stack Engineering Projects & Production Case Studies | Omar Faruk',
  description:
    'Explore production web applications, SaaS platforms, academic systems, and Linux DevOps infrastructure engineered by Omar Faruk (DEV CSL). Featuring SEC Admission Portal, CertiChain, and ManageMed.',
  keywords: [
    'Full-stack projects',
    'Next.js case studies',
    'SaaS architecture portfolio',
    'Production web apps',
    'SEC admission portal',
    'CertiChain blockchain',
    'Omar Faruk portfolio',
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
    title: 'Full-Stack Engineering Projects & Architecture Case Studies | Omar Faruk',
    description:
      'Explore production web applications, SaaS platforms, academic systems, and Linux DevOps infrastructure engineered by Omar Faruk.',
    url: 'https://devcsl.tech/projects',
    siteName: 'DEV CSL',
    images: [
      {
        url: 'https://devcsl.tech/logo.png',
        width: 1200,
        height: 630,
        alt: 'DEV CSL Projects Showcase',
      },
    ],
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
