import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar.js';
import '../../../CSS/Projects.css';
import Footer from '../../../Components/Footer.js';
import LoadingModal from '../../../Components/LoadingModal.js';
import { useNavigate } from 'react-router-dom';

function TodoTemplateDemo() {
    const [loading, setLoading] = useState(true);
    const videoRef = useRef();

    const navigate = useNavigate();
    const video = 'https://anaisdawes-website-videos.s3.amazonaws.com/todoTemplateDemo.mp4';

    useEffect(() => {

        const handleVideoLoad = () => {
            setLoading(false);
        };

        if (videoRef.current) {
            videoRef.current.onloadedmetadata = handleVideoLoad;
            videoRef.current.onerror = handleVideoLoad;
        }
    }, [video]);

    const handleNavigation = (navEndpoint) => {
        navigate(navEndpoint);
    };


    return (
        <div className='app'>
            {loading && <LoadingModal />}
            <Navbar page='projects' />
            <div className='pageContent projectContent'>
                <div className='innerContent'>
                    <h1 className='pageHeader'>Todo Template</h1>
                    <h2 className='pageSubheader'>View the video to see a demo of my basic Todo Template</h2>
                    <div className='demoVideo'>
                        <video ref={videoRef} controls>
                            <source src={video} type='video/mp4' />
                            Your browser does not support this video.
                        </video>
                    </div>
                    <div className='buttonContainer'>
                        <button onClick={() => handleNavigation('/projects/TodoTemplate')} className='backbutton'>Back to Project Description</button>
                        <button onClick={() => handleNavigation('/projects')} className='backbutton'>See All Projects</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default TodoTemplateDemo;