import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import rendaLogoBlack from "@/assets/renda-logo-black.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";

const navDropdowns = [
  {
    label: "Product",
    href: "/personal-banking",
    items: [
      { label: "Personal Banking", href: "/personal-banking", desc: "Smart spending & savings accounts" },
      { label: "The Renda Card", href: "/personal-banking#card", desc: "Zero-fee card powered by AI" },
      { label: "Savings & Goals", href: "/personal-banking#savings", desc: "Automated savings with Alfie" },
      { label: "Payments", href: "/personal-banking#payments", desc: "Send & receive money instantly" },
    ],
  },
  {
    label: "Why Renda",
    href: "/why-renda",
    items: [
      { label: "Our Philosophy", href: "/why-renda#philosophy", desc: "Why we built Renda differently" },
      { label: "Signal Over Noise", href: "/why-renda#signals", desc: "Cutting through financial clutter" },
      { label: "AI-Native Banking", href: "/why-renda#belief", desc: "Built AI-first, not bolted on" },
      { label: "Trust & Responsibility", href: "/why-renda#trust", desc: "Regulated, secure, transparent" },
    ],
  },
  {
    label: "Platform",
    href: "#infrastructure",
    items: [
      { label: "Alfie as Infrastructure", href: "#infrastructure", desc: "The intelligence layer behind Renda" },
      { label: "Developer & Integration", href: "#", desc: "APIs and partner ecosystem" },
      { label: "Security & Compliance", href: "#", desc: "Enterprise-grade protection" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    items: [
      { label: "About Us", href: "/about", desc: "Our story and mission" },
      { label: "Careers", href: "/careers", desc: "Join the team building the future" },
      { label: "Blog & Insights", href: "/blog", desc: "Thoughts on AI and fintech" },
      { label: "Help Centre", href: "/help", desc: "Get support and answers" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
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
                className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 inline-flex items-center gap-1 ${
                  scrolled
                    ? "text-foreground/60 hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {dropdown.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === dropdown.label ? "rotate-180" : ""}`} />
              </button>

              {activeDropdown === dropdown.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-xl p-2 min-w-[280px]">
                    {dropdown.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-accent transition-colors duration-150"
                      >
                        <span className="text-sm font-semibold text-foreground">{item.label}</span>
                        <span className="text-xs text-muted-foreground">{item.desc}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#waitlist"
            className={`group h-10 px-6 inline-flex items-center gap-2 rounded-full text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200 ${
              scrolled
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
            }`}
          >
            Join Waitlist
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
                  className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileExpanded(mobileExpanded === dropdown.label ? null : dropdown.label)}
                >
                  {dropdown.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === dropdown.label ? "rotate-180" : ""}`} />
                </button>
                {mobileExpanded === dropdown.label && (
                  <div className="pl-4 pb-2 space-y-1">
                    {dropdown.items.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-border">
              <a
                href="#waitlist"
                className="h-11 inline-flex items-center justify-center gap-2 w-full rounded-full bg-foreground text-background text-base font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
