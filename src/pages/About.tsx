import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight } from "lucide-react";
import { beliefs, values, vcPartners } from "@/components/about/content";
import Timeline from "@/components/about/Timeline";
import ValuesAccordion from "@/components/about/ValuesAccordion";
import aboutOverhead from "@/assets/about-overhead.jpg";
import aboutAlfie from "@/assets/about-alfie.jpg";
import aboutCanada from "@/assets/about-canada.jpg";
import aboutBelief from "@/assets/about-belief.jpg";
import aboutValues from "@/assets/about-values.jpg";
import aboutBoardMeeting from "@/assets/about-board-meeting.jpg";

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
            <div className="rounded-3xl overflow-hidden">
              <img src={aboutBelief} alt="Team discussing financial inclusion" className="w-full h-[264px] lg:h-[396px] object-cover" loading="lazy" width={1280} height={720} />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">Our Belief</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Finance should empower, not overwhelm.
              </h2>
              <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
                We believe the financial system fails most people, not because of lack of tools, but because of lack of understanding. Renda exists to close that gap.
              </p>
            </div>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-center">
            {beliefs.map((b, i) => {
              const image = values[i].image;
              const taller = i === 1 || i === 2;
              return (
                <div
                  key={b.title}
                  className={`group relative rounded-3xl overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_50px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-500 ${
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
              <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">What We're Building</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Alfie: a financial reasoning system.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-black font-medium leading-relaxed">
                <p>
                  Alfie isn't a chatbot layered onto banking. It's the intelligence engine at the core of Renda, continuously understanding context, recognizing patterns, and surfacing the insights that matter most.
                </p>
              </div>
              <div className="mt-8 inline-block rounded-full bg-[#F6F5F2] px-6 py-3">
                <p className="text-base md:text-lg text-black/80 font-semibold">
                  We didn't bolt AI onto banking. We built banking on top of intelligence.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
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
            <div className="rounded-3xl overflow-hidden">
              <img src={aboutValues} alt="Team working in modern office" className="w-full h-[264px] lg:h-[396px] object-cover" loading="lazy" width={1280} height={720} />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">The Company We Aim to Be</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Built to endure.
              </h2>
              <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed">
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

      {/* ── Leadership (black section, image left / text right) ── */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#111111" }}>
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={aboutBoardMeeting}
                alt="Renda leadership meeting around a boardroom table"
                className="w-full h-[312px] lg:h-[468px] object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div>
              <p className="text-[15px] font-semibold tracking-[0.08em] text-white mb-4">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-6">
                The people behind Renda.
              </h2>
              <p className="text-base md:text-lg text-white/80 font-medium leading-relaxed max-w-xl">
                Meet the people leading the efforts for a new kind of financial experience — bringing together financial infrastructure, intelligent technology, and the products that will shape the future of finance.
              </p>
              <a
                href="/leadership"
                className="mt-8 inline-flex h-12 px-8 items-center gap-2 rounded-full bg-white text-[#111111] text-base font-semibold hover:bg-white/90 transition-colors"
              >
                Meet the team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Fade>
      </section>




      {/* ── Built in Canada / Global Vision (text LEFT, image RIGHT) ── */}
      <section className="py-16 lg:py-20 bg-secondary/40">
        <Fade className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">Global Vision</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
                Built in Canada. Designed for the world.
              </h2>
              <div className="mt-10 space-y-6 text-base md:text-lg text-black font-medium leading-relaxed">
                <p>
                  Renda is headquartered in Toronto, built on Canadian values of stability, inclusion, and responsible innovation. But our ambition extends far beyond borders.
                </p>
                <p>
                  We're designing every system, from compliance architecture to Alfie's reasoning engine, to scale globally from day one.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src={aboutCanada} alt="Toronto skyline" className="w-full h-[480px] lg:h-[720px] object-cover" loading="lazy" />
            </div>
          </div>
        </Fade>
      </section>



      {/* ── Partners & Backers ────────────────────────────── */}
      <section className="py-16 lg:py-20">
        <Fade className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-8">Partners & Backers</p>
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
          <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed max-w-xl mx-auto">
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

