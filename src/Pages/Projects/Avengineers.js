import React, { useState, useEffect } from 'react';
import Project from '../../Components/Project.js';
import LoadingModal from '../../Components/LoadingModal.js';

function Avengineers() {
    const [loading, setLoading] = useState(true);

    const image = '/AvengineersThumbnail.png';

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
            {loading && <LoadingModal />}
            <Project
                link={null}
                title='Avengineers'
                subtitle='Capstone project sponsered by Marvel and Disney StudioLAB'
                image={image}
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