import { useFadeIn } from "@/hooks/use-fade-in";
import { Wallet, CreditCard, ArrowRightLeft, Sparkles } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Smart Accounts",
    description: "Accounts that understand cash flow patterns and adapt to your financial rhythm.",
    gradient: "from-primary/15 to-primary/5",
  },
  {
    icon: CreditCard,
    title: "Intelligent Cards",
    description: "Real-time spending categorization and proactive alerts powered by Alfie.",
    gradient: "from-accent/15 to-accent/5",
  },
  {
    icon: ArrowRightLeft,
    title: "Contextual Payments",
    description: "Every transfer understood in context — timing, patterns, and impact.",
    gradient: "from-primary/10 to-accent/5",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Personalized guidance surfaced at exactly the right moment.",
    gradient: "from-accent/10 to-primary/5",
  },
];

export default function ProductCapabilities() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,hsl(220_90%_56%/0.05),transparent)]" />
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
            Everything you need. Made smarter.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-surface-dark-foreground/8 bg-surface-dark-foreground/[0.02] p-7 hover:border-surface-dark-foreground/15 hover:bg-surface-dark-foreground/[0.04] hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-surface-dark-foreground/90 mb-2">{p.title}</h3>
              <p className="text-sm text-surface-dark-foreground/45 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
