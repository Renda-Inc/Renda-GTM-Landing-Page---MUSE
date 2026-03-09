import { useFadeIn } from "@/hooks/use-fade-in";
import { Zap, Brain, TrendingUp } from "lucide-react";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";

export default function CoreBelief() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            What is Renda
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            AI-native banking, powered by Alfie.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A bank that doesn't just store your money — it understands it.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-[450px]">
            <img src={lifestyleStudying} alt="Studying at home" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>
          <div className="grid gap-5">
            {[
              {
                icon: Brain,
                title: "Understands context",
                text: "Alfie connects your spending, saving, and goals into a coherent financial picture.",
              },
              {
                icon: Zap,
                title: "Acts proactively",
                text: "Insights surface before you ask — at the right time, with the right context.",
              },
              {
                icon: TrendingUp,
                title: "Learns continuously",
                text: "The longer you use Renda, the more personalized and accurate Alfie becomes.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
