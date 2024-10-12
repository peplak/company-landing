import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Создание сайтов',
    description: 'Разработка уникальных и современных сайтов для вашего бизнеса.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Замените на реальные ссылки на изображения
  },
  {
    title: 'Боты для Telegram',
    description: 'Создание умных ботов для Telegram для автоматизации процессов.',
    image: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Замените на реальные ссылки на изображения
  },
  {
    title: 'Торговые боты',
    description: 'Разработка эффективных торговых ботов для работы на бирже.',
    image: 'https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Замените на реальные ссылки на изображения
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h2>Наши Услуги</h2>
      <div className="services-gallery">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
