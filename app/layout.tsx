import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import FloatingWhatsApp from "@/src/components/layout/FloatingWhatsApp";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import PageTransition from "@/src/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Omar Faruk — Full-Stack Developer for Hire | Freelance & Contract Web Engineering",
  description: "Senior full-stack software engineer and Linux/DevOps specialist with 3+ years experience. Building production SaaS applications, custom web platforms, and high-availability cloud infrastructure with Next.js 15, React 19, Node.js, and Docker. Available for freelance and long-term engagements.",
  keywords: "hire full stack developer, freelance full stack web developer, Next.js developer for hire, React developer, Node.js backend engineer, SaaS MVP development, custom web app development, Linux DevOps engineer, Docker Traefik setup, VPS server management, academic projects help, final year thesis project developer, IEEE project implementation, Omar Faruk, cslomarfaruk, devcsl, dev csl tech, Sylhet Engineering College, freelance software engineer, contract developer, ওয়েব ডেভেলপার, সফটওয়্যার ডেভেলপমেন্ট, ফুল স্ট্যাক ডেভেলপার",
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
    title: "DEV CSL — Web Development Platform",
    description: "Full-stack engineer, Web Developer and Web Design expert, building production SaaS, high-quality academic & thesis projects, and digital platforms.",
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
    title: "DEV CSL — Web Development Platform",
    description: "Full-stack engineer, Web Developer and Web Design expert, building production SaaS, high-quality academic projects, and shipping digital products.",
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
        <meta name="theme-color" content="#09090b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Preload critical logo */}
        <link rel="preload" as="image" href="/icon.png" />
      </head>
      <body className="antialiased min-h-screen bg-brand text-text-primary">
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
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
