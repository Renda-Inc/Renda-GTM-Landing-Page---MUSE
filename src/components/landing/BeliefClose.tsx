import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight } from "lucide-react";
import lifestyleBeach from "@/assets/lifestyle-beach.jpg";

export default function BeliefClose() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="waitlist" className="py-16 lg:py-20 relative overflow-hidden">
      {/* Softer background - less orange, more natural */}
      <div className="absolute inset-0">
        <img src={lifestyleBeach} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-background/50" />
      </div>

      <div
        ref={ref}
        className={`relative max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-foreground">
          Ready for a
          <br />
          <span className="text-primary">
            smarter bank?
          </span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Join thousands of Canadians on the waitlist.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#waitlist"
            className="group h-12 px-7 inline-flex items-center gap-2 rounded-full bg-foreground text-background text-base font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Join the Waitlist
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#"
            className="h-12 px-6 inline-flex items-center rounded-full border border-foreground/20 text-foreground text-base font-medium hover:bg-foreground/5 backdrop-blur-sm transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
