import { Mail } from "lucide-react";
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
  const letter = useFadeIn();
  const boardSec = useFadeIn();
  const contact = useFadeIn();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* CEO Letter */}
      <section className="pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div
          ref={letter.ref}
          className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
            letter.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-3xl bg-card border border-border shadow-sm p-8 md:p-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              From the desk of the CEO
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-10 tracking-tight">
              A note to our investors.
            </h1>

            <div className="space-y-6 text-[17px] leading-[1.85] text-foreground/80">
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
                <p className="font-semibold text-foreground">The Renda Founding Team</p>
                <p className="text-sm text-muted-foreground">Renda Financial Technologies Inc.</p>
              </div>
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
