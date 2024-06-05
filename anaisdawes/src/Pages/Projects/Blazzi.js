import React from 'react';
import Project from '../../Components/Project.js';

function Blazzi() {

    return (
        <div>
            <Project
                link='https://medium.com/@beccablazzreese/blazzi-finding-the-perfect-nail-technician-has-never-been-easier-0dcb18024f7a'
                title='Blazzi'
                subtitle='Masters capstone project for BYU MISM program'
                image='/BlazziThumbnail.png'
                imageAlt='Blazzi Logo'
                description={
                    <p className='projectFullDescription'>
                        Blazzi is an ios application that is aimed at self-employed nail technicians. It contains an advanced search functionality
                        that connects clients with the right nail techs designed specifically for the industry. Our team of 5 used a React Native
                        frontend and AWS, Node.js, and Postgres to build the API and database.<br />
                        <br />
                        I was the frontend team lead for this project, using the API created by our backend developers and we all consistantly worked
                        as a team to design and research our market.
                    </p>
                }
                skills='React Native  •  Javascript  •  HTML/CSS  •  AWS Cloud  •  PostgreSQL'
            />
        </div>
    );
}

export default Blazzi;