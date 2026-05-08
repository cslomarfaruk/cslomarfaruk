"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useMemo } from "react";
import { motion } from "motion/react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { cn } from "@/src/lib/utils";
import photo from "../../dp-new.jpg";
import { useLanguage } from "@/lib/i18n";

const FLOAT_ANIMATION_1 = {
  scale: [1, 1.2, 1],
  x: [0, 50, 0],
  y: [0, -50, 0],
};

const FLOAT_ANIMATION_2 = {
  scale: [1, 1.3, 1],
  x: [0, -70, 0],
  y: [0, 30, 0],
};

const FLOAT_TRANSITION_1 = {
  duration: 20,
  repeat: Infinity,
  ease: "linear",
} as const;

const FLOAT_TRANSITION_2 = {
  duration: 25,
  repeat: Infinity,
  ease: "linear",
} as const;

export default function Hero() {
  const { t, language } = useLanguage();

  const titleClass = useMemo(
    () =>
      cn(
        "text-[2rem] sm:text-[2.75rem] md:text-6xl lg:text-[5.5rem] font-black uppercase animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both flex flex-col",
        language === "bn"
          ? "leading-[1.3] tracking-normal"
          : "tracking-tighter leading-[0.92]",
      ),
    [language],
  );

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-20 pb-10 sm:pt-24 sm:pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        aria-hidden="true"
        animate={FLOAT_ANIMATION_1}
        transition={FLOAT_TRANSITION_1}
        className="absolute top-1/4 -right-1/4 -z-10 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-emerald-600/4 blur-[150px] rounded-full pointer-events-none will-change-transform transform-gpu"
      />

      <motion.div
        aria-hidden="true"
        animate={FLOAT_ANIMATION_2}
        transition={FLOAT_TRANSITION_2}
        className="absolute -bottom-1/4 -left-1/4 -z-10 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-600/4 blur-[130px] rounded-full pointer-events-none will-change-transform transform-gpu"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 space-y-5 md:space-y-8 text-left w-full order-1 z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-accent border-emerald-500/20 shadow-2xl shadow-emerald-500/10 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
            </span>

            <span className="mono-label !opacity-100 !text-emerald-400 font-black tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs">
              {t.hero.tagline}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h1 className={titleClass}>
              <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-zinc-200 to-zinc-500 pb-1 sm:pb-2">
                {t.hero.headline_pt1}
              </span>

              <span className={cn("bg-clip-text text-gradient pb-2 sm:pb-4", language === 'bn' ? "mt-0.5" : "mt-1 sm:mt-2")}>
                {t.hero.headline_pt2}
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-400 max-w-2xl mx-0 leading-relaxed font-light tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
              {t.hero.subheadline}
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 justify-start will-change-transform"
          >
            <Link
              href="#contact"
              scroll
              className="group px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 glass bg-gradient-to-br from-emerald-600/30 to-emerald-400/20 text-zinc-100 text-center rounded-full font-bold uppercase tracking-wider text-sm sm:text-base hover:from-emerald-500/40 hover:to-emerald-400/30 transition-all flex items-center justify-center gap-2"
            >
              {t.hero.cta_discuss}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="#projects"
              scroll
              className="px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 glass border border-white/10 text-zinc-100 text-center rounded-full font-bold uppercase tracking-wider text-sm sm:text-base hover:bg-white/5 transition-colors"
            >
              {t.hero.cta_portfolio}
            </Link>
          </motion.div>

          {/* Social Proof Metrics — Desktop only (inline) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="hidden sm:flex items-center gap-6 md:gap-8 pt-2"
          >
            <MetricPill value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <div className="w-px h-8 bg-white/10" />
            <MetricPill value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <div className="w-px h-8 bg-white/10" />
            <MetricPill value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative group perspective-1000 w-full max-w-[280px] sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] mx-auto lg:ml-auto lg:mr-0 order-2 mt-2 lg:mt-0"
        >
          <div className="absolute -inset-2 bg-emerald-500/8 blur-[48px] rounded-full group-hover:bg-emerald-500/15 transition-all duration-700 z-0" />

          <div className="relative aspect-[4/5] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/5 glass shadow-2xl z-10 bg-zinc-950 p-1 md:p-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-full w-full rounded-[28px] sm:rounded-[40px] overflow-hidden bg-zinc-950 p-1.5 sm:p-2"
            >
              <Image
                src={photo}
                alt="Omar Faruk — Full Stack Developer"
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 340px, 450px"
                className="h-full w-full object-cover rounded-[24px] sm:rounded-[32px] transition-transform duration-700 group-hover:scale-105 brightness-[0.93] group-hover:brightness-100 will-change-transform transform-gpu"
              />
            </motion.div>

            {/* STATUS */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-accent p-3 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl border-emerald-500/30 shadow-glow shadow-emerald-500/10 flex items-center gap-3 sm:gap-4"
              >
                <div className="size-3 sm:size-4 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />

                <div>
                  <span className="mono-label !text-emerald-400 !opacity-100 block mb-0.5 !text-[8px] sm:!text-[10px]">
                    Studio Status
                  </span>

                  <span className="text-xs sm:text-sm md:text-lg font-black text-white tracking-tighter leading-none block">
                    {t.hero.status}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Mobile Social Proof Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
          className="sm:hidden col-span-1 order-3 w-full"
        >
          <div className="grid grid-cols-3 gap-3">
            <MetricCard value={t.hero.metric_projects} label={t.hero.metric_projects_label} />
            <MetricCard value={t.hero.metric_experience} label={t.hero.metric_experience_label} />
            <MetricCard value={t.hero.metric_clients} label={t.hero.metric_clients_label} />
          </div>
        </motion.div>

        {/* CONTACT BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-12 w-full order-4 mt-4 md:mt-8"
        >
          <div className="glass section-shell rounded-2xl sm:rounded-[2rem] p-3 sm:p-4 md:p-6 flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-4 sm:gap-6 border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-6 md:gap-10 w-full xl:w-auto">
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                value="+880 1839 467728"
                href="https://wa.me/8801839467728"
                isPrimary
              />

              <Divider />

              <ContactItem
                icon={Mail}
                label="Email"
                value="omar@devcsl.tech"
                href="mailto:omar@devcsl.tech"
              />

              <Divider />

              <ContactItem
                icon={MapPin}
                label="Location"
                value="Available Worldwide"
              />
            </div>

            <div className="flex gap-2 sm:gap-3 w-full xl:w-auto justify-start xl:justify-end pt-3 sm:pt-4 xl:pt-0 border-t border-white/5 xl:border-none">
              <SocialLink
                icon={Github}
                href="https://github.com/cslomarfaruk/"
                label="GitHub"
              />

              <SocialLink
                icon={Linkedin}
                href="https://www.linkedin.com/in/csl-omarfaruk/"
                label="LinkedIn"
              />

              <SocialLink
                icon={Facebook}
                href="https://www.facebook.com/cslomarfaruk1/"
                label="Facebook"
              />
            </div>
          </div>
        </motion.div>

        {/* SCROLL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full mx-auto"
            />
          </div>

          <span className="mono-label !text-[8px] tracking-[0.3em] !text-zinc-600">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

/* -------------------------------- */
/* SMALL COMPONENTS */
/* -------------------------------- */

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
    <div className="glass rounded-2xl p-3 text-center border border-white/5">
      <span className="text-xl font-black text-white tracking-tighter block">{value}</span>
      <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider leading-tight mt-1 block">{label}</span>
    </div>
  );
});

