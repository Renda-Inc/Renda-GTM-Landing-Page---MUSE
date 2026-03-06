const footerColumns = [
  {
    heading: "Alfie AI",
    links: [
      { label: "How Alfie Works", href: "#alfie" },
      { label: "Alfie for Individuals", href: "#" },
      { label: "Alfie for Businesses", href: "#" },
      { label: "Alfie for Fintechs & Platforms", href: "#" },
      { label: "Alfie Platform", href: "#" },
    ],
  },
  {
    heading: "Banking",
    links: [
      { label: "Personal Accounts", href: "#" },
      { label: "Cards & Payments", href: "#" },
      { label: "Savings & Goals", href: "#" },
      { label: "Peer-to-Peer Payments", href: "#" },
      { label: "Interac", href: "#" },
    ],
  },
  {
    heading: "Business",
    links: [
      { label: "Business Accounts", href: "#" },
      { label: "Expense Tracking", href: "#" },
      { label: "Bookkeeping Support", href: "#" },
      { label: "Tax Readiness", href: "#" },
      { label: "Financial Insights", href: "#" },
    ],
  },
  {
    heading: "Why Renda",
    links: [
      { label: "Our Philosophy", href: "#philosophy" },
      { label: "Signal Over Noise", href: "#signals" },
      { label: "Trust & Responsibility", href: "#trust" },
      { label: "AI-Native Banking", href: "#belief" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Alfie as Infrastructure", href: "#infrastructure" },
      { label: "Developer & Integration", href: "#" },
      { label: "Security & Compliance", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "#company" },
      { label: "Careers", href: "#" },
      { label: "Blog / Insights", href: "/blog" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help", href: "/help" },
      { label: "Contact Us", href: "/help#contact" },
      { label: "Refer a Friend", href: "/help#refer" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Compliance & Disclosures", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="company" className="bg-surface-dark text-surface-dark-foreground py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main layout: brand left, links right */}
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          {/* Brand / description — left side */}
          <div className="lg:w-1/3 shrink-0">
            <p className="text-xl font-bold">Renda</p>
            <p className="mt-3 text-sm text-surface-dark-foreground/60 max-w-xs leading-relaxed">
              The AI-native bank. Intelligence-first financial infrastructure for individuals and businesses.
            </p>
          </div>

          {/* Link columns — right side, 3-4 per row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-surface-dark-foreground/40 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2 text-sm text-surface-dark-foreground/60">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="hover:text-surface-dark-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-surface-dark-foreground/10 text-xs text-surface-dark-foreground/40">
          © {new Date().getFullYear()} Renda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
