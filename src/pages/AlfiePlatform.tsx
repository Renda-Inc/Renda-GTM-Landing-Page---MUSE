import { useEffect, useRef, useState, useCallback } from "react";
import capIntelligence from "@/assets/alfie-cap-intelligence.jpg";
import capAssistant from "@/assets/alfie-cap-assistant.jpg";
import capActions from "@/assets/alfie-cap-actions.jpg";
import capPlatform from "@/assets/alfie-cap-platform.jpg";
import orgFinancial from "@/assets/alfie-org-financial.jpg";
import orgFintech from "@/assets/alfie-org-fintech.jpg";
import orgInsurance from "@/assets/alfie-org-insurance.jpg";
import orgEnterprise from "@/assets/alfie-org-enterprise.jpg";
import orgGovernment from "@/assets/alfie-org-government.jpg";
import heroImage from "@/assets/alfie-hero.jpg";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const BG = "#0D0D0D";

/* ---------------- hooks ---------------- */

function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[900ms] ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- header ---------------- */

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#0D0D0D]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="/alfie-platform" className="text-[17px] font-semibold tracking-tight text-white">
          Alfie
        </a>
        <nav className="flex items-center gap-6 text-[13px] text-[#A0A0A0]">
          <a href="#capabilities" className="hidden transition-colors hover:text-white sm:inline">
            Integrations
          </a>
          <a href="#capabilities" className="hidden transition-colors hover:text-white sm:inline">
            Developers
          </a>
          <a href="#organizations" className="hidden transition-colors hover:text-white sm:inline">
            Compliance
          </a>
          <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[12px] text-[#E0E0E0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7BE0A5]" />
            Coming Soon
          </span>
        </nav>
      </div>
    </header>
  );
}

/* ---------------- rolling headline ---------------- */

function RollingHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  const { ref, inView } = useInView<HTMLHeadingElement>(0.1);
  return (
    <h1
      ref={ref}
      className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: inView ? "translateY(0)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
              transitionDelay: `${i * 70}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

/* ---------------- chat bar demo ---------------- */

const demoScript: { q: string; a: string }[] = [
  {
    q: "Flag any transactions in Q3 that fall outside our audit thresholds.",
    a: "412 transactions reviewed. 6 exceed the $250k single-approval threshold, 2 lack supporting documentation. Prepared for auditor review.",
  },
  {
    q: "What is our estimated corporate tax exposure this quarter?",
    a: "Estimated $1.84M across three jurisdictions, up 7% on last quarter — driven by deferred revenue recognized in September.",
  },
  {
    q: "Summarize the audit trail for vendor payments over $100k.",
    a: "38 payments, 36 with complete approval chains. 2 exceptions routed to the controller with full document history attached.",
  },
];

function ChatDemo() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const question = demoScript[step].q;
    let i = 0;
    setTyped("");
    setShowAnswer(false);
    const typer = window.setInterval(() => {
      i += 1;
      setTyped(question.slice(0, i));
      if (i >= question.length) {
        window.clearInterval(typer);
        window.setTimeout(() => setShowAnswer(true), 500);
      }
    }, 34);
    const next = window.setTimeout(() => setStep((s) => (s + 1) % demoScript.length), 9500);
    return () => {
      window.clearInterval(typer);
      window.clearTimeout(next);
    };
  }, [step]);

  return (
    <div className="w-full max-w-2xl">
      <div
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
        className={`flex items-center gap-3 rounded-2xl border bg-white/[0.04] px-5 py-4 transition-all duration-500 ${
          focused ? "border-white/25 shadow-[0_0_40px_-12px_rgba(255,255,255,0.35)]" : "border-white/10"
        }`}
      >
        <span className="text-[15px] leading-relaxed text-[#E0E0E0]">
          {typed}
          <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-pulse bg-white/70" />
        </span>
      </div>
      <div
        className={`mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition-all duration-700 ${
          showAnswer ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <p className="text-[13px] font-medium tracking-wide text-[#7BE0A5]">Alfie</p>
        <p className="mt-2 text-[15px] leading-relaxed text-[#A0A0A0]">{demoScript[step].a}</p>
      </div>
      <p className="mt-3 text-[13px] text-[#A0A0A0]">Coming soon.</p>
    </div>
  );
}

/* ---------------- hero ---------------- */

