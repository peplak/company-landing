import React, { useState } from 'react';
import './Testimonials.css'; // Импортируйте стили для отзывов

const testimonialsData = [
  {
    name: 'Warden',
    feedback: 'Отличная работа! Сайт получился именно таким, каким я его представлял.',
  },
  {
    name: 'Executer',
    feedback: 'Команда очень профессиональна и отзывчива. Рекомендую!',
  },
  {
    name: 'Pusher',
    feedback: 'Боты для Telegram работают отлично! Успешно автоматизировали наши процессы.',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section className="testimonials-section" id='testimonials'>
      <h2>Отзывы клиентов</h2>
      <div className="testimonial-container">
        <button className="testimonial-button left" onClick={prevTestimonial}>&#9664;</button> {/* Левый символ стрелки */}
        <div className="testimonial-content">
          <p>"{testimonialsData[currentIndex].feedback}"</p>
          <h4>- {testimonialsData[currentIndex].name}</h4>
        </div>
        <button className="testimonial-button right" onClick={nextTestimonial}>&#9654;</button> {/* Правый символ стрелки */}
      </div>
    </section>
  );
};

export default Testimonials;
