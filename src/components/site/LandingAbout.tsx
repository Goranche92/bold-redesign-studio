import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/** About block matches Figma frame 655:1395 — 1232×571.61, absolute layout at min-[1232px]. */
export function LandingAbout() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className="flex w-full flex-col items-center px-6 py-[80px] md:px-12 xl:px-[344px]"
    >
      <div className="relative mx-auto flex w-full max-w-[1232px] flex-col items-center gap-10 min-[1232px]:block min-[1232px]:h-[571.61px] min-[1232px]:gap-0">
        {/* Eyebrow — center, top 0, gap 8px; dot 12×12 */}
        <div className="order-1 flex shrink-0 items-center justify-center gap-2 min-[1232px]:absolute min-[1232px]:left-1/2 min-[1232px]:top-0 min-[1232px]:-translate-x-1/2">
          <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
          <span className="text-[16px] leading-[19.2px] uppercase">About me</span>
        </div>

        {/* Title — left 113px, top 19.2px, pt 31.1px; inner max 1006, pb 120, px ~92.5 */}
        <div className="order-2 w-full min-[1232px]:absolute min-[1232px]:left-[113px] min-[1232px]:top-[19.2px] min-[1232px]:pt-[31.1px]">
          <div className="mx-auto flex w-full max-w-[1006px] flex-col items-center px-4 pb-20 min-[1232px]:px-0 min-[1232px]:pb-[120px] min-[1232px]:pl-[92.52px] min-[1232px]:pr-[92.53px]">
            <h2 className="font-display flex flex-col items-center gap-0 text-center text-[clamp(2.25rem,6vw,4.5rem)] font-normal leading-[1.15] uppercase min-[1232px]:text-[72px] min-[1232px]:leading-[115.2px]">
              <span className="text-gradient-display block">Design that means</span>
              <span className="text-gradient-display block">something</span>
            </h2>
          </div>
        </div>

        {/* Body — centered, top 401.61px, max 642, 16 / 24 */}
        <motion.p
          className="order-3 mx-auto w-full max-w-[642px] px-2 text-center text-[16px] leading-6 text-white min-[1232px]:absolute min-[1232px]:left-1/2 min-[1232px]:top-[401.61px] min-[1232px]:-translate-x-1/2 min-[1232px]:px-0"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          I&apos;m a developer who enjoys the craft of interfaces and product details. I blend layout, interaction, and
          implementation so what ships is easy to use, easy to read in the codebase, and aligned with what the team is
          trying to achieve.
        </motion.p>

        {/* CTA — left 528.44px, top 473.61px, wrapper pt 40; pill px 25 py 17, gap 12 */}
        <div className="order-4 min-[1232px]:absolute min-[1232px]:left-[528.44px] min-[1232px]:top-[473.61px] min-[1232px]:pt-[40px]">
          <a
            href="#about"
            className="relative inline-flex items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-[25px] py-[17px] text-[16px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset"
          >
            More about me
            <ArrowUpRight className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
