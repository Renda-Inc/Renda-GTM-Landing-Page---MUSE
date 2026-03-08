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
                <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.988a66.667 66.667 0 0 0-2.518-1.143c-1.482-27.307-16.403-42.94-41.457-43.1h-.34c-14.986 0-27.449 6.396-35.12 18.036l13.779 9.452c5.73-8.695 14.724-10.548 21.348-10.548h.229c8.249.053 14.474 2.452 18.503 7.129 2.932 3.405 4.893 8.111 5.864 14.05-7.314-1.243-15.224-1.626-23.68-1.14-23.82 1.371-39.134 15.24-38.378 34.734.381 9.834 5.076 18.323 13.22 23.916 6.874 4.72 15.727 7.06 24.927 6.592 12.147-.617 21.679-5.207 28.326-13.627 5.044-6.39 8.215-14.578 9.6-24.878 5.76 3.479 10.037 8.089 12.467 13.645 4.132 9.44 4.375 24.94-3.612 32.926-6.996 6.996-15.407 10.013-28.116 10.113-14.094-.111-24.76-4.633-31.712-13.438-6.46-8.185-9.823-19.867-9.992-34.716.169-14.848 3.532-26.53 9.992-34.715 6.952-8.806 17.618-13.328 31.712-13.438 14.21.111 25.038 4.67 32.17 13.549l10.194-10.63c-9.813-12.19-23.522-18.46-40.78-18.658h-.428c-17.14.197-30.738 6.467-40.398 18.628-8.494 10.697-12.9 25.168-13.09 43.015.19 17.847 4.596 32.318 13.09 43.015 9.66 12.161 23.258 18.43 40.398 18.628h.428c16.121-.126 28.028-4.387 37.503-13.424 12.03-11.486 12.376-28.57 7.203-40.378-3.712-8.47-10.534-15.334-19.71-19.863zM96.89 130.966c-10.198.576-20.782-4.017-21.292-14.444-.377-7.708 5.478-16.3 22.522-17.28 1.986-.114 3.927-.17 5.826-.17 6.27 0 12.15.736 17.528 2.125-1.996 24.225-14.19 29.2-24.584 29.769z" /></svg>
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
