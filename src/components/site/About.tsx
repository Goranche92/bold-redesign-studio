import { motion } from "framer-motion";
import work1 from "@/assets/work-1.jpg";
import { fadeUp, scaleIn, scrollViewport, stagger } from "./motion-presets";

export function About() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={scrollViewport}
      variants={stagger(0.15)}
      className="relative px-6 py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto"
    >
      <motion.p variants={fadeUp} className="text-sm uppercase tracking-widest text-foreground/60 mb-10 md:mb-14">
        — About
      </motion.p>
      <div className="grid md:grid-cols-12 gap-12 md:gap-x-16 md:gap-y-20 items-end">
        <motion.h2
          variants={fadeUp}
          className="md:col-span-8 font-display uppercase font-black leading-[1.08] tracking-tight text-foreground [text-wrap:balance]"
        >
          Design &amp; code that <span className="text-gradient">mean</span> something
        </motion.h2>
        <motion.div variants={scaleIn} className="md:col-span-4">
          <img src={work1} alt="Iridescent abstract sculpture" loading="lazy" className="w-full rounded-3xl glow" />
        </motion.div>
      </div>
      <motion.p variants={fadeUp} className="mt-16 md:mt-20 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
        I&apos;m Goran — a freelance developer and designer. I partner directly with clients on products and marketing sites: UX flows, UI craft, design systems, and production-ready frontends. No agency overhead — just clear communication, fast iteration, and work meant to ship.
      </motion.p>
      <motion.a variants={fadeUp} href="#contact" className="mt-10 md:mt-12 inline-flex items-center gap-3 text-foreground hover:text-accent transition">
        <span className="font-medium">Let&apos;s talk</span>
        <span className="inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/20">↗</span>
      </motion.a>
    </motion.section>
  );
}
