import { useFadeIn } from "@/hooks/use-fade-in";
import { Wallet, CreditCard, ArrowRightLeft, Sparkles } from "lucide-react";

const products = [
  {
    icon: Wallet,
    title: "Smart Accounts",
    description: "Accounts that understand cash flow patterns and adapt to your financial rhythm.",
  },
  {
    icon: CreditCard,
    title: "Intelligent Cards",
    description: "Real-time spending categorization and proactive alerts powered by Alfie.",
  },
  {
    icon: ArrowRightLeft,
    title: "Contextual Payments",
    description: "Every transfer understood in context — timing, patterns, and impact.",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description: "Personalized guidance surfaced at exactly the right moment.",
  },
];

export default function ProductCapabilities() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Product
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Everything you need. Made smarter.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {products.map((p, i) => (
              <div
                key={p.title}
                className={`group rounded-2xl border border-border bg-card p-6 hover:border-primary/20 hover:shadow-xl hover:-translate-y-2 transition-all duration-500`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:from-primary/25 group-hover:to-primary/10 transition-all duration-300">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Video section - birthday sparklers */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              poster=""
            >
              <source
                src="https://videos.pexels.com/video-files/3249935/3249935-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
          </div>
        </div>
      </div>
    </section>
  );
}
