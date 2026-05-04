import { motion } from 'motion/react';
import { Shield, Zap, Lock, Cpu } from 'lucide-react';

const TRUST_PILLARS = [
  {
    title: 'Security-First Core',
    description: 'Engineered with TLS encryption, secure JWT auth, and role-based access control to keep your business data private.',
    icon: Lock
  },
  {
    title: 'Resilient Uptime',
    description: 'Clean architecture and redundant deployments ensure your systems stay alive during high-traffic spikes.',
    icon: Zap
  },
  {
    title: 'Scalable Logic',
    description: 'Modular codebases that grow with your user base, preventing technical debt before it even starts.',
    icon: Cpu
  },
  {
    title: 'Global Performance',
    description: 'Edge-optimized delivery ensuring sub-second response times for users anywhere in the world.',
    icon: Shield
  }
];

export default function Trust() {
  return (
    <section id="about" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        <div>
          <span className="mono-label text-emerald-500 font-black mb-6 block tracking-[0.5em]">AUTHORITY</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] md:leading-[0.8] mb-12">
            Mission <br /><span className="text-zinc-700 italic">Critical</span> <br /> 
            <span className="text-gradient">Security.</span>
          </h2>
          <div className="space-y-8 text-zinc-400 leading-relaxed font-light text-xl tracking-tight">
            <p>
              I bridge the gap between <span className="text-white font-bold">Complex Engineering</span> and <span className="text-white font-bold">Business Strategy</span>. My focus is on architecting systems that don't just work, but scale and deliver measurable ROI.
            </p>
            <p>
              From conversion-optimized SaaS products to deep business automation, I help founders and enterprises transform technical debt into digital assets that fuel growth.
            </p>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TRUST_PILLARS.map((item, index) => (
            <motion.div
              key={item.title}
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
