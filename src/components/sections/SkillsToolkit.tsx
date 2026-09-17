'use client';

import { motion } from 'motion/react';
import {
  Code,
  Server,
  Database,
  Cloud,
  Layers,
  Cpu,
  CheckCircle,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

export default function SkillsToolkit() {
  const { t, language } = useLanguage();

  const categories = [
    {
      icon: Code,
      title: t.skills_toolkit.frontend_title,
      desc: t.skills_toolkit.frontend_desc,
      tags: t.skills_toolkit.frontend_tags,
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Server,
      title: t.skills_toolkit.backend_title,
      desc: t.skills_toolkit.backend_desc,
      tags: t.skills_toolkit.backend_tags,
      gradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      icon: Database,
      title: t.skills_toolkit.database_title,
      desc: t.skills_toolkit.database_desc,
      tags: t.skills_toolkit.database_tags,
      gradient: 'from-amber-500/10 to-orange-500/10',
    },
    {
      icon: Cloud,
      title: t.skills_toolkit.devops_title,
      desc: t.skills_toolkit.devops_desc,
      tags: t.skills_toolkit.devops_tags,
      gradient: 'from-purple-500/10 to-indigo-500/10',
    },
  ];

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
      aria-label="Full-Stack Technical Skills and Toolkit"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
      >
        <div className="pill-badge mb-4 inline-flex">
          <Layers className="w-3.5 h-3.5 text-accent" />
          <span>{t.skills_toolkit.tagline}</span>
        </div>

        <h2
          className={cn(
            'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
            language === 'bn' ? 'leading-snug' : 'leading-tight'
          )}
        >
          {t.skills_toolkit.headline}
        </h2>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {t.skills_toolkit.subheadline}
        </p>
      </motion.div>

      {/* 4 Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="editorial-card p-6 sm:p-8 flex flex-col justify-between group hover:border-border-hover transition-all"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-11 rounded-xl bg-accent-subtle border border-accent/20 text-accent flex items-center justify-center transition-transform group-hover:scale-105">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {cat.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-border/80">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {cat.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium border border-border bg-surface-subtle text-text-secondary hover:text-text-primary hover:border-accent/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Standards & Philosophy Callout */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-border bg-surface-subtle/50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider text-accent">
                {language === 'bn' ? 'ইঞ্জিনিয়ারিং স্ট্যান্ডার্ড' : 'Engineering Best Practices'}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-text-primary mb-2">
              {language === 'bn'
                ? 'ক্লিন কোড, সর্বোচ্চ সিকিউরিটি ও মডুলার আর্কিটেকচার'
                : 'Clean Code, Robust Security & Maintainable Systems'}
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {language === 'bn'
                ? 'আমি কেবল কাজ শেষ করার জন্য কোড লিখি না; ভবিষ্যতে যাতে অন্য যে কোনো প্রকৌশলী সহজেই কোডটি সম্প্রসারণ করতে পারেন, তা নিশ্চিত করি। এতে থাকে সুস্পষ্ট কমেন্ট, টাইপসেফটি, এবং স্বয়ংক্রিয় ডিপ্লয়মেন্ট প্রক্রিয়া।'
                : 'Every project is written with strict TypeScript type safety, automated linting, modular separation of concerns, and zero-trust security principles. The result is software that is effortless to audit, maintain, and scale as your user base expands.'}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-2.5 border-t lg:border-t-0 lg:border-l border-border pt-4 lg:pt-0 lg:pl-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span>100% Strict TypeScript & Type-Safety</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span>OWASP Top 10 Security Guardrails</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span>Core Web Vitals & Sub-Second Loading</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-text-primary">
              <CheckCircle className="w-4 h-4 text-accent shrink-0" />
              <span>Automated Docker & CI/CD Pipelines</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
