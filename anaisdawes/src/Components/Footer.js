import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../CSS/Footer.css';

function Footer() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

    const linkedinUrl = 'https://www.linkedin.com/in/anais-dawes/';
    const githubUrl = 'https://github.com/aedawes';
    const instagramUrl = 'https://www.instagram.com/emmeanais/';

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
        <div className={isSmallWindow ? 'footer footerSmall' : 'footer'}>
            {!isSmallWindow && (
                <h1 className='currentlyText'>Currently: Learning Next.js</h1>
            )}
            <div className={isSmallWindow ? 'footerLinks footerSmall' : 'footerLinks'}>
                <button onClick={handleEmailClick}>
                    <FontAwesomeIcon className='contactIcon' icon={faEnvelope} />
                </button>
                <button onClick={() => handleExternalLink(linkedinUrl)}>
                    <FontAwesomeIcon className='contactIcon' icon={faLinkedin} />
                </button>
                <button onClick={() => handleExternalLink(githubUrl)} >
                    <FontAwesomeIcon className='contactIcon' icon={faGithub} />
                </button>
                <button onClick={() => handleExternalLink(instagramUrl)} >
                    <FontAwesomeIcon className='contactIcon' icon={faInstagram} />
                </button>
            </div>
        </div>
    );
}

export default Footer;