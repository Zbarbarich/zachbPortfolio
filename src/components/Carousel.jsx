import { useState } from 'react';
import Images from './Images';

const Carousel = ({ images, onClose }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
};

const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
};

return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
        <div className="modal">
            <button className="close-button" onClick={onClose}>&times;</button>
            <div className="modal-content">
                <div className="image-navigation">
                    <button onClick={handlePrevImage}>&larr;</button>
                    <Images imageUrl={images[currentImageIndex]} title={`Image ${currentImageIndex + 1}`} />
                    <button onClick={handleNextImage}>&rarr;</button>
                </div>
                <div className="dot-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>
                <div className="modal-body">
                    {children}
                </div>
                <a 
                    href="https://github.com/yourusername/yourrepo" 
                    className="github-link"
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    View on GitHub

                </a>
            </div>
        </div>
        </div>
    );
};

export default Carousel;

