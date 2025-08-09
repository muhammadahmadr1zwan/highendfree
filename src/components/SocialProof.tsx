import { Card } from "@/components/ui/card";
import { Star, TrendingUp, Users, Download } from "lucide-react";

const stats = [
  {
    icon: Download,
    value: "2.5M+",
    label: "Downloads",
    description: "Resources downloaded by creators worldwide"
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Users",
    description: "Creators using our premium resources"
  },
  {
    icon: TrendingUp,
    value: "$2M+",
    label: "Value Saved",
    description: "Total value of free resources provided"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating",
    description: "Rated by thousands of users"
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "UI Designer",
    content: "HighEndFree saved me thousands! The quality of resources here rivals paid marketplaces.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Mike Chen",
    role: "Freelancer",
    content: "I've built my entire client portfolio using resources from this platform. Absolutely incredible!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Emma Davis",
    role: "Startup Founder",
    content: "As a bootstrap startup, HighEndFree gave us access to premium design assets we couldn't afford.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
  }
];

const SocialProof = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Stats Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="text-golden">Creators Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of designers and developers who are already saving money with our premium free resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-surface border-border p-8 text-center hover:border-golden/50 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-golden" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-golden font-semibold mb-1">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            What Our Users Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-surface-light border-border p-6 hover:border-golden/50 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4 text-golden">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;