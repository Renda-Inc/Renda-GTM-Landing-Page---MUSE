import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight, Check, Landmark, CreditCard, FileText, LineChart, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import businessHero from "@/assets/business-hero.jpg";
import businessAlfie from "@/assets/business-alfie.jpg";
import businessAccess from "@/assets/business-access.jpg";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

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

function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-border/70" />
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[15px] font-semibold tracking-[0.08em] mb-8 ${light ? "text-white" : "text-black"}`}>
      {children}
    </p>
  );
}

function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 leading-tight ${
        light ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black"
      }`}
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
}

const heroMessages = [
  <>
    Business banking,
    <br />
    built differently.
  </>,
  <>
    Your business,
    <br />
    in one financial system.
  </>,
  <>The intelligence behind your business.</>,
];

function ScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const distance = section.offsetHeight - window.innerHeight;
      const nextProgress = distance > 0 ? Math.min(1, Math.max(0, -rect.top / distance)) : 0;
      setProgress(nextProgress);
    };

    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const position = progress * (heroMessages.length - 1);
  const active = Math.min(heroMessages.length - 1, Math.round(position));

  return (
    <section ref={sectionRef} className="relative h-[300svh] bg-foreground">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
        <img
          src={businessHero}
          alt="A business owner working in her studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/20" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 pt-32 md:px-10 md:pb-24">
          <h1 className="relative h-[4.4em] w-full max-w-5xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl lg:text-8xl">
            {heroMessages.map((message, index) => {
              const distance = Math.abs(position - index);
              const opacity = Math.max(0, 1 - distance * 1.8);
              const translateY = (index - position) * 36;
              const scale = 1 - Math.min(distance, 1) * 0.025;

              return (
                <span
                  key={index}
                  className="absolute inset-x-0 bottom-0 transition-[opacity,transform] duration-300 ease-out"
                  style={{ opacity, transform: `translateY(${translateY}px) scale(${scale})` }}
                  aria-hidden={active !== index}
                >
                  {message}
                </span>
              );
            })}
          </h1>
        </div>

        <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-2 md:right-10" aria-hidden="true">
          {heroMessages.map((_, index) => (
            <span
              key={index}
              className={`w-2 rounded-full transition-all duration-300 ${
                active === index ? "h-6 bg-white" : "h-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Hero product visual: a calm, real-feeling business money panel ── */
const heroRows = [
  { label: "Operating account", value: "$48,210.55", meta: "Available" },
  { label: "Company card spend", value: "$6,940.00", meta: "This month" },
  { label: "Set aside for tax", value: "$3,120.00", meta: "Q3 estimate" },
];

function HeroPanel() {
  return (
    <div className="rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur-xl p-6 lg:p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="space-y-3">
        {heroRows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between rounded-xl bg-white/[0.07] border border-white/10 px-5 py-4"
          >
            <div>
              <p className="text-[15px] font-semibold text-white/90">{r.label}</p>
              <p className="text-xs font-medium text-white/50 mt-1">{r.meta}</p>
            </div>
            <p className="text-base lg:text-lg font-semibold text-white tracking-tight">{r.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#EB8F00]/10 border border-[#EB8F00]/25 px-5 py-4">
        <Sparkles className="w-4 h-4 text-[#EB8F00] mt-0.5 shrink-0" />
        <p className="text-sm font-medium text-white/80 leading-relaxed">
          Alfie: supplier costs are up 12% this quarter. Your next tax instalment is covered.
        </p>
      </div>
    </div>
  );
}

/* ── One connected system: Bank → Spend → Manage → Understand ── */
const stages = [
  {
    stage: "Bank",
    icon: Landmark,
    title: "Business Account",
    desc: "The foundation. Where business money lives and moves.",
  },
  {
    stage: "Spend",
    icon: CreditCard,
    title: "Expense Management",
    desc: "Company spending captured and explained as it happens.",
  },
  {
    stage: "Manage",
    icon: FileText,
    title: "Bookkeeping & Tax Readiness",
    desc: "Records and obligations kept in order, not rebuilt at year end.",
  },
  {
    stage: "Understand",
    icon: LineChart,
    title: "Financial Insights",
    desc: "A clear read on performance, cash flow, and what comes next.",
  },
];

function ConnectedSystem() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % stages.length), 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[#111111] py-16 lg:py-24" style={{ fontFamily: SF_FONT }}>
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow light>One connected system</Eyebrow>
          <H2 light>Bank. Spend. Manage. Understand.</H2>
          <p className="mt-6 text-base md:text-lg text-white/70 font-medium leading-relaxed">
            Not five separate tools to switch between. One financial system, connected through
            Renda's banking infrastructure and Alfie.
          </p>
        </div>

        {/* Connected rail */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-[26px] h-[2px] bg-white/10 hidden lg:block" />
          <div
            className="absolute left-0 top-[26px] h-[2px] bg-[#EB8F00] hidden lg:block transition-all duration-700 ease-out"
            style={{ width: `${((active + 1) / stages.length) * 100}%` }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stages.map((s, i) => {
              const on = i <= active;
              const Icon = s.icon;
              return (
                <button
                  key={s.stage}
                  type="button"
                  onClick={() => setActive(i)}
                  className="relative text-left focus:outline-none group"
                >
                  <div
                    className={`w-[54px] h-[54px] rounded-full flex items-center justify-center border transition-all duration-500 ${
                      on
                        ? "bg-[#EB8F00]/15 border-[#EB8F00]/50"
                        : "bg-white/[0.06] border-white/15"
                    }`}
                  >
                    <Icon className={`w-6 h-6 transition-colors duration-500 ${on ? "text-[#EB8F00]" : "text-white/40"}`} />
                  </div>
                  <p className="mt-6 text-sm font-semibold tracking-[0.08em] text-white/50">
                    {s.stage.toUpperCase()}
                  </p>
                  <h3 className="mt-3 text-xl lg:text-2xl font-medium tracking-tight text-white leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-medium leading-relaxed text-white/60">
                    {s.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-14 text-center text-sm font-medium text-white/40">
          Capabilities shown are part of the Renda Business roadmap and not yet available.
        </p>
      </Fade>
    </section>
  );
}

/* ── Early access form ── */
const businessTypes = [
  "Sole proprietor / freelancer",
  "Retail or e-commerce",
  "Restaurant or hospitality",
  "Professional services",
  "Trades or construction",
  "Technology or startup",
  "Other",
];

const signupSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  business: z.string().trim().min(1, { message: "Please enter your business name" }).max(120),
  email: z.string().trim().email({ message: "Enter a valid work email" }).max(255),
  industry: z.string().trim().min(1, { message: "Please select a business type" }).max(80),
});

function EarlyAccessForm() {
  const [form, setForm] = useState({ name: "", business: "", email: "", industry: "" });
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signupSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    setDone(true);
  };

  const field =
    "w-full h-12 rounded-xl bg-white border border-black/10 px-4 text-[15px] font-medium text-black placeholder:text-black/40 focus:outline-none focus:border-black/40 transition-colors";

  if (done) {
    return (
      <div className="rounded-2xl bg-[#F6F5F2] p-8 lg:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#EB8F00]/15 flex items-center justify-center mx-auto">
          <Check className="w-7 h-7 text-[#EB8F00]" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-black" style={{ fontFamily: SF_FONT }}>
          You're on the early access list.
        </h3>
        <p className="mt-4 text-base font-medium leading-relaxed text-black">
          {form.business} is in line for the first wave of Renda Business. We'll reach out to{" "}
          {form.email} as invitations open.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-[#F6F5F2] p-8 lg:p-10">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          className={field}
          placeholder="Your name"
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-label="Your name"
        />
        <input
          className={field}
          placeholder="Business name"
          maxLength={120}
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          aria-label="Business name"
        />
        <input
          className={field}
          type="email"
          placeholder="Work email"
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-label="Work email"
        />
        <select
          className={field}
          value={form.industry}
          onChange={(e) => setForm({ ...form, industry: e.target.value })}
          aria-label="Business type"
        >
          <option value="">Business type</option>
          {businessTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-destructive">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background text-base font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
      >
        Join the early access list
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="mt-4 text-sm font-medium text-black">
        No spam. We only use this to consider your business for the first invitations.
      </p>
    </form>
  );
}

export default function BusinessBanking() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar />

      {/* ── 1. One continuous, scroll-driven hero ── */}
      <ScrollHero />

      {/* ── 2. Vision ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <H2>A smarter financial operating system for your business</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Banking and financial operations come together in one intelligent platform, with
                Alfie connecting the numbers, activity, and decisions behind your business.
              </p>
            </div>
            <HeroPanel />
          </div>
        </Fade>
      </section>

      {/* ── 3. One connected system ── */}
      <ConnectedSystem />

      {/* ── 4. Powered by Alfie ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-last lg:order-first rounded-2xl overflow-hidden">
              <img
                src={businessAlfie}
                alt="A business owner reviewing performance late in the evening"
                className="w-full h-[320px] lg:h-[440px] object-cover"
                loading="lazy"
                width={1440}
                height={1088}
              />
            </div>
            <div>
              <Eyebrow>Powered by Alfie</Eyebrow>
              <H2>Intelligence across your business finances.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Alfie doesn't just display business transactions. It reads the financial activity
                happening across your business and turns it into something you can act on.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Understand where money is actually going",
                  "Identify the financial patterns that matter",
                  "Monitor cash flow as it changes",
                  "Prepare for upcoming obligations",
                  "Make better financial decisions, sooner",
                ].map((l) => (
                  <li key={l} className="flex items-start gap-3 text-[15px] md:text-base font-medium leading-relaxed text-black">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── 5. Early business access ── */}
      <section id="business-early-access" className="scroll-mt-24 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Eyebrow>Early access</Eyebrow>
              <H2>Be among the first businesses on Renda.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Renda Business is coming soon. Join the early access list to be considered for the
                first group of businesses invited onto the platform, and help shape it as we build.
              </p>
              <div className="mt-10 rounded-2xl overflow-hidden">
                <img
                  src={businessAccess}
                  alt="A small team welcoming a new partner"
                  className="w-full h-[240px] lg:h-[300px] object-cover"
                  loading="lazy"
                  width={1440}
                  height={1088}
                />
              </div>
            </div>
            <EarlyAccessForm />
          </div>
        </Fade>
      </section>

      {/* ── 6. Final CTA (flows into footer) ── */}
      <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 bg-[#111111]">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <H2 light>The next generation of business banking is coming.</H2>
          <p className="mt-6 text-base md:text-lg text-white/70 font-medium leading-relaxed">
            Put your business at the front of the line.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="#business-early-access"
              className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-white text-[#111111] text-base font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300"
            >
              Join the early access list
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
