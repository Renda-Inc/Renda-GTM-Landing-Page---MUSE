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

function SectionBlock({
  id,
  label,
  headline,
  description,
  bullets,
  closing,
  elevated = false,
}: {
  id: string;
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  closing?: string;
  elevated?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-24 lg:py-32 scroll-mt-20 ${elevated ? "bg-surface-elevated" : ""}`}
    >
      <Fade className="max-w-3xl mx-auto px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          {label}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
          {headline}
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
        <ul className="mt-8 space-y-4">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="text-base md:text-lg text-foreground leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
        {closing && (
          <p className="mt-8 text-base md:text-lg text-foreground font-medium leading-relaxed">
            {closing}
          </p>
        )}
      </Fade>
    </section>
  );
}

export default function WhyRenda() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
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
          <p className="mt-6 text-base md:text-lg text-foreground font-medium leading-relaxed max-w-2xl">
            We believe your bank should do more than record what happened.
          </p>
        </Fade>
      </section>

      <Divider />

      <SectionBlock
        id="philosophy"
        label="Our Philosophy"
        headline="Understanding over reporting."
        description="For decades, banks have focused on recording financial activity — balances, transactions, statements. But simply reporting information does not help people make better financial decisions."
        bullets={[
          "Interpret financial activity, not just display it.",
          "Surface meaning from patterns, not raw data.",
          "Help people act with confidence, not confusion.",
        ]}
        closing="Renda is designed to turn financial information into clear understanding — not just records."
      />

      <Divider />

      <SectionBlock
        id="signals"
        label="Signal Over Noise"
        headline="Signal over noise."
        description="Most banks flood you with data — transaction lists, endless notifications, dashboards full of charts you never asked for. But more information doesn't create clarity."
        bullets={[
          "Your attention is sacred — don't waste it on noise.",
          "Surface the right insight at the right moment.",
          "Quiet by design — intelligence that speaks only when it matters.",
        ]}
        closing="Renda is designed to surface what's relevant — quietly, clearly, and only when it matters."
        elevated
      />

      <Divider />

      <SectionBlock
        id="belief"
        label="AI-Native Banking"
        headline="Intelligence, not features."
        description="Most financial apps treat artificial intelligence like a feature — a chatbot in the corner, a budgeting tool, a recommendation engine layered on top. We believe intelligence should be part of the foundation."
        bullets={[
          "Alfie is an intelligence layer built directly into the platform.",
          "Continuously understands patterns and detects unusual activity.",
          "Surfaces meaningful guidance — not because you asked, but because it matters.",
        ]}
        closing="Renda is powered by Alfie — intelligence woven into every layer of the bank."
      />

      <Divider />

      <SectionBlock
        id="trust"
        label="Trust & Responsibility"
        headline="Trust by design."
        description="A bank powered by intelligence must also be built on responsibility. Financial guidance carries real consequences — it requires transparency, restraint, and user control."
        bullets={[
          "Insights are always explainable and transparent.",
          "Automation is optional — you stay in control.",
          "Technology supports your judgment, never replaces it.",
        ]}
        closing="People should always remain in charge of their financial decisions."
        elevated
      />

      {/* Closing CTA */}
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
