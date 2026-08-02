import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
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
  Users,
  QrCode,
  Target,
  PiggyBank,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";
import lifestyleFriends from "@/assets/lifestyle-friends-cooking.jpg";
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
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
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

/* ─── Bullet ─── */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-black/70 font-medium text-[15px] md:text-base leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
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
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
        <Fade className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Personal Banking
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80 hover:text-black transition-colors duration-300"
            style={{ fontFamily: SF_FONT }}
          >
            Banking that thinks ahead.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black/60 font-medium max-w-2xl mx-auto leading-relaxed">
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
          <div className="rounded-2xl overflow-hidden">
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
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Smart Accounts</Eyebrow>
              <H2>Your money shouldn't just sit there. It should think.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Meet SmartSpend and SenseSave, accounts monitored by Alfie to give you
                clarity, insights, and proactive guidance.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Understand where your money is really going.</Bullet>
                <Bullet>Spot waste before it compounds.</Bullet>
                <Bullet>Adjust spending in real time.</Bullet>
                <Bullet>Make informed decisions with confidence.</Bullet>
              </ul>
            </div>

            {/* Alfie Insight mockup */}
            <div className="bg-[#F6F5F2] rounded-2xl p-8 space-y-5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Alfie Insight
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl px-5 py-4 text-[15px] text-black/80 leading-relaxed shadow-sm">
                  "Your subscription spending increased 18% this quarter. Two services overlap, want me to flag them?"
                </div>
                <div className="bg-primary/10 rounded-xl px-5 py-4 text-[15px] text-black/80 leading-relaxed border border-primary/20">
                  "I moved $120 to SenseSave. Your groceries came in under pattern this week."
                </div>
              </div>
              <p className="text-sm text-black/60 font-medium">
                Conversations that move you forward, instead of charts you never check.
              </p>
            </div>
          </div>

          {/* Feature boxes */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wallet, title: "SmartSpend", desc: "Your everyday account, with real-time intelligence built in." },
              { icon: PiggyBank, title: "SenseSave", desc: "Savings that adapt to your income and spending patterns." },
              { icon: TrendingDown, title: "Waste Detection", desc: "Alfie spots overlapping subscriptions and silent leaks." },
              { icon: Sliders, title: "Live Adjustments", desc: "Reshape your week with insights at the moment that matters." },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-[#F6F5F2] rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group min-h-[260px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-black/80 mb-3">{f.title}</h3>
                <p className="text-base text-black/60 font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ CARDS & PAYMENTS ════════════ */}
      <section id="cards-payments" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <Eyebrow>Cards & Payments</Eyebrow>
            <H2>A card that learns. Payments that just work.</H2>
            <RotatingCards />
          </div>

          {/* Component A — Smart Card */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h3
                className="text-2xl md:text-3xl font-semibold text-black/80 leading-tight tracking-tight"
                style={{ fontFamily: SF_FONT }}
              >
                Your financial operating system, in your wallet.
              </h3>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Your Renda Smart Card is connected directly to Alfie. It adapts to your
                spending, provides real-time intelligence, and puts you in seamless control,
                all from your app.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Real-time transaction intelligence</Bullet>
                <Bullet>Smart alerts before problems happen</Bullet>
                <Bullet>Context-aware insights at the point of spend</Bullet>
                <Bullet>Seamless control from your app</Bullet>
              </ul>
            </div>

            <div className="relative flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl" />
              <img
                src={cardFront}
                alt="Renda Smart Card"
                className="relative w-full max-w-md drop-shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </Fade>
      </section>

      <CardShowcaseBanner />

      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          {/* Component B — Payments */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
              <img
                src={lifestyleCafe}
                alt="Tapping to pay at a cafe"
                className="w-full h-[480px] lg:h-[720px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3
                className="text-2xl md:text-3xl font-semibold text-black/80 leading-tight tracking-tight"
                style={{ fontFamily: SF_FONT }}
              >
                Tap. Pay. Understand.
              </h3>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
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
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-black/80">{f.title}</h4>
                      <p className="text-[15px] text-black/60 font-medium leading-relaxed mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ PEER-TO-PEER ════════════ */}
      <section id="p2p" className="scroll-mt-20 py-16 lg:py-20 bg-[#F6F5F2]">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Move Money Your Way</Eyebrow>
              <H2>Instant transfers. Real network.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Renda Peer-to-Peer is the fastest way to send money to friends, family, or
                anyone in the Renda network. Add someone by their Renda ID or by scanning
                their QR code, they instantly appear as a contact. Money moves immediately.
                No delays. No friction.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Instant transfers within the Renda network</Bullet>
                <Bullet>Add contacts by Renda ID or QR code scan</Bullet>
                <Bullet>No transaction delays, money moves when you need it to</Bullet>
              </ul>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Users, label: "Renda ID" },
                  { icon: QrCode, label: "QR Code Scan" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="bg-white rounded-2xl p-5 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <m.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-black/80">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl overflow-hidden">
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
              <p className="text-sm text-black/60 font-medium italic">
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
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img
                src={lifestyleStudying}
                alt="Planning savings goals"
                className="w-full h-[480px] lg:h-[720px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Savings & Goals</Eyebrow>
              <H2>Savings that adapt to your life.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Most banks automate savings blindly. Renda builds a strategy around you.
                Alfie monitors your real-time financial position and helps you make progress
                toward goals that actually matter.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Set personalized savings goals</Bullet>
                <Bullet>Adjust contributions based on income and spending shifts</Bullet>
                <Bullet>Avoid over-saving during tight months</Bullet>
                <Bullet>Accelerate when you're ahead</Bullet>
              </ul>
            </div>
          </div>

          {/* Goal progress mockup */}
          <div className="mt-16 bg-[#F6F5F2] rounded-2xl p-8 max-w-3xl mx-auto shadow-[0_20px_40px_-20px_rgba(0,0,0,0.1)]">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-4 h-4 text-primary" />
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Goal Progress
              </p>
            </div>
            <div className="space-y-5">
              {[
                { name: "Emergency Fund", current: "$3,240", target: "$5,000", pct: 65 },
                { name: "Vacation 2026", current: "$1,800", target: "$4,000", pct: 45 },
                { name: "New Laptop", current: "$720", target: "$1,500", pct: 48 },
              ].map((g) => (
                <div key={g.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-black/80 font-semibold">{g.name}</span>
                    <span className="text-black/60 font-medium">{g.current} / {g.target}</span>
                  </div>
                  <div className="h-2 bg-white rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary transition-all duration-700" style={{ width: `${g.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white rounded-xl px-5 py-4 text-[15px] text-black/80 leading-relaxed">
              "You're ahead of schedule on your emergency fund. I've increased this week's contribution by $15."
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
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Send and receive Interac e-Transfers from any Canadian bank, right inside your
                Renda app. Familiar, instant, and now smarter with Alfie's context layered on
                every transfer.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Send Interac e-Transfers to any Canadian bank</Bullet>
                <Bullet>Auto-deposit, no security questions required</Bullet>
                <Bullet>Automatic categorization and reminders</Bullet>
                <Bullet>Bank-grade security and fraud monitoring</Bullet>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: Banknote, title: "e-Transfer", desc: "Send to any Canadian bank in seconds." },
                { icon: Bell, title: "Auto-Deposit", desc: "Funds land instantly, no questions." },
                { icon: ShieldCheck, title: "Secure by default", desc: "Encrypted and fraud-monitored." },
                { icon: Tag, title: "Smart Tagging", desc: "Alfie categorizes every transfer." },
              ].map((f) => (
                <div
                  key={f.title}
                  className="bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-[15px] font-semibold text-black/80 mb-1">{f.title}</h3>
                  <p className="text-[14px] text-black/60 font-medium leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ════════════ CLOSING CTA ════════════ */}
      <section className="py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={lifestyleFriends}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <Fade className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight text-white"
            style={{ fontFamily: SF_FONT }}
          >
            One intelligent system. Total financial clarity.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-base font-medium text-white/80">
            <span>Smart Accounts</span>
            <span className="text-white/30">·</span>
            <span>Adaptive Card</span>
            <span className="text-white/30">·</span>
            <span>Seamless Payments</span>
            <span className="text-white/30">·</span>
            <span>Personalized Savings</span>
          </div>
          <p className="mt-4 text-base text-white/90 font-medium">All powered by Alfie.</p>
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
