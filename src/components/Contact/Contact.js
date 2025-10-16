import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contacts-grid">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@j-uno.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Телефон</h4>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Адрес</h4>
                  <p>Москва, Россия</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-cta">
            <div className="cta-card">
              <h3>Готовы к сотрудничеству?</h3>
              <p>
                J-UNO всегда открыт для обсуждения новых проектов. 
                Свяжитесь с нами удобным способом!
              </p>
              <div className="cta-buttons">
                <a href="mailto:info@j-uno.com" className="cta-button primary">
                  Написать на почту
                </a>
                <a href="tel:+79991234567" className="cta-button secondary">
                  Позвонить нам
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;