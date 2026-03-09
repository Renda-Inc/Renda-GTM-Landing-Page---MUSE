import { Apple, Play, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,hsl(220_90%_56%/0.14),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_90%_60%,hsl(160_84%_39%/0.05),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-dark-foreground/8 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        {/* Top: centered copy */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-dark-foreground/8 bg-surface-dark-foreground/[0.03] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-surface-dark-foreground/50">Early access — now open</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-surface-dark-foreground">
            Meet the bank built around{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              intelligence.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-surface-dark-foreground/45 max-w-2xl mx-auto leading-relaxed">
            Renda is an AI-native bank powered by Alfie — a financial AI that helps you understand, manage, and move your money with clarity.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="group h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="h-12 px-6 inline-flex items-center rounded-xl border border-surface-dark-foreground/12 text-surface-dark-foreground/65 text-[15px] font-medium hover:bg-surface-dark-foreground/[0.04] hover:border-surface-dark-foreground/20 transition-all duration-200"
            >
              Download the App
            </a>
          </div>

          {/* Store buttons */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-dark-foreground/[0.05] border border-surface-dark-foreground/6 hover:bg-surface-dark-foreground/[0.08] transition-all duration-200">
              <Apple className="w-4 h-4 text-surface-dark-foreground/70" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-surface-dark-foreground/35">Download on the</p>
                <p className="text-[13px] font-semibold text-surface-dark-foreground/70 leading-tight">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-dark-foreground/[0.05] border border-surface-dark-foreground/6 hover:bg-surface-dark-foreground/[0.08] transition-all duration-200">
              <Play className="w-4 h-4 text-surface-dark-foreground/70" fill="currentColor" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-surface-dark-foreground/35">Get it on</p>
                <p className="text-[13px] font-semibold text-surface-dark-foreground/70 leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Product visual — centered below copy */}
        <div className="mt-14 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          <div className="relative">
            {/* Main app frame — browser-style */}
            <div className="w-full max-w-[720px] rounded-2xl border border-surface-dark-foreground/8 bg-[hsl(222_47%_8%)] shadow-2xl overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-dark-foreground/6">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-dark-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-dark-foreground/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-surface-dark-foreground/10" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="h-6 px-4 rounded-md bg-surface-dark-foreground/[0.04] border border-surface-dark-foreground/6 flex items-center">
                    <span className="text-[11px] text-surface-dark-foreground/25 font-medium">app.renda.ca</span>
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* App content */}
              <div className="p-6 grid grid-cols-[200px_1fr] gap-5">
                {/* Sidebar */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-primary/10">
                    <div className="w-4 h-4 rounded bg-primary/30" />
                    <span className="text-[13px] font-medium text-primary">Dashboard</span>
                  </div>
                  {["Accounts", "Cards", "Payments", "Savings", "Alfie"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-surface-dark-foreground/[0.03] transition-colors">
                      <div className="w-4 h-4 rounded bg-surface-dark-foreground/[0.06]" />
                      <span className="text-[13px] text-surface-dark-foreground/40">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="space-y-4">
                  {/* Balance row */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[11px] text-surface-dark-foreground/30 uppercase tracking-wider font-medium">Total Balance</p>
                      <p className="text-3xl font-bold text-surface-dark-foreground/90 tracking-tight mt-0.5">$12,847.50</p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-accent/10">
                      <span className="text-[12px] font-semibold text-accent">↑ 2.4%</span>
                      <span className="text-[11px] text-surface-dark-foreground/25">this month</span>
                    </div>
                  </div>

                  {/* Cards row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Chequing", value: "$6,420.00" },
                      { label: "Savings", value: "$4,827.50" },
                      { label: "Investment", value: "$1,600.00" },
                    ].map((acc) => (
                      <div key={acc.label} className="rounded-xl bg-surface-dark-foreground/[0.03] border border-surface-dark-foreground/5 p-3.5">
                        <p className="text-[10px] text-surface-dark-foreground/30 uppercase tracking-wider">{acc.label}</p>
                        <p className="text-[15px] font-semibold text-surface-dark-foreground/80 mt-1">{acc.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Alfie insight */}
                  <div className="rounded-xl bg-gradient-to-r from-primary/[0.06] to-accent/[0.03] border border-primary/10 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary-foreground" />
                      </div>
                      <span className="text-[12px] font-semibold text-primary">Alfie Insight</span>
                      <span className="text-[10px] text-surface-dark-foreground/20 ml-auto">Just now</span>
                    </div>
                    <p className="text-[13px] text-surface-dark-foreground/55 leading-relaxed">
                      Your spending is 12% below average this month. Consider moving $340 to your savings goal — you'll reach your target 2 weeks early.
                    </p>
                    <div className="flex gap-2 mt-3">
                      <button className="h-7 px-3 rounded-md bg-primary text-primary-foreground text-[11px] font-medium">Move funds</button>
                      <button className="h-7 px-3 rounded-md border border-surface-dark-foreground/8 text-surface-dark-foreground/40 text-[11px] font-medium">Dismiss</button>
                    </div>
                  </div>

                  {/* Transactions */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold text-surface-dark-foreground/25 uppercase tracking-wider">Recent transactions</p>
                    {[
                      { name: "Uber Eats", cat: "Food & Drink", amount: "-$24.50", time: "2h ago" },
                      { name: "Spotify", cat: "Subscription", amount: "-$11.99", time: "Yesterday" },
                      { name: "Salary — Acme Inc", cat: "Income", amount: "+$4,200.00", time: "Mar 1" },
                    ].map((tx) => (
                      <div key={tx.name} className="flex items-center justify-between py-2 border-b border-surface-dark-foreground/[0.04] last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-surface-dark-foreground/[0.04] border border-surface-dark-foreground/5" />
                          <div>
                            <p className="text-[13px] font-medium text-surface-dark-foreground/70">{tx.name}</p>
                            <p className="text-[11px] text-surface-dark-foreground/25">{tx.cat}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-[13px] font-semibold ${tx.amount.startsWith("+") ? "text-accent/70" : "text-surface-dark-foreground/50"}`}>{tx.amount}</p>
                          <p className="text-[10px] text-surface-dark-foreground/20">{tx.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-20 -z-10 bg-[radial-gradient(circle,hsl(220_90%_56%/0.08),transparent_60%)]" />
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-6 border-t border-surface-dark-foreground/5 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-surface-dark-foreground/25 font-medium">Trusted by forward-thinking Canadians</p>
            <div className="flex items-center gap-8">
              {[
                { value: "2,400+", label: "Waitlist" },
                { value: "AI-native", label: "Architecture" },
                { value: "Canada", label: "Regulated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-sm font-bold text-surface-dark-foreground/60">{stat.value}</p>
                  <p className="text-[11px] text-surface-dark-foreground/25">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
