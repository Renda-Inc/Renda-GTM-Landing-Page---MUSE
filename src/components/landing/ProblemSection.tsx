import { useFadeIn } from "@/hooks/use-fade-in";

const problems = [
  {
    title: "No guidance",
    description:
      "Banks show you numbers. They never tell you what they mean or what to do about them.",
  },
  {
    title: "No context",
    description:
      "Your financial life is interconnected. Your bank treats every transaction as isolated.",
  },
  {
    title: "No understanding",
    description:
      "You've changed. Your goals have changed. Your bank hasn't noticed.",
  },
];

export default function ProblemSection() {
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
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Banking hasn't evolved. You have.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            The world has changed dramatically. Banks haven't. Most still operate
            with the same logic they had decades ago — just with better apps.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {problems.map((p) => (
            <div key={p.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
