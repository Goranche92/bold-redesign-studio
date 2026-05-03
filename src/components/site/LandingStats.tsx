import { figma } from "@/data/figma-assets";
import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { value: "208+", lines: ["Projects delivered across digital and", "brand experiences"] },
  { value: "38+", lines: ["Industries supported through", "strategic design solutions"] },
  { value: "12", suffix: "Years", lines: ["of hands-on experience shaping", "meaningful visual identities"] },
];

export function LandingStats() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full px-6 pt-32 pb-20 md:px-12 xl:px-[344px] xl:pt-40 xl:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img src={figma.statsBg} alt="" className="absolute top-0 left-0 h-[130%] w-full max-w-none object-cover" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-[1232px] flex-col gap-8">
        <div className="flex items-center gap-2">
          <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
          <span className="text-[15.4px] leading-[19.2px] uppercase">Milestones</span>
        </div>

        <div className="max-w-[768px]">
          <h2 className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]">
            <span className="text-gradient-display block">Creativity with</span>
            <span className="text-gradient-display block">real-world</span>
            <span className="text-gradient-display block">results</span>
          </h2>
          <p className="mt-10 max-w-[384px] text-[14.6px] leading-6 text-white">
            A bold digital presence created to capture sound, energy, and movement — designed to connect people through
            music-driven experiences.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-14 lg:flex-row lg:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.value}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`flex max-w-[247px] flex-col gap-3 ${i === 1 ? "lg:pl-28" : ""} ${i === 2 ? "lg:pl-56" : ""}`}
            >
              <p className="font-display text-[40px] leading-[60px] tracking-wide uppercase">
                {s.value}
                {s.suffix ? <span className="ml-2">{s.suffix}</span> : null}
              </p>
              <p className="text-[14.5px] leading-6 text-white">
                {s.lines[0]}
                <br />
                {s.lines[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
