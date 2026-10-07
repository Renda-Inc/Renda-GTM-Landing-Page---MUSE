import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import rendaLogoBlack from "@/assets/renda-logo-black.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";
import featuredAlfie from "@/assets/about-alfie.jpg";
import featuredBelief from "@/assets/about-belief.jpg";
import featuredPlatform from "@/assets/timeline-alfie.jpg";
import featuredCompany from "@/assets/about-overhead.jpg";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

type FeaturedItem = {
  eyebrow: string;
  image: string;
  title: string;
  desc: string;
  href: string;
};

type Dropdown = {
  label: string;
  href: string;
  columns: { title?: string; items: { label: string; href: string; soon?: boolean }[] }[];
  featured?: FeaturedItem;
};

const navDropdowns: Dropdown[] = [
  {
    label: "Product",
    href: "/personal-banking",
    columns: [
      {
        title: "Personal banking",
        items: [
          { label: "Smart Accounts", href: "/personal-banking" },
          { label: "Cards & Payments", href: "/personal-banking#cards-payments" },
          { label: "Peer-to-Peer Payments", href: "/personal-banking#p2p" },
          { label: "Savings & Goals", href: "/personal-banking#savings-goals" },
          { label: "Interac", href: "/personal-banking#interac" },
        ],
      },
      {
        title: "Business banking",
        items: [
          { label: "Renda Business", href: "/business-banking" },
          { label: "Business Accounts", href: "/business-banking", soon: true },
          { label: "Expense Tracking", href: "/business-banking", soon: true },
          { label: "Bookkeeping & Tax Support", href: "/business-banking", soon: true },
        ],
      },
      {
        title: "Alfie",
        items: [
          { label: "How Alfie Works", href: "/#alfie" },
          { label: "Alfie for Individuals", href: "/personal-banking" },
          { label: "Alfie for Business", href: "/business-banking" },
          { label: "Alfie for Enterprise & Government", href: "/#alfie" },
          { label: "Alfie Agents", href: "/#alfie" },
        ],
      },
    ],
    featured: {
      eyebrow: "FEATURED",
      image: featuredAlfie,
      title: "Meet Alfie, your AI financial assistant",
      desc: "The intelligence layer built into every part of Renda banking.",
      href: "/#alfie",
    },
  },
  {
    label: "Why Renda",
    href: "/why-renda",
    columns: [
      {
        items: [
          { label: "Why Renda Exists", href: "/why-renda#exists" },
          { label: "Our Philosophy", href: "/why-renda#philosophy" },
          { label: "Signal Over Noise", href: "/why-renda#signals" },
          { label: "Intelligence at the Core", href: "/why-renda#belief" },
          { label: "Trust & Responsibility", href: "/why-renda#trust" },
        ],
      },
    ],
    featured: {
      eyebrow: "FEATURED",
      image: featuredBelief,
      title: "Finance should empower, not overwhelm",
      desc: "Read the founding conviction behind Renda's approach to modern money.",
      href: "/why-renda#philosophy",
    },
  },
  {
    label: "Platform",
    href: "#infrastructure",
    columns: [
      {
        items: [
          { label: "Alfie Platform", href: "/alfie-platform" },
          { label: "Alfie as Infrastructure", href: "#infrastructure" },
          { label: "Developer & Integration", href: "#" },
          { label: "Security & Compliance", href: "#" },
        ],
      },
    ],
    featured: {
      eyebrow: "FEATURED",
      image: featuredPlatform,
      title: "Alfie as financial infrastructure",
      desc: "How the reasoning engine powers fintechs, platforms, and partners.",
      href: "#infrastructure",
    },
  },
  {
    label: "Company",
    href: "/about",
    columns: [
      {
        items: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Blog & Insights", href: "/blog" },
          { label: "Our Investors", href: "/investors" },
          { label: "Help Centre", href: "/help" },
        ],
      },
    ],
    featured: {
      eyebrow: "FEATURED",
      image: featuredCompany,
      title: "Building an intelligence layer for finance",
      desc: "Meet the team, the mission, and the long-term institution we're building.",
      href: "/about",
    },
  },
];

