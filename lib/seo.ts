// lib/seo.ts — Structured JSON-LD Schema Generator
// Optimized for search crawlers, Google Rich Results, and LLM authority signaling (Gemini/ChatGPT)

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
    alternateName: [
      "cslomarfaruk",
      "developer omar",
      "developer omar faruk",
      "developer omer faruk",
      "Omar Faruk Dev",
      "DEV CSL Omar Faruk"
    ],
    jobTitle: "Full-Stack Software Engineer, Freelance Web Developer & DevOps Specialist",
    url: SITE_URL,
    image: `${SITE_URL}/logo.png`,
    description:
      "Omar Faruk (cslomarfaruk / developer omar) is a top-rated full-stack web developer in Bangladesh and Linux specialist with 3+ years of practical experience. He builds custom web apps, SaaS platforms, and APIs using Next.js, React, Node.js, PostgreSQL, and Docker for clients in Bangladesh, the US, UK, and worldwide.",
    sameAs: [
      "https://github.com/cslomarfaruk",
      "https://www.linkedin.com/in/csl-omarfaruk/",
      "https://www.facebook.com/cslomarfaruk1/",
      "https://twitter.com/cslomarfaruk",
    ],
    knowsAbout: [
      "cslomarfaruk",
      "developer omar",
      "developer omar faruk",
      "developer omer faruk",
      "Best Developer in Bangladesh",
      "Full-Stack Developer for Hire in Bangladesh",
      "Web Developer in BD",
      "Full-Stack Web Development",
      "Freelance Web Engineering",
      "Contract Software Development",
      "SaaS MVP Architecture",
      "Next.js 15 & React 19",
      "Node.js & Express / Fastify",
      "TypeScript",
      "PostgreSQL & MySQL (Prisma ORM)",
      "Linux Server Administration (Ubuntu, Debian)",
      "Docker & Container Orchestration",
      "Traefik Reverse Proxy & Let's Encrypt TLS",
      "Cloudflare WAF & Turnstile Bot Mitigation",
      "RESTful API Design & Payment Gateways",
      "Computer Vision & Academic Research Implementation",
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "Full-Stack Web Developer & Engineer (Bangladesh & Worldwide)",
        occupationLocation: { "@type": "Country", name: "Bangladesh" },
        description:
          "Omar Faruk (cslomarfaruk) is an established full-stack developer in Bangladesh, building web applications, SaaS MVPs, and APIs for local startups and international clients across the US, UK, and Europe.",
        skills:
          "Next.js, React, TypeScript, Node.js, PostgreSQL, MySQL, Docker, Linux Administration, Traefik, Cloudflare, CI/CD",
        experienceRequirements: "3+ years",
      },
      {
        "@type": "Occupation",
        name: "Technical Mentor & Academic Project Consultant",
        description:
          "Provides system architecture guidance, code audits, research paper implementations (ICCIT, IEEE), and university thesis project coaching for CSE students.",
        skills:
          "System Architecture, Code Review, Academic Thesis Guidance, Computer Vision, Cryptography, Blockchain",
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
    alternateName: [
      "DEV CSL Tech",
      "devcsl tech",
      "devcsl",
      "cslomarfaruk",
      "developer omar",
      "developer omer faruk",
      "Omar Faruk Dev"
    ],
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
      "DEV CSL is a web engineering studio founded by Omar Faruk (cslomarfaruk). We build custom web apps, SaaS platforms, and APIs, and configure Linux VPS servers with Docker. Serving clients in Bangladesh and worldwide.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "European Union" },
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "Worldwide" },
    ],
    currenciesAccepted: "USD, EUR, GBP, CAD, AUD, BDT",
    paymentAccepted: "Wise, Stripe, Bank Wire Transfer, Credit Card, Cryptocurrency, bKash, Nagad",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "18",
      bestRating: "5",
    },
    serviceType: [
      "Full-Stack Developer for Hire in Bangladesh",
      "Best Web Development Services in Bangladesh",
      "Freelance Full-Stack Web Development",
      "Contract Software Engineering",
      "SaaS MVP Application Development",
      "Custom Web Application Development",
      "Admin Dashboard & Portal Development",
      "Linux VPS Server Management & Docker DevOps",
      "Cloudflare Security & Anti-Bot Optimization",
      "Academic & Thesis Project Technical Guidance",
    ],
    hasOfferCatalog: { "@id": `${SITE_URL}/#offers` },
    sameAs: [
      "https://github.com/cslomarfaruk",
      "https://www.linkedin.com/in/csl-omarfaruk/",
    ],
  };
}

