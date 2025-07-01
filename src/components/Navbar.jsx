import React, { useState } from 'react';
import '../style/navbarstyle.css';
import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="app">
      <div className='hello'>
      <header id="navbar">
        <div className="brand">Sample Project</div>

      <div className='navi'>
          <div className="hamburger" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Our Brands</a>
          <a href="#">What We Do</a>
          <a href="#">Team</a>
          <a href="#">Careers</a>
        </nav>
      </div>

      <div><img className='imgside' src={img3} alt="" /></div>
      </header>
 </div>
      <section id="hero">
        <h1>
          Where <span className="highlight">Vision</span> Becomes Venture
        </h1>
        <p>
          Sample Project builds and nurtures independent brands that do more than compete—they connect, inspire, and redefine the emotional and cultural fabric of everyday life.
        </p>
        <button>Discover Our Vision</button>
      </section>

<section id="info">
  <div className="left">
    <span className="tag">What We Are</span>
    <h2>
      Not a Product. Not a Platform. <span className="orange">A Philosophy</span>
    </h2>
    <p>
      Sample Project is the invisible architecture behind transformative brand-defining ideas, people, and systems that create meaningful impact across diverse industries...
    </p>
  </div>
  <div className="right">
    <img className="rightimg" src={img1} alt="Growth" />
  </div>
</section>


      <div id="cta">
        <button>Our Brands</button>
      </div>
    </div>
  );
}

export default Navbar;
