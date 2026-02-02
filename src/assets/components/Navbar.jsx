import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrolled }) => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };
console.log("Menu toggled →", isMenuOpen);
  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <a
          href="#home"
          className="logo-container"
          onClick={(e) => {
            e.preventDefault();
            handleClick('home');
          }}
        >
          <img
            src="/imag/M-A-1-logo.png"
            width="50"
            height="50"
            alt="Mohammed Abdu Logo"
            className="logo"
          />
          <span className="logo-text">Mohammed</span>
        </a>

        {/* MOBILE MENU TOGGLE */}
        <div
          className="mobile-menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* NAV MENU */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;