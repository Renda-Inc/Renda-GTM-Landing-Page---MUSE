import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Eye, Zap, Brain, Users, Shield, Scale, Building2, Search } from "lucide-react";
import headshotAlexandre from "@/assets/headshot-alexandre.jpg";
import headshotSofia from "@/assets/headshot-sofia.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotPriya from "@/assets/headshot-priya.jpg";
import aboutOverhead from "@/assets/about-overhead.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";
import aboutCanada from "@/assets/about-canada.jpg";
import aboutBelief from "@/assets/about-belief.jpg";
import aboutValues from "@/assets/about-values.jpg";

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
  { icon: Shield, title: "Responsible AI", desc: "We hold ourselves to the highest standards of safety, fairness, and accountability in every system we build." },
  { icon: Users, title: "Radical inclusion", desc: "Financial intelligence should be accessible to everyone, regardless of income, background, or expertise." },
  { icon: Scale, title: "Transparency", desc: "We explain what our systems do, why they do it, and how decisions are made; always." },
  { icon: Building2, title: "Long-term institution", desc: "We're not building for a quick exit. We're building a financial institution designed to endure." },
];

const timeline = [
  { year: "2024", title: "Founded", desc: "Renda incorporated in Toronto, Canada. Core team assembled around a shared belief: banking should think." },
  { year: "2024", title: "Alfie development begins", desc: "First prototypes of the Alfie financial reasoning engine. Architecture designed for modularity from day one." },
  { year: "2025", title: "Early access launch", desc: "Invite-only beta for individuals. Core banking + Alfie intelligence layer goes live." },
  { year: "2025", title: "Business banking", desc: "Alfie expands to serve small businesses - expense intelligence, tax readiness, and financial clarity." },
  { year: "2026+", title: "Platform & global expansion", desc: "Alfie as infrastructure for fintechs and platforms. Expansion beyond Canada." },
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

/* ── Page ──────────────────────────────────────────────────── */
export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero with full-bleed image (Revolut style) ────── */}
      <section className="relative w-full h-[520px] md:h-[640px] lg:h-[720px] overflow-hidden">
        <img
          src={aboutOverhead}
          alt="Renda team collaborating in the office"
          className="w-full h-full object-cover"
          width={1920}
          height={800}
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Text overlay - left aligned */}
        <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
          <Fade className="max-w-6xl mx-auto px-6 w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80 mb-6">About Renda</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white max-w-3xl">
              Building the Intelligence Layer for Modern Finance.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              An AI-native financial institution powered by Alfie, designed to understand your money, not just move it.
            </p>
          </Fade>
        </div>
      </section>

      {/* ── Our Belief ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Our Belief</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Finance should empower, not overwhelm.
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                We believe the financial system fails most people, not because of lack of tools, but because of lack of understanding. Renda exists to close that gap.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutBelief} alt="Team discussing financial inclusion" className="w-full h-72 lg:h-96 object-cover" loading="lazy" width={1280} height={720} />
            </div>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {beliefs.map((b) => (
              <div key={b.title} className="bg-secondary/60 rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── What We're Building ────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">What We're Building</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Alfie: a financial reasoning system.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Alfie isn't a chatbot or a dashboard overlay. It's a modular intelligence engine built into every layer of the Renda experience, from individual insights to cross-account reasoning, from real-time signals to long-term financial modeling.
                </p>
                <p>
                  Where traditional banks process transactions, Alfie processes meaning. It understands the context behind your money - why things happened, what's changing, and what deserves your attention.
                </p>
                <p className="text-foreground font-medium">
                  We didn't bolt AI onto banking. We built banking on top of intelligence.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutAlfie} alt="Alfie AI reasoning engine" className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── The Company We Aim to Be ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <Fade className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">The Company We Aim to Be</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Built to endure.
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                We're not optimizing for speed-to-market. We're building a financial institution with the seriousness, rigor, and long-term thinking that money demands.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutValues} alt="Team working in modern office" className="w-full h-72 lg:h-96 object-cover" loading="lazy" width={1280} height={720} />
            </div>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── Our Journey (vertical timeline with years) ────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            From conviction to product.
          </h2>
          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={i} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-[47px] h-[47px] rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                    {t.year}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground leading-relaxed">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Leadership ────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              The people behind Renda.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((l) => (
              <div key={l.name} className="group bg-foreground rounded-2xl overflow-hidden">
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 py-4">
                  <h3 className="text-lg font-bold text-background leading-tight">{l.name}</h3>
                  <p className="mt-1 text-sm font-medium text-background/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground inline-block flex-shrink-0" />
                    {l.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Built in Canada ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <Fade className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Global Vision</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Built in Canada. Designed for the world.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Renda is headquartered in Toronto, built on Canadian values of stability, inclusion, and responsible innovation. But our ambition extends far beyond borders.
                </p>
                <p>
                  We're designing every system, from compliance architecture to Alfie's reasoning engine, to scale globally from day one.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={aboutCanada} alt="Toronto skyline" className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
            </div>
          </div>
        </Fade>
      </section>

      {/* ── Partners & Backers ────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Partners & Backers</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
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
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
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
  return <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-border" /></div>;
}
