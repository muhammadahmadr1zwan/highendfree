import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-24 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">🛍️ About HighEndFree</h1>
        <p className="text-muted-foreground leading-relaxed">
          HighEndFree is a trusted shopping rewards platform that empowers everyday consumers to receive full refunds on select Amazon purchases — in exchange for posting verified 5-star reviews. We believe in transparency, trust, and giving users access to high-quality products while supporting sellers who value great customer feedback.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Our system is built to ensure fairness, safety, and compliance every step of the way. From your first product request to your final PayPal refund, you’re guided by a real agent — not a bot — ensuring that the process is smooth, secure, and fully supported.
        </p>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">🔁 How It Works: The 8-Step Review & Refund System</h2>
          <ol className="list-decimal list-inside space-y-4 text-muted-foreground">
            <li>
              <span className="text-foreground font-medium">Browse Eligible Products</span>
              <div>Explore a curated collection of approved Amazon products available for review-based refunds.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Request an Item</span>
              <div>Select a product you’re genuinely interested in and submit your request through the HighEndFree dashboard.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Wait for Approval</span>
              <div>After reviewing your request, our team will confirm availability and assign you a dedicated guide.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Purchase the Product</span>
              <div>Once approved, purchase the item from Amazon at full price using your personal Amazon account.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Submit Proof of Purchase</span>
              <div>Upload your order confirmation or invoice to verify your purchase and continue the process.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Try the Product & Leave a Review</span>
              <div>Once the product arrives, use it and leave a genuine 5-star review based on your real experience.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Provide Review Evidence</span>
              <div>Share a screenshot or direct link to your Amazon review so our team can verify its authenticity.</div>
            </li>
            <li>
              <span className="text-foreground font-medium">Receive a Full Refund</span>
              <div>After successful verification, your refund is issued directly to your PayPal account — typically within 2–3 business days.</div>
            </li>
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">✅ Why People Choose HighEndFree</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>100% Product Refunds — Real cash back, not gift cards or credits</li>
            <li>Personal Support — Every user is paired with a dedicated guide to assist throughout the process</li>
            <li>No Fees, No Subscriptions — No hidden costs, ever</li>
            <li>Genuine Product Discovery — Choose from products you’ll actually want to use</li>
            <li>Secure Payouts via PayPal — Quick, trackable refunds without hassle</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
} 