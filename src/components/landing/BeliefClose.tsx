import { useFadeIn } from "@/hooks/use-fade-in";

export default function BeliefClose() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="waitlist" className="py-20 lg:py-28">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
          Ready for a smarter bank?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of Canadians waiting for Renda.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#waitlist"
            className="h-12 px-8 inline-flex items-center rounded-xl bg-primary text-primary-foreground text-base font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
          >
            Join the Waitlist
          </a>
          <a
            href="#"
            className="h-12 px-6 inline-flex items-center rounded-xl border border-border text-foreground text-base font-medium hover:bg-secondary transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
