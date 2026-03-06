import { useFadeIn } from "@/hooks/use-fade-in";

const capabilities = [
  {
    title: "Contextual reasoning",
    description: "Alfie connects patterns across your financial life — spending, saving, timing, goals — to give you insight, not just information.",
  },
  {
    title: "Decision support",
    description: "Not prescriptive advice. Alfie helps you think through choices with clarity, showing trade-offs and outcomes you might not see.",
  },
  {
    title: "Continuous learning",
    description: "Alfie gets better over time. It learns your rhythms, adapts to changes, and evolves with your financial life.",
  },
];

export default function AlfieMoat() {
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Alfie — the core
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Intelligence, not a chatbot.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            Alfie isn't a chat window bolted onto a banking app. It's a reasoning
            layer built into the foundation of how Renda works — understanding
            context, connecting dots, and supporting better decisions over time.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {capabilities.map((c) => (
            <div key={c.title} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{c.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
