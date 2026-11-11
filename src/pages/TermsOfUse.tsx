import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, ChevronRight } from "lucide-react";

import { termsSections } from "@/data/terms";

export default function TermsOfUse() {
  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-4">
            Legal Center
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-black/80">
            Terms of Use
          </h1>
          <p className="mt-6 text-base md:text-lg text-black font-medium leading-relaxed max-w-2xl">
            This page contains the agreements, policies, and disclosures that
            govern the use of the Renda platform and its financial services.
            Please review these documents carefully before using our services.
          </p>
        </div>
      </header>

      {/* Sections */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {termsSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black/80 mb-3">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-black font-medium leading-relaxed mb-8">
                {section.description}
              </p>

              <div className="space-y-3">
                {section.policies.map((policy) => (
                  <Link
                    key={policy.slug}
                    to={`/terms/${policy.slug}`}
                    className="group flex items-start gap-5 p-6 sm:p-7 rounded-2xl bg-black/[0.055] backdrop-blur-xl backdrop-saturate-150 border border-black/[0.06] shadow-[0_10px_34px_rgba(0,0,0,0.07),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-black/[0.075] hover:shadow-[0_26px_50px_-12px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.8),inset_0_-1px_0_rgba(0,0,0,0.04)]"
                  >
                    <FileText className="w-6 h-6 text-black mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg font-semibold text-black/80">
                        {policy.label}
                      </p>
                      <p className="text-[15px] md:text-base text-black font-medium mt-1 leading-relaxed">
                        {policy.summary}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-black/40 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
