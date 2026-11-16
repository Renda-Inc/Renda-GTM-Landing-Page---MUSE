import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CreditCard,
  Globe2,
  Landmark,
  LineChart,
  PiggyBank,
  Plane,
  Repeat,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wallet,
  Zap,
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import rendaLogoOrange from "@/assets/renda-logo-orange.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import financeUi from "@/assets/new-finance-ui.jpg";
import tapPay from "@/assets/new-tap-pay.jpg";
import phoneStreet from "@/assets/new-phone-street.jpg";
import businessDashboard from "@/assets/business-dashboard.jpg";
import cafeLaptop from "@/assets/lifestyle-cafe-laptop.jpg";
import friendsCooking from "@/assets/lifestyle-friends-cooking.jpg";
import beach from "@/assets/lifestyle-beach.jpg";
import cardFront from "@/assets/card-front.png";

/* ------------------------------------------------------------------ */
/* Sample page: concept homepage redesign, for review only.            */
/* Borrows Revolut's scale and contrast, Monzo's plain language and    */
/* goal visuals, and Nubank's human photo tiles, in Renda's own        */
/* orange and espresso. Real Renda photography and product facts only. */
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
            SAMPLE PAGE
          </span>
          <span className="text-white/80">
            {bottom ? "End of the concept. " : ""}Concept homepage redesign, shown for review. Not part of the live site.
          </span>
        </p>
        <a href={import.meta.env.BASE_URL} className="text-[13px] font-medium text-white underline-offset-4 hover:underline">
          Back to the live homepage
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
          <span className="cursor-pointer transition-colors hover:text-[#171008]">Personal</span>
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

/* ------------------------------- hero ------------------------------- */

