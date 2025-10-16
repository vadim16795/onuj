import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';


const WardrobesPage = () => {
  useScrollToTop();

  const wardrobeExamples = [
    {
      id: 1,
      image: '/images/works/wardrobes/wardrobe-1.jpg',
      title: 'Шкаф-купе для квартиры в ЖК "Солнечный"',
      description: 'Вместительный шкаф-купе с зеркальными дверями и системой хранения премиум-класса',
      features: ['Зеркальные двери', 'Внутренняя подсветка', 'Система хранения Comform'],
      size: '240см × 220см × 60см'
    },
    {
      id: 2,
      image: '/images/works/wardrobes/wardrobe-2.jpg',
      title: 'Распашной шкаф для спальни',
      description: 'Классический распашной шкаф из массива дуба с филенчатыми фасадами',
      features: ['Массив дуба', 'Филенчатые фасады', 'Выдвижные ящики'],
      size: '200см × 240см × 65см'
    },
    {
      id: 3,
      image: '/images/works/wardrobes/wardrobe-3.jpg',
      title: 'Встроенный шкаф в нишу',
      description: 'Оптимальное использование пространства с системой раздвижных дверей',
      features: ['Встроенная конструкция', 'Раздвижные двери', 'Угловая система хранения'],
      size: '280см × 250см × 55см'
    },
    {
      id: 4,
      image: '/images/works/wardrobes/wardrobe-4.jpg',
      title: 'Детский шкаф с ростовой шкалой',
      description: 'Яркий и функциональный шкаф для детской комнаты с игровыми элементами',
      features: ['Ростовая шкала', 'Безопасные ручки', 'Яркий дизайн'],
      size: '180см × 200см × 55см'
    }
  ];

  return (
    <div className="works-gallery">
      <div className="container">
        <div className="gallery-header">
          <Link to="/" className="back-button">
            ← Назад к работам
          </Link>
          <h1 className="gallery-title">Наши шкафы</h1>
          <p className="gallery-subtitle">Индивидуальные решения для вашего пространства</p>
        </div>
        
        <div className="gallery-grid">
          {wardrobeExamples.map((wardrobe) => (
            <div key={wardrobe.id} className="gallery-item">
              <div className="gallery-image">
                <img 
                  src={wardrobe.image} 
                  alt={wardrobe.title}
                  width="400"
                  height="250"
                />
              </div>
              <div className="gallery-content">
                <h3>{wardrobe.title}</h3>
                <p>{wardrobe.description}</p>
                <div className="gallery-features">
                  <h4>Особенности:</h4>
                  <ul>
                    {wardrobe.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="gallery-specs">
                  <span className="spec">Размеры: {wardrobe.size}</span>
                </div>
                <div className="gallery-actions">
                  <button className="cta-button primary">
                    Заказать похожий
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WardrobesPage;