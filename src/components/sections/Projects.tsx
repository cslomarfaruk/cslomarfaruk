'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight, FolderOpen, ExternalLink, Github, Sparkles } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';
import { PROJECTS, type Project } from '@/src/lib/projects-data';

export default function Projects() {
  const { t, language } = useLanguage();
  // Highlight top 4 flagship projects on homepage
  const [featured, ...otherProjects] = PROJECTS;
  const showcaseProjects = [featured, ...otherProjects.slice(0, 3)];

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div>
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.projects.tagline}</span>
          </div>
          <h2
            className={cn(
              'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary',
              language === 'bn' ? 'leading-snug' : 'leading-tight'
            )}
          >
            <span>{t.projects.headline_pt1} </span>
            <span className="text-accent inline-block">{t.projects.headline_pt2}</span>
          </h2>
        </div>

        <Link
          href="/projects"
          className="btn-secondary text-xs py-2 px-4 self-start sm:self-auto inline-flex items-center gap-2 group"
        >
          <FolderOpen className="w-4 h-4 text-accent" />
          <span>{t.projects.index_btn || 'View All Projects'}</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </motion.div>

      {/* Featured Flagship Case Study */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Link
          href={`/projects/${featured.slug}`}
          className="editorial-card group overflow-hidden block"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Image Preview */}
            <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-surface-subtle p-3 sm:p-5 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-border">
              <img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="absolute top-4 left-4 sm:top-6 sm:left-6 pill-badge bg-surface/90 backdrop-blur-md shadow-soft-sm">
                {language === 'bn' ? 'ফিচার্ড কেস স্টাডি' : 'Featured Production Case'}
              </span>
            </div>

            {/* Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {featured.niche}
                  </span>
                  <span className="text-xs text-text-muted font-medium">
                    {featured.period}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors flex items-center justify-between">
                  <span>{featured.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>

                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {featured.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featured.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="pill-badge-neutral text-[11px]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-muted">
                  <span className="font-medium text-text-primary">
                    {featured.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* Grid of Other High-Impact Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherProjects.slice(0, 3).map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="editorial-card group flex flex-col h-full overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-surface-subtle p-3 border-b border-border">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 pill-badge-neutral text-[10px] bg-surface/90 backdrop-blur-sm">
                  {project.niche}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-accent uppercase tracking-wider">
                      {project.period}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-subtle flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="pill-badge-neutral text-[10px]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA for Projects */}
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="btn-secondary text-sm py-2.5 px-6 inline-flex items-center gap-2 group"
        >
          <span>{language === 'bn' ? 'সবগুলো প্রজেক্ট এবং কেস স্টাডি দেখুন' : 'Explore All Projects & Architecture'}</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
