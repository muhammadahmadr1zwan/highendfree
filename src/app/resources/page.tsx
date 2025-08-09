import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-6">Resources</h1>
        <p className="text-muted-foreground max-w-3xl">
          Helpful links and tools for getting the most out of HighEndFree. Use these to understand the process,
          prepare your reviews, and get support when needed.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="p-6 rounded-lg border bg-surface-light">
            <h2 className="text-xl font-semibold mb-3">Guides</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-golden" href="#">Getting Started (Step-by-step)</a></li>
              <li><a className="hover:text-golden" href="#">How to Open a Ticket</a></li>
              <li><a className="hover:text-golden" href="#">Submitting Proofs Correctly</a></li>
            </ul>
          </section>

          <section className="p-6 rounded-lg border bg-surface-light">
            <h2 className="text-xl font-semibold mb-3">Review Assets</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-golden" href="#">Review Templates</a></li>
              <li><a className="hover:text-golden" href="#">Screenshot Checklists</a></li>
              <li><a className="hover:text-golden" href="#">Best Practices for 5★ Reviews</a></li>
            </ul>
          </section>

          <section className="p-6 rounded-lg border bg-surface-light">
            <h2 className="text-xl font-semibold mb-3">Support</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a className="hover:text-golden" href="#">Open a Support Ticket</a></li>
              <li><a className="hover:text-golden" href="#">Community Guidelines</a></li>
              <li><a className="hover:text-golden" href="#">Contact an Agent</a></li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 