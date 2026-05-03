import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
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

export function OurWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-8 md:py-12"
      aria-label="Our Works"
      style={{ height: `${(works.length + 1) * 95}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col isolate">
        {/* Fixed-in-viewport background: stays visually fixed while cards scroll up (boldonse-style) */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 -z-10 bg-background/80 backdrop-blur-[2px]" />

        {/* Watermark over bg */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <h2
            className="font-display uppercase font-black text-foreground/[0.07] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(8rem, 22vw, 22rem)", letterSpacing: "-0.04em" }}
          >
            DESIGN BUILT
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.1)}
          className="pt-12 md:pt-20 pb-6 md:pb-8 text-center relative z-10"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80"
          >
            <span className="w-2 h-2 rounded-full bg-magenta" />
            Our Works
          </motion.p>
        </motion.div>

        <div className="relative z-10 flex-1 w-full max-w-[1400px] mx-auto">
          {works.map((w, i) => (
            <WorkCard
              key={w.n}
              work={w}
              index={i}
              total={works.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type Work = (typeof works)[number];

function WorkCard({
  work,
  index,
  total,
  progress,
}: {
  work: Work;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  // Total scroll has (total+1) zones. Each card uses zones [i, i+2] to
  // enter, settle, and exit upward.
  const zone = 1 / (total + 1);
  const enterStart = index * zone;
  const settleAt = (index + 0.6) * zone;
  const exitStart = (index + 1.2) * zone;
  const exitEnd = (index + 2) * zone;

  const isFirst = index === 0;

  const y = useTransform(
    progress,
    [enterStart, settleAt, exitStart, exitEnd],
    [isFirst ? 0 : 100, 0, 0, -110],
  );
  const opacity = useTransform(
    progress,
    [enterStart, settleAt, exitStart, exitEnd],
    [isFirst ? 1 : 0, 1, 1, 0],
  );
  const scale = useTransform(
    progress,
    [enterStart, settleAt, exitStart, exitEnd],
    [0.92, 1, 1, 0.96],
  );

  // Alternate sides like the reference (left/right offset)
  const isLeft = index % 2 === 0;

  return (
    <motion.article
      style={{ y: y as unknown as number, opacity, scale }}
      className={`absolute top-[8vh] md:top-[10vh] w-[88%] sm:w-[64%] md:w-[46%] lg:w-[42%] aspect-[5/4] rounded-3xl overflow-hidden bg-card border border-white/15 shadow-2xl ring-1 ring-white/[0.06] ${
        isLeft ? "left-0 md:left-[2%]" : "right-0 md:right-[2%]"
      }`}
    >
      <img
        src={work.img}
        alt={work.title}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-foreground/80">
          <span>{work.n} — {work.tag}</span>
          <span>{work.year}</span>
        </div>
        <h3
          className="font-display uppercase leading-[0.9] text-foreground"
          style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
        >
          {work.title}
        </h3>
      </div>
    </motion.article>
  );
}
