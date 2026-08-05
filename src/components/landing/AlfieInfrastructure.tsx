import { useFadeIn } from "@/hooks/use-fade-in";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";

export default function AlfieInfrastructure() {
  const { ref, isVisible } = useFadeIn();

  const items = [
    {
      title: "Modular architecture",
      text: "From individual insights to cross-account reasoning, Alfie's modular design scales with complexity.",
    },
    {
      title: "Real-time signals",
      text: "Continuous processing of financial activity to surface meaning the moment it matters.",
    },
    {
      title: "Long-term modeling",
      text: "Financial patterns evolve. Alfie's models adapt and refine predictions over time.",
    },
    {
      title: "Platform-ready",
      text: "Built to serve individuals today and power third-party integrations tomorrow.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Lifestyle background */}
      <div className="absolute inset-0">
        <img src={lifestyleStudying} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/92 backdrop-blur-sm" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-6">
            Platform depth
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
            Alfie is infrastructure,
            <br />not a feature.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Most companies bolt AI onto existing products. We built Alfie as the
            foundation — a modular intelligence system that powers every layer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
              style={{ transitionDelay: `${i * 80}ms` }}
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
