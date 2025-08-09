"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-surface-light"></div>
      
      {/* Golden glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-golden/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-golden/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-foreground">Earn Full </span>
          <span className="text-golden">Amazon Refunds</span>
          <br />
          <span className="text-foreground">for Verified </span>
          <span className="bg-gradient-to-r from-golden to-golden-light bg-clip-text text-transparent">
            5-Star Reviews
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Follow a simple 8-step process: browse products, open a ticket, post your review when its live, and receive a full PayPal refund.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/auth/signup">
            <Button 
              className="bg-golden hover:bg-golden-dark text-primary-foreground font-semibold px-8 py-4 text-lg shadow-golden"
            >
              Sign Up
            </Button>
          </Link>
          <Link href="https://discord.gg/xVTJvQr6aq" target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline" 
              className="border-golden text-golden hover:bg-golden hover:text-primary-foreground px-8 py-4 text-lg"
            >
              Join Discord
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">1000+</div>
            <div className="text-muted-foreground">Products Available</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">8-Step</div>
            <div className="text-muted-foreground">Simple Process</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-golden">PayPal</div>
            <div className="text-muted-foreground">Fast Refunds</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
