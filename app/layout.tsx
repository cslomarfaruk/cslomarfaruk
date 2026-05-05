import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/sections/Footer";
import { ThemeProvider } from "@/src/components/ThemeProvider";

export const metadata: Metadata = {
  title: "DEV CSL | Expert Web Studio in Bangladesh",
  description: "I build production-ready, secure, and scalable web systems for real business use. Web development in Bangladesh, SaaS, and Admin panels.",
  keywords: "web developer bangladesh, custom website development, saas developer, admin panel development, business website design, seo friendly website, education website development, ওয়েবসাইট তৈরি, বাংলাদেশে ওয়েব ডেভেলপার",
  alternates: {
    canonical: "https://devcsl.tech",
    languages: {
      'en-US': 'https://devcsl.tech/?lang=en',
      'bn-BD': 'https://devcsl.tech/?lang=bn'
    }
  },
  openGraph: {
    title: "DEV CSL | Web Studio",
    description: "Production-ready, secure, and scalable web systems.",
    url: "https://devcsl.tech",
    siteName: "DEV CSL",
    locale: "en_US",
    type: "website",
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
