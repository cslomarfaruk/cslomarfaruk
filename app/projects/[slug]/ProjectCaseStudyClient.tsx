'use client';

import { motion } from 'motion/react';
import type { Project } from '@/src/lib/projects-data';
import {
  Github,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Code2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { ThemeToggle } from '@/src/components/ThemeToggle';

export default function ProjectCaseStudyClient({ project }: { project: Project }) {
  const { language, setLanguage } = useLanguage();

  return (
    <main className="min-h-screen text-text-primary bg-brand pb-24">
      {/* Top Sticky Bar */}
      <nav className="sticky top-0 z-50 glass-nav border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-accent transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>{language === 'bn' ? 'সব প্রজেক্ট' : 'All Projects'}</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-border bg-surface/80 text-text-secondary hover:text-text-primary transition-all"
            >
              {language === 'en' ? 'বাংলা' : 'EN'}
            </button>

            <ThemeToggle />

            {project.links.github && project.links.github !== '#' && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl border border-border bg-surface flex items-center justify-center text-text-muted hover:text-accent hover:border-border-hover transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {project.links.live && project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3.5 rounded-xl shadow-soft-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 sm:pt-16 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="pill-badge text-xs">
                {project.niche}
              </span>
              <span className="pill-badge-neutral text-xs">
                {project.period}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-tight mb-6">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-text-secondary max-w-3xl leading-relaxed mb-8">
              {project.description}
            </p>

            {project.impact && (
              <div className="p-4 sm:p-5 rounded-2xl border border-accent/30 bg-accent-subtle max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Key Result & Impact</span>
                </div>
                <p className="text-sm sm:text-base font-semibold text-text-primary">
                  {project.impact}
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Main Showcase Image */}
      <section className="px-4 sm:px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="editorial-card p-3 sm:p-4 overflow-hidden bg-surface-subtle">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* Architecture & Features Grid */}
      <section className="px-4 sm:px-6 py-12 border-t border-border bg-surface-subtle/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Tech Stack */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-4">
                <Cpu className="w-4 h-4" />
                <span>Technical Architecture</span>
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                {project.full_stack_details ? (
                  project.full_stack_details.map((tech) => (
                    <div
                      key={tech}
                      className="p-3.5 rounded-xl border border-border bg-surface flex items-center gap-3 text-sm font-medium text-text-primary"
                    >
                      <Code2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{tech}</span>
                    </div>
                  ))
                ) : (
                  project.tags.map((tag) => (
                    <div
                      key={tag}
                      className="p-3.5 rounded-xl border border-border bg-surface flex items-center gap-3 text-sm font-medium text-text-primary"
                    >
                      <Code2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {project.role && (
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-2">
                  Role & Execution
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.role}
                </p>
              </div>
            )}

            {/* Team Members */}
            {project.team_members && project.team_members.length > 0 && (
              <div className="p-5 rounded-2xl border border-border bg-surface">
                <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-3">
                  Team Members
                </span>
                <div className="flex flex-col gap-2">
                  {project.team_members.map((member) => (
                    <div key={member} className="flex items-center gap-2.5 text-sm text-text-primary">
                      <div className="size-6 rounded-full bg-accent-subtle text-accent flex items-center justify-center text-[10px] font-bold shrink-0">
                        {member.charAt(0).toUpperCase()}
                      </div>
                      <span className="font-medium">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publications & Research */}
            {project.publications && project.publications.length > 0 && (
              <div className="p-5 rounded-2xl border border-accent/30 bg-accent-subtle">
                <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Publications & Research
                </span>
                <div className="flex flex-col gap-3">
                  {project.publications.map((pub) => (
                    <a
                      key={pub.url}
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
                    >
                      <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors block mb-1">
                        {pub.title}
                      </span>
                      <span className="text-[11px] text-text-muted">
                        {pub.venue}
                      </span>
                    </a>
                  ))}

                  {/* Thesis Book link (hardcoded for certichain) */}
                  {project.slug === 'certichain' && (
                    <a
                      href="/certichain/Thesis books.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-3 rounded-xl border border-border bg-surface hover:border-accent transition-colors"
                    >
                      <span className="text-sm font-semibold text-text-primary group-hover:text-accent transition-colors block mb-1">
                        Full Thesis Report
                      </span>
                      <span className="text-[11px] text-text-muted">
                        Complete thesis book with detailed system architecture, implementation, and evaluation
                      </span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Features & Security */}
          <div className="lg:col-span-7 space-y-8">
            {project.features_detailed ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.features_detailed.map((cat) => (
                  <div key={cat.category} className="editorial-card p-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-3.5 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" />
                      <span>{cat.category}</span>
                    </h3>
                    <ul className="space-y-2 text-xs sm:text-sm text-text-secondary">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="editorial-card p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                  Key Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.security_highlights && (
              <div className="p-6 rounded-2xl border border-border bg-surface">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent mb-4">
                  <Shield className="w-4 h-4" />
                  <span>Security & Integrity Guardrails</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.security_highlights.map((sec) => (
                    <div key={sec} className="flex items-start gap-2 text-xs sm:text-sm text-text-secondary">
                      <div className="size-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span>{sec}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Walkthrough */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-4 sm:px-6 py-16 max-w-6xl mx-auto">
          <div className="mb-10 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-2">
              Visual Walkthrough
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              Step-by-step walkthrough of interfaces, user flows, and core features.
            </p>
          </div>

          <div className="space-y-12">
            {project.gallery.map((item, idx) => (
              <div key={idx} className="editorial-card p-4 sm:p-6 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.description}
                  className="w-full h-auto rounded-xl object-cover mb-4 border border-border"
                  loading="lazy"
                />
                <div className="flex items-start gap-3">
                  <span className="pill-badge text-[11px] shrink-0 font-mono">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed pt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Conclusion CTA */}
      <section className="px-4 sm:px-6 pt-12">
        <div className="max-w-4xl mx-auto text-center p-8 sm:p-12 rounded-3xl border border-border bg-surface-subtle">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3">
            Interested in building a similar solution?
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-6">
            From concept architecture to production deployment, let's discuss your roadmap.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/#contact" className="btn-primary w-full sm:w-auto py-2.5 px-6 text-sm">
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {project.links.live && project.links.live !== '#' && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto py-2.5 px-5 text-sm"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
