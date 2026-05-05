import Hero from "@/src/components/sections/Hero";
import Services from "@/src/components/sections/Services";
import Trust from "@/src/components/sections/Trust";
import Projects from "@/src/components/sections/Projects";
import Contact from "@/src/components/sections/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://devcsl.tech/#person",
                  "name": "Omar Faruk",
                  "jobTitle": "Expert Web Developer",
                  "url": "https://devcsl.tech",
                  "description": "Expert web developer in Bangladesh building scalable business websites and SaaS."
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://devcsl.tech/#organization",
                  "name": "DEV CSL",
                  "founder": { "@id": "https://devcsl.tech/#person" },
                  "url": "https://devcsl.tech",
                  "telephone": "+8801839467728",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Sylhet",
                    "addressCountry": "BD"
                  },
                  "description": "Strategic digital product studio specializing in SaaS and business automation."
                }
              ]
            })
          }}
        />
      </Head>
      <Hero />
      <Services />
      <Trust />
      <Projects />
      <Contact />
    </main>
  );
}
