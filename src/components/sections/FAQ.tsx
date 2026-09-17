'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { cn } from '@/src/lib/utils';

export default function FAQ() {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q8, a: t.faq.a8 },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="pill-badge mb-4 inline-flex">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faq.tagline}</span>
          </div>

          <h2
            className={cn(
              'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
              language === 'bn' ? 'leading-snug' : 'leading-tight'
            )}
          >
            {t.faq.headline}
          </h2>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {t.faq.subheadline}
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="editorial-card overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary group-hover:text-accent transition-colors pr-2">
                    {faq.q}
                  </h3>
                  <div
                    className={cn(
                      'size-8 rounded-lg border border-border bg-surface-subtle flex items-center justify-center text-text-muted transition-transform shrink-0',
                      isOpen && 'rotate-180 bg-accent-subtle text-accent border-accent/40'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border-subtle pt-3.5">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Quick CTA banner below FAQs */}
        <div className="mt-10 sm:mt-12 p-6 rounded-2xl border border-border bg-surface-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-text-primary mb-1">
              {language === 'bn' ? 'অন্য কোনো প্রশ্ন আছে?' : 'Have a different question or specific scope?'}
            </h4>
            <p className="text-xs text-text-muted">
              {language === 'bn'
                ? 'সরাসরি আলোচনা করতে মেসেজ দিন বা ফর্মটি পূরণ করুন।'
                : "Let's discuss your timeline, tech stack, and deliverable goals directly."}
            </p>
          </div>
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href="https://wa.me/8801839467728"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-3.5 rounded-xl shadow-soft-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="#contact"
              className="btn-secondary text-xs py-2 px-3.5 rounded-xl inline-flex items-center gap-1"
            >
              <span>{language === 'bn' ? 'ফর্ম পূরণ' : 'Get in Touch'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
