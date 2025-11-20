import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const WardrobesPage = () => {
  useScrollToTop();

  const wardrobeExamples = [
    {
      id: 1,
      image: '/images/works/wardrobes/1/wardrobe.jpg',
      title: 'Шкаф-купе для квартиры в ЖК "Солнечный"',
      description: 'Вместительный шкаф-купе с зеркальными дверями и системой хранения премиум-класса'
    },
    {
      id: 2,
      image: '/images/works/wardrobes/2/wardrobe.jpg',
      title: 'Распашной шкаф для спальни',
      description: 'Классический распашной шкаф из массива дуба с филенчатыми фасадами'
    },
    {
      id: 3,
      image: '/images/works/wardrobes/3/wardrobe.jpg',
      title: 'Встроенный шкаф в нишу',
      description: 'Оптимальное использование пространства с системой раздвижных дверей'
    },
    {
      id: 4,
      image: '/images/works/wardrobes/4/wardrobe.jpg',
      title: 'Детский шкаф с ростовой шкалой',
      description: 'Яркий и функциональный шкаф для детской комнаты с игровыми элементами'
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
            <Link 
              key={wardrobe.id} 
              to={`/works/wardrobes/${wardrobe.id}`}
              className="gallery-item-link"
            >
              <div className="gallery-item">
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
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WardrobesPage;