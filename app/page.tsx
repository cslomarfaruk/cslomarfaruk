import Hero from "@/src/components/sections/Hero";
import Services from "@/src/components/sections/Services";
import StudentHub from "@/src/components/sections/Mentorship";
import Projects from "@/src/components/sections/Projects";
import Contact from "@/src/components/sections/Contact";
import { generatePageSchema } from "@/lib/seo";

export default function Home() {
  const jsonLd = generatePageSchema();

  return (
    <main className="relative flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <StudentHub />
      <Projects />
      <Contact />
    </main>
  );
}
