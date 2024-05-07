import '../CSS/ProjectCard.css'

function ProjectCard({ image, projectName, projectDescription }) {
    return (
        <>
            <div className='card'>
                <div className='cardImageContainer'>
                    <img className='cardImage' src={image} alt='' />
                </div>
                <div className='cardContent'>
                    <h1 className='projectHeader'>{projectName}</h1>
                    <p classname='projectDescription'>{projectDescription}</p>
                </div>
            </div>
        </>
    );
}

export default ProjectCard;
