const partners = [
  { name: "AWS Activate", logo: "/partners/aws.svg" },
  { name: "Microsoft for Startups", logo: "/partners/microsoft.svg" },
  { name: "NVIDIA Inception", logo: "/partners/nvidia.svg" },
  { name: "Google for Startups", logo: "/partners/google.svg" },
];

export default function PartnersMarquee() {
  // Duplicate partners enough times for seamless loop
  const items = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="bg-foreground py-12 h-[200px] flex items-center justify-center overflow-hidden relative" aria-label="Partner programs">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll 40s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="flex whitespace-nowrap marquee-track">
        {items.map((partner, i) => (
          <div
            key={`${partner.name}-${i}`}
            className="mx-12 flex items-center justify-center w-72 shrink-0 cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-12 w-auto opacity-60 hover:opacity-90 transition-opacity duration-300 invert grayscale filter"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Edge fade gradients */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-foreground" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-foreground" />
    </section>
  );
}
