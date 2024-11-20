import './Modal.css';
import { useState } from 'react';
import Images from './Images';

const Modal = ({ onClose, children, project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };
    
    const handlePrevImage = () => {
        setCurrentImageIndex(prev => 
            prev === 0 ? project.image.length - 1 : prev - 1
        );
    };
    
    const handleNextImage = () => {
        setCurrentImageIndex(prev => 
            prev === project.image.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal">
                <button className="close-button" onClick={onClose}>&times;</button>
                <div className="modal-content">
                    {project.image && project.image.length > 0 && (
                        <>
                            <div className="image-navigation">
                                <button onClick={handlePrevImage}>&larr;</button>
                                <Images 
                                    imageUrl={project.image[currentImageIndex]} 
                                    title={`Image ${currentImageIndex + 1}`} 
                                />
                                <button onClick={handleNextImage}>&rarr;</button>
                            </div>
                            <div className="dot-indicators">
                                {project.image.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentImageIndex(index)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;