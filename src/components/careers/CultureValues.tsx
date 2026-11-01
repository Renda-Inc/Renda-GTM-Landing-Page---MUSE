import { useEffect, useRef, useState } from "react";
import team1 from "@/assets/careers/team-1.jpg";
import team2 from "@/assets/careers/team-2.jpg";
import team3 from "@/assets/careers/team-3.jpg";
import team4 from "@/assets/careers/team-4.jpg";
import team5 from "@/assets/careers/team-5.jpg";
import team6 from "@/assets/careers/team-6.jpg";

const values = [
  { title: "Intelligence Over Activity", desc: "We measure impact, not hours. Thoughtful work beats busy work.", image: team1 },
  { title: "Responsibility at Scale", desc: "We build systems that touch people's financial lives. That demands rigor and humility.", image: team2 },
  { title: "Long-Term Over Short-Term", desc: "Short-term hacks create long-term debt; in code, in culture, and in trust.", image: team3 },
  { title: "Ownership Without Ego", desc: "Take full responsibility for your work. The best idea wins, regardless of who proposed it.", image: team4 },
  { title: "Clarity is Kindness", desc: "We communicate with precision and honesty because people deserve to know where they stand.", image: team5 },
  { title: "Inclusion Improves Intelligence", desc: "Diverse perspectives make better products. We actively build a team that reflects the global population we serve.", image: team6 },
];

const ROTATE_MS = 7000;
const RESUME_DELAY_MS = 6000;

export default function CultureValues() {
  const [active, setActive] = useState(0);
  const pausedUntilRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActive((i) => (i + 1) % values.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    pausedUntilRef.current = Date.now() + RESUME_DELAY_MS;
  };

  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-4">Culture & Values</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
            What we believe.
          </h2>
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-foreground">
            Our values shape how we work, make decisions, and build for the long run.
          </p>
        </div>

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
                {/* Image */}
                <img
                  src={v.image}
                  alt={v.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                  loading="lazy"
                />
                {/* Collapsed dark base */}
                <div
                  className={`absolute inset-0 bg-[#111111] transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"}`}
                />
                {/* Editorial gradient overlay (active) */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                />

                {/* Active content */}
                <div
                  className={`relative h-full flex flex-col justify-start p-8 lg:p-12 text-left transition-opacity duration-500 ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}`}
                >
                  <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-md">
                    {v.title}
                  </h3>
                  <p className="mt-6 text-white/85 text-base md:text-lg font-medium leading-relaxed max-w-md">
                    {v.desc}
                  </p>
                  <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
                </div>

                {/* Collapsed vertical title */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                >
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

        {/* Bottom-centered pagination dots */}
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
      </div>
    </section>
  );
}
