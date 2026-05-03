import { figma } from "@/data/figma-assets";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function LandingAbout() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="flex w-full flex-col items-center gap-20 px-6 py-20 md:px-12 xl:px-[344px]">
      <div className="relative mx-auto w-full max-w-[1232px]">
        <div className="mb-10 flex items-center justify-center gap-2">
          <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
          <span className="text-[16px] leading-[19.2px] uppercase">About me</span>
        </div>

        <div className="relative mx-auto max-w-[1006px] pb-16 pt-8 text-center">
          <h2 className="font-display relative z-10 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.15] font-normal uppercase">
            <span className="text-gradient-display block">Design that means</span>
            <span className="text-gradient-display block">something</span>
          </h2>
          <div className="pointer-events-none absolute top-[18%] right-[12%] left-[12%] z-0 aspect-[1.1] max-h-[320px] md:top-[16%]">
            <img src={figma.aboutShape} alt="" className="size-full object-contain opacity-95" />
          </div>
        </div>

        <motion.p
          className="mx-auto max-w-[642px] text-center text-[16px] leading-6 text-white"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m a developer who enjoys the craft of interfaces and product details. I blend layout, interaction, and
          implementation so what ships is easy to use, easy to read in the codebase, and aligned with what the team
          is trying to achieve.
        </motion.p>

        <div className="mt-10 flex justify-center">
          <a
            href="#about"
            className="relative inline-flex items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset"
          >
            More about me
            <ArrowUpRight className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
