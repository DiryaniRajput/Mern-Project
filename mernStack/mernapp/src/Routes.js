import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Features from './components/Features/Features';
import Premium from './components/Premium/Premium';
import Pricing from './components/Pricing/Pricing';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const links = [
  { name: 'Features', href: '/features' },
  { name: 'Premium', href: '/premium' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Sign in', href: '/signin' },
];

const buttonLink = {
  name: 'Get Started',
  href: '/get-started',
};

const logoUrl = 'https://uploads-ssl.webflow.com/5b680680f109cf5a2fd941ab/5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg';

const AppRoutes = () => {
  return (
    <Router>
      <Navbar links={links} logo={logoUrl} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
