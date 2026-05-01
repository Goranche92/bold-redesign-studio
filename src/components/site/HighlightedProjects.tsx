import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { fadeUp, scaleIn, scrollViewport, scrollViewportLoose, stagger } from "./motion-presets";

const projects = [
  {
    tag: "Branding",
    title: "Finaco — Fintech Identity System",
    desc: "A confident financial brand built around clarity, motion, and trust — from logo system to product UI.",
    img: work1,
  },
  {
    tag: "UI / UX Design",
    title: "Vudo — Mental Well-Being Platform",
    desc: "A calm, human-centered digital experience designed to support emotional well-being through balance and thoughtful interaction.",
    img: work2,
  },
  {
    tag: "Development",
    title: "Photolab — Visual Storytelling Site",
    desc: "A high-performance editorial platform built to showcase imagery with cinematic transitions and butter-smooth scroll.",
    img: work3,
  },
];

export function HighlightedProjects() {
  return (
    <section className="relative px-6 py-32 max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={stagger(0.12)}
      >
        <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-6">
          — Selected Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display uppercase font-black leading-[0.9] text-foreground max-w-5xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
        >
          Highlighted <span className="text-gradient">Projects</span>
        </motion.h2>
      </motion.div>

      <div className="mt-20 space-y-32">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial="hidden"
            whileInView="show"
            viewport={scrollViewportLoose}
            variants={stagger(0.15)}
            className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            <motion.div variants={scaleIn} className="md:col-span-7">
              <div className="group overflow-hidden rounded-3xl glow">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </motion.div>

            <div className="md:col-span-5 space-y-6">
              <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60">
                {p.tag}
              </motion.p>
              <motion.h3
                variants={fadeUp}
                className="font-display uppercase leading-[0.95] text-foreground"
                style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}
              >
                {p.title}
              </motion.h3>
              <motion.p variants={fadeUp} className="text-foreground/70 text-lg max-w-md">
                {p.desc}
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="#"
                className="inline-flex items-center gap-3 text-foreground hover:text-accent transition"
              >
                <span className="font-medium">View Project</span>
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/20">↗</span>
              </motion.a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
