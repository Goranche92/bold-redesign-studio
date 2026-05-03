export function Marquee() {
  const items = [
    "REACT",
    "TYPESCRIPT",
    "TANSTACK",
    "PERFORMANCE",
    "A11Y",
    "DESIGN SYSTEMS",
    "NODE",
    "APIs",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section className="border-y border-[#202020] py-10 md:py-12 my-2 md:my-4 overflow-hidden bg-[oklch(0.05_0.02_280)]">
      <div className="flex animate-marquee whitespace-nowrap gap-6 md:gap-10">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="font-sans uppercase font-semibold text-4xl md:text-6xl lg:text-7xl text-foreground/90 flex items-center gap-6 md:gap-10"
          >
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
