import React from 'react';
 import './Navbar.css';

const Navbar = ({ links = [], buttonLink = {}, logo }) => {
  return (
    <nav className="navbar-navbar">   
      <div className="navbar-logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-links">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-button">
        <a href={buttonLink.href} className="navbar-button">  
          {buttonLink.name} 
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
