import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ThemeToggle } from '../ThemeToggle';

const NAV_ITEMS = [
  { label: 'Work', href: '#projects' },
  { label: 'Services', href: '#skills' },
  { label: 'Automation', href: '#automation' },
  { label: 'Students', href: '#students' },
  { label: 'Trust', href: '#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[110] transition-all duration-500 flex justify-center w-full px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-100 ease-out z-[120]"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className={cn(
        "w-full flex items-center justify-between transition-all duration-500 pointer-events-auto",
        scrolled
          ? "max-w-5xl lg:max-w-6xl glass px-4 md:px-6 py-3 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border-white/10"
          : "max-w-7xl px-2 py-4 bg-transparent rounded-none border-transparent shadow-none"
      )}>
        <a href="#" className="flex items-center gap-3 group">
          <div className={cn(
            "bg-emerald-600 !text-[#ffffff] flex items-center justify-center font-mono text-xs font-black transition-all group-hover:rotate-0 shadow-lg shadow-emerald-600/20",
            scrolled ? "size-8 rounded-lg rotate-0" : "size-10 rounded-xl rotate-3"
          )}>
            SL
          </div>
          <span className={cn(
            "font-black tracking-tight text-white uppercase transition-all whitespace-nowrap",
            scrolled ? "text-base" : "text-xl md:text-2xl"
          )}>DEV <span className="text-emerald-500">CSL</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-500 hover:text-white transition-all relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-emerald-500 transition-all group-hover:w-full"></span>
            </a>
          ))}

          <div className="w-[1px] h-4 bg-zinc-700 mx-2"></div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className={cn(
                "bg-emerald-600 text-zinc-100 text-[10px] uppercase tracking-[0.2em] font-black flex items-center gap-2 hover:bg-emerald-500 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-emerald-600/20 whitespace-nowrap",
                scrolled ? "px-5 py-2.5 rounded-full" : "px-6 py-3 rounded-2xl"
              )}
            >
              Book A Call
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="p-2 text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
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
                  className="text-2xl font-black tracking-tight text-white hover:text-emerald-400 text-center uppercase transition-colors"
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
                Start A Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
