import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-24 md:mt-32 px-6 py-20 md:py-28 overflow-hidden"
    >
      {/* Soft side glows like in the reference */}
      <div className="pointer-events-none absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full bg-magenta/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full bg-electric/25 blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Top row: contact info */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-12 md:pb-14 border-b border-white/10">
          <div>
            <p className="text-sm text-foreground/70 mb-2">Call Today</p>
            <a
              href="tel:+12456567987"
              className="text-magenta text-lg md:text-xl hover:opacity-80 transition"
            >
              +12 456 567 987
            </a>
          </div>
          <div className="md:text-center">
            <p className="text-sm text-foreground/70 mb-2">Email</p>
            <a
              href="mailto:hello@boldonse.com"
              className="text-magenta text-lg md:text-xl hover:opacity-80 transition"
            >
              hello@boldonse.com
            </a>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-foreground/70 mb-2">Admin</p>
            <a
              href="mailto:support@boldonse.com"
              className="text-magenta text-lg md:text-xl hover:opacity-80 transition"
            >
              support@boldonse.com
            </a>
          </div>
        </div>

        {/* Giant LET'S-TALK headline */}
        <div className="py-20 md:py-28 flex justify-center">
          <h2 className="font-display uppercase font-black leading-[1.08] text-foreground text-center tracking-tight">
            LET'S–TALK
          </h2>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/70">
          <p>Designed by Wroney Powerd by Webflow</p>

          <div className="flex items-center justify-center gap-6">
            <a href="#" aria-label="Facebook" className="hover:text-foreground transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-foreground transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" aria-label="X" className="hover:text-foreground transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <ul className="flex md:justify-end gap-6">
            <li><a href="#" className="underline underline-offset-4 hover:text-foreground transition">License</a></li>
            <li><a href="#" className="underline underline-offset-4 hover:text-foreground transition">Styleguide</a></li>
            <li><a href="#" className="underline underline-offset-4 hover:text-foreground transition">Chancelog</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
