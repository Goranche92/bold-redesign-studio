import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Marquee } from "@/components/site/Marquee";
import { OurWorks } from "@/components/site/OurWorks";
import { Services } from "@/components/site/Services";
import { HighlightedProjects } from "@/components/site/HighlightedProjects";
import { Stats } from "@/components/site/Stats";
import { Testimonial } from "@/components/site/Testimonial";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Goran Šantić — Freelance developer & designer" },
      {
        name: "description",
        content:
          "Freelance developer and designer focused on UI/UX, frontend, and thoughtful digital products — from concepts to shipped interfaces.",
      },
      { property: "og:title", content: "Goran Šantić — Freelance developer & designer" },
      {
        property: "og:description",
        content:
          "Freelance developer and designer — UI/UX, frontend, and digital products built with clarity and craft.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <OurWorks />
      <Services />
      <HighlightedProjects />
      <Stats />
      <Testimonial />
      <Footer />
    </main>
  );
}
