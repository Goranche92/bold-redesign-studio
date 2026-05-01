import { motion } from "framer-motion";

const stats = [
  { value: "120+", label: "Projects delivered across digital and brand experiences" },
  { value: "35+", label: "Industries supported through strategic design solutions" },
  { value: "12", label: "Years of hands-on experience shaping meaningful identities" },
];

export function Stats() {
  return (
    <section className="relative px-6 py-32 max-w-[1400px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-foreground/60 mb-6">— Milestones</p>
      <h2 className="font-display uppercase font-black leading-[0.9] text-foreground max-w-5xl" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>
        Creativity with <span className="text-gradient">real-world</span> results
      </h2>

      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div className="font-display text-7xl md:text-8xl text-gradient">{s.value}</div>
            <p className="mt-6 text-foreground/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
