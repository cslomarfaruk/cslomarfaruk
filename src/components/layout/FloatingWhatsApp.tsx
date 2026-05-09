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
      <span className="relative flex items-center gap-2 border-2 border-accent bg-accent text-black px-4 py-3 md:px-5 md:py-3.5 font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[4px_4px_0px_rgba(255,255,255,0.2)] hover:shadow-brutal hover:-translate-y-1 hover:-translate-x-1 transition-all group-hover:bg-white group-hover:border-white">
        <MessageCircle size={18} />
        WhatsApp
      </span>
    </motion.a>
  );
}
