import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-gradient.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const works = [
  { n: "01", tag: "Branding", title: "Finacoo", year: "2025", img: work1 },
  { n: "02", tag: "UI / UX", title: "Avionix", year: "2025", img: work2 },
  { n: "03", tag: "Development", title: "Photolab", year: "2024", img: work3 },
  { n: "04", tag: "Motion", title: "Rowters", year: "2024", img: work2 },
  { n: "05", tag: "Illustration", title: "Kairo", year: "2024", img: work1 },
  { n: "06", tag: "Web Design", title: "Nebula", year: "2023", img: work3 },
];

/** 3 rows × 2 columns */
const rows = [
  [works[0], works[1]],
  [works[2], works[3]],
  [works[4], works[5]],
] as const;

export function OurWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gridY = useTransform(scrollYProgress, [0, 1], ["14vh", "-28vh"]);
  const rowY0 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const rowY1 = useTransform(scrollYProgress, [0, 1], ["2%", "-10%"]);
  const rowY2 = useTransform(scrollYProgress, [0, 1], ["4%", "-15%"]);
  const rowYs = [rowY0, rowY1, rowY2];

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-10 md:py-14"
      aria-label="Our Works"
      style={{ height: "420vh" }}
    >
      <div className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col isolate py-6 md:py-10">
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        {/* Tamniji sloj preko slike */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/88 to-background/95" />
        <div className="absolute inset-0 -z-10 bg-black/55" />
        <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <h2
            className="font-display uppercase font-black text-foreground/[0.06] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(6rem, 18vw, 18rem)", letterSpacing: "-0.04em" }}
          >
            DESIGN BUILT
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.1)}
          className="text-center relative z-10 shrink-0 pb-6 md:pb-8"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80"
          >
            <span className="w-2 h-2 rounded-full bg-magenta" />
            Our Works
          </motion.p>
        </motion.div>

        <motion.div
          style={{ y: gridY }}
          className="relative z-10 flex-1 flex items-center w-full max-w-[1400px] mx-auto px-1 md:px-2"
        >
          <div className="w-full flex flex-col gap-8 md:gap-10 lg:gap-12">
            {rows.map((row, ri) => (
              <motion.div
                key={ri}
                style={{ y: rowYs[ri] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
              >
                {row.map((w) => (
                  <WorkCard key={w.n} work={w} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type Work = (typeof works)[number];

function WorkCard({ work }: { work: Work }) {
  return (
    <article className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-card border border-white/15 shadow-2xl ring-1 ring-white/[0.06]">
      <img src={work.img} alt={work.title} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" />
      <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/80">
          <span>
            {work.n} — {work.tag}
          </span>
          <span>{work.year}</span>
        </div>
        <h3
          className="font-display uppercase leading-[0.9] text-foreground"
          style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
        >
          {work.title}
        </h3>
      </div>
    </article>
  );
}
