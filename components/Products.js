"use client";
import Image from "next/image";

const products = [
  { name: "ABC Fire Extinguisher", img: "/extinguisher.jpg" },
  { name: "CO2 Extinguisher", img: "/co2.jpg" },
  { name: "Hydrant system ", img: "/hydrant.jpg" },
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Product</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((item, index) => (
            <div
              key={index}
              className=" p-6 rounded-xl shadow-lg hover:shadow-2xl transition bg-gray-50"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-xl font-semibold text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
