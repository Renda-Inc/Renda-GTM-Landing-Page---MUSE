import { useFadeIn } from "@/hooks/use-fade-in";
import lifestyleCafeLaptop from "@/assets/lifestyle-cafe-laptop.jpg";

export default function FutureVision() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="vision" className="py-16 lg:py-20 relative overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl h-[450px] group">
            <img src={lifestyleCafeLaptop} alt="Working at cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>

          <div>
            <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-6">
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

            {/* Roadmap */}
            <div className="mt-8 space-y-3">
              {[
                { phase: "Now", title: "Personal banking with Alfie", active: true },
                { phase: "Next", title: "Business accounts & expense intelligence", active: false },
                { phase: "Future", title: "Multi-account reasoning & open platform", active: false },
              ].map((item) => (
                <div
                  key={item.phase}
                  className={`rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                    item.active
                      ? "border-primary/30 bg-primary/5"
                      : "border-border bg-card hover:border-primary/15"
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
      </div>
    </section>
  );
}
