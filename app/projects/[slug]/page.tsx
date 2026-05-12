'use client';

import { use } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '@/src/lib/projects-data';
import { 
  Github, 
  ExternalLink, 
  ArrowLeft, 
  CheckCircle2, 
  Terminal, 
  Shield, 
  Cpu, 
  Layers,
  Globe,
  Lock,
  Zap,
  Code2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { notFound } from 'next/navigation';

import { useLanguage } from '@/lib/i18n';
import { ThemeToggle } from '@/src/components/ThemeToggle';

export default function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { language, setLanguage } = useLanguage();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white selection:bg-accent selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b-2 border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/projects" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest font-black">All Projects</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
                className="font-mono text-[10px] font-black uppercase px-3 py-2 border-2 border-white/20 hover:border-accent hover:text-accent text-white transition-all h-10 min-w-[40px] flex items-center justify-center"
              >
                {language === 'en' ? 'EN' : 'BN'}
              </button>
              <ThemeToggle />
            </div>
            
            <div className="h-6 w-[2px] bg-white/10 hidden sm:block mx-2" />

            {project.links.github !== '#' && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-accent transition-colors">
                <Github size={24} />
              </a>
            )}
            {project.links.live !== '#' && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="brutal-btn py-3 px-6 text-sm">
                Live Preview
              </a>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-accent/10 border-2 border-accent text-accent font-mono text-[10px] font-black uppercase tracking-widest">
                {project.niche}
              </span>
              <span className="text-zinc-500 font-mono text-[10px] font-black uppercase tracking-widest">
                {project.period}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              {project.title}
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-7">
                <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="lg:col-span-5 flex flex-wrap gap-4">
                <div className="flex-1 p-4 border-2 border-white/10 bg-white/5 min-w-[140px]">
                  <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Role</span>
                  <span className="text-sm font-bold">Engineering Lead</span>
                </div>
                <div className="flex-1 p-4 border-2 border-white/10 bg-white/5 min-w-[140px]">
                  <span className="block text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Stack</span>
                  <span className="text-sm font-bold text-accent">Production Grade</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto relative overflow-hidden brutal-card p-4 bg-brand/50"
        >
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto block" 
          />
        </motion.div>
      </section>

      {/* Tech Stack & Impact */}
      <section className="py-32 bg-white/5 border-y-2 border-white/10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-8 flex items-center gap-3">
                <Cpu size={16} /> Technical Architecture
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {project.full_stack_details?.map(tech => (
                  <div key={tech} className="flex items-center gap-4 p-4 border-2 border-white/10 hover:border-accent transition-colors group bg-zinc-950">
                    <Code2 size={18} className="text-zinc-500 group-hover:text-accent transition-colors" />
                    <span className="font-bold text-sm tracking-tight">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 border-4 border-accent bg-accent/5 shadow-brutal-white">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-6">Core Impact</h3>
              <p className="text-2xl font-black leading-tight italic">"{project.impact}"</p>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-20">
            {project.features_detailed && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {project.features_detailed.map(cat => (
                  <div key={cat.category}>
                    <h4 className="text-xs font-black uppercase tracking-widest text-zinc-500 border-b-2 border-white/10 pb-4 mb-6 flex items-center gap-2">
                      <Layers size={14} className="text-accent" /> {cat.category}
                    </h4>
                    <ul className="space-y-4">
                      {cat.items.map(item => (
                        <li key={item} className="flex items-start gap-3 group">
                          <CheckCircle2 size={16} className="text-accent mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="text-zinc-300 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {project.security_highlights && (
              <div className="p-10 bg-zinc-950 border-2 border-accent shadow-[8px_8px_0px_rgba(42,157,143,0.2)]">
                <h4 className="text-xs font-black uppercase tracking-widest text-accent mb-8 flex items-center gap-2">
                  <Shield size={18} /> Security Infrastructure
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.security_highlights.map(item => (
                    <div key={item} className="flex items-center gap-3 text-sm font-bold text-zinc-300">
                      <div className="size-2 bg-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visual Walkthrough - Blog Style */}
      <section className="py-40 px-6 space-y-40">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            Detailed <span className="text-zinc-700 italic">Walkthrough</span>
          </h2>
          <p className="text-zinc-500 font-medium text-lg">
            A step-by-step examination of the platform's interface, features, and user experience.
          </p>
        </div>

        {project.gallery.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 gap-12">
              <div className="brutal-card p-0 overflow-hidden bg-brand shadow-[20px_20px_0px_rgba(255,255,255,0.02)] h-auto">
                <img 
                  src={item.url} 
                  alt={item.description} 
                  className="w-full h-auto block"
                />
              </div>
              <div className="max-w-4xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="size-10 rounded-full border-2 border-accent flex items-center justify-center font-mono font-black text-accent">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <div className="h-[2px] w-12 bg-accent" />
                </div>
                <p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Conclusion / Next Steps */}
      <section className="py-40 px-6 bg-brand border-t-2 border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10">
            Interested in a <br />
            <span className="text-accent">Similar Solution?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/#contact" className="brutal-btn text-lg px-10 py-5 w-full sm:w-auto">
              Start a Project
            </Link>
            <a href={project.links.live} className="brutal-btn-outline text-lg px-10 py-5 w-full sm:w-auto">
              Live Demo
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
