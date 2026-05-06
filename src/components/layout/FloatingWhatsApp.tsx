'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/8801839467728"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-[130] group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute -inset-1 rounded-full bg-emerald-500/25 blur-xl group-hover:bg-emerald-500/35 transition-colors" />
      <span className="relative flex items-center gap-2 rounded-full bg-emerald-500 text-black px-4 py-3 md:px-5 md:py-3.5 font-black text-[10px] md:text-xs uppercase tracking-[0.18em] shadow-2xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-95 transition-all">
        <MessageCircle size={16} />
        WhatsApp
      </span>
    </motion.a>
  );
}
