import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import headshotAlexandre from "@/assets/headshot-alexandre.jpg";
import headshotSofia from "@/assets/headshot-sofia.jpg";
import headshotMarcus from "@/assets/headshot-marcus.jpg";
import headshotPriya from "@/assets/headshot-priya.jpg";

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
  { title: "Clarity over control", desc: "We believe people don't need more dashboards — they need understanding." },
  { title: "Signal over noise", desc: "Your attention is sacred. We surface only what matters, when it matters." },
  { title: "Ethical AI", desc: "Every AI decision is transparent, explainable, and built with human oversight." },
  { title: "Financial empowerment", desc: "Intelligence should serve everyone — not just those who can afford advisors." },
];

const values = [
  { title: "Responsible AI", desc: "We hold ourselves to the highest standards of safety, fairness, and accountability in every system we build." },
  { title: "Radical inclusion", desc: "Financial intelligence should be accessible to everyone, regardless of income, background, or expertise." },
  { title: "Transparency", desc: "We explain what our systems do, why they do it, and how decisions are made — always." },
  { title: "Long-term institution", desc: "We're not building for a quick exit. We're building a financial institution designed to endure." },
];

const timeline = [
  { year: "2024", title: "Founded", desc: "Renda incorporated in Toronto, Canada. Core team assembled around a shared belief: banking should think." },
  { year: "2024", title: "Alfie development begins", desc: "First prototypes of the Alfie financial reasoning engine. Architecture designed for modularity from day one." },
  { year: "2025", title: "Early access launch", desc: "Invite-only beta for individuals. Core banking + Alfie intelligence layer goes live." },
  { year: "2025", title: "Business banking", desc: "Alfie expands to serve small businesses — expense intelligence, tax readiness, and financial clarity." },
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

/* ── Page ──────────────────────────────────────────────────── */
export default function About() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-6">About Renda</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Building the Intelligence Layer for Modern Finance.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            An AI-native financial institution powered by Alfie — designed to understand your money, not just move it.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── Our Belief ─────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Our Belief</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Finance should empower, not overwhelm.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We believe the financial system fails most people — not because of lack of tools, but because of lack of understanding. Renda exists to close that gap.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {beliefs.map((b) => (
              <div key={b.title} className="border-l-2 border-accent-foreground/30 pl-5">
                <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── What We're Building ────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">What We're Building</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Alfie: a financial reasoning system.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Alfie isn't a chatbot or a dashboard overlay. It's a modular intelligence engine built into every layer of the Renda experience — from individual insights to cross-account reasoning, from real-time signals to long-term financial modeling.
            </p>
            <p>
              Where traditional banks process transactions, Alfie processes meaning. It understands the context behind your money — why things happened, what's changing, and what deserves your attention.
            </p>
            <p className="text-foreground font-medium">
              We didn't bolt AI onto banking. We built banking on top of intelligence.
            </p>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── The Company We Aim to Be ──────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface-elevated">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">The Company We Aim to Be</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Built to endure.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            We're not optimizing for speed-to-market. We're building a financial institution with the seriousness, rigor, and long-term thinking that money demands.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 gap-8">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── Our Journey ───────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            From conviction to product.
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={i} className="relative pl-10">
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-accent-foreground bg-background" />
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground">{t.year}</p>
                  <h3 className="mt-1 text-base font-semibold text-foreground">{t.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
              The people behind Renda.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {leaders.map((l) => (
              <div key={l.name} className="group text-center">
                <div className="relative mx-auto w-28 h-28 md:w-36 md:h-36 mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={l.photo}
                    alt={l.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm md:text-base font-semibold text-foreground">{l.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1 leading-snug">{l.role}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Built in Canada ───────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface-elevated">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Global Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Built in Canada. Designed for the world.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Renda is headquartered in Toronto, built on Canadian values of stability, inclusion, and responsible innovation. But our ambition extends far beyond borders.
            </p>
            <p>
              We're designing every system — from compliance architecture to Alfie's reasoning engine — to scale globally from day one.
            </p>
          </div>
        </Fade>
      </section>

      {/* ── Partners & Backers ────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Partners & Backers</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Backed by those who believe.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We're fortunate to be supported by investors and partners who share our long-term vision for intelligent finance.
          </p>
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Partner 1", "Partner 2", "Partner 3", "Partner 4"].map((p) => (
              <div
                key={p}
                className="h-20 rounded-lg border border-border bg-card flex items-center justify-center"
              >
                <span className="text-sm text-muted-foreground">{p}</span>
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
            We're building for a world where your bank understands you — not the other way around.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
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
