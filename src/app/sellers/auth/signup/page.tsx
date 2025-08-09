"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, Eye, EyeOff, ArrowLeft } from "lucide-react";

export default function SellerSignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    discordName: "",
    countries: [] as string[],
    predictedProducts: "",
    agreeToTerms: false
  });

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Italy", "Spain", 
    "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", 
    "Finland", "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Greece", 
    "Portugal", "Ireland", "Australia", "New Zealand", "Japan", "South Korea", "Singapore", 
    "Hong Kong", "Taiwan", "India", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", 
    "Peru", "Venezuela", "South Africa", "Egypt", "Morocco", "Nigeria", "Kenya", "Ghana"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCountryChange = (value: string) => {
    if (!formData.countries.includes(value)) {
      setFormData(prev => ({
        ...prev,
        countries: [...prev.countries, value],
      }));
    }
  };

  const removeCountry = (country: string) => {
    setFormData(prev => ({
      ...prev,
      countries: prev.countries.filter(c => c !== country),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate signup success and redirect to dashboard
    setTimeout(() => {
      router.push("/sellers/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-2xl">
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
            <h1 className="text-3xl font-bold text-white mb-2">Create Your Seller Account</h1>
            <p className="text-slate-400">Join thousands of successful sellers on our premium platform</p>
          </div>

                     {submitted ? (
             <div className="text-center py-12">
               <div className="text-purple-400 text-4xl mb-4">🎉</div>
               <div className="font-medium text-lg mb-2 text-white">Welcome to HighEnd Sellers!</div>
               <p className="text-sm text-slate-400 mb-4">Your account has been created successfully. Redirecting to your dashboard...</p>
               <div className="w-6 h-6 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
             </div>
           ) : (
             <form onSubmit={handleSubmit} className="space-y-6">

            {/* Personal Information */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-purple-400">Personal Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-slate-300">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="lastName" className="text-slate-300">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-slate-300">Email Address *</Label>
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
                <Label htmlFor="phoneNumber" className="text-slate-300">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                  required
                />
              </div>

                             <div>
                 <Label htmlFor="discordName" className="text-slate-300">Discord Username *</Label>
                 <Input
                   id="discordName"
                   value={formData.discordName}
                   onChange={(e) => handleInputChange("discordName", e.target.value)}
                   placeholder="john_doe#1234"
                   className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400"
                   required
                 />
                 <p className="text-xs text-slate-400 mt-1">We'll use this to contact you about your products</p>
               </div>

               <div>
                 <Label htmlFor="predictedProducts" className="text-slate-300">Predicted Products to List *</Label>
                 <Select value={formData.predictedProducts} onValueChange={(value) => handleInputChange("predictedProducts", value)}>
                   <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                     <SelectValue placeholder="Select number of products" />
                   </SelectTrigger>
                   <SelectContent className="bg-slate-800 border-slate-600">
                     <SelectItem value="1-10">1-10 products</SelectItem>
                     <SelectItem value="11-25">11-25 products</SelectItem>
                     <SelectItem value="26-50">26-50 products</SelectItem>
                     <SelectItem value="51-100">51-100 products</SelectItem>
                     <SelectItem value="100+">100+ products</SelectItem>
                   </SelectContent>
                 </Select>
                 <p className="text-xs text-slate-400 mt-1">How many products do you plan to list for reviews?</p>
               </div>

               <div>
                 <Label className="text-slate-300">Countries Where You Have Products *</Label>
                 <Select onValueChange={handleCountryChange}>
                   <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white">
                     <SelectValue placeholder="Select countries where you sell products" />
                   </SelectTrigger>
                   <SelectContent className="bg-slate-800 border-slate-600">
                     {countries.map((country) => (
                       <SelectItem key={country} value={country} className="text-white hover:bg-slate-600">
                         {country}
                       </SelectItem>
                     ))}
                   </SelectContent>
                 </Select>
                 
                 {formData.countries.length > 0 && (
                   <div className="mt-3 flex flex-wrap gap-2">
                     {formData.countries.map((country) => (
                       <span
                         key={country}
                         className="inline-flex items-center gap-1 bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                       >
                         {country}
                         <button
                           type="button"
                           onClick={() => removeCountry(country)}
                           className="ml-1 hover:text-red-300"
                         >
                           ×
                         </button>
                       </span>
                     ))}
                   </div>
                 )}
                 <p className="text-xs text-slate-400 mt-1">Select all countries where you have products available</p>
               </div>
            </div>

            {/* Account Security */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-purple-400">Account Security</h2>
              
              <div>
                <Label htmlFor="password" className="text-slate-300">Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    placeholder="Create a strong password"
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

              <div>
                <Label htmlFor="confirmPassword" className="text-slate-300">Confirm Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    placeholder="Confirm your password"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-300"
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
                className="mt-1"
                required
              />
              <Label htmlFor="agreeToTerms" className="text-sm text-slate-400">
                I agree to the{" "}
                <Link href="/sellers/terms" className="text-purple-400 hover:text-purple-300">
                  Terms of Service
                </Link>
                {" "}and{" "}
                <Link href="/sellers/privacy" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3"
              disabled={formData.countries.length === 0}
            >
              Create Seller Account
                         </Button>
           </form>
           )}

           {!submitted && (
             <div className="text-center mt-6">
               <p className="text-slate-400">
                 Already have an account?{" "}
                 <Link href="/sellers/auth/login" className="text-purple-400 hover:text-purple-300 font-semibold">
                   Sign in
                 </Link>
               </p>
             </div>
           )}
        </Card>
      </div>
    </div>
  );
}
