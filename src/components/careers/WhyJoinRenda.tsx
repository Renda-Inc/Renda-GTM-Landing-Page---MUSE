import { useFadeIn } from "@/hooks/use-fade-in";
import officeImg from "@/assets/careers/office-1.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function WhyJoinRenda() {
  return (
    <section className="py-24 lg:py-32">
      <Fade className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Why Join Renda</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
              The rare chance to build from zero.
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg text-black/60 font-medium leading-relaxed">
              <p>
                Most fintech jobs are about optimizing what already exists. At Renda, you'll build AI-native financial infrastructure from scratch; the kind of systems that define how the next generation interacts with money.
              </p>
              <p>
                This isn't incremental improvement. It's foundational work. You'll have real ownership over hard problems, direct access to leadership, and the autonomy to make consequential decisions every day.
              </p>
              <p className="text-black/80 font-semibold">
                We're not looking for people who want a job. We're looking for people who want to build an institution.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last rounded-2xl overflow-hidden">
            <img src={officeImg} alt="Renda office space" className="w-full h-[420px] lg:h-[600px] object-cover" loading="lazy" width={1280} height={720} />
          </div>
        </div>
      </Fade>
    </section>
  );
}
