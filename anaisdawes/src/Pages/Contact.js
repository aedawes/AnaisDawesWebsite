import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import '../CSS/Contact.css';
import Footer from '../Components/Footer.js';

function Contact() {

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
        <div className='app'>
            <Navbar />
            <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                <h1 className='pageHeader'>Let's get in touch!</h1>
                <h2 className='pageSubheader'>I would love to connect. Reach out to me however you prefer!</h2>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;