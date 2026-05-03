import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import { fadeUp, scaleIn, scrollViewport, stagger } from "./motion-presets";

export function About() {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.12)}
      className="relative px-6 py-20 md:py-24 lg:py-28 max-w-[1232px] mx-auto"
    >
      <motion.div variants={fadeUp} className="flex justify-center items-center gap-2 mb-10 md:mb-12">
        <span className="w-3 h-3 rounded-full bg-[#F00862] shrink-0" aria-hidden />
        <p className="text-base uppercase tracking-normal text-white font-sans leading-[19.2px]">About me</p>
      </motion.div>

      <div className="relative mx-auto max-w-[1006px] pb-6 md:pb-12">
        <motion.h2
          variants={fadeUp}
          className="relative z-10 font-display uppercase text-center text-gradient-display text-[clamp(2.25rem,6vw,72px)] leading-[1.08] md:leading-[115.2px] px-4 md:px-[92px] pt-6 md:pt-8 [text-wrap:balance]"
        >
          CODE THAT MEANS
          <br />
          SOMETHING
        </motion.h2>
        <motion.div variants={scaleIn} className="relative z-20 -mt-10 md:-mt-16 mx-auto w-[min(72vw,293px)] aspect-square">
          <img src={work1} alt="" loading="lazy" className="w-full h-full object-cover rounded-3xl glow" />
        </motion.div>
      </div>

      <motion.p
        variants={fadeUp}
        className="mx-auto max-w-[642px] text-center text-white font-sans text-base leading-6 md:leading-6 px-2"
      >
        I build thoughtful digital products end to end — UX flows, UI polish, and production-ready frontends. My
        process is direct: I listen, propose, implement, and iterate with you until the experience feels right for real
        users and real constraints.
      </motion.p>

      <motion.div variants={fadeUp} className="flex justify-center mt-10 md:mt-12">
        <a
          href="#contact"
          className="relative inline-flex items-center gap-3 rounded-full bg-white pl-[25px] pr-2 py-[17px] uppercase text-sm font-sans text-[#04070A] shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.4)] border-dashed hover:scale-[1.02] transition-transform"
        >
          Read more
          <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs">
            ↗
          </span>
        </a>
      </motion.div>
    </motion.section>
  );
}
