import React from 'react';
import './HeroSection.css'; // Не забудем стили

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>FLOW</h1>
        <nav className="hero-nav">
          <a href="#portfolio">Наши работы</a>
          <a href="#services">Услуги</a>
          <a href="#testimonials">Отзывы</a>
        </nav>
      </div>
      <div className="contact-us">
        <a href="#contact"></a>
      </div>
    </section>
  );
};

export default HeroSection;
