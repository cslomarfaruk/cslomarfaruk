import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import FloatingWhatsApp from "@/src/components/layout/FloatingWhatsApp";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import PageTransition from "@/src/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Freelance Full-Stack Developer for Hire (Remote US, UK, EU) | Omar Faruk (DEV CSL)",
  description: "Freelance full-stack web developer for hire. I build custom web applications, SaaS platforms, and APIs using React, Next.js, Node.js, and PostgreSQL for clients in the US, UK, Europe, and worldwide.",
  keywords: "cslomarfaruk, omar faruk, developer omar, developer omer faruk, developer omar faruk, best developer in bangladesh, developer for hire in bd, full stack developer bangladesh, web developer in bangladesh, hire developer bd, freelance full-stack developer for hire, freelance full stack developer, hire full stack developer, Next.js developer for hire, React developer, Node.js backend engineer, remote web developer US UK, SaaS MVP development, custom web app development, Linux DevOps engineer, Docker Traefik setup, VPS server management, academic projects help, final year thesis project developer, IEEE project implementation, devcsl, dev csl tech, Sylhet Engineering College, freelance software engineer, contract developer, ওয়েব ডেভেলপার, সফটওয়্যার ডেভেলপমেন্ট, ফুল স্ট্যাক ডেভেলপার বাংলাদেশ",
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Freelance Full-Stack Developer for Hire | Omar Faruk (DEV CSL)",
    description: "Freelance full-stack web developer for hire. I build custom web applications, SaaS platforms, and APIs using React, Next.js, Node.js, and PostgreSQL for clients in the US, UK, Europe, and worldwide.",
    url: "https://devcsl.tech",
    siteName: "DEV CSL — Omar Faruk",
    locale: "en_US",
    alternateLocale: ["bn_BD"],
    type: "website",
    images: [
      {
        url: 'https://devcsl.tech/logo.png',
        width: 1200,
        height: 630,
        alt: 'Freelance Full-Stack Developer for Hire — Omar Faruk',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Freelance Full-Stack Developer for Hire | Omar Faruk (DEV CSL)",
    description: "Freelance full-stack web developer for hire. I build custom web applications, SaaS platforms, and APIs using React, Next.js, Node.js, and PostgreSQL.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KPNVVDRG02"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KPNVVDRG02');
            `,
          }}
        />

        {/* Mobile & PWA */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Preload critical logo */}
        <link rel="preload" as="image" href="/icon.png" />
      </head>
      <body className="antialiased min-h-screen bg-brand text-text-primary">
        <ThemeProvider defaultTheme="light" storageKey="devcsl-theme">
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
