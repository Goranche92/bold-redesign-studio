import { figma } from "@/data/figma-assets";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function XIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={props.className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function LandingFooter() {
  return (
    <footer id="contact" className="mx-auto mb-12 w-full max-w-[1232px] px-6 md:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-[#272828] px-8 pt-14 pb-28 md:px-14 md:pt-[57px] md:pb-[113px]">
        <img src={figma.footerBg} alt="" className="pointer-events-none absolute inset-0 size-full object-cover" />
        <div className="relative z-10 border-b border-white/20 pb-8">
          <div className="grid gap-10 md:grid-cols-3 md:gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-[15px] leading-[19.2px] text-white">Call Today</span>
              <a href="tel:+12456567987" className="text-[22.7px] leading-[19.2px] text-[#f00862]">
                +12 456 567 987
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="text-[14.1px] text-white">Email</span>
              <a href="mailto:hello@boldonse.com" className="text-[21.9px] text-[#f00862]">
                hello@boldonse.com
              </a>
            </div>
            <div className="flex flex-col items-end gap-3 text-right">
              <span className="text-[14.3px] text-white">Admin</span>
              <a href="mailto:support@boldonse.com" className="text-[21.9px] text-[#f00862]">
                support@boldonse.com
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-b border-white/20 py-16 text-center md:py-20">
          <p className="font-display text-[clamp(4rem,14vw,10rem)] leading-none font-normal uppercase">LET&apos;S-Talk</p>
        </div>

        <div className="relative z-10 mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <p className="text-[14.6px] leading-[19.2px] text-white">Designed by Wroney Powerd by Webflow</p>
          <div className="flex items-center gap-6 text-white">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook className="size-6" strokeWidth={1.25} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram className="size-6" strokeWidth={1.25} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label="X">
              <XIcon className="size-6" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin className="size-6" strokeWidth={1.25} />
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-[16px] underline">
            <a href="#" className="text-white">
              License
            </a>
            <a href="#" className="text-white">
              Styleguide
            </a>
            <a href="#" className="text-white">
              Chancelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
