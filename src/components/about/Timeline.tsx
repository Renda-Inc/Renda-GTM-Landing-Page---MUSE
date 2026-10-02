import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { timeline } from "./content";

/* ── Timeline component ───────────────────────────────────── */
export default function Timeline() {
  const [active, setActive] = useState(0);
  const current = timeline[active];

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: year, description, tracker */}
      <div>
        <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">Our Journey</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-10">
          From conviction to product.
        </h2>

        {/* Big year + title + description */}
        <div className="mb-10 min-h-[140px]">
          <p className="text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-none">{current.year}</p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{current.title}</h3>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-md">{current.desc}</p>
        </div>

        {/* Horizontal milestone tracker */}
        <div className="flex items-center gap-0 relative">
          {/* Arrows */}
          <button
            type="button"
            aria-label="Previous journey milestone"
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 transition-colors mr-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 flex items-center relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border -translate-y-1/2" />

            {timeline.map((t, i) => (
              <button
                type="button"
                aria-label={`Show ${t.year}: ${t.title}`}
                key={i}
                onClick={() => setActive(i)}
                className="flex-1 flex flex-col items-center relative z-10 group"
              >
                {/* Dot */}
                <div


                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    i === active
                      ? "bg-foreground border-foreground scale-125"
                      : "bg-background border-muted-foreground/40 group-hover:border-foreground"
                  }`}
                />
                {/* Year label */}
                <span
                  className={`mt-2 text-sm font-medium transition-colors ${
                    i === active ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {t.year}
                </span>
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label="Next journey milestone"
            onClick={() => setActive(Math.min(timeline.length - 1, active + 1))}
            disabled={active === timeline.length - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 transition-colors ml-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-[320px] lg:h-[440px] object-cover transition-all duration-500"
          loading="lazy"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}

