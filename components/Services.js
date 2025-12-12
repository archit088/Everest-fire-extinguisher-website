const services = [
  {
    title: "Fire Extinguisher Supply",
    desc: "ABC, CO2, Clean Agent extinguishers for all environments.",
    icon: "🔥",
  },
  {
    title: "AMC & Annual Maintenance",
    desc: "Regular inspection, servicing & refilling of all systems.",
    icon: "🛠️",
  },
  {
    title: "Emergency Evacuation Setup",
    desc: "Exit lights, fire doors, assembly planning & sirens.",
    icon: "🚨",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-tight">
          Our <span className="text-fire">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 shadow-sm hover:shadow-xl hover:border-fire transition-all duration-300 overflow-hidden"
            >
              {/* Hover red glow */}
              <div className="absolute inset-0 bg-fire opacity-0 group-hover:opacity-10 transition-opacity"></div>

              {/* Icon */}
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                {s.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-fire transition-colors">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
