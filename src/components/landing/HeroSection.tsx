import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function HeroSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-accent-blue">
      {/* Full-bleed lifestyle background */}
      <div className="absolute inset-0">
        <img
          src={heroLifestyle}
          alt="Confident young person looking toward the future against a blue sky"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content overlay - bottom-left aligned */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 w-full">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white">
            Meet the bank
            <br />
            built around
            <br />
            intelligence.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
            Powered by Alfie, the intelligent financial operating system, that helps you understand, plan, and move your money with confidence.
          </p>


          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-foreground text-base font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
            >
              Create an account
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background text-base font-medium hover:bg-foreground/85 hover:-translate-y-0.5 transition-all duration-300"
            >
              Download the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
