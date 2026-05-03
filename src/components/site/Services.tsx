import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const services = [
  {
    n: "01",
    title: "Frontend engineering",
    desc: "React / TypeScript interfaces, routing, animation, and state that stay understandable as products grow.",
    img: work1,
  },
  {
    n: "02",
    title: "APIs & integrations",
    desc: "REST and client-side data layers, auth flows, and third-party services wired safely into the UI.",
    img: work2,
  },
  {
    n: "03",
    title: "UI implementation",
    desc: "Figma to code with spacing, motion, and components that match the design system — without fragile hacks.",
    img: work3,
  },
  {
    n: "04",
    title: "Performance & quality",
    desc: "Lazy loading, bundle discipline, accessibility checks, and polish so launches feel fast on real devices.",
    img: work3,
  },
];

export function Services() {
  return (
    <section id="services" className="relative px-6 pt-24 md:pt-32 pb-8 max-w-[1232px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={stagger(0.1)}
        className="flex items-center gap-2 mb-8"
      >
        <span className="w-3 h-3 rounded-full bg-[#F00862] shrink-0" aria-hidden />
        <p className="text-[15px] uppercase text-white font-sans leading-[19.2px]">What I do</p>
      </motion.div>

      <motion.h2
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={fadeUp}
        className="font-display uppercase text-gradient-display text-[clamp(2rem,5vw,72px)] leading-[1.08] md:leading-[115.2px] max-w-[1100px]"
      >
        FROM PROTOTYPE
        <br />
        TO PRODUCTION
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={stagger(0.08)}
        className="mt-10 md:mt-12 flex flex-col gap-6"
      >
        {services.map((s) => (
          <motion.li key={s.n} variants={fadeUp}>
            <a
              href="#contact"
              className="group block rounded-2xl border border-[#272828] bg-[oklch(0.07_0.02_280)] p-6 md:p-8 hover:border-white/25 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                <div className="flex flex-wrap items-center gap-6 md:gap-8 min-w-0">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#F00862]" aria-hidden />
                    <span className="font-sans text-[19.7px] text-white tabular-nums">{s.n}</span>
                  </div>
                  <span className="font-sans uppercase text-white text-[clamp(1.5rem,3.5vw,2.35rem)] leading-tight tracking-tight">
                    {s.title}
                  </span>
                </div>
                <div className="grid sm:grid-cols-[minmax(0,220px)_1fr] gap-5 items-center">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                    <img src={s.img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  </div>
                  <p className="text-foreground/75 font-sans text-base leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
