import { useFadeIn } from "@/hooks/use-fade-in";
import { Zap, Brain, TrendingUp } from "lucide-react";
import lifestyleDreamJob from "@/assets/lifestyle-dream-job.jpg";
import lifestyleAdventureHike from "@/assets/lifestyle-adventure-hike.jpg";

export default function CoreBelief() {
  const { ref, isVisible } = useFadeIn();

  const items = [
    {
      icon: Brain,
      title: "Understands context",
      text: "Alfie connects your spending, saving, and goals into a coherent financial picture.",
    },
    {
      icon: Zap,
      title: "Acts proactively",
      text: "Insights surface before you ask — at the right time, with the right context.",
    },
    {
      icon: TrendingUp,
      title: "Learns continuously",
      text: "The longer you use Renda, the more personalized and accurate Alfie becomes.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden bg-background">
      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            What is Renda
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            AI-native banking, powered by Alfie.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            A bank that doesn't just store your money — it understands it.
          </p>
        </div>

        {/* Image mosaic + cards */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left image - dream job */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl h-[350px] lg:h-auto group">
            <img src={lifestyleDreamJob} alt="Person working at a job they love" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>

          {/* Center cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={`group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1.5">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Right image - adventure hike */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-xl h-[350px] lg:h-auto group">
            <img src={lifestyleAdventureHike} alt="Person hiking on a mountain adventure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
