import { useFadeIn } from "@/hooks/use-fade-in";
import equitySalary from "@/assets/benefits/equity-salary.jpg";
import health from "@/assets/benefits/health.jpg";
import remote from "@/assets/benefits/remote.jpg";
import learning from "@/assets/benefits/learning.jpg";
import homeOffice from "@/assets/benefits/home-office.jpg";
import parental from "@/assets/benefits/parental.jpg";
import retreats from "@/assets/benefits/retreats.jpg";
import mentalHealth from "@/assets/benefits/mental-health.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const benefits = [
  { image: equitySalary, label: "Competitive Equity & Salary", desc: "Market-rate compensation with meaningful equity so you share in what we build." },
  { image: health, label: "Health, Dental & Vision", desc: "Comprehensive coverage for you and your family from day one." },
  { image: remote, label: "Flexible Remote Work", desc: "Work from anywhere with a remote-first culture built for deep focus." },
  { image: learning, label: "Learning Budget", desc: "Annual stipend for courses, conferences, and books to keep growing." },
  { image: homeOffice, label: "Home Office Stipend", desc: "One-time setup budget plus monthly allowance for your workspace." },
  { image: parental, label: "Generous Parental Leave", desc: "Extended paid leave for all new parents, with a phased return." },
  { image: retreats, label: "Annual Team Retreats", desc: "In-person offsites to connect, celebrate, and plan what's next." },
  { image: mentalHealth, label: "Mental Health Support", desc: "Therapy and wellness benefits because sustainable work starts with wellbeing." },
];

export default function Benefits() {
  return (
    <section className="py-16 lg:py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Benefits</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-14">
            Built for people who do their best work.
          </h2>
        </Fade>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <Fade key={b.label}>
              <div className="group h-full flex flex-col">
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-background">
                  <img
                    src={b.image}
                    alt={b.label}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pt-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">{b.label}</h3>
                  <p className="text-[15px] text-black/60 font-medium leading-relaxed">{b.desc}</p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
