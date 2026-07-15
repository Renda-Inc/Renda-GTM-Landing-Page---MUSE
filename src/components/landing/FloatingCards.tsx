import { useFadeIn } from "@/hooks/use-fade-in";
import cardFront from "@/assets/card-front.png";
import cardBack from "@/assets/card-back.png";

export default function FloatingCards() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-16 lg:py-20 bg-foreground overflow-hidden">
      <style>{`
        @keyframes float-front {
          0%, 100% { transform: rotateY(18deg) rotateX(-12deg) rotateZ(3deg) translateY(0px); }
          50% { transform: rotateY(18deg) rotateX(-12deg) rotateZ(3deg) translateY(-15px); }
        }
        @keyframes float-back {
          0%, 100% { transform: rotateY(-12deg) rotateX(8deg) rotateZ(-5deg) translateY(0px); }
          50% { transform: rotateY(-12deg) rotateX(8deg) rotateZ(-5deg) translateY(-10px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        .card-front-float { animation: float-front 4s ease-in-out infinite; }
        .card-back-float { animation: float-back 5s ease-in-out infinite; }
        .glow-float { animation: glow-pulse 4s ease-in-out infinite; }
      `}</style>

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

        {/* 3D Floating Cards - dynamic pose */}
        <div className="relative h-[420px] md:h-[520px] flex items-center justify-center" style={{ perspective: "1200px" }}>
          
          {/* Back card - angled dramatically, floating behind */}
          <div
            className={`absolute w-[260px] md:w-[360px] transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-24"
            }`}
            style={{
              transformStyle: "preserve-3d",
              left: "50%",
              marginLeft: "-240px",
              top: "15%",
            }}
          >
            <div className={isVisible ? "card-back-float" : ""} style={{ transformStyle: "preserve-3d" }}>
              <img
                src={cardBack}
                alt="Renda card back"
                className="w-full rounded-2xl"
                style={{
                  filter: "brightness(0.8)",
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.5), 0 0 40px rgba(74,140,207,0.15)",
                }}
              />
            </div>
          </div>

          {/* Front card - steep angle, floating in front */}
          <div
            className={`absolute w-[260px] md:w-[360px] transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-24"
            }`}
            style={{
              transformStyle: "preserve-3d",
              left: "50%",
              marginLeft: "-40px",
              top: "8%",
              zIndex: 10,
            }}
          >
            <div className={isVisible ? "card-front-float" : ""} style={{ transformStyle: "preserve-3d" }}>
              <img
                src={cardFront}
                alt="Renda card front"
                className="w-full rounded-2xl hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
                style={{
                  boxShadow: "0 40px 80px -20px rgba(0,0,0,0.6), 0 0 60px rgba(255,180,163,0.2)",
                }}
              />
            </div>
          </div>

          {/* Accent glows */}
          <div className="absolute w-[300px] h-[200px] rounded-full -z-10 glow-float" style={{ background: "radial-gradient(circle, hsla(211,52%,55%,0.3), transparent 70%)", left: "15%", top: "30%" }} />
          <div className="absolute w-[250px] h-[200px] rounded-full -z-10 glow-float" style={{ background: "radial-gradient(circle, hsla(11,100%,82%,0.25), transparent 70%)", right: "15%", top: "20%", animationDelay: "2s" }} />
        </div>

        {/* Features below cards */}
        <div className="mt-8 grid grid-cols-2 gap-6 text-center max-w-lg mx-auto">
          <div className="group">
            <p className="text-2xl md:text-3xl font-bold text-background group-hover:text-accent-peach transition-colors duration-300">
              Zero-Dollar Monthly*
            </p>
            <p className="text-xs text-background/40 mt-2">*Fees start at $0/month.</p>
          </div>
          <div className="group">
            <p className="text-2xl md:text-3xl font-bold text-background group-hover:text-accent-peach transition-colors duration-300">
              Instant Real-Time Alerts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
