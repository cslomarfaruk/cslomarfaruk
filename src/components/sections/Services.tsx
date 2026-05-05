'use client';

import { motion } from 'motion/react';
import { Layout, Server, Cpu, ShieldCheck, Zap, BarChart3, Bot, Link2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

export default function Services() {
  const { t, language } = useLanguage();

  const SERVICES = [
    {
      title: t.services.s1_title,
      description: t.services.s1_desc,
      icon: Layout,
      impact: t.services.s1_impact,
      tags: ['Next.js', 'React', 'SEO', 'Tailwind']
    },
    {
      title: t.services.s2_title,
      description: t.services.s2_desc,
      icon: Bot,
      impact: t.services.s2_impact,
      tags: ['Dashboards', 'Portals', 'Data Sync', 'Secure']
    },
    {
      title: t.services.s3_title,
      description: t.services.s3_desc,
      icon: BarChart3,
      impact: t.services.s3_impact,
      tags: ['Dashboards', 'RBAC', 'Analytics', 'Management']
    },
    {
      title: t.services.s4_title,
      description: t.services.s4_desc,
      icon: Zap,
      impact: t.services.s4_impact,
      tags: ['Workflows', 'Scripts', 'APIs', 'Webhooks']
    }
  ];

  return (
    <section id="skills" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 md:mb-32">
        <div className="max-w-3xl">
          <span className="mono-label text-emerald-500 font-black mb-6 md:mb-4 block tracking-[0.4em]">{t.services.tagline}</span>
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase",
            language === 'bn' ? "leading-[1.2] tracking-normal" : "tracking-tighter leading-[0.9] md:leading-[0.8] text-white"
          )}>
            <span className={cn(language === 'bn' && "bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 pb-2 inline-block")}>
              {t.services.headline}
            </span>
          </h2>
        </div>
        <div className="glass p-6 md:p-8 rounded-3xl md:rounded-[40px] border-white/10 max-w-sm md:max-w-xs shadow-2xl">
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light tracking-tight">
            {t.services.subheadline}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass p-8 md:p-10 rounded-[40px] md:rounded-[48px] border-white/10 hover:glass-accent transition-all group overflow-hidden relative"
          >
            <div className="absolute -top-12 -right-12 size-32 bg-emerald-500/10 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            
            <div className="flex flex-col gap-8 md:gap-10 relative z-10">
              <div className="size-14 rounded-[20px] glass border-white/10 flex items-center justify-center text-zinc-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:glow-emerald transition-all duration-500">
                <service.icon size={28} />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-black text-white text-lg md:text-xl tracking-tight leading-none uppercase mb-2">{service.title}</h3>
                  <p className="text-zinc-500 text-xs md:text-sm font-light leading-snug">{service.description}</p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <span className="text-emerald-500 text-[10px] font-black uppercase tracking-widest block mb-4 md:mb-3">Stack</span>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((item) => (
                      <span 
                        key={item}
                        className="px-3 py-1 text-[8px] md:text-[9px] font-mono font-bold bg-white/5 text-zinc-400 rounded-full border border-white/5 transition-all group-hover:border-emerald-500/30 group-hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <Zap size={14} className="text-emerald-500" />
                  <span className="text-[10px] md:text-[11px] font-black text-white uppercase italic tracking-tighter">{service.impact}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
