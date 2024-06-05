import React from 'react';
import Project from '../../Components/Project.js';

function Avengineers() {

    return (
        <div>
            <Project
                link={null}
                title='Avengineers'
                subtitle='Capstone project sponsered by Marvel and Disney StudioLAB'
                image='/AvengineersThumbnail.png'
                imageAlt='Avengineers Logo'
                description={
                    <p className='projectFullDescription'>
                        The goal of this project was to complete a prototype of a telepresence robot, imaginged with user stories, to provide
                        a more smooth process for creating movies. We worked as two teams of 5 and 6, one working on software (my team) and the other
                        on hardware. As the lead for the software aspect of the project and because of the satisfaction of our sponsors, my name was put on
                        a patent as an inventor.
                    </p>
                }
                skills='Python  •  C#  •  Team collaboration  •  AWS Cloud  •  Networking'
            />
        </div>
    );
}

export default Avengineers;