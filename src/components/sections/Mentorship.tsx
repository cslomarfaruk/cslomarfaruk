'use client';

import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;
const ICONS = [GraduationCap, Code2, Rocket];

export default function StudentHub() {
  const { t, language } = useLanguage();

  const benefits = [
    { title: t.mentorship.b1_title, desc: t.mentorship.b1_desc },
    { title: t.mentorship.b2_title, desc: t.mentorship.b2_desc },
    { title: t.mentorship.b3_title, desc: t.mentorship.b3_desc },
  ];

  return (
    <section id="students" className="px-5 sm:px-6 py-20 md:py-32 lg:py-40 max-w-7xl mx-auto border-t-2 border-white/10 relative overflow-hidden">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: FAST_EASE }}
        className="text-center mb-16 md:mb-24 max-w-4xl mx-auto flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-8">
          <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
            {t.mentorship.tagline}
          </span>
        </div>
        
        <h2 className={cn(
          "text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black uppercase mb-8 text-white tracking-tighter leading-[0.9]",
          language === 'bn' && "leading-[1.2] tracking-normal"
        )}>
          {t.mentorship.headline}
        </h2>
        <p className="text-zinc-400 font-medium text-base md:text-xl leading-relaxed tracking-tight max-w-2xl mx-auto border-l-4 border-accent pl-4 text-left">
          {t.mentorship.subheadline}
        </p>
      </motion.div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 md:mb-20">
        {benefits.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: FAST_EASE }}
              className="brutal-card p-8 group"
            >
              <div className="size-16 border-2 border-white/20 bg-brand flex items-center justify-center text-zinc-400 mb-8 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-200">
                <Icon size={32} />
              </div>
              <h3 className="text-xl font-black text-white tracking-tight uppercase mb-4">{item.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: FAST_EASE }}
        className="flex flex-col items-center justify-center gap-6"
      >
        <a href="#contact" className="brutal-btn group">
          {t.mentorship.cta_text}
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="border-2 border-white/10 px-4 py-2 bg-brand inline-block">
          <p className="text-zinc-400 text-[10px] font-mono font-black uppercase tracking-widest text-center">
            {t.mentorship.note}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
