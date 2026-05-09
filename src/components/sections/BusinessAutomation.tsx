import { motion } from 'motion/react';
import { Bot, MessageSquare, Zap, Clock, Banknote } from 'lucide-react';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

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
    <section id="automation" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-border-subtle overflow-hidden">
      <div className="relative mb-20 md:mb-32">
        <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-8">
          <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
            SYSTEM AUTOPILOT
          </span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-text-primary uppercase leading-[0.9] max-w-4xl">
          Automation That <br />
          <span className="text-accent">Works While</span> <br />
          You Sleep.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {AUTOMATIONS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: FAST_EASE }}
            className="brutal-card p-8 md:p-10 flex flex-col group h-full"
          >
            <div className="size-14 bg-brand border-2 border-border-brutal flex items-center justify-center text-text-secondary mb-8 group-hover:bg-accent group-hover:text-[#000] group-hover:border-accent group-hover:-translate-y-1 transition-all">
              <item.icon size={28} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-black text-text-primary uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
            <p className="text-text-secondary font-medium leading-relaxed mb-8 text-sm flex-grow">{item.description}</p>
            
            <div className="pt-6 border-t-2 border-border-subtle mt-auto group-hover:border-accent transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-accent text-[#000] p-1 border-2 border-accent">
                  <Clock size={14} />
                </div>
                <span className="text-[10px] md:text-xs font-black text-text-primary uppercase tracking-widest">{item.savings}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: FAST_EASE }}
        className="mt-16 md:mt-24 bg-brand p-8 md:p-12 border-2 border-border-brutal shadow-brutal-solid relative group hover:border-accent hover:shadow-brutal transition-all"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
          <div className="max-w-xl text-center md:text-left">
            <h4 className="text-2xl md:text-4xl font-black text-text-primary uppercase tracking-tighter mb-4">Need a Custom Workflow?</h4>
            <p className="text-text-secondary font-medium text-base md:text-lg border-l-4 border-accent pl-4">Stop doing repetitive work. Tell me your bottleneck and I'll architect a system to solve it permanently.</p>
          </div>
          <a 
            href="#contact"
            className="brutal-btn w-full md:w-auto shrink-0"
          >
            Automation Audit
            <Zap size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
