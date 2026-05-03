import { LandingAbout } from "./LandingAbout";
import { LandingFooter } from "./LandingFooter";
import { LandingHero } from "./LandingHero";
import { LandingMarquee } from "./LandingMarquee";
import { LandingNavbar } from "./LandingNavbar";
import { LandingOurWorks } from "./LandingOurWorks";
import { LandingProjects } from "./LandingProjects";
import { LandingServices } from "./LandingServices";
import { LandingStats } from "./LandingStats";
import { LandingTestimonial } from "./LandingTestimonial";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#04070A] text-white antialiased">
      <LandingNavbar />
      <main>
        <LandingHero />
        <LandingAbout />
        <LandingMarquee />
        <LandingOurWorks />
        <LandingServices />
        <LandingProjects />
        <LandingStats />
        <LandingTestimonial />
        <LandingFooter />
      </main>
    </div>
  );
}
