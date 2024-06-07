import React, { useState, useEffect } from 'react';
import Navbar from '../../../Components/Navbar.js';
import '../../../CSS/Projects.css';
import Footer from '../../../Components/Footer.js';
import { useNavigate } from 'react-router-dom';

function RecipeDemo() {

    const navigate = useNavigate();

    const handleNavigation = (navEndpoint) => {
        navigate(navEndpoint);
    };


    return (
        <div className='app'>
            <Navbar />
            <div className='pageContent projectContent'>
                <div className='innerContent'>
                    <h1 className='pageHeader'>Recipe Demo</h1>
                    <h2 className='pageSubheader'>View the video to see a demo of the recipe app</h2>
                    <div className='demoVideo'>
                        <video controls>
                            <source src='https://anaisdawes-website-videos.s3.amazonaws.com/recipeDemo.mp4' type='video/mp4' />
                            Your browser does not support this video.
                        </video>
                    </div>
                    <div className='buttonContainer'>
                        <button onClick={() => handleNavigation('/projects/Recipe')} className='backbutton'>Back to Project Description</button>
                        <button onClick={() => handleNavigation('/projects')} className='backbutton'>See All Projects</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default RecipeDemo;