import { useFadeIn } from "@/hooks/use-fade-in";
import cardFront from "@/assets/card-front.png";
import cardBack from "@/assets/card-back.png";

export default function FloatingCards() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-foreground overflow-hidden">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/50 mb-4">
            The Renda Card
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-background leading-tight">
            Beautiful. Intelligent. Yours.
          </h2>
          <p className="mt-4 text-lg text-background/60 max-w-lg mx-auto">
            A card that works with Alfie to give you real-time insights on every purchase.
          </p>
        </div>

        {/* 3D Floating Cards */}
        <div className="relative h-[400px] md:h-[500px] flex items-center justify-center perspective-[1500px]">
          {/* Back card - tilted left, behind */}
          <div
            className={`absolute w-[280px] md:w-[380px] transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{
              transform: isVisible
                ? "rotateY(-15deg) rotateX(5deg) translateX(-60px) translateZ(-50px)"
                : "rotateY(0deg) rotateX(0deg) translateX(0) translateZ(0)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={cardBack}
              alt="Renda card back"
              className="w-full rounded-2xl shadow-2xl shadow-black/40 hover:shadow-black/60 transition-shadow duration-500"
              style={{
                filter: "brightness(0.85)",
              }}
            />
          </div>

          {/* Front card - tilted right, in front */}
          <div
            className={`absolute w-[280px] md:w-[380px] transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
            style={{
              transform: isVisible
                ? "rotateY(12deg) rotateX(-3deg) translateX(80px) translateZ(50px)"
                : "rotateY(0deg) rotateX(0deg) translateX(0) translateZ(0)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={cardFront}
              alt="Renda card front"
              className="w-full rounded-2xl shadow-2xl shadow-black/50 hover:shadow-black/70 hover:scale-[1.02] transition-all duration-500"
            />
          </div>

          {/* Glow effect */}
          <div className="absolute w-[500px] h-[300px] bg-primary/20 blur-[100px] rounded-full -z-10" />
        </div>

        {/* Features below cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Zero monthly fees", value: "$0" },
            { label: "Cashback", value: "1.5%" },
            { label: "Foreign exchange", value: "No fees" },
            { label: "Real-time alerts", value: "Instant" },
          ].map((item) => (
            <div key={item.label} className="group">
              <p className="text-2xl md:text-3xl font-bold text-background group-hover:text-primary transition-colors duration-300">
                {item.value}
              </p>
              <p className="text-sm text-background/50 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
