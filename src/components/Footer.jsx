import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1A0B2E] text-white py-10 px-6 md:px-20 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-20 bg-cover bg-center z-0" />

      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left: Logo and copyright */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-5 h-5 rounded-full bg-orange-500" />
            <span className="text-lg font-semibold">Sample Project</span>
          </div>
          <p className="text-sm text-gray-300">
            © 2025 Sample Project. All rights reserved
          </p>
        </div>

        {/* Center: Navigation */}
        <div className="bg-[#3b2c5a] rounded-md px-6 py-2 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-gray-100">
          <a href="#" className="hover:text-orange-400 transition">Home</a>
          <a href="#" className="hover:text-orange-400 transition">About</a>
          <a href="#" className="hover:text-orange-400 transition">Our Brands</a>
          <a href="#" className="hover:text-orange-400 transition">What We Do</a>
          <a href="#" className="hover:text-orange-400 transition">Team</a>
          <a href="#" className="hover:text-orange-400 transition">Careers</a>
        </div>

        {/* Right: Terms */}
        <div className="text-sm text-gray-300 space-x-4">
          <a href="#" className="hover:underline">Term of Use</a>
          <span>|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
