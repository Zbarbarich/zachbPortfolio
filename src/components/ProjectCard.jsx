import { useState } from 'react';
import ViewButton from './ViewButton';
import Modal from './Modal';
import './ProjectCard.css';
import Images from './Images';
const ProjectCard = ({ title, description, imageUrl, technologies, shortDescription }) => {
    const [showModal, setShowModal] = useState(false);

    // Create a project object that matches what Modal expects
    const projectData = {
        title,
        shortDescription,
        description,
        image: [
            imageUrl,
            imageUrl.replace('a.png', 'b.png'),
            imageUrl.replace('a.png', 'c.png'),
            imageUrl.replace('a.png', 'd.png')
        ],
        technologies
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="project-card">
            <div className="project-image-container">
                <Images imageUrl={imageUrl} title={title} />
            </div>
            
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-short-description">{shortDescription}</p>
                
                <div className="project-technologies">
                    {technologies.map((tech, index) => (
                        <span key={index} className="technology-tag">
                            {tech}
                        </span>
                    ))}
                </div>

                <ViewButton onClick={handleOpenModal} />
            </div>

            {showModal && (
                <Modal 
                    project={projectData} 
                    onClose={handleCloseModal}
                >
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="project-technologies">
                        {technologies.map((tech, index) => (
                            <span key={index} className="technology-tag">
                                {tech}
                            </span>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default ProjectCard;
