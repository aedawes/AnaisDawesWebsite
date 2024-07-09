import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import ProjectCard from '../Components/ProjectCard.js';
import LoadingModal from '../Components/LoadingModal.js';
import { listOfProjects } from '../database.js';
import '../CSS/Projects.css';

function Projects() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const [loading, setLoading] = useState(true);

    const projects = listOfProjects()

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsSmallWindow(isWindowSize(822));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (projects.length === 0) {
            setLoading(false);
            return;
        }

        let imagesLoadedCount = 0;

        const handleImageLoad = () => {
            imagesLoadedCount += 1;
            if (imagesLoadedCount === projects.length) {
                setLoading(false);
            }
        };

        projects.forEach((project) => {
            const img = new Image();
            img.src = project.image;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });
    }, [projects]);

    return (
        <div className='app'>
            {loading ? <LoadingModal /> :
                <div>
                    <Navbar page='projects' />
                    <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                        <div className='paddingContainer'>
                            <h1 className='pageHeader'>Projects</h1>
                            <h2 className='pageSubheader'>Select a project to learn more</h2>
                            <div className='projectsContainer'>
                                {projects.map((project) => (
                                    <ProjectCard image={project.image} path={project.path} projectName={project.name} projectDescription={project.description} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
}

export default Projects;