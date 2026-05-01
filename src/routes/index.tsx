import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { HighlightedProjects } from "@/components/site/HighlightedProjects";
import { Stats } from "@/components/site/Stats";
import { Testimonial } from "@/components/site/Testimonial";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLDONSE — Creative Design Studio" },
      { name: "description", content: "Bold, end-to-end design studio crafting brand, UI/UX, and development experiences that elevate brands." },
      { property: "og:title", content: "BLDONSE — Creative Design Studio" },
      { property: "og:description", content: "Bold, end-to-end design studio crafting brand, UI/UX, and development experiences." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <HighlightedProjects />
      <Stats />
      <Testimonial />
      <Footer />
    </main>
  );
}
