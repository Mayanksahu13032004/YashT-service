import React from "react";

const cardData = new Array(6).fill({
  title: "Sample Project",
  description:
    "We don’t follow trends. We create the conditions for timelessness. Explore the growing constellation of ventures born from our ethos",
});

export default function BrandsSection() {
  return (
    <section className="bg-[#f2e9ff] py-16 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Universe of Brands
      </h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-12">
        We don’t follow trends. We create the conditions for timelessness.
        Explore the growing constellation of ventures born from our ethos
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-10">
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`rounded-xl border ${
              idx === 1 ? "border-blue-500" : "border-purple-200"
            } overflow-hidden shadow-md bg-white`}
          >
            {/* Header */}
            <div className="flex items-center justify-center gap-2 py-4">
              <div className="w-5 h-5 bg-orange-500 rounded-full" />
              <h3 className="text-lg font-bold text-gray-900">
                {card.title}
              </h3>
            </div>

            {/* Body */}
            <div className="bg-purple-700 text-white p-5 text-sm leading-relaxed rounded-b-xl">
              {card.description}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full text-lg transition duration-300">
        Explore All
      </button>
    </section>
  );
}
