import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ShieldCheck } from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import aboutBelief from "@/assets/about-belief.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";
import aboutValues from "@/assets/about-values.jpg";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";
import lifestyleCreativeHobby from "@/assets/lifestyle-creative-hobby.jpg";
import lifestyleDreamJob from "@/assets/lifestyle-dream-job.jpg";
import lifestyleBeach from "@/assets/lifestyle-beach.jpg";
import lifestyleFriends from "@/assets/lifestyle-friends-cooking.jpg";
import lifestyleHike from "@/assets/lifestyle-adventure-hike.jpg";

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
    <p className={`text-sm font-medium uppercase tracking-[0.2em] mb-8 ${light ? "text-white/60" : "text-muted-foreground"}`}>
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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-black/70 font-medium text-[15px] md:text-base leading-relaxed">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <span>{children}</span>
    </li>
  );
}

const philosophyCards = [
  { image: lifestyleStudying, title: "Interpret, don't just display.", desc: "Read meaning from financial activity, not just list it." },
  { image: lifestyleCreativeHobby, title: "Surface meaning from patterns.", desc: "Find what matters in the data you already have." },
  { image: lifestyleDreamJob, title: "Act with confidence.", desc: "Move forward with clarity, not confusion." },
];

const signalCards = [
  {
    image: lifestyleBeach,
    title: "Your attention is sacred.",
    desc: "We don't waste it on noise or vanity metrics.",
  },
  {
    image: lifestyleFriends,
    title: "Right insight, right moment.",
    desc: "Context-aware guidance that arrives when it counts.",
  },
  {
    image: lifestyleHike,
    title: "Quiet by design.",
    desc: "Intelligence that speaks only when it matters.",
  },
];

/* ── Signal accordion (mirrors ValuesAccordion) ────────── */
const ROTATE_MS = 4000;
const RESUME_MS = 6000;

function SignalAccordion() {
  const [active, setActive] = useState(0);
  const pausedUntilRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActive((i) => (i + 1) % signalCards.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    pausedUntilRef.current = Date.now() + RESUME_MS;
  };

  return (
    <>
      <div className="mt-14 flex w-full gap-3 h-[520px] lg:h-[640px]">
        {signalCards.map((c, i) => {
          const isActive = i === active;
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => handleSelect(i)}
              aria-label={c.title}
              aria-expanded={isActive}
              className="relative rounded-2xl overflow-hidden transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, minWidth: 0 }}
            >
              <img
                src={c.image}
                alt={c.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-[#111111] transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"}`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-black/45 via-black/15 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`} />

              <div className={`relative h-full flex flex-col justify-start p-8 lg:p-12 text-left transition-opacity duration-500 ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}`}>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-md" style={{ fontFamily: SF_FONT }}>
                  {c.title}
                </h3>
                <p className="mt-6 text-white/85 text-base md:text-lg font-medium leading-relaxed max-w-md">
                  {c.desc}
                </p>
                <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <span
                  className="text-white text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {c.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {signalCards.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelect(i)}
            aria-label={`Show ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default function WhyRenda() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar />

      {/* ── Why Renda Exists (full-bleed hero, matching About) ── */}
      <section id="exists" className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroLifestyle}
            alt="A quiet moment of clarity"
            className="w-full h-full object-cover object-top"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-32 md:pb-48 pt-32 w-full">
          <Fade>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-peach animate-pulse" />
              <span className="text-sm font-medium text-white/90">Why Renda</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white max-w-3xl">
              Why Renda Exists.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Banking has become more digital, but it hasn't become more intelligent. We believe your bank should do more than record what happened.
            </p>
          </Fade>
        </div>
      </section>

      <Divider />

      {/* ── Our Philosophy ─────────────────────────────────── */}
      <section id="philosophy" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Our Philosophy</Eyebrow>
              <H2>Understanding over reporting.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                For decades, banks have focused on recording financial activity, balances, transactions, statements. But simply reporting information does not help people make better financial decisions.
              </p>
              <p className="mt-6 text-base md:text-lg text-black/80 font-semibold leading-relaxed">
                Renda is designed to turn financial information into clear understanding, not just records.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutBelief} alt="Conversations about clarity" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-5 items-center">
            {philosophyCards.map((c, i) => (
              <div
                key={c.title}
                className={`group relative rounded-2xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 ${
                  i === 1 ? "h-[460px] sm:h-[520px]" : "h-[420px] sm:h-[460px]"
                }`}
              >
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/50" />
                <div className="relative h-full p-7 flex flex-col">
                  <h3 className="text-white text-2xl md:text-[26px] font-medium leading-snug tracking-tight max-w-[90%]" style={{ fontFamily: SF_FONT }}>
                    {c.title}
                  </h3>
                  <p className="mt-3 text-white/80 text-[15px] font-medium leading-relaxed max-w-[92%]">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Signal over Noise (dark bg + accordion) ────────── */}
      <section id="signals" className="scroll-mt-20 py-16 lg:py-20" style={{ backgroundColor: "#111111" }}>
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img src={lifestyleCafe} alt="Quiet focus" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow light>Signal Over Noise</Eyebrow>
              <H2 light>Signal over noise.</H2>
              <p className="mt-6 text-base md:text-lg text-white/70 font-medium leading-relaxed">
                Most financial institutions flood you with data, transaction lists, endless notifications, dashboards full of charts you never asked for. But more information doesn't create clarity.
              </p>
              <p className="mt-6 text-base md:text-lg text-white/90 font-semibold leading-relaxed">
                Renda is designed to surface what's relevant; quietly, clearly, and only when it matters.
              </p>
            </div>
          </div>

          <SignalAccordion />
        </Fade>
      </section>

      {/* ── Intelligence at the Core ───────────────────────── */}
      <section id="belief" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Intelligence at the Core</Eyebrow>
              <H2>Intelligence, not features.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Most financial apps add artificial intelligence after the fact. Renda is built differently. Alfie is woven into the foundation of the platform, continuously understanding financial patterns, identifying what matters, and providing meaningful guidance before you even think to ask.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutAlfie} alt="Alfie intelligence layer" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Trust & Responsibility ─────────────────────────── */}
      <section id="trust" className="scroll-mt-20 py-16 lg:py-20 bg-secondary/40">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img src={aboutValues} alt="Trust by design" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Trust & Responsibility</Eyebrow>
              <H2>Trust by design.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                A bank powered by intelligence must also be built on responsibility. Financial guidance carries real consequences, it requires transparency, restraint, and user control.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Insights are always explainable and transparent.</Bullet>
                <Bullet>Automation is optional, you stay in control.</Bullet>
                <Bullet>Technology supports your judgment, never replaces it.</Bullet>
              </ul>
              <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-background border border-border">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-black/80">People should always remain in charge of their financial decisions.</span>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* ── Closing CTA ────────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 leading-tight"
            style={{ fontFamily: SF_FONT }}
          >
            Banking built on a different premise.
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-xl mx-auto">
            Not more data. Not more notifications. Just the clarity you need to move forward.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </a>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
