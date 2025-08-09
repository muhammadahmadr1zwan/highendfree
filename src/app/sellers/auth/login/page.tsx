"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Store, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SellerLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Seller login:", formData);
    alert("Welcome back to HighEnd Sellers!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link 
          href="/sellers" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to HighEnd Sellers
        </Link>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <Link href="/sellers" className="inline-flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                HighEnd Sellers
              </span>
            </Link>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400">Sign in to your seller account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-slate-300">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@example.com"
                className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                required
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-slate-300">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => handleInputChange("password", e.target.value)}
                  placeholder="Enter your password"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) => handleInputChange("rememberMe", e.target.checked)}
                  className="text-purple-600"
                />
                <Label htmlFor="rememberMe" className="text-sm text-slate-400">
                  Remember me
                </Label>
              </div>
              <Link 
                href="/sellers/auth/forgot-password" 
                className="text-sm text-purple-400 hover:text-purple-300"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-slate-600"></div>
            <span className="px-4 text-slate-400 text-sm">or</span>
            <div className="flex-1 border-t border-slate-600"></div>
          </div>

          {/* Social Login Options */}
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Continue with Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Continue with Microsoft
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-slate-400">
              Don't have an account?{" "}
              <Link href="/sellers/auth/signup" className="text-purple-400 hover:text-purple-300 font-semibold">
                Create seller account
              </Link>
            </p>
          </div>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            Need help?{" "}
            <Link href="/sellers/support" className="text-purple-400 hover:text-purple-300">
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
