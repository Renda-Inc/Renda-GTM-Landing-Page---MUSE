import { useFadeIn } from "@/hooks/use-fade-in";
import { Brain, GitBranch, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "Contextual reasoning",
    description: "Alfie connects patterns across your financial life — spending, saving, timing, goals — to give you insight, not just information.",
  },
  {
    icon: GitBranch,
    title: "Decision support",
    description: "Not prescriptive advice. Alfie helps you think through choices with clarity, showing trade-offs and outcomes you might not see.",
  },
  {
    icon: Zap,
    title: "Continuous learning",
    description: "Alfie gets better over time. It learns your rhythms, adapts to changes, and evolves with your financial life.",
  },
];

export default function AlfieMoat() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-16 lg:py-20 bg-secondary/20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Alfie — the core
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Intelligence, not a chatbot.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Alfie isn't a chat window bolted onto a banking app. It's a reasoning
            layer built into the foundation of how Renda works.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <div
              key={c.title}
              className={`rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
