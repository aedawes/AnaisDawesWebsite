import React, { useState, useEffect } from 'react';
import Project from '../../Components/Project.js';
import LoadingModal from '../../Components/LoadingModal.js';

function TodoTemplate() {

    const [loading, setLoading] = useState(true);

    const image = '/TodoThumbnail.png';

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
                    demoRoute='/projects/TodoTemplateDemo'
                    title='Todo Template'
                    subtitle='A Vue.js template to implement a SQL database'
                    image={image}
                    imageAlt='Image of Todo template'
                    description={
                        <p className='projectFullDescription'>
                            What is a portfolio without a todo app, right?<br />
                            <br />
                            This was a project that I created when I helped teach a class on databases. It is a very basic UI that was designed to be adaptable to differing
                            student needs. Students in the class created their own app ideas so they needed a template to use that they could mould to their own projects but
                            still have a reference for the basic CRUD operations.
                        </p>
                    }
                    skills='Vue.js  •  Javascript  •  MySQL  •  Chakra UI'
                    githubLink='https://github.com/aedawes/Todo'
                />
            }
        </div>
    );
}

export default TodoTemplate;