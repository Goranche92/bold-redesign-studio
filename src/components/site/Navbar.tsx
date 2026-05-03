import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between"
    >
      <Link
        to="/"
        className="flex items-center gap-2 md:gap-3 text-foreground font-display text-lg sm:text-xl md:text-2xl tracking-tight"
      >
        <span className="inline-block w-6 h-6 md:w-7 md:h-7 shrink-0 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)]" />
        <span className="leading-none">
          Goran <span className="text-gradient">Šantić</span>
        </span>
      </Link>

      <nav className="hidden md:flex items-center gap-1 glass rounded-full px-2 py-2">
        {["Home", "About", "Project", "Services"].map((item) => (
          <a
            key={item}
            href="#"
            className="px-5 py-2 rounded-full text-sm text-foreground/80 hover:text-foreground hover:bg-white/10 transition-colors"
          >
            {item}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="group flex items-center gap-2 bg-foreground text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform"
      >
        LET'S TALK
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[oklch(0.65_0.32_340)] to-[oklch(0.55_0.28_255)] text-white text-xs">✕</span>
      </a>
    </motion.header>
  );
}
