import { useFadeIn } from "@/hooks/use-fade-in";
import { Wallet, CreditCard, ArrowRightLeft, Sparkles } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Smart Accounts",
    description: "Accounts that understand your cash flow and adapt to how you use money.",
  },
  {
    icon: CreditCard,
    title: "Cards",
    description: "Spending insights that arrive before you ask — powered by Alfie.",
  },
  {
    icon: ArrowRightLeft,
    title: "Payments",
    description: "Move money with context. Track, time, and understand every transfer.",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Personalized financial guidance surfaced at the right moment.",
  },
];

export default function ProductCapabilities() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Everything you need. Made smarter.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
