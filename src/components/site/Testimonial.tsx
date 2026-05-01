import { motion } from "framer-motion";

export function Testimonial() {
  return (
    <section className="relative px-6 py-32 max-w-[1400px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-foreground/60 mb-12">— Testimonial</p>
      <motion.blockquote
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display uppercase leading-[1] text-foreground max-w-6xl"
        style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
      >
        "Working with the studio felt <span className="text-gradient">effortless</span>. They translated our vision into a design that was both clear and impactful."
      </motion.blockquote>
      <div className="mt-12 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" />
        <div>
          <div className="font-medium">Alex Morgan</div>
          <div className="text-sm text-foreground/60">Founder, Zyra Music Platform</div>
        </div>
      </div>
    </section>
  );
}
