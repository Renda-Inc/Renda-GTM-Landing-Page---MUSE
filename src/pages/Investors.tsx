import { Mail, Lock, TrendingUp, Sparkles, LineChart, Coins } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

const board = [
  { name: "Adaeze Okonkwo", title: "Chair of the Board" },
  { name: "Marcus Lévesque", title: "Lead Independent Director" },
  { name: "Priya Raman", title: "Director, Audit Committee Chair" },
  { name: "Jonathan Bellweather", title: "Director, Risk & Compliance Chair" },
  { name: "Sofia Almeida", title: "Director" },
  { name: "Hiroshi Tanaka", title: "Director" },
  { name: "Elena Whitfield", title: "Director" },
  { name: "Daniel Osei", title: "Director" },
  { name: "Margaret Cho", title: "Director" },
];

export default function Investors() {
  const intro = useFadeIn();
  const letter = useFadeIn();
  const boardSec = useFadeIn();
  const contact = useFadeIn();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Intro split */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div
          ref={intro.ref}
          className={`max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
            intro.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Lock className="w-3 h-3 text-primary" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Investors
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Backing the next generation of banking.
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Renda Financial Technologies Inc. is currently undertaking a pre-seed financing through a private placement. Offering materials are available to eligible investors in accordance with applicable securities laws.
            </p>
          </div>

          {/* Right: graphic */}
          <div className="relative aspect-square max-w-md mx-auto w-full">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-secondary/40 to-background border border-border" />
            <div className="absolute inset-6 rounded-[1.5rem] bg-card border border-border shadow-sm flex items-center justify-center overflow-hidden">
              {/* growth path */}
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <linearGradient id="grad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 170 Q 60 160 80 130 T 140 70 T 195 20"
                  stroke="url(#grad)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                {[ [10,170],[60,150],[100,110],[140,70],[180,35] ].map(([x,y],i) => (
                  <circle key={i} cx={x} cy={y} r="3.5" fill="hsl(var(--primary))" />
                ))}
              </svg>
            </div>
            <div className="absolute -top-4 -right-4 rounded-2xl bg-foreground text-background px-4 py-3 shadow-lg flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold tracking-wide">Pre-seed</span>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-background border border-border px-4 py-3 shadow-lg flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-foreground tracking-wide">AI-native bank</span>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Letter — high contrast */}
      <section className="py-16 lg:py-24 bg-foreground">
        <div
          ref={letter.ref}
          className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
            letter.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            From the desk of the CEO
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-background mb-10 tracking-tight">
            A note to our investors.
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85] text-background/85">
            <p>Dear Investor,</p>
            <p>
              Banking hasn't truly evolved in decades. The interfaces changed, the apps got prettier, but the underlying experience, fragmented, reactive, and impersonal, stayed the same. We're building Renda to change that.
            </p>
            <p>
              Renda is an AI-native bank. Not a bank with a chatbot bolted on, but a bank where intelligence sits at the core of every account, every card, every decision. Our goal is simple: give every Canadian a financial partner that actually understands them.
            </p>
            <p>
              We're at an inflection point. The infrastructure exists. The models are ready. The next generation of customers expects more. What's missing is a team willing to rebuild banking from first principles, with care, with clarity, and with responsibility. That's what we're doing.
            </p>
            <p>
              If you're reading this, you're someone we want in the room. Thank you for considering joining us on this journey.
            </p>
            <p className="pt-4">With gratitude,</p>
            <div>
              <p className="font-semibold text-background">The Renda Founding Team</p>
              <p className="text-sm text-background/60">Renda Financial Technologies Inc.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-16 lg:py-24">
        <div
          ref={boardSec.ref}
          className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
            boardSec.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-12 max-w-2xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              Board of Directors
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Stewards of the company.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our board brings decades of experience across banking, regulation, technology, and consumer products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {board.map((m) => (
              <div
                key={m.name}
                className="bg-background p-8 hover:bg-secondary/40 transition-colors"
              >
                <p className="text-lg font-semibold text-foreground mb-1">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-secondary/40 border-t border-border">
        <div
          ref={contact.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            contact.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-3">
                Get in touch
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
                Investor Relations
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                For general enquiries, partnership opportunities, or to request access to confidential investor materials, please reach out to our investor relations team.
              </p>
            </div>

            <div className="rounded-2xl bg-background border border-border p-8">
              <Mail className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-muted-foreground mb-2">Email</p>
              <a
                href="mailto:investors@renda.com"
                className="text-lg font-semibold text-foreground hover:text-primary transition-colors break-all"
              >
                investors@renda.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
