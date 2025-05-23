import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Papers from './components/Papers';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="app">
      <div 
        className="cursor-follower" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px` 
        }}
      />
      
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="about" className={activeSection === 'about' ? 'active' : ''}>
          <About />
        </section>
        
        <section id="papers" className={activeSection === 'papers' ? 'active' : ''}>
          <Papers />
        </section>
        
        <section id="projects" className={activeSection === 'projects' ? 'active' : ''}>
          <Projects />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
