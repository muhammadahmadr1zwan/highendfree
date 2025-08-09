import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Brand from "@/components/Brand";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Brand size="md" className="mb-4" />
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Access premium product opportunities with agent-guided support. Earn full refunds for verified reviews through a transparent process.
            </p>
            <a href="/products">
              <Button className="bg-golden hover:bg-golden-dark text-primary-foreground">
                Start Free Today
              </Button>
            </a>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <div className="space-y-3 text-muted-foreground">
              <a href="/about" className="block hover:text-golden transition-colors">How it Works</a>
              <a href="/products" className="block hover:text-golden transition-colors">Browse Products</a>
              <a href="/ticket" className="block hover:text-golden transition-colors">Create Ticket</a>
              <a href="/resources" className="block hover:text-golden transition-colors">Guides & Support</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <div className="space-y-3 text-muted-foreground">
              <a href="/about" className="block hover:text-golden transition-colors">About Us</a>
              <a href="/pricing" className="block hover:text-golden transition-colors">Pricing</a>
              <a href="/resources" className="block hover:text-golden transition-colors">Support</a>
            </div>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {year} HighEndFree. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/resources" className="hover:text-golden transition-colors">Guidelines</a>
            <a href="/about" className="hover:text-golden transition-colors">Process</a>
            <a href="/pricing" className="hover:text-golden transition-colors">Tiers</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;