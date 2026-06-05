import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { helpCategories } from "./Help";
import { ArrowLeft, ChevronRight } from "lucide-react";

export default function HelpCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = helpCategories.find((c) => c.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!category) {
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
            <h1 className="text-3xl font-semibold text-foreground">Category not found</h1>
            <Link to="/help" className="mt-6 inline-flex items-center gap-2 text-base text-primary hover:opacity-80">
              <ArrowLeft className="w-4 h-4" /> Back to Help
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const activeTopic = category.topics[activeIndex];

  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* Header */}
      <section className="pt-32 lg:pt-40 pb-10">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 leading-tight">
            {category.title}
          </h1>
          <nav className="mt-4 flex items-center gap-2 text-sm font-medium text-black/60">
            <Link to="/help" className="hover:text-foreground transition-colors">
              Help
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-black/40" />
            <span className="text-foreground">{category.title}</span>
          </nav>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
            {/* Sidebar: Article list */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">Articles</p>
              <ul className="space-y-1">
                {category.topics.map((t, i) => (
                  <li key={t.title}>
                    <button
                      onClick={() => setActiveIndex(i)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-[15px] leading-snug transition-colors ${
                        i === activeIndex
                          ? "bg-[#F6F5F2] text-foreground font-semibold"
                          : "text-black/70 font-medium hover:bg-[#F6F5F2]/60 hover:text-foreground"
                      }`}
                    >
                      {t.title}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content */}
            <article className="min-w-0">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground leading-tight">
                {activeTopic.title}
              </h2>
              <p className="mt-4 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                {activeTopic.summary}
              </p>
              {activeTopic.content && (
                <div className="mt-8 text-base md:text-lg text-black/70 font-medium leading-relaxed space-y-5">
                  <p>{activeTopic.content}</p>
                </div>
              )}

              <div className="mt-12 pt-8 border-t border-black/10">
                <p className="text-sm font-medium text-black/60 mb-3">Was this article helpful?</p>
                <div className="flex gap-3">
                  <button className="px-5 h-10 rounded-full border border-black/15 text-sm font-medium hover:bg-[#F6F5F2] transition-colors">
                    Yes
                  </button>
                  <button className="px-5 h-10 rounded-full border border-black/15 text-sm font-medium hover:bg-[#F6F5F2] transition-colors">
                    No
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
