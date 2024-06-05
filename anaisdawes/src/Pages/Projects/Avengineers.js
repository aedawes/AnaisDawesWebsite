import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar.js';
import '../../CSS/Projects.css';
import Footer from '../../Components/Footer.js';
import { useNavigate } from 'react-router-dom';

function Avengineers() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/projects');
    };

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

    return (
        <div className='app'>
            <Navbar />
            <div className='pageContent projectContent'>
                <div className='innerContent'>
                    <h1 className='pageHeader'>Avengineers</h1>
                    <h2 className='pageSubheader'>Capstone project sponsered by Marvel and Disney StudioLAB</h2>
                    <div className={`projectDescriptionContainer ${isSmallWindow ? 'column' : ''}`}>
                        <div className='projectImageContainer'>
                            <img className='projectImage' src='/AvengineersThumbnail.png' alt='Avengineers' />
                        </div>
                        <p className='projectFullDescription'>
                            The goal of this project was to complete a prototype of a telepresence robot, imaginged with user stories, to provide
                            a more smooth process for creating movies. We worked as two teams of 5 and 6, one working on software (my team) and the other
                            on hardware. As the lead for the software aspect of the project and because of the satisfaction of our sponsors, my name was put on
                            a patent as an inventor.
                        </p>
                    </div>
                    <div className='skillsContainer'>
                        <h3 className='skillsHeader'>Skills</h3>
                        <p className='skills'>Python  •  C#  •  Team collaboration  •  AWS Cloud  •  Networking</p>
                    </div>
                    <h3 className='linkReplacement'>Due to the nature of this project (NDA), a demo or further images are not available</h3>
                    <div className='buttonContainer'>
                        <button onClick={handleNavigation} className='backbutton'>See All Projects</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Avengineers;