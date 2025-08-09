export default function Impact() {
  const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "50+", label: "Internships granted" },
    { value: "3000", label: "Dollars saved" },
    { value: "5+", label: "Projects completed" },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">We have experience with </span>
            <span className="text-golden">bringing results</span>
          </h2>
          <p className="text-muted-foreground mt-2">Numbers that showcase our impact.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-surface-light p-6">
              <div className="text-4xl font-extrabold text-golden">{s.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 