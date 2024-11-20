import './ViewButton.css';


const ViewButton = ({ onClick }) => {
    return (
        <button 
            className="view-button"
            onClick={onClick}
        >
            View
        </button>
    );
};

export default ViewButton;