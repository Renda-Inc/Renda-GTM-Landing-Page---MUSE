import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight } from "lucide-react";

export default function BlogNewsletter() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div
        ref={ref}
        className={`max-w-2xl mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
          Stay informed.
        </h2>
        <p className="mt-4 text-base text-background/80 leading-relaxed">
          Get our latest thinking on AI, banking, and financial infrastructure — delivered
          monthly. No noise.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            aria-label="Email address"
            placeholder="you@email.com"
            className="h-14 w-full sm:flex-1 px-6 rounded-full border border-background/20 bg-background/10 text-base text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-background/30 backdrop-blur-sm"
          />
          <button type="button" className="group h-14 px-7 rounded-full bg-background text-foreground text-base font-semibold hover:bg-background/90 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2 whitespace-nowrap">
            Subscribe
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
