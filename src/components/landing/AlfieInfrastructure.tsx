import { useFadeIn } from "@/hooks/use-fade-in";

export default function AlfieInfrastructure() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-32 lg:py-40 bg-surface-dark text-surface-dark-foreground">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface-dark-foreground/40 mb-8">
          Platform depth
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
          Alfie is infrastructure, not a feature.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-surface-dark-foreground/60 leading-relaxed">
          <p>
            Most companies bolt AI onto existing products. We built Alfie as the
            foundation — a modular intelligence system that powers every layer
            of the Renda experience.
          </p>
          <p>
            From individual insights to cross-account reasoning, from real-time
            signals to long-term financial modeling — Alfie is the architecture
            that makes it all possible.
          </p>
        </div>
      </div>
    </section>
  );
}
