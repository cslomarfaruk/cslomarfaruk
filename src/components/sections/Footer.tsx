'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-20 md:py-32 max-w-7xl mx-auto border-t-2 border-white/10 bg-brand">
      {/* Massive subtle background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-[1] overflow-hidden">
        <h1 className="text-[15vw] md:text-[12vw] font-black text-white whitespace-nowrap tracking-tight uppercase leading-none opacity-[0.05]">
          DEV.CSL
        </h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-16">
        <div className="space-y-8 max-w-sm">
          <div className="flex items-center gap-3 group cursor-pointer w-fit">
            <div className="size-12 relative transition-all duration-300 group-hover:scale-110">
              <Image
                src="/logo.png"
                alt="DEV.CSL"
                width={48}
                height={48}
                className="object-contain filter-accent"
              />
            </div>
            <span className="font-black tracking-tighter text-white text-3xl uppercase">dev<span className="text-accent">.csl</span></span>
          </div>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-bold tracking-tight">
            Specialized in building high-impact academic projects, business landing pages, and production SaaS. Turning technical concepts into professional reality for students and founders.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto p-8 border-4 border-white/10 bg-zinc-950/10 backdrop-blur shadow-brutal-white">
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-black tracking-widest text-accent border-b-2 border-white/20 pb-1 block w-fit">Navigation</span>
            <ul className="flex flex-col gap-4">
              <li><FooterLink href="#projects">Work</FooterLink></li>
              <li><FooterLink href="#skills">Services</FooterLink></li>
              <li><FooterLink href="#about">Trust</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="text-[10px] uppercase font-black tracking-widest text-accent border-b-2 border-white/20 pb-1 block w-fit">Connect</span>
            <ul className="flex flex-col gap-4">
              <li><FooterLink href="https://github.com/cslomarfaruk/">GitHub</FooterLink></li>
              <li><FooterLink href="https://www.linkedin.com/in/csl-omarfaruk/">LinkedIn</FooterLink></li>
              <li><FooterLink href="https://www.facebook.com/cslomarfaruk1/">Facebook</FooterLink></li>
              <li><FooterLink href="https://x.com/cslomarfaruk">X / Twitter</FooterLink></li>
            </ul>
          </div>
          <div className="space-y-6 col-span-2 lg:col-span-1">
            <span className="text-[10px] uppercase font-black tracking-widest text-accent border-b-2 border-white/20 pb-1 block w-fit">Direct Line</span>
            <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start gap-4 sm:gap-8 lg:gap-3">
              <a href="https://wa.me/8801839467728" target="_blank" rel="noopener noreferrer" className="block text-sm md:text-lg text-white font-black tracking-tighter transition-colors hover:text-accent cursor-pointer whitespace-nowrap">+880 1839 467728</a>
              <a href="mailto:omar@devcsl.tech" className="block text-xs text-zinc-500 hover:text-white transition-colors tracking-widest whitespace-nowrap uppercase font-bold">omar@devcsl.tech</a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 md:mt-32 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t-4 border-white/10">
        <p className="text-zinc-400 text-[10px] md:text-xs font-mono tracking-widest uppercase font-black text-center md:text-left bg-zinc-950 px-4 py-2 border-2 border-white/20">
          &copy; {currentYear} devcsl.tech &bull; Designed and Developed by <span className="text-accent">Omar Faruk</span>
        </p>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group relative overflow-hidden text-[10px] font-mono font-black text-white hover:text-black flex items-center gap-3 transition-all px-8 py-4 bg-brand border-2 border-white/20 hover:bg-accent hover:border-accent hover:-translate-y-1 hover:-translate-x-1 hover:shadow-brutal"
        >
          <span className="relative z-10 uppercase tracking-widest">Back to Top</span>
          <ArrowUpRight size={16} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-bold text-zinc-400 hover:text-white transition-all flex items-center gap-2 group w-fit"
    >
      <span className="relative overflow-hidden flex items-center">
        {children}
        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-200"></span>
      </span>
      <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-accent duration-200" />
    </a>
  );
}
