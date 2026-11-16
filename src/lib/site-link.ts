// Prefix an internal path with the Vite deployment base so plain <a>
// links stay inside the deployment subpath (e.g. GitHub Pages) instead
// of escaping to the domain root. Hash-only and external links pass
// through unchanged. Router <Link>s handle the base themselves and do
// not need this.
export function siteLink(href: string): string {
  if (!href.startsWith("/")) return href;
  const base = import.meta.env.BASE_URL;
  if (base === "/") return href;
  return base + href.slice(1);
}
