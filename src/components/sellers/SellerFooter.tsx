"use client";

import Link from "next/link";
import { Store, Twitter, Linkedin, Mail } from "lucide-react";

const SellerFooter = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/sellers" className="flex items-center gap-2">
              <Store className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HighEnd Sellers
              </span>
            </Link>
            <p className="text-slate-400 text-sm">
              The premium platform for ambitious sellers to scale their business and connect with quality reviewers.
            </p>
            <div className="flex gap-4">
              <Twitter className="h-5 w-5 text-slate-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-slate-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <Link href="/sellers/dashboard" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Dashboard
              </Link>
              <Link href="/sellers/products" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                My Products
              </Link>
              <Link href="/sellers/analytics" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Analytics
              </Link>
              <Link href="/sellers/reviews" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Reviews
              </Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <Link href="/sellers/support" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Help Center
              </Link>
              <Link href="/sellers/docs" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Documentation
              </Link>
              <Link href="/sellers/contact" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/sellers/api" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                API Reference
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <Link href="/sellers/privacy" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/sellers/terms" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sellers/seller-agreement" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Seller Agreement
              </Link>
              <Link href="/sellers/compliance" className="block text-slate-400 hover:text-purple-400 transition-colors text-sm">
                Compliance
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2024 HighEnd Sellers Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default SellerFooter;
