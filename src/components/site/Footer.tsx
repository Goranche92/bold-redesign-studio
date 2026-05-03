import { Github, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative mt-24 md:mt-32 px-6 py-20 md:py-28 overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full bg-magenta/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 w-[460px] h-[460px] rounded-full bg-electric/25 blur-[150px]" />

      <div className="relative max-w-[1232px] mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-12 md:pb-14 border-b border-white/10">
          <div>
            <p className="text-sm text-foreground/70 mb-2 font-sans">Call</p>
            <a href="tel:+0000000000" className="text-magenta text-lg md:text-xl hover:opacity-80 transition font-sans">
              +00 000 000 000
            </a>
            <p className="mt-2 text-xs text-foreground/50 font-sans">Replace with your number</p>
          </div>
          <div className="md:text-center">
            <p className="text-sm text-foreground/70 mb-2 font-sans">Email</p>
            <a
              href="mailto:hello@example.com"
              className="text-magenta text-lg md:text-xl hover:opacity-80 transition font-sans"
            >
              hello@example.com
            </a>
            <p className="mt-2 text-xs text-foreground/50 font-sans">Swap for your real address</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-foreground/70 mb-2 font-sans">Availability</p>
            <p className="text-magenta text-lg md:text-xl font-sans">Freelance / contract</p>
            <p className="mt-2 text-xs text-foreground/50 font-sans">EU timezones</p>
          </div>
        </div>

        <div className="py-20 md:py-28 flex justify-center">
          <h2 className="font-display uppercase font-black leading-[1.08] text-foreground text-center tracking-tight text-gradient-display">
            LET&apos;S TALK
          </h2>
        </div>

        <div className="pt-8 border-t border-white/10 grid md:grid-cols-3 gap-6 items-center text-sm text-foreground/70 font-sans">
          <p>© {new Date().getFullYear()} Goran Šantić — freelance developer</p>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <ul className="flex md:justify-end gap-6">
            <li>
              <a href="#top" className="underline underline-offset-4 hover:text-foreground transition">
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
