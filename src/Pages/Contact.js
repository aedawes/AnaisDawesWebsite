import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Components/Navbar.js';
import '../CSS/Contact.css';
import Footer from '../Components/Footer.js';

function Contact() {

    const [isSmallWindow, setIsSmallWindow] = useState(false);

    const linkedinUrl = 'https://www.linkedin.com/in/anais-dawes/';
    const githubUrl = 'https://github.com/aedawes';
    const instagramUrl = 'https://www.instagram.com/emmeanais/';

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

    const handleEmailClick = () => {
        const email = 'anais.dawes@icloud.com';
        navigator.clipboard.writeText(email)
            .then(() => {
                alert('Email copied to clipboard!');
            })
            .catch((err) => {
                console.error("Failed to copy email: ", err);
            });
    }

    const handleExternalLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className='app'>
            <Navbar page='contact' />
            <div className='pageContent'>
                <div className='paddingContainer'>
                    <h1 className={`pageHeader ${isSmallWindow ? 'center' : ''}`}>Let's get in touch!</h1>
                    <h2 className={`pageSubheader ${isSmallWindow ? 'center' : ''}`}>I would love to connect. Reach out to me however you prefer!</h2>
                    <div className={isSmallWindow ? 'contactContainerVertical' : 'contactContainerHorizontal'}>
                        <button className={`contactPageButton ${isSmallWindow ? 'longButton' : ''}`} onClick={handleEmailClick}>
                            <FontAwesomeIcon className='contactPageIcon' icon={faEnvelope} />
                            Email
                        </button>
                        <button className={`contactPageButton ${isSmallWindow ? 'longButton' : ''}`} onClick={() => handleExternalLink(linkedinUrl)}>
                            <FontAwesomeIcon className='contactPageIcon' icon={faLinkedin} />
                            Linkedin
                        </button>
                        <button className={`contactPageButton ${isSmallWindow ? 'longButton' : ''}`} onClick={() => handleExternalLink(githubUrl)} >
                            <FontAwesomeIcon className='contactPageIcon' icon={faGithub} />
                            Github
                        </button>
                        <button className={`contactPageButton ${isSmallWindow ? 'longButton' : ''}`} onClick={() => handleExternalLink(instagramUrl)} >
                            <FontAwesomeIcon className='contactPageIcon' icon={faInstagram} />
                            Instagram
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;