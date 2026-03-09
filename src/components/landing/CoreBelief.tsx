import { useFadeIn } from "@/hooks/use-fade-in";

export default function CoreBelief() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            What we believe
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Money is dynamic. Life is dynamic.
            <br />
            <span className="text-muted-foreground">Your bank should be too.</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Intelligence-first",
              text: "We didn't start with a dashboard or a card. We started with a question: what if your bank could actually think?",
            },
            {
              title: "Built for understanding",
              text: "Understanding your money shouldn't require a finance degree or hours spent reviewing spreadsheets.",
            },
            {
              title: "Beyond transactions",
              text: "Traditional banks record. Fintechs redesign. Renda understands — and helps you act on that understanding.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
