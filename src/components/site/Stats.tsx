import { motion } from "framer-motion";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const stats = [
  { value: "40+", label: "Shipped interfaces — from marketing sites to product dashboards" },
  { value: "8+", label: "Years writing production TypeScript and React" },
  { value: "1:1", label: "How I work with you — direct updates, no account-manager telephone game" },
];

export function Stats() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.12)}
      className="relative px-6 py-24 md:py-32 max-w-[1232px] mx-auto"
    >
      <motion.p variants={fadeUp} className="flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 mb-8 md:mb-10">
        <span className="w-2 h-2 rounded-full bg-magenta shrink-0" aria-hidden />
        Proof points
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="font-display uppercase font-black leading-[1.08] max-w-5xl text-gradient-display"
      >
        BUILDING WITH CLARITY & CRAFT
      </motion.h2>

      <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-12">
        {stats.map((s, i) => (
          <motion.div key={i} variants={fadeUp} className="glass rounded-3xl p-8 md:p-10 border border-white/10">
            <div className="font-sans font-bold text-7xl md:text-8xl text-gradient tabular-nums">{s.value}</div>
            <p className="mt-8 text-foreground/70 leading-relaxed font-sans">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
