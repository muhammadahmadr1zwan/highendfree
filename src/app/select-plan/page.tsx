"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

export default function SelectPlanPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const router = useRouter();

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: "$9.99",
      period: "month",
      description: "Perfect for getting started with product reviews",
      features: [
        "Up to 5 products per month",
        "Basic email support",
        "Standard review process",
        "PayPal refunds",
        "Community Discord access"
      ],
      icon: Star,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-500/30"
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19.99",
      period: "month",
      description: "Most popular choice for active reviewers",
      features: [
        "Up to 15 products per month",
        "Priority email support",
        "Faster review processing",
        "Exclusive product access",
        "Advanced analytics dashboard",
        "Priority Discord support"
      ],
      icon: Zap,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-500/30",
      popular: true
    },
    {
      id: "elite",
      name: "Elite",
      price: "$49.99",
      period: "month",
      description: "For serious reviewers and power users",
      features: [
        "Unlimited products per month",
        "24/7 priority support",
        "Instant review processing",
        "Exclusive high-value products",
        "Personal account manager",
        "Custom review strategies",
        "VIP Discord channel access"
      ],
      icon: Crown,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      // Here you would typically handle payment processing
      console.log("Selected plan:", selectedPlan);
      
      // Simulate payment processing
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your <span className="text-golden">Plan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Select the perfect plan for your review journey. All plans include full refunds for verified 5-star reviews.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={plan.id}
                className={`relative p-8 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                  selectedPlan === plan.id 
                    ? `${plan.bgColor} ${plan.borderColor} border-2` 
                    : 'bg-card/50 backdrop-blur-sm hover:-translate-y-1'
                }`}
                onClick={() => handlePlanSelect(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-golden text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${plan.bgColor} mb-4`}>
                    <IconComponent className={`h-8 w-8 ${plan.color}`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-golden">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    selectedPlan === plan.id 
                      ? 'bg-golden hover:bg-golden-dark text-primary-foreground' 
                      : 'bg-card border border-border hover:bg-accent'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Continue Button */}
        <div className="text-center">
          <Button 
            onClick={handleContinue}
            disabled={!selectedPlan}
            className="bg-golden hover:bg-golden-dark text-primary-foreground font-semibold px-8 py-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {selectedPlan ? 'Continue to Dashboard' : 'Select a Plan to Continue'}
          </Button>
          
          {selectedPlan && (
            <p className="text-sm text-muted-foreground mt-4">
              You'll be redirected to complete payment and access your dashboard.
            </p>
          )}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Can I change my plan later?</h3>
              <p className="text-sm text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time from your dashboard.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">What if I don't like it?</h3>
              <p className="text-sm text-muted-foreground">
                We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your subscription.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">How do refunds work?</h3>
              <p className="text-sm text-muted-foreground">
                After leaving a verified 5-star review, you'll receive a full PayPal refund within 24-48 hours.
              </p>
            </Card>
            <Card className="p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Is there a free trial?</h3>
              <p className="text-sm text-muted-foreground">
                Start with our 7-day free trial on any plan. No commitment required.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
