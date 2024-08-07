import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar.js';
import '../CSS/About.css';
import Footer from '../Components/Footer.js';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import LoadingModal from '../Components/LoadingModal.js';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const resumeLink = 'https://anaisdawes-website-videos.s3.amazonaws.com/Resume_AnaisDawes.pdf';
    const images = [
        { src: '/AnaisProfile.png', alt: 'Professional picture of Anais' },
        { src: '/graduation.png', alt: 'Anais in her graduation gear' },
        { src: '/disneyBathroom.png', alt: 'Anais taking a mirror selfie' },
        { src: '/greece.png', alt: 'Anais in Greece' },
        { src: '/flowers.png', alt: 'Anais with flowers' },
        { src: '/anaisWithJuice.png', alt: 'Baby Anais drinking juice' }];

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsSmallWindow(isWindowSize(964));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        let imagesLoaded = 0;

        const handleImageLoad = () => {
            imagesLoaded += 1;
            if (imagesLoaded === images.length) {
                setLoading(false);
            }
        };

        images.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = handleImageLoad;
            img.onerror = handleImageLoad;
        });
    }, [images]);

    const handleDownload = () => {
        const url = resumeLink;
        window.open(url, '_blank');
    };

    const handleNavigation = (navEndpoint) => {
        navigate(navEndpoint);
    };

    return (
        <div className='app'>
            {loading ? <LoadingModal /> :
                <div>
                    <Navbar page='about' />
                    <div className='sectionContainer'>
                        <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                            <div className='projectContent'>
                                <div className={`sectionInnerContainer sectionContentContainer ${isSmallWindow ? 'vertical' : ''}`}>
                                    <div className={`introductionTextContainer ${isSmallWindow ? 'reverseOrder' : ''}`}>
                                        <h1 className='pageHeader'>Hi, I'm Anaïs!</h1>
                                        <h2 className='pageSubheader'>Software Engineer</h2>
                                        <p>
                                            I am a dedicated and skilled Front-End/Full Stack Software Developer,
                                            passionate about creating elegant, responsive, and user-centric applications. <br />
                                            <br />
                                            My expertise lies in crafting intuitive and visually appealing front-end code, ensuring a seamless user experience. I
                                            thrive on solving complex problems and the satisfaction of seeing my work come to life through effective and efficient code!
                                        </p>
                                    </div>
                                    <div className={`vertical ${isSmallWindow ? 'center extraBottomPadding' : ''}`}>
                                        <div className='introductionImageContainer'>
                                            <Carousel
                                                images={images}
                                                hasMediaButton={false}
                                                hasSizeButton={false}
                                                hasIndexBoard={false}
                                                hasThumbnails={false}
                                                hasDotButtons={'bottom'}
                                                leftIcon={
                                                    <div className='carouselIconBackground'>
                                                        <FontAwesomeIcon icon={faArrowLeft} className='carouselIcon' />
                                                    </div>
                                                }
                                                rightIcon={
                                                    <div className='carouselIconBackground'>
                                                        <FontAwesomeIcon icon={faArrowRight} className='carouselIcon' />
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sectionContainer'>
                        <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                            <div className='projectContent'>
                                <div className='sectionContentContainer'>
                                    <div className={`resumeHeaderContainer ${isSmallWindow ? 'vertical' : ''}`}>
                                        <h1 className='resumeHeader'>Experience</h1>
                                        <button className='resumeButton' onClick={handleDownload}>Download Resume</button>
                                    </div>
                                    <div className='fullWidthHorizontalLine' />
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Professional Projects</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <h4 className='resumeSubsubheader'>Blazzi - Lead Frontend Developer - 2024</h4>
                                            <p className='resumeDescription'>
                                                Led a team of five developers in frontend UI/UX development for a React Native app targeted towards the
                                                beauty industry. This project was undertaken as part of a year-long master's program.
                                            </p>
                                            <button className='resumeButton' onClick={() => handleNavigation('/projects/blazzi')}>View Project</button>
                                        </div>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <h4 className='resumeSubsubheader'>Disney Studio LAB - Software Engineer - 2023</h4>
                                            <p className='resumeDescription'>
                                                Collaborated with a team of 10 students to develop a prototype system enabling remote executive visits to movie sets. Led
                                                the networking and coding components of the project, contributing to it’s successful implementation. Nominated by my team
                                                to be listed as an inventor on a patent application resulting from the project’s innovation.
                                            </p>
                                            <button className='resumeButton' onClick={() => handleNavigation('/projects/avengineers')}>View Project</button>
                                        </div>
                                    </div>
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Professional Experience</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <ul className='list resumeDescription'>
                                                <li>headversity - Software Developer Intern</li>
                                                <li>BYU Computer Science - UX Lab Supervisor</li>
                                                <li>BYU IT - Database TA</li>
                                                <li>BYU Cybersecurity Research Lab - Website manager</li>
                                            </ul>
                                            <button className='resumeButton' onClick={handleDownload}>See more in my resume</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sectionContainer'>
                        <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                            <div className='projectContent'>
                                <div className='sectionContentContainer'>
                                    <h1 className='resumeHeader'>Skills and Certifications</h1>
                                    <div className='fullWidthHorizontalLine' />
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Skills</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <p>
                                                React.js  •  Javascript  •  HTML  •  CSS  •  Vue.js  •  git  •  React Native  •  Swift  •
                                                RESTful APIs  •  MySQL  •  SCRUM  •  UX Principles  •  Node.js  •  Jira  •  PostgreSQL  •
                                                Java  •  Python  •  Docker  •  AWS Technologies  •  CI/CD Pipeline
                                            </p>
                                        </div>
                                    </div>
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Certifications</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <ul className='list'>
                                                <li>Professional Scrum Master - scrum.org</li>
                                                <li>Telepresence Patent with Disney Marvel</li>
                                                <li>Phi Eta Sigma Honors Society (2018)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='sectionContainer'>
                        <div className={`pageContent ${isSmallWindow ? 'center' : ''}`}>
                            <div className='projectContent'>
                                <div className='sectionContentContainer'>
                                    <h1 className='resumeHeader'>Education</h1>
                                    <div className='fullWidthHorizontalLine' />
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Masters of Information Systems Management - Brigham Young University - 2024</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <p>
                                                In this program nicknamed the MISM, I spent a year doing an accelerated masters degree that emphasized in software
                                                development. I love this program as it gave me so many opportunities to work in professionally simulated  teams and
                                                put my skills to the test through mentored projects.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='subsectionContainer'>
                                        <h3 className='resumeSubheader'>Bachelors of Science in Information Technology - Brigham Young University - 2023</h3>
                                        <div className={isSmallWindow ? '' : 'indent'}>
                                            <p>
                                                This program gave me the technical skills that I need to be where I am today. The most important thing I learned through
                                                these years was to learn how to teach myself new technologies and skills and to be able to learn from my peers. This is one
                                                of the most vital skills in tech and will serve me for years to come!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            }
        </div>
    );
}

export default About;