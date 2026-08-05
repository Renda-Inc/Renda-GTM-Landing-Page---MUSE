import { Link } from "react-router-dom";
import { useFadeIn } from "@/hooks/use-fade-in";
import type { Article } from "@/pages/Blog";
import { categoryColor } from "@/pages/Blog";

interface Props {
  articles: Article[];
  visible: boolean;
}

export default function BlogFeatured({ articles, visible }: Props) {
  const { ref, isVisible } = useFadeIn();

  if (!visible || articles.length === 0) return null;

  return (
    <section className="py-16 lg:py-20 bg-muted/50">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 md:px-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-10">
          Featured
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group block rounded-2xl overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-8 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className={`font-semibold uppercase tracking-[0.12em] ${categoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold text-foreground leading-snug">
                  {article.title}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
                <p className="text-sm text-muted-foreground">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
