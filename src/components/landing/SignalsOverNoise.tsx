import { useFadeIn } from "@/hooks/use-fade-in";
import lifestyleCasualGathering from "@/assets/lifestyle-casual-gathering.jpg";

export default function SignalsOverNoise() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-16 lg:py-20 overflow-hidden relative">
      {/* Full bleed lifestyle image */}
      <div className="absolute inset-0">
        <img src={lifestyleCasualGathering} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
          What matters, when it matters
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
          Alfie surfaces the signal.
          <br />
          <span className="text-primary">
            Not the noise.
          </span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          No endless notifications. No dashboards for the sake of dashboards.
          Alfie watches, understands, and speaks up only when it matters.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Purposeful", text: "Every insight Alfie surfaces has a reason. No filler, no vanity metrics." },
            { title: "Timely", text: "Context-aware timing means Alfie reaches you when the information is actionable." },
            { title: "Calm", text: "Designed for peace of mind. Intelligence that works quietly in the background." },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 text-left hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
