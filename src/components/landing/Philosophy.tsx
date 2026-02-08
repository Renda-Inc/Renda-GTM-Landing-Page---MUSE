import { useFadeIn } from "@/hooks/use-fade-in";

export default function Philosophy() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-32 lg:py-40 bg-surface-elevated">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Our philosophy
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
          Signal over noise.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
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
    </section>
  );
}
