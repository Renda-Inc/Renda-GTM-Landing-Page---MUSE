import { useFadeIn } from "@/hooks/use-fade-in";
import { AlertCircle, Eye, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "No guidance",
    description: "Banks show numbers — never what they mean or what to do next.",
  },
  {
    icon: Eye,
    title: "No context",
    description: "Your finances are interconnected. Your bank treats them as isolated events.",
  },
  {
    icon: TrendingDown,
    title: "No understanding",
    description: "Your life has changed. Your goals have changed. Your bank hasn't noticed.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,hsl(220_90%_56%/0.06),transparent)]" />
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
            Banking hasn't evolved. You have.
          </h2>
          <p className="mt-4 text-base text-surface-dark-foreground/50 leading-relaxed">
            Better apps, same logic. Most banks still operate like they did decades ago.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-surface-dark-foreground/8 bg-surface-dark-foreground/[0.02] p-7 hover:border-surface-dark-foreground/15 hover:bg-surface-dark-foreground/[0.04] hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-surface-dark-foreground/[0.05] flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <p.icon className="w-5 h-5 text-surface-dark-foreground/40 group-hover:text-primary transition-colors" />
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
