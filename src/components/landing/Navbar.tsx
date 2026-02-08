import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">
          Renda
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#alfie" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Alfie
          </a>
          <a href="#company" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Company
          </a>
          <a href="#vision" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Vision
          </a>
        </div>

        <a
          href="#waitlist"
          className="hidden md:inline-flex h-9 px-5 items-center rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Join the Waitlist
        </a>
      </div>
    </nav>
  );
}
