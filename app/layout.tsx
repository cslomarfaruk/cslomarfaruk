import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";

export const metadata: Metadata = {
  title: "DEV CSL | Omar Faruk",
  description: "DEV CSL is a premium web engineering studio by Omar Faruk (cslomarfaruk). I build production-ready, secure, and scalable web systems for real business use. Expert in Next.js, React, server management, and DevOps.",
  keywords: "devcsl, devcsl.tech, dev csl tech, devcsl tech, cslomarfaruk, csl omar faruk, omar faruk, developer omar, devloper faruk, dev omar, web developer, developer, server manager, devops engineer, software engineer, tech studio, bangladesh developer, react developer, next.js expert",
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
    title: "DEV CSL | Omar Faruk - Premium Web Developer",
    description: "Production-ready, secure, and scalable web systems engineered by Omar Faruk (cslomarfaruk).",
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
    title: "DEV CSL | Omar Faruk",
    description: "Premium Web Engineering Studio. Building production-ready software.",
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
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
