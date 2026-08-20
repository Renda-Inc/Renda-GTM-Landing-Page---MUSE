import { ArrowRight, Apple } from "lucide-react";
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
              Join the Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full border border-white/30 text-white text-base font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Download the App
            </a>
          </div>

          {/* App store buttons */}
          <div className="mt-5 flex items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-sm">
              <Apple className="w-4 h-4" />
              <span>Download on the App Store</span>
            </a>
            <a href="#" className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 13l2.303-2.492zM5.864 2.658L16.8 9.99l-2.303 2.303L5.864 2.658z"/>
              </svg>
              <span>Get it on Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
