import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Eye, Zap, Brain, Users, Shield, Scale, Building2, Search, ChevronLeft, ChevronRight } from "lucide-react";
import headshotAlexandre from "@/assets/headshot-alexandre.jpg";
import headshotSofia from "@/assets/headshot-sofia.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotPriya from "@/assets/headshot-priya.jpg";
import aboutOverhead from "@/assets/about-overhead.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";
import aboutCanada from "@/assets/about-canada.jpg";
import aboutBelief from "@/assets/about-belief.jpg";
import aboutValues from "@/assets/about-values.jpg";
import valueImg1 from "@/assets/careers/team-2.jpg";
import valueImg2 from "@/assets/careers/team-4.jpg";
import valueImg3 from "@/assets/careers/team-6.jpg";
import valueImg4 from "@/assets/careers/team-8.jpg";
import timelineFounded from "@/assets/timeline-founded.jpg";
import timelineAlfie from "@/assets/timeline-alfie.jpg";
import timelineBeta from "@/assets/timeline-beta.jpg";
import timelineBusiness from "@/assets/timeline-business.jpg";
import timelineGlobal from "@/assets/timeline-global.jpg";

/* ── Reusable fade-in wrapper ─────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────── */
const beliefs = [
  { icon: Eye, title: "Clarity over control", desc: "We believe people don't need more dashboards - they need understanding." },
  { icon: Search, title: "Signal over noise", desc: "Your attention is sacred. We surface only what matters, when it matters." },
  { icon: Brain, title: "Ethical AI", desc: "Every AI decision is transparent, explainable, and built with human oversight." },
  { icon: Users, title: "Financial empowerment", desc: "Intelligence should serve everyone, not just those who can afford advisors." },
];

const values = [
  { icon: Shield, title: "Responsible AI", desc: "We hold ourselves to the highest standards of safety, fairness, and accountability in every system we build.", image: valueImg1 },
  { icon: Users, title: "Radical inclusion", desc: "Financial intelligence should be accessible to everyone, regardless of income, background, or expertise.", image: valueImg2 },
  { icon: Scale, title: "Transparency", desc: "We explain what our systems do, why they do it, and how decisions are made; always.", image: valueImg3 },
  { icon: Building2, title: "Long-term institution", desc: "We're not building for a quick exit. We're building a financial institution designed to endure.", image: valueImg4 },
];

const timeline = [
  { year: "2024", title: "Founded", desc: "Renda incorporated in Toronto, Canada. Core team assembled around a shared belief: banking should think.", image: timelineFounded },
  { year: "2024", title: "Alfie development begins", desc: "First prototypes of the Alfie financial reasoning engine. Architecture designed for modularity from day one.", image: timelineAlfie },
  { year: "2025", title: "Early access launch", desc: "Invite-only beta for individuals. Core banking + Alfie intelligence layer goes live.", image: timelineBeta },
  { year: "2025", title: "Business banking", desc: "Alfie expands to serve small businesses - expense intelligence, tax readiness, and financial clarity.", image: timelineBusiness },
  { year: "2026+", title: "Platform & global expansion", desc: "Alfie as infrastructure for fintechs and platforms. Expansion beyond Canada.", image: timelineGlobal },
];

const leaders = [
  { name: "Alexandre Dumont", role: "Co-Founder & CEO", photo: headshotAlexandre },
  { name: "Sofia Chen", role: "Chief Technology Officer", photo: headshotSofia },
  { name: "Marcus Williams", role: "Chief Operating Officer", photo: headshotMarcus },
  { name: "Priya Sharma", role: "Head of Product", photo: headshotPriya },
  { name: "Daniel Okafor", role: "Chief Financial Officer", photo: headshotMarcus },
  { name: "Isabelle Tremblay", role: "Chief Compliance & Risk Officer", photo: headshotSofia },
  { name: "Liam Carter", role: "Head of Branding, Growth & Marketing", photo: headshotAlexandre },
  { name: "Anika Patel", role: "Head of Data & AI", photo: headshotPriya },
  { name: "Rachel Nguyen", role: "VP, People & Culture", photo: headshotSofia },
  { name: "James Thornton", role: "General Counsel", photo: headshotMarcus },
  { name: "Kofi Asante", role: "Head of Banking Platforms", photo: headshotAlexandre },
];

const vcPartners = [
  { name: "Y Combinator", logo: "YC" },
  { name: "Andreessen Horowitz", logo: "a16z" },
  { name: "Sequoia Capital", logo: "Sequoia" },
  { name: "Accel", logo: "Accel" },
  { name: "Index Ventures", logo: "Index" },
  { name: "Ribbit Capital", logo: "Ribbit" },
  { name: "Lightspeed", logo: "Lightspeed" },
  { name: "General Catalyst", logo: "GC" },
];

