import { useFadeIn } from "@/hooks/use-fade-in";
import { AlertCircle, Eye, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "No guidance",
    description: "Banks show you numbers. They never tell you what they mean or what to do about them.",
  },
  {
    icon: Eye,
    title: "No context",
    description: "Your financial life is interconnected. Your bank treats every transaction as isolated.",
  },
  {
    icon: TrendingDown,
    title: "No understanding",
    description: "You've changed. Your goals have changed. Your bank hasn't noticed.",
  },
];

export default function ProblemSection() {
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
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Banking hasn't evolved. You have.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            The world has changed dramatically. Banks haven't. Most still operate
            with the same logic they had decades ago — just with better apps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
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
