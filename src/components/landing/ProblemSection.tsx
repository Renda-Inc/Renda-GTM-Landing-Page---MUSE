import { useFadeIn } from "@/hooks/use-fade-in";
import { AlertCircle, Eye, TrendingDown } from "lucide-react";
import lifestyleHike from "@/assets/lifestyle-outdoor-hike.jpg";

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
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Full bleed lifestyle image */}
      <div className="absolute inset-0">
        <img src={lifestyleHike} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

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
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Banking hasn't evolved. You have.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Better apps, same logic. Most banks still operate like they did decades ago.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-7 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
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
