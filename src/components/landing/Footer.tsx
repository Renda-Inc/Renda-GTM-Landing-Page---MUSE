export default function Footer() {
  return (
    <footer id="company" className="border-t border-border py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div>
            <p className="text-xl font-bold text-foreground">Renda</p>
            <p className="mt-2 text-sm text-muted-foreground">
              The AI-native bank.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Alfie AI
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Individuals</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Businesses</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Platform</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-xs text-muted-foreground">
          © {new Date().getFullYear()} Renda. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
