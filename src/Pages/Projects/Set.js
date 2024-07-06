import React, { useState, useEffect } from 'react';
import Project from '../../Components/Project.js';
import LoadingModal from '../../Components/LoadingModal.js';

function Set() {

    const [loading, setLoading] = useState(true);

    const image = '/SetThumbnail.png';

    useEffect(() => {

        const handleImageLoad = () => {
            setLoading(false);
        };

        const img = new Image();
        img.src = image;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
    }, [image]);

    return (
        <div>
            {loading ? <LoadingModal /> :
                <Project
                    link={null}
                    demoRoute='/projects/SetDemo'
                    title='Set'
                    subtitle='A Swift mobile app that implements the card game titled "Set"'
                    image={image}
                    imageAlt='Image of Set app'
                    description={
                        <p className='projectFullDescription'>
                            This was a personal project to learn Swift UI and implement a MVVM architecture. The game of Set is a card game where players
                            match cards based on color, shape, and number. It features animations and was built to be responsive to different screen sizes including iPads. <br />
                            <br />
                            To complete this game, players must find a set of three cards where each of the four features are either all the same or all different (much akin to the set
                            data structure).
                        </p>
                    }
                    skills='Swift  •  SwiftUI  •  XCode  •  MVVM'
                    githubLink='https://github.com/aedawes/set-game'
                />
            }
        </div>
    );
}

export default Set;