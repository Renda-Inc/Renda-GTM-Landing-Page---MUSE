import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronRight, Sparkles, X } from "lucide-react";

import heroImg from "@/assets/alfie-hero.jpg";
import orgFinancial from "@/assets/alfie-org-financial.jpg";
import orgFintech from "@/assets/alfie-org-fintech.jpg";
import orgInsurance from "@/assets/alfie-org-insurance.jpg";
import orgEnterprise from "@/assets/alfie-org-enterprise.jpg";
import orgGovernment from "@/assets/alfie-org-government.jpg";
import capIntelligence from "@/assets/alfie-cap-intelligence.jpg";
import capAssistant from "@/assets/alfie-cap-assistant.jpg";
import capActions from "@/assets/alfie-cap-actions.jpg";
import capPlatform from "@/assets/alfie-cap-platform.jpg";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

/* ------------------------------------------------------------------ */
/* Shared scroll helpers                                               */
/* ------------------------------------------------------------------ */

function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { threshold },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 900ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* Word-by-word roll-up headline */
function RollingHeadline({ text, className = "" }: { text: string; className?: string }) {
  const words = useMemo(() => text.split(" "), [text]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setStarted(true), 120);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <h1 className={className} aria-label={text}>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden align-bottom pb-[0.12em]">
          <span
            className="inline-block"
            style={{
              transform: started ? "translateY(0) rotateX(0deg)" : "translateY(105%) rotateX(35deg)",
              opacity: started ? 1 : 0,
              transition: `transform 1000ms cubic-bezier(0.19,1,0.22,1) ${i * 85}ms, opacity 700ms ease ${i * 85}ms`,
            }}
          >
            {w}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </h1>
  );
}

