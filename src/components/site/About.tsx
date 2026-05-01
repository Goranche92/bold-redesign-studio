import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import { fadeUp, scaleIn, scrollViewport, stagger } from "./motion-presets";

export function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.15)}
      className="relative px-6 py-32 max-w-[1400px] mx-auto"
    >
      <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-6">
        — About Us
      </motion.p>
      <div className="grid md:grid-cols-12 gap-12 items-end">
        <motion.h2
          variants={fadeUp}
          className="md:col-span-8 font-display uppercase font-black leading-[0.9] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Design that <span className="text-gradient">means</span> something
        </motion.h2>
        <motion.div variants={scaleIn} className="md:col-span-4">
          <img src={work1} alt="Iridescent abstract sculpture" loading="lazy" className="w-full rounded-3xl glow" />
        </motion.div>
      </div>
      <motion.p variants={fadeUp} className="mt-12 max-w-2xl text-lg text-foreground/80">
        We're a creative studio focused on building thoughtful visual and digital experiences. Our work blends strategy, design, and execution to help brands communicate clearly and connect meaningfully with their audience.
      </motion.p>
      <motion.a variants={fadeUp} href="#" className="mt-8 inline-flex items-center gap-3 text-foreground hover:text-accent transition">
        <span className="font-medium">Read more</span>
        <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/20">↗</span>
      </motion.a>
    </motion.section>
  );
}
