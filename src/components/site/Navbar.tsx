import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] backdrop-blur-xl bg-[oklch(0.05_0.02_280/0.72)]"
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 h-[90px] flex items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-foreground font-sans font-medium text-base md:text-lg shrink-0"
        >
          <span className="inline-block w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" />
          <span className="leading-tight tracking-tight">
            Goran <span className="text-gradient">Šantić</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-2 rounded-full px-2 py-2">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full text-sm text-foreground/85 hover:text-foreground hover:bg-white/10 transition-colors font-sans"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm text-foreground/85 hover:text-foreground hover:bg-white/10 transition-colors font-sans"
            >
              Services
              <ChevronDown className="w-4 h-4 opacity-70" aria-hidden />
            </a>
          </div>
        </nav>

        <a
          href="#contact"
          className="relative inline-flex items-center gap-3 shrink-0 rounded-full bg-white pl-[25px] pr-2 py-[17px] text-[#04070A] font-sans text-sm uppercase shadow-[inset_0_2px_0.4px_rgba(4,7,10,0.16)] border border-[rgba(4,7,10,0.35)] border-dashed hover:scale-[1.02] transition-transform"
        >
          Let&apos;s Talk
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs">
            ↗
          </span>
        </a>
      </div>
    </motion.header>
  );
}
