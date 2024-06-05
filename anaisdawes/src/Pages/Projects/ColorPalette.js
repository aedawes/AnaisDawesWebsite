import React from 'react';
import Project from '../../Components/Project.js';

function ColorPalette() {

    return (
        <div>
            <Project
                link={null}
                title='Color Palette Generator'
                subtitle='A mock site based off of Coolers.com that generates color palettes'
                image='/ColorThumbnail.png'
                imageAlt='Color Palette homepage'
                description={
                    <p className='projectFullDescription'>
                        This was a personal project to put my React and CSS skills to the test. I took a look at the inspiration site that I often use to generate
                        the colors for all my sites and I implemented a similar site with a few changes. The main features include a dark mode toggle, a random color
                        generator with the ability to adjust, lock, and move colors, and a contrast generator to ensure that the colors are accessible. <br />
                    </p>
                }
                skills='React  •  HTML/CSS  •  CSS Animations  •  Javascript'
                githubLink='https://github.com/aedawes/colors'
            />
        </div>
    );
}

export default ColorPalette;