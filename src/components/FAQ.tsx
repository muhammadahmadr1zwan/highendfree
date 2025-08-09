export default function FAQ() {
  const faqs = [
    {
      q: "How does this work?",
      a: "Create a ticket with an agent, purchase the product, leave a verified 5‑star review, then receive a full PayPal refund.",
    },
    {
      q: "How long do refunds take?",
      a: "Typically within 24–48 hours after your review is verified by the agent.",
    },
    {
      q: "What do I need to provide?",
      a: "Your Amazon profile link, PayPal username, and the live review link when it’s posted.",
    },
    {
      q: "Is this safe?",
      a: "We work with verified sellers and agents. Your data is kept private and used only for processing refunds.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-surface">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            <span className="text-foreground">Frequently asked </span>
            <span className="text-golden">questions</span>
          </h2>
          <p className="text-muted-foreground">Quick answers to common questions.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-lg border border-border bg-surface-light p-5">
              <summary className="cursor-pointer text-lg font-medium text-foreground marker:hidden">
                {f.q}
              </summary>
              <p className="text-muted-foreground mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
} 