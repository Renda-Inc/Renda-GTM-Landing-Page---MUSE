import { ArrowRight } from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import alfieMockup from "@/assets/alfie-chat-mockup.webp";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function HeroSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-accent-blue">
      {/* Full-bleed lifestyle background */}
      <div className="absolute inset-0">
        <img
          src={heroLifestyle}
          alt="Person looking up optimistically against a blue sky"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle gradient for text readability at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Phone mockup - positioned right, overlapping */}
      <div className="absolute right-[5%] lg:right-[8%] bottom-[8%] z-20 hidden md:block">
        <div
          className={`transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        >
          <img
            src={alfieMockup}
            alt="Alfie AI chat conversation showing travel budget advice"
            className="w-[260px] lg:w-[320px] drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Content overlay - bottom-left aligned like reference */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 w-full">
        <div
          className={`max-w-3xl transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Large bold headline - white, overlapping the image like the reference */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white">
            Banking,
            <br />
            reimagined
            <br className="hidden sm:block" />
            {" "}with AI.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-md leading-relaxed">
            With Alfie – your AI financial partner, banking becomes smarter, simpler, more human.
          </p>

          {/* Dark CTA button like reference */}
          <div className="mt-8">
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background text-base font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
            >
              Join Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
