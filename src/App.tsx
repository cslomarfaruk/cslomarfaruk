/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HelmetProvider, Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Trust from './components/sections/Trust';
import Services from './components/sections/Services';
import BusinessAutomation from './components/sections/BusinessAutomation';
import Projects from './components/sections/Projects';
import StudentHub from './components/sections/StudentHub';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import FloatingNav from './components/layout/FloatingNav';
import MobileQuickNav from './components/layout/MobileQuickNav';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <Helmet>
          <title>DEV CSL | Strategic Digital Product Studio by Omar Faruk</title>
          <meta name="description" content="Top-tier web engineering, SaaS development, and business automation studio in Sylhet, BD. I build highly secure, ROI-focused scalable web applications." />
          <meta name="keywords" content="Omar Faruk, DEV CSL, web developer for hire, SaaS developer Sylhet, business automation developer, secure web apps, React developer BD, Node.js engineer, full-stack engineer" />
          <meta name="author" content="Omar Faruk" />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content="DEV CSL | Strategic Digital Product Studio" />
          <meta property="og:description" content="Secure, scalable web engineering and mission-critical business automation. Delivered with reliability and ROI in mind." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devcsl.tech" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://devcsl.tech" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DEV CSL",
              "image": "https://devcsl.tech/dp-new.jpg",
              "@id": "https://devcsl.tech",
              "url": "https://devcsl.tech",
              "telephone": "+8801839467728",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sylhet",
                "addressCountry": "BD"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 24.8949,
                "longitude": 91.8687
              },
              "sameAs": [
                "https://www.linkedin.com/in/csl-omarfaruk/",
                "https://github.com/cslomarfaruk/",
                "https://www.facebook.com/cslomarfaruk1/"
              ],
              "founder": {
                "@type": "Person",
                "name": "Omar Faruk",
                "jobTitle": "Full Stack Engineer"
              },
              "description": "Strategic digital product studio specializing in SaaS, business automation, and secure web engineering.",
              "priceRange": "$$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 24.8949,
                  "longitude": 91.8687
                },
                "geoRadius": "50000"
              }
            })}
          </script>
        </Helmet>

        <Navbar />
        <FloatingNav />
        
        <main>
          <Hero />
          <Services />
          <Trust />
          <BusinessAutomation />
          <Projects />
          <StudentHub />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <MobileQuickNav />
      </div>
    </HelmetProvider>
  );
}

