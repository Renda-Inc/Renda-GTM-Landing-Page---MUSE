import { useFadeIn } from "@/hooks/use-fade-in";
import { Shield, Eye, Lock, Users } from "lucide-react";

const commitments = [
  { icon: Shield, title: "User control", text: "You decide what Alfie can see and do." },
  { icon: Lock, title: "Data privacy", text: "Your data is never sold. Period." },
  { icon: Eye, title: "Transparency", text: "Every AI decision is explainable." },
  { icon: Users, title: "Human oversight", text: "Critical paths include human review." },
];

export default function TrustSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              Trust
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              Responsible AI
              <br />by design.
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              AI and money require seriousness. Every system is built with transparency, control, and accountability.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {commitments.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-border bg-card p-5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary/25 group-hover:to-primary/10 transition-colors">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
