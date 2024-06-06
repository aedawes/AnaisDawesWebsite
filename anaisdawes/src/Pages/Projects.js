import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import '../CSS/Projects.css';
import Footer from '../Components/Footer.js';
import { listOfProjects } from '../database.js';
import ProjectCard from '../Components/ProjectCard.js';

function Projects() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const projects = listOfProjects()

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsSmallWindow(isWindowSize(718));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='app'>
            <Navbar />
            <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                <h1 className='pageHeader'>Projects</h1>
                <h2 className='pageSubheader'>Select a project to learn more</h2>
                <div className='projectsContainer'>
                    {projects.map((project) => (
                        <ProjectCard image={project.image} path={project.path} projectName={project.name} projectDescription={project.description} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Projects;