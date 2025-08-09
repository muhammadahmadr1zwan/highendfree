"use client";

import SellerHeader from "@/components/sellers/SellerHeader";
import SellerFooter from "@/components/sellers/SellerFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Store, Package, Users, TrendingUp, Shield, Zap, Globe } from "lucide-react";

export default function SellersHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SellerHeader />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              HighEnd Sellers Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              The premium platform for ambitious sellers. Scale your business, connect with quality reviewers, and dominate your market.
            </p>
            
                         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
               <Link href="/sellers/auth/signup">
                 <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 text-lg">
                   Start Selling Now
                 </Button>
               </Link>
               <Link href="/sellers/dashboard">
                 <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold px-8 py-3 text-lg">
                   View Dashboard
                 </Button>
               </Link>
               <Link href="/admin">
                 <Button variant="outline" className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold px-8 py-3 text-lg">
                   Admin Portal
                 </Button>
               </Link>
             </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 text-center">
              <Store className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5,000+</div>
              <div className="text-sm text-slate-400">Elite Sellers</div>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 text-center">
              <Package className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">100K+</div>
              <div className="text-sm text-slate-400">Products Listed</div>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 text-center">
              <Users className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">250K+</div>
              <div className="text-sm text-slate-400">Premium Reviewers</div>
            </Card>
            <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 text-center">
              <TrendingUp className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">99.5%</div>
              <div className="text-sm text-slate-400">Success Rate</div>
            </Card>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose HighEnd Sellers Hub?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
                <Shield className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Premium Protection</h3>
                <p className="text-slate-300">
                  Advanced fraud protection, verified reviewers only, and guaranteed payment security for all transactions.
                </p>
              </Card>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
                <p className="text-slate-300">
                  Get your products reviewed within 24-48 hours. Our AI-powered matching system connects you instantly.
                </p>
              </Card>
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
                <Globe className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-slate-300">
                  Access reviewers from 50+ countries. Scale your business internationally with localized support.
                </p>
              </Card>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Sell With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Free to Start</h3>
                <p className="text-slate-300 mb-4">
                  No upfront costs or monthly fees. Start listing your products immediately and only pay for successful reviews.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Zero registration fees</li>
                  <li>• No monthly subscriptions</li>
                  <li>• Pay per successful review</li>
                </ul>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-500 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Premium Reviewers</h3>
                <p className="text-slate-300 mb-4">
                  Access our network of verified, high-quality reviewers who deliver authentic 5-star reviews.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Verified reviewer network</li>
                  <li>• Quality guarantee</li>
                  <li>• Fast review turnaround</li>
                </ul>
              </Card>
              
              <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Global Reach</h3>
                <p className="text-slate-300 mb-4">
                  Sell to customers worldwide with our international reviewer network spanning 50+ countries.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• 50+ countries covered</li>
                  <li>• Localized support</li>
                  <li>• Multi-language reviews</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Scale Your Business?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Join thousands of successful sellers already using our platform
            </p>
            <Link href="/sellers/auth/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 text-lg">
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <SellerFooter />
    </div>
  );
}
