import { motion } from 'motion/react';
import { Bot, Mail, MessageSquare, Zap, Clock, Banknote } from 'lucide-react';

const AUTOMATIONS = [
  {
    title: 'Lead Capture & Nurture Bot',
    description: 'Instantly respond to inquiries across WhatsApp, Email, and Web, qualifying leads while you sleep.',
    savings: '80% response time reduction',
    icon: Bot
  },
  {
    title: 'Automated Invoice Engine',
    description: 'Trigger professional invoices and payment reminders based on system events or project milestones.',
    savings: 'Zero manual billing hours',
    icon: Banknote
  },
  {
    title: 'Omnichannel Support Sync',
    description: 'Consolidate customer data from disparate systems into a single source of truth for your team.',
    savings: '100% data accuracy',
    icon: MessageSquare
  }
];

export default function BusinessAutomation() {
  return (
    <section id="automation" className="px-6 py-40 max-w-7xl mx-auto border-t border-white/10 overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 size-[300px] md:size-[600px] bg-emerald-500/10 blur-[150px] rounded-full animate-pulse"></div>
      
      <div className="relative mb-20 md:mb-32">
        <span className="mono-label text-emerald-500 font-black mb-6 block tracking-[0.5em]">SYSTEM AUTOPILOT</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] max-w-4xl">
          Automation That <br />
          <span className="text-zinc-700 italic">Works While</span> <br />
          <span className="text-gradient">You Sleep.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {AUTOMATIONS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div className="glass p-8 md:p-12 rounded-[40px] md:rounded-[48px] border-white/5 h-full transition-all duration-500 group-hover:border-emerald-500/30 group-hover:-translate-y-2 flex flex-col">
              <div className="size-14 md:size-16 rounded-2xl md:rounded-3xl glass-accent flex items-center justify-center text-emerald-400 mb-8 md:mb-10 group-hover:scale-110 transition-transform duration-500">
                <item.icon size={28} className="md:w-8 md:h-8" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-4 md:mb-6">{item.title}</h3>
              <p className="text-zinc-500 font-light leading-relaxed mb-8 text-sm md:text-base">{item.description}</p>
              
              <div className="pt-6 md:pt-8 border-t border-white/5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Clock size={14} />
                  </div>
                  <span className="text-[10px] md:text-xs font-black text-emerald-500 uppercase tracking-widest">{item.savings}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 md:mt-24 glass p-8 md:p-12 rounded-[40px] md:rounded-[56px] border-emerald-500/20 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-emerald-500/5 transition-all group-hover:bg-emerald-500/10 duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">Need a Custom Workflow?</h4>
            <p className="text-zinc-400 font-light text-base md:text-lg">Stop doing repetitive work. Tell me your bottleneck and I'll architect a system to solve it permanently.</p>
          </div>
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 shadow-2xl transition-all"
          >
            Automation Audit
            <Zap size={16} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
