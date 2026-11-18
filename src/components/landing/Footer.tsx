import { Instagram, Linkedin, Facebook } from "lucide-react";
import { siteLink } from "@/lib/site-link";
import rendaLogoWhite from "@/assets/renda-logo-white.png";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const footerColumns = [
  {
    heading: "Personal Banking",
    links: [
      { label: "Smart Accounts", href: "/personal-banking" },
      { label: "Cards & Payments", href: "/personal-banking#cards-payments" },
      { label: "RenPay", href: "/renpay" },
      { label: "Savings & Goals", href: "/personal-banking#savings-goals" },
      { label: "Interac", href: "/personal-banking#interac" },
    ],
  },
  {
    heading: "Business Banking",
    links: [
      { label: "Renda Business", href: "/business-banking" },
      { label: "Business Accounts", href: "/business-banking" },
      { label: "Expense Tracking", href: "/business-banking" },
      { label: "Bookkeeping Support", href: "/business-banking" },
      { label: "Tax Readiness", href: "/business-banking" },
      { label: "Financial Insights", href: "/business-banking" },
    ],
  },
  {
    heading: "Alfie",
    links: [
      { label: "How Alfie Works", href: "/alfie" },
      { label: "Alfie for Individuals", href: "/alfie#individuals" },
      { label: "Alfie for Business", href: "/alfie#business" },
      { label: "Alfie for Enterprise & Government", href: "/alfie#enterprise-government" },
      { label: "Alfie Agents", href: "/alfie#agents" },
    ],
  },
  {
    heading: "Why Renda",
    links: [
      { label: "Why Renda Exists", href: "/why-renda#exists" },
      { label: "Our Philosophy", href: "/why-renda#philosophy" },
      { label: "Signal Over Noise", href: "/why-renda#signals" },
      { label: "Intelligence at the Core", href: "/why-renda#belief" },
      { label: "Trust & Responsibility", href: "/why-renda#trust" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog & Insights", href: "/blog" },
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
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use & Compliance", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      id="company"
      className="bg-foreground text-background py-16 lg:py-20"
      style={{ fontFamily: SF_PRO }}
    >
      <div className="w-full mx-auto px-8 lg:px-16 xl:px-24 2xl:px-32">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 xl:gap-24 justify-center">
          <div className="lg:max-w-xs shrink-0">
            <a href={import.meta.env.BASE_URL}>
              <img src={rendaLogoWhite} alt="Renda" className="h-[42px] w-auto" />
            </a>
            <p className="mt-3 text-base text-background/80 max-w-xs leading-relaxed">
              The Intelligence-first financial infrastructure for individuals and businesses.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/70 hover:text-background transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-background/70 hover:text-background transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" /></svg>
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-background/70 hover:text-background transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-background/70 hover:text-background transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-background/70 hover:text-background transition-colors">
                  <Facebook size={20} />
                </a>
              </div>

              {/* QR Code — download the app */}
              <div className="bg-background p-2 rounded-xl w-32 h-32 self-start">
                <img
                  src={`${import.meta.env.BASE_URL}qr-download.svg`}
                  alt="QR code to download the Renda app"
                  className="w-full h-full"
                  width={128}
                  height={128}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-background">Scan to download the Renda app.</p>
                <p className="text-xs text-background/70 mt-1">Available on iOS and Android.</p>
              </div>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 xl:gap-x-16 gap-y-16 group/cols max-w-4xl">
            {footerColumns.map((col) => (
              <div key={col.heading}>
                <p className="text-base font-semibold text-background mb-4 whitespace-nowrap">
                  {col.heading}
                </p>
                {col.links.length > 0 && (
                  <ul className="space-y-2 text-[17px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={siteLink(link.href)}
                          className="text-background transition-colors duration-200 group-hover/cols:text-background/60 hover:!text-background"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 text-sm text-background/60 flex flex-wrap items-center justify-between gap-3">
          <span>© {new Date().getFullYear()} Renda. All rights reserved.</span>
          <span className="flex items-center gap-5">
            <a href={siteLink("/sample")} className="text-background/70 transition-colors hover:text-background">
              Sample page
            </a>
            <a href={siteLink("/sample-2")} className="text-background/70 transition-colors hover:text-background">
              Sample 2
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
