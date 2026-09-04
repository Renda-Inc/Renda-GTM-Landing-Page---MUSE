import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { ArrowRight, Check, Landmark, CreditCard, FileText, LineChart, Sparkles } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import businessHero from "@/assets/business-hero.jpg";
import businessAlfie from "@/assets/business-alfie.jpg";
import businessAccess from "@/assets/business-access.jpg";
import businessVision from "@/assets/business-vision.jpg";
import businessDashboard from "@/assets/business-dashboard.jpg";

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

  const active = progress < 0.24 ? 0 : progress < 0.56 ? 1 : 2;

  return (
    <section ref={sectionRef} className="relative h-[200svh] bg-foreground">
      <div className="sticky top-0 h-[100svh] min-h-[620px] overflow-hidden">
        <img
          src={businessHero}
          alt="A business owner working in her studio"
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/25 to-foreground/20" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pt-24 md:px-10">
          <h1 className="relative h-[2.6em] w-full max-w-3xl -translate-y-20 text-4xl md:-translate-y-5 md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white">
            {heroMessages.map((message, index) => {
              return (
                <span
                  key={index}
                  className={`absolute inset-x-0 top-0 transition-[opacity,transform] duration-150 ease-out ${
                    active === index
                      ? "translate-y-0 scale-100 opacity-100"
                      : index < active
                        ? "-translate-y-3 scale-[0.99] opacity-0"
                        : "translate-y-3 scale-[0.99] opacity-0"
                  }`}
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
              className={`w-2 rounded-full transition-all duration-150 ${
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
    title: "Business Account",
    desc: "The foundation. Where business money lives and moves.",
    image: businessHero,
  },
  {
    stage: "Spend",
    title: "Expense Management",
    desc: "Company spending captured and explained as it happens.",
    image: businessAlfie,
  },
  {
    stage: "Manage",
    title: "Bookkeeping & Tax Readiness",
    desc: "Records and obligations kept in order, not rebuilt at year end.",
    image: businessVision,
  },
  {
    stage: "Understand",
    title: "Financial Insights",
    desc: "A clear read on performance, cash flow, and what comes next.",
    image: businessAccess,
  },
];

const STEP = 360 / stages.length;

function ConnectedSystem() {
  const [rotation, setRotation] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startOffset: number; moved: boolean } | null>(null);

  const active =
    ((Math.round(-(rotation + dragOffset) / STEP) % stages.length) + stages.length) % stages.length;

  useEffect(() => {
    if (dragging) return;
    const id = window.setInterval(() => setRotation((r) => r - STEP), 4000);
    return () => window.clearInterval(id);
  }, [dragging]);

  const snap = (offset: number) => {
    const delta = Math.round(offset / STEP) * STEP;
    setRotation((r) => r + delta);
    setDragOffset(0);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startOffset: dragOffset, moved: false };
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const delta = e.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;
    setDragOffset(drag.startOffset + delta * 0.4);
  };

  const onPointerUp = () => {
    if (!dragRef.current) return;
    snap(dragOffset);
    dragRef.current = null;
    setDragging(false);
  };

  const total = rotation + dragOffset;

  return (
    <section className="bg-[#111111] py-16 lg:py-24 overflow-hidden" style={{ fontFamily: SF_FONT }}>
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow light>One connected system</Eyebrow>
          <H2 light>Bank. Spend. Manage. Understand.</H2>
          <p className="mt-6 text-base md:text-lg text-white/70 font-medium leading-relaxed">
            Not five separate tools to switch between. One financial system, connected through
            Renda's banking infrastructure and Alfie.
          </p>
        </div>

        {/* Perspective carousel */}
        <div
          className="mt-16 relative h-[420px] md:h-[480px] select-none cursor-grab active:cursor-grabbing"
          style={{ perspective: "1400px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateZ(-360px) rotateY(${total}deg)`,
              transition: dragging ? "none" : "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            {stages.map((s, i) => {
              const angle = i * STEP;
              const isActive = i === active;
              return (
                <div
                  key={s.stage}
                  className="absolute left-1/2 top-0 w-[300px] md:w-[360px] -ml-[150px] md:-ml-[180px]"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(360px)`,
                    transformStyle: "preserve-3d",
                    transition: "opacity 0.5s ease",
                    opacity: isActive ? 1 : 0.45,
                  }}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/15 bg-white/[0.04] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.9)]">
                    <div className="relative h-[200px] md:h-[240px]">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover"
                        draggable={false}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
                      <p className="absolute top-4 left-5 text-xs font-semibold tracking-[0.14em] text-[#EB8F00]">
                        {s.stage.toUpperCase()}
                      </p>
                    </div>
                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-medium tracking-tight text-white leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-white/60">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-2" role="tablist" aria-label="Connected system stages">
          {stages.map((s, i) => (
            <button
              key={s.stage}
              type="button"
              aria-label={s.title}
              aria-selected={i === active}
              onClick={() => setRotation(-i * STEP)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-[#EB8F00]" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
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

      {/* ── 2. The vision ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <Eyebrow>The vision</Eyebrow>
              <H2>Your business, in one financial system.</H2>
              <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
                Running a business means holding the whole financial picture in your head; money coming in, money going out, what's owed, and what's next. Renda brings that entire side of your business into one connected experience.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={businessVision}
                alt="A business owner reviewing financials"
                className="w-full h-[312px] lg:h-[468px] object-cover"
                loading="lazy"
                width={1440}
                height={1088}
              />
            </div>
          </div>
        </Fade>
      </section>

      {/* ── 3. A smarter financial operating system ── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <H2>A smarter financial operating system for your business.</H2>
            <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
              Banking and financial operations come together in one intelligent platform, with Alfie connecting the numbers, activity, and decisions behind your business.
            </p>
          </div>
          <div className="mt-12 rounded-2xl overflow-hidden">
            <img
              src={businessDashboard}
              alt="Renda Business dashboard showing accounts, spend, and tax estimates"
              className="w-full h-[320px] lg:h-[520px] object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
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
                Alfie doesn't just display business transactions. It reads and connects the financial activities happening across your business and reveals what's happening, what's changing, and what needs your attention.
              </p>
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
