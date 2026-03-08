import { useFadeIn } from "@/hooks/use-fade-in";

export default function FutureVision() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="vision" className="relative py-32 lg:py-40 overflow-hidden">
      {/* Subtle bottom gradient hinting at next dark section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-surface-dark/5 pointer-events-none" />

      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
          The road ahead
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
          Built for individuals today. Designed for much more.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
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
    </section>
  );
}
