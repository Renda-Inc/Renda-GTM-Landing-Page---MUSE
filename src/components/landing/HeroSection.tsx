import { Apple, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-surface-dark">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(220_90%_56%/0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,hsl(160_84%_39%/0.08),transparent)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-dark-foreground/10 bg-surface-dark-foreground/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-surface-dark-foreground/70">
                Now accepting early access signups
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-surface-dark-foreground">
              The bank built
              <br />
              around{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                intelligence.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-surface-dark-foreground/60 max-w-lg leading-relaxed">
              Renda is an AI-native bank powered by Alfie — a financial intelligence
              that helps you understand, manage, and grow your money.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="h-12 px-8 inline-flex items-center rounded-xl bg-primary text-primary-foreground text-base font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
              >
                Join the Waitlist
              </a>
              <a
                href="#"
                className="h-12 px-6 inline-flex items-center rounded-xl border border-surface-dark-foreground/15 text-surface-dark-foreground/80 text-base font-medium hover:bg-surface-dark-foreground/5 transition-all"
              >
                Download App
              </a>
            </div>

            {/* App Store Buttons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 h-11 px-5 rounded-lg bg-surface-dark-foreground/10 border border-surface-dark-foreground/10 hover:bg-surface-dark-foreground/15 transition-colors"
              >
                <Apple className="w-5 h-5 text-surface-dark-foreground" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-surface-dark-foreground/50">
                    Download on the
                  </p>
                  <p className="text-sm font-semibold text-surface-dark-foreground leading-tight">
                    App Store
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 h-11 px-5 rounded-lg bg-surface-dark-foreground/10 border border-surface-dark-foreground/10 hover:bg-surface-dark-foreground/15 transition-colors"
              >
                <Play className="w-5 h-5 text-surface-dark-foreground" fill="currentColor" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-surface-dark-foreground/50">
                    Get it on
                  </p>
                  <p className="text-sm font-semibold text-surface-dark-foreground leading-tight">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right — Product Mockup */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-[320px]">
              {/* Phone frame */}
              <div className="rounded-[2.5rem] border border-surface-dark-foreground/10 bg-gradient-to-b from-surface-dark-foreground/[0.06] to-surface-dark-foreground/[0.02] p-3 shadow-2xl">
                <div className="rounded-[2rem] bg-surface-dark overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-xs font-medium text-surface-dark-foreground/50">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 rounded-sm border border-surface-dark-foreground/30" />
                    </div>
                  </div>

                  {/* App UI */}
                  <div className="px-5 pb-8 space-y-5">
                    {/* Greeting */}
                    <div className="pt-2">
                      <p className="text-sm text-surface-dark-foreground/50">Good morning</p>
                      <p className="text-lg font-semibold text-surface-dark-foreground">Your finances at a glance</p>
                    </div>

                    {/* Balance card */}
                    <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 border border-surface-dark-foreground/10 p-5">
                      <p className="text-xs text-surface-dark-foreground/50 uppercase tracking-wider">Total Balance</p>
                      <p className="text-3xl font-bold text-surface-dark-foreground mt-1">$12,847.50</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className="text-xs font-medium text-accent">+2.4%</span>
                        <span className="text-xs text-surface-dark-foreground/40">this month</span>
                      </div>
                    </div>

                    {/* Alfie insight */}
                    <div className="rounded-xl bg-surface-dark-foreground/[0.04] border border-surface-dark-foreground/8 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-xs font-semibold text-primary">Alfie Insight</span>
                      </div>
                      <p className="text-sm text-surface-dark-foreground/70 leading-relaxed">
                        Your spending is 12% lower than usual. You're on track to save an extra $340 this month.
                      </p>
                    </div>

                    {/* Quick actions */}
                    <div className="grid grid-cols-3 gap-2">
                      {["Send", "Request", "Invest"].map((a) => (
                        <div
                          key={a}
                          className="rounded-xl bg-surface-dark-foreground/[0.04] border border-surface-dark-foreground/8 py-3 text-center"
                        >
                          <span className="text-xs font-medium text-surface-dark-foreground/60">{a}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-20 -z-10 bg-[radial-gradient(circle,hsl(220_90%_56%/0.12),transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
