import React, { useState, useEffect } from 'react';
import Project from '../../Components/Project.js';
import LoadingModal from '../../Components/LoadingModal.js';

function Recipe() {

    const [loading, setLoading] = useState(true);

    const image = '/recipeThumbnail.png';

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
                demoRoute='/projects/RecipeDemo'
                title='Recipe App'
                subtitle='A Swift mobile app that allows users to manage recipes'
                image={image}
                imageAlt='Image of Recipe app'
                description={
                    <p className='projectFullDescription'>
                        This was a personal project to learn Swift UI and implement all four CRUD operations within an ios app. This is a recipe app
                        that allows users to add recipes, view existing recipes, edit their recipes, and delete recipes. The app uses a mock database to store
                        the recipes rather than a real database for the sake of resources and simplicity. <br />
                        <br />
                        There are definitely more bugs than I would like but as I was new to Swift when building this, I am happy with the progress I made.
                    </p>
                }
                skills='Swift  •  SwiftUI  •  XCode  •  CRUD •  MockDatabase'
                githubLink='https://github.com/aedawes/SwiftRecipeApp'
            />
        </div>
    );
}

export default Recipe;