import { useFadeIn } from "@/hooks/use-fade-in";
import team1 from "@/assets/careers/team-1.jpg";
import team2 from "@/assets/careers/team-2.jpg";
import team3 from "@/assets/careers/team-3.jpg";
import team4 from "@/assets/careers/team-4.jpg";
import team6 from "@/assets/careers/team-6.jpg";
import team7 from "@/assets/careers/team-7.jpg";
import team8 from "@/assets/careers/team-8.jpg";
import testimonial1 from "@/assets/careers/testimonial-1.jpg";
import testimonial2 from "@/assets/careers/testimonial-2.jpg";
import testimonial3 from "@/assets/careers/testimonial-3.jpg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

const photos = [
  { src: team6, alt: "Team collaborating around a screen" },
  { src: team1, alt: "Engineer at work" },
  { src: team7, alt: "Team lunch together" },
  { src: team3, alt: "Whiteboard session" },
  { src: team8, alt: "Pair programming" },
  { src: team4, alt: "Working at cafe" },
  { src: team2, alt: "Brainstorming session" },
];

const testimonials = [
  {
    quote: "I joined Renda because I wanted to build something real, not just ship features. Every week I'm solving problems that genuinely matter.",
    name: "Amara O.",
    role: "Senior Backend Engineer",
    img: testimonial1,
  },
  {
    quote: "The autonomy here is unmatched. I own my designs end to end, and my ideas actually ship. There's no gap between thinking and building.",
    name: "Raj P.",
    role: "Product Designer",
    img: testimonial2,
  },
  {
    quote: "What surprised me most is how much leadership trusts the team. You're given real problems, real context, and real freedom to solve them.",
    name: "Sophie L.",
    role: "Data Scientist",
    img: testimonial3,
  },
];

export default function TeamGallery() {
  return (
    <section className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            The people behind the product.
          </h2>
          <p className="text-base text-muted-foreground mb-14 max-w-2xl">
            A distributed team of builders, thinkers, and operators across Toronto, London, and Lagos.
          </p>
        </Fade>
      </div>

      {/* Scrolling photo strip */}
      <Fade>
        <div className="relative">
          <div className="flex gap-4 animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused] w-max">
            {[...photos, ...photos].map((photo, i) => (
              <div
                key={i}
                className="w-[400px] h-[300px] md:w-[520px] md:h-[360px] rounded-2xl overflow-hidden shrink-0"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={280}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto px-6 mt-20">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-10">
            What Our Team Says
          </p>
        </Fade>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Fade key={t.name}>
              <div className="bg-background rounded-2xl p-8 border border-border h-full flex flex-col">
                <p className="text-base text-foreground leading-relaxed flex-1 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}