function AlfiePhone() {
  return (
    <div className="relative mx-auto w-[300px] shrink-0 rounded-[44px] border border-black/10 bg-white p-3 shadow-[0_40px_80px_-24px_rgba(23,16,8,0.35)] sm:w-[320px]">
      <div className="rounded-[34px] bg-[#FAF7F1] px-5 pb-6 pt-5">
        <div className="flex items-center justify-between">
          <p className="text-[13px] font-medium text-[#171008]/50">Everyday account</p>
          <Bell size={16} className="text-[#171008]/40" />
        </div>
        <p className="mt-1 text-[34px] font-bold leading-none tracking-tight text-[#171008]">$4,280.12</p>
        <p className="mt-2 text-[13px] text-[#171008]/50">CAD · USD $612.40</p>

        <div className="mt-5 rounded-3xl bg-white p-4 shadow-[0_10px_30px_-12px_rgba(23,16,8,0.18)]">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
              style={{ background: "linear-gradient(135deg, #00F6FF, #03484B)" }}
            >
              <Sparkles size={15} />
            </span>
            <p className="text-[13px] font-semibold text-[#171008]">Alfie</p>
            <span className="ml-auto rounded-full bg-[#03484B]/[0.07] px-2 py-0.5 text-[11px] font-medium text-[#03484B]">
              Insight
            </span>
          </div>
          <p className="mt-3 text-[14px] leading-relaxed text-[#171008]/80">
            Rent is due Friday and you are covered. Move $150 to SenseSave and you still finish the month ahead.
          </p>
          <div className="mt-3 flex gap-2">
            <span className="cursor-pointer rounded-full bg-[#171008] px-3.5 py-1.5 text-[12px] font-semibold text-white">
              Move it
            </span>
            <span className="cursor-pointer rounded-full bg-[#171008]/[0.06] px-3.5 py-1.5 text-[12px] font-semibold text-[#171008]">
              Why?
            </span>
          </div>
        </div>

        <div className="mt-4 space-y-3 px-1">
          {[
            { label: "Interac e-Transfer from Maya", amount: "+$85.00", icon: Repeat },
            { label: "Tap to pay · Grocery", amount: "-$42.18", icon: Zap },
            { label: "SenseSave round-up", amount: "-$0.82", icon: PiggyBank },
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
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-14 lg:pt-20">
        <Fade className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#171008]/10 bg-white px-4 py-1.5 text-[13px] font-medium text-[#171008]/70">
            <span className="h-2 w-2 rounded-full" style={{ background: ORANGE }} />
            AI-native banking, built in Canada
          </p>
          <h1 className="mt-7 text-[52px] font-bold leading-[0.98] tracking-[-0.03em] text-[#171008] sm:text-[76px] lg:text-[92px]">
            The bank that
            <br />
            thinks <span style={{ color: ORANGE }}>ahead</span> of
            <br />
            your money.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[19px] leading-relaxed text-[#171008]/60">
            Accounts, cards and payments with Alfie inside: an intelligent layer that understands your money, plans
            with you, and quietly handles the details.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <span className="cursor-pointer rounded-full bg-[#171008] px-7 py-3.5 text-[16px] font-semibold text-white transition-transform hover:scale-[1.03]">
              Create an account
            </span>
            <span className="cursor-pointer rounded-full border border-[#171008]/15 bg-white px-7 py-3.5 text-[16px] font-semibold text-[#171008] transition-colors hover:border-[#171008]/30">
              Meet Alfie
            </span>
          </div>
          <p className="mt-5 text-[14px] text-[#171008]/45">Launching in Canada first. The US follows.</p>
        </Fade>

        <Fade className="relative mx-auto mt-16 max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
            <div className="relative overflow-hidden rounded-[36px]">
              <img src={heroLifestyle} alt="A Renda customer" className="h-[420px] w-full object-cover lg:h-[520px]" />
              <div className="absolute bottom-5 left-5 max-w-[280px] rounded-3xl bg-white/85 p-4 shadow-lg backdrop-blur-md">
                <p className="text-[13px] font-semibold text-[#171008]">Paid in Toronto, spending in Lisbon</p>
                <p className="mt-1 text-[13px] leading-relaxed text-[#171008]/60">
                  One account for CAD and USD, and a card that just works when you land.
                </p>
              </div>
            </div>
            <div className="relative">
              <AlfiePhone />
              <div className="absolute -left-4 top-10 hidden rounded-2xl bg-white px-4 py-3 shadow-[0_20px_40px_-16px_rgba(23,16,8,0.3)] sm:block lg:-left-10">
                <p className="text-[12px] font-medium text-[#171008]/50">SenseSave goal</p>
                <p className="text-[15px] font-bold text-[#171008]">Japan trip · 68%</p>
                <div className="mt-2 h-1.5 w-36 overflow-hidden rounded-full bg-[#171008]/[0.08]">
                  <div className="h-full w-[68%] rounded-full" style={{ background: ORANGE }} />
                </div>
              </div>
              <div className="absolute -right-2 bottom-14 hidden rounded-2xl bg-[#171008] px-4 py-3 text-white shadow-xl sm:block lg:-right-6">
                <p className="text-[12px] text-white/60">Subscription spotted</p>
                <p className="text-[15px] font-semibold">Unused for 3 months · $14.99/mo</p>
              </div>
            </div>
          </div>
        </Fade>

        <Fade>
          <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 text-center lg:grid-cols-4">
            {[
              { top: "$0", bottom: "Everyday plan, per month" },
              { top: "24/7", bottom: "Alfie, awake so you do not have to be" },
              { top: "2", bottom: "Currencies in one account, CAD and USD" },
              { top: "1 app", bottom: "Personal and business, side by side" },
            ].map((s) => (
              <div key={s.bottom}>
                <dt className="sr-only">{s.bottom}</dt>
                <dd className="text-[36px] font-bold tracking-tight text-[#171008]">{s.top}</dd>
                <dd className="mx-auto mt-1 max-w-[210px] text-[14px] leading-snug text-[#171008]/50">{s.bottom}</dd>
              </div>
            ))}
          </dl>
        </Fade>
      </div>
    </section>
  );
}

/* ------------------------------ bento ------------------------------ */

function Bento() {
  const tile = "group overflow-hidden rounded-[32px] bg-white p-8 shadow-[0_1px_0_rgba(23,16,8,0.05)]";
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <p className="text-[13px] font-bold uppercase tracking-[0.18em]" style={{ color: ORANGE }}>
            Everything in one place
          </p>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[52px]">
            One app for the whole of your money.
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#171008]/60">
            No five apps, no spreadsheets, no guessing at the end of the month. Renda brings accounts, cards, savings
            and business into a single, calm view.
          </p>
        </Fade>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Fade className={`${tile} md:col-span-2 !p-0`}>
            <div className="grid sm:grid-cols-2">
              <div className="p-8">
                <Wallet size={26} style={{ color: ORANGE }} />
                <h3 className="mt-4 text-[24px] font-bold tracking-tight text-[#171008]">SmartSpend</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">
                  Spending that explains itself. Every transaction categorised, every pattern surfaced, in plain
                  language you can act on.
                </p>
                <p className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[#171008]">
                  Explore personal banking <ArrowRight size={16} />
                </p>
              </div>
              <img src={financeUi} alt="Renda app spending view" className="h-full min-h-[240px] w-full object-cover" />
            </div>
          </Fade>

          <Fade className={tile}>
            <PiggyBank size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[24px] font-bold tracking-tight text-[#171008]">SenseSave</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">
              Goals that fund themselves, with round-ups and smart moves Alfie suggests before payday, not after.
            </p>
            <div className="mt-6 space-y-4">
              {[
                { label: "Emergency fund", pct: 82 },
                { label: "Japan trip", pct: 68 },
                { label: "New laptop", pct: 34 },
              ].map((g) => (
                <div key={g.label}>
                  <div className="flex justify-between text-[13px] font-medium text-[#171008]/70">
                    <span>{g.label}</span>
                    <span>{g.pct}%</span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#171008]/[0.07]">
                    <div className="h-full rounded-full" style={{ width: `${g.pct}%`, background: ORANGE }} />
                  </div>
                </div>
              ))}
            </div>
          </Fade>

          <Fade className={`${tile} !bg-[#171008] text-white`}>
            <CreditCard size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[24px] font-bold tracking-tight">The Renda Card</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-white/60">
              Tap, pay, done. Real-time alerts, instant freezes, and colours you actually want in your wallet.
            </p>
            <img src={cardFront} alt="Renda card" className="mt-6 w-full rotate-[-4deg] rounded-2xl shadow-2xl transition-transform duration-500 group-hover:rotate-0" />
          </Fade>

          <Fade className={tile}>
            <Repeat size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[24px] font-bold tracking-tight text-[#171008]">RenPay and Interac</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">
              Send money to anyone in seconds. Interac e-Transfer built in from day one, because this is Canada.
            </p>
            <img src={tapPay} alt="Paying with Renda" className="mt-6 h-40 w-full rounded-3xl object-cover" />
          </Fade>

          <Fade className={tile}>
            <Landmark size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[24px] font-bold tracking-tight text-[#171008]">Renda Business</h3>
            <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">
              Accounts, expense tracking and tax readiness for people who run things, with the same Alfie inside.
            </p>
            <img src={businessDashboard} alt="Renda Business dashboard" className="mt-6 h-40 w-full rounded-3xl object-cover" />
          </Fade>
        </div>

        <Fade>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {[
              { icon: TrendingUp, label: "Investing", note: "Coming soon" },
              { icon: LineChart, label: "Credit", note: "Coming soon" },
              { icon: Globe2, label: "International payments", note: "Coming soon" },
            ].map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-[28px] border border-dashed border-[#171008]/15 bg-[#FAF7F1] px-6 py-5"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#171008]/60 shadow-sm">
                  <c.icon size={19} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold text-[#171008]">{c.label}</p>
                  <p className="text-[13px] text-[#171008]/50">{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ------------------------------ Alfie ------------------------------ */

function AlfieSection() {
  const insights = [
    {
      title: "Before it happens",
      body: "A bill, a renewal, a shortfall. Alfie sees it forming days early and tells you while there is still time to act.",
    },
    {
      title: "Advice, not alerts",
      body: "Not another red notification. A short explanation of what changed, why it matters, and the one move worth making.",
    },
    {
      title: "Automations you approve",
      body: "Moves, sweeps and payments happen only inside the rules you set. Alfie proposes, you stay in charge.",
    },
  ];
  return (
    <section className="py-24 text-white" style={{ background: INK }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-14 lg:grid-cols-2">
          <Fade>
            <p
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #00F6FF33, #03484B)" }}
            >
              <Sparkles size={14} /> Alfie, inside every account
            </p>
            <h2 className="mt-6 text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[54px]">
              A bank that advises you, not one that waits to be asked.
            </h2>
            <p className="mt-5 max-w-xl text-[18px] leading-relaxed text-white/60">
              Most banking apps show you what already happened. Alfie reads the whole picture, your income, bills,
              goals and habits, and helps you decide what happens next.
            </p>
            <div className="mt-9 space-y-6">
              {insights.map((i) => (
                <div key={i.title} className="border-l-2 pl-5" style={{ borderColor: ORANGE }}>
                  <h3 className="text-[19px] font-semibold">{i.title}</h3>
                  <p className="mt-1 max-w-lg text-[16px] leading-relaxed text-white/55">{i.body}</p>
                </div>
              ))}
            </div>
          </Fade>

          <Fade>
            <div className="rounded-[32px] bg-white/[0.05] p-6 ring-1 ring-white/10 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, #00F6FF, #03484B)" }}
                >
                  <Sparkles size={17} />
                </span>
                <div>
                  <p className="text-[16px] font-semibold">Ask Alfie anything</p>
                  <p className="text-[13px] text-white/45">Answers from your real numbers, not generic tips</p>
                </div>
              </div>
              <div className="mt-7 space-y-4">
                <div className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-br-md bg-white px-5 py-3.5 text-[15px] font-medium text-[#171008]">
                  Can I afford a weekend in Montreal?
                </div>
                <div className="w-fit max-w-[92%] rounded-3xl rounded-bl-md bg-white/[0.08] px-5 py-4 text-[15px] leading-relaxed text-white/85 ring-1 ring-white/10">
                  Yes. After rent and your usual spending, you would have about $640 spare. Book the train before
                  Thursday and fares are lower. Want me to set the money aside?
                </div>
                <div className="ml-auto w-fit max-w-[85%] rounded-3xl rounded-br-md bg-white px-5 py-3.5 text-[15px] font-medium text-[#171008]">
                  Yes, and remind me about the hotel.
                </div>
                <div className="w-fit max-w-[92%] rounded-3xl rounded-bl-md bg-white/[0.08] px-5 py-4 text-[15px] leading-relaxed text-white/85 ring-1 ring-white/10">
                  Done. $640 is in your Montreal goal, and I will nudge you Thursday morning about the hotel.
                </div>
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Move $150 to savings", "Explain this charge", "Plan my month", "Freeze my card"].map((chip) => (
                  <span
                    key={chip}
                    className="cursor-pointer rounded-full bg-white/[0.07] px-4 py-2 text-[13px] font-medium text-white/75 ring-1 ring-white/10 transition-colors hover:bg-white/[0.12]"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- cards + steps --------------------------- */

const CARD_COLOURS = [
  { name: "Orange", bg: "linear-gradient(135deg, #F5A623, #EB8F00)", text: "#171008" },
  { name: "Blue", bg: "linear-gradient(135deg, #3E7CB1, #1D4E79)", text: "#FFFFFF" },
  { name: "Tiffany", bg: "linear-gradient(135deg, #9ADCD2, #4FB3A6)", text: "#123B36" },
  { name: "White", bg: "linear-gradient(135deg, #FFFFFF, #EFEAE2)", text: "#171008" },
];

function CardsAndSteps() {
  return (
    <section className="overflow-hidden py-24" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="mx-auto max-w-3xl text-center">
          <h2 className="text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[52px]">
            Pick a colour. It is the hardest decision here.
          </h2>
          <p className="mt-4 text-[18px] leading-relaxed text-[#171008]/60">
            Everything else takes minutes: open your account, verify who you are, and your virtual card works right
            away while the physical one is on its way.
          </p>
        </Fade>

        <Fade>
          <div className="mt-14 flex flex-wrap items-end justify-center gap-5">
            {CARD_COLOURS.map((c, i) => (
              <div
                key={c.name}
                className="h-[190px] w-[300px] rounded-[24px] p-6 shadow-[0_30px_50px_-20px_rgba(23,16,8,0.35)] transition-transform duration-500 hover:-translate-y-2"
                style={{ background: c.bg, color: c.text, transform: `rotate(${(i - 1.5) * 3}deg)` }}
              >
                <div className="flex items-start justify-between">
                  <p className="text-[17px] font-bold tracking-tight">Renda</p>
                  <p className="text-[12px] font-medium opacity-70">{c.name}</p>
                </div>
                <div className="mt-10 h-9 w-11 rounded-md bg-black/15" />
                <p className="mt-5 text-[15px] tracking-[0.22em] opacity-80">•••• 4291</p>
              </div>
            ))}
          </div>
        </Fade>

        <div className="mx-auto mt-20 grid max-w-5xl gap-10 text-center sm:grid-cols-3">
          {[
            {
              n: "01",
              title: "Open in minutes",
              body: "Download the app, verify your ID, and you are in. No branch, no paperwork, no queue.",
            },
            {
              n: "02",
              title: "Bring your money together",
              body: "CAD and USD in one place, Interac for Canada, your card for everywhere else.",
            },
            {
              n: "03",
              title: "Let Alfie watch the details",
              body: "Bills, goals and spending, monitored quietly. You hear about what matters, when it matters.",
            },
          ].map((s) => (
            <Fade key={s.n}>
              <p className="text-[15px] font-bold tracking-[0.2em]" style={{ color: ORANGE }}>
                {s.n}
              </p>
              <h3 className="mt-3 text-[21px] font-bold tracking-tight text-[#171008]">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-[280px] text-[16px] leading-relaxed text-[#171008]/60">{s.body}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- life + plans --------------------------- */

function LifeAndPlans() {
  const tiles = [
    { img: cafeLaptop, title: "Freelance, invoiced, sorted", body: "Business and personal in one view, tax set aside as you earn." },
    { img: friendsCooking, title: "Split the dinner, not the friendship", body: "RenPay settles up in seconds, right inside the chat of your bank." },
    { img: beach, title: "Goals you can see", body: "Trips, deposits, rainy days. SenseSave keeps them growing in the background." },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <h2 className="text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[52px]">
            Built for how money actually happens.
          </h2>
        </Fade>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {tiles.map((t) => (
            <Fade key={t.title} className="group">
              <div className="overflow-hidden rounded-[32px]">
                <img
                  src={t.img}
                  alt={t.title}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-5 text-[21px] font-bold tracking-tight text-[#171008]">{t.title}</h3>
              <p className="mt-1.5 max-w-[340px] text-[16px] leading-relaxed text-[#171008]/60">{t.body}</p>
            </Fade>
          ))}
        </div>

        <div className="mt-24 grid gap-5 lg:grid-cols-2">
          <Fade className="rounded-[32px] border border-[#171008]/10 p-9">
            <p className="text-[15px] font-semibold text-[#171008]/60">Everyday</p>
            <p className="mt-3 text-[52px] font-bold leading-none tracking-tight text-[#171008]">
              $0 <span className="text-[18px] font-medium text-[#171008]/45">CAD / month</span>
            </p>
            <ul className="mt-7 space-y-3 text-[16px] text-[#171008]/75">
              {["SmartSpend account with Alfie insights", "Virtual Renda Card", "Interac e-Transfer and RenPay", "SenseSave goals and round-ups"].map((f) => (
                <li key={f} className="flex gap-3">
                  <ShieldCheck size={19} className="mt-0.5 shrink-0" style={{ color: ORANGE }} /> {f}
                </li>
              ))}
            </ul>
            <span className="mt-8 inline-block cursor-pointer rounded-full border border-[#171008]/20 px-6 py-3 text-[15px] font-semibold text-[#171008] transition-colors hover:border-[#171008]/40">
              Start with Everyday
            </span>
          </Fade>

          <Fade className="relative overflow-hidden rounded-[32px] p-9 text-white" >
            <div className="absolute inset-0" style={{ background: `linear-gradient(140deg, #2A1D08, ${INK} 55%)` }} />
            <div className="relative">
              <p className="flex items-center gap-3 text-[15px] font-semibold text-white/70">
                Plus
                <span className="rounded-full px-2.5 py-0.5 text-[12px] font-bold text-[#171008]" style={{ background: ORANGE }}>
                  MOST POPULAR
                </span>
              </p>
              <p className="mt-3 text-[52px] font-bold leading-none tracking-tight">
                $9.96 <span className="text-[18px] font-medium text-white/45">CAD / month</span>
              </p>
              <ul className="mt-7 space-y-3 text-[16px] text-white/80">
                {["Everything in Everyday", "Physical Renda Card in your colour", "Deeper Alfie planning and automations", "Priority support, from humans"].map((f) => (
                  <li key={f} className="flex gap-3">
                    <ShieldCheck size={19} className="mt-0.5 shrink-0" style={{ color: ORANGE }} /> {f}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-block cursor-pointer rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-[#171008] transition-transform hover:scale-[1.03]">
                Go Plus
              </span>
            </div>
          </Fade>
        </div>

        <Fade className="mx-auto mt-24 max-w-3xl">
          <h2 className="text-center text-[34px] font-bold tracking-tight text-[#171008]">Questions, answered plainly</h2>
          <div className="mt-10 divide-y divide-[#171008]/[0.08]">
            {[
              {
                q: "What is Renda?",
                a: "An AI-native bank being built in Canada. Accounts, cards and payments, with Alfie, our financial AI, built into every part of it.",
              },
              {
                q: "What does Alfie actually do?",
                a: "Alfie watches your income, bills and goals, explains your spending in plain language, and suggests the next right move, then carries it out only with your approval.",
              },
              {
                q: "When can I join?",
                a: "Renda launches in Canada first. Join the early access list and we will invite people in order as spots open.",
              },
              {
                q: "Is there a business version?",
                a: "Yes. Renda Business brings the same accounts and intelligence to companies, with expense tracking and tax readiness built in.",
              },
            ].map((f) => (
              <div key={f.q} className="py-6">
                <p className="text-[18px] font-semibold text-[#171008]">{f.q}</p>
                <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">{f.a}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ------------------------------ closing ------------------------------ */

function Closing() {
  return (
    <section className="px-6 pb-24" style={{ background: "#FFFFFF" }}>
      <Fade>
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] px-8 py-20 text-center text-white"
          style={{ background: `linear-gradient(135deg, #F5A623, ${ORANGE} 45%, #B96E00)` }}
        >
          <img
            src={phoneStreet}
            alt=""
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="relative">
            <Plane className="mx-auto" size={30} />
            <h2 className="mx-auto mt-5 max-w-2xl text-[40px] font-bold leading-[1.05] tracking-tight sm:text-[54px]">
              Your money is going places. Take a bank that keeps up.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[18px] text-white/85">
              Join the early access list for the Canadian launch.
            </p>
            <span className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#171008] px-8 py-4 text-[16px] font-semibold text-white transition-transform hover:scale-[1.03]">
              Join early access <ArrowUpRight size={18} />
            </span>
          </div>
        </div>
      </Fade>

      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-2">
        <img src={rendaLogoWhite} alt="Renda" className="h-8 w-auto rounded bg-[#171008] px-2 py-1" />
        <p className="text-[14px] text-[#171008]/45">© 2026 Renda · Sample homepage concept</p>
      </div>
    </section>
  );
}




export function ConceptHome() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#171008] antialiased">
      <SampleBar />
      <ConceptNav />
      <Hero />
      <Bento />
      <AlfieSection />
      <CardsAndSteps />
      <LifeAndPlans />
      <Closing />
      <SampleBar bottom />
    </main>
  );
}
