'use client';

import { motion } from 'motion/react';
import { PROJECTS, type Project } from '@/src/lib/projects-data';
import { Github, ExternalLink, ArrowLeft, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

export default function ProjectsClient() {
  const { language } = useLanguage();

  return (
    <main className="min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Breadcrumb & Header */}
        <div className="mb-12 sm:mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-muted hover:text-accent transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{language === 'bn' ? 'হোম পেজে ফিরে যান' : 'Back to Home'}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="pill-badge mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'bn' ? 'সব প্রজেক্ট' : 'Architectural Portfolio'}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary mb-4 leading-tight">
              {language === 'bn' ? (
                <>প্রজেক্ট <span className="text-accent">শোকেস</span></>
              ) : (
                <>Project <span className="text-accent">Showcase</span></>
              )}
            </h1>
            <p className="text-text-secondary max-w-2xl text-sm sm:text-base leading-relaxed">
              {language === 'bn'
                ? 'আমার বাস্তবায়িত প্রোডাকশন সিস্টেম, রিসার্চ প্রজেক্ট এবং ফুল-স্ট্যাক অ্যাপ্লিকেশনের বিস্তারিত সংকলন।'
                : 'A comprehensive collection of production platforms, academic research tools, and engineered software solutions built for real-world impact.'}
            </p>
          </motion.div>
        </div>

        {/* Projects Showcase List */}
        <div className="space-y-12 sm:space-y-16">
          {PROJECTS.map((project, index) => (
            <ProjectDetailedCard key={project.slug} project={project} index={index} language={language} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectDetailedCard({
  project,
  index,
  language,
}: {
  project: Project;
  index: number;
  language: string;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="editorial-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Visual Content */}
        <div
          className={cn(
            'lg:col-span-7 relative bg-surface-subtle p-4 sm:p-6 flex flex-col justify-center border-b lg:border-b-0 border-border',
            isEven ? 'lg:border-r' : 'lg:order-2 lg:border-l'
          )}
        >
          <Link href={`/projects/${project.slug}`} className="block relative group overflow-hidden rounded-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[400px] object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-3 left-3">
              <span className="pill-badge bg-surface/90 backdrop-blur-md shadow-soft-sm">
                {project.period}
              </span>
            </div>
          </Link>
        </div>

        {/* Text Details */}
        <div
          className={cn(
            'lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between',
            !isEven && 'lg:order-1'
          )}
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {project.niche}
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent transition-colors">
                {project.title}
              </Link>
            </h2>

            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="pill-badge-neutral text-[11px]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-border-subtle flex flex-wrap items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="btn-primary text-xs py-2 px-4 rounded-xl"
            >
              <span>{language === 'bn' ? 'কেস স্টাডি দেখুন' : 'Case Study'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {project.links.live && project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3.5 rounded-xl inline-flex items-center gap-1.5"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links.github && project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3 rounded-xl inline-flex items-center gap-1.5 text-text-muted hover:text-text-primary"
                aria-label="GitHub Repository"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
