import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-14">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="rounded-2xl border border-golden/30 bg-gradient-to-r from-golden/10 to-golden/5 p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to start earning full refunds?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join and follow the 8‑step process. It’s simple, transparent, and designed for a smooth reviewer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/auth/signup"><Button className="bg-golden hover:bg-golden-dark text-primary-foreground px-8">Get started</Button></a>
            <a href="/pricing"><Button variant="outline" className="border-golden text-golden hover:bg-golden hover:text-primary-foreground px-8">View pricing</Button></a>
          </div>
        </div>
      </div>
    </section>
  );
} 