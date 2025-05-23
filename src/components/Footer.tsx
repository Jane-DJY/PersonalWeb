const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Jieying Ding. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/Jane-DJY/PersonalWeb" target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
