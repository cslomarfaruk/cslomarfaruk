'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ArrowUpRight, FolderOpen, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

interface Project {
  title: string;
  niche: string;
  impact: string;
  period: string;
  description: string;
  role?: string;
  features_detailed?: { category: string; items: string[] }[];
  security_highlights?: string[];
  features: string[];
  tags: string[];
  links: { live: string; github: string };
  image: string;
  gallery: string[];
  videoUrl: string;
}

const PROJECTS: Project[] = [

  {
    title: 'SEC Admission Portal',
    niche: 'End-to-End Applicant Management',
    impact: 'Maintained for 2 admission cycles.',
    period: 'Live Production',
    description: 'A production-grade admission platform with student self-service and admin seat planning. It supports the complete workflow: applicant onboarding, OTP verification, document upload, SSLCommerz payments, and an issue ticket system.',
    role: 'Designed full UX in Figma and implemented complete frontend/backend using Next.js. Deployed to VPS server and managed with git-runner CI/CD pipeline. Refactored for security and maintained across multiple cycles.',
    features_detailed: [
      { category: 'Public', items: ['Notices & Circulars', 'Results', 'Seat Plan'] },
      { category: 'Applicant', items: ['Multi-step Flow', 'OTP Verification', 'Payments'] },
      { category: 'Admin', items: ['Applicant MGMT', 'PDF/Excel Exports', 'Bulk SMS'] }
    ],
    security_highlights: [
      'Centralized RBAC Middleware',
      'Rate limiting & Bot protections',
      'Hardened security headers',
      'Protected SSLCommerz endpoints', 'Cloudflare Turnstile integration',

    ],
    features: ['Multi-step App', 'Seat Planning', 'RBAC Middleware', 'Rate Limiting'],
    tags: ['Next.js', 'MySQL', 'Docker', 'SSLCommerz', 'CI/CD Pipeline', 'Admin Panel', 'Applicant Panel', 'RBAC Middleware', 'Rate Limiting'],
    links: { live: 'https://admission.sec.ac.bd/', github: 'https://github.com/cslomarfaruk/admission.sec.ac.bd' },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e90526354a?q=80&w=1200&auto=format&fit=crop'
    ],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },

  {
    title: 'Hive Social Media',
    niche: 'Real-time Social Media Platform(Like facebook)',
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
    videoUrl: ''
  },
  {
    title: 'Detect Vehicle AI',
    niche: 'AI-Powered Mobility Intelligence',
    impact: 'Engineered an end-to-end AI platform with real-time WebSocket inference and 11+ vehicle class support.',
    period: 'Live Production',
    description: 'A production-ready full-stack computer vision platform that performs AI-powered vehicle detection and classification across live streams, images, and video uploads. Built for traffic analysis and smart monitoring, it features low-latency WebSocket inference, speed estimation, and object tracking.',
    role: 'Architected and built the full-stack system including the FastAPI backend with YOLO/ONNX inference and a real-time Next.js frontend with WebSocket streaming. Implemented secure deployment with Docker, Traefik, and Turnstile CAPTCHA.',
    features_detailed: [
      { category: 'Modes', items: ['Live Stream (WebSocket)', 'Image Upload', 'Video Upload'] },
      { category: 'AI Engine', items: ['YOLO ONNX Inference', 'Speed Estimation', 'Object Tracking'] },
      { category: 'Production', items: ['Docker + Traefik', 'Turnstile CAPTCHA', 'Rate Limiting'] }
    ],
    security_highlights: [
      'Cloudflare Turnstile integration',
      'Per-IP Rate Limiting Middleware',
      'Request size validation',
      'HSTS & Security Headers'
    ],
    features: ['Real-time WebSocket', 'ONNX Optimization', 'Speed Estimation', 'Dockerized'],
    tags: ['Next.js', 'FastAPI', 'YOLO', 'WebSocket', 'Docker', 'OpenCV', 'Tailwind', 'Python', 'ONNX'],
    links: { live: 'https://vehicle.devcsl.tech', github: 'https://github.com/cslomarfaruk/detect-vehicle-ai' },
    image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=800&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591115765373-520b7a21765b?q=80&w=1200&auto=format&fit=crop'
    ],
    videoUrl: ''
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
    videoUrl: ''
  },
  {
    title: 'Ultimate 9x9 Tic-Tac-Toe',
    niche: 'Gaming / Strategic Logic',
    impact: 'Implemented complex nested-grid state management with minimax-inspired AI logic',
    period: 'Completed Project',
    description: 'An advanced, multi-layered version of the classic Tic-Tac-Toe. Features a 9x9 grid where players must win small boards to conquer the larger arena. Includes a challenging AI opponent and a local multiplayer mode with a focus on seamless state synchronization.',
    features: [
      'Recursive Grid Logic',
      'Intelligent AI Opponent',
      'Dynamic Win-Condition Detection',
      'Modern UI/UX',
      'Real-time Score Tracking'
    ],
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Algorithms'],
    links: {
      live: 'https://advanched-ttt.vercel.app/',
      github: 'https://github.com/cslomarfaruk/advanched-9x9--tic-tak-toe-gameplay-with-ai-or-friends'
    },
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop', // A high-quality abstract strategy/game image
    gallery: [],
    videoUrl: ''
  },
  {
    title: 'ManageMed V2',
    niche: 'Healthcare Management / SaaS',
    impact: 'Architected a scalable patient-provider ecosystem with 100% type-safety and accessible UI components',
    period: 'Active Development',
    description: 'A comprehensive medical service platform designed to bridge the gap between patients and healthcare providers. Built with a focus on high-performance rendering and a "mobile-first" medical dashboard experience, featuring secure scheduling and provider discovery.',
    features: [
      'Modular Healthcare Dashboard',
      'Type-Safe API Integration',
      'Dynamic Appointment Scheduling',
      'Custom shadcn/ui Component Library',
      'Fluid Micro-interactions with Framer Motion'
    ],
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Lucide React'],
    links: {
      live: 'https://managemed.vercel.app/',
      github: 'https://github.com/cslomarfaruk/medicare-bd'
    },
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  },
  {
    title: 'EggFusionNet (DIP Project)',
    niche: 'Deep Learning / Computer Vision',
    impact: 'Co-authored a research-grade CNN architecture for automated eggplant leaf disease classification with 90%+ accuracy',
    period: 'Completed Academic Project',
    description: 'An advanced digital image processing project that utilizes a custom deep learning framework to identify various eggplant leaf diseases. This project involved complex data preprocessing, model training on specialized agricultural datasets, and evaluating performance metrics to ensure reliability in field conditions.',
    features: [
      'Custom CNN Architecture (EggFusionNet)',
      'Automated Disease Detection',
      'Image Preprocessing & Augmentation',
      'Comprehensive Performance Analytics',
      'Scalable Model Training Pipeline'
    ],
    tags: ['Python', 'TensorFlow', 'Keras', 'Computer Vision', 'Deep Learning'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/dip_project'
    },
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop', // High-quality image of agricultural tech/research
    gallery: [],
    videoUrl: ''
  },
  {
    title: 'SEC Mobile Commerce',
    niche: 'E-commerce / Fintech',
    impact: 'Developed a full-stack marketplace with secure payment integration and a comprehensive administrative ERP',
    period: 'Completed Project',
    description: 'A robust e-commerce solution tailored for mobile and electronics. Features a high-performance Next.js frontend paired with a Django REST Framework backend, offering seamless product management, secure checkout workflows, and a dual-interface system for customers and administrators.',
    features: [
      'Dynamic Product Cataloging',
      'Secure Payment Gateway Integration',
      'Advanced Admin Dashboard (Product/Order Management)',
      'JWT-based Authentication System',
      'Full-stack API Synchronization'
    ],
    tags: ['Django', 'Next.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/sec-mobile-commerce'
    },
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  }, {
    title: 'Personal Portfolio v1',
    niche: 'Digital Identity / Web Presence',
    impact: 'First-generation professional showcase establishing a baseline for minimalist dev-branding',
    period: 'Legacy Project (2025)',
    description: 'The initial iteration of my professional identity. Built with a focus on simplicity and clean typography to highlight core engineering skills and early projects during my CSE undergraduate tenure.',
    features: [
      'Minimalist Design Language',
      'Project Showcase Gallery',
      'Integrated Contact System',
      'Responsive Layout Architecture'
    ],
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    links: {
      live: 'https://cslomarfaruk.vercel.app/',
      github: 'https://github.com/cslomarfaruk/portfolio-v1'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  }, {
    title: 'IUPC Registration Portal',
    niche: 'Event Management / Automation',
    impact: 'Streamlined multi-team registration and automated participant verification for high-stakes programming contests',
    period: 'Completed Project',
    description: 'A dedicated registration platform engineered to manage the complex intake process of Inter-University Programming Contests. The system handles team credentials, institution verification, and participant data with a focus on data integrity and administrative ease of use.',
    features: [
      'Multi-Step Team Registration Workflow',
      'Institutional Verification Logic',
      'Real-time Registration Status Tracking',
      'Admin Dashboard for Participant Management',
      'Optimized SQL Database for High-Concurrency Intake'
    ],
    tags: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'shadcn/ui', 'Prisma'],
    links: {
      live: '#',
      github: 'https://github.com/cslomarfaruk/cse-iupc-registration'
    },
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop',
    gallery: [],
    videoUrl: ''
  },

];

export default function Projects() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
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

            {project.role && (
              <div className="mb-8">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest block mb-3">Ownership & Role</span>
                <p className="text-zinc-300 text-sm md:text-base leading-relaxed">{project.role}</p>
              </div>
            )}

            {project.features_detailed && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                {project.features_detailed.map((cat) => (
                  <div key={cat.category} className="space-y-2">
                    <span className="text-[9px] font-black text-zinc-600 uppercase tracking-tighter">{cat.category}</span>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="text-xs text-zinc-400 flex items-center gap-2">
                          <div className="size-1 bg-emerald-500/50 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {project.security_highlights && (
              <div className="p-5 rounded-3xl bg-red-500/5 border border-red-500/10 mb-8">
                <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-3">Security Infrastructure</span>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  {project.security_highlights.map((item) => (
                    <span key={item} className="text-[10px] text-zinc-400 flex items-center gap-2">
                      <div className="size-1 bg-red-400/50 rounded-full" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

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
