import React from 'react'
import '../style/navbarstyle.css';
function Navbar() {
  return (
 <div id="app">
    <header id="navbar">
      <div class="brand">Sample Project</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Our Brands</a>
        <a href="#">What We Do</a>
        <a href="#">Team</a>
        <a href="#">Careers</a>
      </nav>
      <button class="email-btn">📧</button>
    </header>

    <section id="hero">
      <h1>
        Where <span class="highlight">Vision</span> Becomes Venture
      </h1>
      <p>
        Sample Project builds and nurtures independent brands that do more than compete—they connect, inspire, and redefine the emotional and cultural fabric of everyday life.
      </p>
      <button>Discover Our Vision</button>
    </section>

    <section id="info">
      <div class="left">
        <span class="tag">What We Are</span>
        <h2>
          Not a Product. Not a Platform. <span class="orange">A Philosophy</span>
        </h2>
        <p>
          Sample Project is the invisible architecture behind transformative brand-defining ideas, people, and systems that create meaningful impact across diverse industries. From wellness to culture, from technology to aesthetics — we operate at the intersection of feeling and future.
        </p>
      </div>
      <div class="right">
        <img src="/path/to/your-illustration.png" alt="Growth" />
      </div>
    </section>

    <div id="cta">
      <button>Our Brands</button>
    </div>
  </div>

  )
}

export default Navbar
