import { Apple, Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-30%,hsl(220_90%_56%/0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_100%_50%,hsl(160_84%_39%/0.06),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-dark-foreground/10 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Copy */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-dark-foreground/10 bg-surface-dark-foreground/[0.04] mb-8 group hover:border-primary/30 transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-sm font-medium text-surface-dark-foreground/60">
                Early access — now open
              </span>
              <ArrowRight className="w-3 h-3 text-surface-dark-foreground/30 group-hover:text-primary/60 transition-colors" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-surface-dark-foreground">
              The bank built
              <br />
              around{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                intelligence.
              </span>
            </h1>

            <p className="mt-6 text-lg text-surface-dark-foreground/50 max-w-md leading-relaxed">
              AI-native banking powered by Alfie — understand, manage, and grow your money with real financial intelligence.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="group h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#"
                className="h-12 px-6 inline-flex items-center rounded-xl border border-surface-dark-foreground/12 text-surface-dark-foreground/70 text-[15px] font-medium hover:bg-surface-dark-foreground/[0.04] hover:border-surface-dark-foreground/20 transition-all duration-200"
              >
                Download App
              </a>
            </div>

            {/* Store buttons */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 h-11 px-4 rounded-lg bg-surface-dark-foreground/[0.06] border border-surface-dark-foreground/8 hover:bg-surface-dark-foreground/10 hover:border-surface-dark-foreground/15 transition-all duration-200"
              >
                <Apple className="w-5 h-5 text-surface-dark-foreground/80" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-surface-dark-foreground/40">Download on the</p>
                  <p className="text-sm font-semibold text-surface-dark-foreground/80 leading-tight">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2.5 h-11 px-4 rounded-lg bg-surface-dark-foreground/[0.06] border border-surface-dark-foreground/8 hover:bg-surface-dark-foreground/10 hover:border-surface-dark-foreground/15 transition-all duration-200"
              >
                <Play className="w-5 h-5 text-surface-dark-foreground/80" fill="currentColor" />
                <div className="text-left">
                  <p className="text-[10px] leading-none text-surface-dark-foreground/40">Get it on</p>
                  <p className="text-sm font-semibold text-surface-dark-foreground/80 leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Product Mockup */}
          <div className="hidden lg:flex justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative w-[300px]">
              {/* Phone */}
              <div className="rounded-[2.5rem] border border-surface-dark-foreground/8 bg-gradient-to-b from-surface-dark-foreground/[0.05] to-transparent p-3 shadow-2xl">
                <div className="rounded-[2rem] bg-[hsl(222_47%_8%)] overflow-hidden">
                  <div className="flex items-center justify-between px-6 pt-4 pb-2">
                    <span className="text-[11px] font-medium text-surface-dark-foreground/40">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3.5 h-[7px] rounded-[2px] border border-surface-dark-foreground/25">
                        <div className="w-2/3 h-full bg-accent/60 rounded-[1px]" />
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-6 space-y-4">
                    <div className="pt-1">
                      <p className="text-[11px] text-surface-dark-foreground/35 font-medium">Good morning</p>
                      <p className="text-[15px] font-semibold text-surface-dark-foreground/90 mt-0.5">Your finances</p>
                    </div>

                    {/* Balance */}
                    <div className="rounded-2xl bg-gradient-to-br from-primary/15 via-primary/8 to-accent/5 border border-surface-dark-foreground/6 p-4">
                      <p className="text-[10px] text-surface-dark-foreground/40 uppercase tracking-widest font-medium">Total Balance</p>
                      <p className="text-[26px] font-bold text-surface-dark-foreground/95 mt-0.5 tracking-tight">$12,847.50</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-[11px] font-semibold text-accent">↑ 2.4%</span>
                        <span className="text-[11px] text-surface-dark-foreground/30">this month</span>
                      </div>
                    </div>

                    {/* Alfie insight */}
                    <div className="rounded-xl bg-surface-dark-foreground/[0.03] border border-surface-dark-foreground/6 p-3.5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-[11px] font-semibold text-primary/80">Alfie</span>
                      </div>
                      <p className="text-[12px] text-surface-dark-foreground/55 leading-relaxed">
                        Spending is 12% below average. On track to save an extra $340 this month.
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="grid grid-cols-3 gap-2">
                      {["Send", "Request", "Invest"].map((a) => (
                        <div key={a} className="rounded-xl bg-surface-dark-foreground/[0.03] border border-surface-dark-foreground/5 py-2.5 text-center">
                          <span className="text-[11px] font-medium text-surface-dark-foreground/50">{a}</span>
                        </div>
                      ))}
                    </div>

                    {/* Transactions */}
                    <div className="space-y-2.5 pt-1">
                      <p className="text-[11px] font-semibold text-surface-dark-foreground/35 uppercase tracking-wider">Recent</p>
                      {[
                        { name: "Uber Eats", amount: "-$24.50", time: "2h ago" },
                        { name: "Salary", amount: "+$4,200", time: "Yesterday" },
                      ].map((tx) => (
                        <div key={tx.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-lg bg-surface-dark-foreground/[0.05] border border-surface-dark-foreground/5" />
                            <div>
                              <p className="text-[12px] font-medium text-surface-dark-foreground/70">{tx.name}</p>
                              <p className="text-[10px] text-surface-dark-foreground/30">{tx.time}</p>
                            </div>
                          </div>
                          <span className={`text-[12px] font-semibold ${tx.amount.startsWith("+") ? "text-accent/80" : "text-surface-dark-foreground/50"}`}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card — Alfie notification */}
              <div className="absolute -right-16 top-24 w-52 rounded-xl bg-surface-dark/90 backdrop-blur-sm border border-surface-dark-foreground/8 p-3 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                  </div>
                  <span className="text-[11px] font-semibold text-surface-dark-foreground/70">Alfie Insight</span>
                </div>
                <p className="text-[11px] text-surface-dark-foreground/45 leading-relaxed">
                  Your subscription spending increased 18% — review recurring charges?
                </p>
              </div>

              {/* Floating card — savings */}
              <div className="absolute -left-12 bottom-32 w-44 rounded-xl bg-surface-dark/90 backdrop-blur-sm border border-surface-dark-foreground/8 p-3 shadow-xl animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                <p className="text-[10px] text-surface-dark-foreground/35 uppercase tracking-wider font-medium">Savings goal</p>
                <p className="text-lg font-bold text-surface-dark-foreground/90 mt-0.5">$8,240</p>
                <div className="mt-2 h-1.5 bg-surface-dark-foreground/[0.06] rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>
                <p className="text-[10px] text-surface-dark-foreground/30 mt-1">68% of $12,000</p>
              </div>

              {/* Glow */}
              <div className="absolute -inset-24 -z-10 bg-[radial-gradient(circle,hsl(220_90%_56%/0.1),transparent_60%)]" />
            </div>
          </div>
        </div>

        {/* Social proof bar */}
        <div className="mt-16 pt-8 border-t border-surface-dark-foreground/6 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm text-surface-dark-foreground/30 font-medium">Trusted by forward-thinking Canadians</p>
            <div className="flex items-center gap-8">
              {[
                { value: "2,400+", label: "Waitlist" },
                { value: "AI-native", label: "Architecture" },
                { value: "Canada", label: "Regulated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-sm font-bold text-surface-dark-foreground/70">{stat.value}</p>
                  <p className="text-[11px] text-surface-dark-foreground/30">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
