import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { termsSections } from "./TermsOfUse";

export default function TermsPolicy() {
  const { slug } = useParams<{ slug: string }>();

  let parentSection: (typeof termsSections)[number] | undefined;
  let policy: (typeof termsSections)[number]["policies"][number] | undefined;
  for (const section of termsSections) {
    const found = section.policies.find((p) => p.slug === slug);
    if (found) {
      parentSection = section;
      policy = found;
      break;
    }
  }

  const fontStyle = {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
  };

  if (!policy || !parentSection) {
    return (
      <main className="min-h-screen bg-background" style={fontStyle}>
        <Navbar />
        <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-semibold text-foreground">Policy not found</h1>
            <Link to="/terms" className="mt-6 inline-flex items-center gap-2 text-base text-foreground hover:opacity-70">
              <ArrowLeft className="w-4 h-4" /> Back to Terms of Use
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground" style={fontStyle}>
      <Navbar />

      <section className="pt-32 lg:pt-40 pb-10 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm font-medium text-black/60 mb-6">
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Terms of Use
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-black/40" />
            <span className="text-foreground">{parentSection.title}</span>
          </nav>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {parentSection.title}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-black/80">
            {policy.label}
          </h1>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed">
            {policy.summary}
          </p>
        </div>
      </section>

      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-base md:text-lg text-black/70 font-medium leading-relaxed space-y-5">
            <p>{policy.content}</p>
          </div>

          <div className="mt-16 pt-8 border-t border-black/10">
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 text-base font-semibold text-foreground hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Terms of Use
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
