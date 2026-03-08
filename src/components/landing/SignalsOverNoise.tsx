import { useFadeIn } from "@/hooks/use-fade-in";

export default function SignalsOverNoise() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative py-32 lg:py-44 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      {/* Radial glow from center */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, hsl(27 95% 60% / 0.08), transparent 60%)' }} />
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface-dark-foreground/40 mb-8">
          What matters, when it matters
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-surface-dark-foreground">
          Alfie surfaces the signal.
          <br />
          <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">Not the noise.</span>
        </h2>
        <p className="mt-10 text-lg md:text-xl text-surface-dark-foreground/60 max-w-2xl mx-auto leading-relaxed">
          No endless notifications. No dashboards for the sake of dashboards.
          Alfie watches, understands, and speaks up only when it matters —
          with the right insight, at the right time.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="border border-surface-dark-foreground/10 rounded-lg p-6 bg-surface-dark-foreground/[0.03]">
            <h3 className="text-base font-semibold text-surface-dark-foreground/80 mb-2">Purposeful</h3>
            <p className="text-base text-surface-dark-foreground/50 leading-relaxed">
              Every insight Alfie surfaces has a reason. No filler, no vanity metrics.
            </p>
          </div>
          <div className="border border-surface-dark-foreground/10 rounded-lg p-6 bg-surface-dark-foreground/[0.03]">
            <h3 className="text-base font-semibold text-surface-dark-foreground/80 mb-2">Timely</h3>
            <p className="text-base text-surface-dark-foreground/50 leading-relaxed">
              Context-aware timing means Alfie reaches you when the information is actionable.
            </p>
          </div>
          <div className="border border-surface-dark-foreground/10 rounded-lg p-6 bg-surface-dark-foreground/[0.03]">
            <h3 className="text-base font-semibold text-surface-dark-foreground/80 mb-2">Calm</h3>
            <p className="text-base text-surface-dark-foreground/50 leading-relaxed">
              Designed for peace of mind. Intelligence that works quietly in the background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
