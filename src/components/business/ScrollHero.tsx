import { useEffect, useRef, useState } from "react";
import businessHero from "@/assets/business-hero.jpg";

const heroMessages = [
  <>
    Business banking,
    <br />
    built differently.
  </>,
  <>
    Your business,
    <br />
    in one financial system.
  </>,
  <>The intelligence behind your business.</>,
];

export default function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const nextProgress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      setProgress(nextProgress);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const active = progress < 0.24 ? 0 : progress < 0.56 ? 1 : 2;

  return (
    <section ref={sectionRef} className="relative h-[200svh] bg-foreground">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
        <img
          src={businessHero}
          alt="A business owner working in her studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/20" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pt-24 md:px-10">
          <h1 className="relative h-[2.6em] w-full max-w-3xl -translate-y-20 text-4xl md:-translate-y-5 md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
            {heroMessages.map((message, index) => {
              return (
                <span
                  key={index}
                  className={`absolute inset-x-0 top-0 transition-[opacity,transform] duration-150 ease-out ${
                    active === index
                      ? "translate-y-0 scale-100 opacity-100"
                      : index < active
                        ? "-translate-y-3 scale-[0.99] opacity-0"
                        : "translate-y-3 scale-[0.99] opacity-0"
                  }`}
                  aria-hidden={active !== index}
                >
                  {message}
                </span>
              );
            })}
          </h1>
        </div>

        <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2 md:right-10" aria-hidden="true">
          {heroMessages.map((_, index) => (
            <span
              key={index}
              className={`w-2 rounded-full transition-all duration-150 ${
                active === index ? "h-6 bg-white" : "h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

