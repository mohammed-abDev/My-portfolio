import React from 'react';

const Skills = () => {
  const skills = ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'React', 'Node.js','Express.js','RESTful API','MySQL','Git'];

  return (
    <section id="skills" className="fade-in">
      <h2 className="section-title">SKILLS</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-node" key={index}>
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;