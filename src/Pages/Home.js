import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar.js';
import ProjectCard from '../Components/ProjectCard.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useParallax } from 'react-scroll-parallax';
import { listOfProjects } from '../database.js';
import '../CSS/Home.css';
import Footer from '../Components/Footer.js';

function Home() {
  const [isSmallWindow, setIsSmallWindow] = useState(false);
  const projects = listOfProjects().slice(0, 4);
  const projectsRef = useRef(null);

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


  const scrollToTarget = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { ref } = useParallax({ easing: 'linear', scale: [0.9, 1.1] });

  return (
    <div className='app'>
      <Navbar scrollToTarget={scrollToTarget} />
      <div className='introContainer'>
        <h1 ref={ref} className={`introBackgroundText ${isSmallWindow ? 'noShow' : ''}`}>NICE TO MEET YOU</h1>
        <div className='nameContainer'>
          <h1 className='introName'>Anais Dawes</h1>
          <h2 className='introTitle'>Software Engineer</h2>
        </div>
      </div>
      <div className='recentProjectsContainer' ref={projectsRef}>
        <h1 className='projectsHeader'>Featured Projects</h1>
        <hr className='horizontalLine' />
        <div className='projectsGrid'>
          {projects.map((project) => (
            <ProjectCard image={project.image} path={project.path} projectName={project.name} projectDescription={project.description} />
          ))}
        </div>
        <a href='/projects' className='seeMoreContainer'>
          <h2 className='seeMoreText'>See More</h2>
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default Home;