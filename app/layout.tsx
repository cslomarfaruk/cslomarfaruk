import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import FloatingWhatsApp from "@/src/components/layout/FloatingWhatsApp";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import PageTransition from "@/src/components/layout/PageTransition";

// Font optimization - preload critical fonts
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "DEV.CSL | Web Development platform",
  description: "DEV CSL by Omar Faruk (cslomarfaruk) is a premium web engineering studio building production-ready, secure, and scalable web systems. Expert in Next.js, React, and DevOps.",
  keywords: "omar faruk dev, dev, csl, omar, faruk, omar faruk, dev omar, dev omar faruk, devcsl, devcsl.tech, dev csl tech, cslomarfaruk, csl omar faruk, omar faruk developer, web developer omar faruk, full stack developer bangladesh, next.js expert, software engineer, devops engineer, web engineering studio, custom software development, premium web systems, production-ready web apps",
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
    title: "DEV CSL | Expert Web Development & Software Engineering platform",
    description: "Production-ready, secure, and scalable web systems engineered by Omar Faruk (cslomarfaruk). Premium Web Engineering Studio.",
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
        alt: 'DEV CSL Studio Logo',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "DEV CSL | Web Developement platform",
    description: "Premium Web Engineering Studio. Building production-ready software and scalable systems.",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Performance: DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme & Mobile */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DEV CSL" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />

        {/* Performance optimization */}
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        {/* Preload critical images */}
        <link rel="preload" as="image" href="/logo.png" />

        {/* Prevent layout shift - declare font sizes */}
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
