import { ArrowRight, Lock } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function InvestorNotice() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section id="investors" className="py-20 lg:py-24 bg-background">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="relative rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-card via-card to-secondary/40 p-8 md:p-14 shadow-sm">
          {/* Subtle decorative accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <Lock className="w-3 h-3 text-primary" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  Investor Notice
                </span>
              </div>

              <h2 className="text-2xl md:text-[32px] font-bold tracking-tight leading-tight text-foreground mb-5">
                Renda Financial Technologies Inc. is currently undertaking a pre-seed financing through a private placement.
              </h2>

              <p className="text-base md:text-[17px] text-muted-foreground leading-relaxed max-w-2xl">
                Offering materials are available to eligible investors in accordance with applicable securities laws. Access may be requested through our investor portal.
              </p>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="#"
                className="group inline-flex items-center gap-2 h-12 px-7 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
              >
                Access Investor Portal
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
