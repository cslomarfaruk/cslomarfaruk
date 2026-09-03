'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '@/lib/i18n';

export default function FloatingWhatsApp() {
  const { language } = useLanguage();

  return (
    <motion.a
      href="https://wa.me/8801839467728"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.3 }}
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 group focus:outline-none"
      aria-label="Chat with Omar Faruk on WhatsApp"
    >
      <div className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-2.5 rounded-full shadow-soft-lg hover:shadow-glow transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20">
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide">
          {language === 'bn' ? 'হোয়াটসঅ্যাপ' : 'WhatsApp'}
        </span>
      </div>
    </motion.a>
  );
}
