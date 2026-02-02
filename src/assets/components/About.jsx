import React from 'react';
import profileImg from "/imag/mohammedabdugithubbaner.png";


const About = () => {
  return (
    <section id="about" className="fade-in">
      <h2 className="section-title">ABOUT ME</h2>
      <div className="about-container">
        <div className="about-image">
          <div className="profile-img-wrapper">
            <div className="profile-img">
              <span style={{ backgroundImage: `url(${profileImg})` }}></span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <h3>Building the Future of Web</h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
            Hi, I'm Mohammed Abdu, a passionate full-stack web developer in the making, blending creativity with technology to design engaging and user-friendly digital experiences. I focus on building clean, responsive, and modern websites that leave a lasting impression.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
            Currently a 4th-year Mechanical Engineering student at Adama Science and Technology University, I combine analytical thinking with modern web technologies—HTML, CSS, JavaScript, Node.js,Express.js,RESTful APIs, React, and Mysql—to build end-to-end solutions. My goal is simple: craft elegant, scalable, and accessible web apps that solve real-world problems.
          </p>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number icons-1"></div>
              <div className="stat-label">Creative Thinking</div>
            </div>
            <div className="stat-card">
              <div className="stat-number icons-2"></div>
              <div className="stat-label">Team Collaboration</div>
            </div>
            <div className="stat-card">
              <div className="stat-number icons-3"></div>
              <div className="stat-label">Time Management</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;