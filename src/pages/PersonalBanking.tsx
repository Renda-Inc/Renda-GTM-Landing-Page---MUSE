import { useEffect } from "react";
import InteracShowcase from "@/components/personal/InteracShowcase";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import AlfieSystemDiagram from "@/components/landing/AlfieSystemDiagram";
import { useFadeIn } from "@/hooks/use-fade-in";
import {
  Wallet,
  TrendingDown,
  Sliders,
  Bell,
  Sparkles,
  Zap,
  Tag,
  Eye,
  Target,
  PiggyBank,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";
import cardInHand from "@/assets/card-in-hand.png.asset.json";
import { RotatingCards } from "@/components/landing/CardShowcase";


const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

/* ─── Fade-in wrapper ─── */
function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t-2 border-border/70" />
    </div>
  );
}

/* ─── Section eyebrow ─── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">
      {children}
    </p>
  );
}

/* ─── Section H2 ─── */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight"
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
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
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar variant="solid" />

      {/* ════════════ HERO ════════════ */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Fade className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-6">
            Personal Banking
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80 hover:text-black transition-colors duration-300"
            style={{ fontFamily: SF_FONT }}
          >
            Banking that thinks ahead.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
            Renda combines intelligent accounts, an adaptive card, instant payments, and
            goal-based savings; all guided by Alfie, your personal AI financial assistant.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#waitlist"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
            >
              Open Your Smart Account
            </a>
            <a
              href="#smart-accounts"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full border border-black/15 bg-background text-foreground text-base font-medium hover:bg-black/5 transition"
            >
              See How It Works
            </a>
          </div>
        </Fade>

        <Fade className="mt-16 max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={heroLifestyle}
              alt="Person using Renda app"
              className="w-full h-[480px] lg:h-[720px] object-cover"
              width={1920}
              height={1080}
            />
          </div>
        </Fade>
      </section>


      {/* ════════════ SMART ACCOUNTS ════════════ */}
      <section id="smart-accounts" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <Eyebrow>Smart Accounts</Eyebrow>
            <H2>Two accounts that do the thinking with you.</H2>
            <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
              Meet SmartSpend and SenseSave, intelligent accounts monitored by Alfie to
              deliver meaningful insights and help you make more confident financial
              decisions.
            </p>
          </div>

          {/* Account cards, same layout and size as Sample 2 */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] bg-[#FAF7F1] p-9">
              <Wallet className="w-[26px] h-[26px] text-primary" />
              <h3
                className="mt-4 text-[26px] font-semibold tracking-tight text-black/80"
                style={{ fontFamily: SF_FONT }}
              >
                SmartSpend
              </h3>
              <p className="mt-2 max-w-md text-base text-black font-medium leading-relaxed">
                Your everyday account, with real-time intelligence built in. Balances that tell you what is actually
                safe to spend, after bills and goals, not just what is sitting there.
              </p>
              <div className="mt-7 space-y-3">
                {[
                  { label: "Groceries", spent: "$312 of $450", pct: 69 },
                  { label: "Dining out", spent: "$128 of $200", pct: 64 },
                  { label: "Transport", spent: "$74 of $120", pct: 62 },
                ].map((b) => (
                  <div key={b.label} className="rounded-2xl bg-white px-5 py-4 shadow-sm">
                    <div className="flex justify-between text-sm font-medium text-black/80">
                      <span>{b.label}</span>
                      <span>{b.spent}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-black/[0.07]">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${b.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[#171008] p-9 text-white">
              <PiggyBank className="w-[26px] h-[26px] text-primary" />
              <h3
                className="mt-4 text-[26px] font-semibold tracking-tight text-white"
                style={{ fontFamily: SF_FONT }}
              >
                SenseSave
              </h3>
              <p className="mt-2 max-w-md text-base text-white/60 font-medium leading-relaxed">
                Savings that adapt to your income and spending patterns. Alfie saves more on good weeks, eases off on
                tight ones, and never leaves you short for a bill.
              </p>
              <div className="mt-7 grid grid-cols-3 gap-3 text-center">
                {[
                  { state: "Good week", action: "Save more", active: false },
                  { state: "Normal week", action: "Stay the course", active: true },
                  { state: "Tight week", action: "Save less", active: false },
                ].map((s) => (
                  <div
                    key={s.state}
                    className={`rounded-2xl px-3 py-4 ${s.active ? "bg-white text-black/80" : "bg-white/[0.07] text-white/70 ring-1 ring-white/10"}`}
                  >
                    <p className="text-xs font-medium opacity-70">{s.state}</p>
                    <p className="mt-1 text-sm font-semibold leading-tight">{s.action}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-white/50 font-medium">
                You set the goals and the guardrails. Alfie adjusts inside them, and shows its working every time.
              </p>
            </div>
          </div>

          {/* Waste + adjustments, pastel cards matching the account cards above in width */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              {
                icon: TrendingDown,
                tint: "bg-[#FDEBD3]",
                title: "Waste Detection",
                desc: "Alfie spots overlapping subscriptions, price creep and silent leaks, then tells you exactly what each one costs you per year.",
              },
              {
                icon: Sliders,
                tint: "bg-[#F1EAFB]",
                title: "Live Adjustments",
                desc: "Plans change mid-week. Reshape budgets and goals with insights delivered at the moment that matters, not in a report at month end.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`flex gap-5 rounded-[1.75rem] p-8 ${f.tint} transition-transform duration-500 hover:scale-[1.02]`}
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/80 ring-1 ring-black/5 flex items-center justify-center">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3
                    className="text-lg font-semibold text-black/80 mb-2"
                    style={{ fontFamily: SF_FONT }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-base text-black font-medium leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ CARDS & PAYMENTS (dark) ════════════ */}
      <div style={{ backgroundColor: "#111111" }}>
        <section id="cards-payments" className="scroll-mt-20 py-16 lg:py-20">
          <Fade className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto mb-4 text-center">
              <p className="text-[15px] font-semibold tracking-[0.08em] text-white mb-8">
                Cards & Payments
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold text-white/90 leading-tight tracking-tight"
                style={{ fontFamily: SF_FONT }}
              >
                A card that learns. Payments that just work.
              </h2>
            </div>

            <RotatingCards />

            {/* Component A — Smart Card */}
            <div className="mt-20 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white/90 leading-tight tracking-tight"
                  style={{ fontFamily: SF_FONT }}
                >
                  Your financial operating system, in your wallet.
                </h3>
                <p className="mt-6 text-base md:text-lg text-white/80 font-medium leading-relaxed">
                  Your Renda Smart Card is more than a payment card. Connected directly to
                  Alfie, it understands every purchase, surfaces meaningful insights in real
                  time, and gives you effortless control from wherever you are.
                </p>
              </div>

              <div className="rounded-3xl overflow-hidden">
                <img
                  src={cardInHand.url}
                  alt="Hand holding a Renda Smart Card"
                  className="w-full h-[480px] lg:h-[720px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Fade>
        </section>

        <section className="pb-16 lg:pb-24">
          <Fade className="max-w-7xl mx-auto px-6">
            {/* Component B — Payments */}
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 rounded-3xl overflow-hidden">
                <img
                  src={lifestyleCafe}
                  alt="Tapping to pay at a cafe"
                  className="w-full h-[480px] lg:h-[720px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white/90 leading-tight tracking-tight"
                  style={{ fontFamily: SF_FONT }}
                >
                  Tap. Pay. Understand.
                </h3>
                <p className="mt-6 text-base md:text-lg text-white/80 font-medium leading-relaxed">
                  Every time you use your Renda Smart Card, Alfie captures the moment, not just
                  the transaction. You get real-time context, instant categorization, and
                  intelligent feedback that helps you spend smarter.
                </p>

                <div className="mt-8 space-y-5">
                  {[
                    {
                      icon: Zap,
                      title: "Instant Recognition",
                      desc: "Alfie identifies where you're paying, down to the merchant, category, and your usual pattern at that location.",
                    },
                    {
                      icon: Tag,
                      title: "Smart Categorization",
                      desc: "Your payment is automatically tagged (Groceries, Dining, Transport) and factored into your live budget and goals.",
                    },
                    {
                      icon: Eye,
                      title: "Contextual Insights",
                      desc: "Before you tap, Alfie can warn you. After you tap, Alfie can guide you.",
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                        <f.icon className="w-5 h-5 text-[#EB8F00]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white/90">{f.title}</h4>
                        <p className="text-[15px] text-white/80 font-medium leading-relaxed mt-1">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        </section>
      </div>


      <Divider />

      {/* ════════════ PEER-TO-PEER ════════════ */}
      <section id="p2p" className="scroll-mt-20 py-16 lg:py-20 bg-[#F6F5F2]">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>RenPay</Eyebrow>
              <H2>Instant transfers. Real network.</H2>
              <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
                Send money instantly to anyone in the Renda network. Add contacts using a
                Renda ID or QR code, then move money immediately, without delays, friction,
                or unnecessary steps.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src={lifestyleGathering}
                  alt="Friends splitting a bill"
                  className="w-full h-[320px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-2xl p-7 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Alfie Insight
                  </p>
                </div>
                <p className="text-[15px] text-black/80 leading-relaxed">
                  "You just received $25 from Maya. That's marked as 'Repayment.' Want to
                  apply it to your SenseSave goal?"
                </p>
              </div>
              <p className="text-sm text-black font-medium italic">
                When both sides use intelligent banking, payments feel invisible.
              </p>
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ SAVINGS & GOALS ════════════ */}
      <section id="savings-goals" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-3xl overflow-hidden order-2 lg:order-1">
              <img
                src={lifestyleStudying}
                alt="Planning savings goals"
                className="w-full h-[264px] lg:h-[396px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Savings & Goals</Eyebrow>
              <H2>Savings that adapt to your life.</H2>
              <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
                Saving shouldn't follow a fixed rule. Alfie continuously adapts your savings
                strategy to your financial situation, helping you build toward your goals
                while knowing when to save more, save less, or simply stay the course.
              </p>
            </div>
          </div>

        </Fade>
      </section>

      <Divider />

      {/* ════════════ INTERAC ════════════ */}
      <section id="interac" className="scroll-mt-20 py-16 lg:py-20 bg-[#F6F5F2]">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Interac</Eyebrow>
              <H2>Built for the way Canada pays.</H2>
              <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
                Send and receive Interac e-Transfers just as you always have, now enhanced by
                Alfie with intelligent categorization, proactive reminders, seamless
                Auto-deposit, and built-in fraud protection.
              </p>
            </div>

            <InteracShowcase />

          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ CLOSING CTA ════════════ */}
      <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
        <Fade className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white"
            style={{ fontFamily: SF_FONT }}
          >
            One intelligent system. Total financial clarity.
          </h2>

          <AlfieSystemDiagram />

          <p className="mt-12 text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
            Every Renda experience is connected through Alfie, giving you one intelligent system
            that understands your finances and helps you make better decisions, wherever money moves.
          </p>
          <div className="mt-10">
            <a
              href="#waitlist"
              className="h-12 px-8 inline-flex items-center rounded-full bg-white text-black text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Start Banking Smarter
            </a>
          </div>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
