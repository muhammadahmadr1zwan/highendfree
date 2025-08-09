const logos = [
  { name: "BrandOne", src: "/images/placeholder.svg" },
  { name: "BrandTwo", src: "/images/placeholder.svg" },
  { name: "BrandThree", src: "/images/placeholder.svg" },
  { name: "BrandFour", src: "/images/placeholder.svg" },
];

export default function LogoCloud() {
  return (
    <section className="py-10 bg-surface">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-80">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center justify-center">
              <img src={l.src} alt={l.name} className="h-8 md:h-10 opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 