function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const offset = Math.max(-60, Math.min(60, (window.innerHeight - rect.top) * 0.06));
      imgRef.current.style.transform = `translateY(${offset}px) scale(1.12)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="pt-36 md:pt-44">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <RollingHeadline text="The intelligence layer for financial systems." />
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#E0E0E0]">
            Alfie gives organizations the ability to understand financial information, reason across complex financial
            context, and turn intelligence into action.
          </p>
        </Reveal>
        <Reveal delay={320} className="mt-10 w-full max-w-2xl">
          <ChatDemo />
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-10 text-[14px] text-[#A0A0A0]">
            For financial institutions, fintechs, enterprises, and government.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-20 md:mt-28">
        <div className="relative h-[46vh] w-full overflow-hidden md:h-[70vh]">
          <img
            ref={imgRef}
            src={heroImage}
            alt="Financial intelligence infrastructure"
            className="h-full w-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D] via-transparent to-[#0D0D0D]" />
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- marquee ---------------- */

const marqueeItems = [
  "Financial reasoning",
  "Context across systems",
  "Audit intelligence",
  "Tax analysis",
  "Authorized actions",
  "APIs & SDKs",
  "Risk understanding",
  "Forecasting",
];

function Marquee() {
  return (
    <section className="border-y border-white/[0.07] py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[alfie-marquee_38s_linear_infinite] items-center gap-14 pr-14">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-[15px] text-[#A0A0A0]">
              {item}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-[alfie-marquee_38s_linear_infinite] items-center gap-14 pr-14"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`b-${i}`} className="whitespace-nowrap text-[15px] text-[#A0A0A0]">
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes alfie-marquee { from { transform: translateX(0);} to { transform: translateX(-100%);} }`}</style>
    </section>
  );
}

/* ---------------- capabilities carousel ---------------- */

const capabilities = [
  {
    title: "Intelligence",
    text: "Financial context, analysis, reasoning, forecasting and insights.",
    image: capIntelligence,
  },
  {
    title: "Assistant",
    text: "Conversational financial intelligence for customers and employees.",
    image: capAssistant,
  },
  {
    title: "Actions",
    text: "Connect intelligence to authorized workflows and systems.",
    image: capActions,
  },
  {
    title: "Platform",
    text: "APIs, SDKs, integrations and infrastructure for building with Alfie.",
    image: capPlatform,
  },
];

