import React, { useState, useEffect } from 'react';
import Project from '../../Components/Project.js';
import LoadingModal from '../../Components/LoadingModal.js';

function Portfolio() {

    const [loading, setLoading] = useState(true);

    const image = '/portfolioThumbnail.png';

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
                    mediumLink='https://medium.com/@anais.dawes_58862/portfolio-site-4229fe23add3'
                    title='Portfolio Site'
                    subtitle='This website!'
                    image={image}
                    imageAlt='Snapshot of my website'
                    description={
                        <p className='projectFullDescription'>
                            This portfolio is a project that has been in the works for years. The complete demo is of course the
                            site you are on right now, but if you would like to read more, click the link below to read about the
                            challenges and process of how I created the site.<br />
                            <br />
                            The site is fully responsive and features a dark mode toggle, live demos, and experimental components.
                            I continute to update and improve the site as I learn more as a software engineer.
                        </p>
                    }
                    skills='React  •  Javascript  •  HTML/CSS  •  AWS Cloud'
                />
            }
        </div>
    );
}

export default Portfolio;