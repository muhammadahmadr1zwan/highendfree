"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Eye, EyeOff, Shield, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate admin login success and redirect to dashboard
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link 
          href="/sellers" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-red-400 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to HighEnd Sellers
        </Link>

        <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-red-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Admin Portal
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Administrator Login</h1>
            <p className="text-slate-400">Access the admin dashboard</p>
          </div>

          {submitted ? (
            <div className="text-center py-12">
              <div className="text-red-400 text-4xl mb-4">🔐</div>
              <div className="font-medium text-lg mb-2 text-white">Authenticating...</div>
              <p className="text-sm text-slate-400 mb-4">Verifying admin credentials and redirecting to dashboard...</p>
              <div className="w-6 h-6 border-2 border-red-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="username" className="text-slate-300">Admin Username *</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => handleInputChange("username", e.target.value)}
                  placeholder="admin"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-slate-300">Admin Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Enter admin password"
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

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3"
              >
                Access Admin Portal
              </Button>
            </form>
          )}

          {!submitted && (
            <div className="text-center mt-6">
              <p className="text-xs text-slate-500">
                This portal is restricted to authorized administrators only.
              </p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
