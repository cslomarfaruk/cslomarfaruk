'use client';

import { motion } from 'motion/react';
import { Shield, Zap, Lock, Cpu } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

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
    <section id="about" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div>
          <span className="mono-label text-emerald-500 font-black mb-6 block tracking-[0.5em]">{t.trust.tagline}</span>
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-12",
            language === 'bn' ? "leading-[1.2] tracking-normal" : "tracking-tighter leading-[0.9] md:leading-[1.1] text-white"
          )}>
            <span className={cn(language === 'bn' && "bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 pb-2 inline-block")}>
              {t.trust.headline}
            </span>
          </h2>
          <div className="space-y-8 text-zinc-400 leading-relaxed font-light text-xl tracking-tight">
            <p>{t.trust.desc1}</p>
            <p>{t.trust.desc2}</p>
          </div>

          <div className="mt-16 flex flex-wrap gap-6">
            <div className="glass p-8 rounded-[40px] border-emerald-500/20 flex items-center gap-6 shadow-2xl">
              <div className="size-16 rounded-full glass border-emerald-500/30 flex items-center justify-center font-mono text-emerald-500 text-xl font-black shadow-inner">
                99%
              </div>
              <div>
                <h4 className="text-xl font-black text-white tracking-tight uppercase">Code Quality</h4>
                <p className="mono-label !text-zinc-500 tracking-[0.2em]">Verified Documentation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {TRUST_PILLARS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-[48px] border-white/10 hover:border-emerald-500/30 transition-all group overflow-hidden"
            >
              <div className="p-4 glass-accent rounded-[24px] w-fit mb-8 text-emerald-400 group-hover:bg-white group-hover:text-emerald-600 transition-all duration-500 shadow-xl">
                <item.icon size={28} />
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-black text-white tracking-widest uppercase group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
