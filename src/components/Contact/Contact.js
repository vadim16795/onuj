import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Контакты</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contacts-grid">
              {/* Первый ряд: Телефон, WhatsApp, Telegram */}
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Телефон</h4>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💚</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✈️</span>
                <div>
                  <h4>Telegram</h4>
                  <p>@username</p>
                </div>
              </div>

              {/* Второй ряд: Email, Instagram, Адрес */}
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📷</span>
                <div>
                  <h4>Instagram</h4>
                  <p>@username</p>
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
        </div>
      </div>
    </section>
  );
};

export default Contact;