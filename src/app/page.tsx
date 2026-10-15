import { Nav } from "@/components/layout/Nav";
import { About } from "@/components/sections/About";
import { Background } from "@/components/sections/Background";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowIWork } from "@/components/sections/HowIWork";
import { Stack } from "@/components/sections/Stack";
import { Work } from "@/components/sections/Work";
import { site } from "@/content/site";
import { hasCv } from "@/lib/cv";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  address: { "@type": "PostalAddress", addressLocality: "Bratislava", addressCountry: "SK" },
  sameAs: [site.links.linkedin, site.links.telegram],
  knowsAbout: ["React", "TypeScript", "NestJS", "Node.js", "MySQL", "Redis"],
};

export default function Home() {
  return (
    <>
      <Nav hasCv={hasCv} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <HowIWork />
        <Stack />
        <Work />
        <Background />
        <Contact />
      </main>
      <script
        type="application/ld+json"
        // Static, trusted content from our own module.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
