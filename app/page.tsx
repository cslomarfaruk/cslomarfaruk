import Hero from "@/src/components/sections/Hero";
import Services from "@/src/components/sections/Services";
import StudentHub from "@/src/components/sections/Mentorship";
import Trust from "@/src/components/sections/Trust";
import Projects from "@/src/components/sections/Projects";
import Testimonials from "@/src/components/sections/Testimonials";
import Contact from "@/src/components/sections/Contact";
import { generatePageSchema } from "@/lib/seo";

export default function Home() {
  const jsonLd = generatePageSchema();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <StudentHub />
      <Trust />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
