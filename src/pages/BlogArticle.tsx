import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowLeft } from "lucide-react";
import { articles, categoryColor } from "@/data/blog";
import articleContent from "@/data/blogArticleContent";

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const content = slug ? articleContent[slug] : undefined;
  const { ref, isVisible } = useFadeIn();

  if (!article) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  /* Find related articles (same category, different slug) */
  const related = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* ── Full-width hero image ── */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto px-6 pt-24 md:pt-28">
          <div className="w-full aspect-[4/3] md:aspect-[16/9] rounded-xl overflow-hidden bg-muted">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Article content ── */}
      <article
        ref={ref}
        className={`max-w-[720px] mx-auto px-6 pt-10 pb-20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Back link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Title */}
        <h1 className="text-3xl md:text-[2.75rem] leading-[1.15] font-bold text-foreground mb-5">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-sm mb-10">
          <span
            className={`font-semibold uppercase tracking-[0.12em] ${categoryColor(
              article.category
            )}`}
          >
            {article.category}
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{article.date}</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">{article.readTime}</span>
        </div>

        {/* Body */}
        {content ? (
          <div
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5
              prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-[1.85] prose-p:mb-6 prose-p:text-[1.05rem]
              prose-strong:text-foreground
              prose-em:text-foreground/80
              prose-a:text-primary prose-a:underline
              prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:pl-6 prose-blockquote:my-8
              prose-li:text-muted-foreground prose-li:leading-[1.85]"
            dangerouslySetInnerHTML={{ __html: content.body }}
          />
        ) : (
          <div className="py-10 text-center text-muted-foreground">
            <p>Full article coming soon.</p>
          </div>
        )}

        {/* Divider */}
        <hr className="my-16 border-border" />

        {/* Related articles */}
        {related.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/blog/${r.slug}`}
                  className="group block"
                >
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-3">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.12em] ${categoryColor(
                      r.category
                    )}`}
                  >
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mt-1 leading-snug line-clamp-2">
                    {r.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </main>
  );
}
