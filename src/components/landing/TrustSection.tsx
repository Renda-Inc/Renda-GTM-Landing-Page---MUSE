import { useFadeIn } from "@/hooks/use-fade-in";

const commitments = [
  "You always control what Alfie can see and do.",
  "Your data is never sold. Period.",
  "AI decisions are transparent and explainable.",
  "Human oversight is built into every critical path.",
];

export default function TrustSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-32 lg:py-40 bg-surface-elevated">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Trust & responsibility
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
          AI and money demand seriousness.
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
          We don't take lightly the responsibility of combining artificial intelligence
          with your financial life. Every system we build is designed with control,
          transparency, and accountability at its core.
        </p>
        <ul className="mt-10 space-y-4">
          {commitments.map((c) => (
            <li key={c} className="flex items-start gap-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-base text-foreground">{c}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
