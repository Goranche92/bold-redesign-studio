export function Marquee() {
  const items = ["BRANDING", "UI / UX", "DEVELOPMENT", "ILLUSTRATION", "MOTION", "STRATEGY"];
  const row = [...items, ...items, ...items];
  return (
    <section className="border-y border-white/10 py-12 md:py-14 my-4 md:my-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {row.map((t, i) => (
          <span key={i} className="font-display uppercase text-5xl md:text-7xl text-foreground/90 flex items-center gap-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
