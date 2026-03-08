import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavGroup {
  label: string;
  sections: { heading: string; links: { label: string; href: string; badge?: string }[] }[];
}

const navGroups: NavGroup[] = [
  {
    label: "Product",
    sections: [
      {
        heading: "Personal Banking",
        links: [
          { label: "Smart Accounts", href: "/personal-banking#smart-accounts" },
          { label: "Cards & Payments", href: "/personal-banking#cards-payments" },
          { label: "Savings & Goals", href: "/personal-banking#savings-goals" },
        ],
      },
      {
        heading: "Business Banking",
        links: [
          { label: "Business Accounts", href: "#", badge: "Soon" },
          { label: "Expense Tracking", href: "#", badge: "Soon" },
          { label: "Bookkeeping & Tax Support", href: "#", badge: "Soon" },
        ],
      },
      {
        heading: "Alfie AI",
        links: [
          { label: "How Alfie Works", href: "#alfie" },
          { label: "Alfie for Individuals", href: "#" },
          { label: "Alfie for Businesses", href: "#" },
          { label: "Alfie Platform", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Why Renda",
    sections: [
      {
        heading: "",
        links: [
          { label: "Banking, Rebuilt with Intelligence", href: "#belief" },
          { label: "Signal Over Noise", href: "#signals" },
          { label: "Trust & Responsibility", href: "#trust" },
          { label: "Our Philosophy", href: "#philosophy" },
        ],
      },
    ],
  },
  {
    label: "Platform",
    sections: [
      {
        heading: "",
        links: [
          { label: "Alfie as Infrastructure", href: "#infrastructure" },
          { label: "For Fintechs & Platforms", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Company",
    sections: [
      {
        heading: "",
        links: [
          { label: "About Us", href: "/about" },
          { label: "Careers", href: "/careers" },
          { label: "Blog / Insights", href: "/blog" },
        ],
      },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (label: string) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 200);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || openMenu
          ? "bg-background/60 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Renda
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleMouseEnter(group.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-4 py-2 text-[15px] font-medium transition-colors rounded-md ${
                  openMenu === group.label
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setOpenMenu(openMenu === group.label ? null : group.label)}
              >
                {group.label}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    openMenu === group.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown positioned under this nav item */}
              {openMenu === group.label && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  onMouseEnter={() => {
                    clearTimeout(timeoutRef.current);
                  }}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg p-5">
                    <div className={`flex gap-10 ${group.sections.length > 1 ? "" : ""}`}>
                      {group.sections.map((section, si) => (
                        <div key={si} className="min-w-[180px]">
                          {section.heading && (
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-3">
                              {section.heading}
                            </p>
                          )}
                          <ul className="space-y-0.5">
                            {section.links.map((link) => (
                              <li key={link.label}>
                                <a
                                  href={link.href}
                                  className="flex items-center gap-2.5 py-1.5 text-[15px] text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
                                  onClick={() => setOpenMenu(null)}
                                >
                                  {link.label}
                                  {link.badge && (
                                    <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/30 px-1.5 py-0.5 rounded">
                                      {link.badge}
                                    </span>
                                  )}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#"
            className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sign In
          </a>
          <a
            href="#waitlist"
            className="h-9 px-5 inline-flex items-center rounded-full bg-foreground text-background text-[15px] font-medium hover:opacity-90 transition-opacity"
          >
            Get Early Access
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>


      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            {navGroups.map((group) => (
              <div key={group.label}>
                <button
                  className="w-full flex items-center justify-between py-3 text-base font-medium text-foreground"
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === group.label ? null : group.label)
                  }
                >
                  {group.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded === group.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === group.label && (
                  <div className="pb-3 pl-3 space-y-4">
                    {group.sections.map((section, si) => (
                      <div key={si}>
                        {section.heading && (
                          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground mb-2">
                            {section.heading}
                          </p>
                        )}
                        <ul className="space-y-1">
                          {section.links.map((link) => (
                            <li key={link.label}>
                              <a
                                href={link.href}
                                className="flex items-center gap-2 py-2 text-[15px] text-foreground/80 hover:text-foreground transition-colors"
                                onClick={() => setMobileOpen(false)}
                              >
                                {link.label}
                                {link.badge && (
                                  <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/30 px-1.5 py-0.5 rounded">
                                    {link.badge}
                                  </span>
                                )}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <a href="#" className="text-base font-medium text-muted-foreground">
                Sign In
              </a>
              <a
                href="#waitlist"
                className="h-10 inline-flex items-center justify-center rounded-full bg-foreground text-background text-base font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
