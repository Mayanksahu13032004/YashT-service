import React from "react";
// import TelescopeImage from "../assets/telescope-illustration.png"; // left illustration
// import MountainImage from "../assets/mountain-illustration.png";  // right illustration

export default function VisionSection() {
  return (
    <section className="relative bg-[#f4edfd] py-20 px-6 lg:px-20 overflow-hidden">
      
      {/* Label at the top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3f2d87] text-white text-xs font-semibold px-4 py-1 rounded-t-md shadow">
        The Vision
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Left Image */}
        <div className="max-w-xs w-full">
          {/* <img
            src={TelescopeImage}
            alt="Telescope Illustration"
            className="w-full object-contain"
          /> */}
        </div>

        {/* Center Content */}
        <div className="text-center max-w-2xl w-full">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Our Vision Is Not to Own the Future. It’s to Inspire It
          </h2>
          <p className="text-gray-700 mb-2">
            Only deep belief in ideas that matter and experiences that move people.
          </p>
          <p className="text-gray-700 mb-6">
            In a world driven by urgency, we build with intention
          </p>

          {/* Decorative line */}
          <div className="border-t-2 border-dotted border-blue-400 w-1/2 mx-auto mb-6 relative">
            <div className="absolute left-1/2 -top-3 transform -translate-x-1/2 bg-white px-2 text-blue-400 font-bold">✕</div>
          </div>

          {/* CTA Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300">
            Learn More About Us
          </button>
        </div>

        {/* Right Image */}
        <div className="max-w-xs w-full">
          {/* <img
            src={MountainImage}
            alt="Mountain with Flag"
            className="w-full object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
}
