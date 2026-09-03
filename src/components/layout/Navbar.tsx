'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Globe, Sparkles, FileText } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { ThemeToggle } from '../ThemeToggle';
import { useLanguage } from '@/lib/i18n';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();

  // Hide global navbar on project detail pages as they have their own specialized navbar
  const isProjectDetailPage = pathname.startsWith('/projects/') && pathname.split('/').length > 2;

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: language === 'bn' ? 'সার্ভিসসমূহ' : 'Services', href: '#services', id: 'services' },
    { label: language === 'bn' ? 'স্টুডেন্ট হাব' : 'Student Hub', href: '#students', id: 'students' },
    { label: language === 'bn' ? 'প্রজেক্টসমূহ' : 'Work', href: '#projects', id: 'projects' },
    { label: language === 'bn' ? 'যোগাযোগ' : 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    const sectionIds = ['hero', 'services', 'students', 'projects', 'contact'];
    const detectActiveSection = () => {
      const y = window.scrollY + 140;
      let current = 'hero';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (y >= section.offsetTop) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scroll', detectActiveSection, { passive: true });
    detectActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', detectActiveSection);
    };
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (isProjectDetailPage) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Floating Bar Container */}
        <div
          className={cn(
            'w-full flex items-center justify-between transition-all duration-300 rounded-2xl md:rounded-full px-4 sm:px-6 py-2.5 sm:py-3',
            scrolled
              ? 'glass-nav shadow-soft-md border border-border/80'
              : 'bg-surface/50 backdrop-blur-sm border border-border/40'
          )}
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative size-8 sm:size-9 rounded-xl overflow-hidden bg-accent/10 border border-accent/20 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/icon.png"
                alt="DEV.CSL Logo"
                width={32}
                height={32}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-sm sm:text-base text-text-primary leading-tight">
                DEV<span className="text-accent">.CSL</span>
              </span>
              <span className="hidden sm:block text-[10px] text-text-muted font-medium -mt-0.5">
                Omar Faruk
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isHomePage = pathname === '/';
              const href = isHomePage ? item.href : `/${item.href}`;

              return (
                <a
                  key={item.id}
                  href={href}
                  className={cn(
                    'relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-normal transition-all duration-200',
                    isActive
                      ? 'text-accent font-semibold bg-accent-subtle'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-subtle'
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">
            {/* Language Switcher Pill */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold border border-border bg-surface/60 hover:bg-surface-subtle hover:border-border-hover text-text-secondary hover:text-text-primary transition-all duration-200"
              title={language === 'en' ? 'Switch to Bengali' : 'Switch to English'}
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-accent" />
              <span>{language === 'en' ? 'বাংলা' : 'EN'}</span>
            </button>

            {/* CV Download / View Link */}
            <a
              href="/omar_cv (7).pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border border-border bg-surface/60 hover:bg-surface-subtle hover:border-border-hover text-text-secondary hover:text-text-primary transition-all duration-200"
              title="View Omar Faruk's CV (PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-accent" />
              <span>{language === 'bn' ? 'সিভি' : 'CV'}</span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Talk / Contact CTA */}
            <a
              href="#contact"
              className="btn-primary text-xs py-2 px-4 rounded-xl shadow-soft-sm hover:shadow-soft-md"
            >
              <span>{language === 'bn' ? 'চলুন কথা বলি' : "Let's Talk"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="md:hidden flex items-center gap-1.5">
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="px-2 py-1.5 rounded-lg text-[11px] font-bold border border-border/80 bg-surface/70 text-text-secondary hover:text-text-primary transition-all"
              aria-label="Language"
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </button>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="size-9 flex items-center justify-center rounded-xl border border-border/80 bg-surface/80 text-text-primary hover:bg-surface-subtle transition-colors ml-0.5"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[115] pointer-events-auto md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-16 inset-x-3 max-w-md mx-auto rounded-3xl border border-border bg-surface/95 backdrop-blur-2xl p-6 shadow-soft-lg z-[120] pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between pb-3 mb-2 border-b border-border">
                  <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    {language === 'bn' ? 'মেনু' : 'Navigation'}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-accent animate-pulse" />
                    <span className="text-[11px] font-medium text-accent">
                      {language === 'bn' ? 'প্রজেক্টের জন্য উন্মুক্ত' : 'Available for Work'}
                    </span>
                  </div>
                </div>

                {navItems.map((item) => {
                  const isHomePage = pathname === '/';
                  const href = isHomePage ? item.href : `/${item.href}`;
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'flex items-center justify-between py-3 px-3.5 rounded-xl text-base font-medium transition-all duration-200',
                        isActive
                          ? 'bg-accent-subtle text-accent font-semibold'
                          : 'text-text-primary hover:bg-surface-subtle'
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}

                <div className="pt-4 mt-2 border-t border-border flex flex-col gap-2.5">
                  <a
                    href="/omar_cv (7).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="btn-secondary w-full py-2.5 text-center text-xs font-semibold rounded-xl inline-flex items-center justify-center gap-2"
                  >
                    <FileText className="w-4 h-4 text-accent" />
                    <span>{language === 'bn' ? 'আমার সিভি দেখুন (PDF)' : 'View Curriculum Vitae (PDF)'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full py-3 text-center text-sm font-semibold rounded-xl"
                  >
                    <span>{language === 'bn' ? 'প্রজেক্ট শুরু করুন' : 'Start a Project'}</span>
                    <Sparkles className="w-4 h-4" />
                  </a>

                  <div className="flex items-center justify-between pt-1 px-1 text-xs text-text-muted">
                    <span>{language === 'bn' ? 'ভাষা পরিবর্তন করুন' : 'Change Language'}</span>
                    <div className="flex gap-1.5">
                      <button
                        onClick={() => {
                          setLanguage('en');
                          setIsOpen(false);
                        }}
                        className={cn(
                          'px-2.5 py-1 rounded-lg font-medium transition-colors',
                          language === 'en' ? 'bg-accent text-accent-text font-bold' : 'hover:bg-surface-subtle'
                        )}
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          setLanguage('bn');
                          setIsOpen(false);
                        }}
                        className={cn(
                          'px-2.5 py-1 rounded-lg font-medium transition-colors',
                          language === 'bn' ? 'bg-accent text-accent-text font-bold' : 'hover:bg-surface-subtle'
                        )}
                      >
                        বাংলা
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
