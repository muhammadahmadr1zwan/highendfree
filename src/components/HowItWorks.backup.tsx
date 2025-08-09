import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, MessageSquarePlus, ShoppingCart, User, Link as LinkIcon, Star, BadgeCheck, Wallet } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse Available Products",
    details: "Check your tier's product channel to see what items are currently available. Note the agent who posted the product — you'll need this for your ticket.",
    icon: Search,
  },
  {
    id: 2,
    title: "Open a Ticket",
    details: "Go to the agent's ticket channel and click Create a Ticket. Wait for the agent to confirm your ticket before continuing.",
    icon: MessageSquarePlus,
  },
  {
    id: 3,
    title: "Request the Product",
    details: "Tell the agent which item you're interested in. They'll confirm availability and share any special instructions (like adding a photo or video).",
    icon: BadgeCheck,
  },
  {
    id: 4,
    title: "Share Your Details",
    details: "Provide your Amazon profile link and PayPal username in the ticket for refund processing.",
    icon: User,
  },
  {
    id: 5,
    title: "Purchase the Product",
    details: "Once approved, buy the item on Amazon at full price and wait for it to arrive before reviewing.",
    icon: ShoppingCart,
  },
  {
    id: 6,
    title: "Leave a 5‑Star Review",
    details: "After receiving your order, wait at least 3 days, post a 5‑star review, and include photos/videos if requested. Only submit after Amazon confirms your review is live.",
    icon: Star,
  },
  {
    id: 7,
    title: "Submit Review Link",
    details: "Send your live review link in the ticket. The agent will verify it.",
    icon: LinkIcon,
  },
  {
    id: 8,
    title: "Get Your Refund",
    details: "Once verified, your full refund will be sent to your PayPal account — and you keep the product!",
    icon: Wallet,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">How </span>
            <span className="text-golden">HighEndFree</span>
            <span className="text-foreground"> Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Earn full Amazon refunds in exchange for verified 5‑star reviews. Follow the simple steps below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <Card key={step.id} className="bg-surface-light border-border p-6 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-golden/10 text-golden">
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className="bg-golden text-primary-foreground">{step.id}</Badge>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.details}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/ticket">
            <Button className="bg-golden hover:bg-golden-dark text-primary-foreground px-8 py-3 transition-colors">
              Create a Ticket
            </Button>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need help? Open a support ticket or message a staff member.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
