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

/**
 * Scroll-driven stack (boldonse-style): as the next card takes focus, this one
 * recedes with scale, lift, and dim — like a deck being dealt upward.
 * 0 = card is "active" in front, 1 = fully pushed behind the next.
 */
function stackedAmount(progress: number, index: number, total: number): number {
  if (index >= total - 1) return 0;
  const handoff = (index + 1) / total;
  const blend = 0.1;
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
    <section className="relative px-6 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ ...scrollViewport, once: true }}
        variants={stagger(0.12)}
        className="text-center mb-20 md:mb-28"
      >
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 mb-10 md:mb-12"
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
        className="relative [perspective:1800px] [perspective-origin:50%_0%]"
        style={{ paddingBottom: "min(48vh, 520px)" }}
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

  const scale = useTransform(stack, [0, 1], [1, 0.86]);
  const opacity = useTransform(stack, [0, 1], [1, 0.48]);
  const rotateX = useTransform(stack, [0, 1], [0, -10]);
  const y = useTransform(stack, [0, 1], [0, -14]);
  const z = useTransform(stack, [0, 1], [0, -80]);
  const rimOpacity = useTransform(stack, [0, 1], [0, 0.55]);
  const imgScale = useTransform(stack, [0, 1], [1, 1.06]);

  const isLast = index === total - 1;

  return (
    <div
      className="sticky flex justify-center"
      style={{
        top: `calc(max(5rem, env(safe-area-inset-top, 0px) + 4.5rem) + ${index * 36}px)`,
        marginBottom: isLast ? "min(50vh, 560px)" : "min(78vh, 820px)",
        zIndex: 10 + index,
      }}
    >
      <motion.article
        style={{
          scale: reduce ? 1 : scale,
          opacity: reduce ? 1 : opacity,
          rotateX: reduce ? 0 : rotateX,
          y: reduce ? 0 : y,
          translateZ: reduce ? 0 : z,
          transformStyle: "preserve-3d",
          width: "100%",
          maxWidth: "1400px",
        }}
        className="relative grid md:grid-cols-12 gap-10 md:gap-12 items-stretch rounded-[2rem] border border-white/10 bg-card p-8 md:p-12 lg:p-14 overflow-hidden shadow-2xl ring-1 ring-white/[0.06] origin-[center_top] will-change-transform"
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
