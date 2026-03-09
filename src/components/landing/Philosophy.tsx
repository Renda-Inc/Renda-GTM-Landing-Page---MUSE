import { useFadeIn } from "@/hooks/use-fade-in";

export default function Philosophy() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "0", label: "Unnecessary alerts" },
              { value: "100%", label: "Actionable insights" },
              { value: "24/7", label: "Intelligent monitoring" },
              { value: "Your", label: "Attention respected" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
