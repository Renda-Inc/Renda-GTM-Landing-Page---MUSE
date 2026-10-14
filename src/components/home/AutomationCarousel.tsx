import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";
import lifestyleHike from "@/assets/lifestyle-adventure-hike.jpg";
import lifestyleDreamJob from "@/assets/lifestyle-dream-job.jpg";

const automations = [
  {
    title: "Smart salary sorting",
    desc: "Automatically split your paycheck the moment it hits; route cash to rent, set aside bill money, and fund your savings goals instantly.",
    image: lifestyleGathering,
  },
  {
    title: "Real-time cash flow",
    desc: "See exactly what you have left to spend today after accounting for upcoming bills, subscriptions, and savings targets.",
    image: lifestyleHike,
  },
  {
    title: "Instant payments",
    desc: "Send money via Interac with automated recurring notes and smart tracking built right in.",
    image: lifestyleDreamJob,
  },
];

export default function AutomationCarousel() {
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: false });
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const updateControls = useCallback(() => {
    if (!api) return;
    setCanGoBack(api.canScrollPrev());
    setCanGoForward(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    updateControls();
    api.on("select", updateControls).on("reInit", updateControls);
    return () => {
      api.off("select", updateControls).off("reInit", updateControls);
    };
  }, [api, updateControls]);

  return (
    <div className="mt-12" role="region" aria-roledescription="carousel" aria-label="Daily money automation">
      <div ref={viewportRef} className="w-[calc(50vw+50%)] overflow-visible">
        <div className="flex touch-pan-y gap-3 pr-6">
          {automations.map((automation, index) => (
            <div
              key={automation.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${automations.length}`}
              className="relative min-w-0 shrink-0 basis-[calc((min(100vw,1280px)-72px)*0.75)] h-[420px] lg:h-[520px] rounded-3xl overflow-hidden bg-foreground"
            >
              <img src={automation.image} alt={automation.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/20 to-foreground/30" />
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10 text-left">
                <div className="h-[3px] w-12 rounded-full bg-brand-orange mb-5" />
                <h3 className="text-primary-foreground text-2xl md:text-3xl font-medium leading-snug">{automation.title}</h3>
                <p className="mt-3 text-primary-foreground/75 text-sm md:text-base font-medium leading-relaxed max-w-md">{automation.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <Button type="button" variant="outline" size="icon" className="h-12 w-12 rounded-full border-foreground/15 text-foreground/70 hover:bg-foreground/5 hover:text-foreground/70" aria-label="Previous automation" title="Previous automation" disabled={!canGoBack} onClick={() => api?.scrollPrev()}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <Button type="button" variant="outline" size="icon" className="h-12 w-12 rounded-full border-foreground/15 text-foreground/70 hover:bg-foreground/5 hover:text-foreground/70" aria-label="Next automation" title="Next automation" disabled={!canGoForward} onClick={() => api?.scrollNext()}>
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
      <div className="mt-6 flex items-center justify-center gap-2" aria-label="Automation slides">
        {automations.map((automation, index) => (
          <Button
            key={automation.title}
            type="button"
            variant="ghost"
            className="group h-8 w-6 p-0 rounded-full hover:bg-transparent"
            aria-label={`Go to automation ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
            onClick={() => api?.scrollTo(index)}
          >
            <span className={`block h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-foreground" : "w-2 bg-foreground/25 group-hover:bg-foreground/50"}`} />
          </Button>
        ))}
      </div>
    </div>
  );
}