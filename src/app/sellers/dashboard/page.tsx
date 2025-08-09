"use client";

import { useState } from "react";
import SellerHeader from "@/components/sellers/SellerHeader";
import SellerFooter from "@/components/sellers/SellerFooter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Store, 
  Package, 
  Plus, 
  Upload, 
  Eye, 
  Edit, 
  Trash2, 
  TrendingUp, 
  Users, 
  DollarSign,
  Globe,
  Image as ImageIcon,
  CheckCircle,
  XCircle,
  Clock,
  User,
  Star,
  Calendar
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  country: string;
  imageUrl: string;
  description: string;
  status: "active" | "pending" | "inactive";
  createdAt: string;
}

interface ReviewRequest {
  id: string;
  productId: string;
  productName: string;
  reviewerName: string;
  reviewerEmail: string;
  reviewerDiscord: string;
  reviewerCountry: string;
  requestDate: string;
  status: "pending" | "approved" | "denied";
  reviewerHistory: {
    totalReviews: number;
    averageRating: number;
    completedReviews: number;
    lastReviewDate: string;
  };
}

export default function SellerDashboard() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Wireless Bluetooth Headphones",
      category: "Electronics",
      price: 89.99,
      country: "United States",
      imageUrl: "/placeholder.svg",
      description: "High-quality wireless headphones with noise cancellation",
      status: "active",
      createdAt: "2024-01-15"
    },
    {
      id: "2",
      name: "Organic Coffee Beans",
      category: "Food & Beverages",
      price: 24.99,
      country: "Canada",
      imageUrl: "/placeholder.svg",
      description: "Premium organic coffee beans from sustainable farms",
      status: "pending",
      createdAt: "2024-01-10"
    }
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    country: "",
    description: "",
    imageFile: null as File | null
  });

  const [reviewRequests, setReviewRequests] = useState<ReviewRequest[]>([
    {
      id: "1",
      productId: "1",
      productName: "Wireless Bluetooth Headphones",
      reviewerName: "Sarah Johnson",
      reviewerEmail: "sarah.j@email.com",
      reviewerDiscord: "sarah_j#1234",
      reviewerCountry: "United States",
      requestDate: "2024-01-20",
      status: "pending",
      reviewerHistory: {
        totalReviews: 47,
        averageRating: 4.8,
        completedReviews: 45,
        lastReviewDate: "2024-01-15"
      }
    },
    {
      id: "2",
      productId: "1",
      productName: "Wireless Bluetooth Headphones",
      reviewerName: "Mike Chen",
      reviewerEmail: "mike.chen@email.com",
      reviewerDiscord: "mike_chen#5678",
      reviewerCountry: "Canada",
      requestDate: "2024-01-19",
      status: "pending",
      reviewerHistory: {
        totalReviews: 23,
        averageRating: 4.6,
        completedReviews: 21,
        lastReviewDate: "2024-01-12"
      }
    },
    {
      id: "3",
      productId: "2",
      productName: "Organic Coffee Beans",
      reviewerName: "Emma Rodriguez",
      reviewerEmail: "emma.r@email.com",
      reviewerDiscord: "emma_rod#9012",
      reviewerCountry: "United Kingdom",
      requestDate: "2024-01-18",
      status: "pending",
      reviewerHistory: {
        totalReviews: 89,
        averageRating: 4.9,
        completedReviews: 87,
        lastReviewDate: "2024-01-14"
      }
    }
  ]);

  const categories = [
    "Electronics", "Clothing", "Home & Garden", "Sports & Outdoors", 
    "Beauty & Personal Care", "Books", "Toys & Games", "Automotive",
    "Health & Wellness", "Food & Beverages", "Pet Supplies", "Office Products"
  ];

  const countries = [
    "United States", "Canada", "United Kingdom", "Germany", "France", "Italy", "Spain", 
    "Netherlands", "Belgium", "Switzerland", "Austria", "Sweden", "Norway", "Denmark", 
    "Finland", "Poland", "Czech Republic", "Hungary", "Romania", "Bulgaria", "Greece", 
    "Portugal", "Ireland", "Australia", "New Zealand", "Japan", "South Korea", "Singapore", 
    "Hong Kong", "Taiwan", "India", "Brazil", "Mexico", "Argentina", "Chile", "Colombia", 
    "Peru", "Venezuela", "South Africa", "Egypt", "Morocco", "Nigeria", "Kenya", "Ghana"
  ];

  const handleInputChange = (field: string, value: string) => {
    setNewProduct(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProduct(prev => ({ ...prev, imageFile: file }));
    }
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    
    const product: Product = {
      id: Date.now().toString(),
      name: newProduct.name,
      category: newProduct.category,
      price: parseFloat(newProduct.price),
      country: newProduct.country,
      imageUrl: newProduct.imageFile ? URL.createObjectURL(newProduct.imageFile) : "/placeholder.svg",
      description: newProduct.description,
      status: "pending",
      createdAt: new Date().toISOString().split('T')[0]
    };

    setProducts(prev => [product, ...prev]);
    setNewProduct({
      name: "",
      category: "",
      price: "",
      country: "",
      description: "",
      imageFile: null
    });
    setShowAddProduct(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-500";
      case "pending": return "bg-yellow-500";
      case "inactive": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  const handleApproveRequest = (requestId: string) => {
    setReviewRequests(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: "approved" as const } : req
      )
    );
  };

  const handleDenyRequest = (requestId: string) => {
    setReviewRequests(prev => 
      prev.map(req => 
        req.id === requestId ? { ...req, status: "denied" as const } : req
      )
    );
  };

  const stats = {
    totalProducts: products.length,
    activeProducts: products.filter(p => p.status === "active").length,
    pendingProducts: products.filter(p => p.status === "pending").length,
    totalValue: products.reduce((sum, p) => sum + p.price, 0),
    pendingRequests: reviewRequests.filter(r => r.status === "pending").length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SellerHeader />
      
      <main className="container mx-auto px-6 pt-32 pb-24">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Seller Dashboard</h1>
          <p className="text-slate-300">Manage your products and track your performance</p>
        </div>

                 {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-lg">
                <Package className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Products</p>
                <p className="text-2xl font-bold text-white">{stats.totalProducts}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Active Products</p>
                <p className="text-2xl font-bold text-white">{stats.activeProducts}</p>
              </div>
            </div>
          </Card>

          <Card className="bg-slate-800/50 backdrop-blur-sm border-yellow-500/20 p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-yellow-500/20 rounded-lg">
                <Eye className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Pending Review</p>
                <p className="text-2xl font-bold text-white">{stats.pendingProducts}</p>
              </div>
            </div>
          </Card>

                     <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 p-6">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-blue-500/20 rounded-lg">
                 <DollarSign className="h-6 w-6 text-blue-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Total Refunded</p>
                 <p className="text-2xl font-bold text-white">${stats.totalValue.toFixed(2)}</p>
               </div>
             </div>
           </Card>

           <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-purple-500/20 rounded-lg">
                 <Clock className="h-6 w-6 text-purple-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Pending Requests</p>
                 <p className="text-2xl font-bold text-white">{stats.pendingRequests}</p>
               </div>
             </div>
           </Card>
        </div>

        {/* Add Product Section */}
        <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Products</h2>
            <Button 
              onClick={() => setShowAddProduct(!showAddProduct)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>

          {showAddProduct && (
            <form onSubmit={handleAddProduct} className="space-y-6 p-6 bg-slate-700/30 rounded-lg border border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="productName" className="text-white">Product Name *</Label>
                  <Input
                    id="productName"
                    value={newProduct.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter product name"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-white">Category *</Label>
                  <Select value={newProduct.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category} className="text-white hover:bg-slate-600">
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price" className="text-white">Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    value={newProduct.price}
                    onChange={(e) => handleInputChange("price", e.target.value)}
                    placeholder="0.00"
                    className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="country" className="text-white">Country *</Label>
                  <Select value={newProduct.country} onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-slate-600">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country} className="text-white hover:bg-slate-600">
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="description" className="text-white">Product Description *</Label>
                <Textarea
                  id="description"
                  value={newProduct.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe your product..."
                  className="bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                  rows={3}
                  required
                />
              </div>

              <div>
                <Label htmlFor="image" className="text-white">Product Image *</Label>
                <div className="mt-2">
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-purple-500 transition-colors">
                      <ImageIcon className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-slate-400">
                        {newProduct.imageFile ? newProduct.imageFile.name : "Click to upload product image"}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">PNG, JPG up to 10MB</p>
                    </div>
                  </label>
                  <input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  Add Product
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowAddProduct(false)}
                  className="border-slate-600 text-slate-300 hover:bg-slate-700"
                >
                  Cancel
                </Button>
              </div>
            </form>
          )}

          {/* Products List */}
          <div className="space-y-4">
            {products.map((product) => (
              <Card key={product.id} className="bg-slate-700/30 border-slate-600 p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-slate-600 rounded-lg flex items-center justify-center">
                    <ImageIcon className="h-8 w-8 text-slate-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                      <Badge className={`${getStatusColor(product.status)} text-white`}>
                        {product.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-300">
                      <span className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        {product.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        ${product.price}
                      </span>
                      <span className="flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        {product.country}
                      </span>
                    </div>
                    
                    <p className="text-slate-400 text-sm mt-2">{product.description}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
            
            {products.length === 0 && (
              <div className="text-center py-12">
                <Package className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">No products yet</h3>
                <p className="text-slate-400 mb-4">Start by adding your first product to get reviews</p>
                <Button 
                  onClick={() => setShowAddProduct(true)}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Product
                </Button>
              </div>
            )}
                     </div>
         </Card>

         {/* Pending Review Requests */}
         <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 mb-8">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-white">Pending Review Requests</h2>
             <Badge className="bg-purple-600 text-white">{stats.pendingRequests} pending</Badge>
           </div>

           <div className="space-y-4">
             {reviewRequests.filter(req => req.status === "pending").map((request) => (
               <Card key={request.id} className="bg-slate-700/30 border-slate-600 p-6">
                 <div className="flex items-start justify-between">
                   <div className="flex-1">
                     <div className="flex items-center gap-3 mb-3">
                       <h3 className="text-lg font-semibold text-white">{request.productName}</h3>
                       <Badge className="bg-yellow-500 text-white">Pending</Badge>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                       <div>
                         <h4 className="text-purple-400 font-semibold mb-2">Reviewer Information</h4>
                         <div className="space-y-1 text-sm text-slate-300">
                           <p><User className="inline h-4 w-4 mr-2" />{request.reviewerName}</p>
                           <p>📧 {request.reviewerEmail}</p>
                           <p>🎮 {request.reviewerDiscord}</p>
                           <p><Globe className="inline h-4 w-4 mr-2" />{request.reviewerCountry}</p>
                           <p><Calendar className="inline h-4 w-4 mr-2" />Requested: {request.requestDate}</p>
                         </div>
                       </div>
                       
                       <div>
                         <h4 className="text-purple-400 font-semibold mb-2">Review History</h4>
                         <div className="space-y-1 text-sm text-slate-300">
                           <p><Star className="inline h-4 w-4 mr-2" />{request.reviewerHistory.totalReviews} total reviews</p>
                           <p>⭐ {request.reviewerHistory.averageRating} average rating</p>
                           <p><CheckCircle className="inline h-4 w-4 mr-2" />{request.reviewerHistory.completedReviews} completed</p>
                           <p><Calendar className="inline h-4 w-4 mr-2" />Last review: {request.reviewerHistory.lastReviewDate}</p>
                         </div>
                       </div>
                     </div>
                   </div>
                   
                   <div className="flex gap-2 ml-4">
                     <Button 
                       size="sm" 
                       onClick={() => handleApproveRequest(request.id)}
                       className="bg-green-600 hover:bg-green-700 text-white"
                     >
                       <CheckCircle className="h-4 w-4 mr-1" />
                       Approve
                     </Button>
                     <Button 
                       size="sm" 
                       variant="outline"
                       onClick={() => handleDenyRequest(request.id)}
                       className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                     >
                       <XCircle className="h-4 w-4 mr-1" />
                       Deny
                     </Button>
                   </div>
                 </div>
               </Card>
             ))}
             
             {reviewRequests.filter(req => req.status === "pending").length === 0 && (
               <div className="text-center py-8">
                 <Clock className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                 <h3 className="text-lg font-semibold text-white mb-2">No pending requests</h3>
                 <p className="text-slate-400">Review requests will appear here when reviewers apply for your products</p>
               </div>
             )}
           </div>
         </Card>

         {/* Recent Activity */}
         <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6">
           <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
           <div className="space-y-4">
             {reviewRequests.filter(req => req.status !== "pending").map((request) => (
               <div key={request.id} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                 <div className={`p-2 rounded-full ${
                   request.status === "approved" ? "bg-green-500/20" : "bg-red-500/20"
                 }`}>
                   {request.status === "approved" ? (
                     <CheckCircle className="h-4 w-4 text-green-400" />
                   ) : (
                     <XCircle className="h-4 w-4 text-red-400" />
                   )}
                 </div>
                 <div className="flex-1">
                   <p className="text-white font-medium">{request.reviewerName}</p>
                   <p className="text-slate-400 text-sm">
                     {request.status === "approved" ? "Approved" : "Denied"} review request for {request.productName}
                   </p>
                 </div>
                 <span className="text-slate-500 text-sm">{request.requestDate}</span>
               </div>
             ))}
           </div>
         </Card>
       </main>

       <SellerFooter />
     </div>
   );
 }
