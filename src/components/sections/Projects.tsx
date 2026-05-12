'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { Github, ArrowUpRight, FolderOpen, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

import { PROJECTS, type Project } from '@/src/lib/projects-data';

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [featured, ...remainingProjects] = PROJECTS;

  return (
    <section id="projects" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20"
      >
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-6">
            <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
              {t.projects.tagline}
            </span>
          </div>
          <h2 className={cn(
            "text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-white",
            language === 'bn' && "leading-[1.2] tracking-normal"
          )}>
            <span className={cn(language === 'bn' ? "bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-400 pb-2 inline-block" : "")}>
              {t.projects.headline_pt1} <br /><span className="text-zinc-500 italic">{t.projects.headline_pt2}</span>
            </span>
          </h2>
        </div>
        <Link href={`/projects/${featured.slug}`} className="w-full md:w-auto flex items-center justify-center gap-3 text-white transition-all group px-6 py-4 md:py-3 border-2 border-white/20 bg-brand hover:border-accent hover:text-accent hover:-translate-y-1 hover:-translate-x-1 shadow-brutal-white hover:shadow-brutal duration-200">
          <FolderOpen size={18} />
          <span className="font-black tracking-widest uppercase text-xs">{t.projects.index_btn}</span>
          <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform mb-1" />
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href={`/projects/${featured.slug}`}
          className="w-full text-left brutal-card p-0 mb-8 group overflow-hidden block"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
            <div className="lg:col-span-3 relative overflow-hidden h-auto border-b-2 lg:border-b-0 lg:border-r-2 border-white/10 bg-brand flex items-center justify-center p-6 bg-zinc-900/50">
              <img
                src={featured.image}
                alt={featured.title}
                loading="eager"
                decoding="async"
                className="w-full h-auto block"
              />
              <span className="absolute top-4 left-4 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] bg-accent text-black border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                Featured Case Study
              </span>
            </div>

            <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-between bg-zinc-950">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-black">{featured.period}</span>
                  <ArrowUpRight size={20} className="text-white group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4 leading-[0.9] uppercase">{featured.title}</h3>
                <p className="text-zinc-400 leading-relaxed font-medium mb-8 line-clamp-4">{featured.description}</p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t-2 border-white/10 pt-6">
                <MetricChip label="Niche" value={featured.niche} />
                <MetricChip label="Stack" value={featured.tags[0]} />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {remainingProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0, 0, 0.2, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="flex flex-col"
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group brutal-card cursor-pointer flex flex-col h-full"
            >
              <div className="relative overflow-hidden bg-brand flex-shrink-0 aspect-[16/10] w-full border-b-2 border-white/10 flex items-center justify-center p-6 bg-zinc-900/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto block transition-all duration-700"
                />
                <span className="absolute bottom-4 left-4 px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] bg-white text-black border-2 border-white shadow-brutal">
                  {project.niche}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-6 bg-zinc-950">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[10px] font-black font-mono text-accent uppercase tracking-[0.2em]">{project.period}</span>
                  <ArrowUpRight size={20} className="text-white group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="font-black text-white leading-[0.9] tracking-tighter uppercase mb-4 text-3xl">{project.title}</h3>

                <p className="text-zinc-400 font-medium tracking-tight mb-8 line-clamp-3 text-sm">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t-2 border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] uppercase font-bold tracking-widest text-zinc-400 bg-brand px-2 py-1 border-2 border-white/10 group-hover:border-accent group-hover:text-white transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
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

function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const gallery = project.gallery.length ? project.gallery : [{ url: project.image, description: project.title }];
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
        initial={{ scale: 0.98, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.98, y: 20 }}
        className="bg-brand w-full max-w-6xl max-h-[90vh] overflow-y-auto border-4 border-white/10 relative z-10 shadow-brutal"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 bg-brand border-2 border-white/20 text-white hover:border-accent hover:text-accent hover:-translate-y-0.5 hover:-translate-x-0.5 shadow-brutal-white hover:shadow-brutal transition-all"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-b-2 lg:border-b-0 lg:border-r-2 border-white/10">
          <div className="p-6 md:p-10 space-y-4 border-b-2 lg:border-b-0 border-white/10 bg-zinc-950">
            <div className="relative aspect-[16/10] overflow-hidden border-2 border-white/20 bg-brand shadow-brutal-white">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  src={gallery[activeImageIdx].url}
                  alt={gallery[activeImageIdx].description}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pt-4 pb-2 scrollbar-none">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={cn(
                      "h-16 w-24 overflow-hidden border-2 transition-all flex-shrink-0",
                      activeImageIdx === idx ? "border-accent shadow-brutal translate-y-0.5 translate-x-0.5" : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/40"
                    )}
                  >
                    <img src={img.url} alt={img.description} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {project.videoUrl && (
              <div className="aspect-[16/9] mt-6 border-2 border-accent bg-brand shadow-brutal">
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

          <div className="p-6 md:p-10 flex flex-col bg-brand">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] uppercase tracking-[0.2em] font-black bg-accent text-black px-3 py-1 border-2 border-accent shadow-[2px_2px_0px_rgba(255,255,255,0.3)]">{project.period}</span>
            </div>

            <h2 className="text-4xl md:text-[4rem] font-black text-white uppercase tracking-tighter mb-4 leading-none">{project.title}</h2>
            <p className="text-zinc-500 uppercase text-xs tracking-widest font-black mb-6">{project.niche}</p>

            <div className="space-y-6 text-zinc-300 font-medium text-base md:text-lg leading-relaxed mb-8 border-l-4 border-accent pl-4">
              <p>{project.description}</p>
            </div>

            {project.role && (
              <div className="mb-8">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-3">Ownership & Role</span>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{project.role}</p>
              </div>
            )}

            {project.features_detailed && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {project.features_detailed.map((cat) => (
                  <div key={cat.category} className="space-y-3">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest border-b-2 border-white/20 pb-1 block w-fit">{cat.category}</span>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="text-xs text-zinc-400 font-medium flex items-center gap-2">
                          <div className="size-1.5 bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {project.security_highlights && (
              <div className="p-6 bg-red-500/10 border-2 border-red-500 mb-8 shadow-[4px_4px_0px_rgba(239,68,68,0.5)]">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-4">Security Infrastructure</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {project.security_highlights.map((item) => (
                    <span key={item} className="text-xs font-bold text-red-200 flex items-start gap-2">
                      <div className="size-1.5 bg-red-500 mt-1 shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-6 border-2 border-accent bg-accent/5 mb-10 shadow-brutal-white">
              <span className="text-[10px] font-black text-accent uppercase tracking-widest block mb-4">Business Impact</span>
              <p className="text-white font-bold text-lg leading-snug">"{project.impact}"</p>
            </div>

            <div className="space-y-8 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.features.map(feature => (
                  <span key={feature} className="px-3 py-1.5 bg-zinc-950 border-2 border-white/10 text-[10px] font-black uppercase tracking-widest text-zinc-300 inline-flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-10 border-t-2 border-white/10">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn flex-1"
                >
                  Launch App
                  <ExternalLink size={20} />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn-outline"
                >
                  Source Code
                  <Github size={20} />
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
    <div className="border-2 border-white/10 bg-brand px-4 py-3 hover:border-accent transition-colors">
      <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-black mb-1">{label}</p>
      <p className="text-xs md:text-sm font-bold text-white line-clamp-1">{value}</p>
    </div>
  );
}
