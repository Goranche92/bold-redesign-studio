import { figma } from "@/data/figma-assets";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const social = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export function LandingHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden px-6 py-[120px] md:px-12 md:py-[160px] xl:px-[344px] xl:py-[192px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute top-[-7%] left-0 h-[114%] w-full max-w-none object-cover opacity-90"
            src={figma.heroBgA}
          />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt=""
            className="absolute top-[-7%] left-0 h-[114%] w-full max-w-none object-cover mix-blend-screen opacity-80"
            src={figma.heroBgB}
          />
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1232px] gap-10 lg:grid-cols-[1fr_auto] lg:gap-4">
        <div className="flex max-w-[972px] flex-col gap-12 lg:gap-[60px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12">
            <h1 className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.95] font-normal tracking-[0.02em] uppercase">
              Creative
            </h1>
            <a
              href="#works"
              className="relative mx-auto flex size-[144px] shrink-0 items-center justify-center lg:mx-0"
              aria-label="See projects"
            >
              <span className="absolute flex size-[203px] items-center justify-center mix-blend-lighten">
                <span className="relative flex size-[144px] rotate-[138.79deg]">
                  <img src={figma.seeProjectsBadge} alt="" className="size-full max-w-none object-contain" />
                </span>
              </span>
            </a>
          </div>
          <div className="font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.95] font-normal tracking-[0.02em] uppercase">
            <span className="text-gradient-display">Developer</span>
          </div>

          <div className="flex max-w-[691px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
            <p className="max-w-[420px] text-[18px] leading-[27px] text-white">
              I turn ideas into working software — from UI polish and product flows to solid frontends — with a focus on
              clarity, performance, and code you can build on.
            </p>
            <a
              href="#contact"
              className="relative inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset sm:self-auto"
            >
              Let&apos;s Talk
              <ArrowUpRight className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
            </a>
          </div>
        </div>

        <motion.div
          className="flex flex-col justify-end gap-4 pt-8 lg:max-w-[243px] lg:pt-[469px]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {social.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-[16px] leading-[19.2px] text-white hover:opacity-80"
            >
              {s.label}
              <ArrowUpRight className="size-3 shrink-0 opacity-70" strokeWidth={2} aria-hidden />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
