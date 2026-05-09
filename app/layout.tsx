import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import FloatingWhatsApp from "@/src/components/layout/FloatingWhatsApp";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import PageTransition from "@/src/components/layout/PageTransition";

// Font optimization — Inter only (Poppins was never used)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Omar Faruk — SaaS Developer, Technical Mentor & Product Builder | DEV.CSL",
  description: "Full-stack engineer with 3+ years building production SaaS for businesses, mentoring aspiring developers, and shipping digital products. Expert in Next.js, React, Node.js, DevOps, and managed VPS hosting. Based in Bangladesh, serving clients worldwide.",
  keywords: "SaaS developer, technical mentor, full stack developer, web development, software engineer, Next.js expert, React developer, Node.js, DevOps, managed VPS hosting, domain hosting, freelance developer, code mentorship, career coaching for developers, university project help, Omar Faruk, cslomarfaruk, devcsl, dev csl tech, web engineering studio, custom software development, production-ready web apps, ওয়েব ডেভেলপমেন্ট, সফটওয়্যার ডেভেলপমেন্ট, মেন্টরশিপ, ওমার ফারুক",
  authors: [{ name: "Omar Faruk", url: "https://devcsl.tech" }],
  creator: "Omar Faruk",
  publisher: "DEV.CSL",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: "https://devcsl.tech",
    languages: {
      'en-US': 'https://devcsl.tech/?lang=en',
      'bn-BD': 'https://devcsl.tech/?lang=bn'
    }
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Omar Faruk — SaaS Developer, Technical Mentor & Product Builder",
    description: "Full-stack engineer building production SaaS, mentoring developers, and shipping digital products. 3+ years of battle-tested experience.",
    url: "https://devcsl.tech",
    siteName: "DEV CSL",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: 'https://devcsl.tech/logo.png',
        width: 1200,
        height: 630,
        alt: 'DEV CSL — Omar Faruk',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Omar Faruk — SaaS Developer, Mentor & Builder | DEV.CSL",
    description: "Full-stack engineer with 3+ years building production SaaS, mentoring developers, and shipping digital products.",
    images: ['https://devcsl.tech/logo.png'],
    creator: '@cslomarfaruk',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'DEV CSL',
  },
  manifest: '/manifest.json',
  category: 'technology',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Performance: DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

        {/* Theme & Mobile */}
        <meta name="theme-color" content="#0A0A0B" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DEV CSL" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/logo.png" />

        {/* Font declaration */}
        <style>{`
          html {
            font-family: var(--font-inter), system-ui, -apple-system, sans-serif;
          }
          :root {
            color-scheme: light dark;
          }
        `}</style>
      </head>
      <body className="antialiased min-h-screen">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <LanguageProvider>
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
            <FloatingWhatsApp />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
