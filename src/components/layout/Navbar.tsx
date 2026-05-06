'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ThemeToggle } from '../ThemeToggle';
import { useLanguage } from '@/lib/i18n';

const NAV_ITEMS = [
  { label: 'Services', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Work/Projects', href: '#projects' },
];

const SECONDARY_NAV = [
  { label: 'Top', href: '#hero' },
  { label: 'Contact', href: '#contact' },
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

    const sectionIds = ['hero', 'skills', 'about', 'projects', 'contact'];
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
    <nav className="fixed top-0 left-0 right-0 z-[110] transition-all duration-500 flex justify-center w-full px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-100 ease-out z-[120]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={cn(
        "w-full flex items-center justify-between transition-all duration-500 pointer-events-auto",
        scrolled
          ? "max-w-5xl lg:max-w-6xl glass px-4 md:px-6 py-3 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-white/10"
          : "max-w-7xl px-4 py-4 bg-transparent border-none shadow-none"
      )}>
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="DEV.CSL"
            className={cn(
              "transition-all group-hover:scale-105 object-contain",
              scrolled ? "h-8 w-8" : "h-10 w-10"
            )}
          />
          <span className={cn(
            "font-black tracking-tight text-zinc-100 uppercase transition-all whitespace-nowrap",
            scrolled ? "text-base" : "text-xl md:text-2xl"
          )}>DEV<span className="text-emerald-500">.CSL</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-black transition-all relative group",
                activeSection === item.href.replace('#', '') ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-100"
              )}
            >
              {item.label}
              <span className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-emerald-500 transition-all",
                activeSection === item.href.replace('#', '') ? "w-full" : "w-0 group-hover:w-full"
              )}></span>
            </a>
          ))}

          <div className="w-[1px] h-4 bg-zinc-700 mx-2"></div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center gap-1.5 text-zinc-500 hover:text-zinc-100 transition-colors text-[10px] font-black tracking-widest uppercase glass px-3 py-1.5 rounded-full"
            >
              <Globe size={12} />
              {language === 'en' ? 'EN' : 'BN'}
            </button>
            <ThemeToggle />
            <a
              href="#contact"
              className={cn(
                "bg-emerald-600 text-zinc-100 text-[10px] uppercase tracking-[0.2em] font-black flex items-center gap-2 hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-600/20 whitespace-nowrap",
                scrolled ? "px-5 py-2.5 rounded-full" : "px-6 py-3 rounded-2xl"
              )}
            >
              Contact Us
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
            className="flex items-center justify-center size-8 rounded-full bg-gradient-to-br from-emerald-600/30 to-emerald-400/20 border border-white/10 text-zinc-500 hover:text-zinc-100 hover:from-emerald-500/40 hover:to-emerald-300/30 transition-colors"
          >
            {language === 'en' ? 'EN' : 'BN'}
          </button>
          <ThemeToggle />
          <button
            className="p-2 text-zinc-100 bg-gradient-to-br from-emerald-600/30 to-emerald-400/20 border border-white/10 rounded-full backdrop-blur-md hover:from-emerald-500/40 hover:to-emerald-300/30 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 glass p-6 rounded-[32px] md:hidden pointer-events-auto border border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-black tracking-tight text-center uppercase transition-colors",
                    activeSection === item.href.replace('#', '') ? "text-emerald-400" : "text-zinc-100 hover:text-emerald-400"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-white/5 my-2" />
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-emerald-600 text-zinc-100 text-center rounded-[24px] font-black text-[12px] uppercase tracking-[0.2em] shadow-xl shadow-emerald-500/20"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </nav>
  );
}
