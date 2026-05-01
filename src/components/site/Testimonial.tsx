import { motion } from "framer-motion";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

export function Testimonial() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.15)}
      className="relative px-6 py-32 max-w-[1400px] mx-auto"
    >
      <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-12">
        — Testimonial
      </motion.p>
      <motion.blockquote
        variants={fadeUp}
        className="font-display uppercase leading-[1] text-foreground max-w-6xl"
        style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
      >
        "Working with the studio felt <span className="text-gradient">effortless</span>. They translated our vision into a design that was both clear and impactful."
      </motion.blockquote>
      <motion.div variants={fadeUp} className="mt-12 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" />
        <div>
          <div className="font-medium">Alex Morgan</div>
          <div className="text-sm text-foreground/60">Founder, Zyra Music Platform</div>
        </div>
      </motion.div>
    </motion.section>
  );
}
