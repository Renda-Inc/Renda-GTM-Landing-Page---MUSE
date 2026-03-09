import { ArrowRight, Apple } from "lucide-react";
import alfieChatScreen from "@/assets/alfie-chat-mockup.webp";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function HeroSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-accent-blue">
      {/* Abstract background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-blue to-foreground" />
      {/* Subtle animated orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-peach/10 blur-[150px] animate-[drift-hero_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] animate-[drift-hero-2_25s_ease-in-out_infinite]" />

      {/* Content */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {/* Early access badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-peach animate-pulse" />
              <span className="text-sm font-medium text-white/90">Early access — now open</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white">
              Meet the bank
              <br />
              built around
              <br />
              intelligence.
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              Renda is an AI-native bank powered by Alfie — a financial AI that helps you understand, manage, and move your money with clarity.
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

            {/* App store links */}
            <div className="mt-5 flex items-center gap-4">
              <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm">
                <Apple className="w-4 h-4" />
                <span>Download on the App Store</span>
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.395 13l2.303-2.492zM5.864 2.658L16.8 9.99l-2.303 2.303L5.864 2.658z"/>
                </svg>
                <span>Get it on Google Play</span>
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          >
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute -inset-8 bg-accent-peach/15 rounded-[60px] blur-[60px]" />
              <img
                src={alfieChatScreen}
                alt="Alfie AI chat conversation showing travel budget advice"
                className="relative w-[300px] md:w-[340px] lg:w-[380px] rounded-[40px] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drift-hero {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.1); }
        }
        @keyframes drift-hero-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -20px) scale(1.15); }
        }
      `}</style>
    </section>
  );
}
