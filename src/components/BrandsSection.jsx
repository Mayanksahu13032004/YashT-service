import React from "react";

const cardData = new Array(6).fill({
  title: "Sample Project",
  description:
    "We don’t follow trends. We create the conditions for timelessness. Explore the growing constellation of ventures born from our ethos",
});

export default function BrandsSection() {
  return (
    <>
      {/* Inline Style Tag */}
      <style>
        {`
          #brands-section {
            background-color: #f2e9ff;
            padding: 4rem 1rem;
            text-align: center;
          }

          #brands-section h2 {
            font-size: 2rem;
            font-weight: bold;
            color: #1f2937; /* gray-900 */
            margin-bottom: 1rem;
          }

          @media (min-width: 768px) {
            #brands-section h2 {
              font-size: 2.25rem;
            }
          }

          #brands-section p {
            color: #374151; /* gray-700 */
            max-width: 768px;
            margin: 0 auto 3rem;
          }

          .brands-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 96rem;
            margin: 0 auto 2.5rem;
          }

          @media (min-width: 640px) {
            .brands-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .brands-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .brand-card {
            border-radius: 0.75rem;
            border: 1px solid #d8b4fe; /* purple-200 */
            overflow: hidden;
            background-color: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }

          .brand-card.blue-border {
            border-color: #3b82f6; /* blue-500 */
          }

          .card-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            padding: 1rem 0;
          }

          .dot {
            width: 1.25rem;
            height: 1.25rem;
            background-color: #f97316; /* orange-500 */
            border-radius: 9999px;
          }

          .card-title {
            font-size: 1.125rem;
            font-weight: bold;
            color: #111827; /* gray-900 */
          }

          .card-body {
            background-color: #6b21a8; /* purple-700 */
            color: white;
            padding: 1.25rem;
            font-size: 0.875rem;
            line-height: 1.6;
            border-bottom-left-radius: 0.75rem;
            border-bottom-right-radius: 0.75rem;
          }

          .cta-button {
            background-color: #f97316; /* orange-500 */
            color: white;
            font-weight: 600;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-size: 1.125rem;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .cta-button:hover {
            background-color: #ea580c; /* orange-600 */
          }
        `}
      </style>

      {/* Section */}
      <section id="brands-section">
        <h2>Our Universe of Brands</h2>
        <p>
          We don’t follow trends. We create the conditions for timelessness.
          Explore the growing constellation of ventures born from our ethos
        </p>

        <div className="brands-grid">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className={`brand-card ${idx === 1 ? "blue-border" : ""}`}
            >
              <div className="card-header">
                <div className="dot" />
                <h3 className="card-title">{card.title}</h3>
              </div>
              <div className="card-body">{card.description}</div>
            </div>
          ))}
        </div>

        <button className="cta-button">Explore All</button>
      </section>
    </>
  );
}