export default function Navbar({ variant = "default" }: { variant?: "default" | "solid" }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <>

      {/* Backdrop when dropdown open */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 pointer-events-none ${
          activeDropdown ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        style={{ fontFamily: SF_PRO }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || activeDropdown || variant === "solid"
            ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={scrolled || activeDropdown || variant === "solid" ? rendaLogoBlack : rendaLogoWhite}
            alt="Renda"
            className="h-7 w-auto transition-opacity duration-300"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navDropdowns.map((dropdown) => {
            const isActive = activeDropdown === dropdown.label;
            const isDimmed = activeDropdown && !isActive;
            const hasChevron = dropdown.columns.length > 0;
            const darkMode = scrolled || activeDropdown || variant === "solid";
            const isSingleColumn = dropdown.columns.length === 1;
            return (
            <div
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(dropdown.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                  darkMode
                    ? isActive
                      ? "text-foreground"
                      : isDimmed
                      ? "text-foreground/40 hover:text-foreground"
                      : "text-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {dropdown.label}
                {hasChevron && (
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`}
                  />
                )}
              </button>

              {isActive && (
                <div className="fixed top-[64px] left-0 right-0 pointer-events-none z-50">
                  <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div
                      className={`pointer-events-auto bg-background rounded-2xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] animate-fade-in ${
                        isSingleColumn ? "max-w-xl" : ""
                      }`}
                      style={{ fontFamily: SF_PRO }}
                    >
                      <div className="px-8 py-8">
                        <div
                          className={`group/cols grid gap-x-12 gap-y-2 ${
                            isSingleColumn && dropdown.featured
                              ? "grid-cols-[1fr_1.2fr]"
                              : dropdown.featured
                              ? "grid-cols-[1fr_1fr_1fr_1.1fr]"
                              : dropdown.columns.length > 1
                              ? "grid-cols-3"
                              : "grid-cols-1 max-w-xs"
                          }`}
                        >
                          {dropdown.columns.map((col, ci) => (
                            <div key={ci} className="flex flex-col gap-2">
                              {col.title && (
                                <span className="text-base font-semibold text-foreground mb-2 whitespace-nowrap">
                                  {col.title}
                                </span>
                              )}
                              {col.items.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="flex items-center gap-2.5 py-1.5 text-[15px] text-foreground/90 transition-colors duration-200 group-hover/cols:text-foreground/60 hover:!text-foreground/90 whitespace-nowrap"
                                >
                                  {item.label}
                                  {item.soon && (
                                    <span className="text-[10px] font-semibold tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                                      SOON
                                    </span>
                                  )}
                                </a>
                              ))}
                            </div>
                          ))}
                          {dropdown.featured && (
                            <a
                              href={dropdown.featured.href}
                              className="block group rounded-2xl overflow-hidden bg-secondary/60 hover:bg-secondary transition-colors"
                            >
                              <div className="aspect-[16/10] overflow-hidden">
                                <img
                                  src={dropdown.featured.image}
                                  alt={dropdown.featured.title}
                                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                />
                              </div>
                              <div className="p-4">
                                <span className="text-[11px] font-semibold tracking-[0.12em] text-foreground/45">
                                  {dropdown.featured.eyebrow}
                                </span>
                                <p className="mt-2 text-[15px] font-semibold text-foreground/90 leading-snug">
                                  {dropdown.featured.title}
                                </p>
                                <p className="mt-1 text-[13px] text-foreground/60 leading-snug">
                                  {dropdown.featured.desc}
                                </p>
                              </div>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            );
          })}
        </div>


        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className={`text-[15px] font-medium transition-colors duration-200 ${
              scrolled || activeDropdown || variant === "solid" ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Sign In
          </a>
          <a
            href="#waitlist"
            className={`group h-10 px-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200 ${
              scrolled || activeDropdown || variant === "solid"
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Get Early Access
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${scrolled || activeDropdown || variant === "solid" ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border" style={{ fontFamily: SF_PRO }}>
          <div className="px-6 py-4 space-y-1">
            {navDropdowns.map((dropdown) => (
              <div key={dropdown.label}>
                <button
                  className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground hover:text-foreground/70 transition-colors"
                  onClick={() => setMobileExpanded(mobileExpanded === dropdown.label ? null : dropdown.label)}
                >
                  {dropdown.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === dropdown.label ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === dropdown.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {dropdown.columns.map((col, ci) => (
                      <div key={ci}>
                        {col.title && (
                          <span className="block text-[10px] font-semibold tracking-[0.1em] text-muted-foreground mt-2 mb-1">
                            {col.title}
                          </span>
                        )}
                        {col.items.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center gap-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.label}
                            {item.soon && (
                              <span className="text-[10px] font-semibold tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                                SOON
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <a
                href="#"
                className="block text-center py-2 text-base font-medium text-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Sign In
              </a>
              <a
                href="#waitlist"
                className="h-11 inline-flex items-center justify-center gap-2 w-full rounded-full bg-foreground text-background text-base font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Get Early Access
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
