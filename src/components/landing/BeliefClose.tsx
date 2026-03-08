import { useFadeIn } from "@/hooks/use-fade-in";

export default function BeliefClose() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="waitlist" className="relative py-32 lg:py-44 overflow-hidden" style={{ background: 'var(--gradient-close)' }}>
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(27 95% 60% / 0.15), transparent 70%)' }}
      />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
          Banking should understand you.
          <br />
          We're building it.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Renda is for people who believe their bank should be as intelligent
          as the rest of their life.
        </p>
        <div className="mt-12">
          <a
            href="#waitlist"
            className="inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
