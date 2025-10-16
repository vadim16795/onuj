import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WardrobesPage from './pages/WorksGallery/WardrobesPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // ← Footer импортирован здесь
import './styles/App.css';
import './styles/components.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works/wardrobes" element={<WardrobesPage />} />
          </Routes>
        </main>
        <Footer /> {/* ← Footer используется здесь */}
      </div>
    </BrowserRouter>
  );
}

export default App;