'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '@/content/en.json';
import bn from '@/content/bn.json';

type Language = 'en' | 'bn';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 1. Check URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as Language;

    if (urlLang === 'bn' || urlLang === 'en') {
      setLanguageState(urlLang);
      localStorage.setItem('app_lang', urlLang);
      document.documentElement.lang = urlLang;
      return;
    }

    // 2. Check saved preference
    const savedLang = localStorage.getItem('app_lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'bn')) {
      setLanguageState(savedLang);
      return;
    }

    // 3. Check referrer for regional search engines
    const referrer = document.referrer.toLowerCase();
    if (referrer.includes('.bd') || referrer.includes('google.com.bd')) {
      setLanguageState('bn');
      return;
    }

    // 4. Default to English (direct link)
    setLanguageState('en');
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
    
    // Update URL silently
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };

  const t = language === 'bn' ? bn : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
