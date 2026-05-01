import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  const message =
    "Renda Financial Technologies Inc. is currently undertaking a pre-seed financing through a private placement. Offering materials are available to eligible investors in accordance with applicable securities laws.";

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-foreground text-background overflow-hidden border-b border-foreground/20">
      <div className="relative flex overflow-x-hidden h-9 items-center">
        <div className="flex animate-marquee whitespace-nowrap items-center gap-12 text-[12px] font-medium tracking-wide">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
              {message}
              <a
                href="#investors"
                className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                Access Investor Portal
                <ArrowRight className="w-3 h-3" />
              </a>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
