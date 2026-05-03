import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import t1 from "@/assets/testimonial-1.jpg";
import t2 from "@/assets/testimonial-2.jpg";
import t3 from "@/assets/testimonial-3.jpg";
import { fadeUp, scrollViewport, stagger } from "./motion-presets";

const testimonials = [
  {
    quote:
      "Working with Goran felt effortless. He understood our vision quickly and translated it into a design that was both clear and impactful. The process was smooth, and the results exceeded our expectations.",
    name: "Alex Morgan",
    role: "Founder, Zyra Music Platform",
    img: t1,
  },
  {
    quote:
      "From the first call to the final handoff, the team brought clarity and craft to every detail. Our brand finally feels like ourselves — confident, modern, and unmistakably us.",
    name: "Sara Lindqvist",
    role: "Head of Brand, Nordlys Studio",
    img: t2,
  },
  {
    quote:
      "Strategy, design, and motion all moving in the same direction. The launch performed beyond our targets and the visual system still feels fresh months later.",
    name: "Marko Petrov",
    role: "CEO, Helix Labs",
    img: t3,
  },
];

const AUTOPLAY_MS = 6000;

export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [],
  );
  const prev = useCallback(
    () =>
      setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    [],
  );

  useEffect(() => {
    if (isHover) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isHover, next, index]);

  const active = testimonials[index];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.12)}
      className="relative px-6 py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto"
      aria-label="Testimonials"
    >
      <motion.div
        variants={fadeUp}
        className="flex items-center justify-between mb-10 md:mb-12 flex-wrap gap-8"
      >
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80">
          <span className="w-2 h-2 rounded-full bg-magenta" />
          Testimonial
        </p>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative grid md:grid-cols-2 gap-8 md:gap-0 rounded-[2rem] bg-card border border-white/10 overflow-hidden min-h-[520px] md:min-h-[600px] mt-4"
      >
        {/* Subtle blue glow behind portrait */}
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-2/3 bg-gradient-to-l from-electric/30 via-electric/10 to-transparent blur-3xl" />

        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 p-8 md:p-14 flex flex-col justify-center"
          >
            <blockquote
              className="text-foreground leading-[1.25]"
              style={{ fontSize: "clamp(1.25rem, 1.9vw, 2rem)" }}
            >
              &ldquo;{active.quote}&rdquo;
            </blockquote>
          </motion.div>
        </AnimatePresence>

        <div className="relative min-h-[360px] md:min-h-full">
          <AnimatePresence mode="wait">
            <motion.img
              key={`img-${index}`}
              src={active.img}
              alt={active.name}
              loading="lazy"
              width={1024}
              height={1024}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/80" />

          {/* Name overlay */}
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={`name-${index}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
              >
                <div
                  className="font-sans uppercase font-bold text-magenta leading-none tracking-tight"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}
                >
                  {active.name}
                </div>
                <div className="mt-2 text-sm text-foreground/80">
                  {active.role}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Progress dots */}
      <div className="mt-12 flex items-center justify-center gap-3">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-10 bg-magenta" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.section>
  );
}
