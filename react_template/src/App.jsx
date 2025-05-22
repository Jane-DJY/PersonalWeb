import { useState, useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Publications from './components/Publications';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  // Handle scrolling and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'publications'];
      
      // Find the section currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header activeSection={activeSection} />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section id="about" className="py-16">
          <AboutMe />
        </section>
        
        <section id="publications" className="py-16">
          <Publications />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;