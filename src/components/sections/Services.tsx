'use client';

import { motion } from 'motion/react';
import {
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Cpu,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

export default function Services() {
  const { t, language } = useLanguage();

  const SERVICES = [
    {
      title: t.services.s1_title,
      description: t.services.s1_desc,
      icon: Globe2,
      impact: t.services.s1_impact,
    },
    {
      title: t.services.s2_title,
      description: t.services.s2_desc,
      icon: GraduationCap,
      impact: t.services.s2_impact,
    },
    {
      title: t.services.s3_title,
      description: t.services.s3_desc,
      icon: LayoutDashboard,
      impact: t.services.s3_impact,
    },
    {
      title: t.services.s4_title,
      description: t.services.s4_desc,
      icon: Cpu,
      impact: t.services.s4_impact,
    },
  ];

  const TRUST_SIGNALS = [
    {
      icon: ShieldCheck,
      title: language === 'bn' ? 'নিরাপদ ও নির্ভরযোগ্য' : 'Secure & Reliable',
      desc: language === 'bn' ? 'আধুনিক নিরাপত্তা ও এনক্রিপশন প্র্যাকটিস' : 'Modern security standards & encrypted APIs'
    },
    {
      icon: Clock,
      title: language === 'bn' ? 'স্পষ্ট সময়সীমা' : 'Clear Timelines',
      desc: language === 'bn' ? 'নিয়মিত প্রোগ্রেস আপডেট ও অন-টাইম ডেলিভারি' : 'Regular progress demos & on-time delivery'
    },
    {
      icon: CheckCircle2,
      title: language === 'bn' ? 'প্রোডাকশন-রেডি' : 'Production-Ready',
      desc: language === 'bn' ? 'বাস্তব ক্লাউড সার্ভারে টেস্ট করা নির্ভরযোগ্য আর্কিটেকচার' : 'Battle-tested on Linux VPS & modern cloud stacks'
    },
  ];

  return (
    <section
      id="services"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div className="max-w-2xl">
          <div className="pill-badge mb-4">
            <span>{t.services.tagline}</span>
          </div>
          <h2
            className={cn(
              'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
              language === 'bn' ? 'leading-snug' : 'leading-tight'
            )}
          >
            {t.services.headline}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            {t.services.subheadline}
          </p>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors group self-start md:self-end"
        >
          <span>{language === 'bn' ? 'প্রজেক্ট নিয়ে আলাপ করুন' : 'Discuss a custom system'}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* 2x2 Clean Services Grid (Single column on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-16">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="editorial-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="size-11 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary tracking-tight mb-2.5">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border-subtle flex items-center gap-2 text-xs font-semibold text-accent">
                <span className="size-1.5 rounded-full bg-accent" />
                <span>{service.impact}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Integrated Trust & Reliability Strip (No redundant separate section) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border bg-surface-subtle p-6 sm:p-8"
      >
        <div className="text-xs font-bold uppercase tracking-wider text-text-muted mb-4">
          {language === 'bn' ? 'কাজের নীতিমালা ও বিশ্বস্ততা' : 'Engineered for Reliability'}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_SIGNALS.map((signal) => {
            const SignalIcon = signal.icon;
            return (
              <div key={signal.title} className="flex items-start gap-3.5">
                <div className="size-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <SignalIcon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-1">
                    {signal.title}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {signal.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
