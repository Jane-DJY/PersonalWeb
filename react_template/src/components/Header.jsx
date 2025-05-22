import React, { useState, useEffect } from 'react';
import { content } from '../data/content';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  
  const navLinkClass = (section) => {
    return `px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300 ${
      activeSection === section 
        ? 'text-white bg-fuchsia-600' 
        : 'text-gray-800 hover:text-fuchsia-600'
    }`;
  };
  
  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-fuchsia-600">{content.name}</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            <button 
              onClick={() => scrollToSection('about')} 
              className={navLinkClass('about')}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('publications')} 
              className={navLinkClass('publications')}
            >
              Publications
            </button>
          </nav>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-2 space-y-1">
            <button 
              onClick={() => scrollToSection('about')} 
              className={`block w-full text-left ${navLinkClass('about')}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('publications')} 
              className={`block w-full text-left ${navLinkClass('publications')}`}
            >
              Publications
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;