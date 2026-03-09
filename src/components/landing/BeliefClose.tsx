import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight } from "lucide-react";

export default function BeliefClose() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="waitlist" className="py-20 lg:py-28 bg-surface-dark text-surface-dark-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,hsl(220_90%_56%/0.08),transparent)]" />
      <div
        ref={ref}
        className={`relative max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-surface-dark-foreground">
          Ready for a
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            smarter bank?
          </span>
        </h2>
        <p className="mt-4 text-lg text-surface-dark-foreground/50">
          Join thousands of Canadians on the waitlist.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="group h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground text-base font-semibold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#"
            className="h-12 px-6 inline-flex items-center rounded-xl border border-surface-dark-foreground/12 text-surface-dark-foreground/70 text-base font-medium hover:bg-surface-dark-foreground/[0.04] transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
