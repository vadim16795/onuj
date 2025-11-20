import React from 'react';
import { Link } from 'react-router-dom';

const Works = () => {
  const works = [
    {
      image: '/images/works/wardrobes.jpg',
      title: 'Шкафы',
      description: 'Индивидуальные шкафы-купе, распашные шкафы, встроенные шкафы',
      category: 'wardrobes'
    },
    {
      image: '/images/works/kitchens.jpg',
      title: 'Кухни',
      description: 'Эргономичные кухонные гарнитуры из качественных материалов',
      category: 'kitchens'
    },
    {
      image: '/images/works/dressing-rooms.jpg',
      title: 'Гардеробные',
      description: 'Системы хранения для гардеробных комнат',
      category: 'dressing-rooms'
    },
    {
      image: '/images/works/bedrooms.jpg',
      title: 'Спальни',
      description: 'Комплекты мебели для спален',
      category: 'bedrooms'
    },
    {
      image: '/images/works/kids-rooms.jpg',
      title: 'Детские',
      description: 'Безопасная мебель для детских комнат',
      category: 'kids-rooms'
    },
    {
      image: '/images/works/living-rooms.jpg',
      title: 'Гостиные',
      description: 'Мебель для гостиных',
      category: 'living-rooms'
    },
    {
      image: '/images/works/hallways.jpg',
      title: 'Прихожие',
      description: 'Вместительные прихожие',
      category: 'hallways'
    },
    {
      image: '/images/works/bathrooms.jpg',
      title: 'Ванные',
      description: 'Влагостойкая мебель для ванных',
      category: 'bathrooms'
    }
  ];

  return (
    <section id="works" className="section works">
      <div className="container">
        <h2 className="section-title">Наши работы</h2>
        <p className="section-subtitle">
          Создаем качественную мебель для каждого помещения вашего дома
        </p>
        <div className="works-grid">
          {works.map((work, index) => (
            <Link 
              key={index} 
              to={`/works/${work.category}`}
              className="work-card-link"
            >
              <div className="work-card fade-in-up">
                <div className="work-image">
                  <img 
                    src={work.image} 
                    alt={`${work.title} от нас`}
                    width="400"
                    height="250"
                    loading="lazy"
                  />
                </div>
                <h3>{work.title}</h3>
                <p>{work.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;