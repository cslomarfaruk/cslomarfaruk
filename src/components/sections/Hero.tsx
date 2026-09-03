'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, CheckCircle, FileText, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import photo from '../../dp-new.jpg';
import { useLanguage } from '@/lib/i18n';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* ── LEFT COLUMN: EDITORIAL CONTENT ── */}
        <div className="lg:col-span-7 flex flex-col items-start w-full order-1">
          {/* Status Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <div className="pill-badge shadow-soft-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span>{t.hero.status || 'Available for Projects'}</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 sm:mb-6"
          >
            <h1
              className={cn(
                'text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15]',
                language === 'bn' ? 'leading-[1.3] font-bold' : ''
              )}
            >
              <span>{t.hero.headline_pt1} </span>
              <span className="text-accent inline-block">{t.hero.headline_pt2}</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed font-normal mb-8 sm:mb-10"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10 sm:mb-12"
          >
            <Link href="#contact" className="btn-primary w-full sm:w-auto">
              <span>{t.hero.cta_discuss}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="#projects" className="btn-secondary w-full sm:w-auto">
              <Terminal className="w-4 h-4 text-accent" />
              <span>{t.hero.cta_portfolio}</span>
            </Link>
            <a
              href="/omar_cv (4).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 group"
            >
              <FileText className="w-4 h-4 text-accent transition-transform group-hover:scale-110" />
              <span>{t.hero.cta_cv || (language === 'bn' ? 'সিভি দেখুন' : 'Resume / CV')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Key Metrics / Stats Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full pt-6 border-t border-border grid grid-cols-3 gap-3 sm:gap-6"
          >
            <HeroStat value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <HeroStat value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <HeroStat value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: PORTRAIT IMAGE ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 relative w-full order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] aspect-[4/5] group">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-accent/20 to-accent/5 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-surface-subtle shadow-soft-lg">
              <Image
                src={photo}
                alt="Omar Faruk - Full Stack Engineer"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 380px"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Quiet Floating Badge */}
            <div className="absolute -bottom-3 left-3 sm:-bottom-4 sm:left-4 z-10">
              <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-surface/90 backdrop-blur-md border border-border shadow-soft-md">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-text-muted font-medium uppercase tracking-wider">
                    Omar Faruk
                  </span>
                  <span className="text-xs font-semibold text-text-primary">
                    Full-Stack Dev & DevOps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const HeroStat = memo(function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary mb-0.5">
        {value}
      </span>
      <span className="text-[11px] sm:text-xs text-text-muted font-medium leading-tight">
        {label}
      </span>
    </div>
  );
});