/* ── Timeline component ───────────────────────────────────── */
function Timeline() {
  const [active, setActive] = useState(0);
  const current = timeline[active];

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: year, description, tracker */}
      <div>
        <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">Our Journey</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight mb-10">
          From conviction to product.
        </h2>

        {/* Big year + title + description */}
        <div className="mb-10 min-h-[140px]">
          <p className="text-6xl md:text-7xl font-bold text-foreground tracking-tight leading-none">{current.year}</p>
          <h3 className="mt-3 text-xl font-semibold text-foreground">{current.title}</h3>
          <p className="mt-2 text-base text-muted-foreground leading-relaxed max-w-md">{current.desc}</p>
        </div>

        {/* Horizontal milestone tracker */}
        <div className="flex items-center gap-0 relative">
          {/* Arrows */}
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            disabled={active === 0}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 transition-colors mr-4"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex-1 flex items-center relative">
            {/* Line */}
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border -translate-y-1/2" />

            {timeline.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex-1 flex flex-col items-center relative z-10 group"
              >
                {/* Dot */}
                <div


                  className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ${
                    i === active
                      ? "bg-foreground border-foreground scale-125"
                      : "bg-background border-muted-foreground/40 group-hover:border-foreground"
                  }`}
                />
                {/* Year label */}
                <span
                  className={`mt-2 text-sm font-medium transition-colors ${
                    i === active ? "text-foreground font-bold" : "text-muted-foreground"
                  }`}
                >
                  {t.year}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setActive(Math.min(timeline.length - 1, active + 1))}
            disabled={active === timeline.length - 1}
            className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground disabled:opacity-30 transition-colors ml-4"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={current.image}
          alt={current.title}
          className="w-full h-[320px] lg:h-[440px] object-cover transition-all duration-500"
          loading="lazy"
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}

/* ── Values Accordion (vertical image accordion) ─────────── */
const VALUES_ROTATE_MS = 4000;
const VALUES_RESUME_MS = 6000;

function ValuesAccordion() {
  const [active, setActive] = useState(0);
  const pausedUntilRef = useRef<number>(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntilRef.current) return;
      setActive((i) => (i + 1) % values.length);
    }, VALUES_ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const handleSelect = (i: number) => {
    setActive(i);
    pausedUntilRef.current = Date.now() + VALUES_RESUME_MS;
  };

  return (
    <>
      <div className="mt-14 flex w-full gap-3 h-[520px] lg:h-[640px]">
        {values.map((v, i) => {
          const isActive = i === active;
          return (
            <button
              key={v.title}
              type="button"
              onClick={() => handleSelect(i)}
              aria-label={v.title}
              aria-expanded={isActive}
              className="relative rounded-xl overflow-hidden transition-all duration-700 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, minWidth: 0 }}
            >
              <img
                src={v.image}
                alt={v.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-[#111111] transition-opacity duration-700 ${isActive ? "opacity-0" : "opacity-100"}`} />
              <div className={`absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`} />

              <div className={`relative h-full flex flex-col justify-start p-8 lg:p-12 text-left transition-opacity duration-500 ${isActive ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"}`}>
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight max-w-md">
                  {v.title}
                </h3>
                <p className="mt-6 text-white/85 text-base md:text-lg font-medium leading-relaxed max-w-md">
                  {v.desc}
                </p>
                <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
              </div>

              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                <span
                  className="text-white text-sm md:text-base font-medium tracking-wide whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {v.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {values.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSelect(i)}
            aria-label={`Show value ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-foreground" : "w-2 h-2 bg-black/25"
            }`}
          />
        ))}
      </div>
    </>
  );
}

