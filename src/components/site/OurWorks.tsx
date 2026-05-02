import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
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
      className="relative px-6"
      aria-label="Our Works"
      style={{ height: `${works.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={scrollViewport}
          variants={stagger(0.1)}
          className="pt-24 pb-6 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70"
          >
            <span className="w-2 h-2 rounded-full bg-magenta" />
            Our Works
          </motion.p>
        </motion.div>

        <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
          <h2
            className="font-display uppercase font-black text-foreground/[0.06] whitespace-nowrap select-none"
            style={{ fontSize: "clamp(8rem, 22vw, 22rem)", letterSpacing: "-0.04em" }}
          >
            DESIGN BUILT
          </h2>
        </div>

        <div className="relative flex-1 w-full max-w-[1000px] mx-auto px-6">
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
  const slice = 1 / total;
  const start = index * slice;
  const end = (index + 1) * slice;

  const y = useTransform(progress, [start, end], ["100%", "0%"]);
  const scale = useTransform(progress, [start, end], [0.8, 1]);
  const opacity = useTransform(progress, [start, end], [0, 1]);

  return (
    <motion.article
      style={{ 
        y, 
        scale, 
        opacity, 
        position: "absolute", 
        top: "10vh", 
        left: 0, 
        right: 0 
      }}
      className="bg-card border border-white/10 rounded-3xl p-8 flex items-center gap-8 shadow-2xl"
    >
      <div className="w-1/3 aspect-video overflow-hidden rounded-xl">
        <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1">
        <span className="text-magenta text-sm font-bold">{work.n}</span>
        <h3 className="text-4xl font-display uppercase mt-2">{work.title}</h3>
        <p className="text-foreground/60 mt-2">{work.tag} • {work.year}</p>
      </div>
    </motion.article>
  );
}
