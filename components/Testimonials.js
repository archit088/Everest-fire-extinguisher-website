const items = [
  {
    text: "Professional, quick installation and excellent support.",
    author: "Ravi Sharma - Builder",
  },
  { text: "AMC service is top notch. Highly recommend.", author: "Priya K." },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-anchor py-20 bg-black text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
        <div className="space-y-6">
          {items.map((it, idx) => (
            <div key={idx} className="bg-white/6 p-6 rounded-xl">
              <p className="text-lg">“{it.text}”</p>
              <p className="mt-3 text-sm text-gray-300">— {it.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
