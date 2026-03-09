import { useFadeIn } from "@/hooks/use-fade-in";

export default function AlfieIntro() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="alfie" className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Meet Alfie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
              Your financial
              <br />intelligence layer.
            </h2>
            <p className="mt-6 text-lg text-surface-dark-foreground/60 leading-relaxed">
              Alfie isn't a chatbot. It's a reasoning engine built into the core of Renda — connecting your spending, saving, and goals to surface insights that actually matter.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Understands patterns across your financial life",
                "Surfaces insights before you have to ask",
                "Gets smarter over time as it learns your habits",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-base text-surface-dark-foreground/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center">
                <span className="text-xl font-bold text-surface-dark-foreground">Alfie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
