"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    // Simulate signup success and redirect to plan selection
    setTimeout(() => {
      router.push("/select-plan");
    }, 2000);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-md">
        <h1 className="text-3xl font-bold mb-6">Create your account</h1>
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
            <div>
              <label className="block text-sm mb-2">Confirm Password</label>
              <input type="password" required placeholder="••••••••" className="w-full rounded-md border bg-background px-4 py-2" />
            </div>
            <button type="submit" className="w-full rounded-md bg-golden text-primary-foreground px-6 py-2 font-medium hover:bg-golden-dark">Sign up</button>
            <p className="text-center text-sm text-muted-foreground">Already have an account? <Link href="/auth/login" className="text-golden hover:text-golden-dark">Log in</Link></p>
          </form>
        ) : (
          <div className="rounded-lg border bg-card p-6 text-center">
            <div className="text-golden text-4xl mb-4">🎉</div>
            <div className="font-medium text-lg mb-2">Welcome to HighEnd Free!</div>
            <p className="text-sm text-muted-foreground mb-4">Your account has been created successfully. Redirecting to plan selection...</p>
            <div className="w-6 h-6 border-2 border-golden border-t-transparent rounded-full animate-spin mx-auto"></div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 