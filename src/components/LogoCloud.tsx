const logos = [
  { name: "BrandOne", src: "/placeholder.svg" },
  { name: "BrandTwo", src: "/placeholder.svg" },
  { name: "BrandThree", src: "/placeholder.svg" },
  { name: "BrandFour", src: "/placeholder.svg" },
];

export default function LogoCloud() {
  return (
    <section className="py-10 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center opacity-60 hover:opacity-90 transition-opacity">
              <img src={l.src} alt={l.name} className="h-8 md:h-10 grayscale" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 