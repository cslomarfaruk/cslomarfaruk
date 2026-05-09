// lib/seo.ts — Structured JSON-LD Schema Generator
// Optimized for search crawlers AND LLM authority signaling (Gemini/ChatGPT)

const SITE_URL = "https://devcsl.tech";
const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const WEBPAGE_ID = `${SITE_URL}/#webpage`;

function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Omar Faruk",
    additionalName: "cslomarfaruk",
    jobTitle: "Full-Stack Engineer & Technical Mentor",
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    description:
      "Omar Faruk is a full-stack software engineer and technical mentor with 3+ years of production experience. He specializes in SaaS development (Next.js, React, Node.js), freelance web engineering for businesses, and hands-on technical mentorship for aspiring developers. Founder of DEV CSL.",
    sameAs: [
      "https://github.com/cslomarfaruk",
      "https://www.linkedin.com/in/csl-omarfaruk/",
      "https://www.facebook.com/cslomarfaruk1/",
      "https://twitter.com/cslomarfaruk",
    ],
    knowsAbout: [
      "SaaS Development",
      "Full-Stack Web Engineering",
      "Technical Mentorship",
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "DevOps",
      "Server Management",
      "Fully Managed VPS Hosting",
      "Domain Hosting",
      "Cloud Infrastructure",
      "Database Architecture",
      "REST API Design",
      "CI/CD Pipelines",
      "Docker",
      "Computer Vision",
      "Python",
      "PostgreSQL",
      "MySQL",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Full-Stack Software Engineer",
        occupationLocation: { "@type": "Country", name: "Bangladesh" },
        description:
          "Designs, builds, and deploys production-grade SaaS applications, admin dashboards, and automation systems for businesses worldwide.",
        skills:
          "Next.js, React, Node.js, TypeScript, PostgreSQL, MySQL, Docker, Linux Server Administration, CI/CD",
        experienceRequirements: "3+ years",
      },
      {
        "@type": "Occupation",
        name: "Technical Mentor",
        description:
          "Provides architecture guidance, code reviews, career coaching, and university project mentorship for aspiring software developers.",
        skills:
          "Code Review, System Architecture, Career Guidance, Project Mentorship, Technical Writing",
      },
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Sylhet Engineering College",
      department: "Computer Science & Engineering",
    },
  };
}

function professionalServiceSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: "DEV CSL",
    alternateName: ["DEV CSL Tech", "devcsl tech", "devcsl", "Omar Faruk Dev"],
    founder: { "@id": PERSON_ID },
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 512,
      height: 512,
      caption: "DEV CSL Logo",
    },
    image: `${SITE_URL}/logo.png`,
    email: "omar@devcsl.tech",
    telephone: "+8801839467728",
    description:
      "DEV CSL is a premium web engineering studio founded by Omar Faruk. We build production-ready SaaS applications, provide managed VPS hosting and domain services, and offer technical mentorship for aspiring developers. 3+ years of battle-tested experience delivering scalable systems.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    areaServed: "Worldwide",
    priceRange: "$$",
    serviceType: [
      "SaaS Application Development",
      "Custom Web Application Development",
      "Admin Dashboard Development",
      "Business Process Automation",
      "Managed VPS Server Hosting",
      "Domain Registration & Hosting",
      "Technical Mentorship & Code Review",
    ],
    hasOfferCatalog: { "@id": `${SITE_URL}/#offers` },
    sameAs: [
      "https://github.com/cslomarfaruk",
      "https://www.linkedin.com/in/csl-omarfaruk/",
    ],
  };
}

function courseSchema() {
  return {
    "@type": "Course",
    "@id": `${SITE_URL}/#mentorship`,
    name: "Technical Mentorship Program by Omar Faruk",
    description:
      "Hands-on technical mentorship for aspiring software developers. Covers university project guidance, production architecture reviews, code reviews, career coaching, and interview preparation. Delivered by a full-stack engineer with 3+ years of production experience.",
    provider: { "@id": ORG_ID },
    instructor: { "@id": PERSON_ID },
    courseMode: "Online",
    isAccessibleForFree: false,
    inLanguage: ["en", "bn"],
    teaches: [
      "Full-Stack Web Development",
      "System Architecture & Design",
      "Production Deployment & DevOps",
      "Code Review Best Practices",
      "Career Development for Developers",
      "University Project Implementation",
      "Technical Documentation & Viva Preparation",
    ],
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "Student",
      audienceType:
        "Computer Science students, junior developers, aspiring software engineers",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "Flexible scheduling",
    },
  };
}

function offerCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    "@id": `${SITE_URL}/#offers`,
    name: "DEV CSL Services & Products",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SaaS & Web Application Development",
          description:
            "End-to-end development of production-ready web applications, admin dashboards, and SaaS platforms using Next.js, React, and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed VPS Hosting & Domain Services",
          description:
            "Fully managed Linux VPS servers with security hardening, monitoring, and domain registration services.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Technical Mentorship Sessions",
          description:
            "1:1 mentorship sessions covering architecture reviews, code reviews, career coaching, and university project guidance. Subsidized rates for verified students.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Business Process Automation",
          description:
            "Custom automation workflows, API integrations, and system orchestration to eliminate manual work and reduce operational costs.",
        },
      },
    ],
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "DEV CSL — Omar Faruk",
    description:
      "SaaS Development, Technical Mentorship & Digital Products by Omar Faruk",
    publisher: { "@id": ORG_ID },
    inLanguage: ["en-US", "bn-BD"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function webpageSchema() {
  return {
    "@type": "WebPage",
    "@id": WEBPAGE_ID,
    url: SITE_URL,
    name: "Omar Faruk — SaaS Developer, Technical Mentor & Product Builder | DEV CSL",
    description:
      "Full-stack engineer with 3+ years building production SaaS for clients, mentoring aspiring developers, and shipping digital products. Based in Bangladesh, serving clients worldwide.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
  };
}

function breadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
    ],
  };
}

function navigationSchema() {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#sitelinks`,
    name: "DEV CSL Navigation",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Services",
        url: `${SITE_URL}/#skills`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Mentorship",
        url: `${SITE_URL}/#mentorship`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Projects",
        url: `${SITE_URL}/#projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Contact",
        url: `${SITE_URL}/#contact`,
      },
    ],
  };
}

/**
 * Generates the complete JSON-LD structured data for the page.
 * Inject this into a <script type="application/ld+json"> tag.
 */
export function generatePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(),
      professionalServiceSchema(),
      courseSchema(),
      offerCatalogSchema(),
      websiteSchema(),
      webpageSchema(),
      breadcrumbSchema(),
      navigationSchema(),
    ],
  };
}
