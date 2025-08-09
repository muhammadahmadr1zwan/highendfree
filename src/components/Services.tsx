import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Shield, Clock, Zap } from "lucide-react";

const items = [
  {
    icon: Package,
    title: "Curated products",
    description:
      "Hand‑picked items from verified sellers, organized by tier for quick discovery.",
  },
  {
    icon: Shield,
    title: "Verified process",
    description:
      "Transparent 8‑step flow with agent confirmation and review verification.",
  },
  {
    icon: Clock,
    title: "Fast refunds",
    description:
      "Full PayPal refunds within 24‑48 hours after your review is verified.",
  },
  {
    icon: Zap,
    title: "Lightning support",
    description:
      "Dedicated agents ready to help from ticket to refund, every step of the way.",
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Why choose </span>
            <span className="text-golden">HighEndFree</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A clean, trustworthy experience designed to make getting full refunds simple and fast.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card
              key={item.title}
              className="bg-surface-light border-border p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-golden/10 text-golden flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/pricing">
            <Button className="bg-golden hover:bg-golden-dark text-primary-foreground px-8">
              View pricing
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
} 