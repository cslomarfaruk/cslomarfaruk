import React from 'react';
import { Github, Linkedin, Mail, Smartphone, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto overflow-hidden">
      {/* Premium top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

      {/* Massive subtle background text for premium agency feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[12vw] font-black text-white/[0.02] whitespace-nowrap tracking-tighter uppercase leading-none">
          OMAR FARUK
        </h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8 max-w-sm">
          <div className="flex items-center gap-4 group cursor-pointer w-fit">
            <div className="size-12 bg-zinc-950 border border-white/10 text-white rounded-xl flex items-center justify-center font-mono text-sm font-black shadow-lg shadow-emerald-600/10 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">SL</span>
            </div>
            <span className="font-black tracking-tighter text-white text-3xl uppercase">dev<span className="text-emerald-500">.csl</span></span>
          </div>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light tracking-tight">
            Architecting secure digital infrastructure that converts technical complexity into business ROI. Elite performance engineering for founders and enterprises.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-500">Navigation</span>
            <ul className="flex flex-col gap-4">
              <li><FooterLink href="#projects">Work</FooterLink></li>
              <li><FooterLink href="#skills">Services</FooterLink></li>
              <li><FooterLink href="#about">Trust</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-500">Syndicate</span>
            <ul className="flex flex-col gap-4">
              <li><FooterLink href="https://github.com/cslomarfaruk/">GitHub</FooterLink></li>
              <li><FooterLink href="https://www.linkedin.com/in/csl-omarfaruk/">LinkedIn</FooterLink></li>
              <li><FooterLink href="https://www.facebook.com/cslomarfaruk1/">Facebook</FooterLink></li>
              <li><FooterLink href="https://x.com/cslomarfaruk">X / Twitter</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-6 hidden lg:block">
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-emerald-500">Direct Line</span>
            <div className="space-y-3">
              <a href="https://wa.me/8801839467728" target="_blank" rel="noopener noreferrer" className="block text-xl text-white font-black tracking-tighter transition-colors hover:text-emerald-400 cursor-pointer">+880 1839 467728</a>
              <a href="mailto:omar@devcsl.tech" className="block text-xs text-zinc-500 hover:text-white transition-colors tracking-widest">omar@devcsl.tech</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <p className="text-zinc-500 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase font-bold text-center md:text-left">
          &copy; {currentYear} devcsl.tech &bull; Designed and Developed by <span className="text-emerald-500">Omar Faruk</span>
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative overflow-hidden text-[10px] font-mono font-black text-white hover:text-emerald-400 flex items-center gap-3 transition-all px-8 py-4 glass bg-white/5 rounded-full border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]"
        >
          <span className="relative z-10 uppercase tracking-widest">Back to Top</span>
          <ArrowUpRight size={14} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-emerald-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-zinc-400 hover:text-white transition-all flex items-center gap-2 group w-fit"
    >
      <span className="relative overflow-hidden flex items-center">
        {children}
        <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-emerald-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
      </span>
      <ArrowUpRight size={12} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-emerald-500 duration-300" />
    </a>
  );
}
