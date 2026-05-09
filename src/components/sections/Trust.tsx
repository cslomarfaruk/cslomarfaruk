'use client';

import { motion } from 'motion/react';
import { Shield, Zap, Lock } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

export default function Trust() {
  const { t, language } = useLanguage();

  const TRUST_PILLARS = [
    {
      title: t.trust.p1_title,
      description: t.trust.p1_desc,
      icon: Lock
    },
    {
      title: t.trust.p2_title,
      description: t.trust.p2_desc,
      icon: Zap
    },
    {
      title: t.trust.p3_title,
      description: t.trust.p3_desc,
      icon: Shield
    }
  ];

  return (
    <section id="about" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: FAST_EASE }}
          className=""
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-8">
            <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
              {t.trust.tagline}
            </span>
          </div>
          
          <h2 className={cn(
            "text-5xl sm:text-6xl md:text-[5rem] lg:text-[6rem] font-black uppercase mb-12 text-white tracking-tighter leading-[0.9]",
            language === 'bn' && "leading-[1.2] tracking-normal"
          )}>
            {t.trust.headline}
          </h2>
          
          <div className="space-y-6 text-zinc-300 leading-relaxed font-medium text-lg md:text-xl border-l-4 border-accent pl-6">
            <p>{t.trust.desc1}</p>
            <p>{t.trust.desc2}</p>
          </div>

          <div className="mt-16">
            <div className="border-2 border-white/20 bg-brand p-6 inline-flex items-center gap-6 group hover:border-accent hover:shadow-brutal transition-all duration-200">
              <div className="size-16 bg-accent border-2 border-accent text-black flex items-center justify-center font-black text-2xl group-hover:-translate-y-1 transition-transform">
                99%
              </div>
              <div>
                <h4 className="text-xl font-black text-white tracking-tighter uppercase leading-none mb-2">Code Quality</h4>
                <p className="font-mono text-[10px] text-accent font-black uppercase tracking-widest">Verified Documentation</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {TRUST_PILLARS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: FAST_EASE }}
              className="brutal-card p-8 md:p-10 group"
            >
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                <div className="p-4 border-2 border-white/20 bg-brand text-zinc-400 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-200 shrink-0">
                  <item.icon size={32} />
                </div>
                <div className="space-y-3 pt-1">
                  <h4 className="text-2xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-accent transition-colors">{item.title}</h4>
                  <p className="text-sm md:text-base text-zinc-400 font-medium leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
