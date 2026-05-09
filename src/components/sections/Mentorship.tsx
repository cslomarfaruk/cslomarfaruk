'use client';

import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, HeartHandshake, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

const SPRING = { type: "spring", stiffness: 100, damping: 30, mass: 0.8 } as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const ICONS = [GraduationCap, Code2, Rocket];

export default function Mentorship() {
  const { t, language } = useLanguage();

  const benefits = [
    { title: t.mentorship.b1_title, desc: t.mentorship.b1_desc },
    { title: t.mentorship.b2_title, desc: t.mentorship.b2_desc },
    { title: t.mentorship.b3_title, desc: t.mentorship.b3_desc },
  ];

  return (
    <section id="mentorship" className="px-5 sm:px-6 py-20 md:py-32 lg:py-40 max-w-7xl mx-auto border-t border-white/[0.06] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -bottom-1/4 -right-1/4 -z-10 w-[500px] h-[500px] bg-emerald-600/[0.04] blur-[150px] rounded-full" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: EASE_OUT }}
        className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
      >
        <span className="mono-label text-emerald-500 mb-5 block tracking-[0.4em]">
          {t.mentorship.tagline}
        </span>
        <h2 className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8",
          language === 'bn'
            ? "leading-[1.2] tracking-normal"
            : "tracking-tighter leading-[0.9] text-white"
        )}>
          <span className={cn(language === 'bn' && "bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 pb-2 inline-block")}>
            {t.mentorship.headline}
          </span>
        </h2>
        <p className="text-zinc-400 font-light text-base md:text-lg leading-relaxed tracking-tight max-w-2xl mx-auto">
          {t.mentorship.subheadline}
        </p>
      </motion.div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-16 md:mb-20">
        {benefits.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...SPRING, delay: index * 0.08 }}
              className="group p-6 md:p-8 rounded-3xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all duration-300">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight mb-3">{item.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
      >
        <a
          href="#contact"
          className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-bold text-sm flex items-center gap-2.5 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 transition-all active:scale-[0.98]"
        >
          <HeartHandshake size={16} />
          {t.mentorship.cta_text}
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
          {t.mentorship.note}
        </p>
      </motion.div>
    </section>
  );
}
