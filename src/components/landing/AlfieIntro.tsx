import { useFadeIn } from "@/hooks/use-fade-in";
import { Brain, BarChart3, Shield, MessageSquare } from "lucide-react";

export default function AlfieIntro() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="alfie" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Meet Alfie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Your financial
              <br />intelligence layer.
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Not a chatbot — a reasoning engine. Alfie is built into the core of Renda to connect your financial activity and surface what matters.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { icon: Brain, label: "Pattern recognition" },
                { icon: BarChart3, label: "Proactive insights" },
                { icon: Shield, label: "Risk detection" },
                { icon: MessageSquare, label: "Natural language" },
              ].map((f) => (
                <div
                  key={f.label}
                  className="group flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 hover:border-primary/20 hover:shadow-sm transition-all duration-200"
                >
                  <f.icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alfie UI mockup */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Main Alfie interface card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Alfie</p>
                    <p className="text-[11px] text-muted-foreground">Financial Intelligence</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-secondary/50 p-4">
                    <p className="text-sm text-foreground leading-relaxed">
                      Your dining spending is up 23% this month. Based on your savings goal, consider setting a weekly budget of $85.
                    </p>
                  </div>
                  <div className="rounded-xl bg-primary/5 border border-primary/10 p-4">
                    <p className="text-[11px] font-semibold text-primary mb-1">Recommendation</p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      Move $200 to your emergency fund — you're 3 months from your target.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all">
                      Apply
                    </button>
                    <button className="flex-1 h-9 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-secondary transition-all">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,hsl(var(--primary)/0.06),transparent_60%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
