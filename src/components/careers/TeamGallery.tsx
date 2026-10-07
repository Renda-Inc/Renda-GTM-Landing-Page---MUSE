import { useEffect, useState } from "react";
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
    role: "Senior Backend Engineer, Toronto",
    img: testimonial1,
  },
  {
    quote: "The autonomy here is unmatched. I own my designs end to end, and my ideas actually ship. There's no gap between thinking and building.",
    name: "Raj P.",
    role: "Product Designer, Vancouver",
    img: testimonial2,
  },
  {
    quote: "What surprised me most is how much leadership trusts the team. You're given real problems, real context, and real freedom to solve them.",
    name: "Sophie L.",
    role: "Data Scientist, New York",
    img: testimonial3,
  },
];

export default function TeamGallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 lg:py-20 bg-[#F6F5F2]">
      <div className="max-w-7xl mx-auto px-6">
        <Fade>
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-4">
            The people behind the product.
          </h2>
          <p className="text-base text-black font-medium mb-14 max-w-2xl">
            A distributed team of builders, thinkers, and operators across Toronto, Vancouver, and New York.
          </p>
        </Fade>

        {/* One-by-one slider with autoplay */}
        <Fade>
          <div className="relative rounded-3xl overflow-hidden bg-background">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {photos.map((p, i) => (
                <div key={i} className="w-full shrink-0">
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="w-full h-[480px] lg:h-[720px] object-cover"
                    loading="lazy"
                    width={1280}
                    height={720}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === index
                      ? "w-6 h-2 bg-foreground"
                      : "w-2 h-2 bg-black/25 hover:bg-black/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Fade>

        {/* Testimonials */}
        <div className="mt-20">
          <Fade>
            <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-10">
              What Our Team Says
            </p>
          </Fade>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Fade key={t.name}>
                <div className="bg-white rounded-2xl p-8 border border-transparent h-full flex flex-col transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                  <p className="text-base text-black/70 font-medium leading-relaxed flex-1 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-8 pt-6 border-t border-black/10">
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
                      <p className="text-xs text-black font-medium">{t.role}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
