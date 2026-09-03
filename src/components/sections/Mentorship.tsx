'use client';

import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

export default function StudentHub() {
  const { t, language } = useLanguage();

  const benefits = [
    {
      title: t.mentorship.b1_title,
      desc: t.mentorship.b1_desc,
      icon: Code2,
    },
    {
      title: t.mentorship.b2_title,
      desc: t.mentorship.b2_desc,
      icon: GraduationCap,
    },
    {
      title: t.mentorship.b3_title,
      desc: t.mentorship.b3_desc,
      icon: Rocket,
    },
  ];

  return (
    <section
      id="students"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
    >
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mb-12 sm:mb-16"
      >
        <div className="pill-badge mb-4">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>{t.mentorship.tagline}</span>
        </div>

        <h2
          className={cn(
            'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
            language === 'bn' ? 'leading-snug' : 'leading-tight'
          )}
        >
          {t.mentorship.headline}
        </h2>

        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
          {t.mentorship.subheadline}
        </p>
      </motion.div>

      {/* 3 Value Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
        {benefits.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="editorial-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="size-11 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-text-primary tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-accent/30 bg-accent-subtle p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="size-10 rounded-xl bg-accent/20 text-accent flex items-center justify-center shrink-0">
            <Tag className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-0.5">
              {language === 'bn' ? 'স্টুডেন্ট স্পেশাল অফার' : 'Special Student Pricing'}
            </span>
            <p className="text-xs sm:text-sm text-text-secondary">
              {t.mentorship.note}
            </p>
          </div>
        </div>

        <a
          href="#contact"
          className="btn-primary py-2.5 px-5 text-sm self-start sm:self-auto shrink-0"
        >
          <span>{t.mentorship.cta_text}</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
