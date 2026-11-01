import { useEffect, useRef, useState } from "react";
import { values } from "./content";

/* ── Values Accordion (vertical image accordion) ─────────── */
const VALUES_ROTATE_MS = 7000;
const VALUES_RESUME_MS = 6000;

export default function ValuesAccordion() {
  const [active, setActive] = useState(0);
  const pausedUntilRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActive((i) => (i + 1) % values.length);
    }, VALUES_ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    pausedUntilRef.current = Date.now() + VALUES_RESUME_MS;
  };

  return (
    <>
      <div className="mt-14 flex w-full gap-3 h-[520px] lg:h-[640px]">
        {values.map((v, i) => {
          const isActive = i === active;
          return (
            <button
              key={v.title}
              type="button"
              onClick={() => handleSelect(i)}
              aria-label={v.title}
              aria-expanded={isActive}
              className="relative rounded-3xl overflow-hidden transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, minWidth: 0 }}
            >
              <img
                src={v.image}
                alt={v.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-[#111111] transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"}`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`} />

              <div className={`relative h-full flex flex-col justify-start p-8 lg:p-12 text-left transition-opacity duration-500 ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}`}>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-md">
                  {v.title}
                </h3>
                <p className="mt-6 text-white/85 text-base md:text-lg font-medium leading-relaxed max-w-md">
                  {v.desc}
                </p>
                <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <span
                  className="text-white text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {v.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {values.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelect(i)}
            aria-label={`Show value ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-foreground" : "w-2 h-2 bg-black/25"
            }`}
          />
        ))}
      </div>
    </>
  );
}

