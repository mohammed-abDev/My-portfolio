import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
};

  return (
<section id="home" className="hero">
    <div className="editor-window glass-card">
    
    {/* Editor Header */}
    <div className="editor-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="editor-title">portfolio.jsx</span>
    </div>

    {/* Editor Body */}
    <div className="editor-body">
    <pre>
        <code>
            <span className="code-keyword">const</span>{' '}
            <span className="code-variable">developer</span>{' '}
            <span className="code-operator">=</span>{' '}
            <span className="code-brace">{'{'}</span>
            <br />
                <span className="code-property">name</span>: <span className="code-string">'Mohammed Abdu'</span>,
            <br />
                <span className="code-property">role</span>: <span className="code-string">'Full-Stack Developer'</span>,
            <br />
                <span className="code-property">stack</span>: <span className="code-string">'MERN'</span>
            <br />
            <span className="code-brace">{'}'}</span>;
                    </code>
    </pre>

        <h1 className="glitch" data-text="MOHAMMED ABDU">
        MOHAMMED ABDU
        </h1>
        <p className="subtitle">Web Developer & Engineering Student</p>
    </div>
</div>

  {/* Scroll Button */}
<div className="scroll-btn" onClick={scrollToAbout}>
    <div className="scroll-btn-inner">
        <FaChevronDown />
    </div>
</div>
</section>

);
};

export default Hero;