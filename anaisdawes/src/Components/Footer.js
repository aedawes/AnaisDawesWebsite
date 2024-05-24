import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../CSS/Footer.css';

function Footer() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

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
        <div className={isSmallWindow ? 'footer footerSmall' : 'footer'}>
            {!isSmallWindow && (
                <h1 className='currentlyText'>Currently: Learning Next.js</h1>
            )}
            <div className={isSmallWindow ? 'footerLinks footerSmall' : 'footerLinks'}>
                <FontAwesomeIcon className='contactIcon' icon={faEnvelope} />
                <FontAwesomeIcon className='contactIcon' icon={faLinkedin} />
                <FontAwesomeIcon className='contactIcon' icon={faGithub} />
                <FontAwesomeIcon className='contactIcon' icon={faInstagram} />
            </div>
        </div>
    );
}

export default Footer;