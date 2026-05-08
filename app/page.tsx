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
        "jobTitle": "Full Stack Web Developer & Software Engineer",
        "url": "https://devcsl.tech",
        "image": "https://devcsl.tech/logo.png",
        "description": "Omar Faruk (cslomarfaruk) is an expert web developer and software engineer specializing in Next.js, React, DevOps, fully managed VPS servers, and modern web applications across any technology stack. Founder of DEV CSL.",
        "sameAs": [
          "https://github.com/cslomarfaruk",
          "https://www.linkedin.com/in/csl-omarfaruk/",
          "https://www.facebook.com/cslomarfaruk1/",
          "https://twitter.com/cslomarfaruk"
        ],
        "knowsAbout": ["Development Platform", "Web Development Platform", "Enterprise Development Platform", "Software Engineering", "DevOps", "Next.js", "React", "Node.js", "Server Management", "Fully Managed VPS", "Domain Hosting", "Modern Web Technology", "Cloud Infrastructure"]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://devcsl.tech/#organization",
        "name": "DEV CSL",
        "alternateName": ["DEV CSL Tech", "devcsl tech", "devcsl", "Omar Faruk Dev"],
        "founder": { "@id": "https://devcsl.tech/#person" },
        "url": "https://devcsl.tech",
        "logo": {
          "@type": "ImageObject",
          "url": "https://devcsl.tech/logo.png",
          "width": 512,
          "height": 512,
          "caption": "DEV CSL Logo"
        },
        "image": "https://devcsl.tech/logo.png",
        "email": "omar@devcsl.tech",
        "telephone": "+8801839467728",
        "description": "Premium web engineering and development platform by Omar Faruk. We build production-ready, scalable software, enterprise solutions, and high-performance websites. We provide end-to-end services including fully managed VPS servers, domain hosting, and development in any modern technology stack.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "BD"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://github.com/cslomarfaruk",
          "https://www.linkedin.com/in/csl-omarfaruk/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://devcsl.tech/#website",
        "url": "https://devcsl.tech",
        "name": "DEV CSL | Omar Faruk",
        "description": "End-to-End Web Development Platform | VPS, Hosting & Modern Tech",
        "publisher": { "@id": "https://devcsl.tech/#organization" },
        "inLanguage": ["en-US", "bn-BD"],
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://devcsl.tech/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://devcsl.tech/#webpage",
        "url": "https://devcsl.tech",
        "name": "DEV CSL | Omar Faruk - Expert Web Developer & VPS Host",
        "description": "Premium web engineering studio by Omar Faruk. Professional full-stack development, fully managed VPS hosting, domains, and modern tech stacks.",
        "isPartOf": { "@id": "https://devcsl.tech/#website" },
        "about": { "@id": "https://devcsl.tech/#person" },
        "breadcrumb": { "@id": "https://devcsl.tech/#breadcrumb" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://devcsl.tech/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://devcsl.tech"
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://devcsl.tech/#sitelinks",
        "name": "DEV CSL Services & Navigation",
        "itemListElement": [
          {
            "@type": "SiteNavigationElement",
            "position": 1,
            "name": "Our Services",
            "url": "https://devcsl.tech/#services"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 2,
            "name": "Projects",
            "url": "https://devcsl.tech/#projects"
          },
          {
            "@type": "SiteNavigationElement",
            "position": 3,
            "name": "Contact Us",
            "url": "https://devcsl.tech/#contact"
          }
        ]
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
