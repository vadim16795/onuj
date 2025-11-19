// src/pages/WorksGallery/WardrobeDetailPage.js
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useScrollToTop } from '../../hooks/useScrollToTop';

const WardrobeDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useScrollToTop();

  // Данные для всех шкафов
  const wardrobesData = {
    1: {
      id: 1,
      image: '/images/works/wardrobes/1/wardrobe.jpg',
      title: 'Шкаф-купе для квартиры в ЖК "Солнечный"',
      description: 'Вместительный шкаф-купе с зеркальными дверями и системой хранения премиум-класса. Идеальное решение для современной квартиры, сочетающее в себе эстетику и функциональность.',
      fullDescription: 'Этот элегантный шкаф-купе был создан для просторной гостиной в новостройке. Зеркальные фасады визуально расширяют пространство, а продуманная внутренняя организация позволяет удобно хранить все виды одежды и аксессуаров.',
      images: [
        '/images/works/wardrobes/1/wardrobe.jpg',
        '/images/works/wardrobes/1/wardrobe2.jpg',
        '/images/works/wardrobes/1/wardrobe3.jpg',
        '/images/works/wardrobes/1/wardrobe4.jpg',
        '/images/works/wardrobes/1/wardrobe5.jpg',
        '/images/works/wardrobes/1/wardrobe6.jpg',
        '/images/works/wardrobes/1/wardrobe7.jpg',
        '/images/works/wardrobes/1/wardrobe8.jpg',
        '/images/works/wardrobes/1/wardrobe9.jpg'
      ],
      features: [
        'Зеркальные раздвижные двери',
        'Внутренняя LED-подсветка',
        'Система хранения Comform Premium',
        'Выдвижные ящики с доводчиками',
        'Отделение для аксессуаров и галстуков',
        'Пантограф для брюк',
        'Секция для хранения обуви'
      ],
      specs: {
        material: 'ЛДСП Egger (Германия), зеркало 4мм',
        color: 'Белый глянец "Pure White" + зеркало',
        dimensions: '2400 × 2800 × 600 мм',
        system: 'Раздвижная система Komandor Silent',
        lighting: 'LED подсветка 3000K',
        warranty: '24 месяца'
      },
      price: 'от 45 000 ₽',
      timeline: '14-18 дней'
    },
    2: {
      id: 2,
      image: '/images/works/wardrobes/wardrobe-2.jpg',
      title: 'Распашной шкаф для спальни',
      description: 'Классический распашной шкаф из массива дуба с филенчатыми фасадами',
      fullDescription: 'Элегантный распашной шкаф в классическом стиле, изготовленный из натурального массива дуба. Идеально вписывается в интерьер спальни в классическом или современном стиле.',
      images: [
        '/images/works/wardrobes/wardrobe-2.jpg'
      ],
      features: [
        'Массив дуба',
        'Филенчатые фасады',
        'Выдвижные ящики с доводчиками',
        'Система вешалов для длинной одежды',
        'Отделение для белья'
      ],
      specs: {
        material: 'Массив дуба, МДФ филенка',
        color: 'Натуральный дуб',
        dimensions: '2200 × 2400 × 650 мм',
        system: 'Распашные двери',
        fittings: 'Ручки из нержавеющей стали',
        warranty: '36 месяцев'
      },
      price: 'от 67 000 ₽',
      timeline: '21-25 дней'
    },
    3: {
      id: 3,
      image: '/images/works/wardrobes/wardrobe-3.jpg',
      title: 'Встроенный шкаф в нишу',
      description: 'Оптимальное использование пространства с системой раздвижных дверей',
      fullDescription: 'Практичное решение для использования ниш и нестандартных помещений. Шкаф идеально встраивается в существующую архитектуру помещения.',
      images: [
        '/images/works/wardrobes/wardrobe-3.jpg'
      ],
      features: [
        'Встроенная конструкция',
        'Раздвижные двери',
        'Угловая система хранения',
        'Многоуровневые полки',
        'Выдвижные корзины'
      ],
      specs: {
        material: 'ЛДСП Kronospan',
        color: 'Дуб сонома',
        dimensions: '2500 × 2700 × 550 мм',
        system: 'Раздвижная система',
        type: 'Встроенный',
        warranty: '24 месяца'
      },
      price: 'от 38 000 ₽',
      timeline: '12-16 дней'
    },
    4: {
      id: 4,
      image: '/images/works/wardrobes/wardrobe-4.jpg',
      title: 'Детский шкаф с ростовой шкалой',
      description: 'Яркий и функциональный шкаф для детской комнаты с игровыми элементами',
      fullDescription: 'Безопасный и красочный шкаф для детской комнаты. Учитывает все потребности ребенка и помогает приучать к самостоятельности.',
      images: [
        '/images/works/wardrobes/wardrobe-4.jpg'
      ],
      features: [
        'Ростовая шкала',
        'Безопасные закругленные ручки',
        'Яркий дизайн',
        'Прочные усиленные петли',
        'Съемные элементы декора'
      ],
      specs: {
        material: 'ЛДСП EGGER (класс эмиссии E0.5)',
        color: 'Белый + цветные акценты',
        dimensions: '1800 × 2200 × 500 мм',
        system: 'Распашные двери',
        safety: 'Антиопрокидывающая система',
        warranty: '36 месяцев'
      },
      price: 'от 32 000 ₽',
      timeline: '10-14 дней'
    }
  };

  const wardrobe = wardrobesData[id] || wardrobesData[1];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % wardrobe.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(wardrobe.images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + wardrobe.images.length) % wardrobe.images.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(wardrobe.images[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

return (
    <div className="works-gallery">
      <div className="container">
        <div className="gallery-header">
          <Link to="/works/wardrobes" className="back-button">
            ← Назад к шкафам
          </Link>
          <h1 className="gallery-title">{wardrobe.title}</h1>
          <p className="gallery-subtitle">{wardrobe.description}</p>
        </div>

        <div className="wardrobe-detail">
          {/* Основная информация и изображение */}
          <div className="wardrobe-main-section">
            <div className="wardrobe-main-image">
              <div 
                className="gallery-image clickable"
                onClick={() => openModal(wardrobe.image, 0)}
              >
                <img 
                  src={wardrobe.image} 
                  alt={wardrobe.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                    if (placeholder) placeholder.style.display = 'flex';
                  }}
                />
                <div className="image-placeholder">
                  <div className="placeholder-content">
                    <span className="placeholder-icon">📷</span>
                    <p>Фото шкафа {wardrobe.id}</p>
                  </div>
                </div>
                <div className="image-overlay">
                  <span className="zoom-icon">🔍</span>
                </div>
              </div>
            </div>
            
            <div className="wardrobe-quick-info">
              <div className="quick-specs">
                <div className="spec-highlight">
                  <span className="spec-label">Стоимость:</span>
                  <span className="spec-value price">{wardrobe.price}</span>
                </div>
                <div className="spec-highlight">
                  <span className="spec-label">Срок изготовления:</span>
                  <span className="spec-value">{wardrobe.timeline}</span>
                </div>
                <div className="spec-highlight">
                  <span className="spec-label">Гарантия:</span>
                  <span className="spec-value">{wardrobe.specs.warranty}</span>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="cta-button primary">
                  📞 Заказать консультацию
                </button>
                <button className="cta-button secondary">
                  📏 Вызвать замерщика
                </button>
              </div>
            </div>
          </div>

          {/* Полное описание */}
          <div className="wardrobe-full-description">
            <h3>Подробное описание</h3>
            <p>{wardrobe.fullDescription}</p>
          </div>

          {/* Галерея изображений */}
          {wardrobe.images.length > 1 && (
            <div className="wardrobe-gallery-section">
              <h3>Галерея проекта</h3>
              <div className="gallery-grid-mini">
                {wardrobe.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="gallery-item-mini clickable"
                    onClick={() => openModal(image, index)}
                  >
                    <div className="gallery-image">
                      <img 
                        src={image} 
                        alt={`${wardrobe.title} - фото ${index + 1}`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const placeholder = e.target.parentElement.querySelector('.image-placeholder');
                          if (placeholder) placeholder.style.display = 'flex';
                        }}
                      />
                      <div className="image-placeholder">
                        <div className="placeholder-content">
                          <span className="placeholder-icon">📷</span>
                          <p>Фото {index + 1}</p>
                        </div>
                      </div>
                      <div className="image-overlay">
                        <span className="zoom-icon">🔍</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Характеристики и спецификации */}
          <div className="wardrobe-specs-section">
            <div className="specs-grid">
              <div className="specs-column">
                <h3>Особенности</h3>
                <ul className="features-list">
                  {wardrobe.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="specs-column">
                <h3>Технические характеристики</h3>
                <div className="specs-details">
                  <div className="spec-item">
                    <span className="spec-name">Материал:</span>
                    <span className="spec-value">{wardrobe.specs.material}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-name">Цвет:</span>
                    <span className="spec-value">{wardrobe.specs.color}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-name">Размеры:</span>
                    <span className="spec-value">{wardrobe.specs.dimensions}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-name">Система:</span>
                    <span className="spec-value">{wardrobe.specs.system}</span>
                  </div>
                  {wardrobe.specs.lighting && (
                    <div className="spec-item">
                      <span className="spec-name">Подсветка:</span>
                      <span className="spec-value">{wardrobe.specs.lighting}</span>
                    </div>
                  )}
                  {wardrobe.specs.fittings && (
                    <div className="spec-item">
                      <span className="spec-name">Фурнитура:</span>
                      <span className="spec-value">{wardrobe.specs.fittings}</span>
                    </div>
                  )}
                  {wardrobe.specs.safety && (
                    <div className="spec-item">
                      <span className="spec-name">Безопасность:</span>
                      <span className="spec-value">{wardrobe.specs.safety}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительные действия */}
          <div className="wardrobe-cta-section">
            <div className="cta-card">
              <h3>Заинтересовал этот шкаф?</h3>
              <p>Наш специалист бесплатно приедет к вам, сделает замеры и рассчитает точную стоимость с учетом ваших пожеланий</p>
              <div className="cta-buttons">
                <button className="cta-button primary large">
                  🗓️ Записаться на замер
                </button>
                <button className="cta-button secondary">
                  💬 Задать вопрос
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно для просмотра изображений */}
      {selectedImage && (
        <div 
          className="image-modal"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            
            <button className="modal-nav modal-prev" onClick={prevImage}>
              ‹
            </button>
            
            <div className="modal-image-container">
              <img 
                src={selectedImage} 
                alt={`${wardrobe.title} - фото ${currentImageIndex + 1}`}
                className="modal-image"
              />
              <div className="image-counter">
                {currentImageIndex + 1} / {wardrobe.images.length}
              </div>
            </div>
            
            <button className="modal-nav modal-next" onClick={nextImage}>
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WardrobeDetailPage;