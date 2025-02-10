// src/App.tsx
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;