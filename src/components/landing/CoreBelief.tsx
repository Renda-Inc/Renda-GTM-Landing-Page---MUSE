import { useFadeIn } from "@/hooks/use-fade-in";

export default function CoreBelief() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden" style={{ background: 'var(--gradient-warm)' }}>
      {/* Subtle accent line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-primary/20 to-transparent" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          What we believe
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
          Money is dynamic. Life is dynamic. Your bank should be too.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            Traditional banks were built for transactions. Fintechs were built for interfaces.
            Neither was built to understand you.
          </p>
          <p>
            Renda didn't start with a dashboard or a card. We started with a question:
            what if your bank could actually think?
          </p>
          <p>
            We built intelligence first — because understanding your money shouldn't require
            a finance degree or hours spent reviewing spreadsheets.
          </p>
        </div>
      </div>
    </section>
  );
}
