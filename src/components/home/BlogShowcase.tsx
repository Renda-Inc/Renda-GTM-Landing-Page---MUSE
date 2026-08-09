import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { articles } from "@/pages/Blog";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const news = articles.slice(0, 6);

export default function BlogShowcase() {
  const { ref, isVisible } = useFadeIn();
  const trackRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startScroll: 0, moved: false });

  const cardStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>("[data-card]");
    if (!first) return el.clientWidth * 0.6;
    return first.offsetWidth + 24;
  };

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * cardStep(), behavior: "smooth" });
  };

  const onDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    setDragging(true);
    drag.current = { startX: e.pageX, startScroll: el.scrollLeft, moved: false };
  };

  const onMove = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el || !dragging) return;
    const delta = e.pageX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
    const el = trackRef.current;
    if (!el) return;
    const step = cardStep();
    const target = Math.round(el.scrollLeft / step) * step;
    el.scrollTo({ left: target, behavior: "smooth" });
  };

  return (
    <section className="py-16 lg:py-20 overflow-hidden" style={{ fontFamily: SF_FONT }}>
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid lg:grid-cols-[340px_1fr] gap-12 lg:gap-16 items-center">
          {/* Intro */}
          <div>
            <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-8">Insights</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-black/80 hover:text-black transition-colors duration-300">
              Stay up to date with the latest news.
            </h2>
            <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
              We're constantly evolving; from new products and ideas to company milestones and
              insights. Follow along with the latest from Renda.
            </p>
            <Link
              to="/blog"
              className="mt-8 inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
            >
              Explore Blog / Insights
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative lg:mr-[calc(-50vw+50%-1.5rem)]">
            <div
              ref={trackRef}
              onMouseDown={onDown}
              onMouseMove={onMove}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
              className={`flex gap-6 overflow-x-auto pb-4 pr-6 no-scrollbar ${
                dragging ? "cursor-grabbing select-none snap-none" : "cursor-grab snap-x snap-mandatory"
              }`}
              style={{ scrollbarWidth: "none" }}
            >
              {news.map((a, i) => (
                <Link
                  key={a.slug}
                  data-card
                  to={`/blog/${a.slug}`}
                  onClick={(e) => {
                    if (drag.current.moved) e.preventDefault();
                  }}
                  draggable={false}
                  className={`group snap-start shrink-0 w-[300px] sm:w-[360px] lg:w-[420px] transition-all duration-500 ${
                    i === 0 ? "" : "lg:opacity-95"
                  }`}
                >
                  <div className="rounded-xl overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.title}
                      draggable={false}
                      loading="lazy"
                      className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                        i === 0 ? "h-[300px] lg:h-[400px]" : "h-[280px] lg:h-[370px]"
                      }`}
                    />
                  </div>
                  <h3 className="mt-6 text-xl lg:text-2xl font-semibold tracking-tight text-black/80 leading-snug">
                    {a.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-base font-medium text-black/60 group-hover:text-black transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Arrows */}
            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous story"
                className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next story"
                className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center text-black/70 hover:bg-black/5 transition-colors"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
