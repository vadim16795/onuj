import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // ... остальной код остается таким же, но обновим навигацию

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
            J-UNO
          </Link>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link></li>
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#about';
              }
            }}>О нас</a></li>
            <li><a href="#works" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('works').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#works';
              }
            }}>Наши работы</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              if (location.pathname === '/') {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.href = '/#contact';
              }
            }}>Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;