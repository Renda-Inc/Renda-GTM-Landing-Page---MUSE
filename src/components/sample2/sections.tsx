import type { ReactNode } from "react";
import {
  ArrowRight,
  Bell,
  Eye,
  PiggyBank,
  QrCode,
  Repeat,
  ShieldCheck,
  Sliders,
  Sparkles,
  Tag,
  TrendingDown,
  Wallet,
  Zap,
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import rendaLogoOrange from "@/assets/renda-logo-orange.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";
import phoneStreet from "@/assets/new-phone-street.jpg";
import tapPay from "@/assets/new-tap-pay.jpg";
import cafeLaptop from "@/assets/lifestyle-cafe-laptop.jpg";
import gathering from "@/assets/lifestyle-casual-gathering.jpg";
import studying from "@/assets/lifestyle-studying.jpg";
import interacEtransfer from "@/assets/interac-etransfer.jpg";
import cardFront from "@/assets/card-front.png";

/* ------------------------------------------------------------------ */
/* Sample 2: concept Personal Banking redesign, for review only.       */
/* Same design language as the Sample homepage: paper, espresso,       */
/* Renda orange, real photography and real product facts only.         */
/* ------------------------------------------------------------------ */

const INK = "#171008";
const PAPER = "#FAF7F1";
const ORANGE = "#EB8F00";

function Fade({ children, className = "" }: { children: ReactNode; className?: string }) {
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

function SampleBar({ bottom = false }: { bottom?: boolean }) {
  return (
    <div className="bg-[#171008] text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-6 py-3 text-center sm:justify-between sm:text-left">
        <p className="flex items-center gap-3 text-[13px] tracking-wide">
          <span className="rounded-full bg-[#EB8F00] px-2.5 py-0.5 text-[11px] font-bold tracking-[0.14em] text-[#171008]">
            SAMPLE 2
          </span>
          <span className="text-white/80">
            {bottom ? "End of the concept. " : ""}Concept Personal Banking redesign, shown for review. Not part of the
            live site.
          </span>
        </p>
        <a
          href={`${import.meta.env.BASE_URL}personal-banking`}
          className="text-[13px] font-medium text-white underline-offset-4 hover:underline"
        >
          Back to the live Personal Banking page
        </a>
      </div>
    </div>
  );
}

function ConceptNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-[#FAF7F1]/85 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <img src={rendaLogoOrange} alt="Renda" className="h-9 w-auto" />
        <nav className="hidden items-center gap-9 text-[15px] font-medium text-[#171008]/80 lg:flex">
          <span className="cursor-pointer rounded-full bg-[#171008]/[0.06] px-4 py-1.5 font-semibold text-[#171008]">
            Personal
          </span>
          <span className="cursor-pointer transition-colors hover:text-[#171008]">Business</span>
          <span className="cursor-pointer transition-colors hover:text-[#171008]">Alfie</span>
          <span className="cursor-pointer transition-colors hover:text-[#171008]">Company</span>
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden cursor-pointer text-[15px] font-medium text-[#171008]/80 transition-colors hover:text-[#171008] sm:block">
            Sign in
          </span>
          <span className="cursor-pointer rounded-full bg-[#171008] px-5 py-2.5 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03]">
            Get early access
          </span>
        </div>
      </div>
    </header>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
      {children}
    </p>
  );
}

/* ------------------------------- hero ------------------------------- */

function AccountCard() {
  return (
    <div className="w-full max-w-[400px] rounded-[32px] bg-white p-6 shadow-[0_40px_80px_-28px_rgba(23,16,8,0.4)]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-[#171008]/50">SmartSpend · Everyday</p>
        <Bell size={16} className="text-[#171008]/40" />
      </div>
      <p className="mt-1.5 text-[38px] font-bold leading-none tracking-tight text-[#171008]">$2,914.55</p>
      <p className="mt-2 text-[13px] text-[#171008]/50">Safe to spend this week: $386</p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#171008]/[0.07]">
        <div className="h-full w-[62%] rounded-full" style={{ background: ORANGE }} />
      </div>

      <div className="mt-5 rounded-3xl bg-[#FAF7F1] p-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #00F6FF, #03484B)" }}
          >
            <Sparkles size={15} />
          </span>
          <p className="text-[13px] font-semibold text-[#171008]">Alfie noticed</p>
        </div>
        <p className="mt-2.5 text-[14px] leading-relaxed text-[#171008]/75">
          Two streaming subscriptions overlap. Cancelling one saves $14.99 a month, every month.
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {[
          { label: "Payroll · Northwind Studio", amount: "+$2,150.00", icon: Wallet },
          { label: "Groceries · Marche Central", amount: "-$86.40", icon: Tag },
          { label: "SenseSave auto-move", amount: "-$75.00", icon: PiggyBank },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171008]/[0.05] text-[#171008]/60">
              <row.icon size={15} />
            </span>
            <p className="flex-1 truncate text-[13px] font-medium text-[#171008]/80">{row.label}</p>
            <p className="text-[13px] font-semibold text-[#171008]">{row.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden" style={{ background: PAPER }}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-2 lg:pt-20">
        <Fade>
          <Eyebrow>Personal Banking</Eyebrow>
          <h1 className="mt-5 text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-[#171008] sm:text-[64px] lg:text-[72px]">
            Everyday banking that thinks <span style={{ color: ORANGE }}>ahead</span>.
          </h1>
          <p className="mt-6 max-w-lg text-[19px] leading-relaxed text-[#171008]/60">
            Intelligent accounts, an adaptive card, instant payments and goal-based savings, all guided by Alfie, your
            personal financial AI.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="cursor-pointer rounded-full bg-[#171008] px-7 py-3.5 text-[16px] font-semibold text-white transition-transform hover:scale-[1.03]">
              Open your Smart Account
            </span>
            <span className="cursor-pointer rounded-full border border-[#171008]/15 bg-white px-7 py-3.5 text-[16px] font-semibold text-[#171008] transition-colors hover:border-[#171008]/30">
              See how it works
            </span>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-[#171008]/60">
            {["$0 Everyday plan", "Interac e-Transfer built in", "CAD and USD in one app"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: ORANGE }} /> {t}
              </li>
            ))}
          </ul>
        </Fade>

        <Fade className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <img
              src={phoneStreet}
              alt="Using Renda on the street"
              className="h-[540px] w-full rounded-[36px] object-cover"
            />
            <div className="absolute -bottom-8 -left-4 sm:-left-10">
              <AccountCard />
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-[#171008] px-4 py-3 text-white shadow-xl sm:block">
              <p className="text-[12px] text-white/60">Card status</p>
              <p className="text-[15px] font-semibold">Active · Tap to pay on</p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="border-t border-[#171008]/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-6 py-5 text-[14px] font-semibold text-[#171008]/55">
          {["Smart accounts", "Cards and payments", "RenPay", "Savings and goals", "Interac"].map((s, i) => (
            <span key={s} className={i === 0 ? "text-[#171008]" : "cursor-pointer transition-colors hover:text-[#171008]"}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- smart accounts --------------------------- */

function SmartAccounts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <Eyebrow>Smart Accounts</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Two accounts that do the thinking with you.
          </h2>
        </Fade>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Fade className="rounded-[32px] p-9" >
            <div className="rounded-[32px] bg-[#FAF7F1] p-9 -m-9">
              <Wallet size={26} style={{ color: ORANGE }} />
              <h3 className="mt-4 text-[26px] font-bold tracking-tight text-[#171008]">SmartSpend</h3>
              <p className="mt-2 max-w-md text-[16px] leading-relaxed text-[#171008]/60">
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
                    <div className="flex justify-between text-[14px] font-medium text-[#171008]/75">
                      <span>{b.label}</span>
                      <span>{b.spent}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#171008]/[0.07]">
                      <div className="h-full rounded-full" style={{ width: `${b.pct}%`, background: ORANGE }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Fade>

          <Fade className="rounded-[32px] bg-[#171008] p-9 text-white">
            <PiggyBank size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[26px] font-bold tracking-tight">SenseSave</h3>
            <p className="mt-2 max-w-md text-[16px] leading-relaxed text-white/60">
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
                  className={`rounded-2xl px-3 py-4 ${s.active ? "bg-white text-[#171008]" : "bg-white/[0.07] text-white/70 ring-1 ring-white/10"}`}
                >
                  <p className="text-[12px] font-medium opacity-70">{s.state}</p>
                  <p className="mt-1 text-[14px] font-bold leading-tight">{s.action}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-white/50">
              You set the goals and the guardrails. Alfie adjusts inside them, and shows its working every time.
            </p>
          </Fade>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Fade className="flex gap-5 rounded-[32px] border border-[#171008]/[0.08] bg-white p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EB8F00]/10" style={{ color: ORANGE }}>
              <TrendingDown size={21} />
            </span>
            <div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#171008]">Waste Detection</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-[#171008]/60">
                Alfie spots overlapping subscriptions, price creep and silent leaks, then tells you exactly what each
                one costs you per year.
              </p>
            </div>
          </Fade>
          <Fade className="flex gap-5 rounded-[32px] border border-[#171008]/[0.08] bg-white p-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EB8F00]/10" style={{ color: ORANGE }}>
              <Sliders size={21} />
            </span>
            <div>
              <h3 className="text-[20px] font-bold tracking-tight text-[#171008]">Live Adjustments</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-[#171008]/60">
                Plans change mid-week. Reshape budgets and goals with insights delivered at the moment that matters,
                not in a report at month end.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- card ------------------------------- */

function CardSection() {
  const feats = [
    {
      icon: Zap,
      title: "Instant Recognition",
      body: "Alfie identifies where you are paying, down to the merchant, the category, and your usual pattern at that location.",
    },
    {
      icon: Tag,
      title: "Smart Categorization",
      body: "Every payment is tagged automatically and factored into your live budget and goals, with nothing to sort by hand.",
    },
    {
      icon: Eye,
      title: "Contextual Insights",
      body: "Before you tap, Alfie can warn you. After you tap, Alfie can guide you. Context at the moment it counts.",
    },
  ];
  return (
    <section className="py-24 text-white" style={{ background: INK }}>
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="mx-auto max-w-3xl text-center">
          <Eyebrow>Cards & Payments</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[50px]">
            A card that learns. Payments that just work.
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-white/60">
            Your Renda Smart Card is connected directly to Alfie. It understands every purchase, surfaces insights in
            real time, and gives you effortless control from wherever you are.
          </p>
        </Fade>

        <Fade>
          <div className="relative mx-auto mt-14 max-w-4xl">
            <img
              src={cardFront}
              alt="Renda Smart Card"
              className="w-full rotate-[-2deg] rounded-[28px] shadow-[0_50px_100px_-30px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:rotate-0"
            />
            <div className="absolute -left-3 bottom-10 hidden rounded-2xl bg-white px-4 py-3 text-[#171008] shadow-xl sm:block">
              <p className="text-[12px] font-medium text-[#171008]/50">Just now · Cafe Aroma</p>
              <p className="text-[15px] font-bold">Tap to pay · $6.50 · Dining</p>
            </div>
            <div className="absolute -right-3 top-10 hidden rounded-2xl bg-white/[0.08] px-4 py-3 ring-1 ring-white/15 backdrop-blur sm:block">
              <p className="text-[12px] text-white/55">Spending this week</p>
              <p className="text-[15px] font-semibold">On pace, 8% under budget</p>
            </div>
          </div>
        </Fade>

        <div className="mx-auto mt-16 grid max-w-6xl gap-10 md:grid-cols-3">
          {feats.map((f) => (
            <Fade key={f.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] ring-1 ring-white/10" style={{ color: ORANGE }}>
                <f.icon size={21} />
              </span>
              <h3 className="mt-4 text-[20px] font-bold tracking-tight">{f.title}</h3>
              <p className="mt-1.5 text-[16px] leading-relaxed text-white/55">{f.body}</p>
            </Fade>
          ))}
        </div>

        <Fade className="mx-auto mt-16 grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <img src={tapPay} alt="Tapping to pay with Renda" className="h-[320px] w-full rounded-[32px] object-cover" />
          <div>
            <h3 className="text-[28px] font-bold tracking-tight">Tap. Pay. Understand.</h3>
            <p className="mt-3 max-w-lg text-[17px] leading-relaxed text-white/60">
              Every time you use your card, Alfie captures the moment, not just the transaction. Real-time context,
              instant categorization, and feedback that helps you spend smarter, while you are still at the counter.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ------------------------------- RenPay ------------------------------- */

function RenPaySection() {
  return (
    <section className="py-24" style={{ background: PAPER }}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Fade>
          <Eyebrow>RenPay</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Instant transfers. Real network.
          </h2>
          <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-[#171008]/60">
            Send money instantly to anyone in the Renda network. Add contacts with a Renda ID or QR code, then move
            money immediately, without delays, friction, or unnecessary steps.
          </p>
          <div className="mt-8 space-y-4">
            {[
              { icon: Zap, text: "Arrives in seconds, not days, between Renda accounts" },
              { icon: QrCode, text: "Renda ID and QR codes, no account numbers to type" },
              { icon: Sparkles, text: "Alfie labels what it was for, so repayments never get lost" },
            ].map((r) => (
              <p key={r.text} className="flex items-start gap-3.5 text-[16px] font-medium text-[#171008]/75">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm" style={{ color: ORANGE }}>
                  <r.icon size={18} />
                </span>
                <span className="pt-2">{r.text}</span>
              </p>
            ))}
          </div>
        </Fade>

        <Fade>
          <div className="relative mx-auto max-w-[440px]">
            <img src={gathering} alt="Friends splitting a bill" className="h-[300px] w-full rounded-[32px] object-cover" />
            <div className="relative z-10 mx-auto -mt-14 w-[92%] rounded-[28px] bg-white p-6 shadow-[0_35px_60px_-25px_rgba(23,16,8,0.35)]">
              <div className="flex items-center justify-between">
                <p className="text-[14px] font-semibold text-[#171008]">Maya Chen</p>
                <span className="rounded-full bg-[#171008]/[0.05] px-2.5 py-1 text-[12px] font-medium text-[#171008]/55">
                  @maya.renda
                </span>
              </div>
              <p className="mt-3 text-[34px] font-bold tracking-tight text-[#171008]">$25.00</p>
              <p className="text-[13px] text-[#171008]/50">Dinner split · Sent instantly</p>
              <div className="mt-5 rounded-2xl bg-[#FAF7F1] p-4">
                <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#171008]/45">
                  <Sparkles size={13} style={{ color: "#03484B" }} /> Alfie Insight
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-[#171008]/75">
                  You just received $25 from Maya, marked as Repayment. Want to apply it to your SenseSave goal?
                </p>
              </div>
            </div>
            <p className="mt-6 text-center text-[15px] italic text-[#171008]/50">
              When both sides use intelligent banking, payments feel invisible.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* --------------------------- savings + interac --------------------------- */

function SavingsAndInterac() {
  return (
    <>
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Fade className="order-2 lg:order-1">
            <div className="rounded-[32px] p-8" style={{ background: PAPER }}>
              <p className="text-[14px] font-semibold text-[#171008]/55">Your goals</p>
              <div className="mt-5 space-y-5">
                {[
                  { label: "Emergency fund", saved: "$3,280", target: "$4,000", pct: 82 },
                  { label: "Japan trip", saved: "$1,360", target: "$2,000", pct: 68 },
                  { label: "New laptop", saved: "$510", target: "$1,500", pct: 34 },
                ].map((g) => (
                  <div key={g.label}>
                    <div className="flex items-baseline justify-between">
                      <p className="text-[16px] font-semibold text-[#171008]">{g.label}</p>
                      <p className="text-[14px] text-[#171008]/50">
                        {g.saved} of {g.target}
                      </p>
                    </div>
                    <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-[#171008]/[0.07]">
                      <div className="h-full rounded-full" style={{ width: `${g.pct}%`, background: ORANGE }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                <Repeat size={18} style={{ color: ORANGE }} />
                <p className="text-[14px] leading-relaxed text-[#171008]/70">
                  Round-ups on, auto-move set for payday. Alfie adjusts both as your month changes.
                </p>
              </div>
            </div>
          </Fade>
          <Fade className="order-1 lg:order-2">
            <Eyebrow>Savings & Goals</Eyebrow>
            <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
              Savings that adapt to your life.
            </h2>
            <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-[#171008]/60">
              Saving should not follow a fixed rule. Alfie continuously adapts your strategy to your situation,
              helping you build toward your goals while knowing when to save more, save less, or simply stay the
              course.
            </p>
            <img src={studying} alt="Planning savings goals" className="mt-9 h-[240px] w-full rounded-[32px] object-cover" />
          </Fade>
        </div>
      </section>

      <section className="py-24" style={{ background: PAPER }}>
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Fade>
            <Eyebrow>Interac</Eyebrow>
            <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
              Built for the way Canada pays.
            </h2>
            <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-[#171008]/60">
              Send and receive Interac e-Transfers just as you always have, now enhanced by Alfie with intelligent
              categorization, proactive reminders, seamless Auto-deposit, and built-in fraud protection.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Auto-deposit", body: "Money lands without security questions or waiting." },
                { title: "Fraud protection", body: "Unusual requests flagged before you send, not after." },
                { title: "Smart reminders", body: "Rent, splits and regulars, nudged before they are due." },
                { title: "Auto-categorized", body: "Every transfer filed into your budget the moment it lands." },
              ].map((f) => (
                <div key={f.title} className="rounded-3xl bg-white p-6 shadow-sm">
                  <p className="text-[16px] font-bold text-[#171008]">{f.title}</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#171008]/60">{f.body}</p>
                </div>
              ))}
            </div>
          </Fade>
          <Fade>
            <img src={interacEtransfer} alt="Interac e-Transfer on Renda" className="h-[520px] w-full rounded-[36px] object-cover" />
          </Fade>
        </div>
      </section>
    </>
  );
}

/* ------------------------------ closing ------------------------------ */

function Closing() {
  return (
    <section className="bg-white px-6 pb-24 pt-4">
      <Fade>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] px-8 py-20 text-center text-white" style={{ background: INK }}>
          <img src={cafeLaptop} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-[38px] font-bold leading-[1.08] tracking-tight sm:text-[50px]">
              One intelligent system. Total financial clarity.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[18px] leading-relaxed text-white/65">
              Every Renda experience is connected through Alfie, so your money is understood wherever it moves.
              Everyday is $0 a month, Plus is $9.96.
            </p>
            <span className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#171008] transition-transform hover:scale-[1.03]">
              Start banking smarter <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </Fade>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-2">
        <img src={rendaLogoWhite} alt="Renda" className="h-8 w-auto rounded bg-[#171008] px-2 py-1" />
        <p className="text-[14px] text-[#171008]/45">© 2026 Renda · Sample Personal Banking concept</p>
      </div>
    </section>
  );
}

export function ConceptPersonalBanking() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#171008] antialiased">
      <SampleBar />
      <ConceptNav />
      <Hero />
      <SmartAccounts />
      <CardSection />
      <RenPaySection />
      <SavingsAndInterac />
      <Closing />
      <SampleBar bottom />
    </main>
  );
}