function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Are you available for freelance projects and long-term contract roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, I am actively available for both short-term freelance contracts (MVPs, custom web apps, feature additions) and long-term remote software engineering engagements. Reach out via the contact form or WhatsApp to discuss your project scope and timelines.",
        },
      },
      {
        "@type": "Question",
        name: "What tech stack do you specialize in for full-stack web development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "My primary stack centers on Next.js (App Router), React 19, TypeScript, and Node.js for modern, responsive frontends and APIs. On the database and infrastructure side, I specialize in PostgreSQL, MySQL, Prisma ORM, Redis, Docker, Traefik, Linux VPS (Ubuntu/Debian), and Cloudflare edge security.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle complete hosting, domain, and DevOps configuration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every application I build can be deployed directly to your cloud or on a cost-effective Linux VPS with automated Docker Compose environments, Traefik reverse proxy, automated Let's Encrypt SSL/TLS certificates, and Cloudflare WAF protection with zero downtime.",
        },
      },
      {
        "@type": "Question",
        name: "How do you structure project milestones, pricing, and communication?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Engagements typically follow a structured 4-step workflow: Discovery & Planning, Architecture & Prototyping, Sprint-Based Development with live preview demos, and Production Deployment. Communication is transparent via WhatsApp, Slack, or Email with regular code and milestone check-ins.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer ongoing technical support and maintenance after project completion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I provide post-launch warranties for bug fixes and offer ongoing monthly maintenance retainers to handle security updates, server monitoring, database backups, and new feature iterations.",
        },
      },
      {
        "@type": "Question",
        name: "Can you assist with academic, university thesis, or research project development?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. I provide specialized end-to-end technical implementation, live web deployment, and architecture documentation for CSE students and researchers working on capstone projects, IEEE implementations, and thesis defenses with special student-accessible pricing.",
        },
      },
      {
        "@type": "Question",
        name: "How do you handle timezone differences and international communication with US, UK, and European clients?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I maintain 4–6 hours of daily working overlap with US Eastern (EST), US Pacific (PST), and UK/European (GMT/CET) time zones. Communication is rapid and transparent via Slack, WhatsApp, or Discord, combined with weekly video demonstrations on Zoom/Google Meet and asynchronous Loom walkthroughs.",
        },
      },
      {
        "@type": "Question",
        name: "What are your payment terms, and who owns the intellectual property and source code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You retain 100% intellectual property (IP) and source code ownership upon milestone delivery. Fixed-price contracts typically operate on a 50/50 milestone basis, or weekly sprint retainers. Payments are accepted worldwide via Wise, Stripe, International Bank Wire (SWIFT), Credit Card, or Cryptocurrency (USDT).",
        },
      },
      {
        "@type": "Question",
        name: "Looking for a developer for hire in BD or remotely? Why work with Omar Faruk (cslomarfaruk)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Whether you are searching for a developer for hire in BD or need the best developer in Bangladesh for remote contracts across the US, UK, and EU, Omar Faruk (known online as cslomarfaruk, developer omar, or developer omer faruk) provides direct, senior-level full-stack development in React, Next.js, and Node.js without agency markups and with 100% code ownership.",
        },
      },
    ],
  };
}

