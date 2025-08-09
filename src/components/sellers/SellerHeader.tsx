"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Store, Menu, X } from "lucide-react";
import { useState } from "react";

const SellerHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/sellers" className="flex items-center gap-2">
          <Store className="h-8 w-8 text-purple-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            HighEnd Sellers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/sellers/dashboard" className="text-slate-300 hover:text-purple-400 transition-colors">
            Dashboard
          </Link>
          <Link href="/sellers/products" className="text-slate-300 hover:text-purple-400 transition-colors">
            My Products
          </Link>
          <Link href="/sellers/analytics" className="text-slate-300 hover:text-purple-400 transition-colors">
            Analytics
          </Link>
          <Link href="/sellers/reviews" className="text-slate-300 hover:text-purple-400 transition-colors">
            Reviews
          </Link>
          <Link href="/sellers/support" className="text-slate-300 hover:text-purple-400 transition-colors">
            Support
          </Link>
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/sellers/auth/login" className="text-slate-300 hover:text-purple-400 transition-colors text-sm">
            Log in
          </Link>
          <Link href="/sellers/auth/signup">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 py-2">
              Sign up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-300 hover:text-purple-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <Link 
              href="/sellers/dashboard" 
              className="block text-slate-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              href="/sellers/products" 
              className="block text-slate-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Products
            </Link>
            <Link 
              href="/sellers/analytics" 
              className="block text-slate-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </Link>
            <Link 
              href="/sellers/reviews" 
              className="block text-slate-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Reviews
            </Link>
            <Link 
              href="/sellers/support" 
              className="block text-slate-300 hover:text-purple-400 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Support
            </Link>
            <div className="flex flex-col gap-3 pt-4 border-t border-purple-500/20">
              <Link href="/sellers/auth/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                  Log in
                </Button>
              </Link>
              <Link href="/sellers/auth/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SellerHeader;
