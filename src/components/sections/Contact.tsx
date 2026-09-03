'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, Loader2, MessageSquare, Mail, Phone, ArrowRight, ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useLanguage } from '@/lib/i18n';

import Turnstile from '../Turnstile';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string>('');
  const [turnstileError, setTurnstileError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Business / Founder',
    budget: '$500 - $2,000',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      setTurnstileError(
        language === 'bn'
          ? 'অনুগ্রহ করে সিকিউরিটি ভেরিফিকেশন সম্পন্ন করুন।'
          : 'Please complete the security check to proceed.'
      );
      return;
    }

    setTurnstileError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTurnstileToken('');
      } else {
        const data = await response.json();
        alert(data.error || 'Something went wrong. Please reach out via WhatsApp.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network error. Please try reaching out directly via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* ── LEFT COLUMN: DIRECT REACH & INFO ── */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="pill-badge mb-4 self-start">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.tagline}</span>
          </div>

          <h2
            className={cn(
              'text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary mb-4',
              language === 'bn' ? 'leading-snug' : 'leading-tight'
            )}
          >
            {t.contact.headline}
          </h2>

          <p className="text-text-secondary text-sm sm:text-base leading-relaxed mb-8">
            {t.contact.subheadline}
          </p>

          {/* Direct WhatsApp Quick Connect Card */}
          <div className="editorial-card p-6 mb-6 bg-surface-subtle">
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-text-primary">
                  {language === 'bn' ? 'দ্রুত যোগাযোগের মাধ্যম' : 'Fastest Response'}
                </h4>
                <p className="text-xs text-text-muted">
                  {language === 'bn' ? 'হোয়াটসঅ্যাপে সরাসরি চ্যাট করুন' : 'Chat directly with Omar Faruk'}
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/8801839467728"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 shadow-soft-sm"
            >
              <span>{t.contact.whatsapp_btn}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Direct Contacts */}
          <div className="flex flex-col gap-3 text-xs sm:text-sm text-text-secondary">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:omar@devcsl.tech" className="hover:text-accent transition-colors font-medium">
                omar@devcsl.tech
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <a href="tel:+8801839467728" className="hover:text-accent transition-colors font-medium">
                +880 1839 467728
              </a>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN: INTERACTIVE FORM ── */}
        <div className="lg:col-span-7 w-full">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="contact-form"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="editorial-card p-6 sm:p-8 bg-surface"
              >
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary block">
                        {t.contact.form_name}
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.contact.form_name_ph}
                        className="w-full rounded-xl border border-border bg-surface-subtle px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary block">
                        {t.contact.form_email}
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.contact.form_email_ph}
                        className="w-full rounded-xl border border-border bg-surface-subtle px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Role / Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary block">
                        {t.contact.form_type}
                      </label>
                      <div className="relative">
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-surface-subtle px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          <option value="Business">Business / Founder</option>
                          <option value="Student">Student (Academic / Thesis)</option>
                          <option value="Startup">Startup Team</option>
                          <option value="Agency">Agency / Partner</option>
                          <option value="Others">Other</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-text-secondary block">
                        {t.contact.form_budget}
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-surface-subtle px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all appearance-none cursor-pointer pr-10"
                        >
                          <option value="Student">Student Discount Tier</option>
                          <option value="$500 - $2,000">$500 - $2,000</option>
                          <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                          <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-text-secondary block">
                      {t.contact.form_brief}
                    </label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={t.contact.form_brief_ph}
                      className="w-full rounded-xl border border-border bg-surface-subtle px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                    />
                  </div>

                  {/* Cloudflare Turnstile Bot Protection */}
                  <div className="pt-1">
                    <Turnstile
                      onVerify={(token) => {
                        setTurnstileToken(token);
                        setTurnstileError(null);
                      }}
                      onExpire={() => setTurnstileToken('')}
                    />
                    {turnstileError && (
                      <p className="text-xs text-red-500 font-medium mt-1.5">
                        {turnstileError}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 text-sm font-semibold rounded-xl shadow-soft-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>{language === 'bn' ? 'পাঠানো হচ্ছে...' : 'Sending...'}</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <span>{t.contact.form_submit}</span>
                        <Send className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="editorial-card p-8 sm:p-12 text-center flex flex-col items-center justify-center bg-surface min-h-[380px]"
              >
                <div className="size-16 rounded-2xl bg-accent-subtle text-accent flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
                  {language === 'bn' ? 'মেসেজ পাঠানো হয়েছে!' : 'Message Received!'}
                </h3>
                <p className="text-text-secondary text-sm max-w-sm mb-8 leading-relaxed">
                  {language === 'bn'
                    ? 'ধন্যবাদ! আপনার মেসেজ পেয়েছি। দ্রুত উত্তরের জন্য চাইলে সরাসরি হোয়াটসঅ্যাপেও নক দিতে পারেন।'
                    : "Thanks for reaching out! I will review your project requirements and respond within 24 hours."}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      businessType: 'Business / Founder',
                      budget: '$500 - $2,000',
                      message: '',
                    });
                  }}
                  className="btn-secondary py-2 px-5 text-xs rounded-xl"
                >
                  {language === 'bn' ? 'আরেকটি বার্তা পাঠান' : 'Send Another Message'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
