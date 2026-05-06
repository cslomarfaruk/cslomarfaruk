import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export default function MobileQuickNav() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 300;
      setShowBottom(!isAtBottom);

      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1500); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-4 z-[100] md:hidden flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && isScrolling && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="size-10 glass bg-zinc-900/80 text-zinc-400 rounded-full flex items-center justify-center border border-white/10 hover:text-white shadow-xl"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/8801839467728"
        target="_blank"
        rel="noopener noreferrer"
        className="size-14 glass border-emerald-500/30 !text-white rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(16,185,129,0.2)] hover:border-emerald-500/60 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all"
        aria-label="Contact on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>

      <AnimatePresence>
        {showBottom && isScrolling && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            onClick={scrollToBottom}
            className="size-10 glass bg-zinc-900/80 text-zinc-400 rounded-full flex items-center justify-center border border-white/10 hover:text-white shadow-xl"
            aria-label="Scroll to bottom"
          >
            <ChevronDown size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
