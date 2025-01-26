export default function StructuredData() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Omar Faruk",
      "jobTitle": "Full-Stack Web Developer",
      "alumniOf": "Sylhet Engineering College",
      "skills": [
        "React.js",
        "Next.js", 
        "Firebase",
        "Web Development",
        "Programming",
        "Problem Solving",
        "Front-end",
        "Back-end",
        "Full-stack",
      ],
      "sameAs": [
        "https://linkedin.com/in/csl-omarfaruk",
        "https://github.com/cslomarfaruk",
        "https://facebook.com/cslomarfaruk1",
        "https://instagram.com/cslomarfaruk",
        "https://x.com/cslomarfaruk",
        "https://codeforces.com/profile/cslomarfaruk"
      ]
    };
  
    return (
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ 
          __html: JSON.stringify(jsonLd) 
        }} 
      />
    );
  }