/* ── Page ──────────────────────────────────────────────────── */
export default function About() {
  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* ── Hero - matching home page (min-h-screen, bottom-left text) ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutOverhead}
            alt="Renda team collaborating in the office"
            className="w-full h-full object-cover object-top"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 w-full">
          <Fade>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white max-w-3xl">
              Building the Intelligence Layer for Modern Finance.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              An AI-native financial institution powered by Alfie, designed to understand your money, not just move it.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── Our Belief (image LEFT, text RIGHT) ───────────── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src={aboutBelief} alt="Team discussing financial inclusion" className="w-full h-[264px] lg:h-[396px] object-cover" loading="lazy" width={1280} height={720} />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">Our Belief</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Finance should empower, not overwhelm.
              </h2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                We believe the financial system fails most people, not because of lack of tools, but because of lack of understanding. Renda exists to close that gap.
              </p>
            </div>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
            {beliefs.map((b, i) => {
              const image = [valueImg1, valueImg2, valueImg3, valueImg4][i];
              const taller = i === 1 || i === 2;
              return (
                <div
                  key={b.title}
                  className={`group relative rounded-xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 ${
                    taller ? "h-[480px] sm:h-[540px]" : "h-[440px] sm:h-[480px]"
                  }`}
                >
                  <img src={image} alt={b.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/55" />
                  <div className="relative h-full p-7 flex flex-col">
                    <h3 className="text-white text-2xl md:text-[26px] font-medium leading-snug tracking-tight max-w-[92%]">
                      {b.title}
                    </h3>
                    <p className="mt-3 text-white/80 text-[15px] font-medium leading-relaxed max-w-[92%]">
                      {b.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </section>


      <Divider />

      {/* ── What We're Building (text LEFT, image RIGHT) ─── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">What We're Building</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Alfie: a financial reasoning system.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                <p>
                  Alfie isn't a chatbot or a dashboard overlay. It's a modular intelligence engine built into every layer of the Renda experience, from individual insights to cross-account reasoning, from real-time signals to long-term financial modeling.
                </p>
                <p>
                  Where traditional banks process transactions, Alfie processes meaning. It understands the context behind your money - why things happened, what's changing, and what deserves your attention.
                </p>
                <p className="text-black/80 font-semibold">
                  We didn't bolt AI onto banking. We built banking on top of intelligence.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img src={aboutAlfie} alt="Alfie AI reasoning engine" className="w-full h-[312px] lg:h-[468px] object-cover" loading="lazy" />
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── The Company We Aim to Be (image LEFT, text RIGHT) ─ */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src={aboutValues} alt="Team working in modern office" className="w-full h-[264px] lg:h-[396px] object-cover" loading="lazy" width={1280} height={720} />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">The Company We Aim to Be</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Built to endure.
              </h2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                We're not optimizing for speed-to-market. We're building a financial institution with the seriousness, rigor, and long-term thinking that money demands.
              </p>
            </div>
          </div>
          <ValuesAccordion />
        </Fade>
      </section>

      {/* ── Our Journey (horizontal timeline with images) ──── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <Timeline />
        </Fade>
      </section>

      {/* ── Leadership ────────────────────────────────────── */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#111111" }}>
        <Fade className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-sm font-medium tracking-[0.08em] text-background/50 mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background leading-tight">
              The people behind Renda.
            </h2>
          </div>

          {/* First row: CEO + COO — two large */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {leaders.slice(0, 2).map((l) => (
              <LeaderCard key={l.name} leader={l} large />
            ))}
          </div>

          {/* Remaining: rows of three, aligned to the same edges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leaders.slice(2).map((l) => (
              <LeaderCard key={l.name} leader={l} />
            ))}
          </div>
        </Fade>
      </section>



      {/* ── Built in Canada / Global Vision (image LEFT, text RIGHT) ── */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-xl overflow-hidden">
              <img src={aboutCanada} alt="Toronto skyline" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">Global Vision</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Built in Canada. Designed for the world.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                <p>
                  Renda is headquartered in Toronto, built on Canadian values of stability, inclusion, and responsible innovation. But our ambition extends far beyond borders.
                </p>
                <p>
                  We're designing every system, from compliance architecture to Alfie's reasoning engine, to scale globally from day one.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>


      {/* ── Partners & Backers ────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-medium tracking-[0.08em] text-muted-foreground mb-8">Partners & Backers</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Backed by those who believe.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We're fortunate to be supported by investors and partners who share our long-term vision for intelligent finance.
          </p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">
            {vcPartners.map((p) => (
              <div
                key={p.name}
                className="h-24 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center justify-center gap-1"
              >
                <span className="text-lg font-bold text-foreground">{p.logo}</span>
                <span className="text-xs text-muted-foreground">{p.name}</span>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            The future of finance isn't louder. It's smarter.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We're building for a world where your bank understands you, not the other way around.
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

/* ── Divider component ────────────────────────────────────── */
function Divider() {
  return <div className="max-w-4xl mx-auto px-6"><div className="h-[2px] bg-black/15 rounded-full" /></div>;
}

/* ── Leader card ──────────────────────────────────────────── */
function LeaderCard({
  leader,
  large = false,
}: {
  leader: { name: string; role: string; photo: string };
  large?: boolean;
}) {
  return (
    <div className="group pb-12 md:pb-16">
      <div className="mb-5">
        <p className="text-xs md:text-sm text-background/50 mb-1">{leader.role}</p>
        <h3
          className={`font-serif text-background leading-tight ${
            large ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
          }`}
        >
          {leader.name}
        </h3>
      </div>
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-background/5 ${
          large ? "aspect-[4/3]" : "aspect-[4/5]"
        }`}
      >
        <img
          src={leader.photo}
          alt={leader.name}
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
    </div>
  );
}
