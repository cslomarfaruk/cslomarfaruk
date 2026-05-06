import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import FloatingWhatsApp from "@/src/components/layout/FloatingWhatsApp";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import PageTransition from "@/src/components/layout/PageTransition";

export const metadata: Metadata = {
// ... existing metadata ...
  title: "DEV CSL | Omar Faruk - Expert Web Developer & Software Engineer",
  description: "DEV CSL by Omar Faruk (cslomarfaruk) is a premium web engineering studio building production-ready, secure, and scalable web systems. Expert in Next.js, React, and DevOps.",
  keywords: "omar faruk dev, dev, csl, omar, faruk, omar faruk, dev omar, dev omar faruk, devcsl, devcsl.tech, dev csl tech, cslomarfaruk, csl omar faruk, omar faruk developer, web developer omar faruk, full stack developer bangladesh, next.js expert, software engineer, devops engineer, web engineering studio, custom software development, premium web systems, production-ready web apps",
  authors: [{ name: "Omar Faruk", url: "https://devcsl.tech" }],
  creator: "Omar Faruk",
  publisher: "DEV.CSL",
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
    title: "DEV CSL | Omar Faruk - Expert Web Developer & Software Engineer",
    description: "Production-ready, secure, and scalable web systems engineered by Omar Faruk (cslomarfaruk). Premium Web Engineering Studio.",
    url: "https://devcsl.tech",
    siteName: "DEV CSL",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: 'https://devcsl.tech/logo.png',
        width: 1200,
        height: 630,
        alt: 'DEV CSL Studio Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "DEV CSL | Omar Faruk - Expert Web Developer",
    description: "Premium Web Engineering Studio. Building production-ready software and scalable systems.",
    images: ['https://devcsl.tech/logo.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
