import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-gradient.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

/** Distinct Unsplash shots — dashboards / laptops / workspace (landing-page vibe). */
const LANDING_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=960&q=80&auto=format&fit=crop",
] as const;

const works = [
  { n: "01", tag: "SaaS", title: "Northwind Analytics", year: "2025", img: LANDING_IMAGES[0] },
  { n: "02", tag: "Fintech", title: "Ledger Flow App", year: "2025", img: LANDING_IMAGES[1] },
  { n: "03", tag: "Dev tools", title: "CloudForge CLI", year: "2024", img: LANDING_IMAGES[2] },
  { n: "04", tag: "E‑commerce", title: "Studio Cart", year: "2024", img: LANDING_IMAGES[3] },
  { n: "05", tag: "Creative", title: "Pulse Agency Site", year: "2024", img: LANDING_IMAGES[4] },
  { n: "06", tag: "Product", title: "Nova Health Portal", year: "2023", img: LANDING_IMAGES[5] },
];

const rows = [
  [works[0], works[1]],
  [works[2], works[3]],
  [works[4], works[5]],
] as const;

const SECTION_SCROLL_VH = 520;

export function OurWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /** Full grid travels upward through the sticky viewport */
  const cardsY = useTransform(scrollYProgress, [0.05, 1], ["48vh", "-228vh"]);

  /** Headline stays in the upper band; blur builds as cards rise */
  const titleBlurPx = useTransform(scrollYProgress, [0.1, 0.26, 0.9], [0, 15, 18]);
  const titleFilter = useTransform(titleBlurPx, (b) => `blur(${b.toFixed(1)}px)`);
  const titleOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0.82]);

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-10 md:py-14"
      aria-label="Our Works"
      style={{ height: `${SECTION_SCROLL_VH}vh` }}
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-x-hidden isolate">
        {/* Background */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/96 via-background/90 to-background/96" />
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="absolute inset-0 -z-10 backdrop-blur-[2px]" />

        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.08)}
          className="relative z-20 pt-8 md:pt-10 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/75 mb-6 md:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-magenta" />
            Our works
          </motion.p>
        </motion.div>

        {/* Headline layer: fixed band at top of viewport while section scrolls */}
        <motion.div
          style={{ filter: titleFilter, opacity: titleOpacity }}
          className="pointer-events-none absolute left-0 right-0 top-[7.5rem] md:top-[8.5rem] z-40 px-4 text-center"
        >
          <h2 className="font-display uppercase font-black leading-[1.08] text-foreground mx-auto max-w-5xl drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] [text-wrap:balance]">
            Design built to <span className="text-gradient">perform</span>
            <span className="block mt-3 md:mt-5 text-foreground/95">
              not just to look good
            </span>
          </h2>
        </motion.div>

        {/* Cards: centered 2-col grid, driven upward by scroll */}
        <motion.div
          style={{ y: cardsY }}
          className="absolute left-0 right-0 top-0 z-10 pt-[min(42vh,340px)] md:pt-[min(38vh,300px)] px-2 md:px-4"
        >
          <div className="mx-auto w-full max-w-[1200px] flex flex-col gap-8 md:gap-10 lg:gap-12">
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10"
              >
                {row.map((w) => (
                  <WorkCard key={w.n} work={w} />
                ))}
              </div>
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
      <img
        src={work.img}
        alt={`${work.title} landing page preview`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
      <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/85">
          <span>
            {work.n} — {work.tag}
          </span>
          <span>{work.year}</span>
        </div>
        <h3
          className="font-display uppercase leading-[0.92] text-foreground pr-2"
          style={{ fontSize: "clamp(1.35rem, 3vw, 2.25rem)" }}
        >
          {work.title}
        </h3>
      </div>
    </article>
  );
}
