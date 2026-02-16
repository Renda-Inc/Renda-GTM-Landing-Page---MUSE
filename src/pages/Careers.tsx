import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

/* ── Fade wrapper ─────────────────────────────────────────── */
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

/* ── Data ─────────────────────────────────────────────────── */
const workingPrinciples = [
  { title: "High autonomy", desc: "We hire people we trust, then give them the space to do their best work. No micromanagement, no busywork." },
  { title: "Written thinking", desc: "We write before we meet. Clear writing forces clear thinking — and it scales better than meetings." },
  { title: "Bias toward building", desc: "Ideas are cheap. We value people who prototype, ship, and iterate over those who only theorize." },
  { title: "Direct communication", desc: "We say what we mean, respectfully and without ambiguity. Clarity is a form of care." },
  { title: "Long-term focus", desc: "We optimize for years, not quarters. Every decision is weighed against what we're building for the long run." },
];

const cultureValues = [
  { title: "Intelligence Over Activity", desc: "We measure impact, not hours. Thoughtful work beats busy work. The best solutions come from deep focus, not constant motion." },
  { title: "Responsibility at Scale", desc: "We build systems that touch people's financial lives. That demands rigor, humility, and an unwavering commitment to getting things right." },
  { title: "Long-Term > Short-Term", desc: "We make decisions that compound. Short-term hacks create long-term debt — in code, in culture, and in trust." },
  { title: "Ownership Without Ego", desc: "Take full responsibility for your work. Accept feedback gracefully. The best idea wins, regardless of who proposed it." },
  { title: "Clarity is Kindness", desc: "Ambiguity creates anxiety. We communicate with precision and honesty because people deserve to know where they stand." },
  { title: "Inclusion Improves Intelligence", desc: "Diverse perspectives make better products. We actively build a team that reflects the global population we serve." },
];

const benefits = [
  "Competitive equity and salary",
  "Comprehensive health, dental & vision",
  "Flexible remote-first work",
  "Learning & development budget",
  "Home office stipend",
  "Generous parental leave",
  "Annual team retreats",
  "Mental health support",
];

const openRoles = [
  { team: "Engineering", roles: ["Senior Backend Engineer", "Senior Frontend Engineer", "ML / AI Engineer", "Platform Engineer"] },
  { team: "Product & Design", roles: ["Senior Product Designer", "Product Manager — Alfie"] },
  { team: "Risk & Compliance", roles: ["Compliance Analyst", "Risk Operations Lead"] },
  { team: "Operations", roles: ["Head of Customer Experience", "Financial Operations Analyst"] },
];

/* ── Page ─────────────────────────────────────────────────── */
export default function Careers() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-6">Careers</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            Build the Intelligence Layer for Finance.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join a small, ambitious team shaping the future of AI-native banking. We're building something foundational — and we need exceptional people to do it.
          </p>
          <a
            href="#roles"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Open Roles
          </a>
        </Fade>
      </section>

      <Divider />

      {/* ── Why Join Renda ─────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Why Join Renda</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            The rare chance to build from zero.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Most fintech jobs are about optimizing what already exists. At Renda, you'll build AI-native financial infrastructure from scratch — the kind of systems that define how the next generation interacts with money.
            </p>
            <p>
              This isn't incremental improvement. It's foundational work. You'll have real ownership over hard problems, direct access to leadership, and the autonomy to make consequential decisions every day.
            </p>
            <p className="text-foreground font-medium">
              We're not looking for people who want a job. We're looking for people who want to build an institution.
            </p>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Working at Renda ───────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Working at Renda</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            How we work.
          </h2>
          <div className="space-y-8">
            {workingPrinciples.map((p) => (
              <div key={p.title} className="border-l-2 border-accent-foreground/30 pl-6">
                <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">{p.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Culture & Values ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface-elevated">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Culture & Values</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            What we believe.
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
            {cultureValues.map((v) => (
              <div key={v.title}>
                <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* ── Diversity & Inclusion ─────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Diversity & Inclusion</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Better perspectives build better products.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              We're building financial infrastructure for a global population. That requires a team that reflects the diversity of the people we serve — in background, experience, identity, and thought.
            </p>
            <p>
              Inclusion isn't a program at Renda. It's a design principle. We actively seek out perspectives that challenge our assumptions and make our products more intelligent.
            </p>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Benefits ──────────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            Built for people who do their best work.
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start gap-3 py-3">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-foreground shrink-0" />
                <span className="text-base text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Early Talent ──────────────────────────────────── */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Early Talent</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Start building early.
          </h2>
          <div className="mt-10 space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              We welcome interns, co-ops, and early-career builders who want to do meaningful work from day one. At Renda, junior doesn't mean sidelined — it means mentored, challenged, and trusted.
            </p>
            <p>
              If you're a student or recent graduate with a passion for finance, AI, or product design, we'd love to hear from you.
            </p>
          </div>
        </Fade>
      </section>

      <Divider />

      {/* ── Team & Workplace ──────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-surface-elevated">
        <Fade className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Team & Workplace</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            The people you'll work with.
          </h2>

          {/* Photo grid placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl bg-card border border-border flex items-center justify-center"
              >
                <span className="text-sm text-muted-foreground">Team photo {i}</span>
              </div>
            ))}
          </div>

          {/* Quotes */}
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="border-l-2 border-accent-foreground/30 pl-6">
              <p className="text-base text-foreground leading-relaxed italic">
                "I've never worked somewhere that trusts its people this much. The bar is high, but the support is real."
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Engineering team member
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-accent-foreground/30 pl-6">
              <p className="text-base text-foreground leading-relaxed italic">
                "At Renda, your ideas actually ship. There's no red tape between thinking and building."
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Product team member
              </footer>
            </blockquote>
          </div>
        </Fade>
      </section>

      {/* ── Open Roles ────────────────────────────────────── */}
      <section id="roles" className="py-24 lg:py-32">
        <Fade className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Open Roles</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            Current openings.
          </h2>
          <div className="space-y-10">
            {openRoles.map((group) => (
              <div key={group.team}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-foreground mb-4">{group.team}</h3>
                <div className="space-y-0 border-t border-border">
                  {group.roles.map((role) => (
                    <a
                      key={role}
                      href="#"
                      className="flex items-center justify-between py-4 border-b border-border group hover:bg-muted/10 px-2 -mx-2 rounded transition-colors"
                    >
                      <span className="text-base font-medium text-foreground">{role}</span>
                      <span className="text-sm text-muted-foreground group-hover:text-accent-foreground transition-colors">
                        View →
                      </span>
                    </a>
                  ))}
                </div>
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
            Ready to build something foundational?
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We're assembling a team of exceptional builders, thinkers, and operators. If that's you, we'd love to talk.
          </p>
          <a
            href="#"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Open Positions
          </a>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
