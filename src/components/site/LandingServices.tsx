import { figma } from "@/data/figma-assets";
import { motion, useReducedMotion } from "framer-motion";

const blurb = (
  <>
    I keep UX calm and readable, prioritize
    <br />
    performance and accessibility, and write
    <br />
    frontends that stay understandable for the
    <br />
    next person who opens the repo.
  </>
);

const rows = [
  { n: "01", title: "Branding", thumb: figma.serviceThumb1 },
  { n: "02", title: "UI / UX Design", thumb: figma.serviceThumb2 },
  { n: "03", title: "Development", thumb: figma.serviceThumb3 },
  { n: "04", title: "Consulting", thumb: figma.serviceThumb4 },
];

export function LandingServices() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="mx-auto w-full max-w-[1232px] px-6 pt-24 pb-8 md:px-6 lg:pt-40">
      <div className="mb-8 flex items-center gap-2">
        <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
        <span className="text-[15.3px] leading-[19.2px] uppercase">What I offer</span>
      </div>
      <h2 className="font-display mb-4 text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]">
        <span className="text-gradient-display block">End-to-end delivery</span>
        <span className="text-gradient-display block">from idea to UI</span>
      </h2>

      <ul className="mt-4 flex flex-col gap-6">
        {rows.map((row, i) => (
          <motion.li
            key={row.n}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
          >
            <a
              href="#works"
              className="relative grid min-h-[209px] w-full grid-cols-1 overflow-hidden rounded-2xl border border-[#272828] p-8 md:grid-cols-2"
            >
              <img
                src={figma.serviceRowBg}
                alt=""
                className="pointer-events-none absolute inset-0 size-full object-cover opacity-90"
              />
              <div className="relative z-10 flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-2">
                  <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
                  <span className="text-[24px] leading-[19.2px] text-white">{row.n}</span>
                </div>
                <span className="font-display text-[clamp(1.75rem,4vw,2.35rem)] leading-[48px] text-white uppercase">
                  {row.title}
                </span>
              </div>
              <div className="relative z-10 mt-6 flex items-center gap-6 md:mt-0 md:justify-end">
                <div className="h-[143px] w-[243px] shrink-0 overflow-hidden rounded-lg">
                  <img src={row.thumb} alt="" className="size-full object-cover" />
                </div>
                <div className="max-w-[280px] text-left text-[14.6px] leading-6 text-white md:text-right">{blurb}</div>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
