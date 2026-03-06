import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

/* ─── Fade-in wrapper ─── */
function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Section divider ─── */
function Divider() {
  return <div className="max-w-5xl mx-auto px-6"><div className="border-t border-border" /></div>;
}

export default function PersonalBanking() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [hash]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
        <FadeSection className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Personal Banking
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Banking that thinks ahead.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed">
            Renda combines smart accounts, an AI-powered card, seamless payments, and goal-based saving
            — all guided by Alfie, your personal financial intelligence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#waitlist"
              className="h-12 px-8 inline-flex items-center rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Open Your Smart Account
            </a>
            <a
              href="#smart-accounts"
              className="h-12 px-8 inline-flex items-center rounded-full border border-border text-sm font-semibold text-foreground hover:bg-muted/10 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </FadeSection>
      </section>

      <Divider />

      {/* ════════════ SMART ACCOUNTS ════════════ */}
      <section id="smart-accounts" className="scroll-mt-20 py-24 lg:py-32">
        <FadeSection className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Smart Accounts
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Your money shouldn't just sit there. It should think.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              SmartSpend and SenseSave accounts are monitored in real time by Alfie — giving you clarity,
              insights, and proactive guidance.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — narrative */}
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Your Renda account doesn't just track transactions — it understands them.
              </p>
              <p>
                Alfie monitors your inflow, outflow, recurring patterns, and behavioral trends to
                help you make confident financial decisions in real time.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Understand where your money is really going</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Spot waste before it compounds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Adjust spending in real time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Make informed decisions with confidence</span>
                </li>
              </ul>
            </div>

            {/* Right — conversational UI mockup */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
               <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Alfie Insight
              </p>
              <div className="space-y-4">
                <div className="bg-background rounded-xl px-5 py-4 text-sm text-foreground leading-relaxed">
                  "Your subscription spending increased 18% this quarter. Two services overlap — want me
                  to flag them?"
                </div>
                <div className="bg-primary/10 rounded-xl px-5 py-4 text-sm text-foreground leading-relaxed border border-primary/20">
                  "I moved $120 to SenseSave. Your groceries came in under pattern this week."
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Instead of charts you never look at, you get conversations that move you forward.
              </p>
            </div>
          </div>

          <p className="mt-12 text-base font-medium text-primary tracking-wide">
            This is adaptive banking — built around you.
          </p>
        </FadeSection>
      </section>

      <Divider />

      {/* ════════════ CARDS & PAYMENTS ════════════ */}
      <section id="cards-payments" className="scroll-mt-20 py-24 lg:py-32">
        <FadeSection className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Cards & Payments
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              A card that learns. Payments that just work.
            </h2>
          </div>

          {/* Smart Card */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Smart Card</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Your Renda Smart Card is connected to your financial intelligence layer. It adapts
                with you.
              </p>
              <ul className="space-y-3 text-foreground/80 text-base">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Real-time transaction intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Smart alerts before problems happen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Context-aware insights at the point of spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Seamless control from your app</span>
                </li>
              </ul>
              <p className="mt-6 text-base text-muted-foreground italic">
                It's not just a debit card. It's your financial operating system in your wallet.
              </p>
            </div>

            {/* Card visual */}
            <div className="flex justify-center">
              <div className="w-72 h-44 rounded-2xl bg-gradient-to-br from-[hsl(36,90%,50%)] to-[hsl(25,85%,42%)] p-6 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-start">
                  <span className="text-base font-bold tracking-wider text-white/90">RENDA</span>
                  <span className="text-xs uppercase tracking-[0.15em] text-white/60">Smart</span>
                </div>
                <div>
                  <div className="text-sm text-white/50 tracking-widest mb-1">•••• •••• •••• 4821</div>
                  <div className="text-sm text-white/70">Cardholder Name</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payments */}
          <div className="mt-20">
            <h3 className="text-xl font-bold text-foreground mb-4">Payments</h3>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-2xl">
              Money should move instantly, clearly, and confidently.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Direct Deposits", desc: "Receive paychecks and deposits effortlessly into your SmartSpend account." },
                { title: "Transfers", desc: "Send and receive transfers securely with full contextual tracking." },
                { title: "Interac", desc: "Nationwide compatibility for everyday Canadian payments." },
                { title: "Renda P2P", desc: "Instant transfers within the Renda network — no friction, no delays." },
              ].map((item) => (
                <div key={item.title} className="border-t border-border pt-5 space-y-2">
                  <h4 className="text-base font-semibold text-foreground">{item.title}</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-base text-muted-foreground leading-relaxed max-w-xl">
              When both sides use intelligent banking, payments feel invisible.
            </p>
          </div>
        </FadeSection>
      </section>

      <Divider />

      {/* ════════════ SAVINGS & GOALS ════════════ */}
      <section id="savings-goals" className="scroll-mt-20 py-24 lg:py-32">
        <FadeSection className="max-w-5xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Savings & Goals
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Savings that adapt to your life.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              Most banks automate savings blindly. Renda builds a strategy around you.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                Alfie monitors your real-time financial position and helps you make progress
                toward goals that actually matter.
              </p>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Set personalized savings goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Adjust contributions based on income and spending shifts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Avoid over-saving during tight months</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>Accelerate when you're ahead</span>
                </li>
              </ul>
              <p className="text-base text-muted-foreground italic">
                It feels less like "auto-transfer" and more like having a financial partner.
              </p>
            </div>

            {/* Savings insight mockup */}
            <div className="bg-card border border-border rounded-2xl p-8 space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Goal Progress
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">Emergency Fund</span>
                    <span className="text-muted-foreground">$3,240 / $5,000</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: "65%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">Vacation 2026</span>
                    <span className="text-muted-foreground">$1,800 / $4,000</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: "45%" }} />
                  </div>
                </div>
              </div>
              <div className="bg-background rounded-xl px-5 py-4 text-sm text-foreground leading-relaxed">
                "You're ahead of schedule on your emergency fund. I've increased this week's
                contribution by $15."
              </div>
            </div>
          </div>

          <p className="mt-12 text-base font-medium text-primary tracking-wide">
            You don't just set goals. You make progress.
          </p>
        </FadeSection>
      </section>

      <Divider />

      {/* ════════════ CLOSING CTA ════════════ */}
      <section className="py-24 lg:py-32">
        <FadeSection className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            One intelligent system. Total financial clarity.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-base font-medium text-muted-foreground">
            <span>Smart Accounts</span>
            <span className="text-border">·</span>
            <span>Adaptive Card</span>
            <span className="text-border">·</span>
            <span>Seamless Payments</span>
            <span className="text-border">·</span>
            <span>Personalized Savings</span>
          </div>
          <p className="mt-4 text-base text-primary font-medium">All powered by Alfie.</p>
          <div className="mt-10">
            <a
              href="#waitlist"
              className="h-12 px-8 inline-flex items-center rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start Banking Smarter
            </a>
          </div>
        </FadeSection>
      </section>

      <Footer />
    </main>
  );
}
