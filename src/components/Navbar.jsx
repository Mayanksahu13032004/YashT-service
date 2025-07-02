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
    height: '35rem', // you can change the height as per your need
    width: '100%',
  }}
>
  {/* Your content goes here */}

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

      <div></div>
      </header>
 
</div>

    </div>
  );
}

export default Navbar;
