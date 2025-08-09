"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Brand from "@/components/Brand";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Brand size="lg" />

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-foreground hover:text-golden transition-colors">
            About
          </Link>
          <Link href="/features" className="text-foreground hover:text-golden transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-foreground hover:text-golden transition-colors">
            Pricing
          </Link>
          <Link href="/resources" className="text-foreground hover:text-golden transition-colors">
            Resources
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground font-semibold px-4 py-2">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button variant="default" className="bg-golden hover:bg-golden-dark text-primary-foreground font-semibold px-4 py-2">
              Sign up
            </Button>
          </Link>
          <Link href="/sellers">
            <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground font-semibold px-4 py-2">
              Become a Seller
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;