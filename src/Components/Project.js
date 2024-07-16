import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.js';
import '../CSS/Projects.css';
import Footer from './Footer.js';
import { useNavigate } from 'react-router-dom';

function Project({ link, demoRoute, title, subtitle, image, imageAlt, description, skills, githubLink, mediumLink }) {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

    const navigate = useNavigate();
    const projectsEndpoint = '/projects';

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsSmallWindow(isWindowSize(860));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLink = (urlLink) => {
        window.open(urlLink, '_blank');
    };

    const handleNavigation = (navEndpoint) => {
        navigate(navEndpoint);
    };


    return (
        <div className='app'>
            <Navbar />
            <div className='pageContent projectContent'>
                <div className='innerContent'>
                    <h1 className='pageHeader'>{title}</h1>
                    <h2 className='pageSubheader'>{subtitle}</h2>
                    <div className={`projectDescriptionContainer ${isSmallWindow ? 'column' : ''}`}>
                        <div className='projectImageContainer'>
                            <img className='projectImage' src={image} alt={imageAlt} />
                        </div>
                        {description}
                    </div>
                    <div className='skillsContainer'>
                        <h3 className='skillsHeader'>Skills</h3>
                        <p className='skills'>{skills}</p>
                    </div>
                    {(link || demoRoute) ? null : <h3 className='linkReplacement'>Due to the nature of this project (NDA), a demo or further images are not available</h3>}
                    <div className='buttonContainer'>
                        {link ? <button onClick={() => handleLink(link)} className='linkButton'>See Demo</button> : null}
                        {demoRoute ? <button onClick={() => handleNavigation(demoRoute)} className='linkButton'>See Demo</button> : null}
                        {mediumLink ? <button onClick={() => handleLink(mediumLink)} className='linkButton'>Read more on Medium</button> : null}
                        {githubLink ? <button onClick={() => handleLink(githubLink)} className='linkButton'>View in Github</button> : null}
                        <button onClick={() => handleNavigation(projectsEndpoint)} className='backbutton'>See All Projects</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Project;