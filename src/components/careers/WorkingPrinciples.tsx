import { useFadeIn } from "@/hooks/use-fade-in";
import { Zap, PenLine, Hammer, MessageCircle, TrendingUp } from "lucide-react";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const principles = [
  { icon: Zap, title: "High autonomy", desc: "We hire people we trust, then give them the space to do their best work. No micromanagement, no busywork." },
  { icon: PenLine, title: "Written thinking", desc: "We write before we meet. Clear writing forces clear thinking, and it scales better than meetings." },
  { icon: Hammer, title: "Bias toward building", desc: "Ideas are cheap. We value people who prototype, ship, and iterate over those who only theorize." },
  { icon: MessageCircle, title: "Direct communication", desc: "We say what we mean, respectfully and without ambiguity. Clarity is a form of care." },
  { icon: TrendingUp, title: "Long-term focus", desc: "We optimize for years, not quarters. Every decision is weighed against what we're building for the long run." },
];

export default function WorkingPrinciples() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Working at Renda</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            How we work.
          </h2>
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <Fade key={p.title} className={i === principles.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="bg-background rounded-2xl p-6 h-full border border-border hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
