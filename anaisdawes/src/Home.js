import React, { useRef } from 'react';
import Navbar from './Components/Navbar.js';
import ProjectCard from './Components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { listOfProjects } from './database';
import './CSS/Home.css';

function Home() {
  const projects = listOfProjects().slice(0, 4);
  const projectsRef = useRef(null);


  const scrollToTarget = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='app'>
      <Navbar scrollToTarget={scrollToTarget} />
      <div className='introContainer'>
        <h1 className='introBackgroundText'>NICE TO MEET YOU</h1>
        <div className='nameContainer'>
          <h1 className='introName'>Anais Dawes</h1>
          <h2 className='introTitle'>Software Engineer</h2>
        </div>
      </div>
      <div className='projectsContainer' ref={projectsRef}>
        <h1 className='projectsHeader'>Featured Projects</h1>
        <hr className='horizontalLine' />
        <div className='projectsGrid'>
          {projects.map((project) => (
            <ProjectCard image={project.image} projectName={project.name} projectDescription={project.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;