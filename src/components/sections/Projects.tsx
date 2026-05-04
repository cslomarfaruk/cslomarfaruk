import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowUpRight, FolderOpen, Play, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    title: 'SEC Admission Hub',
    niche: 'Government Education Portal',
    impact: 'Automated 15,000+ applicants, reducing manual processing by 95%',
    period: 'Production',
    description: 'Developed a full production-grade admission portal for Sylhet Engineering College. Integrated SSLCommerz and government scraping for automated results. Scaled to handle high concurrent load.',
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
    period: 'Student Project',
    description: 'A tool built for university students to parse complex result PDFs and images into structured JSON/Excel data. Showcases ability to solve immediate campus problems.',
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
    period: 'Final Year Project',
    description: 'Sophisticated library management system with QR code seat booking and book tracking. Built as a proof-of-concept for the university library.',
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
    period: 'Production',
    description: 'AI-powered clinic management platform. Modernized medical practices with advanced analytics, patient scheduling, and automated billing. High security compliance.',
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
    period: 'Architected',
    description: 'A massive real-time social ecosystem engineered for scale. Features complex graph relations, modular feed algorithms, and low-latency global messaging.',
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
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <section id="projects" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-24">
        <div>
          <span className="mono-label text-emerald-500 font-black mb-6 md:mb-4 block tracking-[0.4em]">PROVEN EXCELLENCE</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] md:leading-[0.8]">Strategic <br /><span className="text-zinc-700 italic">Deployment.</span></h2>
        </div>
        <a href="https://github.com/cslomarfaruk/" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto flex items-center justify-center gap-3 text-zinc-500 hover:text-white transition-all group px-6 py-4 md:py-3 glass rounded-2xl border-white/10">
          <FolderOpen size={18} className="group-hover:text-emerald-400 transition-colors" />
          <span className="mono-label !opacity-100 !text-inherit tracking-widest uppercase text-xs">Product Index</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mb-1" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setSelectedProject(project)}
            className={cn(
              "group glass p-2 md:p-3 rounded-[32px] md:rounded-[40px] border-white/10 hover:border-emerald-500/30 hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)] transition-all duration-700 cursor-pointer flex flex-col",
              index === 0 ? "md:col-span-2 md:flex-row" : ""
            )}
          >
            {/* Media Container */}
            <div className={cn(
              "relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-zinc-950 flex-shrink-0",
              index === 0 ? "md:w-3/5 aspect-[16/10] md:aspect-auto md:h-full min-h-[300px] md:min-h-[450px]" : "aspect-[16/10] w-full"
            )}>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale-[0.2] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500"></div>

              <div className="absolute top-4 right-4 md:top-6 md:right-6">
                <div className="p-3 glass bg-white/10 backdrop-blur-xl border-white/20 text-white rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl group-hover:bg-emerald-500 group-hover:border-emerald-400 group-hover:text-black">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>

            {/* Content Container */}
            <div className={cn(
              "flex flex-col flex-1",
              index === 0 ? "p-6 md:p-10 justify-center" : "p-5 md:p-8"
            )}>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="px-3 py-1.5 glass rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-400 border border-emerald-500/20">{project.niche}</span>
                <span className="text-[9px] md:text-[10px] font-black font-mono text-zinc-500 uppercase tracking-[0.2em]">{project.period}</span>
              </div>

              <h3 className={cn(
                "font-black text-white leading-[0.9] uppercase tracking-tighter mb-4",
                index === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
              )}>{project.title}</h3>

              <p className={cn(
                "text-zinc-400 font-light tracking-tight mb-8 line-clamp-3",
                index === 0 ? "text-lg md:text-xl" : "text-sm md:text-base"
              )}>
                {project.description}
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-zinc-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>

                {index !== 0 && (
                  <span className="text-zinc-500 group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
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
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
    >
      <div className="absolute inset-0 bg-zinc-950/90 backdrop-blur-3xl" onClick={onClose}></div>

      <motion.div
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
        className="glass w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-[48px] border-white/10 relative z-10 shadow-[0_0_100px_rgba(0,0,0,1)]"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-50 p-3 bg-zinc-900 border border-white/10 rounded-full text-white hover:bg-white hover:text-black transition-all"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Media Section */}
          <div className="bg-black/40 p-2 md:p-8 space-y-6">
            <div className="aspect-[16/9] rounded-[32px] overflow-hidden bg-zinc-950 border border-white/5 relative group">
              <iframe
                src={project.videoUrl}
                className="w-full h-full"
                title="Video Demo"
                allowFullScreen
              />
            </div>

            <div className="space-y-4">
              <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    src={project.gallery[activeImageIdx] || project.image}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {project.gallery.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx(prev => (prev === 0 ? project.gallery.length - 1 : prev - 1));
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full text-white"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIdx(prev => (prev === project.gallery.length - 1 ? 0 : prev + 1));
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 glass rounded-full text-white"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-none">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "size-20 rounded-2xl overflow-hidden border-2 transition-all flex-shrink-0",
                      activeImageIdx === idx ? "border-emerald-500 scale-95" : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img src={img} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="p-8 md:p-12 flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="mono-label !text-emerald-400 !opacity-100 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20 tracking-widest">{project.period}</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-6 leading-none uppercase">{project.title}</h2>

            <div className="space-y-6 text-zinc-400 text-lg md:text-xl font-light leading-relaxed mb-4">
              <p>{project.description}</p>
            </div>

            <div className="p-6 glass border-emerald-500/20 rounded-3xl mb-8">
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-4">Business Impact</span>
              <p className="text-white font-bold italic text-lg leading-snug">"{project.impact}"</p>
            </div>

            <div className="space-y-8 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.features.map(feature => (
                  <span key={feature} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    {feature} ✓
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

import { cn } from '@/src/lib/utils';
