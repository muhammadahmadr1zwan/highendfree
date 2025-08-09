import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-6">Pricing</h1>
        <p className="text-muted-foreground max-w-3xl">Choose a tier that matches your access level. All tiers include guided support and secure refunds.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Starter", price: "$0", perks: ["Community access", "Basic product list"] },
            { name: "Pro", price: "$9/mo", perks: ["Faster ticket response", "More products"] },
            { name: "Elite", price: "$19/mo", perks: ["Priority support", "Top-tier products"] },
          ].map((t) => (
            <div key={t.name} className="p-6 rounded-lg border bg-surface-light">
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="text-golden text-3xl font-bold mt-2">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 