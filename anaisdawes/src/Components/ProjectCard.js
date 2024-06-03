import '../CSS/ProjectCard.css'

function ProjectCard({ image, path, projectName, projectDescription }) {
    return (
        <>
            <a href={path} className='card'>
                <div className='cardImageContainer'>
                    <img className='cardImage' src={image} alt='' />
                </div>
                <div className='cardContent'>
                    <h1 className='projectHeader'>{projectName}</h1>
                    <p className='projectDescription'>{projectDescription}</p>
                </div>
            </a>
        </>
    );
}

export default ProjectCard;
