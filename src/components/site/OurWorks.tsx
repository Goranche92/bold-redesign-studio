import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, ArrowLeft, ArrowRight } from "lucide-react";
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

const AUTOPLAY_MS = 3500;

export function OurWorks() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % works.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + works.length) % works.length), []);

  useEffect(() => {
    if (!isPlaying || isHover) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isPlaying, isHover, next]);

  return (
    <section
      className="relative px-6 py-32 max-w-[1400px] mx-auto"
      aria-label="Our Works"
      aria-roledescription="carousel"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={scrollViewport}
        variants={stagger(0.1)}
        className="mb-12 flex items-end justify-between gap-6 flex-wrap"
      >
        <div>
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
        </div>

        <motion.div variants={fadeUp} className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>

      <div
        className="overflow-hidden -mx-6 px-6"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onFocusCapture={() => setIsHover(true)}
        onBlurCapture={() => setIsHover(false)}
      >
        <motion.div
          ref={trackRef}
          animate={{ x: `calc(${-index} * (44vw + 2rem))` }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-8 will-change-transform"
        >
          {works.map((w, i) => (
            <article
              key={w.n}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${works.length}`}
              className={`group relative shrink-0 w-[80vw] md:w-[55vw] lg:w-[44vw] rounded-3xl overflow-hidden bg-card border border-white/10 transition-opacity duration-500 ${i === index ? "opacity-100" : "opacity-50"}`}
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
        </motion.div>
      </div>

      <div className="mt-10 flex items-center gap-6">
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            key={`${index}-${isPlaying}-${isHover}`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isPlaying && !isHover ? 1 : 0 }}
            transition={{ duration: isPlaying && !isHover ? AUTOPLAY_MS / 1000 : 0.3, ease: "linear" }}
            style={{ transformOrigin: "0% 50%" }}
            className="h-full bg-gradient-to-r from-magenta via-accent to-electric"
          />
        </div>
        <span className="text-sm text-foreground/60 tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
