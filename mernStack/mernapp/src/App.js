import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Features from './components/Features/Features';
import Pricing from './components/Pricing/Pricing';
import Premium from './components/Premium/Premium';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import GetStarted from './components/GetStarted/GetStarted';
import Contact from './components/Contact/Contact'
import Logout from './components/Logout/Logout'
import Register from './components/Signup/Signup'

const App = () => {
  const links = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Premium', href: '/premium' },
    { name: 'Login', href: '/login' },
    { name: 'Contact', href: '/contact' },
  ];

  const buttonLink = { name: 'Get Started', href: '/getstarted' };
  const logo = 'https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg';

  return (
    <Router>

      <div className="app-container">
        <Navbar links={links} buttonLink={buttonLink} logo={logo} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/getstarted" element={<GetStarted />} />
        </Routes>
        <Footer />
      </div>
    </Router>


  );
};

export default App;
