import Marquee from "react-fast-marquee";

const partners = [
  { name: "AWS Activate", logo: "/partners/aws.svg" },
  { name: "Microsoft for Startups", logo: "/partners/microsoft.svg" },
  { name: "NVIDIA Inception", logo: "/partners/nvidia.svg" },
  { name: "Google for Startups", logo: "/partners/google.svg" },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-foreground py-16 overflow-hidden relative" aria-label="Partner programs">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <p className="text-sm font-medium text-background/50 text-center tracking-wide uppercase">
          Backed by leading programs
        </p>
      </div>
      
      <Marquee
        speed={40}
        gradient={true}
        gradientColor="hsl(25, 15%, 25%)"
        gradientWidth={150}
        pauseOnHover={true}
        className="py-4"
      >
        {[...partners, ...partners, ...partners].map((partner, index) => (
          <div
            key={`${partner.name}-${index}`}
            className="mx-12 flex items-center justify-center w-44 cursor-pointer"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 invert brightness-0 filter"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
