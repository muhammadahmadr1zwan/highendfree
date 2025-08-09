import { Card } from "@/components/ui/card";
import { Shield, Zap, Users, TrendingUp, Smartphone, Globe, Clock, Award } from "lucide-react";

const features = [
  { icon: Shield, title: "Secure & private", desc: "Your details are protected and only shared with verified agents." },
  { icon: Zap, title: "Quick processing", desc: "Typical refund turnaround within 24–48 hours after verification." },
  { icon: Users, title: "Agent guidance", desc: "Helpful support from ticket creation through refund." },
  { icon: TrendingUp, title: "Proven flow", desc: "A repeatable process designed to build trust and results." },
  { icon: Smartphone, title: "Mobile‑friendly", desc: "Use the platform comfortably on any device." },
  { icon: Globe, title: "Global access", desc: "Available to reviewers from many regions worldwide." },
  { icon: Clock, title: "Flexible pace", desc: "Pick products and review at your convenience." },
  { icon: Award, title: "Quality offers", desc: "Products are vetted and curated by our team." },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Platform </span>
            <span className="text-golden">features</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Simple, reliable, and designed for a clean reviewer experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="bg-surface-light border-border p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-xl bg-golden/10 text-golden"><f.icon className="w-5 h-5" /></div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 