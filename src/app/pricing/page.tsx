import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$0", perks: ["Community access", "Basic product list"], emphasized: false },
    { name: "Pro", price: "$9/mo", perks: ["Faster ticket response", "More products"], emphasized: true },
    { name: "Elite", price: "$19/mo", perks: ["Priority support", "Top-tier products"], emphasized: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-3">Pricing</h1>
        <p className="text-muted-foreground max-w-3xl">
          Choose a tier that matches your access level. All tiers include guided support and secure refunds.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                "p-6 rounded-xl border bg-surface-light hover:shadow-lg hover-lift transition-all " +
                (t.emphasized ? " ring-2 ring-golden bg-gradient-to-b from-golden/10 to-transparent" : "")
              }
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <div className="text-golden text-4xl font-extrabold mt-2">{t.price}</div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {t.perks.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button className="w-full bg-golden hover:bg-golden-dark text-primary-foreground">Select</Button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 