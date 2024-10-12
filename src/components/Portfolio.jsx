import React from 'react';
import './Portfolio.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Криптология - Курсы Криптовалют',
    imageUrl: 'https://peplak.github.io/Cryptology-landing/screenshot.png', // Замените на изображение вашего сайта
    description: 'Онлайн-курсы по криптовалютам. Узнайте все о криптоинвестициях и блокчейне.',
    link: 'https://peplak.github.io/Cryptology-landing/', // Ссылка на сайт
  },
  {
    id: 2,
    title: 'Проект 2',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Описание проекта 2.',
  },
  {
    id: 3,
    title: 'Проект 3',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Описание проекта 3.',
  },
  {
    id: 4,
    title: 'Проект 4',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Описание проекта 4.',
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
