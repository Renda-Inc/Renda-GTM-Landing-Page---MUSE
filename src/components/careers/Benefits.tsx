import { useEffect, useRef, useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import equitySalary from "@/assets/benefits/equity-salary.jpg";
import health from "@/assets/benefits/health.jpg";
import remote from "@/assets/benefits/remote.jpg";
import learning from "@/assets/benefits/learning.jpg";
import homeOffice from "@/assets/benefits/home-office.jpg";
import parental from "@/assets/benefits/parental.jpg";
import retreats from "@/assets/benefits/retreats.jpg";
import mentalHealth from "@/assets/benefits/mental-health.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const benefits = [
  { image: equitySalary, label: "Competitive Equity & Salary", desc: "Market-rate compensation with meaningful equity so you share in what we build." },
  { image: health, label: "Health, Dental & Vision", desc: "Comprehensive coverage for you and your family from day one." },
  { image: remote, label: "Flexible Remote Work", desc: "Work from anywhere with a remote-first culture built for deep focus." },
  { image: learning, label: "Learning Budget", desc: "Annual stipend for courses, conferences, and books to keep growing." },
  { image: homeOffice, label: "Home Office Stipend", desc: "One-time setup budget plus monthly allowance for your workspace." },
  { image: parental, label: "Generous Parental Leave", desc: "Extended paid leave for all new parents, with a phased return." },
  { image: retreats, label: "Annual Team Retreats", desc: "In-person offsites to connect, celebrate, and plan what's next." },
  { image: mentalHealth, label: "Mental Health Support", desc: "Therapy and wellness benefits because sustainable work starts with wellbeing." },
];

const ROTATE_MS = 4000;
const RESUME_DELAY_MS = 6000;

export default function Benefits() {
  const [active, setActive] = useState(0);
  const pausedUntilRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActive((i) => (i + 1) % benefits.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    pausedUntilRef.current = Date.now() + RESUME_DELAY_MS;
  };

  return (
    <section className="py-16 lg:py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <Fade>
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-4">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-10">
            Built for people who do their best work.
          </h2>
        </Fade>

        <div className="grid lg:grid-cols-[45fr_55fr] gap-8 lg:gap-12 items-stretch">
          {/* Left: dynamic image */}
          <div className="relative rounded-xl overflow-hidden h-[420px] lg:h-auto lg:min-h-[640px] bg-black">
            {benefits.map((b, i) => (
              <img
                key={b.label}
                src={b.image}
                alt={b.label}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${i === active ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right: benefits list */}
          <ul className="flex flex-col">
            {benefits.map((b, i) => {
              const isActive = i === active;
              return (
                <li key={b.label}>
                  <button
                    type="button"
                    onClick={() => handleSelect(i)}
                    aria-pressed={isActive}
                    className={`w-full text-left flex gap-5 py-5 px-5 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-black/[0.035]" : "hover:bg-black/[0.02]"
                    }`}
                  >
                    <div
                      className="w-[3px] rounded-full shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? "#EB8F00" : "transparent",
                      }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-lg md:text-xl leading-snug tracking-tight transition-all duration-300 ${
                          isActive ? "font-semibold text-foreground" : "font-medium text-black/80"
                        }`}
                      >
                        {b.label}
                      </h3>
                      <p
                        className={`mt-2 text-[15px] leading-relaxed transition-all duration-300 ${
                          isActive ? "text-black/70 font-medium" : "text-black/55 font-medium"
                        }`}
                      >
                        {b.desc}
                      </p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-10">
          {benefits.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleSelect(i)}
              aria-label={`Show benefit ${i + 1}`}
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
