import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Features</h1>
        <p className="text-muted-foreground max-w-3xl">Discover how HighEndFree helps you earn full Amazon refunds with a transparent and safe process. Track tickets, verify reviews, and get guided by agents.</p>
        <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <li className="p-6 rounded-lg border bg-surface-light">Tier-based product access</li>
          <li className="p-6 rounded-lg border bg-surface-light">Agent-guided ticketing</li>
          <li className="p-6 rounded-lg border bg-surface-light">Refund via PayPal once verified</li>
          <li className="p-6 rounded-lg border bg-surface-light">Secure, step-by-step flow</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
} 