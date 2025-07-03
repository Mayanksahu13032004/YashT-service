import React, { useState } from 'react';
import '../style/navbarstyle.css';
import img1 from '../assets/img1.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="app">
 <div
  className="hello"
  style={{
    backgroundImage: `url(${img4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '40vh', // ⬅️ much more responsive than 35rem
    width: '100%',
    maxHeight: '600px', // ⬅️ caps max height
  }}
>

  {/* Your content goes here */}

      <header id="navbar">
  <div className="brand">Sample Project</div>

  <div className='navi'>
    <div className="hamburger" onClick={toggleMenu}>
      {menuOpen ? '✖' : '☰'}
    </div>

    <nav
      className={`nav-links ${menuOpen ? 'open' : ''}`}
      style={{
        zIndex: 1101,
        maxHeight: menuOpen ? '60vh' : '0',
        overflowY: 'auto',
        transition: 'max-height 0.4s ease-in-out'
      }}
    >
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Our Brands</a>
      <a href="#">What We Do</a>
      <a href="#">Team</a>
      <a href="#">Careers</a>
    </nav>
  </div>
</header>

 
</div>

    </div>
  );
}

export default Navbar;
