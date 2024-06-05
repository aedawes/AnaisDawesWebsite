import React from 'react';
import Project from '../../Components/Project.js';

function Set() {

    return (
        <div>
            <Project
                link='https://medium.com/@beccablazzreese/blazzi-finding-the-perfect-nail-technician-has-never-been-easier-0dcb18024f7a'
                title='Set'
                subtitle='A Swift mobile app that implements the card game titled "Set"'
                image='/SetThumbnail.png'
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
            />
        </div>
    );
}

export default Set;