import React from 'react'

function Navbar() {
  return (
  <div className="min-h-screen bg-white font-sans">

  {/* Navbar */}
  <header className="flex justify-between items-center px-8 py-4 shadow-md">
    <div className="text-xl font-bold text-purple-600">Sample Project</div>
    <nav className="space-x-6 text-gray-700 font-medium">
      <a href="#" className="hover:text-purple-600">Home</a>
      <a href="#">About</a>
      <a href="#">Our Brands</a>
      <a href="#">What We Do</a>
      <a href="#">Team</a>
      <a href="#">Careers</a>
    </nav>
    <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
      📧
    </button>
  </header>

  {/* Hero Section */}
  <section className="text-center py-24 bg-gradient-to-r from-indigo-900 to-purple-800 text-white relative">
    <h1 className="text-5xl font-bold mb-4">
      Where <span className="text-yellow-400">Vision</span> Becomes Venture
    </h1>
    <p className="max-w-2xl mx-auto mb-6">
      Sample Project builds and nurtures independent brands that do more than compete—they connect, inspire, and redefine the emotional and cultural fabric of everyday life.
    </p>
    <button className="bg-white text-purple-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
      Discover Our Vision
    </button>
  </section>

  {/* Info Section */}
  <section className="flex flex-col md:flex-row items-center gap-8 px-8 py-16">
    <div className="md:w-1/2">
      <span className="inline-block bg-red-500 text-white text-sm px-3 py-1 rounded-full mb-2">What We Are</span>
      <h2 className="text-2xl font-bold mb-4">
        Not a Product. Not a Platform. <span className="text-orange-500">A Philosophy</span>
      </h2>
      <p className="text-gray-600">
        Sample Project is the invisible architecture behind transformative brand-defining ideas, people, and systems that create meaningful impact across diverse industries. From wellness to culture, from technology to aesthetics — we operate at the intersection of feeling and future.
      </p>
    </div>
    <div className="md:w-1/2">
      <img src="/path/to/your-illustration.png" alt="Growth" className="w-full max-w-md mx-auto" />
    </div>
  </section>

  {/* Call To Action */}
  <div className="text-center my-10">
    <button className="bg-purple-700 text-white px-6 py-3 rounded-full hover:bg-purple-800">
      Our Brands
    </button>
  </div>
</div>

  )
}

export default Navbar