const Divider = memo(function Divider() {
  return <div className="hidden sm:block w-[1px] h-8 bg-white/10" />;
});

const ContactItem = memo(function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  isPrimary,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  isPrimary?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto p-2.5 sm:p-3 sm:p-0 bg-white/5 sm:bg-transparent border border-white/5 sm:border-transparent rounded-xl sm:rounded-2xl transition-all hover:bg-white/10 sm:hover:bg-transparent">
      <div
        className={cn(
          "p-2.5 sm:p-3 rounded-lg sm:rounded-xl border transition-colors shadow-lg shrink-0",
          isPrimary
            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20"
            : "bg-white/5 border-white/10 text-zinc-400",
        )}
      >
        <Icon size={16} className="sm:w-5 sm:h-5" />
      </div>

      <div className="text-left flex-1 min-w-0">
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-black text-zinc-500 block mb-0.5">
          {label}
        </span>

        <span className="text-xs sm:text-sm md:text-base font-bold text-zinc-100 block truncate">
          {value}
        </span>
      </div>
    </div>
  );

  if (!href) {
    return <div className="w-full sm:w-auto">{content}</div>;
  }

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="block w-full sm:w-auto sm:hover:scale-105 transition-transform"
      aria-label={label}
    >
      {content}
    </a>
  );
});

const SocialLink = memo(function SocialLink({
  icon: Icon,
  href,
  label,
}: {
  icon: any;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 sm:p-3 glass rounded-lg sm:rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-100 transition-all shadow-xl group hover:glow-emerald"
    >
      <Icon
        size={18}
        className="sm:w-5 sm:h-5 group-hover:text-emerald-400 transition-colors"
      />
    </a>
  );
});
