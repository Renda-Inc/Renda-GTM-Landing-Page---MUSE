const partners = [
  { name: "AWS Activate", logo: "/partners/aws.svg" },
  { name: "Microsoft for Startups", logo: "/partners/microsoft.svg" },
  { name: "NVIDIA Inception", logo: "/partners/nvidia.svg" },
  { name: "Google for Startups", logo: "/partners/google.svg" },
];

export default function PartnersMarquee() {
  return (
    <section className="bg-foreground py-16 overflow-hidden relative" aria-label="Partner programs">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium text-background/50 text-center tracking-wide uppercase mb-10">
          Backed by leading programs
        </p>
        
        <div className="flex items-center justify-center gap-12 md:gap-20 flex-wrap">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center cursor-pointer"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300 invert brightness-0 filter"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
