import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const projects = [
  {
    tag: "Branding",
    title: "Finaco — Mental Well-Being Website",
    desc: "A calm, human-centered digital experience designed to support emotional well-being through clarity, balance, and thoughtful interaction.",
    img: work2,
  },
  {
    tag: "UI / UX Design",
    title: "Vudo — Fintech Identity System",
    desc: "A confident financial brand built around clarity, motion, and trust — from logo system to product UI.",
    img: work1,
  },
  {
    tag: "Development",
    title: "Photolab — Visual Storytelling Site",
    desc: "A high-performance editorial platform built to showcase imagery with cinematic transitions and butter-smooth scroll.",
    img: work3,
  },
];

/** 0 = fully front, 1 = fully stacked behind next cards */
function stackedAmount(progress: number, index: number, total: number): number {
  if (index >= total - 1) return 0;
  const handoff = (index + 1) / total;
  const blend = 0.07;
  if (progress <= handoff - blend) return 0;
  if (progress >= handoff + blend) return 1;
  const t = (progress - (handoff - blend)) / (2 * blend);
  return Math.min(1, Math.max(0, t));
}

export function HighlightedProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative px-6 pt-32 pb-10 max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ ...scrollViewport, once: true }}
        variants={stagger(0.12)}
        className="text-center mb-16 md:mb-24"
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-magenta" />
          Selected Work
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="font-display uppercase font-black leading-[0.9] text-foreground"
          style={{ fontSize: "clamp(3rem, 9vw, 9rem)" }}
        >
          Highlighted <span className="text-gradient">Projects</span>
        </motion.h2>
      </motion.div>

      <div
        ref={containerRef}
        className="relative [perspective:1400px]"
        style={{ paddingBottom: "min(40vh, 420px)" }}
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            total={projects.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

type Project = (typeof projects)[number];

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const reduce = useReducedMotion();

  const stack = useTransform(progress, (v) =>
    reduce ? 0 : stackedAmount(v, index, total)
  );

  const scale = useTransform(stack, [0, 1], [1, 0.9]);
  const opacity = useTransform(stack, [0, 1], [1, 0.62]);
  const rotateX = useTransform(stack, [0, 1], [0, -4]);
  const y = useTransform(stack, [0, 1], [0, -6]);
  const rimOpacity = useTransform(stack, [0, 1], [0, 0.35]);
  const imgScale = useTransform(stack, [0, 1], [1, 1.03]);

  const isLast = index === total - 1;

  return (
    <div
      className="sticky flex justify-center"
      style={{
        top: `calc(max(5rem, env(safe-area-inset-top, 0px) + 5rem) + ${index * 28}px)`,
        marginBottom: isLast ? "min(45vh, 520px)" : "min(72vh, 760px)",
        zIndex: 10 + index,
      }}
    >
      <motion.article
        style={{
          scale: reduce ? 1 : scale,
          opacity: reduce ? 1 : opacity,
          rotateX: reduce ? 0 : rotateX,
          y: reduce ? 0 : y,
          transformStyle: "preserve-3d",
          width: "100%",
          maxWidth: "1400px",
        }}
        className="relative grid md:grid-cols-12 gap-8 items-stretch rounded-[2rem] border border-white/10 bg-card p-6 md:p-10 overflow-hidden shadow-2xl ring-1 ring-white/[0.06] origin-center will-change-transform"
      >
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[2rem]"
          style={{
            opacity: reduce ? 0 : rimOpacity,
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)",
          }}
          aria-hidden
        />

        <div className="relative md:col-span-5 flex flex-col justify-between gap-10 z-[1]">
          <div className="space-y-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 text-xs uppercase tracking-widest text-foreground/80">
              {project.tag}
            </span>
            <h3
              className="font-display uppercase leading-[0.95] text-foreground"
              style={{ fontSize: "clamp(1.75rem, 2.6vw, 2.75rem)" }}
            >
              {project.title}
            </h3>
          </div>

          <div className="space-y-8">
            <p className="text-foreground/70 text-base md:text-lg max-w-md">
              {project.desc}
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-foreground text-background font-medium uppercase tracking-widest text-sm w-fit hover:bg-foreground/90 transition"
            >
              View Project
              <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-background text-foreground transition group-hover:rotate-45">
                ↗
              </span>
            </a>
          </div>
        </div>

        <div className="relative md:col-span-7 z-[1]">
          <div className="group h-full overflow-hidden rounded-2xl">
            <motion.img
              src={project.img}
              alt={project.title}
              loading="lazy"
              className="w-full h-full min-h-[320px] md:min-h-[460px] object-cover"
              style={{ scale: reduce ? 1 : imgScale }}
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}
