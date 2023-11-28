import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrendingStyles = () => {
  useEffect(() => {
    AOS.init();
  })
  const imageUrls = [
    'pics-2.jpg',
    'pics-3.jpg',
    'pics-4.jpg',
    'team-1.jpg',
    'team-2.jpg',
    'team-3.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (currentImageIndex === imageUrls.length - 1) {
      setCurrentImageIndex(0); // Reset to the first image when reaching the end
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imageUrls.length - 1 : currentImageIndex - 1
    );
  };

  const imageWidth = 270; // Width of each image
  const containerWidth = imageUrls.length * imageWidth;

  const headingStyle = {
    marginTop: '7rem',
    color: '#000000',
    fontWeight: 'bold',
    textShadow: '-20px -20px 3px rgba(0, 0, 0, 0.1)',
  };
  const buttonStyle = {
    marginTop: '2rem',
    backgroundColor: 'white',
    color:'black',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '1rem',
    transition: 'background-color 0.6s ease-out'
  };
    


  return (
    <div >
      <h2
       style={headingStyle}>TRENDING STYLES</h2>
      <div
        className="image-carousel"
        style={{
          overflow: 'hidden',
          height: '300px',
          marginTop: '2rem',
          position: 'relative',
        }}
      >
        <div
          className="image-container "
          style={{
            display: 'flex',
            width: `${containerWidth}px`,
            transform: `translateX(-${currentImageIndex * imageWidth}px)`,
            transition: 'transform 0.5s ease-in-out',
          }}
        >
          {imageUrls.concat(imageUrls).map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Trend ${index + 1}`}
              style={{
                width: `${imageWidth}px`,
                height: '300px',
                margin: '3px',
                borderRadius: '4px',
              }}
            />
          ))}
        </div>
      </div>
      <button
       className="btn btn-outline-danger"
        style={buttonStyle}
        onClick={prevImage}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e82d2d';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = 'black';
        }}
      >
       {'<< Prev' } 
      </button>
      <button
        className="btn btn-outline-danger"
        style={buttonStyle}
        onClick={nextImage}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#e82d2d';
          e.target.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'white';
          e.target.style.color = 'black';
        }}
      >
        {'Next >>' } 
      </button>
    </div>
  );
};

export default TrendingStyles;
