import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <span className="icon location"></span> Addis Ababa, Ethiopia
            </li>
            <li>
              <span className="icon email"></span>
              <a href="mailto:mohammedabddev11@gmail.com">
                mohammedabddev11@gmail.com
              </a>
            </li>
            <li>
              <span className="icon phone"></span>
              <a href="tel:+251967177661">+251 967177661</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "10px" }}>
            Let's build something amazing together
          </p>
          <div className="social-links">
            <a
              href="https://github.com/mohammed-abDev"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-abdu-7a2b18343"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://wa.me/251967177661?text=Hello%20I%20found%20you%20on%20your%20website"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Mohammed Abdu Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;