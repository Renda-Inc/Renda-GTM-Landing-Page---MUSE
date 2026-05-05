import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import rendaLogoBlack from "@/assets/renda-logo-black.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";
import AnnouncementBar from "./AnnouncementBar";

const navDropdowns = [
  {
    label: "Product",
    href: "/personal-banking",
    columns: [
      {
        title: "PERSONAL BANKING",
        items: [
          { label: "Smart Accounts", href: "/personal-banking" },
          { label: "Cards & Payments", href: "/personal-banking#card" },
          { label: "Savings & Goals", href: "/personal-banking#savings" },
        ],
      },
      {
        title: "BUSINESS BANKING",
        items: [
          { label: "Business Accounts", href: "#", soon: true },
          { label: "Expense Tracking", href: "#", soon: true },
          { label: "Bookkeeping & Tax Support", href: "#", soon: true },
        ],
      },
      {
        title: "ALFIE AI",
        items: [
          { label: "How Alfie Works", href: "/why-renda#belief" },
          { label: "Alfie for Individuals", href: "/personal-banking" },
          { label: "Alfie for Businesses", href: "#" },
          { label: "Alfie Platform", href: "#infrastructure" },
        ],
      },
    ],
  },
  {
    label: "Why Renda",
    href: "/why-renda",
    columns: [
      {
        items: [
          { label: "Our Philosophy", href: "/why-renda#philosophy" },
          { label: "Signal Over Noise", href: "/why-renda#signals" },
          { label: "AI-Native Banking", href: "/why-renda#belief" },
          { label: "Trust & Responsibility", href: "/why-renda#trust" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    href: "#infrastructure",
    columns: [
      {
        items: [
          { label: "Alfie as Infrastructure", href: "#infrastructure" },
          { label: "Developer & Integration", href: "#" },
          { label: "Security & Compliance", href: "#" },
        ],
      },
    ],
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
          { label: "Help Centre", href: "/help" },
        ],
      },
    ],
  },
];

export default function Navbar() {
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
    <nav
      className={`fixed top-9 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={scrolled ? rendaLogoBlack : rendaLogoWhite}
            alt="Renda"
            className="h-7 w-auto transition-opacity duration-300"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navDropdowns.map((dropdown) => (
            <div
              key={dropdown.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(dropdown.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? "text-foreground/60 hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {dropdown.label}
              </button>

              {activeDropdown === dropdown.label && (
                <div className="fixed top-[100px] left-1/2 -translate-x-1/2 pt-2">
                  <div className={`bg-background border border-border rounded-xl shadow-xl p-8 ${dropdown.columns.length > 1 ? "min-w-[720px]" : "min-w-[240px]"}`}>
                    <div className={`flex ${dropdown.columns.length > 1 ? "gap-14" : ""}`}>
                      {dropdown.columns.map((col, ci) => (
                        <div key={ci} className="flex flex-col gap-1.5">
                          {col.title && (
                            <span className="text-[11px] font-medium tracking-[0.1em] text-foreground/50 mb-2">
                              {col.title}
                            </span>
                          )}
                          {col.items.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="flex items-center gap-2.5 py-1.5 text-[15px] text-foreground/80 hover:text-foreground transition-colors duration-150 whitespace-nowrap"
                            >
                              {item.label}
                              {"soon" in item && item.soon && (
                                <span className="text-[10px] font-semibold tracking-wider bg-muted text-muted-foreground px-2 py-0.5 rounded-full">
                                  SOON
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className={`text-[15px] font-medium transition-colors duration-200 ${
              scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/70 hover:text-white"
            }`}
          >
            Sign In
          </a>
          <a
            href="#waitlist"
            className={`group h-10 px-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200 ${
              scrolled
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
          className={`lg:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
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
                            {"soon" in item && item.soon && (
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
  );
}