function Capabilities() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((v) => (v + 1) % capabilities.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="capabilities" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Alfie: One layer. Four ways to build with it.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-[#A0A0A0]">
            Intelligence for your products. Infrastructure for your teams. Every capability shares the same financial
            understanding underneath.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="relative h-[380px] w-full overflow-hidden rounded-2xl md:h-[560px]">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`absolute inset-0 transition-all duration-[1100ms] ease-out ${
                  active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
                aria-hidden={active !== i}
              >
                <img src={cap.image} alt={cap.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-[#0D0D0D]/25 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
                  <p className="text-2xl font-semibold text-white md:text-4xl">{cap.title}</p>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#E0E0E0] md:text-lg">{cap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {capabilities.map((cap, i) => (
            <button
              key={cap.title}
              type="button"
              onClick={() => setActive(i)}
              className={`text-[15px] transition-colors ${
                active === i ? "text-white" : "text-[#A0A0A0] hover:text-[#E0E0E0]"
              }`}
            >
              {cap.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- data to decisions ---------------- */

const dataSteps = [
  {
    num: "01",
    title: "Connect",
    text: "Accounts, ledgers, documents and systems of record come in through one interface.",
  },
  {
    num: "02",
    title: "Understand",
    text: "Alfie resolves, classifies and models financial activity into structured meaning.",
  },
  {
    num: "03",
    title: "Reason",
    text: "Context is combined into analysis, forecasting and explanations you can defend.",
  },
  {
    num: "04",
    title: "Act",
    text: "Intelligence connects to authorized workflows with permissions and audit trails.",
  },
];

function DataToDecisions() {
  return (
    <section className="scroll-mt-20 border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            From raw financial data to defensible decisions.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dataSteps.map((step) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-6 transition-colors hover:border-white/[0.12] hover:bg-white/[0.05]"
            >
              <p className="text-[13px] font-medium tracking-wide text-[#7BE0A5]">{step.num}</p>
              <p className="mt-4 text-xl font-medium text-white">{step.title}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-[#A0A0A0]">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- organizations showcase ---------------- */

const organizations = [
  {
    name: "Financial institutions",
    text: "Build financial experiences that understand customers, not just accounts.",
    image: orgFinancial,
  },
  {
    name: "Fintechs",
    text: "Give financial products intelligence without building the entire intelligence layer themselves.",
    image: orgFintech,
  },
  {
    name: "Insurance",
    text: "Bring financial context and intelligence into underwriting, claims, risk, and customer experiences.",
    image: orgInsurance,
  },
  {
    name: "Enterprise",
    text: "Make complex financial operations easier to understand and act on.",
    image: orgEnterprise,
  },
  {
    name: "Government",
    text: "Help teams analyze financial information at scale and make complex workflows more intelligent.",
    image: orgGovernment,
  },
];

function Organizations() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [hovered, setHovered] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const close = useCallback(() => setExpanded(null), []);

  useEffect(() => {
    if (expanded === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, close]);

  return (
    <section id="organizations" className="scroll-mt-20 border-t border-white/[0.07] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden">
          <h2
            className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-4xl"
            style={{
              transform: inView ? "translateX(0)" : "translateX(-8%)",
              opacity: inView ? 1 : 0,
              clipPath: inView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            }}
          >
            Built for organizations that operate on financial complexity.
          </h2>
        </div>
        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-lg text-[#A0A0A0]">
            Select an organization to see how the intelligence layer applies.
          </p>
        </Reveal>

        {expanded === null ? (
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="border-t border-white/[0.07]">
              {organizations.map((org, i) => (
                <button
                  key={org.name}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onClick={() => setExpanded(i)}
                  className={`flex w-full items-center justify-between border-b border-white/[0.07] py-6 text-left transition-colors ${
                    hovered === i ? "text-white" : "text-[#A0A0A0]"
                  }`}
                >
                  <span className="text-xl font-medium md:text-2xl">{org.name}</span>
                  <span className="text-[13px] text-[#A0A0A0]">0{i + 1}</span>
                </button>
              ))}
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[440px]">
              {organizations.map((org, i) => (
                <div
                  key={org.name}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={hovered !== i}
                >
                  <img src={org.image} alt={org.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 to-transparent" />
                  <p className="absolute bottom-7 left-7 right-7 text-[15px] leading-relaxed text-[#E0E0E0]">
                    {org.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="mt-14 cursor-pointer animate-in fade-in duration-500"
            onClick={close}
            role="presentation"
          >
            <h3 className="text-2xl font-semibold text-white md:text-4xl">{organizations[expanded].name}</h3>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={organizations[expanded].image}
                alt={organizations[expanded].name}
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#E0E0E0]">{organizations[expanded].text}</p>
            <p className="mt-6 text-[13px] text-[#A0A0A0]">Click anywhere or press Esc to go back.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------- build with alfie cta ---------------- */

function BuildWithAlfieCTA() {
  return (
    <section className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Build with Alfie.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#A0A0A0]">
            APIs, SDKs and deployment models designed for regulated environments — with the controls, residency options
            and audit trails financial teams are held to.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-14">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 md:p-10">
            <p className="text-xl font-medium text-white">Tell us what you are building.</p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#A0A0A0]">
              We are working with a small group of organizations ahead of launch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-white/[0.08]">
                Talk to us
              </span>
              <span className="text-[13px] text-[#A0A0A0]">Coming soon.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- footer ---------------- */

const footerCols = [
  { title: "Product", links: ["Alfie Intelligence", "Alfie Assistant", "Alfie Actions", "Alfie Platform"] },
  { title: "Resources", links: ["Integrations", "Developers", "Compliance"] },
  { title: "Company", links: ["Renda", "About", "Contact"] },
];

function AlfieFooter() {
  return (
    <footer className="border-t border-white/[0.07] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <p className="max-w-sm text-[14px] leading-relaxed text-[#A0A0A0]">
          Alfie — Financial intelligence infrastructure for the organizations that handle money. Built by Renda.
        </p>
        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-[14px] font-medium text-white">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <span className="text-[14px] text-[#A0A0A0] transition-colors hover:text-[#E0E0E0]">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <p className="border-t border-white/[0.07] pt-6 text-[13px] text-[#A0A0A0]">
          Alfie is currently in development. Coming soon.
        </p>
      </div>
    </footer>
  );
}

/* ---------------- page ---------------- */

export default function AlfiePlatform() {
  return (
    <main className="min-h-screen" style={{ fontFamily: SF_PRO, backgroundColor: BG }}>
      <Header />
      <Hero />
      <Marquee />
      <Capabilities />
      <DataToDecisions />
      <Organizations />
      <BuildWithAlfieCTA />
      <AlfieFooter />
    </main>
  );
}
