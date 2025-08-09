"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function TicketPage() {
  const params = useSearchParams();
  const [submitted, setSubmitted] = useState(false);

  const defaults = {
    productId: params?.get("productId") ?? "",
    title: params?.get("title") ?? "",
    agent: params?.get("agent") ?? "",
    amazonProfile: "",
    paypal: "",
    notes: "",
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
        <h1 className="text-4xl font-bold mb-6">Create Ticket</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Product</label>
              <input
                defaultValue={defaults.title}
                placeholder="Product title"
                className="w-full rounded-md border bg-background px-4 py-2"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2">Agent</label>
                <input
                  defaultValue={defaults.agent}
                  placeholder="@Agent"
                  className="w-full rounded-md border bg-background px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Product ID</label>
                <input
                  defaultValue={defaults.productId}
                  placeholder="e.g., p-1001"
                  className="w-full rounded-md border bg-background px-4 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2">Amazon Profile Link</label>
              <input
                defaultValue={defaults.amazonProfile}
                placeholder="https://www.amazon.com/gp/profile/…"
                className="w-full rounded-md border bg-background px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">PayPal Username</label>
              <input
                defaultValue={defaults.paypal}
                placeholder="your-email@example.com"
                className="w-full rounded-md border bg-background px-4 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Notes</label>
              <textarea
                defaultValue={defaults.notes}
                placeholder="Any special instructions or details…"
                className="w-full rounded-md border bg-background px-4 py-2 min-h-[120px]"
              />
            </div>
            <button type="submit" className="rounded-md bg-golden text-primary-foreground px-6 py-2 font-medium hover:bg-golden-dark">
              Submit Ticket
            </button>
          </form>
        ) : (
          <div className="rounded-lg border bg-surface-light p-6">
            <h2 className="text-2xl font-semibold">Ticket Submitted</h2>
            <p className="text-muted-foreground mt-2">An agent will review your request and follow up shortly in your ticket thread. You can continue browsing products.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 