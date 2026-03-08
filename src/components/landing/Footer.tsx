import { Instagram, Linkedin } from "lucide-react";

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
            <p className="mt-3 text-base text-surface-dark-foreground/60 max-w-xs leading-relaxed">
              The AI-native bank. Intelligence-first financial infrastructure for individuals and businesses.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://threads.net" target="_blank" rel="noopener noreferrer" className="text-surface-dark-foreground/50 hover:text-surface-dark-foreground transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.29 3.276-1.03 1.28-2.56 1.96-4.55 2.026-1.496-.05-2.853-.547-3.819-1.4-1.022-.904-1.583-2.134-1.583-3.462 0-2.75 2.112-4.702 5.134-4.757 1.16-.02 2.216.142 3.15.484-.046-1.574-.475-2.765-1.279-3.538-.872-.84-2.163-1.267-3.836-1.267l-.01-.002c-1.233 0-2.727.32-3.852 1.38l-1.39-1.508C5.68 1.77 7.644 1.093 9.78 1.073h.01c2.098 0 3.813.588 5.093 1.747 1.216 1.102 1.916 2.67 2.08 4.66.71.265 1.36.618 1.94 1.062 1.089.833 1.892 1.953 2.326 3.238.455 1.348.503 3.089-.452 4.827-1.076 1.956-2.963 3.254-5.604 3.86-1.048.24-2.143.353-3.263.357h-.04l.316.176zm-1.862-8.083c-1.837.04-3.017 1.137-3.017 2.643 0 .753.295 1.403.855 1.883.588.504 1.446.773 2.48.806 1.417-.048 2.455-.488 3.084-1.31.476-.62.79-1.453.94-2.496a8.426 8.426 0 0 0-4.342-1.526z" /></svg>
              </a>
            </div>
          </div>

          {/* Link columns — right side, 3-4 per row */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-surface-dark-foreground/40 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2 text-base text-surface-dark-foreground/60">
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
        <div className="mt-16 pt-8 border-t border-surface-dark-foreground/10 text-sm text-surface-dark-foreground/40">
          © {new Date().getFullYear()} Renda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
