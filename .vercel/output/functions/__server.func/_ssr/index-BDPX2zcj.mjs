import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, u as useScroll, a as useTransform, A as AnimatePresence, b as useReducedMotion } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, a as ArrowRight, F as Facebook, I as Instagram, T as Twitter, L as Linkedin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.7, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-2 md:gap-3 text-foreground font-display text-lg sm:text-xl md:text-2xl tracking-tight",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-6 h-6 md:w-7 md:h-7 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-none", children: [
                "Goran ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Šantić" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-1 glass rounded-full px-2 py-2", children: ["Home", "About", "Project", "Services"].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "px-5 py-2 rounded-full text-sm text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors",
            children: item
          },
          item
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "group flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform",
            children: [
              "LET'S TALK",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs", children: "✕" })
            ]
          }
        )
      ]
    }
  );
}
const heroBg = "/assets/hero-gradient-CnsW5pqO.jpg";
const scrollViewport = { once: false, amount: 0.25 };
const scrollViewportLoose = { once: false, amount: 0.1 };
const ease = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};
const fadeUpSm = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } }
};
const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease } }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease } }
};
const stagger = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } }
});
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewportLoose,
      variants: stagger(0.15),
      className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-28 pb-28 md:pt-32 md:pb-36",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.32_340)] blur-[120px] opacity-60 animate-blob -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.28_255)] blur-[140px] opacity-60 animate-blob -z-10", style: { animationDelay: "4s" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h1,
            {
              variants: fadeUp,
              className: "font-display uppercase font-black leading-[0.85] text-foreground flex flex-col gap-5 md:gap-8",
              style: { fontSize: "clamp(4rem, 14vw, 14rem)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-6 flex-wrap", children: [
                  "Creative",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SeeProjectsBadge, {})
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient pt-1 md:pt-2", children: "Developer" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 md:mt-20 lg:mt-24 grid md:grid-cols-3 gap-12 md:gap-14 items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUpSm, className: "text-foreground/80 text-lg max-w-md leading-relaxed", children: "I help teams and founders ship interfaces that feel as good as they look — from UX and design systems to modern frontends, with a focus on performance and detail." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: scaleIn, className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contact", className: "flex items-center gap-3 bg-foreground text-primary-foreground pl-8 pr-2 py-2 rounded-full text-base font-medium hover:scale-105 transition-transform", children: [
              "LET'S TALK",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white", children: "✕" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { variants: fadeRight, className: "space-y-3 md:text-right text-foreground/90", children: ["Facebook", "Linkedin", "Instagram"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 hover:text-foreground/60 transition", children: [
              s,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "↗" })
            ] }) }, s)) })
          ] })
        ] })
      ]
    }
  );
}
function SeeProjectsBadge() {
  const text = "• SEE PROJECTS • SEE PROJECTS ";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex relative w-[140px] h-[140px] md:w-[180px] md:h-[180px] glass rounded-full items-center justify-center shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "absolute inset-0 w-full h-full animate-spin-slow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { id: "circle", d: "M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "white", fontSize: "14", fontFamily: "var(--font-sans)", letterSpacing: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textPath", { href: "#circle", children: text + text }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: "↓" })
  ] });
}
const work1 = "/assets/work-1-DTJH4IxY.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewport,
      variants: stagger(0.15),
      className: "relative px-6 py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-sm uppercase tracking-widest text-foreground/60 mb-10 md:mb-14", children: "— About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12 md:gap-x-16 md:gap-y-20 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              variants: fadeUp,
              className: "md:col-span-8 font-display uppercase font-black leading-[1.02] tracking-tight text-foreground [text-wrap:balance]",
              style: { fontSize: "clamp(2.5rem, 7vw, 7rem)" },
              children: [
                "Design & code that ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "mean" }),
                " something"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: scaleIn, className: "md:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: work1, alt: "Iridescent abstract sculpture", loading: "lazy", className: "w-full rounded-3xl glow" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-16 md:mt-20 max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed", children: "I'm Goran — a freelance developer and designer. I partner directly with clients on products and marketing sites: UX flows, UI craft, design systems, and production-ready frontends. No agency overhead — just clear communication, fast iteration, and work meant to ship." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { variants: fadeUp, href: "#contact", className: "mt-10 md:mt-12 inline-flex items-center gap-3 text-foreground hover:text-accent transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: "Let's talk" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-10 h-10 items-center justify-center rounded-full border border-white/20", children: "↗" })
        ] })
      ]
    }
  );
}
function Marquee() {
  const items = ["BRANDING", "UI / UX", "DEVELOPMENT", "ILLUSTRATION", "MOTION", "STRATEGY"];
  const row = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-white/10 py-12 md:py-14 my-4 md:my-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap gap-12", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display uppercase text-5xl md:text-7xl text-foreground/90 flex items-center gap-12", children: [
    t,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "✦" })
  ] }, i)) }) });
}
const work2 = "/assets/work-2-DU1Qg24r.jpg";
const work3 = "/assets/work-3-DRWqo5d8.jpg";
const works = [
  { n: "01", tag: "Branding", title: "Finacoo", year: "2025", img: work1 },
  { n: "02", tag: "UI / UX", title: "Avionix", year: "2025", img: work2 },
  { n: "03", tag: "Development", title: "Photolab", year: "2024", img: work3 },
  { n: "04", tag: "Motion", title: "Rowters", year: "2024", img: work2 },
  { n: "05", tag: "Illustration", title: "Kairo", year: "2024", img: work1 },
  { n: "06", tag: "Web Design", title: "Nebula", year: "2023", img: work3 }
];
const rows = [
  [works[0], works[1]],
  [works[2], works[3]],
  [works[4], works[5]]
];
function OurWorks() {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["14vh", "-28vh"]);
  const rowY0 = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const rowY1 = useTransform(scrollYProgress, [0, 1], ["2%", "-10%"]);
  const rowY2 = useTransform(scrollYProgress, [0, 1], ["4%", "-15%"]);
  const rowYs = [rowY0, rowY1, rowY2];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      ref: containerRef,
      className: "relative px-6 py-10 md:py-14",
      "aria-label": "Our Works",
      style: { height: "420vh" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 min-h-screen w-full overflow-hidden flex flex-col isolate py-6 md:py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed",
            style: { backgroundImage: `url(${heroBg})` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/95 via-background/88 to-background/95" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-black/55" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 backdrop-blur-[2px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h2",
          {
            className: "font-display uppercase font-black text-foreground/[0.06] whitespace-nowrap select-none",
            style: { fontSize: "clamp(6rem, 18vw, 18rem)", letterSpacing: "-0.04em" },
            children: "DESIGN BUILT"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: scrollViewport,
            variants: stagger(0.1),
            className: "text-center relative z-10 shrink-0 pb-6 md:pb-8",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                variants: fadeUp,
                className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-magenta" }),
                  "Our Works"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { y: gridY },
            className: "relative z-10 flex-1 flex items-center w-full max-w-[1400px] mx-auto px-1 md:px-2",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col gap-8 md:gap-10 lg:gap-12", children: rows.map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                style: { y: rowYs[ri] },
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
                children: row.map((w) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkCard, { work: w }, w.n))
              },
              ri
            )) })
          }
        )
      ] })
    }
  );
}
function WorkCard({ work }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative aspect-[5/4] rounded-3xl overflow-hidden bg-card border border-white/15 shadow-2xl ring-1 ring-white/[0.06]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: work.img, alt: work.title, loading: "lazy", className: "w-full h-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-background/25 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-5 md:p-7 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs uppercase tracking-widest text-foreground/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          work.n,
          " — ",
          work.tag
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: work.year })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "h3",
        {
          className: "font-display uppercase leading-[0.9] text-foreground",
          style: { fontSize: "clamp(1.5rem, 3.5vw, 3rem)" },
          children: work.title
        }
      )
    ] })
  ] });
}
const projects = [
  {
    tag: "Branding",
    title: "Finaco — Mental Well-Being Website",
    desc: "A calm, human-centered digital experience designed to support emotional well-being through clarity, balance, and thoughtful interaction.",
    img: work2
  },
  {
    tag: "UI / UX Design",
    title: "Vudo — Fintech Identity System",
    desc: "A confident financial brand built around clarity, motion, and trust — from logo system to product UI.",
    img: work1
  },
  {
    tag: "Development",
    title: "Photolab — Visual Storytelling Site",
    desc: "A high-performance editorial platform built to showcase imagery with cinematic transitions and butter-smooth scroll.",
    img: work3
  }
];
function stackedAmount(progress, index, total) {
  if (index >= total - 1) return 0;
  const handoff = (index + 1) / total;
  const blend = 0.1;
  if (progress <= handoff - blend) return 0;
  if (progress >= handoff + blend) return 1;
  const t = (progress - (handoff - blend)) / (2 * blend);
  return Math.min(1, Math.max(0, t));
}
function HighlightedProjects() {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative px-6 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 max-w-[1400px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { ...scrollViewport, once: true },
        variants: stagger(0.12),
        className: "text-center mb-20 md:mb-28",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.p,
            {
              variants: fadeUp,
              className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 mb-10 md:mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-magenta" }),
                "Selected Work"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              variants: fadeUp,
              className: "font-display uppercase font-black leading-[0.9] text-foreground",
              style: { fontSize: "clamp(3rem, 9vw, 9rem)" },
              children: [
                "Highlighted ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Projects" })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref: containerRef,
        className: "relative [perspective:1800px] [perspective-origin:50%_0%]",
        style: { paddingBottom: "min(36vh, 380px)" },
        children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          ProjectCard,
          {
            project: p,
            index: i,
            total: projects.length,
            progress: scrollYProgress
          },
          p.title
        ))
      }
    )
  ] });
}
function ProjectCard({
  project,
  index,
  total,
  progress
}) {
  const reduce = useReducedMotion();
  const stack = useTransform(
    progress,
    (v) => reduce ? 0 : stackedAmount(v, index, total)
  );
  const scale = useTransform(stack, [0, 1], [1, 0.86]);
  const opacity = useTransform(stack, [0, 1], [1, 0.48]);
  const rotateX = useTransform(stack, [0, 1], [0, -10]);
  const rotateY = useTransform(stack, [0, 1], [0, index % 2 === 0 ? 10 : -10]);
  const y = useTransform(stack, [0, 1], [0, -14]);
  const z = useTransform(stack, [0, 1], [0, -80]);
  const rimOpacity = useTransform(stack, [0, 1], [0, 0.55]);
  const imgScale = useTransform(stack, [0, 1], [1, 1.06]);
  const isLast = index === total - 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "sticky flex justify-center",
      style: {
        top: `calc(max(5rem, env(safe-area-inset-top, 0px) + 4.5rem) + ${index * 18}px)`,
        marginBottom: isLast ? "min(38vh, 400px)" : "min(52vh, 540px)",
        zIndex: 10 + index
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.article,
        {
          style: {
            scale: reduce ? 1 : scale,
            opacity: reduce ? 1 : opacity,
            rotateX: reduce ? 0 : rotateX,
            rotateY: reduce ? 0 : rotateY,
            y: reduce ? 0 : y,
            translateZ: reduce ? 0 : z,
            transformStyle: "preserve-3d",
            width: "100%",
            maxWidth: "1400px"
          },
          className: "relative grid md:grid-cols-12 gap-10 md:gap-12 items-stretch rounded-[2rem] border border-white/10 bg-card p-8 md:p-12 lg:p-14 overflow-hidden shadow-2xl ring-1 ring-white/[0.06] origin-[center_top] will-change-transform",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                className: "pointer-events-none absolute inset-0 rounded-[2rem]",
                style: {
                  opacity: reduce ? 0 : rimOpacity,
                  boxShadow: "inset 0 0 60px rgba(0,0,0,0.35)"
                },
                "aria-hidden": true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative md:col-span-5 flex flex-col justify-between gap-10 z-[1]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-4 py-1.5 rounded-full border border-white/15 text-xs uppercase tracking-widest text-foreground/80", children: project.tag }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h3",
                  {
                    className: "font-display uppercase leading-[0.95] text-foreground",
                    style: { fontSize: "clamp(1.75rem, 2.6vw, 2.75rem)" },
                    children: project.title
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 text-base md:text-lg max-w-md", children: project.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#",
                    className: "group inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-foreground text-background font-medium uppercase tracking-widest text-sm w-fit hover:bg-foreground/90 transition",
                    children: [
                      "View Project",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-9 h-9 items-center justify-center rounded-full bg-background text-foreground transition group-hover:rotate-45", children: "↗" })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative md:col-span-7 z-[1]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group h-full overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.img,
              {
                src: project.img,
                alt: project.title,
                loading: "lazy",
                className: "w-full h-full min-h-[320px] md:min-h-[460px] object-cover",
                style: { scale: reduce ? 1 : imgScale }
              }
            ) }) })
          ]
        }
      )
    }
  );
}
const stats = [
  { value: "120+", label: "Projects delivered across digital and brand experiences" },
  { value: "35+", label: "Industries supported through strategic design solutions" },
  { value: "12", label: "Years of hands-on experience shaping meaningful identities" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewport,
      variants: stagger(0.12),
      className: "relative px-6 py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "text-sm uppercase tracking-widest text-foreground/60 mb-8 md:mb-10", children: "— Milestones" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h2,
          {
            variants: fadeUp,
            className: "font-display uppercase font-black leading-[0.9] text-foreground max-w-5xl",
            style: { fontSize: "clamp(2.5rem, 6vw, 6rem)" },
            children: [
              "Creativity with ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "real-world" }),
              " results"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-12", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "glass rounded-3xl p-8 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl md:text-8xl text-gradient", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed", children: s.label })
        ] }, i)) })
      ]
    }
  );
}
const t1 = "/assets/testimonial-1-BsWbVJVR.jpg";
const t2 = "/assets/testimonial-2-BPBuJbGr.jpg";
const t3 = "/assets/testimonial-3-CzDBc7ob.jpg";
const testimonials = [
  {
    quote: "Working with Goran felt effortless. He understood our vision quickly and translated it into a design that was both clear and impactful. The process was smooth, and the results exceeded our expectations.",
    name: "Alex Morgan",
    role: "Founder, Zyra Music Platform",
    img: t1
  },
  {
    quote: "From the first call to the final handoff, the team brought clarity and craft to every detail. Our brand finally feels like ourselves — confident, modern, and unmistakably us.",
    name: "Sara Lindqvist",
    role: "Head of Brand, Nordlys Studio",
    img: t2
  },
  {
    quote: "Strategy, design, and motion all moving in the same direction. The launch performed beyond our targets and the visual system still feels fresh months later.",
    name: "Marko Petrov",
    role: "CEO, Helix Labs",
    img: t3
  }
];
const AUTOPLAY_MS = 6e3;
function Testimonial() {
  const [index, setIndex] = reactExports.useState(0);
  const [isHover, setIsHover] = reactExports.useState(false);
  const next = reactExports.useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );
  const prev = reactExports.useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    []
  );
  reactExports.useEffect(() => {
    if (isHover) return;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [isHover, next, index]);
  const active = testimonials[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewport,
      variants: stagger(0.12),
      className: "relative px-6 py-24 md:py-32 lg:py-40 max-w-[1400px] mx-auto",
      "aria-label": "Testimonials",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: fadeUp,
            className: "flex items-center justify-between mb-10 md:mb-12 flex-wrap gap-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/80", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-magenta" }),
                "Testimonial"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: prev,
                    "aria-label": "Previous testimonial",
                    className: "inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: next,
                    "aria-label": "Next testimonial",
                    className: "inline-flex w-12 h-12 items-center justify-center rounded-full border border-white/20 hover:border-white/60 hover:bg-white/5 transition",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            variants: fadeUp,
            onMouseEnter: () => setIsHover(true),
            onMouseLeave: () => setIsHover(false),
            className: "relative grid md:grid-cols-2 gap-8 md:gap-0 rounded-[2rem] bg-card border border-white/10 overflow-hidden min-h-[520px] md:min-h-[600px] mt-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-20 top-0 h-full w-2/3 bg-gradient-to-l from-electric/30 via-electric/10 to-transparent blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  className: "relative z-10 p-8 md:p-14 flex flex-col justify-center",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "blockquote",
                    {
                      className: "text-foreground leading-[1.25]",
                      style: { fontSize: "clamp(1.25rem, 1.9vw, 2rem)" },
                      children: [
                        "“",
                        active.quote,
                        "”"
                      ]
                    }
                  )
                },
                `text-${index}`
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[360px] md:min-h-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.img,
                  {
                    src: active.img,
                    alt: active.name,
                    loading: "lazy",
                    width: 1024,
                    height: 1024,
                    initial: { opacity: 0, scale: 1.05 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 1.02 },
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                    className: "absolute inset-0 w-full h-full object-cover"
                  },
                  `img-${index}`
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/80" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -12 },
                    transition: { duration: 0.5 },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "font-display uppercase font-black text-magenta leading-none",
                          style: { fontSize: "clamp(1.75rem, 3vw, 3rem)" },
                          children: active.name
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-foreground/80", children: active.role })
                    ]
                  },
                  `name-${index}`
                ) }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex items-center justify-center gap-3", children: testimonials.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: () => setIndex(i),
            "aria-label": `Go to testimonial ${i + 1}`,
            className: `h-1.5 rounded-full transition-all ${i === index ? "w-10 bg-magenta" : "w-4 bg-white/20 hover:bg-white/40"}`
          },
          i
        )) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "footer",
    {
      id: "contact",
      className: "relative mt-24 md:mt-32 px-6 py-20 md:py-28 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full bg-magenta/25 blur-[140px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full bg-electric/25 blur-[150px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1400px] mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10 md:gap-12 pb-12 md:pb-14 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2", children: "Call Today" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "tel:+12456567987",
                  className: "text-magenta text-lg md:text-xl hover:opacity-80 transition",
                  children: "+12 456 567 987"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:hello@boldonse.com",
                  className: "text-magenta text-lg md:text-xl hover:opacity-80 transition",
                  children: "hello@boldonse.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2", children: "Admin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:support@boldonse.com",
                  className: "text-magenta text-lg md:text-xl hover:opacity-80 transition",
                  children: "support@boldonse.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 md:py-28 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              className: "font-display uppercase font-black leading-[0.85] text-foreground text-center",
              style: { fontSize: "clamp(4rem, 18vw, 18rem)", letterSpacing: "-0.03em" },
              children: "LET'S–TALK"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/70", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed by Wroney Powerd by Webflow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "X", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Twitter, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "LinkedIn", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex md:justify-end gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline underline-offset-4 hover:text-foreground transition", children: "License" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline underline-offset-4 hover:text-foreground transition", children: "Styleguide" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "underline underline-offset-4 hover:text-foreground transition", children: "Chancelog" }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-background text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OurWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
