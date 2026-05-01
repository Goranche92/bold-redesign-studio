import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const works = [
  { n: "01", tag: "Branding", title: "Finaco", year: "2025", img: work1 },
  { n: "02", tag: "UI / UX", title: "Vudo", year: "2025", img: work2 },
  { n: "03", tag: "Development", title: "Photolab", year: "2024", img: work3 },
  { n: "04", tag: "Motion", title: "Nebula", year: "2024", img: work1 },
  { n: "05", tag: "Illustration", title: "Kairo", year: "2023", img: work2 },
];

export function OurWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Translate horizontally — leave room so last card lands flush right.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `${works.length * 90}vh` }}
      aria-label="Our Works"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.1)}
          className="px-6 max-w-[1400px] mx-auto w-full mb-12"
        >
          <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-4">
            — Our Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display uppercase font-black leading-[0.9] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
          >
            Recent <span className="text-gradient">case studies</span>
          </motion.h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-8 pl-6 md:pl-[8vw] will-change-transform"
          >
            {works.map((w) => (
              <article
                key={w.n}
                className="group relative shrink-0 w-[80vw] md:w-[55vw] lg:w-[44vw] rounded-3xl overflow-hidden bg-card border border-white/10"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={w.img}
                    alt={w.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex items-end justify-between gap-6">
                  <div>
                    <div className="flex items-center gap-3 text-sm uppercase tracking-widest text-foreground/60 mb-3">
                      <span>{w.n}</span>
                      <span className="w-6 h-px bg-foreground/30" />
                      <span>{w.tag}</span>
                    </div>
                    <h3
                      className="font-display uppercase leading-[0.95]"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 3.25rem)" }}
                    >
                      {w.title}
                    </h3>
                  </div>
                  <span className="text-foreground/60 text-sm">{w.year}</span>
                </div>
              </article>
            ))}

            <div className="shrink-0 w-[20vw]" aria-hidden />
          </motion.div>
        </div>

        <div className="mt-10 px-6 max-w-[1400px] mx-auto w-full">
          <div className="h-[2px] w-full bg-white/10 overflow-hidden rounded-full">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
              className="h-full bg-gradient-to-r from-magenta via-accent to-electric"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
