import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, HeartHandshake, Zap } from 'lucide-react';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

const STUDENT_BENEFITS = [
  {
    title: 'Accessible Pricing',
    description: 'Heavily subsidized rates specifically for student entrepreneurs and final-year projects.',
    icon: GraduationCap
  },
  {
    title: 'Code Mentorship',
    description: 'I don\'t just deliver; I explain the architecture so you can defend your work during board vivas.',
    icon: Code2
  },
  {
    title: 'MVP Launchpad',
    description: 'Get your startup idea off the ground with a production-ready codebase that scales.',
    icon: Rocket
  }
];

export default function StudentHub() {
  return (
    <section id="students" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-border-subtle">
      <div className="text-center mb-24 flex flex-col items-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-8">
          <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
            STUDENT SYNDICATE
          </span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary uppercase leading-[0.9] mb-8">
          Fueling the Next <br /> <span className="text-accent">Generation</span> <br />
          of Builders.
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto font-medium text-lg border-l-4 border-accent pl-4 text-left">
          "I remember being a student with big ideas but limited capital. I'm here to bridge that gap for the next wave of engineers and founders."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {STUDENT_BENEFITS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: FAST_EASE }}
            className="brutal-card p-8 md:p-10 group"
          >
            <div className="size-14 bg-brand border-2 border-border-brutal flex items-center justify-center text-text-secondary mb-8 group-hover:bg-accent group-hover:text-[#000] group-hover:border-accent group-hover:-translate-y-1 transition-all">
              {item.icon ? <item.icon size={28} /> : <Zap size={28} />}
            </div>
            <h3 className="text-xl font-black text-text-primary uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">{item.title}</h3>
            <p className="text-text-secondary font-medium leading-relaxed text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 md:mt-24 bg-brand p-8 md:p-12 border-2 border-border-brutal max-w-4xl mx-auto shadow-brutal-solid relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h4 className="text-text-primary font-black uppercase tracking-tighter text-2xl">University Project Spec</h4>
            <p className="text-text-secondary text-sm font-medium">From IEEE paper implementation to complex final year hardware-software integrations. I provide full documentation support.</p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-text-primary">
                <span className="bg-accent text-[#000] p-1 border-2 border-accent"><Zap size={14} /></span>
                Full Report Mentorship
              </li>
              <li className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-text-primary">
                <span className="bg-accent text-[#000] p-1 border-2 border-accent"><Zap size={14} /></span>
                Viva Defense Prep
              </li>
            </ul>
          </div>
          <div className="bg-surface p-6 border-2 border-border-brutal shadow-brutal-white group hover:border-accent hover:shadow-brutal transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-12 bg-brand border-2 border-border-brutal flex items-center justify-center text-text-primary group-hover:bg-accent group-hover:text-[#000] group-hover:border-accent transition-colors">
                <GraduationCap size={20} />
              </div>
              <span className="text-text-primary font-black text-sm uppercase tracking-tighter">Student Project Index</span>
            </div>
            <p className="text-text-secondary font-medium text-xs mb-6">"Past projects include Hospital Management, AI Classify, and Secure E-Voting systems for university modules."</p>
            <a href="#projects" className="text-[10px] font-black uppercase text-accent border-b-2 border-accent pb-1 hover:text-text-primary hover:border-text-primary transition-colors">View Student Portfolio</a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center justify-center gap-6">
        <a
          href="#contact"
          className="brutal-btn"
        >
          Request Student ID Discount
          <HeartHandshake size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <p className="text-text-secondary text-[10px] font-mono uppercase font-bold tracking-widest">
          * Valid Student ID or .edu email required
        </p>
      </div>
    </section>
  );
}
