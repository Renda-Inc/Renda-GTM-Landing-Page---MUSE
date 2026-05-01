import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight, Eye, Brain, Search, Shield, Sparkles, Lock, Compass, Heart } from "lucide-react";
import whyHero from "@/assets/why-renda-hero.jpg";
import whyPhilosophy from "@/assets/why-renda-philosophy.jpg";
import whySignal from "@/assets/why-renda-signal.jpg";
import whyTrust from "@/assets/why-renda-trust.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";

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

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="h-px bg-border" />
    </div>
  );
}

/* ── Pillar data ──────────────────────────────────────────── */
const philosophyPillars = [
  { icon: Eye, title: "Interpret, don't report", desc: "We translate financial activity into meaning, not raw lists." },
  { icon: Compass, title: "Surface what matters", desc: "We pull signal out of patterns so you can act with confidence." },
  { icon: Heart, title: "Respect your attention", desc: "Quiet by design. Intelligence speaks only when it counts." },
];

const trustPillars = [
  { icon: Shield, title: "Explainable insights", desc: "Every recommendation comes with the reasoning behind it." },
  { icon: Lock, title: "User control", desc: "Automation is opt-in. You stay in charge of every action." },
  { icon: Sparkles, title: "Human judgment first", desc: "Technology supports your decisions; it never replaces them." },
];

/* ── Page ──────────────────────────────────────────────────── */
export default function WhyRenda() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero — full-bleed, matches Home/About/Blog ─────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={whyHero}
            alt="Young person looking thoughtfully at their phone in a sunlit kitchen"
            className="w-full h-full object-cover object-center"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 w-full">
          <Fade>
            {/* Glass badge with pulsing dot */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent-peach animate-pulse" />
              <span className="text-sm font-medium text-white/90">Why Renda</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-white max-w-4xl">
              Banking has become digital.
              <br />
              It hasn't become intelligent.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Most apps still show what banks have always shown; transactions, balances, charts. Renda is built on a different premise: your bank should help you understand your money, not just record it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#philosophy"
                className="group inline-flex items-center gap-2 h-13 px-7 rounded-full bg-white text-foreground text-base font-semibold hover:bg-white/90 hover:-translate-y-0.5 transition-all duration-300 shadow-xl"
              >
                Read our thinking
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="/about"
                className="inline-flex items-center gap-2 h-13 px-7 rounded-full border border-white/30 text-white text-base font-medium hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                About Renda
              </a>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Opening conviction (full width statement) ──────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Our Conviction
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Your bank should do more than
            <br />
            <span className="text-primary">record what happened.</span>
          </h2>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            For decades, financial software has been a ledger with a nicer interface. We believe the next generation of banking is built on understanding, not reporting.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── Philosophy: Understanding over reporting ───────── */}
      <section id="philosophy" className="py-24 lg:py-32 scroll-mt-24">
        <Fade className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Understanding over reporting.
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Banks have spent decades perfecting how to record activity; balances, statements, transaction lists. But recording isn't the same as understanding.
                </p>
                <p className="text-foreground font-medium">
                  Renda is designed to turn financial information into clear understanding, not just records.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={whyPhilosophy}
                alt="Two friends having a calm conversation over coffee"
                className="w-full h-[420px] lg:h-[480px] object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </div>

          {/* Pillar cards */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {philosophyPillars.map((p, i) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── Signal over noise — full-bleed image section ───── */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={whySignal} alt="" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
        </div>

        <Fade className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">Signal Over Noise</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Your attention is sacred.
            <br />
            <span className="text-primary">We treat it that way.</span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Most banks flood you with data; transaction lists, endless notifications, dashboards full of charts you never asked for. More information doesn't create clarity.
          </p>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Purposeful", text: "Every insight has a reason behind it. No filler. No vanity metrics." },
              { title: "Timely", text: "Context-aware delivery, so guidance reaches you when it's actionable." },
              { title: "Quiet", text: "Designed for peace of mind. Intelligence that works in the background." },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/85 backdrop-blur-sm p-7 text-left hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all duration-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── AI-Native: Intelligence not features (alt layout) ─ */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl order-first lg:order-first">
              <img
                src={aboutAlfie}
                alt="Alfie, the financial reasoning engine"
                className="w-full h-[420px] lg:h-[480px] object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">AI-Native Banking</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Intelligence, not features.
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Most financial apps treat AI like a feature; a chatbot in the corner, a budgeting tool, a recommendation engine bolted on top. We see it differently.
                </p>
                <p>
                  Alfie is an intelligence layer built directly into the platform. It continuously understands patterns, detects unusual activity, and surfaces meaningful guidance, not because you asked, but because it matters.
                </p>
                <p className="text-foreground font-medium">
                  Renda is powered by Alfie; intelligence woven into every layer of the bank.
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* ── Trust by design — Revolut-style pillar grid ────── */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <Fade className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">Trust & Responsibility</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Trust by design.
              </h2>
              <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  A bank powered by intelligence must also be built on responsibility. Financial guidance carries real consequences. It demands transparency, restraint, and user control.
                </p>
                <p className="text-foreground font-medium">
                  People should always remain in charge of their financial decisions.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src={whyTrust}
                alt="A couple reviewing finances together at home"
                className="w-full h-[420px] lg:h-[480px] object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          </div>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trustPillars.map((p, i) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-background p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── Closing CTA ───────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Banking built on a different premise.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Not more data. Not more notifications. Just the clarity you need to move forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="group inline-flex items-center gap-2 h-13 px-8 rounded-full bg-foreground text-background text-base font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Get Early Access
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 h-13 px-8 rounded-full border border-border text-foreground text-base font-medium hover:bg-secondary transition-all duration-300"
            >
              Meet the team
            </a>
          </div>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
