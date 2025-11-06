import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;
