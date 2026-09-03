'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ArrowUp, Github, Linkedin, Facebook, MessageCircle, Mail, FileText } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-surface-subtle/50 text-text-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Column 1: Brand & Positioning */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="size-8 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center p-1">
                <Image
                  src="/icon.png"
                  alt="DEV.CSL"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <span className="font-bold tracking-tight text-lg text-text-primary">
                dev<span className="text-accent">.csl</span>
              </span>
            </Link>

            <p className="text-text-secondary text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              {language === 'bn'
                ? 'প্রোডাকশন SaaS, ব্লকচেইন সিস্টেম, একাডেমিক প্রজেক্ট এবং Linux/DevOps ইনফ্রাস্ট্রাকচার ম্যানেজমেন্টে বিশ্বস্ত। আইডিয়াকে বাস্তবে রূপ দেওয়ার টেকনিক্যাল পার্টনার।'
                : 'Full-stack developer & Linux/DevOps engineer. Building production SaaS, blockchain systems, academic projects, and managing VPS infrastructure. CSE graduate from Sylhet Engineering College.'}
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/cslomarfaruk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="size-8 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:text-accent flex items-center justify-center text-text-muted transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/csl-omarfaruk/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-8 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:text-accent flex items-center justify-center text-text-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/cslomarfaruk1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-8 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:text-accent flex items-center justify-center text-text-muted transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/8801839467728"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="size-8 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:text-accent flex items-center justify-center text-text-muted transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-4">
              {language === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}
            </span>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-text-secondary">
              <li>
                <Link href="#services" className="hover:text-accent transition-colors">
                  {language === 'bn' ? 'সার্ভিসসমূহ' : 'Services & Architecture'}
                </Link>
              </li>
              <li>
                <Link href="#students" className="hover:text-accent transition-colors">
                  {language === 'bn' ? 'স্টুডেন্ট হাব' : 'Student & Thesis Hub'}
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-accent transition-colors">
                  {language === 'bn' ? 'প্রজেক্ট ও কেস স্টাডি' : 'Selected Projects'}
                </Link>
              </li>
              <li>
                <Link href="#education" className="hover:text-accent transition-colors">
                  {language === 'bn' ? 'শিক্ষা ও গবেষণা' : 'Education & Research'}
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-accent transition-colors">
                  {language === 'bn' ? 'যোগাযোগ' : 'Get in Touch'}
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="/omar_cv (4).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-1.5 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{language === 'bn' ? 'সিভি ডাউনলোড (PDF)' : 'Download CV (PDF)'}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Line */}
          <div className="md:col-span-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-text-muted block mb-4">
              {language === 'bn' ? 'সরাসরি যোগাযোগ' : 'Direct Reach'}
            </span>
            <div className="flex flex-col gap-3 text-xs sm:text-sm">
              <a
                href="https://wa.me/8801839467728"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5"
              >
                <span>+880 1839 467728</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-text-muted" />
              </a>
              <a
                href="mailto:omar@devcsl.tech"
                className="text-text-muted hover:text-accent transition-colors"
              >
                omar@devcsl.tech
              </a>
              <span className="text-[11px] text-text-muted">
                Sylhet / Dhaka, Bangladesh (UTC+6)
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            &copy; {currentYear} devcsl.tech &bull; Built by{' '}
            <span className="font-semibold text-text-primary">Omar Faruk</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:text-accent text-text-secondary transition-colors text-xs font-medium"
            aria-label="Back to top"
          >
            <span>{language === 'bn' ? 'উপরে যান' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
