import { useEffect, useRef, useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import team5 from "@/assets/careers/team-5.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const values = [
  { title: "Intelligence Over Activity", desc: "We measure impact, not hours. Thoughtful work beats busy work." },
  { title: "Responsibility at Scale", desc: "We build systems that touch people's financial lives. That demands rigor and humility." },
  { title: "Long-Term Over Short-Term", desc: "Short-term hacks create long-term debt; in code, in culture, and in trust." },
  { title: "Ownership Without Ego", desc: "Take full responsibility for your work. The best idea wins, regardless of who proposed it." },
  { title: "Clarity is Kindness", desc: "We communicate with precision and honesty because people deserve to know where they stand." },
  { title: "Inclusion Improves Intelligence", desc: "Diverse perspectives make better products. We actively build a team that reflects the global population we serve." },
];

export default function CultureValues() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const handle = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Active section height equals viewportH per value
      const start = rect.top;
      const totalScroll = rect.height - viewportH;
      const scrolled = Math.min(Math.max(-start, 0), totalScroll);
      const progress = totalScroll > 0 ? scrolled / totalScroll : 0;
      const idx = Math.min(values.length - 1, Math.floor(progress * values.length));
      setActive(idx);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    window.addEventListener("resize", handle);
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
    };
  }, []);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">


        <div ref={scrollerRef} className="relative" style={{ height: `${values.length * 100}vh` }}>
          <div className="sticky top-0 h-screen flex items-center">
            <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
              {/* Image left */}
              <div className="rounded-2xl overflow-hidden">
                <img src={team5} alt="Team celebration" className="w-full h-[420px] lg:h-[600px] object-cover" loading="lazy" width={1280} height={720} />
              </div>

              {/* Right column: eyebrow + static heading + values stack */}
              <div className="flex flex-col">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">Culture & Values</p>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-10">
                  What we believe.
                </h2>
                <div className="relative h-[440px] flex items-center justify-center overflow-hidden">
                  {values.map((v, i) => {
                    const offset = i - active;
                    const abs = Math.abs(offset);
                    const isActive = offset === 0;
                    const visible = abs <= 2;
                    const translateY = offset * 140;
                    const scale = isActive ? 1 : abs === 1 ? 0.82 : 0.68;
                    const opacity = isActive ? 1 : abs === 1 ? 0.35 : abs === 2 ? 0.12 : 0;
                    const blur = isActive ? 0 : abs === 1 ? 1.5 : 3;
                    return (
                      <div
                        key={v.title}
                        className="absolute left-0 right-0 transition-all duration-500 ease-out will-change-transform"
                        style={{
                          transform: `translateY(${translateY}px) scale(${scale})`,
                          opacity,
                          filter: `blur(${blur}px)`,
                          pointerEvents: visible ? "auto" : "none",
                        }}
                      >
                        <div className={`border-l-2 pl-6 ${isActive ? "border-primary" : "border-primary/30"}`}>
                          <h3 className={`font-semibold text-foreground transition-all duration-500 ${isActive ? "text-2xl md:text-3xl" : "text-lg"}`}>
                            {v.title}
                          </h3>
                          <p className={`mt-3 text-black/60 font-medium leading-relaxed transition-all duration-500 ${isActive ? "text-base md:text-lg" : "text-sm"}`}>
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Pagination dots */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    {values.map((_, i) => (
                      <span
                        key={i}
                        className={`rounded-full transition-all duration-300 ${
                          i === active ? "w-2 h-6 bg-foreground" : "w-2 h-2 bg-black/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

