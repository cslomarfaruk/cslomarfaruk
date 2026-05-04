import { motion } from 'motion/react';
import { GraduationCap, Code2, Rocket, HeartHandshake, ArrowRight, Zap } from 'lucide-react';

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
    <section id="students" className="px-6 py-40 max-w-7xl mx-auto border-t border-white/10 relative overflow-hidden">
      <div className="absolute -bottom-1/4 -right-1/4 -z-10 size-[500px] bg-emerald-600/5 blur-[120px] rounded-full"></div>

      <div className="text-center mb-24">
        <span className="mono-label text-emerald-400 font-black mb-6 block tracking-[0.5em]">STUDENT SYNDICATE</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-tight mb-8">
          Fueling the Next <br /> <span className="text-zinc-700 italic">Generation of</span> <br />
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-800 bg-clip-text text-transparent">Builders.</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto font-light text-lg italic">
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
            transition={{ delay: index * 0.1 }}
            className="glass p-8 md:p-10 rounded-[40px] md:rounded-[48px] border-white/5 hover:border-emerald-500/20 transition-all group relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 size-32 bg-emerald-500/5 blur-3xl group-hover:bg-emerald-500/10 transition-all duration-700"></div>
            <div className="size-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500 relative z-10">
              {item.icon ? <item.icon size={28} /> : <Zap size={28} />}
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-tight mb-4 relative z-10">{item.title}</h3>
            <p className="text-zinc-500 font-light leading-relaxed text-sm relative z-10">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 glass p-8 md:p-12 rounded-[40px] border-emerald-500/20 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h4 className="text-white font-black uppercase tracking-tight text-xl">University Project Spec</h4>
            <p className="text-zinc-500 text-sm font-light">From IEEE paper implementation to complex final year hardware-software integrations. I provide full documentation support.</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-emerald-400">
                <Zap size={14} /> Full Report Mentorship
              </li>
              <li className="flex items-center gap-3 text-[10px] uppercase font-black tracking-widest text-emerald-400">
                <Zap size={14} /> Viva Defense Prep
              </li>
            </ul>
          </div>
          <div className="bg-white/5 p-6 rounded-3xl border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                <GraduationCap size={20} />
              </div>
              <span className="text-white font-black text-sm uppercase tracking-tighter">Student Project Index</span>
            </div>
            <p className="text-zinc-400 text-xs mb-6 italic">"Past projects include Hospital Management, AI Classify, and Secure E-Voting systems for university modules."</p>
            <a href="#projects" className="text-[10px] font-black uppercase border-b border-emerald-400 text-emerald-400 pb-1">View Student Portfolio</a>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="#contact"
          className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl flex items-center gap-3 shadow-2xl hover:scale-105 transition-all"
        >
          Request Student ID Discount
          <HeartHandshake size={16} />
        </a>
        <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest">
          * Valid Student ID or .edu email required
        </p>
      </div>
    </section>
  );
}
