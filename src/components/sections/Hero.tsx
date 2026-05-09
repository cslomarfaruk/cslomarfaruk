"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  GraduationCap,
  Package,
} from "lucide-react";

import { cn } from "@/src/lib/utils";
import photo from "../../dp-new.jpg";
import { useLanguage } from "@/lib/i18n";

// Physics-based spring for "Invisible Luxury" motion
const SPRING = { type: "spring", stiffness: 100, damping: 30, mass: 0.8 } as const;
const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const PILLAR_ICONS = [Code2, GraduationCap, Package];

export default function Hero() {
  const { t, language } = useLanguage();

  const titleClass = useMemo(
    () =>
      cn(
        "text-[2.25rem] sm:text-[3rem] md:text-6xl lg:text-[5.5rem] font-black uppercase flex flex-col",
        language === "bn"
          ? "leading-[1.3] tracking-normal"
          : "tracking-tighter leading-[0.9]",
      ),
    [language],
  );

  const pillars = [
    { title: t.hero.pillar1_title, desc: t.hero.pillar1_desc },
    { title: t.hero.pillar2_title, desc: t.hero.pillar2_desc },
    { title: t.hero.pillar3_title, desc: t.hero.pillar3_desc },
  ];

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 px-5 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Subtle ambient gradient — no grid, no blobs */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-emerald-500/[0.04] blur-[180px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-emerald-600/[0.03] blur-[150px] rounded-full pointer-events-none"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* ── LEFT CONTENT ── */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left w-full order-1 z-10 flex flex-col items-center lg:items-start">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...SPRING, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.06]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.15em] text-emerald-400 uppercase">
                {t.hero.tagline}
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className={titleClass}>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-400">
                {t.hero.headline_pt1}
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                {t.hero.headline_pt2}
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.35 }}
            className="text-sm sm:text-base md:text-lg text-zinc-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light tracking-tight"
          >
            {t.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.5 }}
            className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start w-full sm:w-auto"
          >
            <Link
              href="#contact"
              scroll
              className="group px-6 py-3.5 md:px-8 md:py-4 bg-emerald-600 hover:bg-emerald-500 text-white text-center rounded-full font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 active:scale-[0.98]"
            >
              {t.hero.cta_discuss}
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="#projects"
              scroll
              className="px-6 py-3.5 md:px-8 md:py-4 border border-white/10 text-zinc-200 text-center rounded-full font-bold text-sm sm:text-base hover:bg-white/[0.04] hover:border-white/20 transition-all active:scale-[0.98]"
            >
              {t.hero.cta_portfolio}
            </Link>
          </motion.div>

          {/* Pillar Cards — Trifecta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.65 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 sm:pt-2 text-left w-full"
          >
            {pillars.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...SPRING, delay: 0.7 + i * 0.08 }}
                  className="group p-4 md:p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/20 transition-all duration-300"
                >
                  <div className="size-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3 group-hover:bg-emerald-500/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <h3 className="text-sm font-bold text-zinc-100 tracking-tight mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Social Proof Metrics — Desktop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="hidden sm:flex items-center gap-6 md:gap-8 pt-2"
          >
            <MetricPill value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <div className="w-px h-8 bg-white/10" />
            <MetricPill value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <div className="w-px h-8 bg-white/10" />
            <MetricPill value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </motion.div>
        </div>

        {/* ── PHOTO ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
          className="lg:col-span-5 relative group w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[440px] mx-auto lg:ml-auto lg:mr-0 order-2"
        >
          {/* Soft glow */}
          <div className="absolute -inset-4 bg-emerald-500/[0.06] blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl shadow-black/40 z-10">
            <Image
              src={photo}
              alt="Omar Faruk — Full Stack Developer & Technical Mentor"
              priority
              placeholder="blur"
              sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 440px"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] brightness-[0.92] group-hover:brightness-100"
            />

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6"
            >
              <div className="backdrop-blur-xl bg-black/50 border border-emerald-500/20 p-3 sm:p-4 rounded-2xl flex items-center gap-3">
                <div className="size-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <div>
                  <span className="font-mono text-[8px] sm:text-[9px] text-emerald-400 uppercase tracking-[0.15em] block">
                    Status
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-white tracking-tight block">
                    {t.hero.status}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="sm:hidden col-span-1 order-3 w-full mt-6"
        >
          <div className="grid grid-cols-3 gap-3">
            <MetricCard value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <MetricCard value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <MetricCard value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 border border-white/15 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 bg-emerald-500/60 rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ── Sub-components ── */

const MetricPill = memo(function MetricPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl md:text-3xl font-black text-white tracking-tighter">{value}</span>
      <span className="text-[10px] md:text-xs text-zinc-500 font-medium uppercase tracking-wider leading-tight max-w-[80px]">{label}</span>
    </div>
  );
});

const MetricCard = memo(function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-3 text-center">
      <span className="text-xl font-black text-white tracking-tighter block">{value}</span>
      <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider leading-tight mt-1 block">{label}</span>
    </div>
  );
});
