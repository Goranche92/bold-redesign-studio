import { motion } from "framer-motion";
import heroBg from "@/assets/hero-gradient.jpg";
import { fadeUp, fadeUpSm, fadeRight, scaleIn, stagger, scrollViewportLoose } from "./motion-presets";

export function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewportLoose}
      variants={stagger(0.15)}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-28 pb-28 md:pt-32 md:pb-36"
    >
      {/* Gradient backdrop */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" />
      </div>

      {/* Floating blobs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.32_340)] blur-[120px] opacity-60 animate-blob -z-10" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.28_255)] blur-[140px] opacity-60 animate-blob -z-10" style={{ animationDelay: "4s" }} />

      <div className="max-w-[1400px] mx-auto w-full">
        <motion.h1
          variants={fadeUp}
          className="font-display uppercase font-black flex flex-col gap-[100px] tracking-[2.1px] max-md:gap-12 max-md:text-[clamp(2.75rem,11vw,4.25rem)] max-md:leading-[1.08] md:text-[104px] md:leading-[208px]"
        >
          <span className="flex items-center gap-6 flex-wrap text-white">
            Creative
            <SeeProjectsBadge />
          </span>
          <span className="block text-gradient">Developer</span>
        </motion.h1>

        <div className="mt-16 md:mt-20 lg:mt-24 grid md:grid-cols-3 gap-12 md:gap-14 items-end">
          <motion.p variants={fadeUpSm} className="text-foreground/80 text-lg max-w-md leading-relaxed">
            I help teams and founders ship interfaces that feel as good as they look — from UX and design systems to modern frontends, with a focus on performance and detail.
          </motion.p>

          <motion.div variants={scaleIn} className="flex justify-center">
            <a href="#contact" className="flex items-center gap-3 bg-foreground text-primary-foreground pl-8 pr-2 py-2 rounded-full text-base font-medium hover:scale-105 transition-transform">
              LET'S TALK
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white">✕</span>
            </a>
          </motion.div>

          <motion.ul variants={fadeRight} className="space-y-3 md:text-right text-foreground/90">
            {["Facebook", "Linkedin", "Instagram"].map((s) => (
              <li key={s}>
                <a href="#" className="inline-flex items-center gap-2 hover:text-foreground/60 transition">
                  {s} <span className="text-xs">↗</span>
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
    <span className="inline-flex relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] glass rounded-full items-center justify-center shrink-0">
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-spin-slow">
        <defs>
          <path id="circle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
        </defs>
        <text fill="white" fontSize="14" fontFamily="var(--font-sans)" letterSpacing="2">
          <textPath href="#circle">{text + text}</textPath>
        </text>
      </svg>
      <span className="text-3xl">↓</span>
    </span>
  );
}
