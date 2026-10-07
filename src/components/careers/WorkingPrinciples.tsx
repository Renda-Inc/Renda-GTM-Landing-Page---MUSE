import { useFadeIn } from "@/hooks/use-fade-in";
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
  { title: "High autonomy", desc: "We hire people we trust, then give them the space to do their best work. No micromanagement, no busywork." },
  { title: "Written thinking", desc: "We write before we meet. Clear writing forces clear thinking, and it scales better than meetings." },
  { title: "Bias toward building", desc: "Ideas are cheap. We value people who prototype, ship, and iterate over those who only theorize." },
  { title: "Direct communication", desc: "We say what we mean, respectfully and without ambiguity. Clarity is a form of care." },
  { title: "Long-term focus", desc: "We optimize for years, not quarters. Every decision is weighed against what we're building for the long run." },
];

export default function WorkingPrinciples() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Fade className="text-center max-w-3xl mx-auto">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-5">Working at Renda</p>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl text-foreground">
            Great people. Clear thinking. Real impact.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-foreground md:text-lg">
            We're building the future of finance with a team that cares deeply and moves with purpose.
          </p>
        </Fade>

        <Fade className="mt-12 overflow-hidden rounded-3xl">
          <img
            src={workspaceImg}
            alt="Team collaborating in a bright workspace"
            className="h-[320px] w-full object-cover md:h-[500px]"
            loading="lazy"
          />
        </Fade>

        <div className="mt-12 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p, index) => (
            <Fade key={p.title} className={`border-b border-border py-7 md:px-7 ${index % 2 === 0 ? "md:border-r" : ""} lg:border-r lg:last:border-r-0`}>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-foreground">{p.desc}</p>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
