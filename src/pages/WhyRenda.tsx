import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Eye, Search, Brain, ShieldCheck, Sparkles } from "lucide-react";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";
import aboutBelief from "@/assets/about-belief.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";
import aboutValues from "@/assets/about-values.jpg";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";

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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight"
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
  { icon: Eye, title: "Interpret, don't just display.", desc: "Read meaning from financial activity, not just list it." },
  { icon: Sparkles, title: "Surface meaning from patterns.", desc: "Find what matters in the data you already have." },
  { icon: Brain, title: "Act with confidence.", desc: "Move forward with clarity, not confusion." },
];

const signalCards = [
  { title: "Your attention is sacred.", desc: "We don't waste it on noise or vanity metrics." },
  { title: "Right insight, right moment.", desc: "Context-aware guidance that arrives when it counts." },
  { title: "Quiet by design.", desc: "Intelligence that speaks only when it matters." },
];

export default function WhyRenda() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_FONT }}>
      <Navbar />

      {/* ── Why Renda Exists (split: text left, image right) ── */}
      <section id="exists" className="scroll-mt-20 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Why Renda</Eyebrow>
              <H2>Why Renda Exists</H2>

              <p className="mt-6 text-lg md:text-xl text-black/60 font-medium leading-relaxed">
                Banking has become more digital, but it hasn't become more intelligent.
              </p>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Most apps still show the same things banks have shown for decades, transactions, balances, and charts, and expect people to figure out the rest.
              </p>
              <p className="mt-6 text-lg md:text-xl text-black/80 font-semibold leading-snug">
                We believe your bank should do more than record what happened.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={heroLifestyle}
                alt="A quiet moment of clarity"
                className="w-full h-[480px] lg:h-[720px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Fade>
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

          <div className="mt-14 grid sm:grid-cols-3 gap-5">
            {philosophyCards.map((c) => (
              <div key={c.title} className="bg-[#F6F5F2] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <c.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-black/80 mb-2">{c.title}</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Signal over Noise ──────────────────────────────── */}
      <section id="signals" className="scroll-mt-20 py-16 lg:py-20 bg-secondary/40">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-2xl overflow-hidden order-2 lg:order-1">
              <img src={lifestyleCafe} alt="Quiet focus" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
            <div className="order-1 lg:order-2">
              <Eyebrow>Signal Over Noise</Eyebrow>
              <H2>Signal over noise.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Most financial institutions flood you with data, transaction lists, endless notifications, dashboards full of charts you never asked for. But more information doesn't create clarity.
              </p>
              <p className="mt-6 text-base md:text-lg text-black/80 font-semibold leading-relaxed">
                Renda is designed to surface what's relevant; quietly, clearly, and only when it matters.
              </p>
            </div>
          </div>

          <div className="mt-14 grid sm:grid-cols-3 gap-5">
            {signalCards.map((c) => (
              <div key={c.title} className="bg-background rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <Search className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-black/80 mb-2">{c.title}</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── AI-Native Banking ──────────────────────────────── */}
      <section id="belief" className="scroll-mt-20 py-16 lg:py-20">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <Eyebrow>Intelligence at the Core</Eyebrow>
              <H2>Intelligence, not features.</H2>
              <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                Most financial apps treat artificial intelligence like a feature, a chatbot in the corner, a budgeting tool, a recommendation engine layered on top. We believe intelligence should be part of the foundation.
              </p>
              <ul className="mt-8 space-y-3">
                <Bullet>Alfie is an intelligence layer built directly into the platform.</Bullet>
                <Bullet>Continuously understands patterns and detects unusual activity.</Bullet>
                <Bullet>Surfaces meaningful guidance, not because you asked, but because it matters.</Bullet>
              </ul>
              <p className="mt-8 text-base md:text-lg text-black/80 font-semibold leading-relaxed">
                Renda is powered by Alfie; intelligence woven into every layer of the bank.
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
