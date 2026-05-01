import { motion } from "framer-motion";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const stats = [
  { value: "120+", label: "Projects delivered across digital and brand experiences" },
  { value: "35+", label: "Industries supported through strategic design solutions" },
  { value: "12", label: "Years of hands-on experience shaping meaningful identities" },
];

export function Stats() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.12)}
      className="relative px-6 py-32 max-w-[1400px] mx-auto"
    >
      <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-6">
        — Milestones
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="font-display uppercase font-black leading-[0.9] text-foreground max-w-5xl"
        style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
      >
        Creativity with <span className="text-gradient">real-world</span> results
      </motion.h2>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeUp} className="glass rounded-3xl p-8">
            <div className="font-display text-7xl md:text-8xl text-gradient">{s.value}</div>
            <p className="mt-6 text-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
