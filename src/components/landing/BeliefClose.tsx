import { useFadeIn } from "@/hooks/use-fade-in";

export default function BeliefClose() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="waitlist" className="py-32 lg:py-44">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-foreground">
          Banking should understand you.
          <br />
          We're building it.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Renda is for people who believe their bank should be as intelligent
          as the rest of their life.
        </p>
        <div className="mt-12">
          <a
            href="#waitlist"
            className="inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
}
