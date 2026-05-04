import { motion } from 'motion/react';
import { Layout, Server, Cpu, ShieldCheck, Zap, BarChart3, Bot, Link2 } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const SERVICES = [
  {
    title: 'Custom SaaS & Web Apps',
    description: 'High-performance, ROI-driven platforms engineered with Next.js and secure cloud architecture.',
    icon: Layout,
    impact: 'Scalable to millions',
    tags: ['Next.js', 'React', 'TypeScript', 'Secure Auth']
  },
  {
    title: 'Business Automation',
    description: 'Custom workflow orchestration and bots that handle manual tasks while you sleep.',
    icon: Bot,
    impact: 'Save 40+ hours/week',
    tags: ['Lead Bots', 'Auto-Invoicing', 'CRM Sync', 'WhatsApp']
  },
  {
    title: 'Admin Panels & BI',
    description: 'Centralized command centers with real-time analytics and role-based access control.',
    icon: BarChart3,
    impact: 'Data-driven decisions',
    tags: ['Dashboards', 'RBAC', 'Live Data', 'Management']
  },
  {
    title: 'API & Integrations',
    description: 'Secure, low-latency connections between your business tools and third-party services.',
    icon: Link2,
    impact: 'Zero-friction data flow',
    tags: ['Stripe', 'Twilio', 'Custom APIs', 'Webhooks']
  }
];

export default function Services() {
  return (
    <section id="skills" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 md:mb-32">
        <div className="max-w-3xl">
          <span className="mono-label text-emerald-500 font-black mb-6 md:mb-4 block tracking-[0.4em]">ELITE SOLUTIONS</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] md:leading-[0.8]">
            Built for <br className="hidden md:block" /><span className="text-zinc-700 italic">Predictable</span> <br /> <span className="text-emerald-500 underline decoration-zinc-800">Growth.</span>
          </h2>
        </div>
        <div className="glass p-6 md:p-8 rounded-3xl md:rounded-[40px] border-white/10 max-w-sm md:max-w-xs shadow-2xl">
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed font-light tracking-tight">
            Leveraging enterprise architecture to ensure your mission-critical applications are secure, scalable, and built for market dominance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
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
