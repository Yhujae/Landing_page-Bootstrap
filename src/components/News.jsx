import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {  HandThumbsUp} from 'react-bootstrap-icons';

const headingStyle = {
  marginTop: '7rem',
  color: '#000000',
  fontWeight: 'bold',
  textShadow: '-20px -20px 3px rgba(0, 0, 0, 0.1)',
};


function News() {
  useEffect(() => {
    AOS.init();
  }, []);
  const commonBackgroundColor = '#ffffff';
  const hoverBackgroundColor = '#cc1616';
  const hoverTextColor = '#ffffff'; // Set text color to white when hovering the container
  const commonTextColor = '#000000'; // Set text color to black for both cases
  const hoverTextSize = '16px';
  const boldFontSize = '36px';
  const boxShadow = '0 0 15px rgba(0, 0, 0, 0.1)'; // Box shadow style

  const hoverTexts = [
    (
      <div>
        <span className="hover-span p-4">01</span>
        <h4>Topic Title</h4>
        <p>Some description here.</p>
      </div>
    ),
    (
      <div>
        <span className="hover-span">02</span>
        <h4>Topic Title</h4>
        <p>Some description here.</p>
      </div>
    ),
    (
      <div>
        <span className="hover-span">03</span>
        <h4>Topic Title</h4>
        <p>More description text.</p>
      </div>
    ),
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id='community' className="container mb-5 mt-2">
         <h2  className="aos-init aos-animate" data-aos="fade-up"
         style={headingStyle}>TRENDING TOPICS</h2>
      <style>
        {`
          .news-item.hovered .hover-text {
            transform: translateY(0);
            transition: transform 0.2s ease-in-out, color 0.1s ease-in-out;
          }

          .news-item.hovered:hover .hover-text {
            transform: translateY(-10px); /* Adjust the value as needed for the desired effect */
            color: ${hoverTextColor}; /* Change text color to white when hovering the container */
          }

          .news-item.hovered:hover .hover-span {
            transform: translateY(-10px); /* Adjust the value as needed for the desired effect */
            color: ${hoverTextColor}; /* Change text color to white when hovering the container */
          }

          .hover-span {
            font-size: ${boldFontSize}; /* Make span big and bold */
            color: red; /* Set the initial color of the span to red */
            transition: color 0.2s ease-in-out;
            font-size: 28px;
          font-weight: 700;
          }

          .hover-span:hover, .hover-item:hover .hover-span {
            color: white; /* Change the color of the span to white on hover */
          }

          .hover-text {
            color: ${commonTextColor};
            font-size: ${hoverTextSize};
            display: 'block';
          }
        `}
      </style>
      <div className="row aos-init aos-animate" data-aos="fade-up">
        {[0, 1, 2].map((index) => (
          <div
            className="col-md-4"
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`news-item mb-3 mt-3 d-flex justify-content-center align-items-center  ${
                hoveredIndex === index ? 'hovered' : ''
              }`}
              style={{
                backgroundColor: hoveredIndex === index ? hoverBackgroundColor : commonBackgroundColor,
                height: '300px',
                boxShadow: boxShadow,
              }}
            >
              <div
                className="hover-text text-center"
              >
                {hoverTexts[index]} 
                <button 
                    className="btn btn-outline-danger text-dark bg-light btn-get-started p-2 mt-3 scrollto" 
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = 'black';
                    }}>
                             Read More
                </button> 
                <div className="btn btn-outline-danger bg-light p-2 text-dark mt-3 mx-2"
                   onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'black';
                  }}>
                      <HandThumbsUp />
                    </div>
                 </div>
               </div>
             </div>
            ))}
        </div>
     </div>
  );
}

export default News;
