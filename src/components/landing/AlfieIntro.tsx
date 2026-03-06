import { useFadeIn } from "@/hooks/use-fade-in";

export default function AlfieIntro() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="alfie" className="py-32 lg:py-40 bg-surface-dark text-surface-dark-foreground">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-12 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-accent/30" />
          </div>
        </div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-surface-dark-foreground/50 mb-8">
          Introducing
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-surface-dark-foreground">
          Alfie
        </h2>
        <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/70 max-w-xl mx-auto leading-relaxed">
          A financial intelligence that doesn't just respond — it understands.
          Alfie lives at the core of every decision Renda helps you make.
        </p>
        <p className="mt-6 text-base text-surface-dark-foreground/50">
          More than a feature. A new way to relate to your money.
        </p>
      </div>
    </section>
  );
}
