import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

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
    <section className="px-6 py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="text-center mb-24">
        <span className="mono-label text-emerald-500 font-black mb-6 block tracking-[0.5em]">CLIENT COMMITMENTS</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none mb-6">
          What My Partners <br /> <span className="text-gradient">Experience.</span>
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto font-light text-lg italic">"I don't just write code; I deliver reliability. Here is the standard of excellence I bring to every engagement."</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROMISES.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass p-12 rounded-[56px] border-white/5 relative group"
          >
            <div className="absolute top-10 right-10 text-emerald-500/20 group-hover:text-emerald-500/40 transition-colors">
              <Quote size={48} />
            </div>
            
            <div className="flex gap-1 mb-8">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-emerald-500 text-emerald-500" />
              ))}
            </div>

            <p className="text-white text-lg font-light leading-relaxed mb-10 italic">
              "{item.quote}"
            </p>

            <div className="pt-8 border-t border-white/5">
              <h4 className="text-white font-black uppercase tracking-tight">{item.author}</h4>
              <p className="text-zinc-500 text-xs uppercase tracking-widest mt-1">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
