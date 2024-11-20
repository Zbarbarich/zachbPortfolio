import './Images.css';

const Images = ({ imageUrl, title }) => {
  return (
    <div style={{ maxWidth: 'relative', height: 'relative', position: 'relative', margin: '0 auto' }}>
      <img 
        src={imageUrl} 
        alt={title} 
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
      />
    </div>
  );
};

export default Images;