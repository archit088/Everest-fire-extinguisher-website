export default function Hero() {
  return (
    <section
      id="home"
      className="section-anchor relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://images.pexels.com/photos/69934/firefighters-fire-flames-outside-69934.jpeg"
        alt="fire hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Complete Fire Safety Solutions
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
          Installation • Testing • AMC • Corporate & Industrial Fire Protection
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-fire text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Get Free Inspection
          </a>
          <a
            href="#services"
            className="bg-white/20 text-white px-6 py-3 rounded-lg border border-white/30 hover:bg-white/30 transition"
          >
            Our Services
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 gap-3">
        {/* small indicators (static) */}
        <div className="w-3 h-3 rounded-full bg-white/70"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
        <div className="w-3 h-3 rounded-full bg-white/40"></div>
      </div>
    </section>
  );
}
