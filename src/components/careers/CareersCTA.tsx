import { useFadeIn } from "@/hooks/use-fade-in";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function CareersCTA() {
  return (
    <section className="py-24 lg:py-32">
      <Fade className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
          Ready to build something foundational?
        </h2>
        <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          We're assembling a team of exceptional builders, thinkers, and operators. If that's you, we'd love to talk.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#roles"
            className="inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            View Open Positions
          </a>
          <a
            href="mailto:careers@renda.com"
            className="inline-flex h-12 px-8 items-center rounded-full border border-border text-foreground text-base font-medium hover:bg-secondary transition-colors"
          >
            Email Us
          </a>
        </div>
      </Fade>
    </section>
  );
}