/* Horizontal text reveal (mask wipes open on scroll) */
function WipeHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={className}
        style={{
          clipPath: inView ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
          transform: inView ? "translateX(0)" : "translateX(-24px)",
          transition: "clip-path 1200ms cubic-bezier(0.19,1,0.22,1), transform 1200ms cubic-bezier(0.19,1,0.22,1)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Alfie chat bar                                                      */
/* ------------------------------------------------------------------ */

type ChatTurn = { role: "user" | "alfie"; text: string };

const chatScript: ChatTurn[] = [
  { role: "user", text: "Audit last quarter's vendor payments for duplicates." },
  {
    role: "alfie",
    text: "Reviewed 12,480 payments. 3 duplicate settlements found across two vendors — $41,260 total. Flagged for reversal with the supporting ledger entries.",
  },
  { role: "user", text: "What's our sales tax exposure across provinces?" },
  {
    role: "alfie",
    text: "GST/HST filed correctly in 6 provinces. Quebec QST is under-remitted by $8,410 for two periods. I prepared the adjustment and the filing timeline.",
  },
  { role: "user", text: "Anything unusual in this month's cash flow?" },
  {
    role: "alfie",
    text: "Outflows are 18% above trend, driven by early supplier settlements. Coverage stays healthy through the next two payroll cycles.",
  },
];

const chatPrompts = [
  "Audit vendor payments",
  "Explain this tax variance",
  "Forecast next quarter",
  "Reconcile the ledger",
];

function AlfieChat() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [visible, setVisible] = useState<ChatTurn[]>([]);
  const [typing, setTyping] = useState(false);
  const [draft, setDraft] = useState("");
  const [caretPrompt, setCaretPrompt] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    let cancelled = false;

    const step = () => {
      if (cancelled) return;
      const turn = chatScript[i % chatScript.length];
      if (turn.role === "alfie") {
        setTyping(true);
        window.setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisible((v) => [...v.slice(-3), turn]);
          i += 1;
          window.setTimeout(step, 2600);
        }, 1200);
      } else {
        setVisible((v) => [...v.slice(-3), turn]);
        i += 1;
        window.setTimeout(step, 1600);
      }
    };
    step();
    return () => {
      cancelled = true;
    };
  }, [inView]);

  useEffect(() => {
    const id = window.setInterval(() => setCaretPrompt((p) => (p + 1) % chatPrompts.length), 2800);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div ref={ref} className="w-full">
      <div
        className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-7"
        style={{ boxShadow: "0 40px 120px -60px rgba(255,255,255,0.25)" }}
      >
        {/* transcript */}
        <div className="min-h-[240px] sm:min-h-[260px] flex flex-col justify-end gap-3">
          {visible.map((t, i) => (
            <div
              key={`${t.role}-${i}-${t.text.slice(0, 8)}`}
              className={`flex ${t.role === "user" ? "justify-end" : "justify-start"}`}
              style={{ animation: "alfie-msg-in 600ms cubic-bezier(0.22,1,0.36,1) both" }}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  t.role === "user"
                    ? "bg-white/[0.09] text-white border border-white/10"
                    : "bg-white/[0.04] border border-white/[0.07]"
                }`}
                style={{ color: t.role === "user" ? undefined : "#E0E0E0" }}
              >
                {t.role === "alfie" && (
                  <span className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-white/45">
                    <Sparkles className="h-3 w-3" /> Alfie
                  </span>
                )}
                {t.text}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex items-center gap-1.5 rounded-2xl border border-white/[0.07] bg-white/[0.04] px-4 py-3">
                {[0, 1, 2].map((d) => (
                  <span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-white/50"
                    style={{ animation: `alfie-dot 1200ms ease-in-out ${d * 160}ms infinite` }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* chat bar */}
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 transition-colors focus-within:border-white/30">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={`Ask Alfie: ${chatPrompts[caretPrompt]}…`}
            aria-label="Message Alfie"
            className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
          />
          <button
            type="button"
            className="flex h-9 shrink-0 items-center gap-2 rounded-xl bg-white px-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
          >
            Talk to us <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {chatPrompts.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setDraft(p)}
              className="rounded-full border border-white/10 px-3 py-1.5 text-xs transition-colors hover:border-white/30 hover:text-white"
              style={{ color: "#A0A0A0" }}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-center text-xs" style={{ color: "#A0A0A0" }}>
        Illustrative example. Alfie is currently in development.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Capability showcase carousel                                        */
/* ------------------------------------------------------------------ */

const capabilities = [
  {
    name: "Intelligence",
    image: capIntelligence,
    tag: "Reasoning",
    desc: "Financial context, analysis, reasoning, forecasting and insights across every account, ledger and document.",
  },
  {
    name: "Assistant",
    image: capAssistant,
    tag: "Interface",
    desc: "Conversational financial intelligence for customers and employees, grounded in your own data.",
  },
  {
    name: "Actions",
    image: capActions,
    tag: "Execution",
    desc: "Connect intelligence to authorized workflows and systems, with approvals and audit trails built in.",
  },
  {
    name: "Platform",
    image: capPlatform,
    tag: "Infrastructure",
    desc: "APIs, SDKs, integrations and deployment models for building financial intelligence into your products.",
  },
];

function CapabilityCarousel() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement | undefined;
    if (card) track.scrollTo({ left: card.offsetLeft - 8, behavior: "smooth" });
    setIndex(i);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(track.children) as HTMLElement[];
      const nearest = cards.reduce(
        (best, el, i) =>
          Math.abs(el.offsetLeft - track.scrollLeft) < best.d ? { d: Math.abs(el.offsetLeft - track.scrollLeft), i } : best,
        { d: Infinity, i: 0 },
      );
      setIndex(nearest.i);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <div
        ref={trackRef}
        className="no-scrollbar flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory"
      >
        {capabilities.map((c) => (
          <article
            key={c.name}
            className="group relative w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={c.image}
              alt=""
              loading="lazy"
              width={1200}
              height={900}
              className="h-[420px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.15) 0%, rgba(13,13,13,0.55) 55%, rgba(13,13,13,0.95) 100%)" }}
            />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/55">{c.tag}</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#E0E0E0" }}>
                {c.desc}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        {capabilities.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={`Show ${c.name}`}
            onClick={() => scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-white" : "w-4 bg-white/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Organizations project showcase                                      */
/* ------------------------------------------------------------------ */

const organizations = [
  {
    name: "Financial institutions",
    image: orgFinancial,
    preview: "Banking experiences that understand customers, not just accounts.",
    body: "Alfie sits on top of core banking data and turns it into understanding — spending behaviour, risk signals, cash position, and the reasoning behind each. Institutions use it to give customers financial clarity in their own products, and to give internal teams answers without waiting on a reporting queue.",
  },
  {
    name: "Fintechs",
    image: orgFintech,
    preview: "Financial intelligence without building the intelligence layer.",
    body: "Fintechs ship faster when the hard part is already solved. Alfie provides categorization, reasoning, forecasting and conversational financial context through APIs and SDKs, so product teams can focus on the experience instead of assembling a financial data and modelling stack from scratch.",
  },
  {
    name: "Insurance",
    image: orgInsurance,
    preview: "Financial context inside underwriting, claims and risk.",
    body: "Underwriting and claims decisions rest on financial evidence. Alfie reads statements, documents and transaction history, extracts what matters, and explains its reasoning — reducing manual review while keeping a clear, auditable trail behind every conclusion.",
  },
  {
    name: "Enterprise",
    image: orgEnterprise,
    preview: "Complex financial operations, easier to understand and act on.",
    body: "Finance teams operate across ledgers, banks, entities and spreadsheets. Alfie connects that activity into one reasoning layer that can reconcile, surface anomalies, answer questions in plain language, and prepare the workflow that follows the answer.",
  },
  {
    name: "Government",
    image: orgGovernment,
    preview: "Financial analysis at scale, with intelligent workflows.",
    body: "Public sector teams analyze financial information at volume under strict accountability requirements. Alfie helps review, classify and explain financial activity at scale, with deployment, residency and audit controls appropriate to regulated environments.",
  },
];

function OrganizationShowcase() {
  const [hover, setHover] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const active = organizations[hover];

  return (
    <div className="relative">
      {open === null ? (
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <ul className="divide-y divide-white/10 border-t border-white/10">
            {organizations.map((o, i) => (
              <li key={o.name}>
                <button
                  type="button"
                  onMouseEnter={() => setHover(i)}
                  onFocus={() => setHover(i)}
                  onClick={() => setOpen(i)}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left transition-colors"
                >
                  <span
                    className="text-2xl font-semibold tracking-tight transition-all duration-500 sm:text-3xl"
                    style={{ color: hover === i ? "#FFFFFF" : "rgba(255,255,255,0.38)" }}
                  >
                    {o.name}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 transition-all duration-500"
                    style={{
                      color: hover === i ? "#FFFFFF" : "rgba(255,255,255,0.25)",
                      transform: hover === i ? "translate(2px,-2px)" : "none",
                    }}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-white/10">
              <div className="relative h-[300px] sm:h-[380px]">
                {organizations.map((o, i) => (
                  <img
                    key={o.name}
                    src={o.image}
                    alt=""
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{
                      opacity: hover === i ? 1 : 0,
                      transform: hover === i ? "scale(1)" : "scale(1.04)",
                      transition: "opacity 800ms ease, transform 1200ms cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                ))}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(13,13,13,0.1), rgba(13,13,13,0.85))" }}
                />
              </div>
              <div className="p-6">
                <p className="text-base leading-relaxed" style={{ color: "#E0E0E0" }}>
                  {active.preview}
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(hover)}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-white"
                >
                  See what this means <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          onClick={() => setOpen(null)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(null)}
          className="cursor-zoom-out"
          style={{ animation: "alfie-msg-in 700ms cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/45">Built for</span>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {organizations[open].name}
              </h3>
            </div>
            <span className="mt-2 flex items-center gap-2 text-xs text-white/50">
              Click anywhere to close <X className="h-4 w-4" />
            </span>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            <img
              src={organizations[open].image}
              alt={organizations[open].name}
              loading="lazy"
              width={1400}
              height={1000}
              className="h-[320px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <p className="mt-8 max-w-3xl text-base leading-relaxed sm:text-lg" style={{ color: "#E0E0E0" }}>
            {organizations[open].body}
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee strip                                                       */
/* ------------------------------------------------------------------ */

const marqueeItems = [
  "Financial reasoning",
  "Transaction understanding",
  "Cash flow forecasting",
  "Document analysis",
  "Audit trails",
  "Tax readiness",
  "Anomaly detection",
  "Ledger reconciliation",
  "Risk signals",
];

function MarqueeStrip() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 py-6">
      <div className="flex w-max animate-marquee gap-10" style={{ animationDuration: "38s" }}>
        {[...marqueeItems, ...marqueeItems].map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="flex shrink-0 items-center gap-3 text-lg tracking-tight sm:text-xl"
            style={{ color: "rgba(255,255,255,0.42)" }}
          >
            {m}
            <span className="h-1 w-1 rounded-full bg-white/25" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-foreground to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-foreground to-transparent" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero image with scroll parallax                                     */
/* ------------------------------------------------------------------ */

function ParallaxHeroImage() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const node = wrapRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const p = 1 - Math.min(Math.max(rect.top / window.innerHeight, 0), 1);
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="mx-auto max-w-7xl px-6">
      <div
        className="overflow-hidden rounded-[28px] border border-white/10"
        style={{
          transform: `scale(${0.94 + progress * 0.06})`,
          transition: "transform 200ms linear",
        }}
      >
        <img
          src={heroImg}
          alt="Alfie financial intelligence layer"
          width={1600}
          height={1008}
          className="h-[320px] w-full object-cover sm:h-[460px] lg:h-[560px]"
          style={{ transform: `translateY(${(1 - progress) * -18}px) scale(1.06)` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const layers = [
  {
    n: "01",
    name: "Connect",
    desc: "Accounts, ledgers, documents and systems of record come in through one interface.",
  },
  {
    n: "02",
    name: "Understand",
    desc: "Alfie resolves, classifies and models financial activity into structured meaning.",
  },
  {
    n: "03",
    name: "Reason",
    desc: "Context is combined into analysis, forecasting and explanations you can defend.",
  },
  {
    n: "04",
    name: "Act",
    desc: "Intelligence connects to authorized workflows with permissions and audit trails.",
  },
];

const footerColumns = [
  {
    heading: "Product",
    links: ["Alfie Intelligence", "Alfie Assistant", "Alfie Actions", "Alfie Platform"],
  },
  { heading: "Resources", links: ["Integrations", "Developers", "Compliance"] },
  { heading: "Company", links: ["Renda", "About", "Contact"] },
];

export default function AlfiePlatform() {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ backgroundColor: "#111111", fontFamily: SF_PRO }}
    >
      <style>{`
        @keyframes alfie-msg-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        @keyframes alfie-dot { 0%,100% { opacity: .25; transform: translateY(0); } 50% { opacity: 1; transform: translateY(-3px); } }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.06] bg-foreground/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            Alfie
          </Link>
          <nav className="flex items-center gap-6 text-sm" style={{ color: "#A0A0A0" }}>
            <a href="#capabilities" className="hidden sm:inline hover:text-white transition-colors">Capabilities</a>
            <a href="#organizations" className="hidden sm:inline hover:text-white transition-colors">Organizations</a>
            <a href="#build" className="hidden sm:inline hover:text-white transition-colors">Developers</a>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide">
              Coming Soon
            </span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pt-24 pb-16 text-center sm:pt-32">
          <RollingHeadline
            text="The intelligence layer for financial systems."
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          />
          <Reveal delay={500}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#E0E0E0" }}>
              Alfie gives organizations the ability to understand financial information, reason across
              complex financial context, and turn intelligence into action.
            </p>
            <p className="mt-4 text-sm" style={{ color: "#A0A0A0" }}>
              For financial institutions, fintechs, enterprises, and government.
            </p>
          </Reveal>
        </section>

        {/* Chat */}
        <Reveal className="mx-auto max-w-3xl px-6 pb-20">
          <AlfieChat />
        </Reveal>

        <ParallaxHeroImage />

        <div className="mt-20">
          <MarqueeStrip />
        </div>

        {/* Capabilities carousel */}
        <section id="capabilities" className="mx-auto max-w-7xl px-6 py-20">
          <WipeHeading className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            <h2>One layer. Four ways to build with it.</h2>
          </WipeHeading>
          <Reveal delay={120}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#E0E0E0" }}>
              Intelligence for your products. Infrastructure for your teams. Every capability shares the
              same financial understanding underneath.
            </p>
          </Reveal>
          <Reveal delay={200} className="mt-12">
            <CapabilityCarousel />
          </Reveal>
        </section>

        {/* How it works */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <WipeHeading className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              <h2>From raw financial data to defensible decisions.</h2>
            </WipeHeading>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
              {layers.map((l, i) => (
                <Reveal key={l.n} delay={i * 90}>
                  <div className="h-full bg-foreground p-7">
                    <span className="text-xs tracking-[0.2em] text-white/40">{l.n}</span>
                    <p className="mt-6 text-lg font-semibold tracking-tight text-white">{l.name}</p>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: "#E0E0E0" }}>
                      {l.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Organizations */}
        <section id="organizations" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <WipeHeading className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              <h2>Built for organizations that operate on financial complexity.</h2>
            </WipeHeading>
            <Reveal delay={140}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#E0E0E0" }}>
                Select an organization to see how the intelligence layer applies.
              </p>
            </Reveal>
            <div className="mt-14">
              <OrganizationShowcase />
            </div>
          </div>
        </section>

        {/* Build */}
        <section id="build" className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <WipeHeading className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              <h2>Build with Alfie.</h2>
            </WipeHeading>
            <Reveal delay={120}>
              <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: "#E0E0E0" }}>
                APIs, SDKs and deployment models designed for regulated environments — with the controls,
                residency options and audit trails financial teams are held to.
              </p>
            </Reveal>

            <Reveal delay={180} className="mt-12">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
                <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Tell us what you are building.
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: "#E0E0E0" }}>
                  We are working with a small group of organizations ahead of launch.
                </p>
                <div className="mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-3 focus-within:border-white/30">
                  <input
                    placeholder="Work email"
                    aria-label="Work email"
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none"
                  />
                  <button
                    type="button"
                    className="flex h-9 shrink-0 items-center gap-2 rounded-xl bg-white px-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03]"
                  >
                    Talk to us <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <p className="mt-3 text-sm" style={{ color: "#A0A0A0" }}>
                  Coming soon.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-sm">
              <p className="text-base font-semibold text-white">Alfie</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                Financial intelligence infrastructure for the organizations that handle money.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {footerColumns.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    {col.heading}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                          style={{ color: "#A0A0A0" }}
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between"
            style={{ color: "#A0A0A0" }}
          >
            <p>Alfie — Financial Intelligence Infrastructure. Built by Renda.</p>
            <p>Alfie is currently in development. Coming soon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
