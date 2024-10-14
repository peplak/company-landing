import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import './App.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <HeroSection />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;
