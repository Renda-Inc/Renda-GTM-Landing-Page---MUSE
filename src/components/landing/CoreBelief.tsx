import { useFadeIn } from "@/hooks/use-fade-in";

export default function CoreBelief() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              What is Renda
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              AI-native banking,
              <br />powered by Alfie.
            </h2>
          </div>
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Renda is a new kind of bank — one that doesn't just store your money, but understands it. Powered by Alfie, a financial intelligence layer, Renda helps you make smarter decisions without the complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
