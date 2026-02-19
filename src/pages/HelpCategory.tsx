import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { helpCategories } from "./Help";
import { ArrowLeft } from "lucide-react";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-border" /></div>;
}

export default function HelpCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = helpCategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold text-foreground">Category not found</h1>
            <Link to="/help" className="mt-6 inline-flex items-center gap-2 text-sm text-accent-foreground hover:opacity-80">
              <ArrowLeft className="w-4 h-4" /> Back to Help
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 lg:pt-44 lg:pb-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <Link to="/help" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Help
          </Link>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-6">Help Centre</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            {category.title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            {category.description}
          </p>
        </Fade>
      </section>

      <Divider />

      {/* Topics */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6">
          <div className="space-y-0 border-t border-border">
            {category.topics.map((topic) => (
              <div
                key={topic.title}
                className="py-6 border-b border-border"
              >
                <h2 className="text-base font-semibold text-foreground">{topic.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{topic.summary}</p>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Didn't find what you're looking for?
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Reach out to our support team and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@renda.com"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Email Support
          </a>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
