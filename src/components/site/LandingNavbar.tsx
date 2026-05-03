import { figma } from "@/data/figma-assets";
import { me } from "@/data/personal";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function LandingNavbar() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-[102px] justify-center px-4 py-1.5 sm:px-8 xl:px-20 2xl:px-[320px]">
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[3.5px] bg-white/10" aria-hidden />
      <div className="relative flex h-full w-full max-w-[1920px] items-center justify-between gap-3 px-4 py-4">
        <a href="/" className="relative z-10 flex min-w-0 shrink items-center gap-3">
          <img src={figma.navLogoMark} alt="" className="size-10 shrink-0" width={40} height={40} />
          <span className="font-display text-2xl leading-none font-normal tracking-wide uppercase">{me.navBrand}</span>
        </a>
        <nav
          className="relative z-10 hidden rounded-full border border-dashed border-white/30 bg-white/5 px-[17px] py-[9px] backdrop-blur-[2.5px] md:block"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-4 text-[16px] leading-[19.2px] text-white">
            <li>
              <span className="block px-2 py-2">Home</span>
            </li>
            <li>
              <a className="block px-2 py-2 hover:opacity-80" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="block px-2 py-2 hover:opacity-80" href="#works">
                Project
              </a>
            </li>
            <li className="relative">
              <a className="flex items-center py-2 pr-9 pl-2 text-[15.5px] hover:opacity-80" href="#services">
                Services
                <ChevronDown
                  className="pointer-events-none absolute top-1/2 right-2 size-4 -translate-y-1/2 opacity-80"
                  aria-hidden
                />
              </a>
            </li>
          </ul>
        </nav>
        <a
          href="#contact"
          className="relative z-10 inline-flex shrink-0 items-center gap-3 rounded-full border border-dashed border-[rgba(4,7,10,0.4)] bg-white px-6 py-4 text-[16px] leading-[19.2px] font-normal uppercase text-[#04070a] shadow-pill-inset"
        >
          <span>Let&apos;s Talk</span>
          <ArrowUpRight className="size-6 shrink-0" strokeWidth={1.75} aria-hidden />
        </a>
      </div>
    </header>
  );
}
