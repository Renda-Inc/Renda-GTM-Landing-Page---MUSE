import { useFadeIn } from "@/hooks/use-fade-in";

export default function FutureVision() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="vision" className="py-24 lg:py-32">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              The road ahead
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Built for individuals today. Designed for much more.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Alfie begins by helping individuals make smarter financial decisions.
                But the architecture is designed to grow — into business banking,
                multi-account intelligence, and broader financial ecosystems.
              </p>
              <p>
                We're not racing to launch features. We're building a system
                that compounds in value over time — for every user it serves.
              </p>
            </div>
          </div>

          {/* Roadmap visual */}
          <div className="space-y-4">
            {[
              { phase: "Now", title: "Personal banking with Alfie", active: true },
              { phase: "Next", title: "Business accounts & expense intelligence", active: false },
              { phase: "Future", title: "Multi-account reasoning & open platform", active: false },
            ].map((item) => (
              <div
                key={item.phase}
                className={`rounded-2xl border p-6 transition-all ${
                  item.active
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <span
                  className={`text-xs font-semibold uppercase tracking-wider ${
                    item.active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.phase}
                </span>
                <p className="text-base font-medium text-foreground mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
