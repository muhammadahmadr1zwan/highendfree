"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Impact from "@/components/Impact";
import LogoCloud from "@/components/LogoCloud";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoCloud />
      <Services />
      <Features />
      <Impact />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
} 