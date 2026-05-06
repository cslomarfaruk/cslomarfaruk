'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowUpRight, FolderOpen, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

const PROJECTS = [
  {
    title: 'SEC Admission Hub',
    niche: 'Government Education Portal',
    impact: 'Automated 15,000+ applicants, reducing manual processing by 95%',
    period: 'Live System',
    description: 'Built a production-grade admission portal for Sylhet Engineering College. This is a fully live system currently handling thousands of real students, securely processing payments via SSLCommerz, and automating results.',
    features: ['Admin Panel', 'Secure Auth', 'API Integration', 'Automated Scraping'],
    tags: ['Next.js', 'MySQL', 'SSLCommerz', 'DigitalOcean'],
    links: { live: 'https://admission.sec.ac.bd/', github: 'https://github.com/cslomarfaruk/admission.sec.ac.bd' },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=1200&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'DEV CSL Studio v2',
    niche: 'Portfolio/Brand Identity',
    impact: 'Engineered sub-400ms LCP with high-performance glassmorphic UI',
    period: 'Active Project',
    description: 'This current landing page. A high-performance, responsive studio showcase built with React, Tailwind, and Motion. Optimized for conversion and developer brand identity.',
    features: ['Motion UI', 'Glassmorphism', 'Responsive Design', 'SMTP Support'],
    tags: ['React', 'Tailwind', 'Motion', 'Vite'],
    links: { live: '#', github: '#' },
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Academic Result Parser',
    niche: 'Student Utility Project',
    impact: 'Helped 200+ students download consolidated results instantly',
    period: 'Live Utility',
    description: 'A tool built for university students to parse complex result PDFs and images into structured Excel data. Showcases my ability to identify a real problem and build an automated tool that people actually use.',
    features: ['OCR Integration', 'PDF Parsing', 'Data Export', 'Fast UI'],
    tags: ['Python', 'React', 'Tesseract'],
    links: { live: '#', github: '#' },
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Library System Pro',
    niche: 'University Resource Management',
    impact: 'Automated 1,000+ book logs with QR-based check-in systems',
    period: 'Proof of Concept',
    description: 'Sophisticated library management system built with QR code seat booking and real-time book tracking. Engineered to handle thousands of concurrent queries without performance drops.',
    features: ['QR Booking', 'Real-time Stats', 'Fine Management'],
    tags: ['Next.js', 'Firebase', 'QR-API'],
    links: { live: '#', github: '#' },
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'ManageMed Enterprise',
    niche: 'Healthcare SaaS',
    impact: 'Increased patient booking capacity by 40% via digital transformation',
    period: 'Live System',
    description: 'A fully functional clinic management platform. Modernized medical practices by providing real-time patient scheduling, advanced analytics, and automated billing with strict data security.',
    features: ['Patient Dashboard', 'AI Analytics', 'Automated Billing', 'HIPAA Focus'],
    tags: ['Next.js', 'AI Logic', 'Clinic MGMT', 'Enterprise'],
    links: { live: 'https://managemed.vercel.app/', github: 'https://github.com/cslomarfaruk/medicare-bd' },
    image: 'https://images.unsplash.com/photo-1576091160550-217359f45f4c?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576091160550-217359f45f4c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    title: 'Hive Social Engine',
    niche: 'Real-time Social Platform',
    impact: 'Architected sub-100ms message latency for high-engagement feeds',
    period: 'Production-Ready',
    description: 'A massive real-time social ecosystem engineered for scale. Built to demonstrate my capability in handling complex graph relationships, modular feed algorithms, and low-latency global messaging.',
    features: ['Real-time Messaging', 'Feed Algorithms', 'Graph Data', 'NoSQL Scale'],
    tags: ['React', 'Firebase', 'Real-time', 'NoSQL'],
    links: { live: 'https://socialmedia-dc07a.web.app/', github: 'https://github.com/cslomarfaruk/hive' },
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [featured, ...remainingProjects] = PROJECTS;

  return (
    <section id="projects" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20"
      >
        <div>
          <span className="mono-label text-emerald-500 font-black mb-6 md:mb-4 block tracking-[0.4em]">{t.projects.tagline}</span>
          <h2 className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase",
            language === 'bn' ? "leading-[1.2] tracking-normal" : "tracking-tighter leading-[0.9] md:leading-[0.8] text-white"
          )}>
            <span className={cn(language === 'bn' ? "bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 pb-2 inline-block" : "")}>
              {t.projects.headline_pt1} <br /><span className="text-zinc-500 italic">{t.projects.headline_pt2}</span>
            </span>
          </h2>
        </div>
        <a href="https://github.com/cslomarfaruk/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 text-zinc-500 hover:text-zinc-100 transition-all group px-6 py-4 md:py-3 glass rounded-2xl border border-white/10">
          <FolderOpen size={18} className="group-hover:text-emerald-400 transition-colors" />
          <span className="mono-label !opacity-100 !text-inherit tracking-widest uppercase text-xs">{t.projects.index_btn}</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mb-1" />
        </a>
      </motion.div>

      <motion.button
        type="button"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => setSelectedProject(featured)}
        className="w-full text-left glass section-shell subtle-grid overflow-hidden rounded-[2rem] md:rounded-[2.5rem] p-3 md:p-4 mb-8 group"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden aspect-[16/10]">
            <img
              src={featured.image}
              alt={featured.title}
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              Featured Case Study
            </span>
          </div>

          <div className="lg:col-span-2 p-3 md:p-5 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-black">{featured.period}</span>
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-100 mb-4 leading-tight">{featured.title}</h3>
            <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-4">{featured.description}</p>
            <div className="mt-auto grid grid-cols-2 gap-3">
              <MetricChip label="Niche" value={featured.niche} />
              <MetricChip label="Stack" value={featured.tags[0]} />
            </div>
          </div>
        </div>
      </motion.button>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {remainingProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ willChange: "transform, opacity" }}
            onClick={() => setSelectedProject(project)}
            className="group glass section-shell subtle-grid p-3 rounded-[1.75rem] hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)] transition-all duration-700 cursor-pointer flex flex-col"
          >
            <div className="relative overflow-hidden rounded-[1.25rem] bg-zinc-950 flex-shrink-0 aspect-[16/10] w-full">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent opacity-70" />

              <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] bg-black/30 text-zinc-100 border border-white/20">
                {project.niche}
              </span>
            </div>

            <div className="flex flex-col flex-1 p-4 md:p-5">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[9px] md:text-[10px] font-black font-mono text-zinc-500 uppercase tracking-[0.2em]">{project.period}</span>
                <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-emerald-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>

              <h3 className="font-black text-zinc-100 leading-[1] tracking-tight mb-3 text-2xl md:text-3xl">{project.title}</h3>

              <p className="text-zinc-500 tracking-tight mb-6 line-clamp-3 text-sm md:text-base">
                {project.description}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof PROJECTS[0], onClose: () => void }) {
  const gallery = project.gallery.length ? project.gallery : [project.image];
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
        className="glass section-shell w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[2rem] md:rounded-[3rem] border border-white/10 relative z-10 shadow-[0_0_100px_rgba(0,0,0,1)]"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-100 hover:bg-white hover:text-black transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="p-3 md:p-8 space-y-4">
            <div className="relative aspect-[16/10] rounded-[1.25rem] md:rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={gallery[activeImageIdx]}
                  alt={`${project.title} screenshot ${activeImageIdx + 1}`}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "size-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0",
                      activeImageIdx === idx ? "border-emerald-500 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {project.videoUrl && (
              <div className="aspect-[16/9] rounded-[1.25rem] overflow-hidden bg-zinc-950 border border-white/10">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  title={`${project.title} demo`}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            )}
          </div>

          <div className="p-6 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="mono-label !text-emerald-400 !opacity-100 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 tracking-widest">{project.period}</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-zinc-100 tracking-tight mb-4 leading-none">{project.title}</h2>
            <p className="text-zinc-500 uppercase text-xs tracking-[0.2em] mb-6">{project.niche}</p>

            <div className="space-y-6 text-zinc-500 text-base md:text-lg leading-relaxed mb-4">
              <p>{project.description}</p>
            </div>

            <div className="p-6 glass border border-emerald-500/20 rounded-3xl mb-8">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-4">Business Impact</span>
              <p className="text-zinc-100 font-semibold italic text-lg leading-snug">"{project.impact}"</p>
            </div>

            <div className="space-y-8 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.features.map(feature => (
                  <span key={feature} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400 inline-flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t border-white/5">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-5 bg-white text-black rounded-3xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 shadow-xl"
                >
                  Launch App
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-5 glass border-white/10 text-white rounded-3xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-emerald-500 transition-all flex items-center justify-center gap-3"
                >
                  Source
                  <Github size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MetricChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">{label}</p>
      <p className="text-xs md:text-sm font-semibold text-zinc-100 line-clamp-1">{value}</p>
    </div>
  );
}
