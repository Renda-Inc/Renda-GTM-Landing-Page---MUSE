import { useEffect, useState } from "react";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

type CardVariant = {
  name: string;
  bg: string;
  text: string;
  chip: string;
};

export const cardVariants: CardVariant[] = [
  {
    name: "Renda Blue",
    bg: "linear-gradient(140deg, #1B3A6B 0%, #2E5FA3 55%, #17325C 100%)",
    text: "rgba(255,255,255,0.92)",
    chip: "linear-gradient(135deg, #E6C77A, #B9913F)",
  },
  {
    name: "Renda Orange",
    bg: "linear-gradient(140deg, #C46F00 0%, #EB8F00 55%, #A85D00 100%)",
    text: "rgba(255,255,255,0.95)",
    chip: "linear-gradient(135deg, #FFE7B8, #D9A54A)",
  },
  {
    name: "Renda Tiffany",
    bg: "linear-gradient(140deg, #6FD3C7 0%, #9BE3DA 55%, #4FBCAF 100%)",
    text: "rgba(17,17,17,0.85)",
    chip: "linear-gradient(135deg, #F1E3BE, #C9A85F)",
  },
  {
    name: "Renda White",
    bg: "linear-gradient(140deg, #FFFFFF 0%, #F1EFEA 55%, #DFDBD3 100%)",
    text: "rgba(17,17,17,0.8)",
    chip: "linear-gradient(135deg, #E4D6AE, #BFA05C)",
  },
];

function CardFace({ variant, className = "" }: { variant: CardVariant; className?: string }) {
  return (
    <div
      className={`rounded-3xl overflow-hidden shadow-[0_50px_90px_-30px_rgba(0,0,0,0.75)] ${className}`}
      style={{ background: variant.bg, aspectRatio: "1.586 / 1", fontFamily: SF_FONT }}
    >
      <div className="h-full w-full p-7 md:p-9 flex flex-col justify-between" style={{ color: variant.text }}>
        <div className="flex items-start justify-between">
          <span className="text-lg md:text-2xl font-semibold tracking-tight">renda</span>
          <span className="text-xs md:text-sm font-medium opacity-70">{variant.name}</span>
        </div>
        <div className="w-12 h-9 md:w-14 md:h-10 rounded-md" style={{ background: variant.chip }} />
        <div className="flex items-end justify-between">
          <span className="text-base md:text-xl font-medium tracking-[0.18em] opacity-80">•••• 4291</span>
          <span className="text-xs md:text-sm font-medium opacity-70">Smart Card</span>
        </div>
      </div>
    </div>
  );
}

/* Large 3D coverflow carousel of the four cards */
export function RotatingCards() {
  const [active, setActive] = useState(0);
  const total = cardVariants.length;

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % total), 3200);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <div className="mt-14 flex flex-col items-center select-none">
      <div
        className="relative w-full max-w-[900px] h-[300px] sm:h-[380px] lg:h-[440px]"
        style={{ perspective: "1600px" }}
      >
        {cardVariants.map((v, i) => {
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const abs = Math.abs(offset);

          return (
            <button
              key={v.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={v.name}
              className="absolute left-1/2 top-1/2 w-[280px] sm:w-[400px] lg:w-[520px] focus:outline-none"
              style={{
                transform: `translate(-50%, -50%) translateX(${offset * 34}%) translateZ(${-abs * 160}px) rotateY(${offset * -26}deg) scale(${1 - abs * 0.05})`,
                transformStyle: "preserve-3d",
                transition: "transform 900ms cubic-bezier(0.22, 1, 0.36, 1), opacity 900ms ease",
                zIndex: total - abs,
                opacity: abs > 2 ? 0 : 1 - abs * 0.18,
                filter: abs === 0 ? "none" : `brightness(${1 - abs * 0.18})`,
              }}
            >
              <CardFace variant={v} className="w-full" />
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-10">
        {cardVariants.map((v, i) => (
          <button
            key={v.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${v.name}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
