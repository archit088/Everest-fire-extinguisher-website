const logos = [
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
];

export default function Brands() {
  return (
    <section id="brands" className="section-anchor py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-semibold mb-6">Brands We Work With</h3>
        <div className="flex items-center justify-center gap-8">
          {logos.map((l, i) => (
            <img
              key={i}
              src={l}
              className="h-12 grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
