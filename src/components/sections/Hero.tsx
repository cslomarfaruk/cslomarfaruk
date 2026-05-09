"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Terminal,
  Code2,
  Box,
} from "lucide-react";

import { cn } from "@/src/lib/utils";
import photo from "../../dp-new.jpg";
import { useLanguage } from "@/lib/i18n";

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

export default function Hero() {
  const { t, language } = useLanguage();

  const titleClass = useMemo(
    () =>
      cn(
        "text-[3rem] sm:text-[4rem] md:text-7xl lg:text-[7rem] font-black uppercase flex flex-col tracking-tighter leading-[0.85] text-white",
        language === "bn" && "leading-[1.2] tracking-normal"
      ),
    [language],
  );

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-5 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ── LEFT CONTENT ── */}
        <div className="lg:col-span-7 flex flex-col items-start w-full order-1">
          {/* Brutal Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: FAST_EASE }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10">
              <div className="size-2 bg-accent animate-pulse" />
              <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
                {t.hero.tagline}
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ opacity: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.6, ease: FAST_EASE, delay: 0.1 }}
            className="mb-8"
          >
            <h1 className={titleClass}>
              <span className="block text-white">{t.hero.headline_pt1}</span>
              <span className="block text-accent">{t.hero.headline_pt2}</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-zinc-400 max-w-xl leading-relaxed font-medium mb-12 border-l-4 border-accent pl-4"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link href="#contact" scroll className="brutal-btn w-full sm:w-auto">
              {t.hero.cta_discuss}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#projects" scroll className="brutal-btn-outline w-full sm:w-auto">
              <Terminal size={20} />
              {t.hero.cta_portfolio}
            </Link>
          </motion.div>

          {/* Desktop Brutal Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden md:grid grid-cols-3 gap-6 mt-16 w-full max-w-2xl border-t-2 border-white/20 pt-8"
          >
            <BrutalStat value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <BrutalStat value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <BrutalStat value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </motion.div>
        </div>

        {/* ── RIGHT PHOTO ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: FAST_EASE, delay: 0.2 }}
          className="lg:col-span-5 relative w-full order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] sm:w-[380px] lg:w-[460px] aspect-[4/5] group">
            {/* Hard shadow block */}
            <div className="absolute top-4 left-4 w-full h-full bg-accent border-2 border-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            
            {/* Image container */}
            <div className="absolute inset-0 border-2 border-white/20 bg-brand overflow-hidden transition-all duration-500 z-10">
              <Image
                src={photo}
                alt="Omar Faruk"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 300px, 460px"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            {/* Brutal Status Tag */}
            <div className="absolute -bottom-6 -left-6 z-20">
              <div className="bg-brand border-2 border-accent p-4 shadow-brutal">
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-1">System Status</span>
                <span className="font-black text-white uppercase text-sm tracking-tight flex items-center gap-2">
                  <span className="size-2 bg-accent animate-ping" />
                  {t.hero.status}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="md:hidden col-span-1 order-3 w-full mt-12 grid grid-cols-2 gap-4"
        >
          <div className="col-span-2">
            <BrutalStat value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
          </div>
          <BrutalStat value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
          <BrutalStat value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
        </motion.div>

      </div>
    </section>
  );
}

const BrutalStat = memo(function BrutalStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-1">{value}</span>
      <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-bold">{label}</span>
    </div>
  );
});
