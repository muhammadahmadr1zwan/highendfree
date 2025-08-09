"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, ShoppingCart, Package, CheckCircle, Clock, Eye } from "lucide-react";

interface RequestedProduct {
  id: string;
  title: string;
  price: string;
  tier: string;
  agent: string;
  image: string;
  rating: number;
  requestDate: string;
  status: "pending" | "approved" | "denied";
}

export default function DashboardProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTier, setFilterTier] = useState("all");
  const [activeTab, setActiveTab] = useState<"available" | "requested">("available");
  const [requestedProducts, setRequestedProducts] = useState<RequestedProduct[]>([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState<string | null>(null);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = filterTier === "all" || product.tier === filterTier;
    return matchesSearch && matchesTier;
  });

  const filteredRequestedProducts = requestedProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTier = filterTier === "all" || product.tier === filterTier;
    return matchesSearch && matchesTier;
  });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Starter": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Pro": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Elite": return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "approved": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "denied": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const handleRequestProduct = (product: any) => {
    const requestedProduct: RequestedProduct = {
      ...product,
      requestDate: new Date().toLocaleDateString(),
      status: "pending"
    };

    setRequestedProducts(prev => [...prev, requestedProduct]);
    setShowSuccessMessage(product.id);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(null);
    }, 3000);
  };

  const isProductRequested = (productId: string) => {
    return requestedProducts.some(p => p.id === productId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-8 w-8 text-golden" />
            <h1 className="text-4xl font-bold">Products</h1>
          </div>
          <p className="text-muted-foreground max-w-3xl">
            Browse available products and track your requests. Request any product to start your review process and get full refunds upon verified 5-star reviews.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-golden/20">
            <div className="flex items-center gap-3">
              <Package className="h-8 w-8 text-golden" />
              <div>
                <div className="text-2xl font-bold text-golden">{products.length}</div>
                <div className="text-sm text-muted-foreground">Available Products</div>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-green-500/20">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-green-400">{products.filter(p => p.tier === "Starter").length}</div>
                <div className="text-sm text-muted-foreground">Starter Tier</div>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-blue-500/20">
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-8 w-8 text-blue-400" />
              <div>
                <div className="text-2xl font-bold text-blue-400">{products.filter(p => p.tier === "Pro").length}</div>
                <div className="text-sm text-muted-foreground">Pro Tier</div>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-purple-500/20">
            <div className="flex items-center gap-3">
              <Clock className="h-8 w-8 text-purple-400" />
              <div>
                <div className="text-2xl font-bold text-purple-400">{requestedProducts.length}</div>
                <div className="text-sm text-muted-foreground">Requested Products</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border mb-8">
          <button
            onClick={() => setActiveTab("available")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "available"
                ? "border-b-2 border-golden text-golden"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Available Products ({products.length})
          </button>
          <button
            onClick={() => setActiveTab("requested")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "requested"
                ? "border-b-2 border-golden text-golden"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Requested Products ({requestedProducts.length})
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={`Search ${activeTab === "available" ? "available" : "requested"} products...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={filterTier} onValueChange={setFilterTier}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="Starter">Starter</SelectItem>
                <SelectItem value="Pro">Pro</SelectItem>
                <SelectItem value="Elite">Elite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-medium">Product requested successfully! Check the "Requested Products" tab to track your request.</span>
          </div>
        )}

        {/* Products Grid */}
        {activeTab === "available" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = "https://source.unsplash.com/400x300/?product,tech";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getTierColor(product.tier)} border`}>
                      {product.tier}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-black/70 text-white border-none">
                      {product.agent}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight mb-2">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-golden">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <strong>How it works:</strong>
                    </div>
                    <ol className="text-xs text-muted-foreground space-y-1">
                      <li>1. Request this product by clicking the button below</li>
                      <li>2. Receive product details and purchase link</li>
                      <li>3. Purchase and receive the product</li>
                      <li>4. Leave a verified 5-star review</li>
                      <li>5. Get full refund within 24-48 hours</li>
                    </ol>
                  </div>

                  {isProductRequested(product.id) ? (
                    <Button 
                      disabled 
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold cursor-not-allowed"
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Product Requested
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleRequestProduct(product)}
                      className="w-full bg-golden hover:bg-golden-dark text-primary-foreground font-semibold"
                    >
                      Request Product
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Requested Products Grid */}
        {activeTab === "requested" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRequestedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={product.image}
                    alt={product.title}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      img.onerror = null;
                      img.src = "https://source.unsplash.com/400x300/?product,tech";
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className={`${getTierColor(product.tier)} border`}>
                      {product.tier}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className={`${getStatusColor(product.status)} border`}>
                      {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight mb-2">{product.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-golden">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Requested on: {product.requestDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>Status: {product.status.charAt(0).toUpperCase() + product.status.slice(1)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      <strong>Next steps:</strong>
                    </div>
                    <ol className="text-xs text-muted-foreground space-y-1">
                      <li>1. Wait for approval from our team</li>
                      <li>2. Receive product details and purchase link</li>
                      <li>3. Purchase and receive the product</li>
                      <li>4. Leave a verified 5-star review</li>
                      <li>5. Get full refund within 24-48 hours</li>
                    </ol>
                  </div>

                  <Button 
                    disabled 
                    className="w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold cursor-not-allowed"
                  >
                    {product.status === "pending" && "Pending Approval"}
                    {product.status === "approved" && "Approved - Check Email"}
                    {product.status === "denied" && "Request Denied"}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* No Results */}
        {activeTab === "available" && filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No available products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filter settings.
            </p>
          </div>
        )}

        {activeTab === "requested" && filteredRequestedProducts.length === 0 && (
          <div className="text-center py-12">
            <Clock className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No requested products found</h3>
            <p className="text-muted-foreground">
              You haven't requested any products yet. Browse available products and click "Request Product" to get started.
            </p>
          </div>
        )}

        {/* Help Section */}
        <Card className="mt-12 p-8 bg-gradient-to-r from-golden/10 to-golden/5 border-golden/20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is here to guide you through the process and answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ticket">
                <Button className="bg-golden hover:bg-golden-dark text-primary-foreground">
                  Contact Support
                </Button>
              </Link>
              <Link href="/resources">
                <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground">
                  View Guide
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
