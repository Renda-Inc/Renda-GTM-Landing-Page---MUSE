import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

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
  return <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-border" /></div>;
}

export default function WhyRenda() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-36 pb-24 lg:pt-48 lg:pb-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-6">
            Why Renda
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.1] text-foreground">
            Why Renda Exists
          </h1>
          <p className="mt-8 text-xl md:text-2xl font-semibold text-foreground leading-snug max-w-2xl">
            Banking has become more digital, but it hasn't become more intelligent.
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Most apps still show the same things banks have shown for decades — transactions, balances, and charts — and expect people to figure out the rest.
          </p>
          <p className="mt-6 text-base md:text-lg text-foreground leading-relaxed max-w-2xl">
            We believe your bank should do more than record what happened.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── Section 1: Our Philosophy ────────────────────────── */}
      <section id="philosophy" className="py-24 lg:py-32 scroll-mt-20">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Our Philosophy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Understanding over reporting.
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              For decades, banks have focused on recording financial activity.
            </p>
            <p className="text-foreground font-medium">
              Balances. Transactions. Statements.
            </p>
            <p>
              But simply reporting information does not help people make better financial decisions.
            </p>
            <p>
              We believe modern banking should do something more valuable.
            </p>
          </div>
          <p className="mt-8 text-base md:text-lg text-foreground font-medium leading-relaxed">
            It should interpret financial activity, surface meaning, and help people act with confidence.
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Renda is designed to turn financial information into clear understanding — not just records.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── Section 2: Signal Over Noise ─────────────────────── */}
      <section id="signals" className="py-24 lg:py-32 scroll-mt-20 bg-surface-elevated">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Signal Over Noise
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Signal over noise.
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Most banks flood you with data.
            </p>
            <p className="text-foreground font-medium">
              Transaction lists. Endless notifications. Dashboards full of charts you never asked for.
            </p>
            <p>
              But more information doesn't create clarity.
            </p>
          </div>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p className="text-foreground font-medium">
              We believe your attention is sacred.
            </p>
            <p>
              You shouldn't have to dig through noise to find what matters.
            </p>
          </div>
          <p className="mt-8 text-base md:text-lg text-foreground font-medium leading-relaxed">
            Renda is designed to surface the right insight at the right moment — quietly, clearly, and only when it matters.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* ── Section 3: AI-Native Banking ─────────────────────── */}
      <section id="belief" className="py-24 lg:py-32 scroll-mt-20">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            AI-Native Banking
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Intelligence, not features.
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Most financial apps treat artificial intelligence like a feature.
            </p>
            <p className="text-foreground font-medium">
              A chatbot in the corner.<br />
              A budgeting tool.<br />
              A recommendation engine layered on top.
            </p>
            <p>
              We believe intelligence should be part of the foundation of the bank itself.
            </p>
          </div>
          <p className="mt-8 text-base md:text-lg text-foreground font-medium leading-relaxed">
            Renda is powered by Alfie, an intelligence layer built directly into the platform.
          </p>
          <div className="mt-5 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              This allows the bank to continuously understand patterns, detect unusual activity, and surface meaningful guidance.
            </p>
            <p className="text-foreground font-medium">
              Not because you asked — but because it matters.
            </p>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Section 4: Trust & Responsibility ────────────────── */}
      <section id="trust" className="py-24 lg:py-32 scroll-mt-20 bg-surface-elevated">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
            Trust &amp; Responsibility
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Trust by design.
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              A bank powered by intelligence must also be built on responsibility.
            </p>
            <p className="text-foreground font-medium">
              Financial guidance carries real consequences.<br />
              It requires transparency, restraint, and user control.
            </p>
            <p>
              We believe people should always remain in charge of their financial decisions.
            </p>
          </div>
          <p className="mt-8 text-base md:text-lg text-foreground font-medium leading-relaxed">
            Renda is designed so that insights are explainable, automation is optional, and users maintain full control.
          </p>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
            Technology should support your judgment — never replace it.
          </p>
        </Fade>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Banking built on a different premise.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
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
