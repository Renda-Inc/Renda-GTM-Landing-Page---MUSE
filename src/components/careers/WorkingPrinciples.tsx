import { useFadeIn } from "@/hooks/use-fade-in";
import { Zap, PenLine, Hammer, MessageCircle, TrendingUp } from "lucide-react";
import workspaceImg from "@/assets/careers/team-1.jpg";

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
];

const wide = { icon: TrendingUp, title: "Long-term focus", desc: "We optimize for years, not quarters. Every decision is weighed against what we're building for the long run." };

export default function WorkingPrinciples() {
  return (
    <section className="py-16 lg:py-20 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6">
        <Fade>
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-4">Working at Renda</p>
          <p className="text-base md:text-lg text-black font-medium leading-relaxed max-w-2xl mb-12">
            We're building the future of banking with a team that cares deeply and moves with purpose.
          </p>
        </Fade>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: editorial image with overlay */}
          <Fade>
            <div className="relative rounded-xl overflow-hidden h-[480px] lg:h-[720px]">
              <img
                src={workspaceImg}
                alt="Team collaborating in a bright workspace"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-transparent" />
              <div className="relative h-full flex flex-col justify-start p-8 lg:p-12">
                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight">
                  Great people.<br />
                  Clear thinking.<br />
                  Real impact.
                </h3>
                <p className="mt-6 text-white/85 text-base md:text-lg font-medium leading-relaxed max-w-md">
                  Our values shape how we work, make decisions, and build for the long run.
                </p>
                <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
              </div>
            </div>
          </Fade>

          {/* Right: bento cards */}
          <div className="grid grid-cols-2 gap-5 auto-rows-fr">
            {principles.map((p) => (
              <Fade key={p.title}>
                <div className="bg-white rounded-2xl p-7 h-full border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-[15px] text-black font-medium leading-relaxed">{p.desc}</p>
                </div>
              </Fade>
            ))}
            <Fade className="col-span-2">
              <div className="bg-white rounded-2xl p-7 h-full border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                  <wide.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{wide.title}</h3>
                <p className="text-[15px] text-black font-medium leading-relaxed max-w-2xl">{wide.desc}</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
