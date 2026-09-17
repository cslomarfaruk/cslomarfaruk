'use client';

import { motion } from 'motion/react';
import {
  Scale,
  CheckCircle2,
  XCircle,
  Clock,
  ShieldCheck,
  Zap,
  Globe2,
  DollarSign,
  ArrowRight,
  Code2,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

export default function WhyHireFreelance() {
  const { t, language } = useLanguage();

  const comparisonRows = [
    {
      metric: t.why_hire.row_cost,
      freelance: t.why_hire.freelance_cost,
      agency: t.why_hire.agency_cost,
      inhouse: t.why_hire.inhouse_cost,
      highlight: true,
    },
    {
      metric: t.why_hire.row_comm,
      freelance: t.why_hire.freelance_comm,
      agency: t.why_hire.agency_comm,
      inhouse: t.why_hire.inhouse_comm,
      highlight: false,
    },
    {
      metric: t.why_hire.row_speed,
      freelance: t.why_hire.freelance_speed,
      agency: t.why_hire.agency_speed,
      inhouse: t.why_hire.inhouse_speed,
      highlight: false,
    },
    {
      metric: t.why_hire.row_stack,
      freelance: t.why_hire.freelance_stack,
      agency: t.why_hire.agency_stack,
      inhouse: t.why_hire.inhouse_stack,
      highlight: false,
    },
    {
      metric: t.why_hire.row_flex,
      freelance: t.why_hire.freelance_flex,
      agency: t.why_hire.agency_flex,
      inhouse: t.why_hire.inhouse_flex,
      highlight: false,
    },
  ];

  const valueProps = [
    {
      icon: Clock,
      title: t.why_hire.b1_title,
      desc: t.why_hire.b1_desc,
    },
    {
      icon: ShieldCheck,
      title: t.why_hire.b2_title,
      desc: t.why_hire.b2_desc,
    },
    {
      icon: Zap,
      title: t.why_hire.b3_title,
      desc: t.why_hire.b3_desc,
    },
    {
      icon: Globe2,
      title: t.why_hire.b4_title,
      desc: t.why_hire.b4_desc,
    },
  ];

  return (
    <section
      id="why-hire"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
      aria-label="Why Hire a Freelance Full-Stack Developer"
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
          <Scale className="w-3.5 h-3.5 text-accent" />
          <span>{t.why_hire.tagline}</span>
        </div>

        <h2
          className={cn(
            'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
            language === 'bn' ? 'leading-snug' : 'leading-tight'
          )}
        >
          {t.why_hire.headline}
        </h2>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {t.why_hire.subheadline}
        </p>
      </motion.div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="min-w-[720px] rounded-2xl border border-border bg-surface overflow-hidden shadow-soft-sm">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-surface-subtle border-b border-border text-xs sm:text-sm font-semibold text-text-secondary">
            <div className="col-span-3 p-4 sm:p-5 flex items-center">
              <span>Decision Factor</span>
            </div>
            <div className="col-span-4 p-4 sm:p-5 bg-accent/5 border-x border-accent/20 text-accent flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold">
                <Code2 className="w-4 h-4 text-accent" />
                <span>{t.why_hire.col_freelance}</span>
              </div>
              <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-accent text-accent-text">
                Recommended
              </span>
            </div>
            <div className="col-span-3 p-4 sm:p-5 flex items-center border-r border-border text-text-primary">
              <span>{t.why_hire.col_agency}</span>
            </div>
            <div className="col-span-2 p-4 sm:p-5 flex items-center text-text-primary">
              <span>{t.why_hire.col_inhouse}</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className={cn(
                  'grid grid-cols-12 text-xs sm:text-sm transition-colors hover:bg-surface-subtle/50',
                  idx % 2 === 1 ? 'bg-surface-subtle/20' : 'bg-surface'
                )}
              >
                {/* Metric Label */}
                <div className="col-span-3 p-4 sm:p-5 font-semibold text-text-primary flex items-center">
                  <span>{row.metric}</span>
                </div>

                {/* Freelance (Highlighted Column) */}
                <div className="col-span-4 p-4 sm:p-5 bg-accent/5 border-x border-accent/20 flex items-start gap-2.5 font-medium text-text-primary">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className={cn(row.highlight ? 'font-bold text-accent' : '')}>
                    {row.freelance}
                  </span>
                </div>

                {/* US/UK Agency */}
                <div className="col-span-3 p-4 sm:p-5 border-r border-border flex items-start gap-2 text-text-secondary">
                  <XCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5 opacity-60" />
                  <span>{row.agency}</span>
                </div>

                {/* In-House Employee */}
                <div className="col-span-2 p-4 sm:p-5 flex items-start gap-2 text-text-secondary">
                  <XCircle className="w-4 h-4 text-text-muted shrink-0 mt-0.5 opacity-60" />
                  <span>{row.inhouse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Advantage Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-14">
        {valueProps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="editorial-card p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="size-10 rounded-xl bg-accent-subtle border border-accent/20 text-accent flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action Bar */}
      <div className="mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h4 className="text-base sm:text-lg font-bold text-text-primary">
            {language === 'bn' ? 'আপনার পরবর্তী প্রজেক্ট নিয়ে কথা বলতে চান?' : 'Ready to build high-ROI software without agency overhead?'}
          </h4>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            {language === 'bn'
              ? '২৪ ঘণ্টার মধ্যে আর্কিটেকচারাল রূপরেখা ও নির্দিষ্ট টাইমলাইন প্রদান করা হবে।'
              : 'Direct communication, transparent estimates, and guaranteed delivery.'}
          </p>
        </div>
        <Link
          href="#contact"
          className="btn-primary shrink-0 text-xs sm:text-sm py-2.5 px-5 rounded-xl shadow-soft-sm hover:shadow-soft-md"
        >
          <span>{language === 'bn' ? 'প্রজেক্ট শুরু করুন' : 'Schedule Project Call / Hire Me'}</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
