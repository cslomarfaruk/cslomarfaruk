'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  FileText,
  ExternalLink,
  BookOpen,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

export default function Education() {
  const { t, language } = useLanguage();
  const edu = t.education;

  if (!edu) return null;

  return (
    <section
      id="education"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mb-12 sm:mb-16"
      >
        <div className="pill-badge mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{edu.tagline}</span>
        </div>

        <h2
          className={cn(
            'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
            language === 'bn' ? 'leading-snug' : 'leading-tight'
          )}
        >
          {edu.headline}
        </h2>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {edu.subheadline}
        </p>
      </motion.div>

      {/* Main Grid: Degree Info + Research/Thesis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Left Column: Degree & Academic Performance */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 editorial-card p-6 sm:p-8 bg-surface flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-xl bg-accent-subtle text-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Higher Education
                </span>
              </div>
              <span className="pill-badge-neutral text-xs">
                {edu.timeline}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-1 tracking-tight">
              {edu.degree}
            </h3>

            <p className="text-sm font-semibold text-text-secondary mb-4">
              {edu.institution}
            </p>

            {/* Academic Standing & Distinction */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-accent-subtle border border-accent/20 text-accent text-xs font-semibold mb-6">
              <Award className="w-4 h-4 shrink-0" />
              <span>{edu.grade}</span>
            </div>

            {/* Core Coursework & Engineering Foundations */}
            <div className="pt-5 border-t border-border-subtle">
              <span className="text-xs font-bold uppercase tracking-wider text-text-muted block mb-3">
                {edu.coursework_label}
              </span>
              <div className="flex flex-wrap gap-2">
                {edu.coursework.map((course: string) => (
                  <span key={course} className="pill-badge-neutral text-xs">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Thesis & Publication Cards */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Final Year Thesis Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="editorial-card p-6 bg-surface flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Capstone Thesis
                </span>
                <span className="text-[11px] text-text-muted font-medium">2026</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                {edu.thesis_title}
              </h4>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                {edu.thesis_desc}
              </p>
            </div>

            <div className="pt-3 border-t border-border-subtle flex flex-wrap items-center gap-2.5">
              <Link
                href="/projects/certichain"
                className="btn-primary text-xs py-2 px-3.5 rounded-xl inline-flex items-center gap-1.5"
              >
                <span>{edu.thesis_link_label}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="/certichain/Thesis books.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3 rounded-xl inline-flex items-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5 text-accent" />
                <span>Thesis Report</span>
              </a>
            </div>
          </motion.div>

          {/* Research Publication Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="editorial-card p-6 bg-surface-subtle flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Conference Paper
                </span>
                <span className="text-[11px] text-text-muted font-medium">ICCIT 2026</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
                {edu.publication_title}
              </h4>

              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-4">
                {edu.publication_desc}
              </p>
            </div>

            <div className="pt-3 border-t border-border-subtle">
              <a
                href="/certichain/ICCIT_Paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-2 px-3.5 rounded-xl inline-flex items-center gap-1.5 hover:text-accent transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-accent" />
                <span>{edu.publication_link_label}</span>
                <ExternalLink className="w-3 h-3 text-text-muted" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