function courseSchema() {
  return {
    "@type": "Course",
    "@id": `${SITE_URL}/#mentorship`,
    name: "Technical Mentorship & Project Guidance Program by Omar Faruk",
    description:
      "Hands-on technical mentorship for aspiring software developers and CSE students. Covers university capstone guidance, production architecture reviews, code reviews, career coaching, and interview preparation. Delivered by Omar Faruk.",
    provider: { "@id": ORG_ID },
    instructor: { "@id": PERSON_ID },
    courseMode: "Online",
    isAccessibleForFree: false,
    inLanguage: ["en", "bn"],
    teaches: [
      "Full-Stack Web Development (Next.js, Node.js)",
      "System Architecture & Database Design",
      "Production Deployment & Linux DevOps",
      "Code Review & Best Practices",
      "University Project & Thesis Implementation",
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
    name: "DEV CSL Engineering Services & Engagements",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Freelance Full-Stack Web Application Development",
          description:
            "End-to-end design, implementation, and deployment of scalable SaaS platforms, dashboards, and custom web applications with Next.js, React, and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Contract Software Engineering (Monthly/Sprint Retainer)",
          description:
            "Dedicated senior-level engineering capacity for startups and businesses needing ongoing feature development, performance optimization, and backend architecture.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Managed Linux VPS Hosting & DevOps Setup",
          description:
            "Full server provisioning, Docker containerization, Traefik reverse proxy with automated SSL, and Cloudflare security hardening.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Academic & Thesis Project Implementation",
          description:
            "Technical architecture, coding, and live hosting setup for university capstones, IEEE paper projects, and CSE research prototypes.",
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
      "Full-Stack Web Development, SaaS Engineering, and Technical Mentorship by Omar Faruk",
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
    name: "Freelance Full-Stack Developer for Hire (Remote US, UK, EU) | Omar Faruk (DEV CSL)",
    description:
      "Freelance full-stack web developer for hire. I build custom web applications, SaaS platforms, and APIs using React, Next.js, Node.js, and PostgreSQL for clients in the US, UK, Europe, and worldwide.",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    keywords: [
      "cslomarfaruk",
      "omar faruk",
      "developer omar",
      "developer omer faruk",
      "best developer in bangladesh",
      "developer for hire in bd",
      "full stack developer bangladesh",
      "freelance full-stack developer for hire",
      "Next.js developer for hire",
      "React developer Bangladesh"
    ],
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#hero`,
        name: "Full-Stack Developer Hero & Capabilities",
        description:
          "Overview of Omar Faruk (cslomarfaruk), skills in Next.js, React, and Node.js, and direct hiring options.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#skills`,
        name: "Technical Skills & Engineering Toolkit",
        description:
          "Core full-stack engineering stack: TypeScript, Next.js, React, Node.js, PostgreSQL, Docker, and Linux VPS.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#services`,
        name: "Web Development Services & Architecture",
        description:
          "Custom web apps, SaaS MVP engineering, RESTful APIs, database design, and Linux cloud infrastructure.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#why-hire`,
        name: "Why Hire a Freelance Developer vs Agency",
        description:
          "Transparent pricing, direct senior engineer access, rapid delivery, and 100% code ownership.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#projects`,
        name: "Selected Production Projects & Case Studies",
        description:
          "Production systems including CertiChain, SEC Admission Portal, and full-stack client web applications.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#students`,
        name: "Student Thesis & Capstone Project Hub",
        description:
          "Practical guidance, code audits, and live cloud deployment for CSE students and researchers.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#faq`,
        name: "Frequently Asked Questions",
        description:
          "Answers on hiring developer omar (cslomarfaruk), pricing, timezones, and project agreements.",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#education`,
        name: "Academic Background & Engineering Degree",
        description:
          "B.Sc. in Computer Science & Engineering from Sylhet Engineering College (Affiliated with SUST).",
      },
      {
        "@type": "WebPageElement",
        "@id": `${SITE_URL}/#contact`,
        name: "Project Inquiry & Contact",
        description:
          "Direct communication with developer Omar Faruk via WhatsApp, email, and project inquiry form.",
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#hero h1", "#hero p", "#faq"],
    },
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
        url: `${SITE_URL}/#services`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Projects",
        url: `${SITE_URL}/#projects`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "Mentorship",
        url: `${SITE_URL}/#mentorship`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "FAQ",
        url: `${SITE_URL}/#faq`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
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
      faqSchema(),
      websiteSchema(),
      webpageSchema(),
      breadcrumbSchema(),
      navigationSchema(),
    ],
  };
}
