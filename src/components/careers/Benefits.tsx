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
  { icon: DollarSign, label: "Competitive Equity & Salary", desc: "Market-rate compensation with meaningful equity so you share in what we build." },
  { icon: Heart, label: "Health, Dental & Vision", desc: "Comprehensive coverage for you and your family from day one." },
  { icon: Laptop, label: "Flexible Remote Work", desc: "Work from anywhere with a remote-first culture built for deep focus." },
  { icon: GraduationCap, label: "Learning Budget", desc: "Annual stipend for courses, conferences, and books to keep growing." },
  { icon: Home, label: "Home Office Stipend", desc: "One-time setup budget plus monthly allowance for your workspace." },
  { icon: Baby, label: "Generous Parental Leave", desc: "Extended paid leave for all new parents, with a phased return." },
  { icon: Plane, label: "Annual Team Retreats", desc: "In-person offsites to connect, celebrate, and plan what's next." },
  { icon: Brain, label: "Mental Health Support", desc: "Therapy and wellness benefits because sustainable work starts with wellbeing." },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-14">
            Built for people who do their best work.
          </h2>
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((b) => (
            <Fade key={b.label}>
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full flex flex-col group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                  <b.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{b.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
