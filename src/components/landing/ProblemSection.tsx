import { useFadeIn } from "@/hooks/use-fade-in";
import { AlertCircle, Eye, TrendingDown } from "lucide-react";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";

const problems = [
  {
    icon: AlertCircle,
    title: "No guidance",
    description: "Banks show numbers — never what they mean or what to do next.",
  },
  {
    icon: Eye,
    title: "No context",
    description: "Your finances are interconnected. Your bank treats them as isolated events.",
  },
  {
    icon: TrendingDown,
    title: "No understanding",
    description: "Your life has changed. Your goals have changed. Your bank hasn't noticed.",
  },
];

export default function ProblemSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      {/* Looped lifestyle background with Ken Burns effect */}
      <div className="absolute inset-0">
        <img
          src={lifestyleGathering}
          alt=""
          className="w-full h-full object-cover animate-[ken-burns_25s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-foreground/85" />
      </div>

      {/* Animated motion elements on top */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-accent-peach/10 blur-[120px] animate-[drift-1_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-[100px] animate-[drift-2_25s_ease-in-out_infinite]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[80px] animate-[drift-3_18s_ease-in-out_infinite]" />
        
        {/* Flowing horizontal lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-background/10 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: '-100%',
              width: '200%',
              animation: `flow-line ${12 + i * 3}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-white mb-4">
            The problem
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-background">
            Banking hasn't evolved. You have.
          </h2>
          <p className="mt-4 text-base text-background/60 leading-relaxed">
            Better apps, same logic. Most banks still operate like they did decades ago.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className={`group rounded-2xl border border-background/10 bg-background/5 backdrop-blur-sm p-7 hover:border-accent-peach/30 hover:bg-background/10 hover:-translate-y-2 transition-all duration-500`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-accent-peach/15 flex items-center justify-center mb-5 group-hover:bg-accent-peach/25 group-hover:scale-110 transition-all duration-300">
                <p.icon className="w-5 h-5 text-accent-peach" />
              </div>
              <h3 className="text-base font-semibold text-background mb-2">{p.title}</h3>
              <p className="text-sm text-background/60 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.15) translate(-2%, -1%); }
        }
        @keyframes drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(80px, -40px) scale(1.1); }
          66% { transform: translate(-40px, 60px) scale(0.9); }
        }
        @keyframes drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-60px, 50px) scale(1.15); }
          66% { transform: translate(50px, -30px) scale(0.95); }
        }
        @keyframes drift-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.3); }
        }
        @keyframes flow-line {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(25%); }
        }
      `}</style>
    </section>
  );
}
