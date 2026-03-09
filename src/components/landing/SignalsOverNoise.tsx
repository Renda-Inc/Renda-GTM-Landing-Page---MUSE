import { useFadeIn } from "@/hooks/use-fade-in";

export default function SignalsOverNoise() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-surface-dark text-surface-dark-foreground overflow-hidden">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
          What matters, when it matters
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-surface-dark-foreground">
          Alfie surfaces the signal.
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Not the noise.
          </span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-surface-dark-foreground/60 max-w-2xl mx-auto leading-relaxed">
          No endless notifications. No dashboards for the sake of dashboards.
          Alfie watches, understands, and speaks up only when it matters.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Purposeful", text: "Every insight Alfie surfaces has a reason. No filler, no vanity metrics." },
            { title: "Timely", text: "Context-aware timing means Alfie reaches you when the information is actionable." },
            { title: "Calm", text: "Designed for peace of mind. Intelligence that works quietly in the background." },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-surface-dark-foreground/10 bg-surface-dark-foreground/[0.03] p-8 text-left"
            >
              <h3 className="text-lg font-semibold text-surface-dark-foreground mb-3">{item.title}</h3>
              <p className="text-base text-surface-dark-foreground/50 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
