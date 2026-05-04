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
          <title>Omar Faruk | Expert Web Developer & Software Engineer | DEV CSL</title>
          <meta name="description" content="Looking for a web developer to hire? Omar Faruk (cslomarfaruk) is a developer with high skills. Hire engineer Omar Faruk for premium, scalable software at DEV CSL." />
          <meta name="keywords" content="Omar Faruk, cslomarfaruk, developer omar faruk, developer omar, developer faruk, engineer omar, engineer omar faruk, web developer to hire, developer with high skills, React expert, software engineer Sylhet, DEV CSL" />
          <meta name="author" content="Omar Faruk" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta property="og:title" content="Omar Faruk | Expert Web Developer | DEV CSL" />
          <meta property="og:description" content="Hire developer Omar Faruk. Top-tier software engineer with high skills delivering robust web applications." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://devcsl.tech" />
          <meta property="og:site_name" content="Omar Faruk - Web Developer" />
          <meta name="twitter:card" content="summary_large_image" />
          <link rel="canonical" href="https://devcsl.tech" />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://devcsl.tech/#person",
                  "name": "Omar Faruk",
                  "alternateName": ["cslomarfaruk", "Developer Omar Faruk", "Engineer Omar", "Developer Omar", "Developer Faruk", "Engineer Omar Faruk"],
                  "jobTitle": "Expert Web Developer & Software Engineer",
                  "url": "https://devcsl.tech",
                  "sameAs": [
                    "https://www.linkedin.com/in/csl-omarfaruk/",
                    "https://github.com/cslomarfaruk/",
                    "https://www.facebook.com/cslomarfaruk1/"
                  ],
                  "description": "Omar Faruk is a highly skilled web developer to hire for complex software engineering and web application development."
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://devcsl.tech/#organization",
                  "name": "DEV CSL",
                  "founder": { "@id": "https://devcsl.tech/#person" },
                  "image": "https://devcsl.tech/dp-new.jpg",
                  "url": "https://devcsl.tech",
                  "telephone": "+8801839467728",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sylhet",
                    "addressCountry": "BD"
                  },
                  "description": "Strategic digital product studio by expert web developer Omar Faruk, specializing in SaaS and business automation.",
                  "priceRange": "$$$"
                }
              ]
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

