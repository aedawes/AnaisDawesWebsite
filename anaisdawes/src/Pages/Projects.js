import React from 'react';
import Navbar from '../Components/Navbar.js';
import '../CSS/Projects.css';
import Footer from '../Components/Footer.js';
import { listOfProjects } from '../database.js';
import ProjectCard from '../Components/ProjectCard.js';

function Projects() {
    const projects = listOfProjects()

    return (
        <div className='app'>
            <Navbar />
            <div className='pageContent'>
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