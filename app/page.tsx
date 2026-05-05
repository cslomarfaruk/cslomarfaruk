import Hero from "@/src/components/sections/Hero";
import Services from "@/src/components/sections/Services";
import Trust from "@/src/components/sections/Trust";
import Projects from "@/src/components/sections/Projects";
import Contact from "@/src/components/sections/Contact";


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://devcsl.tech/#person",
        "name": "Omar Faruk",
        "additionalName": "cslomarfaruk",
        "jobTitle": "Full Stack Web Developer & DevOps Engineer",
        "url": "https://devcsl.tech",
        "image": "https://devcsl.tech/logo.png",
        "description": "Expert web developer, server manager, and DevOps engineer based in Bangladesh. Founder of DEV CSL studio.",
        "sameAs": [
          "https://github.com/cslomarfaruk",
          "https://www.linkedin.com/in/csl-omarfaruk/",
          "https://www.facebook.com/cslomarfaruk1/"
        ],
        "knowsAbout": ["Web Development", "SaaS", "Server Management", "DevOps", "Next.js", "React", "Node.js"]
      },
      {
        "@type": "Organization",
        "@id": "https://devcsl.tech/#organization",
        "name": "DEV CSL",
        "alternateName": ["DEV CSL Tech", "devcsl tech", "devcsl"],
        "founder": { "@id": "https://devcsl.tech/#person" },
        "url": "https://devcsl.tech",
        "logo": "https://devcsl.tech/logo.png",
        "email": "omar@devcsl.tech",
        "telephone": "+8801839467728",
        "description": "Premium tech studio building production-ready, scalable software and business websites.",
        "sameAs": [
          "https://github.com/cslomarfaruk",
          "https://www.linkedin.com/in/csl-omarfaruk/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://devcsl.tech/#website",
        "url": "https://devcsl.tech",
        "name": "DEV CSL Studio",
        "publisher": { "@id": "https://devcsl.tech/#organization" },
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://devcsl.tech/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <Trust />
      <Projects />
      <Contact />
    </main>
  );
}
