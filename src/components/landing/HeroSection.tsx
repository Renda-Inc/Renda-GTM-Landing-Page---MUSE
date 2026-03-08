import heroImg from "@/assets/hero-abstract.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
      </div>

      {/* Radial glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(27 95% 60% / 0.3), transparent 70%)' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-32">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground">
          Meet the bank built around intelligence.
        </h1>
        <p className="mt-6 text-lg md:text-xl font-medium text-muted-foreground">
          Banking that actually helps you.
        </p>
        <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Renda is an AI-native bank powered by Alfie — a financial AI that helps you understand,
          manage, and move your money with clarity, not confusion.
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
