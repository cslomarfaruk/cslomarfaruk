import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Calendar, Clock, CheckCircle2, Loader2, MessageSquare, ArrowRight, GraduationCap } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: 'Business',
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
    <section id="contact" className="px-6 py-24 md:py-40 max-w-7xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <span className="mono-label text-emerald-500 font-black mb-6 block tracking-[0.5em]">GET IN TOUCH</span>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9] mb-12">
            Ready to <br /><span className="text-zinc-700 italic">Deploy</span> <br />
            <span className="text-gradient">ROI?</span>
          </h2>

          <div className="space-y-8 md:space-y-10">
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-6 rounded-3xl mb-8">
              <div className="flex items-center gap-4 mb-2">
                <MessageSquare className="text-emerald-500" size={20} />
                <span className="text-emerald-500 font-black uppercase text-xs tracking-widest">Instant Contact</span>
              </div>
              <p className="text-white font-bold text-sm mb-4">For immediate response, use WhatsApp. I reply within minutes during business hours.</p>
              <a
                href="https://wa.me/8801839467728"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all"
              >
                Chat on WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>

            <div className="flex gap-6 items-start">
              <div className="size-12 rounded-2xl glass-accent flex items-center justify-center text-emerald-400 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight text-lg">24h SLA</h4>
                <p className="text-zinc-500 font-light max-w-xs mt-1">I prioritize high-ROI projects but strictly reply to all business inquiries within 24 hours.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="size-12 rounded-2xl glass-accent flex items-center justify-center text-emerald-400 shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-white font-black uppercase tracking-tight text-lg">Student Friendly</h4>
                <p className="text-zinc-500 font-light max-w-xs mt-1 text-sm italic">"Doing a university project? Select the 'Student' option below for dedicated mentorship and special rates."</p>
              </div>
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
                className="glass p-8 md:p-16 rounded-[48px] md:rounded-[64px] border-white/5 relative"
              >
                <form className="space-y-6 md:space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4 group-focus-within:text-emerald-400 transition-colors">Full Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 font-light text-sm placeholder:text-zinc-500"
                      />
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4 group-focus-within:text-emerald-400 transition-colors">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@business.tech"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 font-light text-sm placeholder:text-zinc-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4 group-focus-within:text-emerald-400 transition-colors">I am a...</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 font-light appearance-none text-sm cursor-pointer"
                      >
                        <option className="bg-zinc-950 text-white" value="Business">Business / Founder</option>
                        <option className="bg-zinc-950 text-white" value="Student">Student (Final Year/Project)</option>
                        <option className="bg-zinc-950 text-white" value="Agency">Agency Partner</option>
                      </select>
                    </div>
                    <div className="space-y-3 relative group">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4 group-focus-within:text-emerald-400 transition-colors">Budget Range</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl md:rounded-3xl px-6 md:px-8 py-4 md:py-5 text-white focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 font-light appearance-none text-sm cursor-pointer"
                      >
                        {formData.businessType === 'Student' ? (
                          <>
                            <option className="bg-zinc-950 text-white" value="Student Project (Niche)">Micro (Help with module)</option>
                            <option className="bg-zinc-950 text-white" value="Student MVP (Full)">Student MVP (Full Project)</option>
                          </>
                        ) : (
                          <>
                            <option className="bg-zinc-950 text-white" value="$500 - $2,000">$500 - $2,000 (Small MVP)</option>
                            <option className="bg-zinc-950 text-white" value="$2,000 - $5,000">$2,000 - $5,000 (Custom Build)</option>
                            <option className="bg-zinc-950 text-white" value="$10,000+">$10,000+ (Enterprise)</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3 relative group">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-4 group-focus-within:text-emerald-400 transition-colors">Project Brief</label>
                    <textarea
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder={formData.businessType === 'Student' ? "Describe your final year project or help needed..." : "Describe your current bottlenecks or project goals..."}
                      className="w-full bg-white/5 border border-white/10 rounded-[24px] md:rounded-[32px] px-6 md:px-8 py-4 md:py-6 text-white focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_30px_rgba(16,185,129,0.15)] transition-all duration-300 font-light text-sm resize-none placeholder:text-zinc-500"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full py-5 md:py-6 bg-emerald-600 text-white rounded-[24px] md:rounded-[32px] font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-white hover:text-emerald-600 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-2xl shadow-emerald-500/20 overflow-hidden group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      <>
                        <span className="relative z-10">Deploy Message</span>
                        <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                className="glass p-10 md:p-16 rounded-[64px] border-emerald-500/30 flex flex-col items-center text-center justify-center min-h-[500px]"
              >
                <div className="size-24 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-8 border border-emerald-500/20">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Brief Received.</h3>
                <p className="text-zinc-400 font-light text-lg max-w-sm mb-12">
                  I've received your inquiry and will audit your requirements within 24 hours. For an immediate response, follow up on WhatsApp.
                </p>

                <div className="flex flex-col w-full gap-4">
                  <a
                    href="https://wa.me/8801839467728"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-5 bg-emerald-600 text-white rounded-3xl font-black  text-xs tracking-widest flex items-center justify-center gap-3 hover:bg-white hover:text-emerald-600 transition-all shadow-xl shadow-emerald-600/20"
                  >
                    Instant WhatsApp Follow-up
                    <MessageSquare size={16} />
                  </a>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="w-full py-5 glass border-white/10 text-zinc-400 rounded-3xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 hover:text-white transition-all"
                  >
                    Back to Form
                    <ArrowRight size={14} />
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
