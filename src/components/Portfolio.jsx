import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Криптология - Курсы Криптовалют',
    description: 'Онлайн-курсы по криптовалютам. Узнайте все о криптоинвестициях и блокчейне.',
    link: 'https://peplak.github.io/Cryptology-landing/', // Ссылка на сайт
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Портфолио</h2>
      <p>Вот некоторые из наших завершенных проектов:</p>
      <div className="portfolio-gallery">
        {portfolioItems.map((item) => (
          <div key={item.id} className="portfolio-card">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
