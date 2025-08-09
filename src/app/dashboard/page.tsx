"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Ticket, Star, TrendingUp, Clock, Gift } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-24">
        {/* Welcome Section */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Your <span className="text-golden">Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            You're now part of the HighEnd Free community! Start browsing premium products and earning full refunds for your honest reviews.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link href="/dashboard/products">
            <Card className="p-8 bg-gradient-to-br from-golden/10 to-golden/5 border-golden/20 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
              <Package className="h-12 w-12 text-golden mb-4" />
              <h3 className="text-xl font-semibold mb-2">Browse Products</h3>
              <p className="text-muted-foreground mb-4">
                Discover amazing products available for review and full refund.
              </p>
              <Button className="bg-golden hover:bg-golden-dark text-primary-foreground">
                View Products →
              </Button>
            </Card>
          </Link>

          <Link href="/ticket">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
              <Ticket className="h-12 w-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Create Ticket</h3>
              <p className="text-muted-foreground mb-4">
                Request a product or get support from our team.
              </p>
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                Open Ticket →
              </Button>
            </Card>
          </Link>

          <Link href="/dashboard/reviews">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
              <Star className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">My Reviews</h3>
              <p className="text-muted-foreground mb-4">
                Track your review progress and refund status.
              </p>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                View Reviews →
              </Button>
            </Card>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
            <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">0</div>
            <div className="text-sm text-muted-foreground">Reviews Completed</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
            <Gift className="h-8 w-8 text-golden mx-auto mb-2" />
            <div className="text-2xl font-bold text-golden">$0.00</div>
            <div className="text-sm text-muted-foreground">Total Refunds</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
            <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-400">0</div>
            <div className="text-sm text-muted-foreground">Pending Reviews</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
            <Star className="h-8 w-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">-</div>
            <div className="text-sm text-muted-foreground">Avg Rating</div>
          </Card>
        </div>

        {/* Getting Started Guide */}
        <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <h3 className="font-semibold">Browse Products</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Explore our curated catalog of high-quality products available for review.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  2
                </div>
                <h3 className="font-semibold">Request & Review</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Create a ticket, purchase the product, and leave an honest 5-star review.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-golden rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  3
                </div>
                <h3 className="font-semibold">Get Refunded</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Receive your full refund within 24-48 hours after verification.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/dashboard/products">
              <Button className="bg-golden hover:bg-golden-dark text-primary-foreground px-8 py-3">
                Start Browsing Products
              </Button>
            </Link>
          </div>
        </Card>

        {/* Recent Activity */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
          <Card className="p-8 text-center bg-card/50 backdrop-blur-sm">
            <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No activity yet</h3>
            <p className="text-muted-foreground mb-6">
              Start by browsing products or creating your first ticket.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard/products">
                <Button className="bg-golden hover:bg-golden-dark text-primary-foreground">
                  Browse Products
                </Button>
              </Link>
              <Link href="/ticket">
                <Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground">
                  Create Ticket
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
