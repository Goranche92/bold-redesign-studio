export function Footer() {
  return (
    <footer id="contact" className="relative mt-20 border-t border-white/10 px-6 py-20">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-display uppercase font-black leading-[0.85] text-gradient" style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}>
          LET'S BUILD
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-10 items-end">
          <p className="text-foreground/70 max-w-sm">
            Have a project in mind? We'd love to hear about it. Drop us a line and let's create something bold together.
          </p>
          <a href="mailto:hello@studio.com" className="text-2xl md:text-3xl font-display hover:text-gradient transition">
            hello@studio.com
          </a>
          <ul className="md:text-right space-y-2 text-foreground/80">
            {["Facebook", "Linkedin", "Instagram"].map((s) => (
              <li key={s}><a href="#" className="hover:text-foreground transition">{s} ↗</a></li>
            ))}
          </ul>
        </div>
        <div className="mt-20 pt-8 border-t border-white/10 flex justify-between text-xs text-foreground/50 uppercase tracking-wider">
          <span>© 2026 BLDONSE Studio</span>
          <span>Crafted with intent</span>
        </div>
      </div>
    </footer>
  );
}
