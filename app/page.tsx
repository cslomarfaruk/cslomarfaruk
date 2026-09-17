import Hero from "@/src/components/sections/Hero";
import SkillsToolkit from "@/src/components/sections/SkillsToolkit";
import Services from "@/src/components/sections/Services";
import WhyHireFreelance from "@/src/components/sections/WhyHireFreelance";
import Projects from "@/src/components/sections/Projects";
import Testimonials from "@/src/components/sections/Testimonials";
import StudentHub from "@/src/components/sections/Mentorship";
import FAQ from "@/src/components/sections/FAQ";
import Education from "@/src/components/sections/Education";
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
      <SkillsToolkit />
      <Services />
      <WhyHireFreelance />
      <Projects />
      <Testimonials />
      <StudentHub />
      <FAQ />
      <Education />
      <Contact />
    </main>
  );
}
