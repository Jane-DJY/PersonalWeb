import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    
    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="header">
      <a href="#" className="logo" onClick={() => handleNavClick('about')}>
        J.Ding
      </a>
      
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </button>
      
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a 
          href="#about" 
          className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('about');
          }}
        >
          About
        </a>
        <a 
          href="#papers" 
          className={`nav-link ${activeSection === 'papers' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('papers');
          }}
        >
          Papers
        </a>
        <a 
          href="#projects" 
          className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('projects');
          }}
        >
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
