import type { ReactNode } from "react";
import {
  ArrowDownLeft,
  ArrowRight,
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
  Users,
  Zap,
} from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import rendaLogoOrange from "@/assets/renda-logo-orange.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";
import phoneStreet from "@/assets/new-phone-street.jpg";
import gathering from "@/assets/lifestyle-casual-gathering.jpg";
import friendsCooking from "@/assets/lifestyle-friends-cooking.jpg";
import cafeLaptop from "@/assets/lifestyle-cafe-laptop.jpg";
import adventureHike from "@/assets/lifestyle-adventure-hike.jpg";

/* ------------------------------------------------------------------ */
/* Sample 3: concept RenPay page, for review only.                     */
/* The Cash App / Venmo / PayPal idea, person to person payments,      */
/* rebuilt as part of a bank: instant inside the Renda network,        */
/* labelled and understood by Alfie. Same design language as the       */
/* other Sample pages: paper, espresso, Renda orange, real             */
/* photography and real product facts only.                            */
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
            SAMPLE 3
          </span>
          <span className="text-white/80">
            {bottom ? "End of the concept. " : ""}Concept RenPay page, shown for review. Not part of the live site.
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

function Avatar({ initials, dark = false }: { initials: string; dark?: boolean }) {
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[13px] font-bold ${
        dark ? "bg-[#171008] text-white" : "bg-[#171008]/[0.07] text-[#171008]/70"
      }`}
    >
      {initials}
    </span>
  );
}

/* ------------------------------- hero ------------------------------- */

function SendCard() {
  return (
    <div className="w-full max-w-[400px] rounded-[32px] bg-white p-6 shadow-[0_40px_80px_-28px_rgba(23,16,8,0.4)]">
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-medium text-[#171008]/50">Send with RenPay</p>
        <QrCode size={17} className="text-[#171008]/40" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Avatar initials="MC" dark />
        <div>
          <p className="text-[15px] font-semibold text-[#171008]">Maya Chen</p>
          <p className="text-[13px] text-[#171008]/50">@maya.renda</p>
        </div>
        <span className="ml-auto rounded-full bg-[#171008]/[0.05] px-2.5 py-1 text-[12px] font-medium text-[#171008]/55">
          In your contacts
        </span>
      </div>

      <p className="mt-5 text-[44px] font-bold leading-none tracking-tight text-[#171008]">$25.00</p>
      <p className="mt-2 text-[13px] text-[#171008]/50">Note: Dinner split</p>

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
          This matches your usual Friday split with Maya. It will be labelled Dining in your budget.
        </p>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#171008] py-3.5 text-[15px] font-semibold text-white">
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
            <p className="text-[11px] font-medium text-[#171008]/50">{c.name}</p>
          </div>
        ))}
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-dashed border-[#171008]/25 text-[#171008]/50">
            <Search size={15} />
          </span>
          <p className="text-[11px] font-medium text-[#171008]/50">Find</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="overflow-hidden" style={{ background: PAPER }}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-14 lg:grid-cols-2 lg:pt-20">
        <Fade>
          <Eyebrow>RenPay</Eyebrow>
          <h1 className="mt-5 text-[48px] font-bold leading-[1.0] tracking-[-0.03em] text-[#171008] sm:text-[64px] lg:text-[72px]">
            Sending money should feel like sending a <span style={{ color: ORANGE }}>message</span>.
          </h1>
          <p className="mt-6 max-w-lg text-[19px] leading-relaxed text-[#171008]/60">
            RenPay is how Renda people pay each other. Find a friend by Renda ID or QR code, tap send, and the money is
            there in seconds, right inside the bank where the rest of your money already lives.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <span className="cursor-pointer rounded-full bg-[#171008] px-7 py-3.5 text-[16px] font-semibold text-white transition-transform hover:scale-[1.03]">
              Get RenPay with Renda
            </span>
            <span className="cursor-pointer rounded-full border border-[#171008]/15 bg-white px-7 py-3.5 text-[16px] font-semibold text-[#171008] transition-colors hover:border-[#171008]/30">
              See how it works
            </span>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-2 text-[14px] font-medium text-[#171008]/60">
            {["Instant, Renda to Renda", "No account numbers to type", "Every payment labelled by Alfie"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Zap size={16} style={{ color: ORANGE }} /> {t}
              </li>
            ))}
          </ul>
        </Fade>

        <Fade className="relative">
          <div className="relative mx-auto max-w-[520px]">
            <img
              src={gathering}
              alt="Friends splitting a bill together"
              className="h-[540px] w-full rounded-[36px] object-cover"
            />
            <div className="absolute -bottom-8 -left-4 sm:-left-10">
              <SendCard />
            </div>
            <div className="absolute -right-3 top-8 hidden rounded-2xl bg-[#171008] px-4 py-3 text-white shadow-xl sm:block">
              <p className="text-[12px] text-white/60">Just now</p>
              <p className="text-[15px] font-semibold">Maya received $25.00</p>
            </div>
          </div>
        </Fade>
      </div>

      <div className="border-t border-[#171008]/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-6 py-5 text-[14px] font-semibold text-[#171008]/55">
          {["How it works", "Everyday moments", "Split and request", "The Alfie difference", "RenPay or Interac"].map(
            (s, i) => (
              <span key={s} className={i === 0 ? "text-[#171008]" : "cursor-pointer transition-colors hover:text-[#171008]"}>
                {s}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- how it works ---------------------------- */

function HowItWorks() {
  const steps = [
    {
      icon: QrCode,
      step: "01",
      title: "Find them in seconds",
      body: "Search by name, scan a QR code, or use their Renda ID. No transit numbers, no account numbers, nothing to get wrong.",
    },
    {
      icon: Send,
      step: "02",
      title: "Send, with a note",
      body: "Enter the amount, say what it is for, and confirm. RenPay shows you exactly who is receiving before a cent moves.",
    },
    {
      icon: Zap,
      step: "03",
      title: "There in seconds",
      body: "Between Renda accounts the money lands instantly, day or night. Alfie labels it, files it into your budget, and keeps the receipt.",
    },
  ];
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Three taps. No forms, no waiting.
          </h2>
          <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-[#171008]/60">
            Apps like Cash App and Venmo taught everyone that paying a person should be this simple. RenPay keeps the
            simplicity, and skips the separate app, the separate balance, and the cashing out.
          </p>
        </Fade>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <Fade key={s.step} className="rounded-[32px] bg-[#FAF7F1] p-8">
              <div className="flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"
                  style={{ color: ORANGE }}
                >
                  <s.icon size={21} />
                </span>
                <span className="text-[14px] font-bold tracking-[0.14em] text-[#171008]/30">{s.step}</span>
              </div>
              <h3 className="mt-5 text-[22px] font-bold tracking-tight text-[#171008]">{s.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">{s.body}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- moments ----------------------------- */

function Moments() {
  const moments = [
    {
      img: friendsCooking,
      title: "Split the dinner, not the friendship",
      body: "Four people, one bill, settled before dessert. Everyone pays their share from the table, and nobody owes anyone by Monday.",
    },
    {
      img: cafeLaptop,
      title: "Rent, bills, and the roommate math",
      body: "Send your share the moment it is due, with the note attached. Alfie remembers the pattern, so next month it is one tap.",
    },
    {
      img: adventureHike,
      title: "The group trip, squared away",
      body: "One person books, everyone settles up as you go. Each payment is labelled, so the trip adds up cleanly at the end.",
    },
  ];
  return (
    <section className="py-24" style={{ background: PAPER }}>
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <Eyebrow>Everyday moments</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Built for the money that moves between people.
          </h2>
        </Fade>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {moments.map((m) => (
            <Fade key={m.title} className="overflow-hidden rounded-[32px] bg-white shadow-sm">
              <img src={m.img} alt={m.title} className="h-[220px] w-full object-cover" />
              <div className="p-8">
                <h3 className="text-[22px] font-bold tracking-tight text-[#171008]">{m.title}</h3>
                <p className="mt-2 text-[16px] leading-relaxed text-[#171008]/60">{m.body}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- split and request -------------------------- */

function SplitAndRequest() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <Eyebrow>Split and request</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Owed money? Ask once, politely, automatically.
          </h2>
        </Fade>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Fade className="rounded-[32px] bg-[#FAF7F1] p-9">
            <span
              className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm"
              style={{ color: ORANGE }}
            >
              <Split size={21} />
            </span>
            <h3 className="mt-5 text-[26px] font-bold tracking-tight text-[#171008]">Split it on the spot</h3>
            <p className="mt-2 max-w-md text-[16px] leading-relaxed text-[#171008]/60">
              Divide any payment between the people who shared it. Each person gets their exact share as a request,
              and RenPay tracks who has settled and who has not.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { name: "Maya Chen", amount: "$25.00", state: "Paid", paid: true },
                { name: "Jordan Lee", amount: "$25.00", state: "Paid", paid: true },
                { name: "Amara Reid", amount: "$25.00", state: "Requested", paid: false },
              ].map((r) => (
                <div key={r.name} className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">
                  <Avatar initials={r.name.split(" ").map((w) => w[0]).join("")} />
                  <p className="flex-1 text-[14px] font-medium text-[#171008]/80">{r.name}</p>
                  <p className="text-[14px] font-semibold text-[#171008]">{r.amount}</p>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[12px] font-semibold ${
                      r.paid ? "bg-[#171008] text-white" : "bg-[#171008]/[0.06] text-[#171008]/55"
                    }`}
                  >
                    {r.state}
                  </span>
                </div>
              ))}
            </div>
          </Fade>

          <Fade className="rounded-[32px] bg-[#171008] p-9 text-white">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] ring-1 ring-white/10" style={{ color: ORANGE }}>
              <Receipt size={21} />
            </span>
            <h3 className="mt-5 text-[26px] font-bold tracking-tight">Request it without the awkward</h3>
            <p className="mt-2 max-w-md text-[16px] leading-relaxed text-white/60">
              Send a request with the amount and what it was for. If it sits unpaid, Alfie sends one gentle reminder,
              so you never have to write the chasing text yourself.
            </p>
            <div className="mt-7 rounded-3xl bg-white/[0.06] p-5 ring-1 ring-white/10">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-[13px] font-bold text-white">
                  AR
                </span>
                <div className="flex-1">
                  <p className="text-[14px] font-semibold">Request to Amara Reid</p>
                  <p className="text-[13px] text-white/50">Groceries for the cottage · $25.00</p>
                </div>
                <Bell size={16} className="text-white/40" />
              </div>
              <div className="mt-4 flex items-start gap-2.5 rounded-2xl bg-white/[0.06] px-4 py-3">
                <Sparkles size={15} className="mt-0.5 shrink-0" style={{ color: "#00F6FF" }} />
                <p className="text-[13px] leading-relaxed text-white/70">
                  Reminder scheduled for Friday, in your usual tone. You will see it before it sends.
                </p>
              </div>
            </div>
            <p className="mt-6 text-[14px] leading-relaxed text-white/50">
              Requests are private between you and the other person. Nothing about RenPay is posted anywhere, ever.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Alfie difference --------------------------- */

