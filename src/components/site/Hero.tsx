import { motion } from "framer-motion";
import heroBg from "@/assets/hero-gradient.jpg";
import { fadeUp, fadeUpSm, fadeRight, scaleIn, stagger, scrollViewportLoose } from "./motion-presets";

export function Hero() {
  return (
    <motion.section
      id="top"
      initial="hidden"
      whileInView="show"
      viewport={scrollViewportLoose}
      variants={stagger(0.15)}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-32 pb-24 md:px-12 lg:px-[min(344px,18vw)] md:pt-40 md:pb-32"
    >
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
      </div>

      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.32_340)] blur-[120px] opacity-60 animate-blob -z-10" />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.28_255)] blur-[140px] opacity-60 animate-blob -z-10"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-[1232px] mx-auto w-full">
        <div className="grid w-full lg:grid-cols-[minmax(0,1fr)_minmax(0,0.28fr)] lg:gap-x-4 items-end">
          <div className="flex flex-col gap-[60px] w-full min-w-0">
            <motion.h1 variants={fadeUp} className="flex flex-col gap-12 w-full">
              <span className="flex flex-wrap items-center gap-12">
                <span className="font-display uppercase text-white !tracking-[2.08px] text-[clamp(3rem,10vw,104px)] leading-[1.08] md:leading-[208px]">
                  CREATIVE
                </span>
                <SeeProjectsBadge />
              </span>
              <span className="font-display uppercase font-normal text-gradient-display !tracking-[2.08px] text-[clamp(3rem,10vw,104px)] leading-[1.08] md:leading-[166.4px]">
                DEVELOPER
              </span>
            </motion.h1>

            <div className="grid w-full max-w-[691px] grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-6 items-start">
              <motion.p
                variants={fadeUpSm}
                className="text-white text-[18px] leading-[27px] max-w-[510px] min-w-0 text-left font-sans"
              >
                I&apos;m Goran — I turn product ideas into shipped web interfaces: clear UX, solid frontends, and
                maintainable code. I work directly with founders and teams — no agency layer — from first sketch to
                deploy.
              </motion.p>

              <motion.div variants={scaleIn} className="flex sm:justify-end sm:items-start">
                <a
                  href="#contact"
                  className="relative inline-flex items-center gap-3 rounded-full bg-white pl-[25px] pr-2 py-[17px] text-foreground shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.4)] border-dashed font-sans text-base uppercase text-[#04070A] hover:scale-[1.02] transition-transform"
                >
                  Let&apos;s Talk
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-sm">
                    ↗
                  </span>
                </a>
              </motion.div>
            </div>
          </div>

          <motion.ul
            variants={fadeRight}
            className="mt-12 lg:mt-0 flex flex-col gap-4 items-start lg:items-end lg:justify-end lg:pb-1"
          >
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/" },
              { label: "GitHub", href: "https://github.com/" },
              { label: "Instagram", href: "https://www.instagram.com/" },
            ].map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white font-sans text-base leading-[19.2px] hover:opacity-70 transition"
                >
                  {s.label} <span className="text-xs opacity-80">↗</span>
                </a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
}

function SeeProjectsBadge() {
  const text = "• SEE PROJECTS • SEE PROJECTS ";
  return (
    <a href="#work" className="inline-flex relative w-[144px] h-[144px] glass rounded-full items-center justify-center shrink-0">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
        <defs>
          <path id="hero-circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text fill="white" fontSize="14" fontFamily="var(--font-sans)" letterSpacing="2">
          <textPath href="#hero-circle">{text + text}</textPath>
        </text>
      </svg>
      <span className="text-3xl relative z-[1]">↓</span>
    </a>
  );
}
