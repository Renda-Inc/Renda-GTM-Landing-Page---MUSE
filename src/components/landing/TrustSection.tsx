import { useFadeIn } from "@/hooks/use-fade-in";
import { Shield, Eye, Lock, Users } from "lucide-react";

const commitments = [
  { icon: Shield, title: "User control", text: "You decide what Alfie can see and do." },
  { icon: Lock, title: "Data privacy", text: "Your data is never sold. Period." },
  { icon: Eye, title: "Transparency", text: "AI decisions are explainable." },
  { icon: Users, title: "Human oversight", text: "Critical paths always include human review." },
];

export default function TrustSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Trust
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Responsible AI by design.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {commitments.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <c.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
