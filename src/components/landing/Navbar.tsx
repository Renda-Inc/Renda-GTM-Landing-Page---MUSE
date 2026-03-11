import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import rendaLogoBlack from "@/assets/renda-logo-black.png";
import rendaLogoWhite from "@/assets/renda-logo-white.png";

const navLinks = [
  { label: "Product", href: "/personal-banking" },
  { label: "Why Renda", href: "/why-renda" },
  { label: "Platform", href: "#infrastructure" },
  { label: "Company", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-4 py-2 text-[15px] font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-foreground/60 hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
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
