import { useFadeIn } from "@/hooks/use-fade-in";

export default function AlfieInfrastructure() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-surface-dark text-surface-dark-foreground">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Platform depth
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
            Alfie is infrastructure,
            <br />not a feature.
          </h2>
          <p className="mt-6 text-lg text-surface-dark-foreground/60 leading-relaxed">
            Most companies bolt AI onto existing products. We built Alfie as the
            foundation — a modular intelligence system that powers every layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Modular architecture",
              text: "From individual insights to cross-account reasoning, Alfie's modular design scales with complexity.",
            },
            {
              title: "Real-time signals",
              text: "Continuous processing of financial activity to surface meaning the moment it matters.",
            },
            {
              title: "Long-term modeling",
              text: "Financial patterns evolve. Alfie's models adapt and refine predictions over time.",
            },
            {
              title: "Platform-ready",
              text: "Built to serve individuals today and power third-party integrations tomorrow.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/[0.03] p-8"
            >
              <h3 className="text-lg font-semibold text-surface-dark-foreground mb-3">{item.title}</h3>
              <p className="text-base text-surface-dark-foreground/50 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
