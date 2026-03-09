import { useFadeIn } from "@/hooks/use-fade-in";
import lifestyleCreativeHobby from "@/assets/lifestyle-creative-hobby.jpg";

export default function Philosophy() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Our philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Signal over noise.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Most banks flood you with data. Transaction lists. Push notifications.
                Dashboards full of charts you never asked for.
              </p>
              <p>
                We believe your attention is sacred. You shouldn't have to wade through
                noise to find what matters.
              </p>
              <p className="text-foreground font-medium">
                Renda is designed to respect your time and surface only what's relevant —
                when it's relevant.
              </p>
            </div>
          </div>

          {/* Replace stat cards with lifestyle image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] group">
            <img src={lifestyleCreativeHobby} alt="Creative hobby at home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
            {/* Overlay stats */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "0", label: "Unnecessary alerts" },
                  { value: "100%", label: "Actionable insights" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold text-background">{stat.value}</p>
                    <p className="text-sm text-background/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
