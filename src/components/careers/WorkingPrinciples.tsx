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
    <section className="py-24 lg:py-32 bg-[#F6F5F2]">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Working at Renda</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-14">
            How we work.
          </h2>
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {principles.map((p, i) => (
            <Fade key={p.title} className={i === principles.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <div className="bg-[#F6F5F2] rounded-2xl p-8 h-full border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <p.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-[15px] text-black/60 font-medium leading-relaxed">{p.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
