import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
