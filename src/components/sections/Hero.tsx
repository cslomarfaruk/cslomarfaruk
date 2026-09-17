'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Terminal, Sparkles, Check, FileText, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import photo from '../../dp.png';
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
                'text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-[1.2]',
                language === 'bn' ? 'leading-[1.3] font-bold text-2xl sm:text-3xl md:text-4xl' : ''
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
              href="/omar_cv.pdf"
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

        {/* ── RIGHT COLUMN: AUTHENTIC SOLUTION & CAPABILITY CARD ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 relative w-full order-2 flex justify-center lg:justify-end"
        >
          <div className="w-full max-w-md rounded-2xl border border-border bg-surface shadow-soft-lg overflow-hidden">
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-subtle/80">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-400/80 inline-block" />
                <span className="size-2.5 rounded-full bg-amber-400/80 inline-block" />
                <span className="size-2.5 rounded-full bg-emerald-400/80 inline-block" />
                <span className="ml-2 font-mono text-[11px] text-text-muted">
                  developer.config.ts
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-subtle border border-accent/20 text-accent text-[11px] font-medium">
                <span className="size-1.5 rounded-full bg-accent animate-pulse" />
                <span>Ready to build</span>
              </div>
            </div>

            {/* Code / Capability Object */}
            <div className="p-4 sm:p-5 font-mono text-xs leading-relaxed text-text-secondary bg-surface overflow-x-auto select-none">
              <p className="text-text-muted mb-1">// What I bring to your project</p>
              <p>
                <span className="text-accent font-semibold">export const</span>{' '}
                <span className="text-text-primary font-bold">engineer</span> = {'{'}
              </p>
              <p className="pl-4">
                name: <span className="text-emerald-600 dark:text-emerald-400">&quot;Omar Faruk&quot;</span>,
              </p>
              <p className="pl-4">
                alias: <span className="text-emerald-600 dark:text-emerald-400">&quot;cslomarfaruk&quot;</span>,
              </p>
              <p className="pl-4 text-[10px] text-text-muted">
                // developer omar &bull; developer omer faruk
              </p>
              <p className="pl-4">
                role: <span className="text-emerald-600 dark:text-emerald-400">&quot;Full-Stack Web Developer for Hire&quot;</span>,
              </p>
              <p className="pl-4">
                location: <span className="text-emerald-600 dark:text-emerald-400">&quot;Bangladesh (BD) · Global Remote&quot;</span>,
              </p>
              <p className="pl-4">
                focus: <span className="text-emerald-600 dark:text-emerald-400">&quot;Web Apps, SaaS MVPs &amp; APIs&quot;</span>,
              </p>
              <p className="pl-4">
                stack: [
                <span className="text-accent">&quot;Next.js 15&quot;</span>,{' '}
                <span className="text-accent">&quot;React 19&quot;</span>,{' '}
                <span className="text-accent">&quot;TypeScript&quot;</span>,{' '}
                <span className="text-accent">&quot;Node.js&quot;</span>,{' '}
                <span className="text-accent">&quot;PostgreSQL&quot;</span>,{' '}
                <span className="text-accent">&quot;Docker&quot;</span>],
              </p>
              <p className="pl-4">
                timezone: <span className="text-emerald-600 dark:text-emerald-400">&quot;Daily overlap with US / UK / EU&quot;</span>,
              </p>
              <p className="pl-4">
                codeOwnership: <span className="text-emerald-600 dark:text-emerald-400">&quot;100% Client Owned&quot;</span>,
              </p>
              <p>{'}'};</p>
            </div>

            {/* Real Capability Checkmarks */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 border-t border-border bg-surface-subtle/50 space-y-2">
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Check className="size-3.5 text-accent shrink-0" />
                <span>Clean, maintainable TypeScript &amp; React code</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Check className="size-3.5 text-accent shrink-0" />
                <span>Fast page loads &amp; mobile-friendly UI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-text-secondary">
                <Check className="size-3.5 text-accent shrink-0" />
                <span>Weekly live test links so you see real progress</span>
              </div>
            </div>

            {/* Natural Mini Profile Strip */}
            <div className="px-4 py-3 sm:px-5 sm:py-3 border-t border-border bg-surface flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-full overflow-hidden border border-border shrink-0 bg-surface-subtle">
                  <Image
                    src={photo}
                    alt="Omar Faruk"
                    width={32}
                    height={32}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-text-primary leading-tight">Omar Faruk (@cslomarfaruk)</span>
                  <span className="text-[10px] text-text-muted">Full-Stack Developer · SEC / SUST (BD)</span>
                </div>
              </div>
              <span className="text-[11px] font-medium text-accent">
                Direct Collaboration
              </span>
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
      <span className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-text-primary mb-0.5">
        {value}
      </span>
      <span className="text-[10px] sm:text-xs text-text-muted font-medium leading-tight line-clamp-2">
        {label}
      </span>
    </div>
  );
});
