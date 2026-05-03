import { figma } from "@/data/figma-assets";
import { motion, useReducedMotion } from "framer-motion";

const shots = [
  figma.workGrid1,
  figma.workGrid2,
  figma.workGrid3,
  figma.workGrid4,
  figma.workGrid5,
  figma.workGrid6,
];

export function LandingOurWorks() {
  return (
    <section id="works" className="mx-auto flex w-full max-w-[1280px] flex-col px-6 pt-20 pb-10 md:px-6">
      <div className="sticky top-0 z-10 flex w-full flex-col items-center bg-[#04070a]/80 pb-8 backdrop-blur-md">
        <div className="mb-2 flex items-center gap-2">
          <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
          <span className="text-[15.3px] leading-[19.2px] uppercase">Selected work</span>
        </div>
        <div className="relative mx-auto w-full max-w-[1006px] pt-8 pb-24 text-center">
          <div className="pointer-events-none absolute inset-[12%_32%] z-0 hidden md:block">
            <img src={figma.aboutShape} alt="" className="size-full object-contain opacity-80" />
          </div>
          <h2 className="font-display relative z-10 text-[clamp(2rem,5vw,4.5rem)] leading-[1.2] font-normal md:text-[72px] md:leading-[115.2px]">
            <span className="text-gradient-display block">Interfaces built to</span>
            <span className="text-gradient-display block">perform&nbsp;&nbsp;not just to</span>
            <span className="text-gradient-display block">look good</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-24 lg:gap-40">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
          <WorkShot src={shots[0]} tall />
          <WorkShot src={shots[1]} tall />
        </div>
        <div className="flex justify-center">
          <div className="flex w-full max-w-[979px] flex-col justify-between gap-8 md:flex-row md:gap-0">
            <WorkShot src={shots[2]} />
            <WorkShot src={shots[3]} />
          </div>
        </div>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:gap-0">
          <WorkShot src={shots[4]} tall />
          <WorkShot src={shots[5]} tall />
        </div>
      </div>
    </section>
  );
}

function WorkShot({ src, tall }: { src: string; tall?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`relative mx-auto w-full overflow-hidden md:mx-0 ${tall ? "max-w-[446px]" : "max-w-[383px]"}`}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`relative w-full ${tall ? "aspect-[446/498]" : "aspect-[383/428]"}`}>
        <img src={src} alt="" className="absolute inset-0 size-full object-cover" />
      </div>
    </motion.div>
  );
}
