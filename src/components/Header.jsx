import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Создайте будущее с нами</h1>
      <nav>
        <ul>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#portfolio">Портфолио</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
