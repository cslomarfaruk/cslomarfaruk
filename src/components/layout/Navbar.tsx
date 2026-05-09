'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ThemeToggle } from '../ThemeToggle';
import { useLanguage } from '@/lib/i18n';

const NAV_ITEMS = [
  { label: 'Services', href: '#skills' },
  { label: 'Student Hub', href: '#students' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
];

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    const sectionIds = ['hero', 'skills', 'students', 'about', 'projects', 'testimonials', 'contact'];
    const detectActiveSection = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current = 'hero';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (y >= section.offsetTop) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', detectActiveSection);
    detectActiveSection();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', detectActiveSection);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] transition-all duration-200 flex justify-center w-full px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      {/* Brutalist scroll progress */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-accent z-[120]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={cn(
        "w-full flex items-center justify-between transition-all duration-200 pointer-events-auto",
        scrolled
          ? "max-w-6xl bg-brand border-2 border-white/20 px-6 py-3 shadow-brutal"
          : "max-w-7xl px-4 py-4 bg-transparent border-none shadow-none"
      )}>
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="size-10 relative transition-all duration-300 group-hover:rotate-12">
            <Image 
              src="/logo.png" 
              alt="DEV.CSL" 
              width={40} 
              height={40} 
              className="object-contain filter-accent"
            />
          </div>
          <span className={cn(
            "font-black tracking-tighter uppercase transition-all whitespace-nowrap",
            scrolled ? "text-xl text-white" : "text-2xl text-white"
          )}>
            DEV<span className="text-accent">.CSL</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-xs uppercase tracking-widest font-black transition-all relative group py-2",
                activeSection === item.href.replace('#', '') ? "text-accent" : "text-white hover:text-accent"
              )}
            >
              {item.label}
              {activeSection === item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-accent" />
              )}
              {activeSection !== item.href.replace('#', '') && (
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full" />
              )}
            </a>
          ))}

          <div className="w-[2px] h-6 bg-white/20 mx-2"></div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border-2 border-white/20 hover:border-accent hover:bg-accent hover:text-[#000] text-white transition-all"
            >
              {language === 'en' ? 'EN' : 'BN'}
            </button>
            <ThemeToggle />
            <a
              href="#contact"
              className={cn(
                "bg-accent text-[#000] text-xs uppercase tracking-widest font-black flex items-center gap-2 hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all whitespace-nowrap border-2 border-accent",
                scrolled ? "px-6 py-2 shadow-brutal-white" : "px-6 py-3 shadow-brutal-white"
              )}
            >
              Contact
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="font-mono text-[10px] font-black uppercase px-2 py-1 border-2 border-white/20 hover:border-accent hover:text-accent text-white"
          >
            {language === 'en' ? 'EN' : 'BN'}
          </button>
          <ThemeToggle />
          <button
            className="p-2 text-white border-2 border-white/20 hover:border-accent hover:text-accent transition-colors bg-brand"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Brutalist Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-24 left-4 right-4 bg-brand border-2 border-white/20 p-6 md:hidden pointer-events-auto shadow-brutal z-[150]"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-3xl font-black tracking-tighter uppercase transition-colors border-b-2 border-white/20 pb-4",
                    activeSection === item.href.replace('#', '') ? "text-accent border-accent" : "text-white hover:text-accent"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full mt-4 bg-accent text-[#000] py-4 border-2 border-accent text-center font-black text-lg uppercase tracking-widest hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0px_var(--theme-white)] transition-all"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
