import { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ArrowRight } from "lucide-react";

import blogHeroLifestyle from "@/assets/blog-hero-lifestyle.jpg";
import BlogHero from "@/components/blog/BlogHero";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogFilterBar from "@/components/blog/BlogFilterBar";
import BlogArticleList from "@/components/blog/BlogArticleList";
import BlogNewsletter from "@/components/blog/BlogNewsletter";

import { articles, categories, type Category } from "@/data/blog";

export default function Blog() {
  const [active, setActive] = useState<Category>("All");

  const featured = articles.filter((a) => a.featured);
  const filtered =
    active === "All"
      ? articles.filter((a) => !a.featured)
      : articles.filter((a) => a.category === active);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogHero heroImage={blogHeroLifestyle} />
      <BlogFeatured articles={featured} visible={active === "All"} />
      <BlogFilterBar categories={categories} active={active} onSelect={setActive} />
      <BlogArticleList articles={filtered} />
      <BlogNewsletter />
      <Footer />
    </main>
  );
}
