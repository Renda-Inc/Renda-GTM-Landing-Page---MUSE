import { useFadeIn } from "@/hooks/use-fade-in";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function DiversitySection() {
  return (
    <section className="py-16 lg:py-20 bg-foreground text-background">
      <Fade className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-background mb-8">Diversity & Inclusion</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
          Better perspective build better products.
        </h2>
        <div className="mt-10 space-y-6 text-base md:text-lg text-background/70 font-medium leading-relaxed max-w-2xl mx-auto">
          <p>
            We're building financial infrastructure for a global population. That requires a team that reflects the diversity of the people we serve, in background, experience, identity, and thought.
          </p>
          <p>
            Inclusion isn't a program at Renda. It's a design principle. We actively seek out perspectives that challenge our assumptions and make our products more intelligent.
          </p>
        </div>
      </Fade>
    </section>
  );
}
