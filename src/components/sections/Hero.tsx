'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Facebook, MessageCircle } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import photo from '../../dp-new.jpg';
import { useLanguage } from '@/lib/i18n';

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
        className="absolute top-1/4 -right-1/4 -z-10 w-[800px] h-[800px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -70, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        style={{ willChange: "transform" }}
        className="absolute -bottom-1/4 -left-1/4 -z-10 w-[600px] h-[600px] bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-7 space-y-8 md:space-y-10 text-center lg:text-left w-full order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-accent border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="mono-label !opacity-100 !text-emerald-400 font-black tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-xs">
              {t.hero.tagline}
            </span>
          </motion.div>

          <div className="space-y-4 md:space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black uppercase",
                language === 'bn' ? "leading-[1.2] tracking-normal" : "tracking-tighter leading-[1]"
              )}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-300 via-zinc-100 to-zinc-400 pb-2 inline-block">
                {t.hero.headline_pt1}
              </span>
              <br />
              <span className="bg-clip-text text-gradient inline-block mt-2 pb-4">
                {t.hero.headline_pt2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-2xl lg:text-3xl text-zinc-400 max-w-2xl lg:mx-0 mx-auto leading-tight font-light tracking-tight"
            >
              {t.hero.subheadline}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
             <a href="#contact" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold uppercase tracking-wider hover:bg-emerald-500 transition-colors">
               {t.hero.cta_discuss}
             </a>
             <a href="#projects" className="px-8 py-4 glass border-white/10 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/5 transition-colors">
               {t.hero.cta_portfolio}
             </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative group perspective-1000 w-full max-w-[450px] mx-auto px-2 sm:px-4 md:px-0 order-2"
        >
          <div className="absolute -inset-2 bg-emerald-500/10 blur-[40px] rounded-full group-hover:bg-emerald-500/20 transition-all duration-700 z-0"></div>
          <div className="absolute -inset-[2px] rounded-[34px] overflow-hidden z-0 opacity-100 transition-opacity duration-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ willChange: "transform" }}
              className="w-[200%] h-[200%] absolute -top-[50%] -left-[50%] bg-[conic-gradient(from_0deg,transparent_0_180deg,rgba(16,185,129,0.8)_300deg,rgba(255,255,255,1)_360deg)]"
            />
          </div>

          <div className="relative aspect-[4/5] w-full max-w-full mx-auto rounded-[32px] overflow-hidden border border-white/5 glass shadow-2xl z-10 bg-zinc-950 p-1 md:p-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="h-full w-full rounded-[40px] overflow-hidden bg-zinc-950 p-2"
            >
              <img
                src={(photo as any).src || (photo as unknown as string)}
                alt="Omar Faruk"
                loading="eager"
                decoding="async"
                className="h-full w-full object-cover rounded-[32px] transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-110 will-change-transform"
              />
            </motion.div>

            <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="glass-accent p-4 md:p-5 rounded-3xl border-emerald-500/30 shadow-glow shadow-emerald-500/10 flex items-center gap-4 w-full"
              >
                <div className="size-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                <div>
                  <span className="mono-label !text-emerald-400 !opacity-100 block mb-0.5">Studio Status</span>
                  <span className="text-sm md:text-lg font-black text-[#ffffff] tracking-tighter leading-none block">{t.hero.status}</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-12 w-full order-3 mt-4 md:mt-8"
        >
          <div className="glass rounded-[2rem] p-4 md:p-6 flex flex-col xl:flex-row items-center justify-between gap-6 border border-white/10 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 md:gap-10 w-full xl:w-auto">
              <ContactItem icon={MessageCircle} label="WhatsApp" value="+880 1839 467728" href="https://wa.me/8801839467728" />
              <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
              <ContactItem icon={Mail} label="Messaging" value="omar@devcsl.tech" href="mailto:omar@devcsl.tech" />
              <div className="hidden sm:block w-[1px] h-8 bg-white/10"></div>
              <ContactItem icon={MapPin} label="Location" value="Available Worldwide" />
            </div>

            <div className="flex gap-3 w-full xl:w-auto justify-center xl:justify-end pt-4 xl:pt-0 border-t border-white/5 xl:border-none">
              <SocialLink icon={Github} href="https://github.com/cslomarfaruk/" />
              <SocialLink icon={Linkedin} href="https://www.linkedin.com/in/csl-omarfaruk/" />
              <SocialLink icon={Facebook} href="https://www.facebook.com/cslomarfaruk1/" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-emerald-500 rounded-full mx-auto"
            />
          </div>
          <span className="mono-label !text-[8px] tracking-[0.3em] !text-zinc-600">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href, isPrimary }: { icon: any, label: string, value: string, href?: string, isPrimary?: boolean }) {
  const content = (
    <div className="flex items-center gap-4 w-full sm:w-auto p-4 sm:p-0 bg-white/5 sm:bg-transparent border border-white/5 sm:border-transparent rounded-2xl transition-all hover:bg-white/10 sm:hover:bg-transparent">
      <div className={cn(
        "p-3 rounded-xl border transition-colors shadow-lg",
        isPrimary ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-emerald-500/20" : "bg-white/5 border-white/10 text-zinc-400"
      )}>
        <Icon size={20} />
      </div>
      <div className="text-left flex-1">
        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-zinc-500 block mb-0.5">{label}</span>
        <span className="text-sm md:text-base font-bold text-zinc-100 block">{value}</span>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" className="block w-full sm:w-auto sm:hover:scale-105 transition-transform">
      {content}
    </a>
  ) : (
    <div className="w-full sm:w-auto">{content}</div>
  );
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 glass rounded-xl border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5 text-zinc-100 transition-all shadow-xl group hover:glow-emerald"
    >
      <Icon size={20} className="group-hover:text-emerald-400 transition-colors" />
    </a>
  );
}
