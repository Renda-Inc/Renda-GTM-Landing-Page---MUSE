import { useFadeIn } from "@/hooks/use-fade-in";
import { Wallet, CreditCard, ArrowRightLeft } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Accounts",
    description: "Smart accounts that understand your cash flow and adapt to how you actually use money.",
  },
  {
    icon: CreditCard,
    title: "Cards",
    description: "Cards backed by intelligence — with spending insights that arrive before you ask.",
  },
  {
    icon: ArrowRightLeft,
    title: "Payments",
    description: "Move money with context. Alfie helps you time, track, and understand every transfer.",
  },
];

export default function ProductCapabilities() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Built on solid ground
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            The foundations you expect. Made smarter.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Renda offers the banking essentials — accounts, cards, payments — but every
            layer is powered by Alfie's intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
