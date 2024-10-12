import React from 'react';
import './About.css';


const About = () => {
  return (
    <section className="about-section">
      <h2>О нас</h2>
      <p>
        Мы только что запустились и стремимся изменить мир технологий.
        Наша команда профессионалов готова предложить качественные решения 
        для ваших нужд. Мы сосредоточены на достижении результата и 
        установлении долгосрочных отношений с нашими клиентами.
      </p>
      <div className="about-stats">
        <div className="stat">
          <span className="stat-icon">🚀</span>
          <h3>Стартап</h3>
          <p>С серьёзными намерениями</p>
        </div>
        <div className="stat">
          <span className="stat-icon">✅</span>
          <h3>100%</h3>
          <p>Посвящены качеству</p>
        </div>
        <div className="stat">
          <span className="stat-icon">🤝</span>
          <h3>Партнёрство</h3>
          <p>Готовы к сотрудничеству</p>
        </div>
      </div>
    </section>
  );
};

export default About;
