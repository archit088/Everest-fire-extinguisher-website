export default function Footer() {
  return (
    <footer className="bg-[#cc0000] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Everest Fire Safety</h2>
          <p className="text-sm leading-relaxed">
            1st Floor, 2255 Sarai Top Khana,
            <br />
            H.C. Sen Road, Chandni Chowk,
            <br />
            Delhi - 110006
          </p>
          <p className="mt-3 text-sm">
            <span className="font-semibold">GST No:</span> 07AWLPC4260D1ZV
          </p>
          <p className="mt-1 text-sm">
            <span className="font-semibold">Owner:</span> Vishal Chand
          </p>
          <p className="mt-1 text-sm">
            <span className="font-semibold">Mobile:</span> 9958305393
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-semibold mb-3">We Are</h2>
          <ul className="space-y-2 text-sm">
            <li>• Consultants</li>
            <li>• Contractors</li>
            <li>• Suppliers</li>
            <li>• Fire Hydrant Installation</li>
            <li>• Sprinkler System</li>
            <li>• Fire Alarm System</li>
            <li>• Fire Extinguishers</li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Contact</h2>
          <p className="text-sm mb-3">
            Need assistance with fire safety solutions?
          </p>
          <a
            href="tel:9958305393"
            className="inline-block bg-white text-[#cc0000] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-red-300 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Everest Fire Safety. All rights reserved.
      </div>
    </footer>
  );
}
