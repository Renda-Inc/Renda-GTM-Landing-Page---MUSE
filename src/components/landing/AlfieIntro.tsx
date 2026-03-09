import { useFadeIn } from "@/hooks/use-fade-in";

export default function AlfieIntro() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="alfie" className="py-24 lg:py-32 bg-surface-dark text-surface-dark-foreground">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Introducing Alfie
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-surface-dark-foreground leading-tight">
              A financial intelligence
              <br />
              that truly{" "}
              <span className="text-accent">understands.</span>
            </h2>
            <p className="mt-6 text-lg text-surface-dark-foreground/60 leading-relaxed">
              Alfie lives at the core of every decision Renda helps you make.
              Not a chatbot. Not a feature. A new way to relate to your money.
            </p>
          </div>

          {/* Visual element */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 animate-pulse" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/30 to-accent/20" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 flex items-center justify-center">
                <span className="text-2xl font-bold text-surface-dark-foreground">Alfie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
