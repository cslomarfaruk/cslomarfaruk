'use client';

import { motion } from 'motion/react';
import { Quote, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const TESTIMONIALS_DATA = {
  en: [
    {
      author: 'SaaS Founder & Product Lead',
      role: 'E-commerce & Subscription Platform',
      quote:
        'Omar engineered our entire backend and admin portal with Next.js and PostgreSQL. The architecture effortlessly handled 5x seasonal traffic spikes without a single hitch. His attention to security, rate limiting, and database indexing was exceptional.',
      rating: 5,
      highlight: 'Zero Downtime Under 5x Surge',
    },
    {
      author: 'Head of Operations',
      role: 'Healthcare & Workflow SaaS',
      quote:
        'We needed a complex multi-step workflow automated with custom RBAC and PDF generation. Omar delivered ahead of schedule with clean code, thorough documentation, and zero technical debt. A true professional.',
      rating: 5,
      highlight: 'Delivered Ahead of Schedule',
    },
    {
      author: 'Lead Researcher & CSE Graduate',
      role: 'Academic Blockchain Prototype',
      quote:
        'Working with Omar on our research implementation made our project stand out at the defense. He guided the system architecture from scratch, integrated zero-knowledge proof concepts, and deployed it live with complete SSL and documentation.',
      rating: 5,
      highlight: 'Defensible Production Architecture',
    },
  ],
  bn: [
    {
      author: 'স্টার্টআপ প্রতিষ্ঠাতা ও প্রোডাক্ট হেড',
      role: 'ই-কমার্স ও সাবস্ক্রিপশন প্ল্যাটফর্ম',
      quote:
        'ওমর আমাদের সম্পূর্ণ ব্যাকএন্ড এবং অ্যাডমিন পোর্টাল Next.js এবং PostgreSQL দিয়ে তৈরি করেছেন। পিক ট্রাফিকের সময়ও সাইটে কোনো প্রকার ল্যাগ বা ডাউনটাইম আসেনি। ডাটাবেজ অপ্টিমাইজেশন ও সিকিউরিটিতে তার দক্ষতা অসাধারণ।',
      rating: 5,
      highlight: 'জিরো ডাউনটাইম ও উচ্চ পারফরম্যান্স',
    },
    {
      author: 'হেড অব অপারেশনস',
      role: 'হেলথকেয়ার ও ওয়ার্কফ্লো SaaS',
      quote:
        'আমাদের জটিল মাল্টি-স্টেপ ডাটা প্রসেসিং ও রোল-বেসড অ্যাক্সেস কন্ট্রোল প্রয়োজন ছিল। ওমর নির্দিষ্ট সময়ের আগেই মানসম্মত কোড ও সুস্পষ্ট ডকুমেন্টেশন সহ সিস্টেম ডেলিভার করেছেন।',
      rating: 5,
      highlight: 'সময়ের আগেই সফল ডেলিভারি',
    },
    {
      author: 'রিসার্চ লিড ও সিএসই গ্র্যাজুয়েট',
      role: 'একাডেমিক ব্লকচেইন প্রজেক্ট',
      quote:
        'আমাদের ফাইনাল ইয়ার থিসিস প্রজেক্টে ওমরের টেকনিক্যাল গাইডেন্স প্রজেক্টটিকে সেরা মানে উন্নীত করেছে। কোডিং থেকে শুরু করে লাইভ হোস্টিং পর্যন্ত প্রতিটি ধাপে তিনি সার্বিক সহযোগিতা করেছেন।',
      rating: 5,
      highlight: 'ডিফেন্স-রেডি কমপ্লিট প্রোটোটাইপ',
    },
  ],
};

export default function Testimonials() {
  const { language } = useLanguage();
  const items = language === 'bn' ? TESTIMONIALS_DATA.bn : TESTIMONIALS_DATA.en;

  return (
    <section
      id="testimonials"
      className="px-4 sm:px-6 py-16 sm:py-24 max-w-6xl mx-auto border-t border-border relative scroll-mt-20"
      aria-label="Client Testimonials and Reviews"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16">
        <div>
          <div className="pill-badge mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? 'ক্লায়েন্ট মতামত' : 'Client Feedback & Track Record'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-primary leading-tight">
            {language === 'bn' ? (
              <>বিশ্বস্ত অংশীদারদের <span className="text-accent">অভিজ্ঞতা</span></>
            ) : (
              <>Engineered for <span className="text-accent">Reliability & Results</span></>
            )}
          </h2>
        </div>
        <p className="text-text-secondary text-sm sm:text-base max-w-md border-l-2 border-accent pl-4 leading-relaxed">
          {language === 'bn'
            ? 'কোড শুধু লেখা নয়, বাস্তব ব্যবহারকারীদের জন্য স্থিতিশীল ও টেকসই সিস্টেম গড়ে তোলাই আমার প্রধান লক্ষ্য।'
            : 'I deliver robust, production-grade solutions that run smoothly and deliver tangible business outcomes.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="editorial-card p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-[11px] font-semibold text-accent flex items-center gap-1">
                  <CheckCircle2 className="size-3" />
                  <span>{item.highlight}</span>
                </span>
              </div>

              <Quote className="size-6 text-text-muted/30 mb-3 group-hover:text-accent transition-colors" />

              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-border-subtle">
              <h3 className="text-sm font-bold text-text-primary">{item.author}</h3>
              <p className="text-xs text-text-muted mt-0.5">{item.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
