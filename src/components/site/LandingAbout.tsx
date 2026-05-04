import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/** About: centered column at all breakpoints; max widths match Figma (1006 / 642). */
export function LandingAbout() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-[80px] xl:px-[344px]"
    >
      <div className="mx-auto flex w-full max-w-[1232px] flex-col items-center text-center">
        {/* Eyebrow — dot 12px, label 16 / 19.2 */}
        <div className="mb-6 flex shrink-0 items-center justify-center gap-2 md:mb-8">
          <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
          <span className="text-[16px] leading-[19.2px] uppercase">About me</span>
        </div>

        {/* Title — scales down on small screens; Figma max width 1006 */}
        <div className="mb-12 w-full max-w-[1006px] px-3 sm:px-4 md:mb-20 md:px-8 lg:mb-[120px] lg:px-[92px]">
          <h2 className="font-display flex flex-col items-center gap-0 text-center text-[clamp(1.75rem,6.5vw,4.5rem)] font-normal uppercase leading-[1.12] sm:leading-[1.15] lg:text-[72px] lg:leading-[115.2px]">
            <span className="text-gradient-display block">Design that means</span>
            <span className="text-gradient-display block">something</span>
          </h2>
        </div>

        {/* Body — max 642, 16 / 24 */}
        <motion.p
          className="mb-8 w-full max-w-[642px] px-1 text-[16px] leading-6 text-white md:mb-10 lg:mb-12"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m a developer who enjoys the craft of interfaces and product details. I blend layout, interaction, and
          implementation so what ships is easy to use, easy to read in the codebase, and aligned with what the team is
          trying to achieve.
        </motion.p>

        {/* CTA — centered; Figma pill px 25 py 17, gap 12 */}
        <div className="flex w-full justify-center">
          <a
            href="#about"
            className="relative inline-flex items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-5 py-3.5 text-[15px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset sm:px-[25px] sm:py-[17px] sm:text-[16px]"
          >
            More about me
            <ArrowUpRight className="size-5 shrink-0 sm:size-6" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
