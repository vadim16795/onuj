import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Works from '../components/Works/Works';
import Contact from '../components/Contact/Contact'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
};

export default HomePage;