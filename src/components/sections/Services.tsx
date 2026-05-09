'use client';

import { motion } from 'motion/react';
import { Layout, BarChart3, Bot, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

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
    <section id="skills" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-white/10 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: FAST_EASE }}
        className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 md:mb-32 relative z-10"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-6">
            <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
              {t.services.tagline}
            </span>
          </div>
          <h2 className={cn(
            "text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-white",
            language === 'bn' && "leading-[1.2] tracking-normal"
          )}>
            {t.services.headline}
          </h2>
        </div>
        
        <div className="bg-brand p-6 md:p-8 border-2 border-accent max-w-sm md:max-w-xs shadow-brutal relative">
          <div className="absolute top-0 right-0 p-2 bg-accent text-black font-black">
            <ArrowRight size={20} />
          </div>
          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium tracking-tight mt-4">
            {t.services.subheadline}
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: FAST_EASE }}
            className="brutal-card p-8 md:p-10 group"
          >
            <div className="flex flex-col h-full gap-8 md:gap-10">
              <div className="size-14 bg-brand border-2 border-white/20 flex items-center justify-center text-zinc-400 group-hover:bg-accent group-hover:text-black group-hover:border-accent group-hover:shadow-[4px_4px_0px_rgba(255,255,255,0.2)] transition-all duration-200">
                <service.icon size={28} />
              </div>

              <div className="space-y-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-black text-white text-xl tracking-tight leading-none uppercase mb-4">{service.title}</h3>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed">{service.description}</p>
                </div>

                <div className="pt-6 border-t-2 border-white/10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-[10px] font-mono font-bold bg-zinc-900 text-zinc-400 border-2 border-white/10 group-hover:border-accent group-hover:text-white transition-all uppercase"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 bg-accent/10 border-l-4 border-accent p-3 group-hover:bg-accent transition-colors">
                    <Zap size={16} className="text-accent group-hover:text-black" />
                    <span className="text-[11px] font-black text-accent group-hover:text-black uppercase tracking-wider">{service.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
