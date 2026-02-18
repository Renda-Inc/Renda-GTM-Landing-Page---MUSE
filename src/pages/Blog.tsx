import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";

/* ─── Fade wrapper ─── */
function FadeSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

/* ─── Types ─── */
type Category = "All" | "AI & Finance" | "Product" | "Industry" | "Company";

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  featured?: boolean;
}

/* ─── Static articles ─── */
const articles: Article[] = [
  {
    slug: "why-ai-native-banking",
    title: "Why AI-Native Banking Is Inevitable",
    excerpt:
      "The financial industry is approaching an inflection point. Legacy infrastructure wasn't built for intelligence — and retrofitting AI onto outdated systems won't be enough. Here's why the next generation of banks will be built from the ground up.",
    category: "AI & Finance",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    slug: "introducing-smartspend",
    title: "Introducing SmartSpend: Accounts That Understand Your Money",
    excerpt:
      "Today we're unveiling SmartSpend — a new kind of account that doesn't just store your money, but actively helps you understand and manage it through Alfie's intelligence layer.",
    category: "Product",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "signal-over-noise-banking",
    title: "Signal Over Noise: Rethinking Financial Notifications",
    excerpt:
      "Most banking apps overwhelm users with alerts that don't matter. We built Alfie to surface only the insights that move your financial life forward — and stay silent when there's nothing meaningful to say.",
    category: "AI & Finance",
    date: "Jan 28, 2026",
    readTime: "6 min read",
  },
  {
    slug: "responsible-ai-finance",
    title: "Building Responsible AI for Financial Services",
    excerpt:
      "Intelligence without responsibility is reckless. Our approach to AI in banking starts with transparency, explainability, and a deep respect for the weight of financial decisions.",
    category: "Industry",
    date: "Jan 20, 2026",
    readTime: "7 min read",
  },
  {
    slug: "renda-seed-announcement",
    title: "Renda Raises Seed Round to Build AI-Native Banking",
    excerpt:
      "We're excited to announce our seed funding round. This investment enables us to accelerate the development of Alfie and bring intelligent banking to Canadians faster.",
    category: "Company",
    date: "Jan 14, 2026",
    readTime: "4 min read",
  },
  {
    slug: "future-of-savings",
    title: "The End of Set-and-Forget Savings",
    excerpt:
      "Static savings rules ignore the reality of how people live. Adaptive savings — powered by real-time financial intelligence — represents a fundamental shift in how we help people build wealth.",
    category: "AI & Finance",
    date: "Jan 6, 2026",
    readTime: "6 min read",
  },
  {
    slug: "open-banking-canada",
    title: "What Open Banking Means for Canadian Consumers",
    excerpt:
      "Canada's open banking framework is evolving. We explore what this means for financial data portability, competition, and how AI-native players like Renda can unlock better outcomes for consumers.",
    category: "Industry",
    date: "Dec 18, 2025",
    readTime: "7 min read",
  },
  {
    slug: "building-alfie-platform",
    title: "Under the Hood: Building the Alfie Intelligence Platform",
    excerpt:
      "A look at the engineering decisions behind Alfie — from real-time transaction analysis to conversational financial insights. How we're building an AI system worthy of managing people's money.",
    category: "Product",
    date: "Dec 10, 2025",
    readTime: "9 min read",
  },
];

const categories: Category[] = ["All", "AI & Finance", "Product", "Industry", "Company"];

/* ─── Category color mapping ─── */
function categoryColor(cat: Exclude<Category, "All">) {
  switch (cat) {
    case "AI & Finance":
      return "text-primary";
    case "Product":
      return "text-foreground";
    case "Industry":
      return "text-muted-foreground";
    case "Company":
      return "text-primary";
  }
}

export default function Blog() {
  const [active, setActive] = useState<Category>("All");

  const featured = articles.filter((a) => a.featured);
  const filtered = active === "All" ? articles.filter((a) => !a.featured) : articles.filter((a) => a.category === active);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ════════════ HERO ════════════ */}
      <section className="pt-32 pb-16 lg:pt-44 lg:pb-20">
        <FadeSection className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-6">
            Blog & Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] text-foreground font-serif max-w-3xl">
            Ideas shaping the future of intelligent finance.
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Perspectives on AI-native banking, financial infrastructure, and building technology
            that earns trust.
          </p>
        </FadeSection>
      </section>

      {/* ════════════ FEATURED ════════════ */}
      {active === "All" && featured.length > 0 && (
        <section className="pb-16">
          <FadeSection className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {featured.map((article) => (
                <a
                  key={article.slug}
                  href="#"
                  className="group block border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
                >
                  {/* Image placeholder */}
                  <div className="aspect-[16/9] bg-card flex items-center justify-center">
                    <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Featured Image
                    </span>
                  </div>
                  <div className="p-6 lg:p-8 space-y-3">
                    <div className="flex items-center gap-3 text-xs">
                      <span className={`font-semibold uppercase tracking-[0.12em] ${categoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">{article.readTime}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeSection>
        </section>
      )}

      {/* ════════════ FILTER BAR ════════════ */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border-b border-border">
            <div className="flex gap-1 overflow-x-auto pb-px -mb-px">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    active === cat
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ ARTICLE LIST ════════════ */}
      <section className="pb-24 lg:pb-32">
        <FadeSection className="max-w-5xl mx-auto px-6">
          <div className="divide-y divide-border">
            {filtered.map((article) => (
              <a
                key={article.slug}
                href="#"
                className="group flex flex-col md:flex-row md:items-start gap-4 md:gap-8 py-8 first:pt-0"
              >
                {/* Thumbnail */}
                <div className="shrink-0 w-full md:w-48 aspect-[16/9] md:aspect-[4/3] rounded-xl bg-card flex items-center justify-center">
                  <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                    Image
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 text-xs">
                    <span className={`font-semibold uppercase tracking-[0.12em] ${categoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{article.date}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-muted-foreground text-sm">
              No articles in this category yet. Check back soon.
            </p>
          )}
        </FadeSection>
      </section>

      {/* ════════════ NEWSLETTER CTA ════════════ */}
      <section className="py-20 lg:py-24 border-t border-border">
        <FadeSection className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground font-serif">
            Stay informed.
          </h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Get our latest thinking on AI, banking, and financial infrastructure — delivered
            monthly. No noise.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="you@email.com"
              className="h-12 w-full sm:flex-1 px-5 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button className="h-12 px-6 rounded-full bg-foreground text-background text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </FadeSection>
      </section>

      <Footer />
    </main>
  );
}
