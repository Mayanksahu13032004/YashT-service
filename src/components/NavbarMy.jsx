import React, { useState } from 'react';
import '../style/mynavbar.css';
import img from '../assets/mobilenavbg.jpg';
import btnnav from '../assets/btnnav.png';
import textnav from '../assets/textnav.png';
import textnav2 from '../assets/textnav2.png';


function NavbarMy() {
  const [open, setOpen] = useState(false);

  return (
    <div className='main' >
      <header className='mobile-header'>
        <div className='logo'>
          <div className='logo-dot'></div>
          <span>Sample Project</span>
        </div>

        <div className='hamburger' onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </div>
      </header>
      <div className='msg'></div>

      <nav className={`mobile-nav ${open ? 'show' : ''}`}>
      <ul >
  <li className='active'>Home</li>
  <li>About</li>
  <li>Our Brands</li>
  <li>What We Do</li>
  <li>Team</li>
  <li>Careers</li>
</ul>


      </nav>
      {/* this nav is only for desktop  */}
      <nav className='desktop-nav'>
        <div className='logo'>
          <div className='logo-dot'></div>
          <span>Sample Project</span>
        </div>
    <ul >
  <li className='active'>Home</li>
  <li>About</li>
  <li>Our Brands</li>
  <li>What We Do</li>
  <li>Team</li>
  <li>Careers</li>
</ul>
      </nav>
     {/* // below two div is just for tab and mobile */}
     
      <span className='textnav' >Where Vision Becomes Venture</span>
    


      <div className='textnav2' >Sample World builds and nurtures independent brands that do more than compete they connect, inspire, and redefine the emotional and cultural fabric of everyday life </div>
      
      
 {/* // this div is just for mobile  */}
  
       <div className='btnnav' >
          Discover Our Vision
      </div>

    </div>
  );
}

export default NavbarMy;
