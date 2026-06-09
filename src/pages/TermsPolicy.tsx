import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { legalSections } from "./TermsOfUse";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function TermsPolicy() {
  const { slug } = useParams<{ slug: string }>();

  const found = legalSections
    .flatMap((s) => s.policies.map((p) => ({ section: s, policy: p })))
    .find((x) => x.policy.slug === slug);

  if (!found) {
    return (
      <main
        className="min-h-screen bg-background"
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
        }}
      >
        <Navbar />
        <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-semibold text-foreground">Policy not found</h1>
            <Link
              to="/terms"
              className="mt-6 inline-flex items-center gap-2 text-base text-foreground hover:opacity-70"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Legal Center
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const { section, policy } = found;

  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      <section className="pt-32 lg:pt-40 pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-sm font-medium text-black/60 mb-6">
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Legal Center
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-black/40" />
            <span className="text-foreground">{section.title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black/80 leading-tight">
            {policy.label}
          </h1>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
            {policy.summary}
          </p>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <article className="max-w-3xl mx-auto px-6 space-y-5 text-base md:text-lg text-black/70 font-medium leading-relaxed">
          {policy.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="pt-10 mt-10 border-t border-black/10">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Legal Center
            </Link>
          </div>
        </article>
      </section>

      <Footer />
    </main>
  );
}
