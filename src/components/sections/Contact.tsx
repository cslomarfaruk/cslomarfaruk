'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, MessageSquare, ArrowRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

const FAST_EASE = [0.0, 0.0, 0.2, 1] as const;

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Business / Founder',
    budget: '$500 - $2,000',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        const data = await response.json();
        alert(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try reaching out via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t-2 border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <div className="inline-flex items-center gap-3 px-4 py-2 border-2 border-accent bg-accent/10 mb-6">
            <span className="font-mono text-[11px] font-black tracking-[0.2em] text-accent uppercase">
              {t.contact.tagline}
            </span>
          </div>
          
          <h2 className={cn(
            "text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-black uppercase mb-12 tracking-tighter leading-[0.85] text-white",
            language === 'bn' && "leading-[1.2] tracking-normal"
          )}>
            {t.contact.headline}
          </h2>

          <div className="space-y-8 md:space-y-10">
            <p className="text-zinc-300 font-medium tracking-tight text-xl border-l-4 border-accent pl-4">
              {t.contact.subheadline}
            </p>

            <div className="border-2 border-accent bg-brand p-8 shadow-brutal w-fit group">
              <div className="flex items-center gap-4 mb-4">
                <MessageSquare className="text-accent" size={24} />
                <span className="text-accent font-black uppercase text-xs tracking-widest">Instant Communication</span>
              </div>
              <a
                href="https://wa.me/8801839467728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-accent hover:bg-white text-black px-8 py-4 font-black uppercase text-[11px] tracking-widest transition-all shadow-brutal-white hover:shadow-brutal hover:-translate-y-1 hover:-translate-x-1"
              >
                {t.contact.whatsapp_btn}
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="brutal-card p-6 sm:p-10 border-4 border-white/20 bg-zinc-950"
              >
                <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 border-2 border-white/20 inline-block group-focus-within:border-accent group-focus-within:text-accent transition-colors">{t.contact.form_name}</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form_name_ph}
                        className="w-full bg-brand border-2 border-white/20 px-5 md:px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent focus:shadow-brutal transition-all duration-200 font-bold"
                      />
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 border-2 border-white/20 inline-block group-focus-within:border-accent group-focus-within:text-accent transition-colors">{t.contact.form_email}</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form_email_ph}
                        className="w-full bg-brand border-2 border-white/20 px-5 md:px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent focus:shadow-brutal transition-all duration-200 font-bold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 border-2 border-white/20 inline-block group-focus-within:border-accent group-focus-within:text-accent transition-colors">{t.contact.form_type}</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-brand border-2 border-white/20 px-5 md:px-6 py-4 text-white focus:outline-none focus:border-accent focus:shadow-brutal transition-all duration-200 font-bold appearance-none cursor-pointer"
                      >
                        <option className="bg-brand text-white" value="Business">Business / Founder</option>
                        <option className="bg-brand text-white" value="Agency">Agency Partner</option>
                        <option className="bg-brand text-white" value="Startup">Startup Team</option>
                        <option className="bg-brand text-white" value="Student">Student</option>
                        <option className="bg-brand text-white" value="Others">Others</option>
                      </select>
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 border-2 border-white/20 inline-block group-focus-within:border-accent group-focus-within:text-accent transition-colors">{t.contact.form_budget}</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-brand border-2 border-white/20 px-5 md:px-6 py-4 text-white focus:outline-none focus:border-accent focus:shadow-brutal transition-all duration-200 font-bold appearance-none cursor-pointer"
                      >
                        <option className="bg-brand text-white" value="Student">Student pack</option>
                        <option className="bg-brand text-white" value="$500 - $2,000">$500 - $2,000</option>
                        <option className="bg-brand text-white" value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option className="bg-brand text-white" value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option className="bg-brand text-white" value="$10,000+">$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 relative group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-black px-2 py-1 border-2 border-white/20 inline-block group-focus-within:border-accent group-focus-within:text-accent transition-colors">{t.contact.form_brief}</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t.contact.form_brief_ph}
                      className="w-full bg-brand border-2 border-white/20 px-5 md:px-6 py-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent focus:shadow-brutal transition-all duration-200 font-bold resize-none"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 bg-accent border-4 border-accent text-black font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 hover:-translate-y-1 hover:-translate-x-1 transition-all shadow-brutal-white hover:shadow-brutal disabled:opacity-50 group mt-4"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={20} />
                    ) : (
                      <>
                        <span className="relative z-10">{t.contact.form_submit}</span>
                        <Send size={20} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="brutal-card border-4 border-accent p-10 md:p-16 flex flex-col items-center text-center justify-center min-h-[500px] shadow-brutal bg-brand"
              >
                <div className="size-24 bg-accent flex items-center justify-center text-black mb-8 border-4 border-black shadow-brutal-white">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Brief Received.</h3>
                <p className="text-zinc-400 font-bold text-lg max-w-sm mb-12">
                  I've received your inquiry. For an immediate response, follow up on WhatsApp.
                </p>

                <div className="flex flex-col w-full gap-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="w-full py-5 border-2 border-white/20 text-white font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:border-accent hover:text-accent hover:shadow-brutal hover:-translate-y-1 hover:-translate-x-1 transition-all"
                  >
                    Back to Form
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
