import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Star, Eye } from "lucide-react";

const resources = [
  {
    id: 1,
    title: "Premium UI Kit Bundle",
    description: "Complete design system with 200+ components",
    value: "$299",
    downloads: "12.5K",
    rating: 4.9,
    category: "Design",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop",
    popular: true
  },
  {
    id: 2,
    title: "SaaS Landing Template",
    description: "Modern landing page template with animations",
    value: "$149",
    downloads: "8.3K",
    rating: 4.8,
    category: "Template",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Icon Pack Pro",
    description: "1000+ premium icons in multiple formats",
    value: "$99",
    downloads: "15.2K",
    rating: 4.9,
    category: "Icons",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Dashboard Template",
    description: "Complete admin dashboard with charts",
    value: "$199",
    downloads: "6.7K",
    rating: 4.7,
    category: "Template",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Mobile App Mockups",
    description: "High-quality device mockups for presentations",
    value: "$79",
    downloads: "9.1K",
    rating: 4.8,
    category: "Mockup",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Typography Collection",
    description: "Premium font collection with 50+ typefaces",
    value: "$399",
    downloads: "4.5K",
    rating: 4.9,
    category: "Fonts",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
  }
];

const ResourceGrid = () => {
  return (
    <section className="py-20 px-6 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Popular </span>
            <span className="text-golden">Free Resources</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check out these high-value resources downloaded by thousands of creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card key={resource.id} className="bg-surface-light border-border hover:border-golden/50 transition-all duration-300 overflow-hidden group">
              <div className="relative">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {resource.popular && (
                  <Badge className="absolute top-3 left-3 bg-golden text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-semibold text-golden">
                  {resource.value}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {resource.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-golden text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{resource.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {resource.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      <span>{resource.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>Preview</span>
                    </div>
                  </div>
                  
                  <Button size="sm" className="bg-golden hover:bg-golden-dark text-primary-foreground">
                    Get Free
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground px-8">
            View All Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceGrid;