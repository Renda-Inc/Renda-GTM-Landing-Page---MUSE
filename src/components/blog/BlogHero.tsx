import { useFadeIn } from "@/hooks/use-fade-in";

interface Props {
  heroImage: string;
}

export default function BlogHero({ heroImage }: Props) {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Full-bleed background — same pattern as homepage hero */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Person reading insights on a tablet"
          className="w-full h-full object-cover object-center"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-32 w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-white">
            Ideas shaping
            <br />
            intelligent finance.
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/80 max-w-lg leading-relaxed">
            Perspectives on AI-native banking, financial infrastructure, and building technology that earns trust.
          </p>
        </div>
      </div>
    </section>
  );
}
