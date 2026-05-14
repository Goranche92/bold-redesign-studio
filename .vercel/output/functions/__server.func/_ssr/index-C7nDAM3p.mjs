import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as me } from "./router-C9K2bXQ5.mjs";
import { C as ChevronDown, A as ArrowUpRight, a as ArrowLeft, b as ArrowRight, F as Facebook, I as Instagram, L as Linkedin } from "../_libs/lucide-react.mjs";
import { u as useReducedMotion, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
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
function LandingAbout() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "about",
      className: "flex w-full flex-col items-center px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-[80px] xl:px-[344px]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex w-full max-w-[1232px] flex-col items-center text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex shrink-0 items-center justify-center gap-2 md:mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[16px] leading-[19.2px] uppercase", children: "About me" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 w-full max-w-[1006px] px-3 sm:px-4 md:mb-20 md:px-8 lg:mb-[120px] lg:px-[92px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display flex flex-col items-center gap-0 text-center text-[clamp(1.75rem,6.5vw,4.5rem)] font-normal uppercase leading-[1.12] sm:leading-[1.15] lg:text-[72px] lg:leading-[115.2px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "Design that means" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "something" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            className: "mb-8 w-full max-w-[642px] px-1 text-[16px] leading-6 text-white md:mb-10 lg:mb-12",
            initial: reduce ? false : { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.3 },
            transition: { duration: 0.5 },
            children: "I'm a developer who enjoys the craft of interfaces and product details. I blend layout, interaction, and implementation so what ships is easy to use, easy to read in the codebase, and aligned with what the team is trying to achieve."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#about",
            className: "relative inline-flex items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-5 py-3.5 text-[15px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset sm:px-[25px] sm:py-[17px] sm:text-[16px]",
            children: [
              "More about me",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-5 shrink-0 sm:size-6", strokeWidth: 1.75, "aria-hidden": true })
            ]
          }
        ) })
      ] })
    }
  );
}
const figma = {
  heroBgA: "https://www.figma.com/api/mcp/asset/e965eb2d-179c-423e-aa04-a83d7e497f53",
  heroBgB: "https://www.figma.com/api/mcp/asset/636af594-4930-4e55-863b-111119543663",
  seeProjectsBadge: "https://www.figma.com/api/mcp/asset/16ffe5cb-6dfd-4318-be4d-3b127ad14e55",
  workGrid1: "https://www.figma.com/api/mcp/asset/905e4972-3a66-4395-aaa9-6387fec75aa4",
  workGrid2: "https://www.figma.com/api/mcp/asset/efa03e4c-7726-43f7-8180-b82aef3820d6",
  workGrid3: "https://www.figma.com/api/mcp/asset/13aaad85-549c-4593-93b0-5e0f19e84818",
  workGrid4: "https://www.figma.com/api/mcp/asset/1dcf0f39-7724-479e-93fd-269a5c79aaa7",
  workGrid5: "https://www.figma.com/api/mcp/asset/1dcf0f39-7724-479e-93fd-269a5c79aaa7",
  workGrid6: "https://www.figma.com/api/mcp/asset/c34418e6-b7f0-4571-9bed-ae359decc784",
  serviceRowBg: "https://www.figma.com/api/mcp/asset/f36bed66-a15f-4df6-9a09-273e62adf543",
  serviceThumb1: "https://www.figma.com/api/mcp/asset/8f4fe64c-2b00-42bf-94ba-958e5b64858f",
  serviceThumb2: "https://www.figma.com/api/mcp/asset/bb3ee276-4bbb-45c3-bcdd-83db5c1b9935",
  serviceThumb3: "https://www.figma.com/api/mcp/asset/6bcaad6d-b36b-4988-8f83-6af2bbc35125",
  serviceThumb4: "https://www.figma.com/api/mcp/asset/8f4fe64c-2b00-42bf-94ba-958e5b64858f",
  project1: "https://www.figma.com/api/mcp/asset/1b31d463-50b3-4e08-91af-774880f1f268",
  project2: "https://www.figma.com/api/mcp/asset/836fe333-71df-4338-9d7e-bb5e510b86bc",
  project3: "https://www.figma.com/api/mcp/asset/13343761-f126-4672-a8f2-9440056671be",
  statsBg: "https://www.figma.com/api/mcp/asset/9202d4f6-0d9f-4f7e-bf8a-6f1c928fc98d",
  testimonialBg: "https://www.figma.com/api/mcp/asset/f506bed9-edfa-46ce-a532-6338bd791c63",
  footerBg: "https://www.figma.com/api/mcp/asset/60423d54-4c45-4cd3-96ca-cb9b7a375c5f",
  navLogoMark: "https://www.figma.com/api/mcp/asset/70e8ffe6-d0ef-4d2a-9a1c-069993360013",
  /** Marquee strip logo mark (Component variant 4 in Figma) */
  marqueeLogo: "https://www.figma.com/api/mcp/asset/6813add5-5f71-4234-b79b-765a1761340f"
};
function XIcon(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: props.className, "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" }) });
}
function LandingFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { id: "contact", className: "mx-auto mb-12 w-full max-w-[1232px] px-6 md:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-[#272828] px-8 pt-14 pb-28 md:px-14 md:pt-[57px] md:pb-[113px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.footerBg, alt: "", className: "pointer-events-none absolute inset-0 size-full object-cover" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 border-b border-white/20 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-3 md:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15px] leading-[19.2px] text-white", children: "Availability" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[22.7px] leading-[28px] text-[#f00862]", children: "Remote · EU-friendly hours" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14.1px] text-white", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${me.email}`, className: "text-[21.9px] text-[#f00862]", children: me.email })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-3 text-right", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[14.3px] text-white", children: "GitHub" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: me.githubUrl, target: "_blank", rel: "noreferrer", className: "text-[21.9px] text-[#f00862]", children: me.githubHandle })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 border-b border-white/20 py-16 text-center md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[clamp(4rem,14vw,10rem)] leading-none font-normal uppercase", children: "LET'S-Talk" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14.6px] leading-[19.2px] text-white", children: [
        "Built by ",
        me.displayName,
        " — portfolio site, hand-coded."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.facebook.com/", target: "_blank", rel: "noreferrer", "aria-label": "Facebook", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { className: "size-6", strokeWidth: 1.25 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/", target: "_blank", rel: "noreferrer", "aria-label": "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "size-6", strokeWidth: 1.25 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/", target: "_blank", rel: "noreferrer", "aria-label": "X", children: /* @__PURE__ */ jsxRuntimeExports.jsx(XIcon, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-6", strokeWidth: 1.25 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-8 text-[16px] underline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: me.githubUrl, target: "_blank", rel: "noreferrer", className: "text-white", children: "Source" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "text-white", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${me.email}`, className: "text-white", children: "Contact" })
      ] })
    ] })
  ] }) });
}
const social = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Linkedin", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" }
];
function LandingHero() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full overflow-hidden px-6 py-[120px] md:px-12 md:py-[160px] xl:px-[344px] xl:py-[192px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none absolute inset-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          alt: "",
          className: "absolute top-[-7%] left-0 h-[114%] w-full max-w-none object-cover opacity-90",
          src: figma.heroBgA
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          alt: "",
          className: "absolute top-[-7%] left-0 h-[114%] w-full max-w-none object-cover mix-blend-screen opacity-80",
          src: figma.heroBgB
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-[1232px] gap-10 lg:grid-cols-[1fr_auto] lg:gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-[972px] flex-col gap-12 lg:gap-[60px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.95] font-normal tracking-[0.02em] uppercase", children: "Creative" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#works",
              className: "relative mx-auto flex size-[144px] shrink-0 items-center justify-center lg:mx-0",
              "aria-label": "See projects",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute flex size-[203px] items-center justify-center mix-blend-lighten", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex size-[144px] rotate-[138.79deg]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.seeProjectsBadge, alt: "", className: "size-full max-w-none object-contain" }) }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[clamp(3.5rem,10vw,6.5rem)] leading-[0.95] font-normal tracking-[0.02em] uppercase", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display", children: "Developer" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex max-w-[691px] flex-col gap-8 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[420px] text-[18px] leading-[27px] text-white", children: "I turn ideas into working software — from UI polish and product flows to solid frontends — with a focus on clarity, performance, and code you can build on." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "#contact",
              className: "relative inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] leading-[19.2px] uppercase text-[#04070a] shadow-pill-inset sm:self-auto",
              children: [
                "Let's Talk",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-6 shrink-0", strokeWidth: 1.75, "aria-hidden": true })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          className: "flex flex-col justify-end gap-4 pt-8 lg:max-w-[243px] lg:pt-[469px]",
          initial: reduce ? false : { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          children: social.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: s.href,
              target: "_blank",
              rel: "noreferrer",
              className: "flex items-center gap-3 text-[16px] leading-[19.2px] text-white hover:opacity-80",
              children: [
                s.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3 shrink-0 opacity-70", strokeWidth: 2, "aria-hidden": true })
              ]
            },
            s.label
          ))
        }
      )
    ] })
  ] });
}
function LogoTile() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-[140px] w-[301px] shrink-0 items-center justify-center rounded-lg border border-[#202020] bg-transparent px-12 py-[49px] md:h-[140.2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.marqueeLogo, alt: "", className: "h-[38px] w-[203px] max-w-full object-contain opacity-90" }) });
}
function SpacerTile() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[140px] w-[301px] shrink-0 rounded-lg border border-[#202020] md:h-[140.2px]", "aria-hidden": true });
}
function rowTiles(prefix) {
  return Array.from({ length: 8 }, (_, i) => {
    const key = `${prefix}-${i}`;
    return i % 3 === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(SpacerTile, {}, key) : /* @__PURE__ */ jsxRuntimeExports.jsx(LogoTile, {}, key);
  });
}
function MarqueeRow({ reverse }) {
  const p = reverse ? "r" : "f";
  const loop = [...rowTiles(`${p}a`), ...rowTiles(`${p}b`)];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex w-max gap-6 ${reverse ? "animate-bd-marquee-reverse" : "animate-bd-marquee"}`, children: loop });
}
function LandingMarquee() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full overflow-hidden py-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MarqueeRow, { reverse: true })
  ] }) });
}
function LandingNavbar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 right-0 left-0 z-50 flex h-[102px] justify-center px-4 py-1.5 sm:px-8 xl:px-20 2xl:px-[320px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 backdrop-blur-[3.5px] bg-white/10", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full w-full max-w-[1920px] items-center justify-between gap-3 px-4 py-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "relative z-10 flex min-w-0 shrink items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.navLogoMark, alt: "", className: "size-10 shrink-0", width: 40, height: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl leading-none font-normal tracking-wide uppercase", children: me.navBrand })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "nav",
        {
          className: "relative z-10 hidden rounded-full border border-dashed border-white/30 bg-white/5 px-[17px] py-[9px] backdrop-blur-[2.5px] md:block",
          "aria-label": "Primary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex items-center gap-4 text-[16px] leading-[19.2px] text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block px-2 py-2", children: "Home" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "block px-2 py-2 hover:opacity-80", href: "#about", children: "About" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "block px-2 py-2 hover:opacity-80", href: "#works", children: "Project" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { className: "flex items-center py-2 pr-9 pl-2 text-[15.5px] hover:opacity-80", href: "#services", children: [
              "Services",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: "pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 opacity-80",
                  "aria-hidden": true
                }
              )
            ] }) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          className: "relative z-10 inline-flex shrink-0 items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] leading-[19.2px] font-normal uppercase text-[#04070a] shadow-pill-inset",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Let's Talk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-6 shrink-0", strokeWidth: 1.75, "aria-hidden": true })
          ]
        }
      )
    ] })
  ] });
}
const shots = [
  figma.workGrid1,
  figma.workGrid2,
  figma.workGrid3,
  figma.workGrid4,
  figma.workGrid5,
  figma.workGrid6
];
function LandingOurWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "works", className: "mx-auto flex w-full max-w-[1280px] flex-col px-6 pt-20 pb-10 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex w-full flex-col items-center bg-[#04070a]/80 pb-8 backdrop-blur-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15.3px] leading-[19.2px] uppercase", children: "Selected work" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-[1006px] pt-8 pb-24 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display relative z-10 text-[clamp(2rem,5vw,4.5rem)] leading-[1.2] font-normal md:text-[72px] md:leading-[115.2px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "Interfaces built to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "perform  not just to" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "look good" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-24 lg:gap-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-8 md:flex-row md:gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[0], tall: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[1], tall: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full max-w-[979px] flex-col justify-between gap-8 md:flex-row md:gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[2] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[3] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-8 md:flex-row md:gap-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[4], tall: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShot, { src: shots[5], tall: true })
      ] })
    ] })
  ] });
}
function WorkShot({ src, tall }) {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: `relative mx-auto w-full overflow-hidden md:mx-0 ${tall ? "max-w-[446px]" : "max-w-[383px]"}`,
      initial: reduce ? false : { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.25 },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative w-full ${tall ? "aspect-[446/498]" : "aspect-[383/428]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: "", className: "absolute inset-0 size-full object-cover" }) })
    }
  );
}
const projects = [
  {
    cat: "Branding",
    title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Finaco — Mental Well-",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Being Website"
    ] }),
    body: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "I helped shape a calm, supportive interface: clear hierarchy, gentle motion, and content that guides people without noise — then shipped the frontend pieces to match the design intent." }),
    img: figma.project1
  },
  {
    cat: "UI / UX Design",
    title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Vudo — Mental Well-Being",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Website"
    ] }),
    body: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "I worked through flows and responsive layouts, tightened typography and spacing, and made sure the experience felt consistent from first visit to deeper screens." }),
    img: figma.project2
  },
  {
    cat: "Development",
    title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Photolab — Mental Well-",
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      "Being Website"
    ] }),
    body: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "I focused on implementation quality: structured components, predictable state, and performance so image-heavy views still feel snappy on real devices." }),
    img: figma.project3
  }
];
function LandingProjects() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mx-auto w-full max-w-[1232px] px-6 pt-24 pb-8 md:px-6 lg:pt-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15.8px] leading-[19.2px] uppercase", children: "Case studies" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-center text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display", children: "Highlighted projects" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-col gap-10", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: reduce ? false : { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.55, delay: i * 0.06 },
        className: "grid overflow-hidden rounded-[40px] border border-[#272828] bg-gradient-to-br from-[rgba(89,186,251,0.18)] to-[#04070a] p-8 md:min-h-[524px] md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)] md:p-[33px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-fit rounded-full border border-[rgba(89,186,251,0.35)] bg-[#04070a]/80 px-[13px] py-1.5 text-[12.5px] text-[#a5a5a5] backdrop-blur-[7.5px]", children: p.cat }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[clamp(1.5rem,3vw,2.4rem)] leading-[48px] font-normal capitalize", children: p.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14.5px] leading-6 text-white", children: p.body }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#works",
                  className: "relative inline-flex w-fit items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] uppercase text-[#04070a] shadow-pill-inset",
                  children: [
                    "View details",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-6 shrink-0", strokeWidth: 1.75, "aria-hidden": true })
                  ]
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-8 min-h-[260px] md:mt-0 md:min-h-[458px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", className: "absolute inset-0 size-full object-cover" }) })
        ]
      },
      i
    )) })
  ] });
}
const blurb = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
  "I keep UX calm and readable, prioritize",
  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
  "performance and accessibility, and write",
  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
  "frontends that stay understandable for the",
  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
  "next person who opens the repo."
] });
const rows = [
  { n: "01", title: "Branding", thumb: figma.serviceThumb1 },
  { n: "02", title: "UI / UX Design", thumb: figma.serviceThumb2 },
  { n: "03", title: "Development", thumb: figma.serviceThumb3 },
  { n: "04", title: "Consulting", thumb: figma.serviceThumb4 }
];
function LandingServices() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "mx-auto w-full max-w-[1232px] px-6 pt-24 pb-8 md:px-6 lg:pt-40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15.3px] leading-[19.2px] uppercase", children: "What I offer" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mb-4 text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "End-to-end delivery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "from idea to UI" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-col gap-6", children: rows.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.li,
      {
        initial: reduce ? false : { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.45, delay: i * 0.05 },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#works",
            className: "relative grid min-h-[209px] w-full grid-cols-1 overflow-hidden rounded-2xl border border-[#272828] p-8 md:grid-cols-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: figma.serviceRowBg,
                  alt: "",
                  className: "pointer-events-none absolute inset-0 size-full object-cover opacity-90"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex flex-wrap items-center gap-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[24px] leading-[19.2px] text-white", children: row.n })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[clamp(1.75rem,4vw,2.35rem)] leading-[48px] text-white uppercase", children: row.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-6 flex items-center gap-6 md:mt-0 md:justify-end", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[143px] w-[243px] shrink-0 overflow-hidden rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: row.thumb, alt: "", className: "size-full object-cover" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[280px] text-left text-[14.6px] leading-6 text-white md:text-right", children: blurb })
              ] })
            ]
          }
        )
      },
      row.n
    )) })
  ] });
}
const stats = [
  { value: "40+", lines: ["Shipped slices of product — from", "MVPs to refactors and polish passes"] },
  { value: "15+", lines: ["Codebases and stacks I’ve worked in", "across web, tools, and internal apps"] },
  { value: "10+", suffix: "Years", lines: ["Hands-on building on the web,", "learning and improving every year"] }
];
function LandingStats() {
  const reduce = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full px-6 pt-32 pb-20 md:px-12 xl:px-[344px] xl:pt-40 xl:pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.statsBg, alt: "", className: "absolute top-0 left-0 h-[130%] w-full max-w-none object-cover" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto flex w-full max-w-[1232px] flex-col gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15.4px] leading-[19.2px] uppercase", children: "Milestones" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[768px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.15] font-normal uppercase md:text-[72px] md:leading-[115.2px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "Shipping with" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "real-world" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-display block", children: "results" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-[384px] text-[14.6px] leading-6 text-white", children: "I care about outcomes users feel: fast loads, predictable flows, and interfaces that don’t get in the way. If the product needs to move, I’m happiest when I can own the loop from UI detail to production code." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-col gap-14 lg:flex-row lg:gap-16", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: reduce ? false : { opacity: 0, y: 12 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08, duration: 0.45 },
          className: `flex max-w-[247px] flex-col gap-3 ${i === 1 ? "lg:pl-28" : ""} ${i === 2 ? "lg:pl-56" : ""}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-[40px] leading-[60px] tracking-wide uppercase", children: [
              s.value,
              s.suffix ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: s.suffix }) : null
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[14.5px] leading-6 text-white", children: [
              s.lines[0],
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              s.lines[1]
            ] })
          ]
        },
        s.value
      )) })
    ] })
  ] });
}
function LandingTestimonial() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto w-full max-w-[1280px] px-6 pt-10 pb-16 md:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-3 shrink-0 rounded-full bg-[#f00862]", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[15.1px] leading-[19.2px] uppercase", children: "Testimonial" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[480px] w-full overflow-hidden rounded-3xl md:min-h-[597px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: figma.testimonialBg, alt: "", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex min-h-[480px] flex-col md:min-h-[597px] md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-full bg-[#04070a] px-8 py-12 md:max-w-[484px] md:rounded-br-[32px] md:rounded-tr-[32px] md:py-[60px] md:pr-[52px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "text-[clamp(1.15rem,2.2vw,1.85rem)] leading-[48px] text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "“Working with Goran felt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "straightforward. He understood what" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "we needed, asked the right questions," }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "and shipped UI that was both clear" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "and solid in the implementation." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Communication was easy, and the" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "result matched what we had in mind" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "— with better edge cases covered.”" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-auto flex flex-col gap-4 px-8 py-10 md:absolute md:bottom-0 md:left-[58%] md:mt-0 md:px-12 md:py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[32px] leading-[48px] font-normal uppercase text-[#f00862]", children: "Alex Morgan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14.6px] leading-[19.2px] text-white", children: "Founder, Zyra Music Platform" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-6 right-6 flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "flex size-14 items-center justify-center rounded-full border border-white bg-[#04070a] p-2 text-white",
            "aria-label": "Previous testimonial",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-5", strokeWidth: 1.5 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            className: "flex size-14 items-center justify-center rounded-full border border-white bg-[#04070a] p-2 text-white",
            "aria-label": "Next testimonial",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-5", strokeWidth: 1.5 })
          }
        )
      ] })
    ] })
  ] });
}
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#04070A] text-white antialiased", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LandingNavbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingHero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingAbout, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingMarquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingOurWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingServices, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingProjects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingStats, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingTestimonial, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(LandingFooter, {})
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LandingPage, {});
}
export {
  Index as component
};
