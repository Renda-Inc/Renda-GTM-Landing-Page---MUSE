import { useFadeIn } from "@/hooks/use-fade-in";

const products = [
  {
    title: "Accounts",
    description: "Smart accounts that understand your cash flow and adapt to how you actually use money.",
  },
  {
    title: "Cards",
    description: "Cards backed by intelligence — with spending insights that arrive before you ask.",
  },
  {
    title: "Payments",
    description: "Move money with context. Alfie helps you time, track, and understand every transfer.",
  },
];

export default function ProductCapabilities() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-32 lg:py-40">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Built on solid ground
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            The foundations you expect. Made smarter.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Renda offers the banking essentials — accounts, cards, payments — but every
            layer is powered by Alfie's intelligence.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {products.map((p) => (
            <div key={p.title} className="border-t border-border pt-6 space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
