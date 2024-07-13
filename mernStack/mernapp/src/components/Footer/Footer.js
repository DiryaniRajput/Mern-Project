import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-footer">   
      <div className="footer-left">
        <img src="https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg" alt="Logo" className="footer-logo" />
        <p>© 2018 Spoon Inc, All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <ul className="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#premium">Premium</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul className="footer-links">
            <li><a href="#image-license-info">Image License Info</a></li>
            <li><a href="#powered-by-webflow">Powered by Webflow</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="#facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#twitter"><i className="fab fa-twitter"></i></a>
          <a href="#instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
