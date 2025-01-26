import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DP from "./dp.jpg";
import StructuredData from "@/components/StructuredData";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omar Faruk | Full-Stack Web Developer | React & Next.js Expert",
  description:
    "Omar Faruk: Innovative computer science engineer specializing in full-stack web development. Expert in React, Next.js, Firebase, and modern web technologies. Creating robust, scalable web solutions.",
  keywords: [
    "Omar Faruk",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Expert",
    "Computer Science Engineer",
    "Web Technologies",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Omar Faruk - Full-Stack Web Developer",
    description:
      "Innovative web development solutions by Omar Faruk. Expertise in React, Next.js, and modern web technologies.",
    type: "website",
    url: "https://cslomarfaruk.vercel.app/",
    siteName: "Omar Faruk Portfolio",
    locale: "en_US",
    images: [
      {
        url:  "./favicon.ico" ,
        width: 1200,
        height: 630,
        alt: "Omar Faruk - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Faruk | Full-Stack Developer",
    description:
      "Innovative web development solutions. React, Next.js, and modern web tech expert.",
    images: ["https://x.com/cslomarfaruk/photo"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
