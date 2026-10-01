import type { Category } from "@/pages/Blog";

interface Props {
  categories: Category[];
  active: Category;
  onSelect: (cat: Category) => void;
}

export default function BlogFilterBar({ categories, active, onSelect }: Props) {
  return (
    <section className="pt-12 pb-4">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="border-b border-border">
          <div className="flex gap-1 overflow-x-auto pb-px -mb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => onSelect(cat)}
                className={`px-5 py-3 text-base font-medium whitespace-nowrap border-b-2 transition-colors ${
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
  );
}
