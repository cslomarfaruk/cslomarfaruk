'use client';

import Image from 'next/image';
import Link from 'next/link';
import { memo, useMemo } from 'react';
import { motion } from 'motion/react';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Facebook,
  MessageCircle,
} from 'lucide-react';

import { cn } from '@/src/lib/utils';
import photo from '../../dp-new.jpg';
import { useLanguage } from '@/lib/i18n';

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
  ease: 'linear',
};

const FLOAT_TRANSITION_2 = {
  duration: 25,
  repeat: Infinity,
  ease: 'linear',
};

export default function Hero() {
  const { t, language } = useLanguage();

  const titleClass = useMemo(
    () =>
      cn(
        'text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black uppercase animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both',
        language === 'bn'
          ? 'leading-[1.2] tracking-normal'
          : 'tracking-tighter leading-[1]'
      ),
    [language]
  );

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Effects */}
      <motion.div
        aria-hidden="true"
        animate={FLOAT_ANIMATION_1}
        transition={FLOAT_TRANSITION_1}
        className="absolute top-1/4 -right-1/4 -z-10 w-[800px] h-[800px] bg-emerald-600/4 blur-[150px] rounded-full pointer-events-none will-change-transform transform-gpu"
      />

      <motion.div
        aria-hidden="true"
        animate={FLOAT_ANIMATION_2}
        transition={FLOAT_TRANSITION_2}
        className="absolute -bottom-1/4 -left-1/4 -z-10 w-[600px] h-[600px] bg-emerald-600/4 blur-[130px] rounded-full pointer-events-none will-change-transform transform-gpu"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left w-full order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-accent border-emerald-500/20 shadow-2xl shadow-emerald-500/10 animate-in fade-in slide-in-from-left-4 duration-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>

            <span className="mono-label !opacity-100 !text-emerald-400 font-black tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
              {t.hero.tagline}
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4 md:space-y-6">
            <h1 className={titleClass}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 via-zinc-100 to-zinc-500 pb-2 inline-block">
                {t.hero.headline_pt1}
              </span>

              <br />

              <span className="bg-clip-text text-gradient inline-block mt-2 pb-4">
                {t.hero.headline_pt2}
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-2xl lg:mx-0 mx-auto leading-relaxed font-light tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300 fill-mode-both">
              {t.hero.subheadline}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500 fill-mode-both">
            <Link
              href="#contact"
              scroll
              className="px-8 py-4 glass bg-gradient-to-br from-emerald-600/30 to-emerald-400/20 text-zinc-100 rounded-full font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors"
            >
              {t.hero.cta_discuss}
            </Link>

            <Link
              href="#projects"
              scroll
              className="px-8 py-4 glass border border-white/10 text-zinc-100 rounded-full font-bold uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              {t.hero.cta_portfolio}
            </Link>
          </div>
        </div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-5 relative group perspective-1000 w-full max-w-[450px] mx-auto px-2 sm:px-4 md:px-0 order-2"
        >
          <div className="absolute -inset-2 bg-emerald-500/8 blur-[48px] rounded-full group-hover:bg-emerald-500/15 transition-all duration-700 z-0" />

          <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden border border-white/5 glass shadow-2xl z-10 bg-zinc-950 p-1 md:p-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-full w-full rounded-[40px] overflow-hidden bg-zinc-950 p-2"
            >
              <Image
                src={photo}
                alt="Omar Faruk"
                priority
                placeholder="blur"
                sizes="(max-width: 768px) 100vw, 450px"
                className="h-full w-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105 brightness-[0.93] group-hover:brightness-100 will-change-transform transform-gpu"
              />
            </motion.div>

            {/* STATUS */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-accent p-4 md:p-5 rounded-3xl border-emerald-500/30 shadow-glow shadow-emerald-500/10 flex items-center gap-4"
              >
                <div className="size-4 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />

                <div>
                  <span className="mono-label !text-emerald-400 !opacity-100 block mb-0.5">
                    Studio Status
                  </span>

                  <span className="text-sm md:text-lg font-black text-[#ffffff] tracking-tighter leading-none block">
                    {t.hero.status}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* CONTACT BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-12 w-full order-3 mt-4 md:mt-8"
        >
          <div className="glass section-shell rounded-[2rem] p-4 md:p-6 flex flex-col xl:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 md:gap-10 w-full xl:w-auto">
              <ContactItem
                icon={MessageCircle}
                label="WhatsApp"
                value="+880 1839 467728"
                href="https://wa.me/8801839467728"
              />

              <Divider />

              <ContactItem
                icon={Mail}
                label="Messaging"
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

            <div className="flex gap-3 w-full xl:w-auto justify-center xl:justify-end pt-4 xl:pt-0 border-t border-white/5 xl:border-none">
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
                ease: 'easeInOut',
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
    <div className="flex items-center gap-4 w-full sm:w-auto p-4 sm:p-0 bg-white/5 sm:bg-transparent border border-white/5 sm:border-transparent rounded-2xl transition-all hover:bg-white/10 sm:hover:bg-transparent">
      <div
        className={cn(
          'p-3 rounded-xl border transition-colors shadow-lg',
          isPrimary
            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20'
            : 'bg-white/5 border-white/10 text-zinc-400'
        )}
      >
        <Icon size={20} />
      </div>

      <div className="text-left flex-1">
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 block mb-0.5">
          {label}
        </span>

        <span className="text-sm md:text-base font-bold text-zinc-100 block">
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
      target={href.startsWith('http') ? '_blank' : undefined}
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
      className="p-3 glass rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-100 transition-all shadow-xl group hover:glow-emerald"
    >
      <Icon
        size={20}
        className="group-hover:text-emerald-400 transition-colors"
      />
    </a>
  );
});