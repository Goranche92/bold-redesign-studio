import { figma } from "@/data/figma-assets";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    cat: "Branding",
    title: (
      <>
        Finaco — Mental Well-
        <br />
        Being Website
      </>
    ),
    body: (
      <>
        A calm, human-centered digital experience designed to support
        <br />
        emotional well-being through clarity, balance, and thoughtful
        <br />
        interaction.
      </>
    ),
    img: figma.project1,
  },
  {
    cat: "UI / UX Design",
    title: (
      <>
        Vudo — Mental Well-Being
        <br />
        Website
      </>
    ),
    body: (
      <>
        A calm, human-centered digital experience designed to support
        <br />
        emotional well-being through clarity, balance, and thoughtful
        <br />
        interaction.
      </>
    ),
    img: figma.project2,
  },
  {
    cat: "Development",
    title: (
      <>
        Photolab — Mental Well-
        <br />
        Being Website
      </>
    ),
    body: (
      <>
        A calm, human-centered digital experience designed to support
        <br />
        emotional well-being through clarity, balance, and thoughtful
        <br />
        interaction.
      </>
    ),
    img: figma.project3,
  },
];

export function LandingProjects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="mx-auto w-full max-w-[1232px] px-6 pt-24 pb-8 md:px-6 lg:pt-40">
      <div className="mb-8 flex items-center justify-center gap-2">
        <span className="size-3 shrink-0 rounded-full bg-[#f00862]" aria-hidden />
        <span className="text-[15.8px] leading-[19.2px] uppercase">Selected Work</span>
      </div>
      <h2 className="font-display text-center text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]">
        <span className="text-gradient-display">Highlighted projects</span>
      </h2>

      <div className="mt-12 flex flex-col gap-10">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className="grid overflow-hidden rounded-[40px] border border-[#272828] bg-gradient-to-br from-[rgba(89,186,251,0.18)] to-[#04070a] p-8 md:min-h-[524px] md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:p-[33px]"
          >
            <div className="flex flex-col justify-between gap-10">
              <div className="flex flex-col gap-4">
                <span className="inline-flex w-fit rounded-full border border-[rgba(89,186,251,0.35)] bg-[#04070a]/80 px-[13px] py-1.5 text-[12.5px] text-[#a5a5a5] backdrop-blur-[7.5px]">
                  {p.cat}
                </span>
                <h3 className="text-[clamp(1.5rem,3vw,2.4rem)] leading-[48px] font-normal capitalize">{p.title}</h3>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[14.5px] leading-6 text-white">{p.body}</p>
                <a
                  href="#works"
                  className="relative inline-flex w-fit items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] uppercase text-[#04070a] shadow-pill-inset"
                >
                  View Project
                  <ArrowUpRight className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
                </a>
              </div>
            </div>
            <div className="relative mt-8 min-h-[260px] md:mt-0 md:min-h-[458px]">
              <img src={p.img} alt="" className="absolute inset-0 size-full object-cover" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
