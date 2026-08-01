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
      className={`rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)] ${className}`}
      style={{ background: variant.bg, aspectRatio: "1.586 / 1", fontFamily: SF_FONT }}
    >
      <div className="h-full w-full p-6 md:p-7 flex flex-col justify-between" style={{ color: variant.text }}>
        <div className="flex items-start justify-between">
          <span className="text-base md:text-lg font-semibold tracking-tight">renda</span>
          <span className="text-[11px] md:text-xs font-medium opacity-70">{variant.name}</span>
        </div>
        <div className="w-10 h-7 md:w-11 md:h-8 rounded-md" style={{ background: variant.chip }} />
        <div className="flex items-end justify-between">
          <span className="text-sm md:text-base font-medium tracking-[0.18em] opacity-80">
            •••• 4291
          </span>
          <span className="text-[11px] md:text-xs font-medium opacity-70">Smart Card</span>
        </div>
      </div>
    </div>
  );
}

/* Small rotating stack of the four cards */
export function RotatingCards() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % cardVariants.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-12 flex flex-col items-center">
      <div className="relative w-[300px] sm:w-[360px] h-[210px] sm:h-[250px]">
        {cardVariants.map((v, i) => {
          const offset = (i - active + cardVariants.length) % cardVariants.length;
          return (
            <button
              key={v.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={v.name}
              className="absolute inset-0 transition-all duration-700 ease-out focus:outline-none"
              style={{
                transform: `translateY(${offset * 14}px) translateX(${offset * 10}px) scale(${1 - offset * 0.05}) rotate(${offset * -3}deg)`,
                zIndex: cardVariants.length - offset,
                opacity: offset > 2 ? 0 : 1,
              }}
            >
              <CardFace variant={v} className="w-full" />
            </button>
          );
        })}
      </div>
      <div className="flex justify-center gap-2 mt-8">
        {cardVariants.map((v, i) => (
          <button
            key={v.name}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${v.name}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-black/70" : "w-2 h-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* Large dark showcase with all four cards floating */
export function CardShowcaseBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % cardVariants.length), 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium tracking-[0.08em] text-white/50 mb-6" style={{ fontFamily: SF_FONT }}>
          The Renda card family
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight text-white/90 leading-tight"
          style={{ fontFamily: SF_FONT }}
        >
          Four cards. One intelligence layer.
        </h2>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-center">
          {cardVariants.map((v, i) => {
            const isActive = i === active;
            return (
              <button
                key={v.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={v.name}
                className="transition-all duration-700 ease-out focus:outline-none w-full"
                style={{
                  transform: isActive ? "translateY(-18px) scale(1.06)" : "translateY(0) scale(0.95)",
                  opacity: isActive ? 1 : 0.55,
                }}
              >
                <CardFace variant={v} className="w-full" />
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-14">
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
    </section>
  );
}
