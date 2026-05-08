import { Mail, Lock, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function Investors() {
  const letter = useFadeIn();
  const contact = useFadeIn();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 lg:pt-48 lg:pb-20 bg-gradient-to-b from-secondary/40 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Lock className="w-3 h-3 text-primary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              Our Investors
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Building the AI-native bank, together.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A note from our founder, and how to get in touch with our investor relations team.
          </p>
        </div>
      </section>

      {/* CEO Letter */}
      <section className="py-16 lg:py-24">
        <div
          ref={letter.ref}
          className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
            letter.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative rounded-3xl bg-card border border-border shadow-sm p-10 md:p-16">
            <div className="absolute top-6 right-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              From the desk of the CEO
            </div>

            <div className="space-y-6 text-[17px] leading-[1.85] text-foreground/85 font-serif">
              <p className="text-base font-sans text-muted-foreground">Dear Investor,</p>

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

              <p className="pt-4">
                With gratitude,
              </p>
              <div>
                <p className="font-sans font-semibold text-foreground">The Renda Founding Team</p>
                <p className="font-sans text-sm text-muted-foreground">Renda Financial Technologies Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div
          ref={contact.ref}
          className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
            contact.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
              Investor Relations
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Renda Financial Technologies Inc. is currently undertaking a pre-seed financing through a private placement. Offering materials are available to eligible investors in accordance with applicable securities laws.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl bg-background border border-border p-8">
              <Mail className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Investor Relations</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                For general enquiries, partnership opportunities, or to request a meeting with our team.
              </p>
              <a
                href="mailto:investors@renda.com"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                investors@renda.com
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="rounded-2xl bg-foreground text-background p-8">
              <Lock className="w-6 h-6 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Investor Portal</h3>
              <p className="text-sm text-background/70 mb-5 leading-relaxed">
                Eligible investors can request access to confidential offering materials and data room.
              </p>
              <a
                href="#"
                className="group inline-flex items-center gap-2 h-11 px-6 rounded-full bg-background text-foreground text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Request Access
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
