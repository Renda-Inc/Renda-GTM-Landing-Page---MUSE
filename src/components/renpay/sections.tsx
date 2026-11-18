import type { ReactNode } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Bell,
  QrCode,
  Receipt,
  Repeat,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Split,
  Zap,
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import gathering from "@/assets/lifestyle-casual-gathering.jpg";
import friendsCooking from "@/assets/lifestyle-friends-cooking.jpg";
import cafeLaptop from "@/assets/lifestyle-cafe-laptop.jpg";
import adventureHike from "@/assets/lifestyle-adventure-hike.jpg";
import phoneStreet from "@/assets/new-phone-street.jpg";

/* ------------------------------------------------------------------ */
/* RenPay: the official product page, in the main site's design        */
/* flow and fonts. Content adapted from the Sample 3 concept.          */
/* Cards carry the site's usual pastel tints. No Interac here,         */
/* Interac lives on Personal Banking.                                  */
/* ------------------------------------------------------------------ */

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">
      {children}
    </p>
  );
}

function H2({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight"
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
}

function Body({ children }: { children: ReactNode }) {
  return (
    <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
      {children}
    </p>
  );
}

export function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t-2 border-border/70" />
    </div>
  );
}

function Avatar({ initials, dark = false }: { initials: string; dark?: boolean }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
        dark ? "bg-black text-white" : "bg-black/[0.07] text-black/70"
      }`}
    >
      {initials}
    </span>
  );
}

/* ------------------------------- hero ------------------------------- */

function SendCard() {
  return (
    <div className="w-full max-w-[400px] rounded-3xl bg-white p-6 shadow-[0_40px_80px_-28px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-black/50">Send with RenPay</p>
        <QrCode size={17} className="text-black/40" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Avatar initials="MC" dark />
        <div>
          <p className="text-[15px] font-semibold text-black/80">Maya Chen</p>
          <p className="text-[13px] text-black/50">@maya.renda</p>
        </div>
        <span className="ml-auto rounded-full bg-black/[0.05] px-2.5 py-1 text-[12px] font-medium text-black/55">
          In your contacts
        </span>
      </div>

      <p className="mt-5 text-[44px] font-bold leading-none tracking-tight text-black/90">$25.00</p>
      <p className="mt-2 text-[13px] text-black/50">Note: Dinner split</p>

      <div className="mt-5 rounded-2xl bg-black/[0.04] p-4">
        <div className="flex items-center gap-2.5">
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #00F6FF, #03484B)" }}
          >
            <Sparkles size={15} />
          </span>
          <p className="text-[13px] font-semibold text-black/80">Alfie noticed</p>
        </div>
        <p className="mt-2.5 text-sm leading-relaxed text-black/75 font-medium">
          This matches your usual Friday split with Maya. It will be labelled Dining in your budget.
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-foreground py-3.5 text-[15px] font-semibold text-background">
        <Send size={16} /> Send instantly
      </div>

      <div className="mt-5 flex items-center justify-between">
        {[
          { initials: "MC", name: "Maya" },
          { initials: "JT", name: "Jordan" },
          { initials: "AR", name: "Amara" },
          { initials: "DP", name: "Dev" },
        ].map((c) => (
          <div key={c.name} className="flex flex-col items-center gap-1.5">
            <Avatar initials={c.initials} />
            <p className="text-[11px] font-medium text-black/50">{c.name}</p>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-black/25 text-black/50">
            <Search size={15} />
          </span>
          <p className="text-[11px] font-medium text-black/50">Find</p>
        </div>
      </div>
    </div>
  );
}

export function RenPayHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <Fade>
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-6">
            RenPay
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80 hover:text-black transition-colors duration-300"
            style={{ fontFamily: SF_FONT }}
          >
            Sending money should feel like sending a message.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black font-medium max-w-xl leading-relaxed">
            RenPay is how Renda users pay each other. Find a friend by Renda ID or QR code, tap send, and the money is
            there in seconds, right inside the bank where the rest of your money already lives.
          </p>
        </Fade>

        <Fade className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <img
              src={gathering}
              alt="Friends splitting a bill together"
              className="w-full h-[540px] object-cover rounded-3xl"
            />
            <div className="absolute -bottom-8 -left-4 sm:-left-10">
              <SendCard />
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-black px-4 py-3 text-white shadow-xl sm:block">
              <p className="text-xs text-white/60">Just now</p>
              <p className="text-[15px] font-semibold">Maya received $25.00</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ---------------------------- how it works ---------------------------- */

const steps = [
  {
    icon: QrCode,
    tint: "bg-[#FDEBD3]",
    step: "01",
    title: "Find them in seconds",
    desc: "Search by name, scan a QR code, or use their Renda ID. No transit numbers, no account numbers, nothing to get wrong.",
  },
  {
    icon: Send,
    tint: "bg-[#F1EAFB]",
    step: "02",
    title: "Send, with a note",
    desc: "Enter the amount, say what it is for, and confirm. RenPay shows you exactly who is receiving before a cent moves.",
  },
  {
    icon: Zap,
    tint: "bg-[#E0EDFB]",
    step: "03",
    title: "There in seconds",
    desc: "Between Renda accounts the money lands instantly, day or night. Alfie labels it, files it into your budget, and keeps the receipt.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>How It Works</Eyebrow>
          <H2>Three taps. No forms, no waiting.</H2>
          <Body>
            Apps like Cash App and Venmo taught everyone that paying a person should be this simple. RenPay keeps the
            simplicity, and skips the separate app, the separate balance, and the cashing out.
          </Body>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className={`rounded-[1.75rem] p-9 ${s.tint} transition-transform duration-500 hover:scale-[1.02] min-h-[260px]`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/80 ring-1 ring-black/5 flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-[0.14em] text-black/30">{s.step}</span>
              </div>
              <h3 className="text-lg font-semibold text-black/80 mb-3" style={{ fontFamily: SF_FONT }}>
                {s.title}
              </h3>
              <p className="text-base text-black font-medium leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

/* ----------------------------- moments ----------------------------- */

const moments = [
  {
    img: friendsCooking,
    tint: "bg-[#FDEBD3]",
    title: "Split the dinner, not the friendship",
    desc: "Four people, one bill, settled before dessert. Everyone pays their share from the table, and nobody owes anyone by Monday.",
  },
  {
    img: cafeLaptop,
    tint: "bg-[#F1EAFB]",
    title: "Rent, bills, and the roommate math",
    desc: "Send your share the moment it is due, with the note attached. Alfie remembers the pattern, so next month it is one tap.",
  },
  {
    img: adventureHike,
    tint: "bg-[#E0EDFB]",
    title: "The group trip, squared away",
    desc: "One person books, everyone settles up as you go. Each payment is labelled, so the trip adds up cleanly at the end.",
  },
];

export function Moments() {
  return (
    <section className="py-16 lg:py-20 bg-[#F6F5F2]">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>Everyday Moments</Eyebrow>
          <H2>Built for the money that moves between people.</H2>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moments.map((m) => (
            <div key={m.title} className="rounded-[1.75rem] overflow-hidden bg-white shadow-sm">
              <img src={m.img} alt={m.title} className="h-[220px] w-full object-cover" loading="lazy" />
              <div className={`p-8 ${m.tint} h-full`}>
                <h3 className="text-lg font-semibold text-black/80 mb-3" style={{ fontFamily: SF_FONT }}>
                  {m.title}
                </h3>
                <p className="text-base text-black font-medium leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

/* -------------------------- split and request -------------------------- */

export function SplitAndRequest() {
  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <Eyebrow>Split and Request</Eyebrow>
          <H2>Owed money? Ask once, politely, automatically.</H2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] bg-[#E0EDFB] p-9 transition-transform duration-500 hover:scale-[1.01]">
            <div className="w-14 h-14 rounded-2xl bg-white/80 ring-1 ring-black/5 flex items-center justify-center mb-6">
              <Split className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-black/80 mb-3" style={{ fontFamily: SF_FONT }}>
              Split it on the spot
            </h3>
            <p className="text-base text-black font-medium leading-relaxed max-w-md">
              Divide any payment between the people who shared it. Each person gets their exact share as a request,
              and RenPay tracks who has settled and who has not.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { name: "Maya Chen", initials: "MC", amount: "$25.00", state: "Paid", paid: true },
                { name: "Jordan Lee", initials: "JL", amount: "$25.00", state: "Paid", paid: true },
                { name: "Amara Reid", initials: "AR", amount: "$25.00", state: "Requested", paid: false },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <Avatar initials={r.initials} />
                  <p className="flex-1 text-sm font-medium text-black/80">{r.name}</p>
                  <p className="text-sm font-semibold text-black/80">{r.amount}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      r.paid ? "bg-black text-white" : "bg-black/[0.06] text-black/55"
                    }`}
                  >
                    {r.state}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-[#111111] p-9 text-white transition-transform duration-500 hover:scale-[1.01]">
            <div className="w-14 h-14 rounded-2xl bg-white/10 ring-1 ring-white/10 flex items-center justify-center mb-6">
              <Receipt className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3" style={{ fontFamily: SF_FONT }}>
              Request it without the awkward
            </h3>
            <p className="text-base text-white/70 font-medium leading-relaxed max-w-md">
              Send a request with the amount and what it was for. If it sits unpaid, Alfie sends one gentle reminder,
              so you never have to write the chasing text yourself.
            </p>
            <div className="mt-7 rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-bold text-white">
                  AR
                </span>
                <div className="flex-1">
                  <p className="text-sm font-semibold">Request to Amara Reid</p>
                  <p className="text-[13px] text-white/50">Groceries for the cottage · $25.00</p>
                </div>
                <Bell size={16} className="text-white/40" />
              </div>
              <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-white/[0.06] px-4 py-3">
                <Sparkles size={15} className="mt-0.5 shrink-0 text-[#00F6FF]" />
                <p className="text-[13px] leading-relaxed text-white/70 font-medium">
                  Reminder scheduled for Friday, in your usual tone. You will see it before it sends.
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-white/50 font-medium">
              Requests are private between you and the other person. Nothing about RenPay is posted anywhere, ever.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

/* --------------------------- Alfie difference --------------------------- */

const alfiePoints = [
  {
    icon: Sparkles,
    tint: "bg-[#FDEBD3]",
    title: "Labelled the moment it lands",
    desc: "Alfie marks repayments, rent shares and gifts for what they are, and files each one into the right budget.",
  },
  {
    icon: Repeat,
    tint: "bg-[#F1EAFB]",
    title: "Patterns become one tap",
    desc: "The same split every Friday, the same rent share every month. Alfie learns the rhythm and offers it back as one tap.",
  },
  {
    icon: ShieldCheck,
    tint: "bg-[#E0EDFB]",
    title: "Checked before it sends",
    desc: "Payments are instant, so RenPay confirms the person and the amount before you send. First payments to someone new get an extra look.",
  },
];

export function AlfieDifference() {
  return (
    <section className="py-16 lg:py-20 bg-[#F6F5F2]">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <Eyebrow>The Alfie Difference</Eyebrow>
            <H2>Payment apps move money. RenPay understands it.</H2>
            <Body>
              Cash App, Venmo and PayPal sit outside your bank, holding a separate balance you have to cash out.
              RenPay is inside it, so every payment lands already understood, in the account your budgets and goals
              live in.
            </Body>
            <div className="mt-10 space-y-8">
              {alfiePoints.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className={`w-12 h-12 shrink-0 rounded-2xl ${p.tint} flex items-center justify-center`}>
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black/80" style={{ fontFamily: SF_FONT }}>
                      {p.title}
                    </h3>
                    <p className="text-[15px] text-black font-medium leading-relaxed mt-1 max-w-md">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[440px]">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={phoneStreet}
                alt="Paying a friend with Renda on the street"
                className="w-full h-[300px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="relative z-10 mx-auto -mt-14 w-[92%] bg-white rounded-2xl p-6 shadow-[0_35px_60px_-25px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                  Alfie Insight
                </p>
              </div>
              <p className="text-[15px] text-black/80 leading-relaxed">
                "You just received $25 from Maya, marked as Repayment. Want to apply it to your SenseSave goal?"
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { dir: "in", label: "Maya Chen · Repayment", amount: "+$25.00" },
                  { dir: "out", label: "Jordan Lee · Rent share", amount: "-$640.00" },
                  { dir: "in", label: "Dev Patel · Ticket split", amount: "+$18.50" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.05] text-black/60">
                      {r.dir === "in" ? <ArrowDownLeft size={15} /> : <ArrowUpRight size={15} />}
                    </span>
                    <p className="flex-1 truncate text-[13px] font-medium text-black/80">{r.label}</p>
                    <p className="text-[13px] font-semibold text-black/80">{r.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-sm text-black font-medium italic">
              When both sides use intelligent banking, payments feel invisible.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}

/* ------------------------------ closing ------------------------------ */

export function RenPayClosing() {
  return (
    <section className="py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: "#111111" }}>
      <Fade className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white"
          style={{ fontFamily: SF_FONT }}
        >
          Your people are already paying each other. Give them a better way.
        </h2>
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
  );
}
