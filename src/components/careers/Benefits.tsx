import { useFadeIn } from "@/hooks/use-fade-in";
import { Heart, Laptop, GraduationCap, Home, Baby, Plane, Brain, DollarSign } from "lucide-react";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const benefits = [
  { icon: DollarSign, label: "Competitive equity and salary" },
  { icon: Heart, label: "Comprehensive health, dental & vision" },
  { icon: Laptop, label: "Flexible remote-first work" },
  { icon: GraduationCap, label: "Learning & development budget" },
  { icon: Home, label: "Home office stipend" },
  { icon: Baby, label: "Generous parental leave" },
  { icon: Plane, label: "Annual team retreats" },
  { icon: Brain, label: "Mental health support" },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            Built for people who do their best work.
          </h2>
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <Fade key={b.label}>
              <div className="bg-background rounded-2xl p-6 border border-border text-center hover:shadow-md transition-shadow h-full flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">{b.label}</span>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
