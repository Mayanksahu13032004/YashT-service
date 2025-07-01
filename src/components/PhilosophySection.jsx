import React from "react";
// import Image from "../assets/philosophy-illustration.png"; // replace with your image path

export default function PhilosophySection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 px-6 py-16 bg-white">
      
      {/* Left Illustration */}
      <div className="border-2 border-blue-500 rounded-md max-w-md">
        <img
          src="https://www.figma.com/design/NlQZ6tN4loAIYTiliKvZ6O/Untitled?node-id=21-7861&t=rK1bXm1IQQ10x72r-4"
          alt="Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="bg-[#ffefea] p-6 lg:p-10 max-w-xl rounded-md shadow-sm text-left">
        <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-t-md mb-4">
          The Philosophy
        </span>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What If Business Could{" "}
          <span className="text-orange-500">Feel Like Art?</span>
        </h2>
        <p className="text-gray-800 mb-4 leading-relaxed">
          At Sample Project, we believe brands can be portals not just to
          profit, but to purpose, transformation, and collective uplift. We
          obsess over craft, intuition, resonance, and cultural timing.
        </p>
        <p className="text-gray-800">
          Every brand we build begins with a single question: <br />
          <span className="text-orange-600 italic font-semibold">
            Does this make the world feel more alive?
          </span>
        </p>
      </div>
    </section>
  );
}
