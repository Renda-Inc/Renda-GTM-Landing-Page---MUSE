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
    <main
      className="min-h-screen bg-secondary/40"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar variant="solid" />

      {/* CEO Letter */}
      <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 relative overflow-hidden">
        {/* warm ambient backdrop */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div
          ref={letter.ref}
          className={`relative max-w-3xl mx-auto px-6 transition-all duration-700 ${
            letter.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="rounded-3xl bg-background border border-border shadow-[0_20px_60px_-20px_hsl(var(--foreground)/0.18)] p-8 md:p-14 relative">
            {/* paper edge accent */}
            <div className="absolute left-0 top-10 bottom-10 w-1 rounded-r-full bg-primary/70" />
            <div className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">
              From the desk of the CEO
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-10 tracking-tight leading-tight">
              A note to those who believed in us.
            </h1>

            <div className="space-y-6 text-[17px] leading-[1.85] text-black font-medium">
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
                <p className="text-sm text-black/60 font-medium">Renda Financial Technologies Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board + Contact — single continuous dark section flowing into footer */}
      <section className="pt-20 lg:pt-28 pb-20 lg:pb-28 bg-foreground relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{
          backgroundImage: "radial-gradient(hsl(var(--background)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }} />
        <div
          ref={boardSec.ref}
          className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${
            boardSec.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="mb-12 max-w-2xl">
            <div className="text-[15px] font-semibold tracking-[0.08em] text-white mb-4">
              Board of Directors
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background mb-4">
              Stewards of the company.
            </h2>
            <p className="text-base text-background/70 font-medium leading-relaxed">
              Our board brings decades of experience across banking, regulation, technology, and consumer products.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {board.map((m) => (
              <div key={m.name}>
                <p className="text-xl font-medium text-background mb-1">{m.name}</p>
                <p className="text-lg text-background/70">{m.title}</p>
              </div>
            ))}
          </div>

          {/* Get in touch — continuous dark */}
          <div
            ref={contact.ref}
            className={`mt-24 lg:mt-32 pt-16 border-t border-background/15 transition-all duration-700 ${
              contact.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-[15px] font-semibold tracking-[0.08em] text-white mb-4">
                  Get in touch
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-background mb-4">
                  Investor Relations
                </h2>
                <p className="text-base text-background/70 font-medium leading-relaxed">
                  For general enquiries, partnership opportunities, or to request access to confidential investor materials, please reach out to our investor relations team.
                </p>
              </div>

              <div className="rounded-2xl bg-background/[0.06] border border-background/10 p-8">
                <Mail className="w-6 h-6 text-background/80 mb-4" />
                <p className="text-sm text-background/60 mb-2">Email</p>
                <a
                  href="mailto:investors@renda.com"
                  className="text-lg font-semibold text-background hover:text-background/80 transition-colors break-all"
                >
                  investors@renda.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}
