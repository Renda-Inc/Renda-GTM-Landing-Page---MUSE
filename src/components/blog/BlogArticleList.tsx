import { Link } from "react-router-dom";
import { useFadeIn } from "@/hooks/use-fade-in";
import type { Article } from "@/pages/Blog";
import { categoryColor } from "@/pages/Blog";

interface Props {
  articles: Article[];
}

export default function BlogArticleList({ articles }: Props) {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="pb-24 lg:pb-32 pt-4">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="divide-y divide-border">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-5 md:gap-8 py-8 first:pt-0"
            >
              {/* Thumbnail */}
              <div className="shrink-0 w-full md:w-52 aspect-[16/9] md:aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-3 text-sm">
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
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {articles.length === 0 && (
          <p className="py-16 text-center text-muted-foreground text-base">
            No articles in this category yet. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
