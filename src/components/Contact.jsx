import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Свяжитесь с нами</h2>
      <p>Мы готовы ответить на ваши вопросы и помочь вам!</p>
      <form className="contact-form">
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш Email" required />
        <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
};

export default Contact;
