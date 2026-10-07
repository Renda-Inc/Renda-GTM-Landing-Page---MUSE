import { useFadeIn } from "@/hooks/use-fade-in";
import heroImg from "@/assets/careers/hero-collage-1.jpg";
import team1 from "@/assets/careers/team-1.jpg";
import team2 from "@/assets/careers/team-2.jpg";
import team3 from "@/assets/careers/team-3.jpg";
import team4 from "@/assets/careers/team-4.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export default function CareersHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-44 lg:pb-24">
      <Fade className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-6">Careers</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80 hover:text-black transition-colors duration-300">
          Join us in building the intelligence layer for finance.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-black font-medium max-w-2xl mx-auto leading-relaxed">
          Join a growing, ambitious team shaping the future of AI-native banking. We're building something foundational, and we need exceptional people to do it.
        </p>

        <a
          href="#roles"
          className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
        >
          View Open Roles
        </a>
      </Fade>

      {/* Photo collage — Stripe/Revolut inspired */}
      <Fade className="mt-16 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[320px] md:h-[420px]">
          <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden">
            <img src={heroImg} alt="Team collaborating" className="w-full h-full object-cover" width={1280} height={720} />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={team1} alt="Engineer at work" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={team3} alt="Whiteboard session" className="w-full h-full object-cover" loading="lazy" width={640} height={640} />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={team4} alt="Working at cafe" className="w-full h-full object-cover" loading="lazy" width={640} height={800} />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={team2} alt="Brainstorming" className="w-full h-full object-cover" loading="lazy" width={640} height={800} />
          </div>

        </div>
      </Fade>
    </section>
  );
}
