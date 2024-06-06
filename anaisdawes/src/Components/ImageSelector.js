import '../CSS/About.css'

function ImageSelector({ image, imageAlt, handleImageSelection, selectedImage }) {
    return (
        <div
            onClick={() => handleImageSelection(image)}
            className='imageToSelectContainer'
        >
            <div className={selectedImage === image ? 'selectedImage' : 'hidden'} />
            <img className='imageSelection' src={image} alt={imageAlt} />
        </div>
    );
}

export default ImageSelector;
