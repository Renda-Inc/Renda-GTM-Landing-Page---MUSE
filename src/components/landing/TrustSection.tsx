import { useFadeIn } from "@/hooks/use-fade-in";
import { Shield, Eye, Lock, Users } from "lucide-react";

const commitments = [
  { icon: Shield, text: "You always control what Alfie can see and do." },
  { icon: Lock, text: "Your data is never sold. Period." },
  { icon: Eye, text: "AI decisions are transparent and explainable." },
  { icon: Users, text: "Human oversight is built into every critical path." },
];

export default function TrustSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-6">
              Trust & responsibility
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
              AI and money demand seriousness.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We don't take lightly the responsibility of combining artificial intelligence
              with your financial life. Every system we build is designed with control,
              transparency, and accountability at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commitments.map((c) => (
              <div
                key={c.text}
                className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
