"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Log in</h1>
        {!submitted ? (
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input type="email" required placeholder="you@example.com" className="w-full rounded-md border bg-background px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-2">Password</label>
              <input type="password" required placeholder="••••••••" className="w-full rounded-md border bg-background px-4 py-2" />
            </div>
            <button type="submit" className="w-full rounded-md bg-golden text-primary-foreground px-6 py-2 font-medium hover:bg-golden-dark">Log in</button>
            <p className="text-center text-sm text-muted-foreground">Don't have an account? <Link href="/auth/signup" className="text-golden hover:text-golden-dark">Sign up</Link></p>
          </form>
        ) : (
          <div className="rounded-lg border bg-surface-light p-6">
            <div className="font-medium">Mock login success.</div>
            <p className="text-sm text-muted-foreground mt-2">This is a placeholder. We will connect this to Supabase later.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 