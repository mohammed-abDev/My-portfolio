import React, { useState } from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Evangadi Forum',
            description: 'A responsive Q&A forum web application that allows users to ask questions, post answers, and engage through likes and discussions, built with React, Node.js, MySQL(tidb-cloud) and CSS, and enhanced with Groq AI API for bot to deliver intelligent, real-time responses.',
            image: '/imag/evangadi-forum.png',
            previewLink: 'https://evangadi-forum-mohammmed-abdu.netlify.app/',
            frontendGithub: 'https://github.com/mohammed-abDev/Evangadi-forum-frontend',
            backendGithub:'https://github.com/mohammed-abDev/Evangadi-forum-backend',
            type: 'current1'
        },
        {
            id:2,
            title: 'Amazon E-Commerce Clone',
            description: 'A modern e-commerce clone developed using React for the frontend, Node.js for backend logic, CSS for styling, and Firebase for authentication and data storage, emphasizing responsiveness and scalability.',
            image: '/imag/amazon_firebase.png',
            previewLink: 'https://github.com/mohammed-abDev/amazone-clone-app',
            frontendGithub:'https://github.com/mohammed-abDev/amazone-clone-app',
            backendGithub:'https://github.com/mohammed-abDev/amazone-clone-api-deploy',
            type: 'current1'
        },
        {
            id:3 ,
            title: 'Netflix Clone',
            description: 'A Netflix-style movie streaming app built developed using React for the frontend and CSS for styling, integrated with Movie Trailer APIs and the React YouTube API to deliver dynamic trailers and seamless video playback.',
            image: '/imag/netfilix-react.png',
            previewLink: 'https://mohammed-abdev.github.io/netflix-clone-app/',
            githubLink: 'https://github.com/',
            type: 'current2'
        },
        {
            id:4 ,
            title: 'Apple Homepage Clone',
            description: 'A responsive Apple homepage built with HTML, CSS, and Bootstrap, showcasing sleek design and layout skills.',
            image: '/imag/apple-bootstrap.jpg',
            previewLink: 'https://home-page-7db186.netlify.app/',
            githubLink: 'https://github.com/',
            type: 'current2'
        },
    ];

    const currentProjects = projects.filter(p => p.type === 'current1');
    const futureProjects = projects.filter(p => p.type === 'current2');
    const [openId, setOpenId] = useState(null);


return (
    <section id="projects" className="fade-in">
        <h2 className="section-title">PROJECTS</h2>
        <div className="projects-grid">
          {/* Current Projects */}
        {currentProjects.map(project => (
            <div className="glass-card project-card" key={project.id}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 style={{ color: 'var(--primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
                <div className="project-links">
                <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="btn preview-btn">
                    Preview <span className="arrow-link"></span>
                </a>
                <button
                    className="btn github-btn"
                    onClick={() =>
                        setOpenId(openId === project.id ? null : project.id)
                    }
                >
                GitHub <span className="github-link">---[</span>
                </button>

                <div className="github-wrapper">

                {openId === project.id && (
                <div className="github-dropdown">
                        <a
                            href={project.frontendGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            frontend
                        </a>
                        <a
                            href={project.backendGithub}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            backend
                        </a>
                </div>
                )}
    </div>
    </div>
</div>
))}

          {/* intial Projects */}
        {futureProjects.map(project => (
            <div className="glass-card project-card" key={project.id}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3 style={{ color: 'var(--secondary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{project.description}</p>
            <div className="project-links">
                <a href={project.previewLink} target="_blank" rel="noopener noreferrer" className="btn preview-btn">
                    Preview <span className="arrow-link"></span>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    GitHub <span className="github-link"></span>
                    
                </a>
            </div>
            </div>
        ))}
        </div>
    </section>
);
};

export default Projects;