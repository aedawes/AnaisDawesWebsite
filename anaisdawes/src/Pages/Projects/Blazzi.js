import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar.js';
import '../../CSS/Projects.css';
import Footer from '../../Components/Footer.js';
import { useNavigate } from 'react-router-dom';

function Blazzi() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

    const navigate = useNavigate();
    const blazziLink = 'https://medium.com/@beccablazzreese/blazzi-finding-the-perfect-nail-technician-has-never-been-easier-0dcb18024f7a';
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

    const handleLink = () => {
        window.open(blazziLink, '_blank');
    };

    const handleNavigation = () => {
        navigate(projectsEndpoint);
    };


    return (
        <div className='app'>
            <Navbar />
            <div className='pageContent projectContent'>
                <div className='innerContent'>
                    <h1 className='pageHeader'>Blazzi</h1>
                    <h2 className='pageSubheader'>Masters capstone project for BYU MISM program</h2>
                    <div className={`projectDescriptionContainer ${isSmallWindow ? 'column' : ''}`}>
                        <div className='projectImageContainer'>
                            <img className='projectImage' src='/BlazziThumbnail.png' alt='BlazziLogo' />
                        </div>
                        <p className='projectFullDescription'>
                            Blazzi is an ios application that is aimed at self-employed nail technicians. It contains an advanced search functionality
                            that connects clients with the right nail techs designed specifically for the industry. Our team of 5 used a React Native
                            frontend and AWS, Node.js, and Postgres to build the API and database.<br />
                            <br />
                            I was the frontend team lead for this project, using the API created by our backend developers and we all consistantly worked
                            as a team to design and research our market.
                        </p>
                    </div>
                    <div className='skillsContainer'>
                        <h3 className='skillsHeader'>Skills</h3>
                        <p className='skills'>React Native  •  Javascript  •  HTML/CSS  •  AWS Cloud  •  PostgreSQL</p>
                    </div>
                    <div className='buttonContainer'>
                        <button onClick={handleLink} className='linkButton'>See Demo</button>
                        <button onClick={handleNavigation} className='backbutton'>See All Projects</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default Blazzi;