export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-3xl mx-auto px-6 text-center py-32">
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
