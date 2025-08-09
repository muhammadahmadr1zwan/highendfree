import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function DiscordBanner() {
  return (
    <section className="py-10 bg-surface">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl border border-border bg-surface-light p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-golden/10 text-golden flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Join our Discord</h3>
              <p className="text-sm text-muted-foreground">Get help from agents, see new products, and track tickets.</p>
            </div>
          </div>
          <a href="https://discord.gg/xVTJvQr6aq" target="_blank" rel="noopener noreferrer">
            <Button className="bg-golden hover:bg-golden-dark text-primary-foreground px-6">Join Discord</Button>
          </a>
        </div>
      </div>
    </section>
  );
} 