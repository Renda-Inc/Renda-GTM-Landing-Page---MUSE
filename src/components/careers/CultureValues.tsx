import { useFadeIn } from "@/hooks/use-fade-in";
import team5 from "@/assets/careers/team-5.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const values = [
  { title: "Intelligence Over Activity", desc: "We measure impact, not hours. Thoughtful work beats busy work." },
  { title: "Responsibility at Scale", desc: "We build systems that touch people's financial lives. That demands rigor and humility." },
  { title: "Long-Term > Short-Term", desc: "Short-term hacks create long-term debt — in code, in culture, and in trust." },
  { title: "Ownership Without Ego", desc: "Take full responsibility for your work. The best idea wins, regardless of who proposed it." },
  { title: "Clarity is Kindness", desc: "We communicate with precision and honesty because people deserve to know where they stand." },
  { title: "Inclusion Improves Intelligence", desc: "Diverse perspectives make better products. We actively build a team that reflects the global population we serve." },
];

export default function CultureValues() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Fade>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Culture & Values</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-10">
              What we believe.
            </h2>
            <div className="space-y-6">
              {values.map((v) => (
                <div key={v.title} className="border-l-2 border-primary/30 pl-5">
                  <h3 className="text-base font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </Fade>
          <Fade className="sticky top-32">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={team5} alt="Team celebration" className="w-full object-cover aspect-square" loading="lazy" width={640} height={640} />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <blockquote className="bg-secondary rounded-xl p-5">
                <p className="text-sm text-foreground leading-relaxed italic">
                  "I've never worked somewhere that trusts its people this much."
                </p>
                <footer className="mt-3 text-xs text-muted-foreground">— Engineering team</footer>
              </blockquote>
              <blockquote className="bg-secondary rounded-xl p-5">
                <p className="text-sm text-foreground leading-relaxed italic">
                  "Your ideas actually ship. No red tape between thinking and building."
                </p>
                <footer className="mt-3 text-xs text-muted-foreground">— Product team</footer>
              </blockquote>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
