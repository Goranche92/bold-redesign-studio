import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";

const services = [
  { n: "01", title: "Branding", img: work1, desc: "Identity systems with a backbone — logos, color, type, motion." },
  { n: "02", title: "UI / UX Design", img: work2, desc: "Human-centered interfaces that feel inevitable." },
  { n: "03", title: "Development", img: work3, desc: "Production-grade builds with performance baked in." },
  { n: "04", title: "Illustration", img: work1, desc: "Custom visual language to make your brand unmistakable." },
];

export function Services() {
  return (
    <section className="relative px-6 py-32 max-w-[1400px] mx-auto">
      <p className="text-sm uppercase tracking-widest text-foreground/60 mb-6">— Our Works</p>
      <h2 className="font-display uppercase font-black leading-[0.9] text-foreground max-w-5xl" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}>
        Creative solutions <span className="text-gradient">end to end</span>
      </h2>

      <div className="mt-20 grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.article
            key={s.n}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-3xl bg-card border border-white/10 p-6 hover:border-white/30 transition"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-foreground/50 text-sm">{s.n}</span>
              <span className="font-display uppercase text-2xl">{s.title}</span>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={s.img} alt={s.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            </div>
            <p className="mt-6 text-foreground/70">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
