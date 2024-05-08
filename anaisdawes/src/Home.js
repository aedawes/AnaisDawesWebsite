import React, { useRef } from 'react';
import Navbar from './Components/Navbar.js';
import ProjectCard from './Components/ProjectCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { listOfProjects } from './database';
import './CSS/Home.css';

function Home() {
  const projects = listOfProjects();
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
        <h1 className='projectsHeader'>My Projects</h1>
        <div className='projectsGrid'>
          {projects.map((project) => (
            <ProjectCard image={project.image} projectName={project.name} projectDescription={project.description} />
          ))}
        </div>
      </div>
      <div className='endContainer' ref={projectsRef}>
        <div className='endSubContainer'>
          <h1 className='endHeader'>Hello There!</h1>
          <div className='aboutMeContainer'>
            <div className='imageContainer'>
              <img id='profilePhoto' src='/AnaisProfile1.png' />
            </div>
            <div className='aboutMeTextContainer'>
              <p>I’m Anaïs, a software engineer with a love for front-end web development! Learn more about me by clicking the button below!</p>
              <button className='learnMoreBtn'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='endSubContainer'>
          <h1 className='endHeader'>Contact Me</h1>
          <div className='contactContainer'>
            <button className='contactBtn'>
              <p>Email</p>
              <FontAwesomeIcon icon={faEnvelope} />
            </button>
            <button className='contactBtn'>
              <p>Github</p>
              <FontAwesomeIcon icon={faGithub} />
            </button>
            <button className='contactBtn'>
              <p>Linkedin</p>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;