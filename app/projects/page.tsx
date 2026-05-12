'use client';

import { motion } from 'motion/react';
import { PROJECTS, type Project } from '@/src/lib/projects-data';
import { Github, ExternalLink, ArrowLeft, CheckCircle2, Terminal, Shield, Cpu, Activity } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-zinc-950 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-zinc-500 hover:text-accent transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest font-black">Back to Home</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
              Project <br />
              <span className="text-zinc-700 italic">Showcase</span>
            </h1>
            <p className="text-zinc-400 max-w-2xl text-lg font-medium leading-relaxed">
              A deep dive into my professional work, research projects, and engineered solutions. 
              Each project represents a unique challenge solved with modern technology and architectural excellence.
            </p>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {PROJECTS.map((project, index) => (
            <ProjectDetailedCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectDetailedCard({ project, index }: { project: Project; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
    >
      {/* Visual Content */}
      <div className={cn(
        "lg:col-span-7 space-y-6",
        !isEven && "lg:order-2"
      )}>
        <Link href={`/projects/${project.slug}`} className="group relative overflow-hidden brutal-card p-6 bg-brand/50 block">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-auto block transition-all duration-700"
          />
          <div className="absolute inset-0 bg-zinc-950/5 group-hover:bg-transparent transition-all duration-500" />
          
          {/* Status Badge */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-black font-black text-[10px] uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            {project.period}
          </div>
          
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity bg-accent text-black px-4 py-2 font-black uppercase text-xs shadow-brutal-white border-2 border-black">
            Read Case Study
          </div>
        </Link>

        {/* Gallery Preview */}
        {project.gallery.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {project.gallery.slice(0, 3).map((img, idx) => (
              <div key={idx} className="aspect-video brutal-card p-0 overflow-hidden bg-brand">
                <img src={img.url} alt={img.description} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className={cn(
        "lg:col-span-5 flex flex-col",
        !isEven && "lg:order-1"
      )}>
        <div className="inline-flex items-center gap-3 px-3 py-1 border-2 border-white/10 bg-white/5 w-fit mb-6">
          <span className="font-mono text-[10px] font-black text-accent uppercase tracking-widest">{project.niche}</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
          {project.title}
        </h2>

        <p className="text-zinc-400 text-lg font-medium leading-relaxed mb-8 border-l-4 border-accent pl-6">
          {project.description}
        </p>

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-zinc-900 border-2 border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-400">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <Link 
            href={`/projects/${project.slug}`}
            className="brutal-btn flex items-center justify-center gap-3"
          >
            Read Full Case Study
            <ArrowLeft size={18} className="rotate-180" />
          </Link>
          <a 
            href={project.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "brutal-btn-outline flex items-center justify-center gap-3",
              project.links.github === '#' && "opacity-50 cursor-not-allowed pointer-events-none"
            )}
          >
            Source Code
            <Github size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
