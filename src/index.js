import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Находим корневой элемент в HTML и рендерим в него React приложение
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим главный компонент App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);