function AlfieDifference() {
  const points = [
    {
      icon: Sparkles,
      title: "Labelled the moment it lands",
      body: "A payment app sees a transfer. Your bank sees what it means. Alfie marks repayments, rent shares and gifts for what they are, and files each one into the right budget.",
    },
    {
      icon: Repeat,
      title: "Patterns become one tap",
      body: "The same split every Friday, the same rent share every month. Alfie learns the rhythm and offers it back as a single confirmation instead of a fresh form.",
    },
    {
      icon: ShieldCheck,
      title: "Checked before it sends",
      body: "RenPay payments are instant, so RenPay confirms the person, the amount, and anything unusual before you send, not after. A first payment to someone new gets an extra look.",
    },
  ];
  return (
    <section className="py-24" style={{ background: PAPER }}>
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Fade>
          <Eyebrow>The Alfie difference</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            Payment apps move money. RenPay understands it.
          </h2>
          <p className="mt-5 max-w-lg text-[18px] leading-relaxed text-[#171008]/60">
            Cash App, Venmo and PayPal sit outside your bank, holding a separate balance you have to cash out. RenPay
            is inside it, so every payment lands already understood, in the account your budgets and goals live in.
          </p>
          <div className="mt-9 space-y-7">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm"
                  style={{ color: ORANGE }}
                >
                  <p.icon size={19} />
                </span>
                <div>
                  <h3 className="text-[19px] font-bold tracking-tight text-[#171008]">{p.title}</h3>
                  <p className="mt-1 max-w-md text-[16px] leading-relaxed text-[#171008]/60">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        <Fade>
          <div className="relative mx-auto max-w-[440px]">
            <img src={phoneStreet} alt="Paying a friend with Renda on the street" className="h-[300px] w-full rounded-[32px] object-cover" />
            <div className="relative z-10 mx-auto -mt-14 w-[92%] rounded-[28px] bg-white p-6 shadow-[0_35px_60px_-25px_rgba(23,16,8,0.35)]">
              <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#171008]/45">
                <Sparkles size={13} style={{ color: "#03484B" }} /> Alfie Insight
              </p>
              <p className="mt-2 text-[14px] leading-relaxed text-[#171008]/75">
                You just received $25 from Maya, marked as Repayment. Want to apply it to your SenseSave goal?
              </p>
              <div className="mt-5 space-y-3">
                {[
                  { dir: "in", label: "Maya Chen · Repayment", amount: "+$25.00" },
                  { dir: "out", label: "Jordan Lee · Rent share", amount: "-$640.00" },
                  { dir: "in", label: "Dev Patel · Ticket split", amount: "+$18.50" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171008]/[0.05] text-[#171008]/60">
                      {r.dir === "in" ? <ArrowDownLeft size={15} /> : <ArrowUpRight size={15} />}
                    </span>
                    <p className="flex-1 truncate text-[13px] font-medium text-[#171008]/80">{r.label}</p>
                    <p className="text-[13px] font-semibold text-[#171008]">{r.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-center text-[15px] italic text-[#171008]/50">
              When both sides bank intelligently, payments feel invisible.
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* --------------------------- RenPay or Interac --------------------------- */

function RenPayOrInterac() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Fade className="max-w-3xl">
          <Eyebrow>Inside and outside Renda</Eyebrow>
          <h2 className="mt-4 text-[40px] font-bold leading-[1.05] tracking-tight text-[#171008] sm:text-[50px]">
            RenPay for Renda people. Interac for everyone else.
          </h2>
        </Fade>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Fade className="rounded-[32px] p-9" >
            <div className="rounded-[32px] bg-[#FAF7F1] p-9 -m-9">
              <Users size={26} style={{ color: ORANGE }} />
              <h3 className="mt-4 text-[26px] font-bold tracking-tight text-[#171008]">RenPay</h3>
              <p className="mt-2 max-w-md text-[16px] leading-relaxed text-[#171008]/60">
                For anyone on Renda. Instant, labelled, and settled inside your SmartSpend account the second it
                sends. This is the everyday way Renda people pay each other.
              </p>
              <ul className="mt-6 space-y-2.5 text-[15px] font-medium text-[#171008]/75">
                {["Lands in seconds, any time", "Renda ID or QR, no account numbers", "Split, request and reminders built in"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5">
                    <Zap size={15} style={{ color: ORANGE }} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </Fade>

          <Fade className="rounded-[32px] border border-[#171008]/[0.08] bg-white p-9">
            <Send size={26} style={{ color: ORANGE }} />
            <h3 className="mt-4 text-[26px] font-bold tracking-tight text-[#171008]">Interac e-Transfer</h3>
            <p className="mt-2 max-w-md text-[16px] leading-relaxed text-[#171008]/60">
              For anyone at another Canadian bank. Send and receive the way Canada already does, with Auto-deposit,
              and Alfie categorization and fraud checks on top.
            </p>
            <ul className="mt-6 space-y-2.5 text-[15px] font-medium text-[#171008]/75">
              {["Works with every Canadian bank", "Auto-deposit, no security questions", "Categorized by Alfie the moment it lands"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Zap size={15} style={{ color: ORANGE }} /> {t}
                </li>
              ))}
            </ul>
          </Fade>
        </div>
      </div>
    </section>
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
              Your people are already paying each other. Give them a better way.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[18px] leading-relaxed text-white/65">
              RenPay comes with every Renda account, Everyday at $0 a month and Plus at $9.96. Open Renda, find your
              people, and the first split is settled tonight.
            </p>
            <span className="mt-9 inline-flex cursor-pointer items-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-semibold text-[#171008] transition-transform hover:scale-[1.03]">
              Start with RenPay <ArrowRight size={18} />
            </span>
          </div>
        </div>
      </Fade>
      <div className="mx-auto mt-16 flex max-w-7xl flex-wrap items-center justify-between gap-4 px-2">
        <img src={rendaLogoWhite} alt="Renda" className="h-8 w-auto rounded bg-[#171008] px-2 py-1" />
        <p className="text-[14px] text-[#171008]/45">© 2026 Renda · Sample RenPay concept</p>
      </div>
    </section>
  );
}

export function ConceptRenPay() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#171008] antialiased">
      <SampleBar />
      <ConceptNav />
      <Hero />
      <HowItWorks />
      <Moments />
      <SplitAndRequest />
      <AlfieDifference />
      <RenPayOrInterac />
      <Closing />
      <SampleBar bottom />
    </main>
  );
}
