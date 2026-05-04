import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

const SECTIONS = [
  { id: 'hero', label: 'Start' },
  { id: 'skills', label: 'Services' },
  { id: 'automation', label: 'Automation' },
  { id: 'projects', label: 'Projects' },
  { id: 'students', label: 'Student Hub' },
  { id: 'contact', label: 'Deploy Now' },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Sync URL hash gracefully without jumping
            history.replaceState(null, '', `#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col gap-5 items-center">
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group relative flex items-center justify-center p-2"
          aria-label={label}
        >
          <span className="absolute right-10 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all duration-300 glass px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap pointer-events-none shadow-xl border border-white/10">
            {label}
          </span>
          <div 
            className={cn(
              "w-1.5 rounded-full transition-all duration-500",
              activeSection === id 
                ? "h-8 bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.8)] glow-emerald" 
                : "h-1.5 bg-white/20 group-hover:bg-white/60 group-hover:h-3"
            )}
          />
        </a>
      ))}
    </div>
  );
}
