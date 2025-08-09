"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Users, 
  Store, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Package,
  Eye,
  CheckCircle,
  XCircle,
  Ban,
  UserCheck,
  Calendar,
  Globe,
  Star,
  AlertTriangle,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  X,
  BarChart3,
  CreditCard,
  Receipt
} from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  type: "buyer" | "seller";
  status: "active" | "banned" | "pending";
  joinDate: string;
  country: string;
  totalReviews?: number;
  totalProducts?: number;
  revenue?: number;
}

interface UserActivity {
  id: string;
  type: "product_added" | "review_requested" | "refund_processed" | "user_registered" | "product_listed" | "review_submitted";
  description: string;
  timestamp: string;
  user?: string;
  amount?: number;
}

interface AdminActivity {
  id: string;
  type: "user_banned" | "user_reinstated" | "product_banned" | "product_approved" | "user_approved" | "system_maintenance";
  description: string;
  timestamp: string;
  user?: string;
  amount?: number;
  admin: string;
}

interface Transaction {
  id: string;
  type: "subscription" | "refund" | "commission";
  amount: number;
  seller: string;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

interface Payout {
  id: string;
  seller: string;
  buyer: string;
  productName: string;
  amount: number;
  paypalTransactionId: string;
  date: string;
  status: "completed" | "pending" | "failed";
  reviewId?: string;
}

interface Product {
  id: string;
  name: string;
  seller: string;
  price: number;
  category: string;
  status: "active" | "pending" | "banned";
  website: string;
  imageUrl: string;
  createdAt: string;
}

interface Review {
  id: string;
  productName: string;
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
  status: "published" | "pending" | "rejected";
}

interface RevenueData {
  month: string;
  revenue: number;
  growth: number;
}

export default function AdminDashboard() {
  const [showModal, setShowModal] = useState<string | null>(null);
  const [selectedAdmin, setSelectedAdmin] = useState<string | null>(null);
  const [adminRemovalRequests, setAdminRemovalRequests] = useState<{
    targetAdmin: string;
    requester: string;
    votes: { admin: string; vote: "yes" | "no" }[];
    status: "pending" | "approved" | "rejected";
    timestamp: string;
  }[]>([]);
  const [users, setUsers] = useState<User[]>([
    // Buyers
    {
      id: "1",
      name: "John Smith",
      email: "john.smith@email.com",
      type: "buyer",
      status: "active",
      joinDate: "2024-01-15",
      country: "United States",
      totalReviews: 23
    },
    {
      id: "2",
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      type: "buyer",
      status: "active",
      joinDate: "2024-01-10",
      country: "Canada",
      totalReviews: 47
    },
    {
      id: "3",
      name: "Mike Chen",
      email: "mike.chen@email.com",
      type: "buyer",
      status: "banned",
      joinDate: "2024-01-05",
      country: "United Kingdom",
      totalReviews: 12
    },
    // Sellers
    {
      id: "4",
      name: "TechCorp Inc",
      email: "admin@techcorp.com",
      type: "seller",
      status: "active",
      joinDate: "2024-01-12",
      country: "United States",
      totalProducts: 15,
      revenue: 2450.00
    },
    {
      id: "5",
      name: "Organic Foods Ltd",
      email: "contact@organicfoods.com",
      type: "seller",
      status: "pending",
      joinDate: "2024-01-18",
      country: "Canada",
      totalProducts: 8,
      revenue: 1200.00
    },
    {
      id: "6",
      name: "Fashion Forward",
      email: "info@fashionforward.com",
      type: "seller",
      status: "banned",
      joinDate: "2024-01-08",
      country: "United Kingdom",
      totalProducts: 25,
      revenue: 3800.00
         }
   ]);

   const [payouts, setPayouts] = useState<Payout[]>([
     {
       id: "1",
       seller: "TechCorp Inc",
       buyer: "Sarah Johnson",
       productName: "Wireless Bluetooth Headphones",
       amount: 89.99,
       paypalTransactionId: "PP-1234567890ABCD",
       date: "2024-01-20",
       status: "completed",
       reviewId: "REV-001"
     },
     {
       id: "2",
       seller: "Organic Foods Ltd",
       buyer: "John Smith",
       productName: "Organic Coffee Beans",
       amount: 24.99,
       paypalTransactionId: "PP-9876543210EFGH",
       date: "2024-01-19",
       status: "completed",
       reviewId: "REV-002"
     },
     {
       id: "3",
       seller: "Fashion Forward",
       buyer: "Emma Rodriguez",
       productName: "Premium Yoga Mat",
       amount: 45.00,
       paypalTransactionId: "PP-555566667777IJKL",
       date: "2024-01-18",
       status: "pending",
       reviewId: "REV-003"
     },
     {
       id: "4",
       seller: "TechCorp Inc",
       buyer: "Mike Chen",
       productName: "Wireless Bluetooth Headphones",
       amount: 89.99,
       paypalTransactionId: "PP-111122223333MNOP",
       date: "2024-01-17",
       status: "failed",
       reviewId: "REV-004"
     }
   ]);

   const [transactions, setTransactions] = useState<Transaction[]>([
     {
       id: "1",
       type: "subscription",
       amount: 49.99,
       seller: "TechCorp Inc",
       description: "Monthly subscription payment",
       date: "2024-01-20",
       status: "completed"
     },
     {
       id: "2",
       type: "refund",
       amount: 89.99,
       seller: "Organic Foods Ltd",
       description: "Product refund to reviewer",
       date: "2024-01-19",
       status: "completed"
     },
     {
       id: "3",
       type: "commission",
       amount: 12.50,
       seller: "Fashion Forward",
       description: "Platform commission",
       date: "2024-01-18",
       status: "completed"
     },
     {
       id: "4",
       type: "subscription",
       amount: 19.99,
       seller: "TechCorp Inc",
       description: "Starter plan subscription",
       date: "2024-01-17",
       status: "pending"
     }
   ]);

   const [products, setProducts] = useState<Product[]>([
     {
       id: "1",
       name: "Wireless Bluetooth Headphones",
       seller: "TechCorp Inc",
       price: 89.99,
       category: "Electronics",
       status: "active",
       website: "https://techcorp.com/headphones",
       imageUrl: "/placeholder.svg",
       createdAt: "2024-01-15"
     },
     {
       id: "2",
       name: "Organic Coffee Beans",
       seller: "Organic Foods Ltd",
       price: 24.99,
       category: "Food & Beverages",
       status: "pending",
       website: "https://organicfoods.com/coffee",
       imageUrl: "/placeholder.svg",
       createdAt: "2024-01-10"
     },
     {
       id: "3",
       name: "Premium Yoga Mat",
       seller: "Fashion Forward",
       price: 45.00,
       category: "Sports & Outdoors",
       status: "banned",
       website: "https://fashionforward.com/yoga-mat",
       imageUrl: "/placeholder.svg",
       createdAt: "2024-01-08"
     }
   ]);

   const [reviews, setReviews] = useState<Review[]>([
     {
       id: "1",
       productName: "Wireless Bluetooth Headphones",
       reviewer: "Sarah Johnson",
       rating: 5,
       comment: "Excellent sound quality and comfortable fit. Highly recommend!",
       date: "2024-01-20",
       status: "published"
     },
     {
       id: "2",
       productName: "Organic Coffee Beans",
       reviewer: "John Smith",
       rating: 4,
       comment: "Great taste and smooth finish. Will buy again.",
       date: "2024-01-19",
       status: "published"
     },
     {
       id: "3",
       productName: "Premium Yoga Mat",
       reviewer: "Emma Rodriguez",
       rating: 5,
       comment: "Perfect thickness and grip. Love the quality!",
       date: "2024-01-18",
       status: "pending"
     }
   ]);

   const [revenueData, setRevenueData] = useState<RevenueData[]>([
     { month: "Jan", revenue: 12500, growth: 15 },
     { month: "Feb", revenue: 14200, growth: 12 },
     { month: "Mar", revenue: 16800, growth: 18 },
     { month: "Apr", revenue: 19200, growth: 14 },
     { month: "May", revenue: 22100, growth: 15 },
     { month: "Jun", revenue: 25800, growth: 17 }
   ]);

           const [userActivities, setUserActivities] = useState<UserActivity[]>([
      {
        id: "1",
        type: "product_added",
        description: "New product added: Wireless Headphones",
        timestamp: "2024-01-20 14:30",
        user: "TechCorp Inc"
      },
      {
        id: "2",
        type: "review_requested",
        description: "Review request for Organic Coffee Beans",
        timestamp: "2024-01-20 13:45",
        user: "Sarah Johnson"
      },
      {
        id: "3",
        type: "refund_processed",
        description: "Refund processed for $89.99",
        timestamp: "2024-01-20 12:15",
        user: "John Smith",
        amount: 89.99
      },
      {
        id: "4",
        type: "user_registered",
        description: "New seller registered: Fashion Forward",
        timestamp: "2024-01-20 11:20",
        user: "Fashion Forward"
      },
      {
        id: "5",
        type: "product_listed",
        description: "Product listed: Premium Yoga Mat",
        timestamp: "2024-01-20 10:30",
        user: "Fashion Forward"
      },
      {
        id: "6",
        type: "review_submitted",
        description: "Review submitted for Wireless Headphones",
        timestamp: "2024-01-20 09:45",
        user: "Sarah Johnson"
      }
    ]);

    const [adminActivities, setAdminActivities] = useState<AdminActivity[]>([
      {
        id: "1",
        type: "user_banned",
        description: "User banned: Mike Chen (violation of terms)",
        timestamp: "2024-01-20 11:20",
        user: "Mike Chen",
        admin: "Mahmoud Smadi"
      },
      {
        id: "2",
        type: "user_approved",
        description: "Seller approved: TechCorp Inc",
        timestamp: "2024-01-20 10:30",
        user: "TechCorp Inc",
        admin: "Ahmed Ezzein"
      },
      {
        id: "3",
        type: "product_banned",
        description: "Product banned: Premium Yoga Mat",
        timestamp: "2024-01-20 09:15",
        user: "Fashion Forward",
        admin: "Taha Saleh"
      },
      {
        id: "4",
        type: "product_approved",
        description: "Product approved: Wireless Headphones",
        timestamp: "2024-01-20 08:45",
        user: "TechCorp Inc",
        admin: "Ahmad Rizwan"
      },
      {
        id: "5",
        type: "system_maintenance",
        description: "System maintenance completed",
        timestamp: "2024-01-20 08:00",
        admin: "Ahmed Ezzein"
      }
    ]);

  const handleBanUser = (userId: string) => {
    const user = users.find(u => u.id === userId);
    setUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, status: "banned" as const } : user
      )
    );
    
    // Log admin action
    const newActivity: AdminActivity = {
      id: Date.now().toString(),
      type: "user_banned",
      description: `User banned: ${user?.name} (ID: ${userId})`,
      timestamp: new Date().toLocaleString(),
      user: user?.name,
      admin: "Current Admin" // This would be replaced with actual logged-in admin
    };
    setAdminActivities(prev => [newActivity, ...prev]);
  };

  const handleReinstateUser = (userId: string) => {
    const user = users.find(u => u.id === userId);
    setUsers(prev => 
      prev.map(user => 
        user.id === userId ? { ...user, status: "active" as const } : user
      )
    );
    
    // Log admin action
    const newActivity: AdminActivity = {
      id: Date.now().toString(),
      type: "user_reinstated",
      description: `User reinstated: ${user?.name} (ID: ${userId})`,
      timestamp: new Date().toLocaleString(),
      user: user?.name,
      admin: "Current Admin" // This would be replaced with actual logged-in admin
    };
    setAdminActivities(prev => [newActivity, ...prev]);
  };

  const handleBanProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setProducts(prev => 
      prev.map(product => 
        product.id === productId ? { ...product, status: "banned" as const } : product
      )
    );
    
    // Log admin action
    const newActivity: AdminActivity = {
      id: Date.now().toString(),
      type: "product_banned",
      description: `Product banned: ${product?.name} (ID: ${productId})`,
      timestamp: new Date().toLocaleString(),
      user: product?.seller,
      admin: "Current Admin" // This would be replaced with actual logged-in admin
    };
    setAdminActivities(prev => [newActivity, ...prev]);
  };

  const handleApproveProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    setProducts(prev => 
      prev.map(product => 
        product.id === productId ? { ...product, status: "active" as const } : product
      )
    );
    
    // Log admin action
    const newActivity: AdminActivity = {
      id: Date.now().toString(),
      type: "product_approved",
      description: `Product approved: ${product?.name} (ID: ${productId})`,
      timestamp: new Date().toLocaleString(),
      user: product?.seller,
      admin: "Current Admin" // This would be replaced with actual logged-in admin
    };
    setAdminActivities(prev => [newActivity, ...prev]);
  };

  const stats = {
    totalUsers: users.length,
    totalBuyers: users.filter(u => u.type === "buyer").length,
    totalSellers: users.filter(u => u.type === "seller").length,
    activeUsers: users.filter(u => u.status === "active").length,
    bannedUsers: users.filter(u => u.status === "banned").length,
    pendingUsers: users.filter(u => u.status === "pending").length,
    totalRevenue: transactions.filter(t => t.status === "completed").reduce((sum, t) => sum + t.amount, 0),
    totalProducts: products.length,
    totalReviews: reviews.length,
         totalPayouts: payouts.filter(p => p.status === "completed").reduce((sum, p) => sum + p.amount, 0)
  };

  const getUserActivityIcon = (type: string) => {
    switch (type) {
      case "product_added": return <Package className="h-4 w-4" />;
      case "review_requested": return <Eye className="h-4 w-4" />;
      case "refund_processed": return <DollarSign className="h-4 w-4" />;
      case "user_registered": return <UserCheck className="h-4 w-4" />;
      case "product_listed": return <Package className="h-4 w-4" />;
      case "review_submitted": return <Star className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getUserActivityColor = (type: string) => {
    switch (type) {
      case "product_added": return "text-blue-400";
      case "review_requested": return "text-yellow-400";
      case "refund_processed": return "text-green-400";
      case "user_registered": return "text-green-400";
      case "product_listed": return "text-blue-400";
      case "review_submitted": return "text-yellow-400";
      default: return "text-slate-400";
    }
  };

  const getAdminActivityIcon = (type: string) => {
    switch (type) {
      case "user_banned": return <Ban className="h-4 w-4" />;
      case "user_reinstated": return <UserCheck className="h-4 w-4" />;
      case "product_banned": return <Ban className="h-4 w-4" />;
      case "product_approved": return <UserCheck className="h-4 w-4" />;
      case "user_approved": return <UserCheck className="h-4 w-4" />;
      case "system_maintenance": return <Shield className="h-4 w-4" />;
      default: return <Activity className="h-4 w-4" />;
    }
  };

  const getAdminActivityColor = (type: string) => {
    switch (type) {
      case "user_banned": return "text-red-400";
      case "user_reinstated": return "text-green-400";
      case "product_banned": return "text-red-400";
      case "product_approved": return "text-green-400";
      case "user_approved": return "text-green-400";
      case "system_maintenance": return "text-purple-400";
      default: return "text-slate-400";
    }
  };

  const handleAdminClick = (adminName: string) => {
    setSelectedAdmin(adminName);
    setShowModal("adminActivity");
  };

  const handleRequestAdminRemoval = (targetAdmin: string) => {
    const newRequest = {
      targetAdmin,
      requester: "Current Admin", // This would be the logged-in admin
      votes: [
        { admin: "Current Admin", vote: "yes" as const }
      ],
      status: "pending" as const,
      timestamp: new Date().toLocaleString()
    };
    setAdminRemovalRequests(prev => [newRequest, ...prev]);
  };

  const handleVoteOnRemoval = (requestIndex: number, vote: "yes" | "no") => {
    setAdminRemovalRequests(prev => {
      const updated = [...prev];
      const request = updated[requestIndex];
      
      // Check if current admin already voted
      const existingVoteIndex = request.votes.findIndex(v => v.admin === "Current Admin");
      
      if (existingVoteIndex >= 0) {
        request.votes[existingVoteIndex].vote = vote;
      } else {
        request.votes.push({ admin: "Current Admin", vote });
      }
      
      // Check if we have enough votes (3 out of 4 admins)
      const yesVotes = request.votes.filter(v => v.vote === "yes").length;
      const noVotes = request.votes.filter(v => v.vote === "no").length;
      
      if (yesVotes >= 3) {
        request.status = "approved";
      } else if (noVotes >= 2) {
        request.status = "rejected";
      }
      
      return updated;
    });
  };

  const getFilteredAdminActivities = (adminName: string) => {
    return adminActivities.filter(activity => activity.admin === adminName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Admin Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-red-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-red-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Admin Portal
              </span>
            </div>
            <div className="text-slate-400 text-sm">
              Administrator Dashboard
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-8 pb-24">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Administrator Dashboard</h1>
          <p className="text-slate-300">Monitor and manage the HighEnd Free platform</p>
        </div>

                 {/* Stats Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
           <Card 
             className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
             onClick={() => setShowModal("users")}
           >
             <div className="flex items-center gap-4">
               <div className="p-3 bg-red-500/20 rounded-lg">
                 <Users className="h-6 w-6 text-red-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Total Users</p>
                 <p className="text-2xl font-bold text-white">{stats.totalUsers}</p>
               </div>
             </div>
           </Card>

           <Card 
             className="bg-slate-800/50 backdrop-blur-sm border-green-500/20 p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
             onClick={() => setShowModal("revenue")}
           >
             <div className="flex items-center gap-4">
               <div className="p-3 bg-green-500/20 rounded-lg">
                 <DollarSign className="h-6 w-6 text-green-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Total Revenue</p>
                 <p className="text-2xl font-bold text-white">${stats.totalRevenue.toFixed(2)}</p>
               </div>
             </div>
           </Card>

           <Card 
             className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
             onClick={() => setShowModal("products")}
           >
             <div className="flex items-center gap-4">
               <div className="p-3 bg-blue-500/20 rounded-lg">
                 <Package className="h-6 w-6 text-blue-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Total Products</p>
                 <p className="text-2xl font-bold text-white">{stats.totalProducts}</p>
               </div>
             </div>
           </Card>

           <Card 
             className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
             onClick={() => setShowModal("reviews")}
           >
             <div className="flex items-center gap-4">
               <div className="p-3 bg-purple-500/20 rounded-lg">
                 <Star className="h-6 w-6 text-purple-400" />
               </div>
               <div>
                 <p className="text-slate-400 text-sm">Total Reviews</p>
                 <p className="text-2xl font-bold text-white">{stats.totalReviews}</p>
               </div>
             </div>
           </Card>

                       <Card 
              className="bg-slate-800/50 backdrop-blur-sm border-orange-500/20 p-6 cursor-pointer hover:bg-slate-700/50 transition-colors"
              onClick={() => setShowModal("payouts")}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-orange-500/20 rounded-lg">
                  <Receipt className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Total Payouts</p>
                  <p className="text-2xl font-bold text-white">${stats.totalPayouts.toFixed(2)}</p>
                </div>
              </div>
            </Card>
         </div>

        {/* User Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Buyers */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Buyers ({users.filter(u => u.type === "buyer").length})</h2>
              <Badge className="bg-red-600 text-white">{stats.totalBuyers} total</Badge>
            </div>
            <div className="space-y-4">
              {users.filter(u => u.type === "buyer").map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-medium">{user.name}</h3>
                      <Badge className={`${
                        user.status === "active" ? "bg-green-500" : 
                        user.status === "banned" ? "bg-red-500" : "bg-yellow-500"
                      } text-white`}>
                        {user.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <p>📧 {user.email}</p>
                      <p><Globe className="inline h-3 w-3 mr-1" />{user.country}</p>
                      <p><Star className="inline h-3 w-3 mr-1" />{user.totalReviews} reviews</p>
                      <p><Calendar className="inline h-3 w-3 mr-1" />Joined: {user.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {user.status === "active" ? (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleBanUser(user.id)}
                        className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                      >
                        <Ban className="h-4 w-4 mr-1" />
                        Ban
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        onClick={() => handleReinstateUser(user.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <UserCheck className="h-4 w-4 mr-1" />
                        Reinstate
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Sellers */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Sellers ({users.filter(u => u.type === "seller").length})</h2>
              <Badge className="bg-red-600 text-white">{stats.totalSellers} total</Badge>
            </div>
            <div className="space-y-4">
              {users.filter(u => u.type === "seller").map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-white font-medium">{user.name}</h3>
                      <Badge className={`${
                        user.status === "active" ? "bg-green-500" : 
                        user.status === "banned" ? "bg-red-500" : "bg-yellow-500"
                      } text-white`}>
                        {user.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-slate-300 space-y-1">
                      <p>📧 {user.email}</p>
                      <p><Globe className="inline h-3 w-3 mr-1" />{user.country}</p>
                      <p><Package className="inline h-3 w-3 mr-1" />{user.totalProducts} products</p>
                      <p><DollarSign className="inline h-3 w-3 mr-1" />${user.revenue?.toFixed(2)} revenue</p>
                      <p><Calendar className="inline h-3 w-3 mr-1" />Joined: {user.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    {user.status === "active" ? (
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleBanUser(user.id)}
                        className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                      >
                        <Ban className="h-4 w-4 mr-1" />
                        Ban
                      </Button>
                    ) : (
                      <Button 
                        size="sm" 
                        onClick={() => handleReinstateUser(user.id)}
                        className="bg-green-600 hover:bg-green-700 text-white"
                      >
                        <UserCheck className="h-4 w-4 mr-1" />
                        Reinstate
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

                 {/* Revenue Growth Chart */}
         <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-6 mb-8">
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-white">Revenue Growth</h2>
             <Badge className="bg-green-600 text-white">
               <TrendingUp className="h-4 w-4 mr-1" />
               +{revenueData[revenueData.length - 1].growth}% this month
             </Badge>
           </div>
           <div className="flex items-end justify-between h-32 mb-4">
             {revenueData.map((data, index) => (
               <div key={data.month} className="flex flex-col items-center">
                 <div className="text-xs text-slate-400 mb-1">{data.month}</div>
                 <div 
                   className="w-8 bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"
                   style={{ height: `${(data.revenue / 30000) * 100}%` }}
                 ></div>
                 <div className="text-xs text-slate-300 mt-1">${(data.revenue / 1000).toFixed(1)}k</div>
               </div>
             ))}
           </div>
         </Card>

                                       {/* Admin Team Info */}
           <Card className="bg-slate-800/50 backdrop-blur-sm border-purple-500/20 p-6 mb-8">
             <div className="flex items-center justify-between mb-6">
               <h2 className="text-2xl font-bold text-white">Admin Team</h2>
               <Badge className="bg-purple-600 text-white">4 Administrators</Badge>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div 
                 className="p-4 bg-slate-700/30 rounded-lg text-center cursor-pointer hover:bg-slate-600/30 transition-colors"
                 onClick={() => handleAdminClick("Ahmed Ezzein")}
               >
                 <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Shield className="h-6 w-6 text-purple-400" />
                 </div>
                 <h3 className="text-white font-semibold">Ahmed Ezzein</h3>
                 <p className="text-slate-400 text-sm">Lead Administrator</p>
                 <p className="text-xs text-slate-500 mt-1">Click to view activity</p>
               </div>
               <div 
                 className="p-4 bg-slate-700/30 rounded-lg text-center cursor-pointer hover:bg-slate-600/30 transition-colors"
                 onClick={() => handleAdminClick("Ahmad Rizwan")}
               >
                 <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Shield className="h-6 w-6 text-purple-400" />
                 </div>
                 <h3 className="text-white font-semibold">Ahmad Rizwan</h3>
                 <p className="text-slate-400 text-sm">System Administrator</p>
                 <p className="text-xs text-slate-500 mt-1">Click to view activity</p>
               </div>
               <div 
                 className="p-4 bg-slate-700/30 rounded-lg text-center cursor-pointer hover:bg-slate-600/30 transition-colors"
                 onClick={() => handleAdminClick("Taha Saleh")}
               >
                 <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Shield className="h-6 w-6 text-purple-400" />
                 </div>
                 <h3 className="text-white font-semibold">Taha Saleh</h3>
                 <p className="text-slate-400 text-sm">Content Moderator</p>
                 <p className="text-xs text-slate-500 mt-1">Click to view activity</p>
               </div>
               <div 
                 className="p-4 bg-slate-700/30 rounded-lg text-center cursor-pointer hover:bg-slate-600/30 transition-colors"
                 onClick={() => handleAdminClick("Mahmoud Smadi")}
               >
                 <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                   <Shield className="h-6 w-6 text-purple-400" />
                 </div>
                 <h3 className="text-white font-semibold">Mahmoud Smadi</h3>
                 <p className="text-slate-400 text-sm">Security Administrator</p>
                 <p className="text-xs text-slate-500 mt-1">Click to view activity</p>
               </div>
             </div>
             
             {/* Admin Removal Safety Feature */}
             <div className="mt-8 p-6 bg-red-900/20 border border-red-500/20 rounded-lg">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-lg font-semibold text-white">🛡️ Admin Removal Safety</h3>
                 <Badge className="bg-red-600 text-white">Emergency Feature</Badge>
               </div>
               <p className="text-slate-300 text-sm mb-4">
                 Request removal of an admin. Requires 3 out of 4 admins to vote "yes" for removal.
                 Removed admin will lose all access and account will be permanently deleted.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                 <Button 
                   variant="outline" 
                   size="sm"
                   onClick={() => handleRequestAdminRemoval("Ahmed Ezzein")}
                   className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                 >
                   Remove Ahmed Ezzein
                 </Button>
                 <Button 
                   variant="outline" 
                   size="sm"
                   onClick={() => handleRequestAdminRemoval("Ahmad Rizwan")}
                   className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                 >
                   Remove Ahmad Rizwan
                 </Button>
                 <Button 
                   variant="outline" 
                   size="sm"
                   onClick={() => handleRequestAdminRemoval("Taha Saleh")}
                   className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                 >
                   Remove Taha Saleh
                 </Button>
                 <Button 
                   variant="outline" 
                   size="sm"
                   onClick={() => handleRequestAdminRemoval("Mahmoud Smadi")}
                   className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                 >
                   Remove Mahmoud Smadi
                 </Button>
               </div>
               
               {/* Active Removal Requests */}
               {adminRemovalRequests.filter(req => req.status === "pending").length > 0 && (
                 <div className="mt-6">
                   <h4 className="text-white font-medium mb-3">Active Removal Requests:</h4>
                   <div className="space-y-3">
                     {adminRemovalRequests.filter(req => req.status === "pending").map((request, index) => (
                       <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-white font-medium">
                             Remove {request.targetAdmin}
                           </span>
                           <Badge className="bg-yellow-600 text-white">Pending Vote</Badge>
                         </div>
                         <div className="text-sm text-slate-300 mb-3">
                           <p>Requested by: {request.requester}</p>
                           <p>Votes: {request.votes.filter(v => v.vote === "yes").length} Yes, {request.votes.filter(v => v.vote === "no").length} No</p>
                           <p>Time: {request.timestamp}</p>
                         </div>
                         <div className="flex gap-2">
                           <Button 
                             size="sm" 
                             onClick={() => handleVoteOnRemoval(index, "yes")}
                             className="bg-red-600 hover:bg-red-700 text-white"
                           >
                             Vote Yes
                           </Button>
                           <Button 
                             size="sm" 
                             variant="outline"
                             onClick={() => handleVoteOnRemoval(index, "no")}
                             className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                           >
                             Vote No
                           </Button>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
               
               {/* Completed Removal Requests */}
               {adminRemovalRequests.filter(req => req.status !== "pending").length > 0 && (
                 <div className="mt-6">
                   <h4 className="text-white font-medium mb-3">Completed Requests:</h4>
                   <div className="space-y-3">
                     {adminRemovalRequests.filter(req => req.status !== "pending").map((request, index) => (
                       <div key={index} className="p-3 bg-slate-700/30 rounded-lg">
                         <div className="flex items-center justify-between mb-2">
                           <span className="text-white font-medium">
                             Remove {request.targetAdmin}
                           </span>
                           <Badge className={`${
                             request.status === "approved" ? "bg-red-600" : "bg-green-600"
                           } text-white`}>
                             {request.status === "approved" ? "Approved" : "Rejected"}
                           </Badge>
                         </div>
                         <div className="text-sm text-slate-300">
                           <p>Final votes: {request.votes.filter(v => v.vote === "yes").length} Yes, {request.votes.filter(v => v.vote === "no").length} No</p>
                           <p>Time: {request.timestamp}</p>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               )}
             </div>
           </Card>

                    {/* Recent User Activity */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-blue-500/20 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent User Activity</h2>
              <Badge className="bg-blue-600 text-white">{userActivities.length} activities</Badge>
            </div>
            <div className="space-y-4">
              {userActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className={`p-2 rounded-full bg-slate-600/50 ${getUserActivityColor(activity.type)}`}>
                    {getUserActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                      {activity.user && <span>👤 {activity.user}</span>}
                      {activity.amount && <span>💰 ${activity.amount}</span>}
                      <span><Clock className="inline h-3 w-3 mr-1" />{activity.timestamp}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Admin Activity Log */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-red-500/20 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Admin Activity Log</h2>
              <Badge className="bg-red-600 text-white">{adminActivities.length} activities</Badge>
            </div>
            <div className="space-y-4">
              {adminActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
                  <div className={`p-2 rounded-full bg-slate-600/50 ${getAdminActivityColor(activity.type)}`}>
                    {getAdminActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.description}</p>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                      {activity.user && <span>👤 {activity.user}</span>}
                      {activity.amount && <span>💰 ${activity.amount}</span>}
                      <span><Clock className="inline h-3 w-3 mr-1" />{activity.timestamp}</span>
                      <span className="text-purple-400 font-medium">👨‍💼 {activity.admin}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
       </main>

       {/* Modals */}
       {showModal && (
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
           <div className="bg-slate-800 border border-slate-600 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
             <div className="flex items-center justify-between p-6 border-b border-slate-600">
                                                               <h2 className="text-2xl font-bold text-white">
                   {showModal === "users" && "All Users"}
                   {showModal === "revenue" && "Revenue & Transactions"}
                   {showModal === "products" && "All Products"}
                   {showModal === "reviews" && "Recent Reviews"}
                   {showModal === "payouts" && "Payout Details"}
                   {showModal === "adminActivity" && `${selectedAdmin}'s Activity Log`}
                 </h2>
               <Button
                 variant="outline"
                 size="sm"
                 onClick={() => setShowModal(null)}
                 className="border-slate-600 text-slate-300 hover:bg-slate-700"
               >
                 <X className="h-4 w-4" />
               </Button>
             </div>

             <div className="p-6">
               {/* Users Modal */}
               {showModal === "users" && (
                 <div className="space-y-4">
                   {users.map((user) => (
                     <div key={user.id} className="p-4 bg-slate-700/30 rounded-lg">
                       <div className="flex items-center justify-between mb-3">
                         <h3 className="text-lg font-semibold text-white">{user.name}</h3>
                         <Badge className={`${
                           user.status === "active" ? "bg-green-500" : 
                           user.status === "banned" ? "bg-red-500" : "bg-yellow-500"
                         } text-white`}>
                           {user.status}
                         </Badge>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                         <div>
                           <p><strong>Email:</strong> {user.email}</p>
                           <p><strong>Type:</strong> {user.type}</p>
                           <p><strong>Country:</strong> {user.country}</p>
                           <p><strong>Joined:</strong> {user.joinDate}</p>
                         </div>
                         <div>
                           {user.type === "buyer" && (
                             <p><strong>Total Reviews:</strong> {user.totalReviews}</p>
                           )}
                           {user.type === "seller" && (
                             <>
                               <p><strong>Total Products:</strong> {user.totalProducts}</p>
                               <p><strong>Revenue:</strong> ${user.revenue?.toFixed(2)}</p>
                             </>
                           )}
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               )}

               {/* Revenue Modal */}
               {showModal === "revenue" && (
                 <div className="space-y-6">
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                     <Card className="bg-slate-700/30 p-4">
                       <div className="text-center">
                         <p className="text-slate-400 text-sm">Total Revenue</p>
                         <p className="text-2xl font-bold text-white">${stats.totalRevenue.toFixed(2)}</p>
                       </div>
                     </Card>
                     <Card className="bg-slate-700/30 p-4">
                       <div className="text-center">
                         <p className="text-slate-400 text-sm">Total Payouts</p>
                         <p className="text-2xl font-bold text-white">${stats.totalPayouts.toFixed(2)}</p>
                       </div>
                     </Card>
                     <Card className="bg-slate-700/30 p-4">
                       <div className="text-center">
                         <p className="text-slate-400 text-sm">Net Profit</p>
                         <p className="text-2xl font-bold text-white">${(stats.totalRevenue - stats.totalPayouts).toFixed(2)}</p>
                       </div>
                     </Card>
                   </div>
                   <div className="space-y-4">
                     <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                     {transactions.map((transaction) => (
                       <div key={transaction.id} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                         <div className="flex items-center gap-4">
                           <div className={`p-2 rounded-full ${
                             transaction.type === "subscription" ? "bg-blue-500/20" :
                             transaction.type === "refund" ? "bg-red-500/20" : "bg-green-500/20"
                           }`}>
                             <CreditCard className={`h-4 w-4 ${
                               transaction.type === "subscription" ? "text-blue-400" :
                               transaction.type === "refund" ? "text-red-400" : "text-green-400"
                             }`} />
                           </div>
                           <div>
                             <p className="text-white font-medium">{transaction.description}</p>
                             <p className="text-sm text-slate-400">{transaction.seller} • {transaction.date}</p>
                           </div>
                         </div>
                         <div className="text-right">
                           <p className={`font-semibold ${
                             transaction.type === "refund" ? "text-red-400" : "text-green-400"
                           }`}>
                             {transaction.type === "refund" ? "-" : "+"}${transaction.amount.toFixed(2)}
                           </p>
                           <Badge className={`${
                             transaction.status === "completed" ? "bg-green-500" :
                             transaction.status === "pending" ? "bg-yellow-500" : "bg-red-500"
                           } text-white text-xs`}>
                             {transaction.status}
                           </Badge>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>
               )}

               {/* Products Modal */}
               {showModal === "products" && (
                 <div className="space-y-4">
                   {products.map((product) => (
                     <div key={product.id} className="p-4 bg-slate-700/30 rounded-lg">
                       <div className="flex items-center justify-between mb-3">
                         <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                         <Badge className={`${
                           product.status === "active" ? "bg-green-500" : 
                           product.status === "banned" ? "bg-red-500" : "bg-yellow-500"
                         } text-white`}>
                           {product.status}
                         </Badge>
                       </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 mb-4">
                         <div>
                           <p><strong>Seller:</strong> {product.seller}</p>
                           <p><strong>Price:</strong> ${product.price}</p>
                           <p><strong>Category:</strong> {product.category}</p>
                           <p><strong>Website:</strong> <a href={product.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">{product.website}</a></p>
                         </div>
                         <div>
                           <p><strong>Created:</strong> {product.createdAt}</p>
                           <p><strong>Status:</strong> {product.status}</p>
                         </div>
                       </div>
                       <div className="flex gap-2">
                         {product.status === "active" ? (
                           <Button 
                             size="sm" 
                             variant="outline"
                             onClick={() => handleBanProduct(product.id)}
                             className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                           >
                             <Ban className="h-4 w-4 mr-1" />
                             Ban Product
                           </Button>
                         ) : (
                           <Button 
                             size="sm" 
                             onClick={() => handleApproveProduct(product.id)}
                             className="bg-green-600 hover:bg-green-700 text-white"
                           >
                             <UserCheck className="h-4 w-4 mr-1" />
                             Approve Product
                           </Button>
                         )}
                       </div>
                     </div>
                   ))}
                 </div>
               )}

               {/* Reviews Modal */}
               {showModal === "reviews" && (
                 <div className="space-y-4">
                   {reviews.map((review) => (
                     <div key={review.id} className="p-4 bg-slate-700/30 rounded-lg">
                       <div className="flex items-center justify-between mb-3">
                         <h3 className="text-lg font-semibold text-white">{review.productName}</h3>
                         <div className="flex items-center gap-2">
                           <div className="flex">
                             {[...Array(5)].map((_, i) => (
                               <Star 
                                 key={i} 
                                 className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-slate-400"}`} 
                               />
                             ))}
                           </div>
                           <Badge className={`${
                             review.status === "published" ? "bg-green-500" : 
                             review.status === "rejected" ? "bg-red-500" : "bg-yellow-500"
                           } text-white`}>
                             {review.status}
                           </Badge>
                         </div>
                       </div>
                       <div className="text-sm text-slate-300 space-y-2">
                         <p><strong>Reviewer:</strong> {review.reviewer}</p>
                         <p><strong>Date:</strong> {review.date}</p>
                         <p><strong>Comment:</strong> "{review.comment}"</p>
                       </div>
                     </div>
                   ))}
                 </div>
               )}

                               {/* Payouts Modal */}
                {showModal === "payouts" && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">Total Payouts</p>
                          <p className="text-2xl font-bold text-white">${stats.totalPayouts.toFixed(2)}</p>
                        </div>
                      </Card>
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">Completed Payouts</p>
                          <p className="text-2xl font-bold text-white">{payouts.filter(p => p.status === "completed").length}</p>
                        </div>
                      </Card>
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">Pending Payouts</p>
                          <p className="text-2xl font-bold text-white">{payouts.filter(p => p.status === "pending").length}</p>
                        </div>
                      </Card>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">Payout Details</h3>
                      {payouts.map((payout) => (
                        <div key={payout.id} className="p-4 bg-slate-700/30 rounded-lg">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="text-lg font-semibold text-white">{payout.productName}</h4>
                            <Badge className={`${
                              payout.status === "completed" ? "bg-green-500" :
                              payout.status === "pending" ? "bg-yellow-500" : "bg-red-500"
                            } text-white`}>
                              {payout.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300 mb-3">
                            <div>
                              <p><strong>Seller:</strong> {payout.seller}</p>
                              <p><strong>Buyer:</strong> {payout.buyer}</p>
                              <p><strong>Amount:</strong> ${payout.amount.toFixed(2)}</p>
                              <p><strong>Date:</strong> {payout.date}</p>
                            </div>
                            <div>
                              <p><strong>PayPal Transaction ID:</strong></p>
                              <p className="font-mono text-blue-400 bg-slate-800 px-2 py-1 rounded text-xs">{payout.paypalTransactionId}</p>
                              {payout.reviewId && (
                                <p><strong>Review ID:</strong> {payout.reviewId}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span>💰 Payment via PayPal</span>
                            <span>•</span>
                            <span>📝 Review completed</span>
                            <span>•</span>
                            <span>✅ Refund processed</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Admin Activity Modal */}
                {showModal === "adminActivity" && selectedAdmin && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">Total Actions</p>
                          <p className="text-2xl font-bold text-white">{getFilteredAdminActivities(selectedAdmin).length}</p>
                        </div>
                      </Card>
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">User Bans</p>
                          <p className="text-2xl font-bold text-white">{getFilteredAdminActivities(selectedAdmin).filter(a => a.type === "user_banned").length}</p>
                        </div>
                      </Card>
                      <Card className="bg-slate-700/30 p-4">
                        <div className="text-center">
                          <p className="text-slate-400 text-sm">Product Actions</p>
                          <p className="text-2xl font-bold text-white">{getFilteredAdminActivities(selectedAdmin).filter(a => a.type.includes("product")).length}</p>
                        </div>
                      </Card>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white">{selectedAdmin}'s Activity History</h3>
                      {getFilteredAdminActivities(selectedAdmin).length > 0 ? (
                        getFilteredAdminActivities(selectedAdmin).map((activity) => (
                          <div key={activity.id} className="p-4 bg-slate-700/30 rounded-lg">
                            <div className="flex items-center gap-4">
                              <div className={`p-2 rounded-full bg-slate-600/50 ${getAdminActivityColor(activity.type)}`}>
                                {getAdminActivityIcon(activity.type)}
                              </div>
                              <div className="flex-1">
                                <p className="text-white font-medium">{activity.description}</p>
                                <div className="flex items-center gap-4 text-sm text-slate-400 mt-1">
                                  {activity.user && <span>👤 {activity.user}</span>}
                                  {activity.amount && <span>💰 ${activity.amount}</span>}
                                  <span><Clock className="inline h-3 w-3 mr-1" />{activity.timestamp}</span>
                                  <span className="text-purple-400 font-medium">👨‍💼 {activity.admin}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-slate-400">No activity found for {selectedAdmin}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
             </div>
           </div>
         </div>
       )}
     </div>
   );
 }
