import React from 'react';

const Hero = () => {
  const handleWorksClick = (e) => {
    e.preventDefault();
    document.getElementById('works').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content fade-in-up">
          <h1>UNO-J</h1>
          <p>Индивидуальная мебель на заказ по вашим размерам</p>
          <a href="#works" className="cta-button" onClick={handleWorksClick}>
            Посмотреть работы
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;