import { figma } from "@/data/figma-assets";

function LogoTile() {
  return (
    <div className="flex h-[140px] w-[301px] shrink-0 items-center justify-center rounded-lg border border-[#202020] bg-transparent px-12 py-[49px] md:h-[140.2px]">
      <img src={figma.marqueeLogo} alt="" className="h-[38px] w-[203px] max-w-full object-contain opacity-90" />
    </div>
  );
}

function SpacerTile() {
  return <div className="h-[140px] w-[301px] shrink-0 rounded-lg border border-[#202020] md:h-[140.2px]" aria-hidden />;
}

function rowTiles(prefix: string) {
  return Array.from({ length: 8 }, (_, i) => {
    const key = `${prefix}-${i}`;
    return i % 3 === 0 ? <SpacerTile key={key} /> : <LogoTile key={key} />;
  });
}

function MarqueeRow({ reverse }: { reverse?: boolean }) {
  const p = reverse ? "r" : "f";
  const loop = [...rowTiles(`${p}a`), ...rowTiles(`${p}b`)];
  return (
    <div className={`flex w-max gap-6 ${reverse ? "animate-bd-marquee-reverse" : "animate-bd-marquee"}`}>{loop}</div>
  );
}

export function LandingMarquee() {
  return (
    <div className="w-full overflow-hidden py-2">
      <div className="flex flex-col gap-6">
        <MarqueeRow />
        <MarqueeRow reverse />
      </div>
    </div>
  );
}
