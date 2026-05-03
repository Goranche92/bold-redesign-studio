import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as motion, u as useScroll, a as useTransform, A as AnimatePresence, b as useReducedMotion } from "../_libs/framer-motion.mjs";
import { C as ChevronDown, A as ArrowLeft, a as ArrowRight, G as Github, L as Linkedin, I as Instagram } from "../_libs/lucide-react.mjs";
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
const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];
function Navbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -24, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: "fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[oklch(0.05_0.02_280/0.72)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-4 md:px-6 h-[90px] flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "flex items-center gap-3 text-foreground font-sans font-medium text-base md:text-lg shrink-0",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-tight tracking-tight", children: [
                "Goran ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Šantić" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center justify-center flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full px-2 py-2", children: [
          nav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: item.href,
              className: "px-4 py-2 rounded-full text-sm text-foreground/85 hover:text-foreground hover:bg-white/10 transition-colors font-sans",
              children: item.label
            },
            item.label
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#services",
              className: "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-foreground/85 hover:text-foreground hover:bg-white/10 transition-colors font-sans",
              children: [
                "Services",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "w-4 h-4 opacity-70", "aria-hidden": true })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "relative inline-flex items-center gap-3 shrink-0 rounded-full bg-white pl-[25px] pr-2 py-[17px] text-[#04070A] font-sans text-sm uppercase shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.35)] border-dashed hover:scale-[1.02] transition-transform",
            children: [
              "Let's Talk",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs", children: "↗" })
            ]
          }
        )
      ] })
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
      id: "top",
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewportLoose,
      variants: stagger(0.15),
      className: "relative min-h-screen w-full overflow-hidden flex flex-col justify-center px-6 pt-32 pb-24 md:px-12 lg:px-[min(344px,18vw)] md:pt-40 md:pb-32",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroBg, alt: "", className: "w-full h-full object-cover opacity-90" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full bg-[oklch(0.55_0.32_340)] blur-[120px] opacity-60 animate-blob -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[oklch(0.5_0.28_255)] blur-[140px] opacity-60 animate-blob -z-10",
            style: { animationDelay: "4s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1232px] mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full lg:grid-cols-[minmax(0,1fr)_minmax(0,0.28fr)] lg:gap-x-4 items-end", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-[60px] w-full min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { variants: fadeUp, className: "flex flex-col gap-12 w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-wrap items-center gap-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase text-white !tracking-[2.08px] text-[clamp(3rem,10vw,104px)] leading-[1.08] md:leading-[208px]", children: "CREATIVE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(SeeProjectsBadge, {})
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display uppercase font-normal text-gradient-display !tracking-[2.08px] text-[clamp(3rem,10vw,104px)] leading-[1.08] md:leading-[166.4px]", children: "DEVELOPER" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full max-w-[691px] grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-6 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.p,
                {
                  variants: fadeUpSm,
                  className: "text-white text-[18px] leading-[27px] max-w-[510px] min-w-0 text-left font-sans",
                  children: "I'm Goran — I turn product ideas into shipped web interfaces: clear UX, solid frontends, and maintainable code. I work directly with founders and teams — no agency layer — from first sketch to deploy."
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: scaleIn, className: "flex sm:justify-end sm:items-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#contact",
                  className: "relative inline-flex items-center gap-3 rounded-full bg-white pl-[25px] pr-2 py-[17px] text-foreground shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.4)] border-dashed font-sans text-base uppercase text-[#04070A] hover:scale-[1.02] transition-transform",
                  children: [
                    "Let's Talk",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-sm", children: "↗" })
                  ]
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.ul,
            {
              variants: fadeRight,
              className: "mt-12 lg:mt-0 flex flex-col gap-4 items-start lg:items-end lg:justify-end lg:pb-1",
              children: [
                { label: "LinkedIn", href: "https://www.linkedin.com/" },
                { label: "GitHub", href: "https://github.com/" },
                { label: "Instagram", href: "https://www.instagram.com/" }
              ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: s.href,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-3 text-white font-sans text-base leading-[19.2px] hover:opacity-70 transition",
                  children: [
                    s.label,
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-80", children: "↗" })
                  ]
                }
              ) }, s.label))
            }
          )
        ] }) })
      ]
    }
  );
}
function SeeProjectsBadge() {
  const text = "• SEE PROJECTS • SEE PROJECTS ";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#work", className: "inline-flex relative w-[144px] h-[144px] glass rounded-full items-center justify-center shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 200", className: "absolute inset-0 w-full h-full animate-spin-slow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { id: "hero-circle", d: "M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { fill: "white", fontSize: "14", fontFamily: "var(--font-sans)", letterSpacing: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textPath", { href: "#hero-circle", children: text + text }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl relative z-[1]", children: "↓" })
  ] });
}
const work1 = "/assets/work-1-DTJH4IxY.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      id: "about",
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewport,
      variants: stagger(0.12),
      className: "relative px-6 py-20 md:py-24 lg:py-28 max-w-[1232px] mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex justify-center items-center gap-2 mb-10 md:mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-[#F00862] shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base uppercase tracking-normal text-white font-sans leading-[19.2px]", children: "About me" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-[1006px] pb-6 md:pb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              variants: fadeUp,
              className: "relative z-10 font-display uppercase text-center text-gradient-display text-[clamp(2.25rem,6vw,72px)] leading-[1.08] md:leading-[115.2px] px-4 md:px-[92px] pt-6 md:pt-8 [text-wrap:balance]",
              children: [
                "CODE THAT MEANS",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "SOMETHING"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: scaleIn, className: "relative z-20 -mt-10 md:-mt-16 mx-auto w-[min(72vw,293px)] aspect-square", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: work1, alt: "", loading: "lazy", className: "w-full h-full object-cover rounded-3xl glow" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            variants: fadeUp,
            className: "mx-auto max-w-[642px] text-center text-white font-sans text-base leading-6 md:leading-6 px-2",
            children: "I build thoughtful digital products end to end — UX flows, UI polish, and production-ready frontends. My process is direct: I listen, propose, implement, and iterate with you until the experience feels right for real users and real constraints."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "flex justify-center mt-10 md:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#contact",
            className: "relative inline-flex items-center gap-3 rounded-full bg-white pl-[25px] pr-2 py-[17px] uppercase text-sm font-sans text-[#04070A] shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.4)] border-dashed hover:scale-[1.02] transition-transform",
            children: [
              "Read more",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-9 h-9 items-center justify-center rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs", children: "↗" })
            ]
          }
        ) })
      ]
    }
  );
}
function Marquee() {
  const items = [
    "REACT",
    "TYPESCRIPT",
    "TANSTACK",
    "PERFORMANCE",
    "A11Y",
    "DESIGN SYSTEMS",
    "NODE",
    "APIs"
  ];
  const row = [...items, ...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-[#202020] py-10 md:py-12 my-2 md:my-4 overflow-hidden bg-[oklch(0.05_0.02_280)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap gap-6 md:gap-10", children: row.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "font-sans uppercase font-semibold text-4xl md:text-6xl lg:text-7xl text-foreground/90 flex items-center gap-6 md:gap-10",
      children: [
        t,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "✦" })
      ]
    },
    `${t}-${i}`
  )) }) });
}
const LANDING_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=960&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=960&q=80&auto=format&fit=crop"
];
const works = [
  { n: "01", tag: "SaaS", title: "Northwind Analytics", year: "2025", img: LANDING_IMAGES[0] },
  { n: "02", tag: "Fintech", title: "Ledger Flow App", year: "2025", img: LANDING_IMAGES[1] },
  { n: "03", tag: "Dev tools", title: "CloudForge CLI", year: "2024", img: LANDING_IMAGES[2] },
  { n: "04", tag: "E‑commerce", title: "Studio Cart", year: "2024", img: LANDING_IMAGES[3] },
  { n: "05", tag: "Creative", title: "Pulse Agency Site", year: "2024", img: LANDING_IMAGES[4] },
  { n: "06", tag: "Product", title: "Nova Health Portal", year: "2023", img: LANDING_IMAGES[5] }
];
const rows = [
  [works[0], works[1]],
  [works[2], works[3]],
  [works[4], works[5]]
];
const SECTION_SCROLL_VH = 520;
function OurWorks() {
  const containerRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const cardsY = useTransform(scrollYProgress, [0.05, 1], ["48vh", "-228vh"]);
  const titleBlurPx = useTransform(scrollYProgress, [0.1, 0.26, 0.9], [0, 15, 18]);
  const titleFilter = useTransform(titleBlurPx, (b) => `blur(${b.toFixed(1)}px)`);
  const titleOpacity = useTransform(scrollYProgress, [0.88, 1], [1, 0.82]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "work",
      ref: containerRef,
      className: "relative px-6 py-10 md:py-14",
      "aria-label": "Our Works",
      style: { height: `${SECTION_SCROLL_VH}vh` },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 h-[100dvh] w-full overflow-x-hidden isolate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed",
            style: { backgroundImage: `url(${heroBg})` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-b from-background/96 via-background/90 to-background/96" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-black/60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 backdrop-blur-[2px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: scrollViewport,
            variants: stagger(0.08),
            className: "relative z-20 pt-8 md:pt-10 text-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.p,
              {
                variants: fadeUp,
                className: "inline-flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/75 mb-6 md:mb-8",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-magenta" }),
                  "Our works"
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { filter: titleFilter, opacity: titleOpacity },
            className: "pointer-events-none absolute left-0 right-0 top-[7.5rem] md:top-[8.5rem] z-40 px-4 text-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display uppercase font-black leading-[1.08] text-gradient-display mx-auto max-w-5xl drop-shadow-[0_2px_28px_rgba(0,0,0,0.45)] [text-wrap:balance]", children: [
              "Code built to perform",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-3 md:mt-5", children: "not just to ship" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            style: { y: cardsY },
            className: "absolute left-0 right-0 top-0 z-10 pt-[min(42vh,340px)] md:pt-[min(38vh,300px)] px-2 md:px-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-full max-w-[1200px] flex flex-col gap-8 md:gap-10 lg:gap-12", children: rows.map((row, ri) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10",
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: work.img,
        alt: `${work.title} landing page preview`,
        loading: "lazy",
        decoding: "async",
        className: "w-full h-full object-cover"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-5 md:p-7 flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs uppercase tracking-widest text-foreground/85", children: [
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
          className: "font-display uppercase leading-[0.92] text-foreground pr-2",
          style: { fontSize: "clamp(1.35rem, 3vw, 2.25rem)" },
          children: work.title
        }
      )
    ] })
  ] });
}
const work2 = "/assets/work-2-DU1Qg24r.jpg";
const work3 = "/assets/work-3-DRWqo5d8.jpg";
const services = [
  {
    n: "01",
    title: "Frontend engineering",
    desc: "React / TypeScript interfaces, routing, animation, and state that stay understandable as products grow.",
    img: work1
  },
  {
    n: "02",
    title: "APIs & integrations",
    desc: "REST and client-side data layers, auth flows, and third-party services wired safely into the UI.",
    img: work2
  },
  {
    n: "03",
    title: "UI implementation",
    desc: "Figma to code with spacing, motion, and components that match the design system — without fragile hacks.",
    img: work3
  },
  {
    n: "04",
    title: "Performance & quality",
    desc: "Lazy loading, bundle discipline, accessibility checks, and polish so launches feel fast on real devices.",
    img: work3
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "relative px-6 pt-24 md:pt-32 pb-8 max-w-[1232px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: scrollViewport,
        variants: stagger(0.1),
        className: "flex items-center gap-2 mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-[#F00862] shrink-0", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] uppercase text-white font-sans leading-[19.2px]", children: "What I do" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.h2,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: scrollViewport,
        variants: fadeUp,
        className: "font-display uppercase text-gradient-display text-[clamp(2rem,5vw,72px)] leading-[1.08] md:leading-[115.2px] max-w-[1100px]",
        children: [
          "FROM PROTOTYPE",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "TO PRODUCTION"
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.ul,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: scrollViewport,
        variants: stagger(0.08),
        className: "mt-10 md:mt-12 flex flex-col gap-6",
        children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.li, { variants: fadeUp, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#contact",
            className: "group block rounded-2xl border border-[#272828] bg-[oklch(0.07_0.02_280)] p-6 md:p-8 hover:border-white/25 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6 md:gap-8 items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-6 md:gap-8 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-3 h-3 rounded-full bg-[#F00862]", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-[19.7px] text-white tabular-nums", children: s.n })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans uppercase text-white text-[clamp(1.5rem,3.5vw,2.35rem)] leading-tight tracking-tight", children: s.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-[minmax(0,220px)_1fr] gap-5 items-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] rounded-lg overflow-hidden border border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: "", loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition duration-700" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/75 font-sans text-base leading-relaxed", children: s.desc })
              ] })
            ] })
          }
        ) }, s.n))
      }
    )
  ] });
}
const projects = [
  {
    tag: "Product UI",
    title: "SaaS dashboard — analytics & billing",
    desc: "Role: lead frontend. Dense tables, filters, and charts with optimistic updates and accessible keyboard flows — shipped for a small product team.",
    img: work2
  },
  {
    tag: "Marketing site",
    title: "Founder landing — motion & storytelling",
    desc: "Role: design + build. Scroll-driven narrative, CMS-friendly sections, and performance budget so Lighthouse stayed in the green.",
    img: work1
  },
  {
    tag: "Design system",
    title: "Component library — tokens to code",
    desc: "Role: implementation partner. Mapped tokens to CSS variables, documented patterns, and cut duplicate UI work for the next two releases.",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "relative px-6 pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 max-w-[1232px] mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: { ...scrollViewport, once: true },
        variants: stagger(0.12),
        className: "text-center",
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.h2,
            {
              variants: fadeUp,
              className: "font-display uppercase font-normal leading-[1.08] text-gradient-display max-w-[1100px] mx-auto [text-wrap:balance]",
              children: "HIGHLIGHTED PROJECTS"
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
  { value: "40+", label: "Shipped interfaces — from marketing sites to product dashboards" },
  { value: "8+", label: "Years writing production TypeScript and React" },
  { value: "1:1", label: "How I work with you — direct updates, no account-manager telephone game" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.section,
    {
      initial: "hidden",
      whileInView: "show",
      viewport: scrollViewport,
      variants: stagger(0.12),
      className: "relative px-6 py-24 md:py-32 max-w-[1232px] mx-auto",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { variants: fadeUp, className: "flex items-center gap-2 text-sm uppercase tracking-widest text-foreground/70 mb-8 md:mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-magenta shrink-0", "aria-hidden": true }),
          "Proof points"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h2,
          {
            variants: fadeUp,
            className: "font-display uppercase font-black leading-[1.08] max-w-5xl text-gradient-display",
            children: "BUILDING WITH CLARITY & CRAFT"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 md:mt-24 grid md:grid-cols-3 gap-10 md:gap-12", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "glass rounded-3xl p-8 md:p-10 border border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-sans font-bold text-7xl md:text-8xl text-gradient tabular-nums", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-foreground/70 leading-relaxed font-sans", children: s.label })
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
    quote: "From the first call to the final handoff, Goran brought clarity and craft to every detail. Our brand finally feels like ourselves — confident, modern, and unmistakably us.",
    name: "Sara Lindqvist",
    role: "Head of Brand, Nordlys Studio",
    img: t2
  },
  {
    quote: "Strategy, UX, and frontend execution all moved in the same direction. The launch performed beyond our targets and the interface still feels fast months later.",
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
                          className: "font-sans uppercase font-bold text-magenta leading-none tracking-tight",
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1232px] mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-10 md:gap-12 pb-12 md:pb-14 border-b border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2 font-sans", children: "Call" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+0000000000", className: "text-magenta text-lg md:text-xl hover:opacity-80 transition font-sans", children: "+00 000 000 000" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/50 font-sans", children: "Replace with your number" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2 font-sans", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "mailto:hello@example.com",
                  className: "text-magenta text-lg md:text-xl hover:opacity-80 transition font-sans",
                  children: "hello@example.com"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/50 font-sans", children: "Swap for your real address" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/70 mb-2 font-sans", children: "Availability" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-magenta text-lg md:text-xl font-sans", children: "Freelance / contract" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-foreground/50 font-sans", children: "EU timezones" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-20 md:py-28 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display uppercase font-black leading-[1.08] text-foreground text-center tracking-tight text-gradient-display", children: "LET'S TALK" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/70 font-sans", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "© ",
              (/* @__PURE__ */ new Date()).getFullYear(),
              " Goran Šantić — freelance developer"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "GitHub", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "LinkedIn", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-5 h-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "hover:text-foreground transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex md:justify-end gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "underline underline-offset-4 hover:text-foreground transition", children: "Back to top" }) }) })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HighlightedProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonial, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
