'use client';

import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

const PROMISES = [
  {
    author: "Growth-Stage Founder",
    role: "E-commerce Sector",
    quote: "We needed a system that wouldn't break during seasonal surges. The architecture delivered has handled 5x our normal traffic without a single millisecond of downtime.",
    rating: 5
  },
  {
    author: "Head of Operations",
    role: "Logistics SaaS",
    quote: "The automation workflows transformed our back-office. What used to take three people an entire day now happens automatically in seconds with 100% accuracy.",
    rating: 5
  },
  {
    author: "Product Owner",
    role: "HealthTech Startup",
    quote: "Security was our biggest concern. The implementation of role-based access and data encryption gave our investors the confidence they needed to move forward.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-40 max-w-7xl mx-auto border-t-2 border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-6">
            <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
              CLIENT COMMITMENTS
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-[0.9] max-w-2xl">
            What My Partners <span className="text-accent">Experience.</span>
          </h2>
        </div>
        <p className="text-zinc-400 max-w-sm font-medium text-lg border-l-4 border-accent pl-4">
          "I don't just write code; I deliver reliability. Here is the standard of excellence I bring to every engagement."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {PROMISES.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: FAST_EASE }}
            className="brutal-card p-10 group flex flex-col"
          >
            <div className="flex justify-between items-start mb-10">
              <div className="flex gap-1.5">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote size={40} className="text-white/10 group-hover:text-accent transition-colors" />
            </div>

            <p className="text-white text-lg font-medium leading-relaxed mb-10 flex-grow">
              "{item.quote}"
            </p>

            <div className="pt-6 border-t-2 border-white/10 group-hover:border-accent transition-colors">
              <h4 className="text-white font-black uppercase tracking-tight text-xl">{item.author}</h4>
              <p className="text-accent text-[10px] font-mono font-bold uppercase tracking-widest mt-2">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
